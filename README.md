# JobFeed

A simple React component that fetches and displays recent job postings from Hacker News.

## Overview

This component fetches the latest job story IDs from the Hacker News API and then retrieves details for the first 10 jobs. It displays these jobs in a responsive grid layout with basic information like the job title and poster.

## Features

* Fetches job data from the Hacker News API.
* Displays a loading state while data is being fetched.
* Handles and displays error messages if the API request fails.
* Presents job titles as clickable links that open in a new tab.
* Shows the username of the person who posted the job.
* Utilizes Tailwind CSS for styling, providing a dark theme and responsive layout.

## Technologies Used

* React
* useEffect and useState hooks for managing state and side effects.
* `fetch` API for making HTTP requests.
* Promise.all for handling multiple asynchronous requests.
* Tailwind CSS for styling.

## Setup and Installation

1.  Make sure you have Node.js and npm (or yarn) installed on your system.
2.  Clone this repository (or copy the `JobFeed.js` component into your React project).
3.  Install the necessary dependencies if you haven't already:

    ```bash
    npm install react tailwindcss postcss autoprefixer
    # or
    yarn add react tailwindcss postcss autoprefixer
    ```

4.  Configure Tailwind CSS in your project. If you are starting a new project with Create React App, follow the official Tailwind CSS installation guide: [https://tailwindcss.com/docs/installation/create-react-app](https://tailwindcss.com/docs/installation/create-react-app)

    If you have an existing project, adapt the configuration steps to your setup. This usually involves:
    * Creating `tailwind.config.js` and `postcss.config.js` files.
    * Adding Tailwind directives to your main CSS file (e.g., `index.css` or `App.css`).

    ```javascript
    // tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

    ```javascript
    // postcss.config.js
    module.exports = {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
    ```

    ```css
    /* In your main CSS file (e.g., index.css) */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

5.  Import and use the `JobFeed` component in your application:

    ```jsx
    import React from 'react';
    import JobFeed from './JobFeed'; // Adjust the path as needed

    function App() {
      return (
        <div>
          <JobFeed />
        </div>
      );
    }

    export default App;
    ```

## Usage

Simply include the `<JobFeed />` component in your React application where you want the job feed to be displayed. The component will automatically fetch and render the latest job postings.

## API Endpoint

The component uses the following Hacker News API endpoints:

* `https://hacker-news.firebaseio.com/v0/jobstories.json`: To fetch an array of the latest job story IDs.
* `https://hacker-news.firebaseio.com/v0/item/{id}.json`: To fetch the details of a specific job item, where `{id}` is the job story ID.

## Notes

* The component currently fetches and displays the first 10 job postings. You can modify the `slice(0, 10)` in the `useEffect` hook to fetch a different number of jobs.
* The styling is basic and provided by Tailwind CSS. You can further customize the appearance by modifying the Tailwind classes applied to the elements.
* Error handling is in place to catch issues during API requests, but you might want to implement more sophisticated error logging or user feedback mechanisms for production applications.
