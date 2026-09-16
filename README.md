# Accessible Video Player

A lightweight, accessible custom video player built with semantic HTML5, CSS3, and vanilla JavaScript. 

This project was developed as part of the Meta Backend Developer Professional Certificate on Coursera to practice core front-end principles and a11y web accessibility standards.

## Features

- **Semantic HTML5:** Built using standard `<figure>`, `<figcaption>`, `<video>`, and `<button>` elements.
- **Full Keyboard Accessibility:** Every control can be focused and operated using the `Tab`, `Enter`, and `Space` keys.
- **High-Contrast Focus Indicators:** Prominent outlines on focused buttons ensure clear visibility for keyboard navigators.
- **Dynamic ARIA Attributes:** Button `aria-label` attributes automatically update based on playback state (e.g., toggling between "Play video" and "Pause video").
- **Live Screen Reader Announcements:** Employs an `aria-live="polite"` region with a `.sr-only` utility class to announce playback changes (play, pause, stop, mute, volume levels) without disrupting visual users.
- **Responsive Layout:** Automatically scales across desktop and mobile screen sizes.

## Project Structure

```text
accessible-video-player/
├── index.html       # Semantic page structure & ARIA attributes
├── style.css        # Clean styles, focus indicators & a11y utilities
├── script.js        # Playback logic & state management
├── README.md        # Project overview and documentation
└── assets/
    └── sample-video.mp4  # Media file