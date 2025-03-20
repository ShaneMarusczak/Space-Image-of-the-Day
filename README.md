# Space Image of the Day

Space Image of the Day is a web-based project that fetches and displays NASA's Astronomy Picture of the Day (APOD). This application provides users with a daily dose of space imagery and explanations directly from NASA’s API. It features a clean, responsive design accompanied by animated loading effects, ensuring a smooth and visually pleasing experience on all modern devices.

---

## Table of Contents

- [Features](#features)
- [Installation Instructions](#installation-instructions)
- [Usage Guide](#usage-guide)
- [File and Structure Overview](#file-and-structure-overview)
- [Configuration Details](#configuration-details)
- [Contribution Guidelines](#contribution-guidelines)
- [License Information](#license-information)

---

## Features

- **Live NASA APOD Integration:** Retrieves the latest space image and its accompanying details from NASA’s APOD API.
- **Responsive Design:** Built with a mobile-first design philosophy, ensuring compatibility across various screen sizes.
- **Animated Loading Screen:** A simple yet effective animated loader is presented while the image data is being fetched.
- **Clean Aesthetic:** Utilizes modern fonts and color themes to create an engaging user interface.
- **Easy Navigation:** Includes quick links to a home page and the GitHub repository for further exploration or contribution.

---

## Installation Instructions

To set up and run this project locally, follow these steps:

1. **Clone the Repository:**

   Open your terminal and clone the repository into your local machine:

   ```
   git clone https://github.com/ShaneMarusczak/Space-Image-of-the-Day.git
   ```

2. **Navigate to the Project Directory:**

   ```
   cd Space-Image-of-the-Day
   ```

3. **Open the Application:**

   As this is a stand-alone web project, simply open the `index.html` file in your preferred web browser. You can do this by either:

   - Double-clicking on the `index.html` file, or
   - Using a live server extension (e.g., Live Server for VS Code) for a better development experience.

_Note: No additional dependencies or backend servers are required as all interactions are handled client-side through JavaScript._

---

## Usage Guide

1. **Loading the Page:**
   
   When you open the `index.html` page in your browser, the application immediately makes a request to the NASA APOD API using the embedded API key.
   
2. **Viewing the Image:**

   - A loading animation is displayed while the image and other data are being fetched.
   - Once loaded, the application displays the space image, the title of the image, the date (formatted in a reader-friendly manner), and a detailed explanation about the image.

3. **Navigation:**

   - **Home Link:** Located in the header as a home icon directs you to the main page of the parent website.
   - **GitHub Link:** An adjacent GitHub icon leads you to the project repository on GitHub for more details.

4. **Interactivity:**

   - Hover effects are implemented on the navigation icons for a dynamic user experience.

---

## File and Structure Overview

The project is organized in a straightforward manner:

- **index.html**
  - The main HTML file that structures the page layout.
  - Contains links to both CSS files (minified and unminified) and JavaScript files.

- **css/**
  - `style.css`: Contains the primary style definitions including layout, typography, and animations.
  - `style.min.css`: A minified version of `style.css` for optimized loading in production.

- **js/**
  - `space.js`: The development version of the JavaScript code that fetches data from the NASA APOD API and manages DOM updates.
  - `space.min.js`: The minified production version of the JavaScript code for faster load times.

- **assets (images/icons)**
  - Icons for the home link, GitHub, and favicons for various devices are included in the root or relevant subdirectories.

---

## Configuration Details

There are several key settings and configurations within the project:

- **NASA API Key:**
  - A NASA API key is required to fetch data from the NASA APOD API. You can obtain a free API key from [NASA's API website](https://api.nasa.gov/).

- **Responsive Design Settings:**
  - Styles are defined using viewport-based font sizing (e.g., `vw` units) to ensure responsiveness across devices.
  - The layout uses Flexbox to center content and manage spacing dynamically.

- **Animation:**
  - A keyframe animation (`loading-animation`) is used in both CSS files to generate a scalable loading effect.

- **Web Manifest and Favicons:**
  - Included meta tags and manifest references help support various devices and platforms (e.g., `apple-touch-icon.png`, `favicon-32x32.png`, `favicon-16x16.png`, `site.webmanifest`).

---

## Contribution Guidelines

Contributions to Space Image of the Day are welcome! If you wish to contribute:

- Fork the repository.
- Create a new branch (`git checkout -b feature/YourFeature`).
- Commit your changes (`git commit -m 'Add YourFeature'`).
- Push to your branch (`git push origin feature/YourFeature`).
- Open a pull request.

For more detailed instructions, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file if available in the repository.

---

## License Information

This project is licensed under the terms specified in the [LICENSE](LICENSE) file. Please review the file for more detailed licensing information.

---

Enjoy exploring space, and may the cosmos inspire your creativity!

