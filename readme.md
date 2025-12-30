# Image Grabber Pro

**Image Grabber Pro** is a powerful and lightweight Chrome Extension (Manifest V3) designed to extract image URLs and their associated titles from any webpage with a single click. Whether you are a developer, designer, or researcher, this tool simplifies the process of collecting image assets and metadata.

## Key Features

*   **One-Click Extraction**: Instantly scan the active tab to find all visible images.
*   **Intelligent Naming**: Automatically detects image titles using alt text, title attributes, nearby headings, or filenames.
*   **High-Resolution Support**: Attempts to retrieve original image URLs by bypassing common thumbnail resizing parameters.
*   **Dynamic Content Handling**: Supports modern websites with lazy-loaded images by scanning `data-src` and `srcset` attributes.
*   **Instant Export**: Copy all results to your clipboard or download them as **CSV** or **TXT** files.
*   **Privacy-First**: Operates entirely within your browser. No data is collected, stored, or transmitted.

## Installation

### For Users (Chrome Web Store)
*Coming soon!* Once approved, you can install it directly from the Chrome Web Store.

### For Developers (Manual Installation)
1.  Clone or download this repository.
2.  Open Google Chrome and navigate to `chrome://extensions/`.
3.  Enable **Developer mode** using the toggle in the top-right corner.
4.  Click the **Load unpacked** button.
5.  Select the directory containing the extension files.

## Usage

1.  Navigate to any website containing images you wish to extract.
2.  Click the **Image Grabber Pro** icon in your extension toolbar.
3.  Click **Scan Page** to populate the list of images and titles.
4.  Use the **Copy All**, **CSV**, or **TXT** buttons to export your data.

## Technical Details

*   **Manifest Version**: 3
*   **Permissions**: `activeTab`, `scripting`
*   **Core Components**:
    *   `content.js`: Handles DOM traversal and image extraction logic.
    *   `popup.html/js/css`: Provides the user interface and export functionality.

## Developer Information

*   **Developer**: Riduan Chowdhury
*   **Website**: [bytesvibe.com](https://bytesvibe.com)
*   **Support**: riduan@bytesvibe.com

## License

This project is licensed under the MIT License.
