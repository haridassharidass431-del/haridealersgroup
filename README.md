# HARIDEALERS GROUP & ARTIGENCE AI HUB WEBSITE

> **"BUILDING BUSINESSES. CREATING WHAT'S NEXT."**  
> An award-quality, cinematic digital platform for Haridealers Group and its technology division, Artigence AI Hub.

---

## 🌟 Overview of Features

1. **Official Brand Assets Integrated**:
   - Haridealers Group Gold Emblem & Artigence AI Hub Emblem configured across headers, navigation, footers, and meta tags.
2. **Cinematic Hero & Experience**:
   - Editorial typography, luxury near-black palette (`#08080a`), ambient particle canvas, optional intro animation with instant **"Skip Intro"** control.
3. **Haridealers Xerox & Printing (First Priority Service Hub - `/xerox`)**:
   - Full service catalog: B&W Xerox, Colour Xerox, Document Printing, High-Res Scanning, Lamination, Spiral Binding, Thesis Binding, Photo Prints.
   - **Interactive Live Cost Estimator**: Users select pages, print mode, single/double sided, and binding to see an instant total cost estimate.
   - **One-Tap WhatsApp Order Drop**: Transmits the exact estimate specifications directly to the shop WhatsApp chat.
   - Business hours badge, physical address, and Google Maps direction link.
4. **Haridealers Clothing & E-Commerce (`/clothing`)**:
   - Product catalog with category filtering (T-Shirts, Hoodies, Ethnic Kurtas, Workwear, Accessories).
   - Search bar, product details modal, size & color selection.
   - Interactive slide-out **Shopping Cart Drawer**.
   - Transparent disclosure banner stating automated online payments are in preview mode, with instant WhatsApp order generation.
5. **Artigence AI Hub (`/artigence`)**:
   - Cyberpunk luxury theme with glowing purple/cyan aesthetic.
   - Deep-dive into **AI Smart Ration Distribution System** (anti-pilferage grain terminal, biometric authentication, offline-capable edge device).
   - **Interactive Terminal Simulator**: Try out the virtual beneficiary scan and automated dispensing flow!
   - Applied research portfolio and transparent status badges (*Working Prototype*, *In Development*, *Active Research*).
6. **Exports & International Trade (`/exports`)**:
   - Structured sourcing divisions (Textiles & Apparel, Agricultural Commodities, General Merchandise).
   - Emerging trade desk disclosure and bilateral inquiry dispatch form.
7. **Digital Services (`/digital-services`)** & **Research & Development (`/rnd`)**:
   - Web development, cloud architecture, IoT mechatronics, and autonomous AI agents.
8. **About & Contact (`/about`, `/contact`)**:
   - Executive story, core values, direct phone/WhatsApp desk, Google Maps embed link, and an honest contact dispatch modal (no fake success messages).

---

## 🚀 How to Run the Website Locally (Beginner Guide)

### Step 1: Open Terminal in Project Folder
Make sure you are in `c:\Users\WELCOME\Downloads\haridealers-group-website`.

### Step 2: Start Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173
```
You will see the website live with hot reload!

### Step 3: Build for Production
```bash
npm run build
```
This creates an optimized, super-fast production build in the `dist/` directory.

---

## ✏️ How to Edit Your Shop Details (Phone, Address, Prices, Hours)

You do **NOT** need to edit code across multiple files! Everything is centralized in **one single file**:

📁 `src/data/businessData.ts`

Open this file in your editor and look for `BUSINESS_CONFIG` and `XEROX_SERVICES`:

- **WhatsApp Number**: Change `whatsappNumber: "910000000000"` to your real number (e.g., `"919876543210"`).
- **Phone Number**: Change `phone: "+91 (Update Your Phone Number)"`.
- **Shop Address**: Update `shopAddress.line1`, `city`, and `googleMapsUrl`.
- **Prices**: Edit `startingPrice` in `XEROX_SERVICES` (e.g., change `"₹2.00"` to your rate).
- **Enable/Disable Services**: Toggle `enabled: true` or `enabled: false` on any service card.

---

## 🌐 How to Publish on GitHub

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Click the **"+"** icon in the top right corner and choose **"New repository"**.
3. Name your repository: `haridealers-group-website`.
4. Choose **Public** or **Private**, and leave "Initialize with README" **unchecked** (we already created everything).
5. In your project terminal, run these commands (replace `YOUR_USERNAME` with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/haridealers-group-website.git
git branch -M main
git push -u origin main
```

---

## ⚡ How to Deploy on Vercel (Free & Instant)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **"Add New..."** &rarr; **"Project"**.
3. Select your repository `haridealers-group-website` and click **"Import"**.
4. Vercel will automatically detect:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.
6. Within 30 seconds, your site is live with a free worldwide SSL domain (e.g., `https://haridealers-group-website.vercel.app`)!

SPA route rewrites are already configured in `vercel.json` so every page (`/xerox`, `/clothing`, `/artigence`, etc.) loads smoothly without 404 errors.
