# 🍽️ Amber Restaurant - Online Ordering System

A modern, mobile-responsive restaurant ordering web application built with React, featuring an authentic North Indian & Indo-Chinese cuisine menu with WhatsApp integration.

## 🚀 Features

- **Modern UI/UX**: Beautiful gradient designs with smooth animations and transitions
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Menu Management**: Filter dishes by category (Starters, Main Course, Indo-Chinese, Breads) and diet (Veg/Non-Veg)
- **Shopping Cart**: Add/remove items with quantity management
- **WhatsApp Integration**: Direct order placement via WhatsApp
- **Order History**: Track all placed orders with status updates
- **High-Quality Food Images**: AI-curated product images from Unsplash
- **Video Showcase**: Embedded video section showing restaurant expertise
- **Quick Contact**: One-click WhatsApp, call, and directions buttons
- **Smooth Page Transitions**: Animated transitions between Home, Menu, and Orders pages

## 📁 Project Structure

```
amberrestaurant/
├── src/
│   ├── App.jsx           # Main React component with all pages
│   ├── main.jsx          # App entry point
│   └── index.css         # Tailwind CSS imports
├── public/               # Static assets
├── index.html            # HTML wrapper
├── package.json          # Dependencies management
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 4.5.14
- **Styling**: Tailwind CSS 3.3.2
- **Icons**: Lucide React 0.268.0
- **Server**: Built-in Vite dev server

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Server will open automatically at http://localhost:5173/

3. **Build for Production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📱 Mobile Responsiveness

The website is fully responsive with:
- **Mobile First Design**: Optimized grid layouts that adapt to screen sizes
- **Touch-Friendly**: Large buttons and easy-to-tap elements
- **Hamburger Menu**: Collapsible mobile navigation
- **Responsive Typography**: Text sizes adjust for readability
- **Flexible Layouts**: Grid transforms from multi-column to single-column

### Responsive Breakpoints
- **Mobile**: < 768px (Tailwind `md:`)
- **Tablet/Desktop**: ≥ 768px (Full layouts)

## 🎨 Key Features

### Pages
1. **Home** - Hero section with restaurant info, stats, video showcase, contact details
2. **Menu** - Browse dishes with filtering and search capabilities
3. **Orders** - View order history and status tracking

### Cart System
- Add/remove items to cart
- Adjust quantities
- Real-time total calculation
- Order summary before checkout

### Animations
- Smooth fade-in/fade-out transitions between pages
- Hover effects on cards and buttons
- Scale animations on buttons
- Slide-down animations for mobile menu

## 🎬 Media Integration

### Images
- High-quality food images sourced from Unsplash
- Responsive image optimization with lazy loading
- Images scale smoothly on hover

### Videos
- Embedded video showcase in the "Experience Our Cuisine" section
- Professional restaurant video demonstration
- Mobile-friendly video player with controls

## 📲 WhatsApp Integration

- Direct WhatsApp ordering with pre-filled messages
- One-click calling functionality
- Share location to Google Maps
- Restaurant contact: **919876543210**

## 🎯 Usage

1. **Browse Menu**: Select items from different categories
2. **Filter Dishes**: Use category and diet filters
3. **Add to Cart**: Click "Add" button on any dish
4. **Review Cart**: Click shopping cart icon to review items
5. **Order**: Enter name, phone, address and click "Order on WhatsApp"
6. **Confirmation**: Automatically redirected to WhatsApp to confirm order

## 🌐 Customer Information

- **Restaurant**: Amber Restaurant
- **Established**: 1990s
- **Location**: A Wing Shop No.1, Saikripa C.H.S, Opp Bandra Court, Bandra East, Mumbai
- **Phone**: 919876543210
- **Hours**: Open till 12:00 AM
- **Rating**: 4.1★ (2,924 Reviews)
- **Price for Two**: ₹650

## 🍛 Menu Categories

1. **Starters**: Tandoori, Paneer Tikka, Lollipop, Veg Crispy
2. **Main Course**: Butter Chicken, Paneer Butter Masala, Biryani varieties
3. **Indo-Chinese**: Chow Mein, Hakka Noodles, Fried Rice
4. **Breads**: Naan, Garlic Naan, Paratha

## 🎯 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## 📝 Environment Variables

Current environment variables (can be extended):
- VITE_API_URL (optional for future API integration)

## 🔒 Security Notes

- Direct WhatsApp links use secure API
- No sensitive data stored in browser
- Google Maps links verified
- External video sources trusted

## 🚀 Deployment

### Deploy to Netlify/Vercel
```bash
npm run build
# Deploy the dist/ folder
```

### Deploy to GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## 📊 Performance

- **Vite**: Lightning-fast development and build
- **Code Splitting**: Automatic optimization
- **Lazy Loading**: Images load progressively
- **Minification**: Production build automatically minified
- **CSS Purging**: Unused Tailwind classes removed

## 🤝 Support & Contact

For issues or feature requests:
- **WhatsApp**: [Order Now](https://wa.me/919876543210)
- **Phone**: 919876543210
- **Location**: Bandra East, Mumbai

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Built with React + Vite
- Styled with Tailwind CSS
- Icons from Lucide React
- Food images from Unsplash
- Video example from Google Commons

---

**Last Updated**: April 2026  
**Version**: 1.0.0
