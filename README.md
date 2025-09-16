
# Ashfaqul Awal – Developer Portfolio

A responsive personal portfolio built with **React**, **Vite**, and **Tailwind CSS**.  
It showcases my projects, experience, academic attainments, and certifications with a modern UI and smooth animations.

---

## ✨ Features

- **React + Vite** for fast development and hot-module replacement.
- **Tailwind CSS** for utility-first styling and dark aesthetic.
- **Animated Loading Screen** with typewriter effect and progress bar.
- **Responsive Navbar** with mobile hamburger menu and smooth scrolling.
- **Grid-based Layouts** for experience, projects, and academic attainments.
- Clean, accessible design optimized for both desktop and mobile.

---

## 🛠️ Tech Stack

| Category      | Tools / Libraries         |
|---------------|----------------------------|
| Frontend      | React 18, Vite            |
| Styling       | Tailwind CSS              |
| Icons         | Heroicons / Lucide (optional) |
| Deployment    | Vercel / Netlify (your choice) |

---

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone 
   cd portfolio
   ````

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the dev server**

   ```bash
   npm run dev
   # Vite will show a local URL (e.g. http://localhost:5173)
   ```

4. **Build for production**

   ```bash
   npm run build
   npm run preview
   ```

---

## 📂 Project Structure

```
ashfaquls-portfolio/
├─ public/
│   └─ favicon.ico              # Static assets served as-is
│
├─ src/
│   ├─ components/
│   │   ├─ LoadingScreen.jsx    # Animated intro / typewriter effect
│   │   ├─ MobileMenu.jsx       # Mobile nav drawer / hamburger menu
│   │   ├─ Navbar.jsx           # Top navigation bar
│   │   └─ sections/            # Main page sections
│   │       ├─ About.jsx        # About-me content & skills
│   │       ├─ Contact.jsx      # Contact form / social links
│   │       ├─ Home.jsx         # Hero / landing section
│   │       └─ Projects.jsx     # Portfolio projects grid
│   │
│   ├─ App.css                  # Component-specific styles (optional)
│   ├─ App.jsx                  # Main app layout, imports sections & Navbar
│   ├─ index.css                # Tailwind base + custom global styles
│   ├─ main.jsx                 # React entry point, renders <App />
│
├─ index.html                   # Root HTML file (Vite injects bundle here)
├─ package.json                 # Dependencies & scripts
└─ vite.config.js               # Vite build configuration

```

---

## 🖼️ Screenshots

*Screenshots or a GIF will be added here to show the design and animations.*

---

## 🌐 Deployment

You can deploy the production build to any static host (e.g. **Vercel**, **Netlify**, **GitHub Pages**):

```bash
npm run build
# then follow the platform-specific deployment instructions
```

---

## 📜 License

MIT License © 2025 [Ashfaqul Awal](https://github.com/yourusername)

---

### 🤝 Contributing

This is a personal project, but suggestions and pull requests are welcome.

---