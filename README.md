# Infinite Scroll Product List

A React application demonstrating an infinite scroll product list with search filtering, smooth UX features, and responsive design. Built using React hooks, Axios, Tailwind CSS, and Intersection Observer API.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/karan-sable/whiz-assignment-react.git
   cd whiz-assignment-react

   ```

2. Installing node modules:

   ```bash
   npm i
   or
   npm install

   ```

3. Running the app:

   ```bash
   npm run dev

   ```

4. Check the running app:

   ```bash
   Go to http://localhost:5173/
   ```

## Features

- **Infinite Scroll**  
  Automatically loads more products as you scroll down using the Intersection Observer API.

- **Search Filtering**  
  Client-side search with debounced input to filter products by title.

- **Back to Top Button**  
  Smooth scroll back to the top appears after scrolling down a certain distance.

- **Responsive Design**  
  Grid layout adjusts columns based on screen size for optimal viewing on mobile, tablet, and desktop.

- **Product Cards**  
  Displays rich product details including images, title, brand, rating, price with discounts, availability, tags, dimensions, and recent reviews.

- **Error Handling & Loading States**  
  Gracefully handles loading states, API errors, and no-results messages.

- **Dark Mode Support**  
  Components styled to support light and dark themes (Tailwind CSS).

---
