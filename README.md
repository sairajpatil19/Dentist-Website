# Dental Template "https://dentals-ten.vercel.app/"

A premium, modern dental clinic website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. The project is designed to be easily customizable for any dental clinic by editing a single configuration file.

## ✨ Features

* Modern responsive design
* React Router navigation
* Fully customizable clinic configuration
* Treatment catalogue with detailed pages
* Doctors section
* Gallery with lightbox
* Blog section
* Appointment booking wizard
* Contact page with Google Maps
* WhatsApp integration
* Google Sheets appointment integration
* SEO-ready structure
* Mobile-first responsive layout

---

## 🛠 Tech Stack

* React 19
* Vite
* TypeScript
* Tailwind CSS
* React Router
* React Hook Form
* Zod
* React Query
* Framer Motion
* Lucide React
* Radix UI
* Sonner

---

## 📁 Project Structure

```text
src/
│
├── assets/
├── components/
│   ├── animations/
│   ├── appointment/
│   ├── layout/
│   ├── sections/
│   ├── treatment/
│   └── ui/
│
├── config/
│   └── clinic.ts
│
├── data/
├── lib/
├── pages/
├── App.tsx
└── main.tsx
```

---

## 🚀 Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd DentalClinic
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

## 📦 Production Build

Build the application

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

## ⚙ Customization

Almost all clinic information can be changed from

```text
src/config/clinic.ts
```

This includes

* Clinic name
* Logo
* Contact information
* Address
* Business hours
* Social media
* SEO
* Appointment settings
* Google Maps
* WhatsApp number
* Theme colors

---

## 📷 Assets

Store all images inside

```text
src/assets/
```

Examples include

* Hero images
* Treatment images
* Doctor photos
* Gallery images
* Logo

Import images using

```ts
import hero from "@/assets/hero.jpg";
```

instead of using string paths like

```ts
"/src/assets/hero.jpg"
```

---

## 📅 Appointment System

The appointment module supports

* Doctor selection
* Treatment selection
* Calendar picker
* Time slot selection
* Patient information
* Google Sheets submission
* Booking validation

---

## 📱 Responsive Design

Optimized for

* Desktop
* Laptop
* Tablet
* Mobile

---

## 🎨 UI Components

The project uses reusable UI components including

* Buttons
* Inputs
* Textareas
* Calendar
* Accordions
* Cards
* Toast notifications

---

## 📄 License

This project is intended as a reusable premium dental clinic template.

---

## 👨‍💻 Developed By

**VANTA**

Website Development • Branding • Automation • SEO

Website:

https://vanta-react.vercel.app
