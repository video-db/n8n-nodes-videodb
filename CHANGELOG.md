# Changelog

## [1.0.9-beta.0] - 2025-01-27

### Improved

- Added helpful notice in credentials to guide users to VideoDB Console for API key retrieval
- Added UTM tracking parameters to all documentation links for better analytics

## [1.0.8] - 2025-10-15

### Fixed

- Explicitly pass `error` message in JSON output when `continueOnFail` is enabled.

## [1.0.7] - 2025-10-15

### Fixed

- Added `pairedItem` to all output items for proper item linking in n8n.
- Implemented error handling with `continueOnFail`, `NodeApiError` and `NodeOperationError`.

## [1.0.6] - 2025-10-15

### Changed

- `generateVoice` now explicitly sends `audio_type: voice` in the request body.

## [1.0.5] - 2025-09-26

### Added

- Added the `Create Timeline (VideoDB's Video Editor)` action

## [1.0.4] - 2025-09-22

### Fixed

- Updated `README.md` links to correct destinations.

## [1.0.3] - 2025-09-16

### Added

- Dynamic dropdowns for Video ID, Image ID, Audio ID, Collection ID, and Language codes.

### Fixed

- Fixed the order of inputs in `audio` and `image` Generate URL methods.
- Addressed bugs related to duplicate IDs in List, Get, and Delete Scene Indexes.
- Improved JSON parsing for `json` input.

### Changed

- General code cleanup of commented-out code.

## [1.0.2]() - 2025-09-7

## Removed

- Removed Get, List and Connect RTStream operations
- Remove Make Collection Private and Make Collection Public operations

## [1.0.1]() - 2025-09-05

### Changed

- Removed redundant nodes
- Collection ID set to default

## [1.0.0]() - 2025-07-11

### Added

- Initial release of the package to npm.
- Includes all the VideoDB related features.
