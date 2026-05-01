import React, { useState, useMemo, Suspense, lazy, useEffect } from 'react';
import { ShoppingCart, Menu, X, MapPin, Phone, MessageCircle, UtensilsCrossed, Star, Clock, Users, Flame, Moon, Sun } from 'lucide-react';
import { menuData, getAllDishes, filterDishes } from './menuData';
const MenuSection = lazy(() => import('./MenuSection.jsx'));

export default function AmberRestaurant() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [menuFilter, setMenuFilter] = useState('Starters');
  const [userInfo, setUserInfo] = useState({ name: '', phone: '', address: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [errors, setErrors] = useState({});

  const [pageTransition, setPageTransition] = useState('fade-in');
  const [searchQuery, setSearchQuery] = useState('');
  const restaurantPhone = '919892214148';

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Update localStorage when dark mode changes
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const heroImages = [
    '/hero/hero1.avif',
    '/hero/hero2.avif',
    '/hero/hero3.avif',
    '/hero/hero4.avif',
  ];

  // Use imported menu data
  const allDishes = useMemo(() => getAllDishes(), []);

  const filteredDishes = useMemo(() => {
    let result = allDishes;
    
    // Apply menu filter
    if (menuFilter === 'all') {
      result = allDishes;
    } else if (menuFilter === 'veg') {
      result = allDishes.filter(d => d.veg);
    } else if (menuFilter === 'nonveg') {
      result = allDishes.filter(d => !d.veg);
    } else {
      result = allDishes.filter(d => d.cuisine === menuFilter);
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(d => d.name.toLowerCase().startsWith(query));
    }
    
    return result;
  }, [menuFilter, allDishes, searchQuery]);

  const changePage = (page) => {
    setPageTransition('fade-out');
    setTimeout(() => {
      setCurrentPage(page);
      setMobileMenuOpen(false);
      setPageTransition('fade-in');
    }, 200);
  };

  const addToCart = (dish) => {
    const existing = cart.find(item => item.id === dish.id);
    if (existing) {
      setCart(cart.map(item => item.id === dish.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...dish, qty: 1 }]);
    }
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => item.id === id ? { ...item, qty } : item));
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const generateWhatsAppMessage = () => {
    const items = cart.map(item => `${item.qty}x ${item.name} – ₹${item.price * item.qty}`).join('\n');
    const message = `Hello Amber Restaurant, I would like to order:\n\n${items}\n\nTotal: ₹${cartTotal}\n\nName: ${userInfo.name || 'Guest'}\nPhone: ${userInfo.phone || 'Not provided'}\nAddress: ${userInfo.address || 'Not provided'}`;
    return encodeURIComponent(message);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!userInfo.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!userInfo.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(userInfo.phone.trim())) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }
    
    if (!userInfo.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    if (!validateForm()) return;
    const waLink = `https://wa.me/${restaurantPhone}?text=${generateWhatsAppMessage()}`;
    window.open(waLink, '_blank');
    setCart([]);
    setShowCheckout(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
        .fade-in { animation: fadeIn 0.4s ease-in-out; }
        .fade-out { animation: fadeOut 0.2s ease-in-out; }
        .dish-card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .dish-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15); }
        .btn-primary { transition: all 0.3s ease; }
        .btn-primary:hover { transform: scale(1.05); box-shadow: 0 10px 25px rgba(217, 119, 6, 0.3); }
        .btn-primary:active { transform: scale(0.98); }
      `}</style>

      <header className={`sticky top-0 bg-white/95 backdrop-blur-lg shadow-lg z-50 ${pageTransition} dark:bg-gray-800/95 dark:shadow-2xl transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div onClick={() => changePage('home')} className="flex items-center gap-3 cursor-pointer hover:opacity-80">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-orange-600 rounded-lg blur-lg opacity-50"></div>
              <div className="relative bg-gradient-to-br from-amber-700 to-orange-600 p-2 rounded-lg">
                <UtensilsCrossed className="text-white w-6 h-6" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">Amber</h1>
              <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold">Est. 1990s • Bandra East</p>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm">
            <button onClick={() => changePage('home')} className={`font-semibold transition ${currentPage === 'home' ? 'text-amber-700 dark:text-amber-400' : 'text-gray-600 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-400'}`}>Home</button>
            <button onClick={() => changePage('menu')} className={`font-semibold transition ${currentPage === 'menu' ? 'text-amber-700 dark:text-amber-400' : 'text-gray-600 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-400'}`}>Menu</button>
            <button onClick={() => changePage('orders')} className={`font-semibold transition ${currentPage === 'orders' ? 'text-amber-700 dark:text-amber-400' : 'text-gray-600 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-400'}`}>Orders</button>
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-amber-100 dark:bg-gray-700 hover:bg-amber-200 dark:hover:bg-gray-600 transition-colors">
              {darkMode ? <Sun className="text-amber-700 w-6 h-6" /> : <Moon className="text-amber-700 dark:text-amber-300 w-6 h-6" />}
            </button>
            <button onClick={() => setShowCheckout(true)} className="relative group">
              <div className="p-2 rounded-lg bg-amber-100 group-hover:bg-amber-200 dark:bg-gray-700 dark:group-hover:bg-gray-600 transition-colors">
                <ShoppingCart className="text-amber-700 dark:text-amber-400 w-6 h-6" />
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors">
              {mobileMenuOpen ? <X className="w-6 h-6 dark:text-white" /> : <Menu className="w-6 h-6 dark:text-white" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-amber-50 to-white dark:from-gray-800 dark:to-gray-700 border-t border-amber-200 dark:border-gray-600 p-4 space-y-3 transition-colors">
            <button onClick={() => changePage('home')} className="block w-full text-left p-3 text-amber-900 dark:text-amber-200 font-semibold hover:bg-amber-100 dark:hover:bg-gray-600 rounded-lg transition-colors">Home</button>
            <button onClick={() => changePage('menu')} className="block w-full text-left p-3 text-amber-900 dark:text-amber-200 font-semibold hover:bg-amber-100 dark:hover:bg-gray-600 rounded-lg transition-colors">Menu</button>
            <button onClick={() => changePage('orders')} className="block w-full text-left p-3 text-amber-900 dark:text-amber-200 font-semibold hover:bg-amber-100 dark:hover:bg-gray-600 rounded-lg transition-colors">My Orders</button>
          </div>
        )}
      </header>

      {currentPage === 'home' && (
        <div>
          {/* Hero Section */}
     <div className="relative overflow-hidden min-h-[70vh] text-white">

  {/* Optimized Image Background */}
<div className="absolute inset-0 overflow-hidden">
  <video
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/hero/amber_video.mp4" type="video/mp4" />
  </video>

  {/* Overlay (same effect as your gradient) */}
  <div className="absolute inset-0 bg-black/40"></div>
</div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/60 to-black/40"></div>
            <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-28 text-center text-white">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                Amber Restaurant
              </h1>
              <p className="text-xl md:text-2xl mb-4 opacity-95 drop-shadow-lg">Authentic North Indian & Indo-Chinese Cuisine</p>
              <p className="text-lg md:text-xl mb-12 opacity-90 drop-shadow-lg">Serving Bandra East since 1990s</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button onClick={() => changePage('menu')} className="btn-primary bg-white text-amber-700 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 shadow-lg">
                  📋 View Menu
                </button>
                <a href={`https://wa.me/${restaurantPhone}`} target="_blank" rel="noopener noreferrer" className="btn-primary bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Order Now
                </a>
              </div>
            </div>

            {/* Hero Images */}
            <div className="relative max-w-6xl mx-auto px-4 pb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {heroImages.map((img, idx) => (
    <div
      key={idx}
      className="group rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
    >
          <img
        src={img}
        alt={`Featured dish ${idx + 1}`}
        loading="lazy"
        decoding="async"
        className="w-full h-32 md:h-44 object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  ))}
</div>
            </div>
          </div>

          {/* Stats */}
          <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transition-colors">
              <div className="text-center group hover:scale-105 transition-all">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-3 fill-yellow-500 drop-shadow-lg group-hover:rotate-12" />
                <p className="text-3xl font-bold text-amber-700 dark:text-amber-400 mb-1">4.8★</p>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">2,500+ Reviews</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all">
                <Users className="w-12 h-12 text-orange-500 mx-auto mb-3 group-hover:rotate-12" />
                <p className="text-3xl font-bold text-amber-700 dark:text-amber-400 mb-1">₹600</p>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Avg Cost for Two</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all">
                <Clock className="w-12 h-12 text-red-500 mx-auto mb-3 group-hover:rotate-12" />
                <p className="text-3xl font-bold text-amber-700 dark:text-amber-400 mb-1">45 min</p>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Delivery Time</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all">
                <Flame className="w-12 h-12 text-orange-500 mx-auto mb-3 group-hover:rotate-12" />
                <p className="text-3xl font-bold text-amber-700 dark:text-amber-400 mb-1">30+ Years</p>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Culinary Excellence</p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="max-w-6xl mx-auto px-4 py-20">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transition-colors">
              <div className="grid md:grid-cols-2 gap-12 items-center p-12">
                <div className="relative">
<div className="overflow-hidden rounded-2xl shadow-2xl w-full h-80 md:h-96">
  <video
    className="w-full h-full object-cover"
    src="/hero/amber_video2.mp4"
    autoPlay
    muted
    playsInline
    loop
    preload="auto"
  >
    Your browser does not support the video tag.
  </video>
</div>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-amber-900 dark:text-amber-200 mb-6">Live Kitchen Experience</h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    Our master chefs prepare your favorites with traditional techniques, using premium ingredients sourced fresh daily.
                  </p>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center font-bold text-amber-700 dark:text-amber-300 text-xl">✓</span>
                      <span className="text-gray-800 dark:text-gray-200">Fresh ingredients daily</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center font-bold text-amber-700 dark:text-amber-300 text-xl">✓</span>
                      <span className="text-gray-800 dark:text-gray-200">Traditional family recipes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center font-bold text-amber-700 dark:text-amber-300 text-xl">✓</span>
                      <span className="text-gray-800 dark:text-gray-200">Lightning fast delivery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 text-center border-4 border-amber-200 dark:border-amber-700 transition-colors">
              <MapPin className="w-16 h-16 text-amber-700 dark:text-amber-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-amber-900 dark:text-amber-200 mb-4">Find Us</h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                A Wing Shop No.1, Saikripa C.H.S, Opp Bandra Court, Bandra East, Mumbai
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:919876543210" className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
                  <Phone className="w-5 h-5" /> Call: 919876543210
                </a>
                <a href={`https://wa.me/${restaurantPhone}`} target="_blank" className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Order
                </a>
                <a href="https://maps.google.com/?q=Amber+Restaurant+Bandra+East" target="_blank" className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
                  📍 Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

{currentPage === 'menu' && (
        <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div></div>}>
          <MenuSection 
            filteredDishes={filteredDishes}
            menuFilter={menuFilter}
            setMenuFilter={setMenuFilter}
            addToCart={addToCart}
            cartCount={cartCount}
            setShowCheckout={setShowCheckout}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Suspense>
      )}

      {currentPage === 'orders' && (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-200 text-center mb-12">Recent Orders</h2>
          <div className="space-y-6">
            {Array.from({length: 3}).map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl dark:shadow-2xl p-8 border-l-8 border-amber-500 dark:border-amber-600 hover:shadow-2xl dark:hover:shadow-3xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Order #{1000 + i}</h3>
                    <p className="text-gray-500 dark:text-gray-400">Delivered 2 hours ago</p>
                  </div>
                  <span className="px-6 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full font-bold text-lg">Delivered ✅</span>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-8 p-6 bg-amber-50 dark:bg-gray-700 rounded-2xl transition-colors">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-amber-900 dark:text-amber-200">Chicken Tandoori (2x)</h4>
                    <h4 className="font-bold text-lg mb-3 text-amber-900 dark:text-amber-200">Butter Chicken (1x)</h4>
                    <h4 className="font-bold text-lg text-amber-900 dark:text-amber-200">Garlic Naan (4x)</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-amber-700 dark:text-amber-400">₹850</p>
                    <p className="text-gray-600 dark:text-gray-400">incl. delivery</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showCheckout && (
        <div className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-colors">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-colors">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">Your Cart</h3>
              <button onClick={() => setShowCheckout(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-2xl transition">
                <X className="w-7 h-7 dark:text-white" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingCart className="w-24 h-24 text-gray-400 dark:text-gray-500 mx-auto mb-6 opacity-50" />
                <p className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-2">Your cart is empty</p>
                <button
  onClick={() => {
    setShowCheckout(false);   // ✅ close modal first
    changePage('menu');       // ✅ then navigate
  }}
  className="bg-amber-600 dark:bg-amber-700 text-white px-8 py-3 rounded-2xl font-bold hover:bg-amber-700 dark:hover:bg-amber-800 transition"
>
  Start Ordering
</button>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-8 max-h-80 overflow-y-auto">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border border-amber-200 dark:border-gray-500 transition-colors">
                      <div>
                        <h4 className="font-bold text-lg text-amber-900 dark:text-amber-200">{item.name}</h4>
                        <p className="text-amber-700 dark:text-amber-400 font-semibold">₹{item.price}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-xl px-3 py-2 border border-amber-200 dark:border-gray-500 transition-colors">
                        <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-10 h-10 rounded-lg hover:bg-amber-100 dark:hover:bg-gray-700 font-bold text-xl transition">-</button>
                        <span className="w-12 text-center font-bold text-xl text-amber-800 dark:text-amber-300">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-10 h-10 rounded-lg hover:bg-amber-100 dark:hover:bg-gray-700 font-bold text-xl transition">+</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 p-6 rounded-3xl mb-8 border-4 border-amber-200 dark:border-amber-700 shadow-inner transition-colors">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subtotal</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                    ₹{cartTotal}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <input type="text" placeholder="Full Name" value={userInfo.name} onChange={(e) => { setUserInfo({...userInfo, name: e.target.value}); if (errors.name) setErrors({...errors, name: ''})}} className={`w-full p-4 border-2 rounded-2xl focus:outline-none transition font-semibold text-lg dark:bg-gray-700 dark:text-white ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-amber-200 dark:border-gray-600 focus:border-amber-500 dark:focus:border-amber-400'}`} />
                    {errors.name && <p className="text-red-500 text-sm font-semibold mt-1">✕ {errors.name}</p>}
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone Number" value={userInfo.phone} onChange={(e) => { setUserInfo({...userInfo, phone: e.target.value}); if (errors.phone) setErrors({...errors, phone: ''})}} className={`w-full p-4 border-2 rounded-2xl focus:outline-none transition font-semibold text-lg dark:bg-gray-700 dark:text-white ${errors.phone ? 'border-red-500 dark:border-red-500' : 'border-amber-200 dark:border-gray-600 focus:border-amber-500 dark:focus:border-amber-400'}`} />
                    {errors.phone && <p className="text-red-500 text-sm font-semibold mt-1">✕ {errors.phone}</p>}
                  </div>
                  <div>
                    <textarea placeholder="Complete Address" value={userInfo.address} onChange={(e) => { setUserInfo({...userInfo, address: e.target.value}); if (errors.address) setErrors({...errors, address: ''})}} rows="3" className={`w-full p-4 border-2 rounded-2xl focus:outline-none transition font-semibold text-lg dark:bg-gray-700 dark:text-white resize-none ${errors.address ? 'border-red-500 dark:border-red-500' : 'border-amber-200 dark:border-gray-600 focus:border-amber-500 dark:focus:border-amber-400'}`} />
                    {errors.address && <p className="text-red-500 text-sm font-semibold mt-1">✕ {errors.address}</p>}
                  </div>
                </div>

                <button onClick={handlePlaceOrder} className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-6 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                  <MessageCircle className="w-8 h-8" />
                  Place Order on WhatsApp (₹{cartTotal})
                </button>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 font-medium">✓ Instant WhatsApp confirmation & tracking</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
