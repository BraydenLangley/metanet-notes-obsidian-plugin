# Babbage Obsidian Plugins Repository

Welcome to the Babbage Obsidian Plugins Repository, a collection of plugins designed to enhance your Obsidian experience. Leveraging the power of the Babbage SDK, these plugins integrate seamlessly with your MetaNet identity, offering advanced functionalities such as secure note encryption, among other potential future features.

## Available Plugins

### [Secure Notes Plugin](https://github.com/p2ppsr/babbage-obsidian-plugins/tree/master/secure-notes-plugin)

- **Encrypt Note**: Securely encrypt selected text within your notes using keys derived from your MetaNet identity for top-tier data protection.
- **Decrypt Note**: Effortlessly decrypt your encrypted text to its original form, maintaining the integrity and confidentiality of your information.

## Getting Started for Developers

Are you interested in contributing to the Babbage Obsidian Plugins or developing your own plugin using the Babbage SDK? Follow these steps to begin:

### Prerequisites

- Ensure [Node.js](https://nodejs.org/) is installed (version 16 or higher recommended).
- Get familiar with the Obsidian plugin development environment.

### Development Setup

1. **Clone the Repository**: Clone this repository to your desired development location. For testing convenience, consider cloning it into your Obsidian vault's plugins folder, e.g., `YourVault/.obsidian/plugins/`.

2. **Install Dependencies**: In your terminal, navigate to the plugin's directory you wish to work on, such as `secure-notes-plugin`, and run `npm install` to install necessary dependencies.

3. **Start Development**: Run `npm run dev` to compile TypeScript code (`main.ts`) into JavaScript (`main.js`) in watch mode. Changes you make will automatically recompile.

### Testing Plugins

1. **Load in Obsidian**: Open Obsidian, go to `Settings` > `Community Plugins`, and ensure the plugin you're developing is listed and enabled.

2. **Feature Testing**: Use the plugin's features, such as the context menu options "Encrypt Note" and "Decrypt Note" in the Secure Notes Plugin, to test functionality.

## Documentation & Resources

- For an in-depth guide on Obsidian plugin development, visit the [official API documentation](https://github.com/obsidianmd/obsidian-api).
- To utilize Babbage SDK functionalities, explore the TypeScript [Babbage SDK GitHub repository](https://github.com/p2ppsr/babbage-sdk-ts) or the comprehensive [Project Babbage documentation](https://projectbabbage.com/docs).

## License

All code in this repository is licensed under the Open BSV License.
