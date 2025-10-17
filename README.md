# 🌟 Profile Card Component — HNG Stage 0 Task

This project is a **responsive, accessible Profile Card component** built with **semantic HTML**, **modern CSS**, and **vanilla JavaScript**, following the requirements of the **HNG Stage 0 Frontend Wizards task**.

---

## 📋 Project Overview

The Profile Card displays basic user information in a clean, responsive layout. It includes:
- User’s **name**
- **Short biography**
- **Avatar image**
- **Social media links**
- **Hobbies and dislikes**
- **Current timestamp** in milliseconds (`Date.now()`)

Every element includes a `data-testid` attribute for automated testing and accessibility validation.

---

## 🧱 Technologies Used

- **HTML5** – Semantic structure and accessibility
- **CSS3** – Responsive layout using Flexbox and media queries
- **JavaScript (ES6)** – Dynamic current time rendering
- **Google Fonts (Inter, Poppins)** – Clean, modern typography
- **Boxicons** – Icon set for social media links

---

## 🧩 Features

✅ **Semantic HTML Elements**
- Uses `<article>`, `<section>`, `<figure>`, `<nav>`, and other semantic tags for structure.  
- Improves accessibility and screen reader compatibility.

✅ **Accessibility Support**
- All interactive elements (links/buttons) are **keyboard-focusable**.  
- Visible **focus outlines** ensure easy navigation.  
- Each image includes a descriptive `alt` text.

✅ **Responsive Design**
- Optimized for **mobile**, **tablet**, and **desktop** screens.
- Uses Flexbox layout that adjusts gracefully across devices.

✅ **Dynamic Time Display**
- Displays the current time in **milliseconds** using `Date.now()` on render.

✅ **Data-testids for Testing**
All key elements include the specified `data-testid` attributes for automated testing:
| Element | Test ID |
|----------|----------|
| Card Container | `test-profile-card` |
| Name | `test-user-name` |
| Biography | `test-user-bio` |
| Current Time | `test-user-time` |
| Avatar Image | `test-user-avatar` |
| Social Links Container | `test-user-social-links` |
| Individual Social Links | e.g., `test-user-social-twitter` |
| Hobbies | `test-user-hobbies` |
| Dislikes | `test-user-dislikes` |

---

## 🧠 Accessibility Notes
- All links open in new tabs with `target="_blank"` and `rel="noopener noreferrer"`.
- Focus states are visible for all interactive elements.
- Content structure follows logical reading order for assistive technologies.

---

## 💻 Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/profile-card.git
