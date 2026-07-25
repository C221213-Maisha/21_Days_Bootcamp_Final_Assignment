# Food Delivery Website

A front-end food delivery website built with HTML, CSS, and vanilla JavaScript.

## Overview

A static, single-page site showcasing a food delivery service: a landing banner, a browsable food menu with cart interactions, a services section, customer testimonials, and a newsletter subscription form.

## Features

- **Navigation and search**: Logo, nav links, and a search bar in the header.
- **Banner**: Hero section introducing the service.
- **Food menu**: A grid of food items, each with an "Add to Cart" button. A "See More / See Less" toggle expands the grid to reveal additional hidden items.
- **Cart**: A simple in-memory cart counter that updates as items are added, shown in a cart button in the nav.
- **Most popular**: A highlighted section for popular menu items.
- **Services**: A grid describing the delivery service's offerings.
- **Testimonials**: Customer feedback carousel/section.
- **Newsletter subscription**: An email input with client-side validation and a confirmation message.
- **Footer**: Logo, links, and social section.

## Project Structure

| File | Description |
|---|---|
| `index.html` | Page markup and content for all sections. |
| `styles.css` | Styling for the navigation, banner, food grid, services, testimonials, subscription form, and footer. |
| `scripts.js` | Client-side interactivity: cart button, "See More" toggle, "Add to Cart" handlers, and newsletter subscription handling. |

## Usage

Open `index.html` directly in a browser, or serve the folder with any static file server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

This is a front-end-only demo:
- The cart only tracks an item count in memory. There is no persistence and no actual checkout.
- The newsletter subscription only validates that the email field is non-empty. It does not send data anywhere.

A backend would be needed to persist carts, process orders, or store subscriptions.
