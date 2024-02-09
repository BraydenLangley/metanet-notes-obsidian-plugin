# Secure Notes Plugin for Obsidian

Enhance your note-taking experience with the highest level of privacy. The Secure Notes Plugin for Obsidian introduces robust encryption and decryption functionalities directly into your workflow. Utilizing the cutting-edge Babbage SDK, this plugin leverages your MetaNet identity to secure your notes, ensuring that your sensitive information remains confidential and protected.

## Features

- Encrypt Note: Securely encrypt selected text within your notes using keys derived from your MetaNet identity, ensuring that your data is protected by state-of-the-art security measures.
- Decrypt Note: Seamlessly decrypt previously encrypted text, restoring it to its original state with the assurance of your data's integrity and confidentiality.

## Quick Start for Plugin Developers

Interested in enhancing the Secure Notes Plugin or integrating similar security features into your projects? Here's how to get started:

### Prerequisites
- Ensure you have Node.js installed (v16 or higher recommended).
- Familiarize yourself with Obsidian's plugin development environment.

### Setup
1. Clone and Prepare: Clone this repository into your desired development directory. For ease of testing, consider cloning it directly into your Obsidian vault's plugin folder (YourVault/.obsidian/plugins/secure-notes-plugin).
2. Install Dependencies: Navigate to the cloned directory in your terminal and run npm install to fetch all necessary dependencies.
3. Development Mode: Execute npm run dev to compile the TypeScript code (main.ts) into JavaScript (main.js) in watch mode. Any changes you make to the source code will automatically recompile.

### Testing Your Plugin
1. Load in Obsidian: With Obsidian open, navigate to Settings > Community Plugins and ensure the Secure Notes Plugin is listed and enabled.
2. Use the Features: Right-click to access the context menu within a note. You should see the "Encrypt Note" and "Decrypt Note" options. Select text and use these options to test the encryption and decryption functionalities.

## Documentation and Further Reading

For a deep dive into the Obsidian API and plugin development, visit the [official API documentation](https://github.com/obsidianmd/obsidian-api).

To learn how to use the Babbage SDK functions, check out the Typescript [Babbage SDK GitHub repo](https://github.com/p2ppsr/babbage-sdk-ts) or the official [Project Babbage docs](https://projectbabbage.com/docs).

## License
The license for the code in this repository is the Open BSV License.