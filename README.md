![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-videodb

This is an n8n community node. It lets you use the [VideoDB](https://videodb.com) in your n8n workflows.

Power your video and media automation with VideoDB. Access advanced video indexing, search, and management features. Get started at https://console.videodb.io

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Table of Contents

- [Installation](#installation)
- [Operations](#operations)
- [Credentials](#credentials)
- [Compatibility](#compatibility)
- [Usage](#usage)
- [Resources](#resources)
- [Development](#development)
- [Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node presently supports video operations for:

- Fetching videos in a collection
- Indexing a video
- Getting a video transcript
- Searching through a video
- Uploading a video by URL

## Credentials

An API key is required in order to issue calls to the VideoDB API. Sign up to retrieve your API key at https://console.videodb.io.

## Compatibility

Tested locally against n8n v1.93.0.

## Usage

You should familiarize yourself with the various response objects, to understand what data is provided by the API, and how to access individual insights. Response object formats are available in the VideoDB API documentation.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [VideoDB API documentation](https://docs.videodb.io)

## Development

To streamline and accelerate the development process, follow these steps:

1. Install _n8n_ globally (`npm add -g n8n`).
2. Set the `N8N_CUSTOM_EXTENSIONS` environment variable to the `/dist` directory of this repository.
3. Enable hot reloading by setting the `N8N_DEV_RELOAD` environment variable to `true`.
4. Run `npm run dev` to watch for changes and automatically rebuild the node as you develop.
5. Start n8n with `n8n start` to launch the editor UI.
6. Open the n8n editor UI in your browser.

You should now be able to search for and use the VideoDB node in your n8n workflows.

> **Note:** When launching n8n locally for the first time, you will be prompted to create a user account. If you forget your credentials, you can reset n8n to its initial state by running `n8n user-management:reset`.

## Version history

- 1.0.8 - Explicitly pass `error` message in JSON output when `continueOnFail` is enabled
- 1.0.7 - Added `pairedItem` item linking and robust error handling with `continueOnFail` and `NodeOperationError`
- 1.0.6 - `generateVoice` now sends `audio_type: voice`
- 1.0.5 - Added the `Create Timeline (VideoDB's Video Editor)` action
- 1.0.4 - README update
- 1.0.3 - Dropdowns for `collection`, `image`, `audio` and `video` IDs along with minor bug fixes
- 1.0.2 - Filtered nodes to most useful ones
- 1.0.1 - Filtered nodes to most useful ones
- 1.0.0 — Initial release of the VideoDB API n8n node
