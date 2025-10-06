<!-- 
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

--- -->



# 🌐 Cloud-Native Portfolio Deployment | Azure Kubernetes Service (AKS)

A responsive personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Nginx**, showcasing my projects, experience, academic attainments, and certifications with a modern, animated UI.
This project is now **containerized with Docker** and **deployed on Azure Kubernetes Service (AKS)** for scalability and cloud readiness.

---

## ✨ Features

* ⚛️ **React + Vite** — lightning-fast builds and HMR.
* 🎨 **Tailwind CSS** — clean, utility-first design system.
* 🌀 **Animated Loading Screen** — typewriter intro & smooth transitions.
* 📱 **Fully Responsive** — adaptive layout for all screen sizes.
* 🧭 **SPA Routing** — handled by React Router with Nginx fallback.
* ☁️ **Cloud-Ready** — Dockerized and deployed on Azure AKS.

---

## 🛠️ Tech Stack

| Category         | Tools / Libraries                    |
| ---------------- | ------------------------------------ |
| Frontend         | React 18, Vite                       |
| Styling          | Tailwind CSS                         |
| Server (Prod)    | Nginx (Alpine-based container)       |
| Containerization | Docker                               |
| Cloud Platform   | Azure Kubernetes Service (AKS)       |
| Registry         | Azure Container Registry (ACR)       |
| CI/CD Ready      | GitHub Actions (optional for future) |

---

## 📁 Project Structure

```
ashfaquls-portfolio/
├─ public/
│   └─ favicon.ico
│
├─ src/
│   ├─ components/
│   │   ├─ LoadingScreen.jsx
│   │   ├─ MobileMenu.jsx
│   │   ├─ Navbar.jsx
│   │   └─ sections/
│   │       ├─ About.jsx
│   │       ├─ Contact.jsx
│   │       ├─ Home.jsx
│   │       └─ Projects.jsx
│   │
│   ├─ App.jsx
│   ├─ main.jsx
│   ├─ index.css
│   └─ App.css
│
├─ k8s/                       # Kubernetes deployment manifests
│   ├─ deployment.yaml         # Defines pods and container specs
│   └─ service.yaml            # Exposes LoadBalancer for external access
│
├─ nginx/
│   └─ default.conf            # Custom Nginx config for SPA routing
│
├─ Dockerfile                  # Multi-stage build (Node + Nginx)
├─ vite.config.js              # Vite config with base URL logic
├─ package.json
└─ README.md
```

---

## ⚙️ Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/Ashfaquls-Portfolio.git
   cd Ashfaquls-Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run locally (Vite Dev Server)**

   ```bash
   npm run dev
   # App will be available at http://localhost:5173
   ```

4. **Build for production**

   ```bash
   npm run build
   npm run preview
   ```

---

## 🐳 Local Docker Build & Run

1. **Build Docker image**

   ```bash
   docker build -t ashfaqul-portfolio:latest .
   ```

2. **Run locally**

   ```bash
   docker run -p 8080:80 ashfaqul-portfolio:latest
   ```

3. **Open in browser**

   ```
   http://localhost:8080
   ```

The portfolio will be running inside a Docker container served by **Nginx**.

---

## ☁️ Azure Cloud Deployment (ACR → AKS)

### 1️⃣ To create Resource Group

```bash
RG=portfolio-rg
LOCATION=westeurope
az group create --name $RG --location $LOCATION
```

### 2️⃣ To create Azure Container Registry (ACR)

```bash
ACR_NAME=ashfaqulsportfolioacr
az acr create --resource-group $RG --name $ACR_NAME --sku Basic
```

### 3️⃣ To build and push Docker Image to ACR

```bash
az acr login --name $ACR_NAME
ACR_LOGIN_SERVER=$(az acr show --name $ACR_NAME --query loginServer --output tsv)
docker build -t $ACR_LOGIN_SERVER/portfolio:latest .
docker push $ACR_LOGIN_SERVER/portfolio:latest
```

### 4️⃣ To create AKS Cluster

```bash
AKS_NAME=portfolio-aks
az aks create --resource-group $RG --name $AKS_NAME --node-count 1 --generate-ssh-keys
az aks get-credentials --resource-group $RG --name $AKS_NAME
```

### 5️⃣ To grant AKS Access to ACR

```bash
az aks update -n $AKS_NAME -g $RG --attach-acr $ACR_NAME
```

### 6️⃣ To deploy to AKS

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

To check the deployment and service:

```bash
kubectl get pods
kubectl get service portfolio-service
```

When `EXTERNAL-IP` appears, it can be openned in the browser:

```
http://4.223.233.247
```

✅ **Portfolio is live on Azure Kubernetes Service!**

---

## 🔍 Kubernetes Files Overview

### `k8s/deployment.yaml`

Defines the **Docker image**, **container port**, and **replica count** for the app.

### `k8s/service.yaml`

Creates a **LoadBalancer service** exposing port 80 to the public internet.

---

## 🧩 Nginx Configuration

`nginx/default.conf`

```nginx
server {
  listen 80;
  server_name _;

  root /usr/share/nginx/html;
  index index.html;

  # serve static assets with long cache
  location /assets/ {
    expires 1y;
    add_header Cache-Control "public";
    try_files $uri =404;
  }

  # fallback for SPA routes
  location / {
    try_files $uri /index.html;
  }

  # logs (optional)
  access_log /dev/stdout;
  error_log /dev/stderr;
}

```

This ensures proper routing for a **React single-page app (SPA)**.

---

## 🚀 Future Enhancements (Planned)

### 🔗 Custom Domain + HTTPS

To make the site production-grade:

* Configure **Azure DNS** to map a custom domain (e.g., `ashfaqul.dev`) to your AKS LoadBalancer IP.
* Deploy an **Ingress Controller** (NGINX Ingress or Traefik).
* Use **Cert-Manager + Let's Encrypt** to enable automatic HTTPS certificates.

Example (future):

```bash
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm install nginx-ingress ingress-nginx/ingress-nginx --namespace ingress-basic --create-namespace
```

---

## 🧠 Lessons Learned

* Multi-stage Docker builds reduce image size and improve performance.
* Nginx simplifies static SPA routing with `try_files`.
* Azure AKS and ACR integrate seamlessly for CI/CD pipelines.
* Using environment-based routing (`vite.config.js`) avoids build conflicts between GitHub Pages and AKS.

---

## 📜 License

MIT License © 2025 [Ashfaqul Awal](https://github.com/awalashfaqul)

---

