# NovaSpace – Creative Agency SPA

A modern Single Page Application (SPA) built with React and Tailwind CSS for a fictional creative digital agency.

NovaSpace showcases a premium dark-themed agency experience with client-side navigation, reusable components, responsive layouts, shared application state, and interactive project experiences.

## 🚀 Live Demo

**Live Website:**
https://codveda-level2-spa.vercel.app/

**GitHub Repository:**
https://github.com/basemmohamed012/codveda-level2-spa

## 📌 Project Overview

NovaSpace is a modern creative agency website built as a Single Page Application.

The project demonstrates modern front-end development practices including client-side routing, shared state management, reusable components, responsive design, and smooth page transitions.

### Pages

* Home
* About
* Services
* Work
* Contact
* 404 Not Found

Navigation between pages is handled on the client side without full page reloads.

## ✨ Features

* ⚡ Single Page Application architecture
* 🧭 Client-side routing with React Router
* 📱 Fully responsive design
* 🎨 Premium dark UI
* 🌈 Purple and pink gradient accents
* 🧩 Reusable React components
* 🗂️ Shared state management with React Context API
* 🪟 Interactive project case-study modal
* 📱 Responsive mobile navigation
* ✨ CSS page transition animations
* 📬 Interactive contact form
* 🚫 Custom 404 page
* ☁️ Vercel deployment

## 🛠️ Tech Stack

| Technology   | Usage                         |
| ------------ | ----------------------------- |
| React        | UI development                |
| JavaScript   | Application logic             |
| React Router | Client-side navigation        |
| Context API  | Shared state management       |
| Tailwind CSS | Styling and responsive design |
| Vite         | Development and build tool    |
| Vercel       | Deployment                    |
| Git & GitHub | Version control               |

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── PageTransition.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectModal.jsx
│   └── ServiceCard.jsx
│
├── context/
│   └── AppContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Work.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## 🧠 State Management

The application uses **React Context API** for shared state management.

The `AppContext` manages:

* Mobile navigation state
* Selected project state
* Opening project details
* Closing the project modal

This allows components such as `Navbar`, `ProjectCard`, and `ProjectModal` to share state without unnecessary prop drilling.

## 🧭 Routing

React Router is used for client-side navigation.

```text
/           → Home
/about      → About
/services   → Services
/work       → Work
/contact    → Contact
/*          → 404 Not Found
```

## 🎨 Design

NovaSpace follows a modern creative-agency visual style featuring:

* Dark backgrounds
* Glassmorphism
* Gradient effects
* Soft glow elements
* Rounded cards
* Responsive typography
* Hover interactions
* Mobile-first layouts

The interface was built with Tailwind CSS and reusable React components.

## ⚙️ Getting Started

### Clone the repository

```bash
git clone https://github.com/basemmohamed012/codveda-level2-spa.git
```

### Navigate to the project

```bash
cd codveda-level2-spa
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## 🌐 Deployment

NovaSpace is deployed using Vercel.

**Live Demo:**
https://codveda-level2-spa.vercel.app/

## 📚 Codveda Internship

This project was developed as part of the **Codveda Technologies Front-End Development Internship – Level 2**.

### Level 2 – Task 1

The task focuses on building a Single Page Application using React or Vue.js with:

* At least three pages
* Client-side routing
* Shared state management
* Smooth navigation
* Deployment to Vercel or Netlify

NovaSpace implements these requirements using React, React Router, Context API, Tailwind CSS, and Vercel.

## 👨‍💻 Author

**Basem Mohamed**

Front-End Developer | React Developer

**GitHub:**
https://github.com/basemmohamed012

**LinkedIn:**
https://linkedin.com/in/basem-mohamed-99440224

---

⭐ Built with React & Tailwind CSS
