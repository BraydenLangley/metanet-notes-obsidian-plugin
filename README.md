# Metanet Notes Plugin for Obsidian

A powerful Obsidian plugin that synchronizes your notes with the BSV blockchain using the [`@bsv/sdk`](https://www.npmjs.com/package/@bsv/sdk) `LocalKVStore`. Your notes are encrypted and stored in your wallet's local storage, enabling seamless synchronization across devices and applications while maintaining complete privacy and ownership.

## Purpose

This plugin bridges the gap between Obsidian and the BSV ecosystem by:
- **Decentralized Storage**: Store notes in your personal BSV wallet rather than centralized cloud services
- **Cross-Application Sync**: Share notes between Obsidian and other BSV applications using the same wallet
- **Privacy-First**: All notes are encrypted client-side before storage
- **Ownership**: You control your data through your BSV wallet

## Requirements

**Important**: This plugin requires either **Metanet Desktop** or **Metanet Mobile** to be installed and running on your system.

The plugin uses the `@bsv/sdk` `LocalKVStore` which depends on a BSV wallet infrastructure provided by:

- **[Metanet Desktop](https://github.com/bsv-blockchain/metanet-desktop)** - Desktop wallet application for Windows, macOS, and Linux
- **[Metanet Mobile](https://github.com/bsv-blockchain/metanet-mobile)** - Mobile wallet application for iOS and Android

Without one of these wallet applications running, the plugin will not be able to:
- Create or access the encrypted note storage
- Perform wallet-based encryption/decryption
- Sync notes across devices and applications

### Installation Order
1. First, install and set up **Metanet Desktop** or **Metanet Mobile**
2. Ensure your wallet is properly configured and funded (if needed)
3. Then install and configure this Obsidian plugin

## Features

### 🔄 **Automatic Synchronization**
- **Auto-save**: Automatically saves notes as you type (configurable debounce)
- **Smart Change Detection**: Only saves when content actually changes
- **Auto-sync**: Detects and creates new notes from external applications
- **File Mirroring**: Keeps wallet in sync with Obsidian file operations (rename/delete)

### 💾 **Manual Operations**
- **Save to Wallet**: Manually save the current note to your wallet
- **Load from Wallet**: Replace current note with wallet version
- **Sync from Wallet**: Refresh current note with latest wallet content
- **Restore Missing Notes**: Recreate notes that exist in wallet but not in vault

### 🔍 **Smart Detection**
- **New Note Detection**: Automatically discovers notes added by external applications
- **Content Comparison**: Prevents unnecessary operations when content is identical
- **Conflict Resolution**: Clear feedback when sync operations occur

### ⚙️ **Flexible Configuration**
- **Save Modes**: Choose between automatic or manual saving
- **Trigger Options**: Save on file switch, window blur, or app quit
- **Auto-creation Control**: Enable/disable automatic creation of new notes
- **File Mirroring**: Control whether file operations sync to wallet

## Usage Instructions

### Getting Started

1. Install the plugin in your Obsidian vault
2. The plugin will automatically create a `LocalKVStore` with the identifier `'notes'`
3. All notes are encrypted using your wallet's key derivation

### Commands (via Command Palette - Ctrl/Cmd+P)

- **"Save note to wallet"** - Manually save the current note
- **"Load note from wallet"** - Replace current note with wallet version
- **"Sync note from wallet"** - Refresh current note with latest wallet content
- **"Restore note from wallet"** - Browse and restore any note from wallet
- **"Detect and create new notes from wallet"** - Manually check for new notes

### Automatic Behaviors

When **Auto-save mode** is enabled:
- Notes save automatically after stopping typing (configurable delay)
- Optional save triggers on file switching, window blur, or app close
- New notes from external apps are detected every 30 seconds

### External Application Integration

Other BSV applications can add notes by:
1. Using the same `LocalKVStore` with identifier `'notes'`
2. Storing content with the file path as the key
3. Adding the path to the index key `'__wallet_index__'`

## Configuration Options

Access settings via **Settings → Plugin Options → Metanet Notes**

### Save Behavior
- **Save Mode**: Choose "Auto-save" or "Manual only"
- **Auto-save Debounce**: Delay in milliseconds after last edit (default: 1000ms)
- **Save on File Switch**: Auto-save when switching between files
- **Save on Window Blur**: Auto-save when Obsidian loses focus
- **Save on Quit**: Attempt save when closing Obsidian

### Synchronization
- **Auto-create New Notes**: Automatically create notes found in wallet
- **Mirror Deletes to Wallet**: Remove wallet copies when files are deleted in Obsidian
- **Prompt Before Overwriting**: Show confirmation before replacing file contents (future feature)

## Use Cases

### Personal Knowledge Management
- Sync your personal notes across multiple devices using your BSV wallet
- Access notes from both Obsidian and BSV-compatible applications

### Collaborative and Cross-Platform Workflows
- Share note collections by sharing basket access across apps.
- Use Obsidian on desktop and Metanet Mobile seamlessly
- Maintain consistent note access regardless of platform

### Backup and Recovery
- Your notes are backed up in your wallet's persistent storage
- Restore entire note collections even if Obsidian vault is lost

## Development

1. Install dependencies: `npm install`
2. Build the plugin: `npm run build`
3. Copy the compiled files into your Obsidian vault's `.obsidian/plugins/metanet-notes/` folder
4. Enable the plugin in Obsidian settings

## Technical Details

- **Storage**: Uses `@bsv/sdk` `LocalKVStore` with basket identifier `'notes'`
- **Encryption**: All content encrypted client-side using [BRC-42](https://github.com/bitcoin-sv/BRCs/blob/master/key-derivation/0042.md) key-derivation and [BRC-2](https://github.com/bitcoin-sv/BRCs/blob/master/wallet/0002.md) encryption.
- **Indexing**: Maintains a searchable index of all stored note paths
- **Change Detection**: Tracks content hashes to prevent unnecessary operations
- **Error Handling**: Graceful fallbacks and user-friendly error messages

## License

Open BSV License.
