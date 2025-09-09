import { Plugin, Notice, TFile } from 'obsidian';
import { LocalKVStore } from '@bsv/sdk';

/**
 * Provides commands to save and load notes using the wallet's LocalKVStore.
 */
export default class WalletNotePlugin extends Plugin {
    private store: LocalKVStore;

    async onload() {
        this.store = new LocalKVStore(undefined, 'notes');

        this.addCommand({
            id: 'save-note-to-wallet',
            name: 'Save note to wallet',
            callback: () => this.saveActiveFile()
        });

        this.addCommand({
            id: 'load-note-from-wallet',
            name: 'Load note from wallet',
            callback: () => this.loadActiveFile()
        });
    }

    private async saveActiveFile() {
        const file = this.app.workspace.getActiveFile();
        if (!(file instanceof TFile)) {
            new Notice('No active file to save.');
            return;
        }
        const content = await this.app.vault.read(file);
        try {
            await this.store.set(file.path, content);
            new Notice('Note saved to wallet.');
        } catch (e) {
            console.error('Saving note failed', e);
            new Notice('Failed to save note.');
        }
    }

    private async loadActiveFile() {
        const file = this.app.workspace.getActiveFile();
        if (!(file instanceof TFile)) {
            new Notice('No active file to load.');
            return;
        }
        try {
            const value = await this.store.get(file.path);
            if (typeof value === 'string') {
                await this.app.vault.modify(file, value);
                new Notice('Note loaded from wallet.');
            } else {
                new Notice('No note stored for this file.');
            }
        } catch (e) {
            console.error('Loading note failed', e);
            new Notice('Failed to load note.');
        }
    }
}