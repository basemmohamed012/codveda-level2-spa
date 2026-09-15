# NovaSpace – Creative Agency SPA

A modern Single Page Application (SPA) built with React and Tailwind CSS for a fictional creative digital agency.

NovaSpace showcases a premium dark-themed agency experience with smooth client-side navigation, reusable components, responsive layouts, and shared application state using React Context API.

## 🚀 Live Demo

[View NovaSpace Live](https://codveda-level2-spa.vercel.app/)

## 📌 Project Overview

NovaSpace is a multi-page Single Page Application designed to demonstrate modern front-end development practices.

The application includes:

* Home page
* About page
* Services page
* Work / Projects page
* Contact page
* 404 Not Found page

Navigation is handled on the client side using React Router, allowing users to move between pages without full page reloads.

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
* ☁️ Deployed with Vercel

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

The application uses **React Context API** to manage shared state across different components.

The `AppContext` handles:

* Mobile navigation state
* Selected project state
* Opening project details
* Closing the project modal

This allows components such as `Navbar`, `ProjectCard`, and `ProjectModal` to communicate through shared application state without unnecessary prop drilling.

## 🧭 Routing

React Router is used for client-side navigation.

Available routes:

```text
/           → Home
/about      → About
/services   → Services
/work       → Work
/contact    → Contact
/*          → 404 Not Found
```

## 🎨 Design

NovaSpace uses a modern creative-agency visual direction featuring:

* Dark backgrounds
* Glassmorphism
* Gradient effects
* Soft glow elements
* Rounded cards
* Responsive typography
* Hover interactions
* Mobile-first layouts

The design was built with Tailwind CSS and reusable React components.

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/basemmohamed012/codveda-level2-spa.git
```

### 2. Navigate to the project

```bash
cd codveda-level2-spa
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

## 🌐 Deployment

The project is deployed using Vercel.

**Live Website:**

https://codveda-level2-spa.vercel.app/

## 📚 Codveda Internship

This project was developed as part of the **Codveda Technologies Front-End Development Internship – Level 2**.

### Level 2 – Task 1

The task focuses on creating a Single Page Application using React or Vue.js with:

* At least three pages
* Client-side routing
* Shared state management
* Smooth navigation
* Deployment to Vercel or Netlify

NovaSpace implements these requirements using React, React Router, Context API, Tailwind CSS, and Vercel.

## 👨‍💻 Author

**Basem Mohamed**

Front-End Developer | React Developer

* GitHub: [basemmohamed012](https://github.com/basemmohamed012)
* LinkedIn: [Basem Mohamed](https://linkedin.com/in/basem-mohamed-99440224)

---

⭐ Built with React & Tailwind CSS
