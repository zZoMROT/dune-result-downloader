# Script for Extracting Data from Dune Analytics

## Description

This script is designed to scrape results from the [Dune Analytics](https://dune.com/) website. The script is executed in the browser console on the results page and automatically collects data, which is then saved as a JSON file.

## Usage

1. Open the results page on the [Dune Analytics](https://dune.com/) website.
2. Open the browser console (usually by pressing F12 or right-clicking on the page and selecting "Inspect").
3. Copy and paste the script from the `script.js` file in this repository into the console.
4. Press Enter to execute the code.
5. To start collecting data, execute the command `start()` in the console.

## Parameters

- `timeout` — the delay time between pages in milliseconds (default is 2000 ms).
- `saveEveryPage` — the number of pages after which data is saved to a file (default is 500).

## Notes

- The script automatically clicks the "Next page" button until all data is collected.
- Data is saved in a JSON file. The file is automatically downloaded every 500 pages or upon completion of data collection.
- To temporarily pause data collection, set the `pause` variable to `true`.
