# SAMSONI Water Website – Product Requirements Document (PRD)

## 📌 Overview

**Product Name:** SAMSONI Water Website
**Type:** Mobile-first business website
**Architecture:** Single-page (scroll-based) + one dedicated Products page

SAMSONI is a modern, conversion-focused website for a Nigerian table water business. The platform is designed to:

* Showcase products
* Build trust through quality assurance
* Enable fast ordering via WhatsApp
* Support repeat customers

The website prioritizes **mobile usability**, **speed**, and **low-friction ordering**.

---

## 🎯 Goals

### Primary Goals

* Enable users to initiate an order within **30 seconds**
* Provide a seamless mobile-first experience
* Minimize navigation friction using scroll-based design

### Secondary Goals

* Establish a premium, trustworthy brand presence
* Improve product visibility via a dedicated page
* Encourage repeat purchases

---

## 🧠 Problem Statement

Most Nigerian water business websites:

* Are fragmented across multiple pages
* Lack structured ordering systems
* Have poor mobile UX
* Rely heavily on unstructured WhatsApp chats

This leads to:

* Slower ordering
* Poor user experience
* Lost conversions

---

## 🧩 Navigation Strategy

### Homepage (Primary Experience)

A single-page layout with smooth scrolling sections:

* Hero (carousel)
* Quick Order
* Products (preview)
* Trust / Quality
* Delivery
* Subscription
* Testimonials
* Contact

### Dedicated Page

* `/products` → Full product catalog and detailed browsing

---

## 👥 Target Users

### 1. Household Buyers

* Frequent small orders
* Prefer WhatsApp ordering

### 2. Office Managers

* Bulk and recurring orders
* Value reliability

### 3. Event Planners

* Large, time-sensitive orders

---

## 🚀 Core Features (MVP)

### 1. Hero Section (Carousel)

* 3–4 slides:

  * Water pouring into glass
  * Delivery scene
  * Production/filtration
  * Optional lifestyle usage
* Static overlay:

  * Headline
  * Subtext
  * CTA buttons

---

### 2. Quick Order System

* Inputs:

  * Product type
  * Quantity
  * Delivery location
* Output:

  * Pre-filled WhatsApp message

Example:

```
Hello, I’d like to order 20 bags of sachet water to Yaba.
```

---

### 3. Products (Homepage Preview)

* 3–6 featured products
* Product cards:

  * Image
  * Name
  * Size
  * CTA
* Button: “View All Products” → `/products`

---

### 4. Products Page (`/products`)

* Full catalog
* Categories:

  * Sachet Water
  * Bottled Water
  * Dispenser Bottles
* Includes:

  * Product details
  * Pricing (optional placeholder)
  * Order CTA

---

### 5. Trust / Quality Section

* NAFDAC compliance (placeholder if needed)
* Hygienic production messaging
* Visual process:

  * Filtration → Purification → Packaging → Distribution

---

### 6. Delivery Section

* Areas served (Lagos Mainland & Island)
* Delivery timelines:

  * Same-day / Next-day
* Minimum order info

---

### 7. Subscription Section

* Weekly delivery
* Monthly delivery
* CTA → WhatsApp

---

### 8. Testimonials

* 3–5 customer reviews
* Card or carousel layout

---

### 9. Contact Section

* Phone: +2348164376172
* Email: [isogun21@gmail.com](mailto:isogun21@gmail.com)
* Address: No 1, Pipeline Bus Stop, Gberigbe

Includes:

* Contact form
* WhatsApp integration

---

### 10. WhatsApp Integration (Core)

* Primary conversion channel
* Used in:

  * Hero CTA
  * Quick Order
  * Product CTAs
  * Subscription

---

## 🔁 User Flows

### Quick Order Flow

1. User lands on homepage
2. Scrolls to Quick Order
3. Inputs details
4. Clicks “Order on WhatsApp”
5. WhatsApp opens with pre-filled message
6. User sends message

---

### Product Exploration Flow

1. User clicks “View Products”
2. Navigates to `/products`
3. Browses catalog
4. Clicks order CTA
5. Redirects to WhatsApp

---

## 🧱 Tech Stack

### Phase 1 (Design)

* AI-powered design and development process

### Phase 2 (Development)

* **Frontend:** Next.js
* **Styling:** Tailwind CSS
* **Backend (optional):** Supabase
* **Deployment:** Vercel

---

## 📱 UX Requirements

* Mobile-first design
* Smooth scrolling navigation
* Sticky WhatsApp button
* Large tap targets
* Fast loading (optimized images)

---

## 🎨 Design Requirements

* Clean, premium aesthetic
* Non-generic fonts (e.g., Clash Display, Satoshi, General Sans)
* Strong spacing and layout hierarchy
* High-quality stock imagery
* Subtle animations

---

## ⚠️ Constraints

* Use stock images initially
* No complex backend in MVP
* WhatsApp is primary ordering channel

---

## 📈 Future Enhancements

* Bulk order page
* Subscription management system
* Admin dashboard
* Payment integration (Paystack / Flutterwave)
* Order tracking
* Analytics dashboard

---

## ✅ Success Metrics

* Time to order: < 30 seconds
* WhatsApp CTA click rate
* Product page engagement
* Mobile usability performance

---

## 📁 Suggested Project Structure

```
/docs
  PRD.md
```

---

## 🧭 Summary

SAMSONI is designed as a **mobile-first, high-conversion website** that prioritizes:

* Speed
* Simplicity
* Trust
* Fast ordering via WhatsApp

The architecture balances:

* **Scroll-based homepage for quick decisions**
* **Dedicated product page for deeper exploration**
