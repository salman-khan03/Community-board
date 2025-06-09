# Community-board
# Web Development Project 1 - *Community Board*

Submitted by: **Salman Khan**

This web app: **A modern React app for discovering and registering for local community events and resources.
Built with ❤️ for the CodePath WEB102 course.

## Features

- Browse a curated list of community events with details, images, and organizer info
- Responsive event cards with smooth animations and hover effects
- Register for events via a modal form with validation
- Registration success confirmation with event details and calendar integration placeholder
- Clean, accessible, and mobile-friendly design

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) for fast development and builds
- CSS for custom styling and responsive layouts

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/App.jsx` - Main app component, event list, and registration modal logic
- `src/components/Registration.jsx` - Event registration form modal
- `src/components/RegistrationSuccess.jsx` - Success confirmation modal
- `src/App.css` - Main styles for layout and event cards
- `src/components/Registration.css` - Styles for registration modal
- `src/components/RegistrationSuccess.css` - Styles for success modal

## Customization

- To add or edit events, modify the `events` array in [`src/App.jsx`](src/App.jsx).
- Images are loaded from Unsplash; you can use your own by updating the `image` property.
**

Time spent: **200** hours spent in total

## Required Features

The following **required** functionality is completed:

- [ ✅] **The app has a cohesive, unique theme for events or resources relevant to a specific community**
  - [ ✅] Header/title describing the theme is displayed
- [ ✅] **At least 10 unique events or resources are displayed in a responsive card format**
  - [ ✅] There are at least 10 cards displayed 
  - [ ✅] The cards should be displayed in an organized format (ex. a grid, or in one line)
  - [ ✅] Each card should include some information about the event or resource


The following **optional** features are implemented:

- [ ✅] Buttons or links to a related resources are on each card component
  - [ ✅] All cards have buttons or links in addition to text
- [ ✅] The site is responsive for both desktop and mobile formats
  - [ ✅] Web app is shown in a mobile format

The following **additional** features are implemented:

* [ ✅] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of the implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

## License

    Copyright [MIT] [MIT Licenses]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
