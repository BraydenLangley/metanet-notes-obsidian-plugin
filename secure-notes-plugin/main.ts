import { Plugin } from 'obsidian';
import { encrypt, decrypt } from '@babbage/sdk-ts';

/**
 * Adds the ability to encrypt / decrypt Obsidian notes using the Babbage SDK
 */
export default class BabbageEncryptionPlugin extends Plugin {
	async onload() {

		// Register some simple events
		this.registerEvent(
			this.app.workspace.on('editor-menu', (menu, editor, view) => {
				menu.addItem((item) => {
					item.setTitle('Encrypt Note')
						.setIcon('lock')
						.onClick(async () => {
							// Get the current selection
							const selection = editor.getSelection();
							// Proceed only if there is some text selected
							if (selection) {
								try {
									const encryptedContent = await this.encryptNoteContent(selection);
									editor.replaceSelection(encryptedContent);
								} catch (error) {
									console.error("Encryption error:", error);
								}
							} else {
								console.log('No text selected');
							}
						});
				});
				menu.addItem((item) => {
					item.setTitle('Decrypt Note')
						.setIcon('unlock')
						.onClick(() => {
							// Decrypt the selected text
							const selection = editor.getSelection()
							// Proceed only if there is some text selected
							if (selection) {
								try {
									this.decryptNoteContent(selection).then((decryptedContent) => {
										editor.replaceSelection(decryptedContent);
									});
								} catch (error) {
									console.error("Encryption error:", error);
								}
							} else {
								console.log('No text selected');
							}
						});
				});
			})
		);

	}

	/**
	 * Encrypt selected note content
	 * @param {string} plaintext the plaintext to encrypt
	 * @returns {Promise<string>} the encrypted note text
	 */
	async encryptNoteContent(plaintext: string): Promise<string> {
		try {
			const encryptedData = await encrypt({
				plaintext: Buffer.from(plaintext),
				protocolID: [1, 'Obsidian'],
				keyID: '1',
				returnType: 'string'
			});
			return encryptedData as string;
		} catch (error) {
			console.error('Encryption error:', error);
			return '';
		}
	}

	/**
	 * Decrypt the selected not content
	 * @param {string} ciphertext the ciphertext to decrypt
	 * @returns {Promise<string>} the decrypted text
	 */
	async decryptNoteContent(ciphertext: string): Promise<string> {
		try {
			const decryptedData = await decrypt({
				ciphertext,
				protocolID: [1, 'Obsidian'],
				keyID: '1',
				returnType: 'string'
			});
			return decryptedData as string;
		} catch (error) {
			console.error('Decryption error:', error);
			return '';
		}
	}
}