# Crypto Price Tracker

A web application for tracking cryptocurrency prices in real-time.

## Project Overview

Crypto Price Tracker is a two-part project:

1. **Web Application (Next.js + MERN backend services)** – displays live cryptocurrency prices and market stats in a clean, responsive dashboard.  
   Live site: https://crypto-tracker-dhruvpandoh.vercel.app/

2. **Docusaurus Documentation Site** – full setup and usage docs for developers and users.  
   Docs site: https://crypto-tracker-docs-dhruvpandoh.vercel.app/

## Features

- **Real-time crypto price tracking** using live market data from public APIs (CoinGecko).
- **Backend normalization pipeline (Node/Express)** to standardize prices, symbols, and asset stats before serving to the UI.
- **Search + filters across 10k+ coins** with debounced queries and fast client-side lookup.
- **Client-side indexing + pagination** for smooth browsing under large data loads.
- **Manual refresh** to instantly re-fetch the latest market prices.
- **Responsive design** that works cleanly on desktop, tablet, and mobile.
- **Comprehensive documentation** for setup, architecture, and usage.

## Getting Started

See the **Setup Guide** for detailed instructions on running locally:  
`docs/docs/setup-guide.md`

## Quick Start

### Web Application

```bash
cd web-app
npm install
npm run dev
```

### Documentation

```bash
cd docs
npm install
npm run start
```

## Technologies Used

- **MERN Stack** (MongoDB, Express.js, React, Node.js)  
- Next.js  
- TypeScript  
- React Query  
- Tailwind CSS  
- Docusaurus  
- CoinGecko API  

## Notes

- The app supports a large catalog (10k+ assets), so search and pagination are optimized for speed and UX.  
- If CoinGecko rate-limits requests, try manual refresh after a short pause.
