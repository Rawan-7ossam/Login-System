# Smart Login System

A simple yet robust web-based Smart Login System built with HTML, CSS, and pure JavaScript. This project demonstrates fundamental concepts of client-side user authentication, data persistence using `localStorage`, and intuitive user feedback.

---

## Project Overview

The **Smart Login System** is a foundational web application designed to provide a secure and user-friendly experience for account registration and login. It emphasizes a clean, responsive user interface and efficient client-side data handling.

This system is ideal for learning or demonstrating:
* **Form Validation:** Real-time input validation for email and password fields, ensuring data integrity.
* **User Registration:** Allows new users to create accounts with email and password.
* **User Authentication:** Verifies user credentials against stored data for secure login.
* **Client-Side Data Storage:** Leverages `localStorage` to persist user data across browser sessions, eliminating the need for a backend database in this simplified model.
* **Dynamic UI Updates:** Provides immediate feedback to users through dynamically updated messages (success/error).
* **Basic Session Management:** Maintains a basic "logged-in" state by storing the current user's name, allowing for a personalized welcome message on the home page.

---

## Key Features

* **User Registration Page:** (Sign Up) Create new user accounts with email and password.
* **Login Page:** Authenticate existing users.
* **Robust Input Validation:** Utilizes Regular Expressions (Regex) for strong email and password format validation.
* **Local Storage Integration:** Securely stores user data within the browser.
* **Responsive Design:** Adapts to various screen sizes (using Bootstrap).
* **Clear User Feedback:** Displays informative success/error messages.
* **Personalized Welcome:** Greets logged-in users by name on the home page.
* **Logout Functionality:** Allows users to end their session.

---

## Technologies Used

* **HTML5:** For structuring the web pages.
* **CSS3:** For styling and visual presentation (including custom styles).
* **Bootstrap 5:** A popular CSS framework for responsive design and pre-built components.
* **JavaScript (ES6+):** For all client-side logic, form handling, validation, and `localStorage` management.

---


## How to Use

1.  **Sign Up:** On the `index.html` page, fill in the registration form (Name, Email, Password) and click "Sign Up". You'll receive instant feedback on validation and successful registration.
2.  **Log In:** After successful registration, navigate to `loginPage.html` (or click the "Sign In" link usually present on the sign-up page). Enter your registered email and password and click "Login".
3.  **Welcome Home!:** Upon successful login, you will be redirected to `homePage.html`, where you'll see a personalized welcome message.
4.  **Log Out:** Click the "Log Out" button on the home page to end your session. This will clear your basic "logged-in" status from `localStorage`.
