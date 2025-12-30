# Image Grabber Pro
Image Grabber Pro is a lightweight Chrome extension that extracts image URLs and their associated titles from any website in one click.

It works on modern, dynamic, and lazy-loaded webpages and runs completely inside the browser with zero data collection.

## Key Features

*   **One-Click Extraction**: Instantly scan the active tab to find all visible images.
*   **Intelligent Naming**: Automatically detects image titles using alt text, title attributes, nearby headings, or filenames.
*   **High-Resolution Support**: Attempts to retrieve original image URLs by bypassing common thumbnail resizing parameters.
*   **Dynamic Content Handling**: Supports modern websites with lazy-loaded images by scanning `data-src` and `srcset` attributes.
*   **Instant Export**: Copy all results to your clipboard or download them as **CSV** or **TXT** files.
*   **Privacy-First**: Operates entirely within your browser. No data is collected, stored, or transmitted.

## Installation

1.  Clone or download this repository. And once downloaded unzip it.
2.  Open Google Chrome and navigate to `chrome://extensions/`.
3.  Enable **Developer mode** using the toggle in the top-right corner.
4.  Click the **Load unpacked** button. 
5.  Select the unzip folder containing the extension files.

## Usage

1.  Navigate to any website containing images you wish to extract.
2.  Click the **Image Grabber Pro** icon in your extension toolbar.
3.  Click **Scan Page** to populate the list of images and titles.
4.  Use the **Copy All**, **CSV**, or **TXT** buttons to export your data.

##  Use Cases

Collect image assets from websites
Extract product images
Build image datasets
Design reference collection
CMS media preparation
SEO image audits
Content research and archiving


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

This project is licensed under Creative Commons Attribution-NonCommercial 4.0
Commercial use is strictly prohibited.


## Contributing

Contributions are welcome.

If you find a bug or want to improve the extension:
* Open an issue
* Submit a pull request
* Suggest a feature

