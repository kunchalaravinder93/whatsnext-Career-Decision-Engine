# What's Next — Career Decision Engine

A comprehensive career exploration platform designed to help students after 10th and 12th grades make informed decisions about their future. It provides data-driven roadmaps, salary trends, and entrance exam information.

## 📁 File Structure Overview

| File / Directory | Description |
|------------------|-------------|
| `src/App.tsx` | The main application component containing the core logic, state, and UI layout. |
| `src/data/careers.ts` | The central database of all career paths, streams, and salary growth data. |
| `src/components/` | Reusable UI components like `CareerChart.tsx` for salary trends. |
| `src/index.css` | Global styles using Tailwind CSS and custom animations. |
| `src/main.tsx` | The entry point for the React application. |
| `package.json` | Project metadata, dependencies, and deployment scripts. |
| `vite.config.ts` | Configuration for the Vite build tool and development server. |
| `index.html` | The main HTML template for the Single Page Application (SPA). |
| `DEPLOYMENT.md` | Detailed technical guide for various deployment platforms. |

---

## 🚀 Local Development

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

---

## 🌍 Deployment to GitHub Pages (Local Build & Push)

The app is configured to deploy the `dist` folder from your `main` branch using **GitHub Actions**. This means you build the project locally and push the built files to GitHub.

1. **Build the project locally**:
   ```bash
   npm run build
   ```
   This will create (or update) the `dist` folder with the latest production files.

2. **Push the built files to GitHub**:
   ```bash
   git add dist/
   git commit -m "Update build files"
   git push origin main
   ```

3. **Configure GitHub (One-time setup)**:
   - Go to your repository **Settings > Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
   - The app will now automatically deploy the `dist` folder every time you push it to `main`.

---

## ☁️ Deployment to AWS EC2

For a more robust deployment or if you plan to add a custom backend.

### 1. Prepare the Instance
- Launch an EC2 instance (Ubuntu 22.04).
- Allow HTTP (80) and SSH (22) in the Security Group.

### 2. Install Environment
```bash
sudo apt update
sudo apt install -y nodejs npm nginx
sudo npm install -g pm2
```

### 3. Deploy Code
```bash
git clone <your-repo-url>
cd <your-repo-name>
npm install
npm run build
```

### 4. Serve with Nginx
Edit the Nginx config:
```bash
sudo nano /etc/nginx/sites-available/default
```
Replace the content with:
```nginx
server {
    listen 80;
    server_name your-domain-or-ip;

    root /path/to/your-repo/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
Restart Nginx:
```bash
sudo systemctl restart nginx
```

---

## 🛠️ Key Commands

| Action | Command |
|--------|---------|
| Start Dev Server | `npm run dev` |
| Build for Production | `npm run build` |
| Lint Code | `npm run lint` |
| Clean Build Folder | `npm run clean` |
