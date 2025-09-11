# Metanet Obsidian Plugins Repository

Welcome to the Metanet Obsidian Plugins Repository, a collection of plugins designed to enhance your Obsidian experience. These plugins use the [`@bsv/sdk`](https://www.npmjs.com/package/@bsv/sdk) to integrate with your wallet for secure storage and other capabilities.

## Available Plugins

### [Secure Notes Plugin](./secure-notes-plugin)

- **Save Note to Wallet** – Persist the current note's contents to the wallet's `LocalKVStore` in a local `notes` basket.
- **Load Note from Wallet** – Replace the current note with the encrypted version stored in the wallet.

## Getting Started for Developers

Interested in contributing or building your own plugin with the `@bsv/sdk`? Follow these steps:

### Prerequisites

- Ensure [Node.js](https://nodejs.org/) is installed (version 16 or higher recommended).
- Get familiar with the Obsidian plugin development environment.

### Development Setup

1. **Clone the Repository** – Clone this repository to your desired development location. For testing convenience, consider cloning it into your Obsidian vault's plugins folder, e.g., `YourVault/.obsidian/plugins/`.
2. **Install Dependencies** – Navigate to the plugin's directory you wish to work on, such as `secure-notes-plugin`, and run `npm install` to install necessary dependencies.
3. **Start Development** – Run `npm run dev` to compile TypeScript (`main.ts`) into JavaScript (`main.js`) in watch mode. Changes you make will automatically recompile.

### Testing Plugins

1. **Load in Obsidian** – Open Obsidian, go to `Settings` > `Community Plugins`, and ensure the plugin you're developing is listed and enabled.
2. **Feature Testing** – Use the plugin's features, such as the commands "Save Note to Wallet" and "Load Note from Wallet" in the Secure Notes Plugin, to test functionality.

## Documentation & Resources

- For an in-depth guide on Obsidian plugin development, visit the [official API documentation](https://github.com/obsidianmd/obsidian-api).
- To learn more about the `@bsv/sdk`, see the [package on npm](https://www.npmjs.com/package/@bsv/sdk).

## License

All code in this repository is licensed under the Open BSV License.
