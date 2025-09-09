# Secure Notes Plugin for Obsidian

This plugin stores notes in the user's wallet using the [`@bsv/sdk`](https://www.npmjs.com/package/@bsv/sdk) `LocalKVStore`. Each note is saved in the local `notes` basket and encrypted by the wallet. Notes can be loaded back into the vault at any time.

## Features

- **Save Note to Wallet** – Persist the current note's contents to the wallet's `LocalKVStore`.
- **Load Note from Wallet** – Replace the current note with the stored encrypted version from the wallet.

## Development

1. Install dependencies: `npm install`
2. Build the plugin: `npm run build`
3. Copy the compiled files into your Obsidian vault's `.obsidian/plugins` folder.

## License

Open BSV License.
