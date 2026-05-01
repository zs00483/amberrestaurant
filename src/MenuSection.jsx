import React, { useMemo, useState, useEffect, useRef } from 'react';
import { ShoppingCart, Leaf, Flame } from 'lucide-react';

// Memoized dish card for performance optimization
// Lightweight lazy image with blur-up placeholder
const LazyImage = ({ src, alt, className }) => {
  const imgRef = useRef();
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // derive a tiny placeholder by replacing the size in Unsplash source URLs (e.g. /800x600/ -> /40x30/)
  const lowSrc = src ? src.replace(/\/\d+x\d+\//, '/40x30/') : src;

  useEffect(() => {
    if (!imgRef.current) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      });
    }, { rootMargin: '200px' });
    obs.observe(imgRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden h-48 bg-gray-200 dark:bg-gray-700 ${className || ''}`}>
      {!loaded && (
        <img src={lowSrc} alt={alt} className="absolute inset-0 w-full h-full object-cover filter blur-md scale-105" aria-hidden />
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
};


const DishCard = React.memo(({ dish, addToCart }) => (
  <div className="dish-card group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 dark:shadow-2xl">
    {/* Image */}
    <LazyImage src={dish.img} alt={dish.name} />
    {/* Badge */}
    <div className="absolute top-3 right-3">
      {dish.veg ? (
        <span className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          <Leaf className="w-4 h-4" /> Veg
        </span>
      ) : (
        <span className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          <Flame className="w-4 h-4" /> Non-Veg
        </span>
      )}
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{dish.name}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">{dish.desc}</p>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold text-amber-700 dark:text-amber-400">₹{dish.price}</p>
        <button
          onClick={() => addToCart(dish)}
          className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 active:scale-95"
          title="Add to cart"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
));

DishCard.displayName = 'DishCard';

export default function MenuSection({ filteredDishes, menuFilter, setMenuFilter, addToCart, cartCount, setShowCheckout, searchQuery, setSearchQuery }) {
  const filterOptions = useMemo(() => [
    { id: 'all', label: '🍽️ All Items' },
    { id: 'Starters', label: '🥘 Starters' },
    { id: 'Main Course', label: '🍛 Main Course' },
    { id: 'Mughlai', label: '👑 Mughlai' },
    { id: 'Chinese', label: '🥢 Chinese' },
    { id: 'Sweets', label: '🍰 Sweets' },
    { id: 'veg', label: '🥬 Vegetarian' },
    { id: 'nonveg', label: '🍖 Non-Veg' },
  ], []);
  // incremental rendering for performance: render only a slice and load more on scroll
  const [visibleCount, setVisibleCount] = useState(24);
  const sentinelRef = useRef();

  useEffect(() => {
    // when filter changes, reset visible count and clear search
    setVisibleCount(24);
    setSearchQuery('');
  }, [menuFilter, setSearchQuery]);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setVisibleCount(c => Math.min(filteredDishes.length, c + 24));
        }
      });
    }, { rootMargin: '400px' });
    obs.observe(sentinelRef.current);
    return () => obs.disconnect();
  }, [filteredDishes.length]);

  const visibleDishes = filteredDishes.slice(0, visibleCount);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="mb-12 text-center animate-fadeIn">
          <h2 className="text-5xl font-bold text-amber-900 dark:text-amber-200 mb-3">Our Menu</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">Authentic flavors • {filteredDishes.length} Items</p>
        </div>

        {/* Filter Buttons - Optimized Grid */}
        <div className="mb-12 flex flex-wrap gap-2 justify-center">
          {filterOptions.map(option => (
            <button
              key={option.id}
              onClick={() => setMenuFilter(option.id)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 whitespace-nowrap ${
                menuFilter === option.id
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-700 text-amber-700 dark:text-amber-300 border-2 border-amber-200 dark:border-amber-700 hover:border-amber-500 dark:hover:border-amber-500'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Search Bar - Replaces Item Count */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search dishes in Menu)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-full border-2 border-amber-300 dark:border-amber-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
            />
          </div>
         
        </div>

        {/* Dishes Grid - Optimized for lazy loading and incremental rendering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
          {visibleDishes.length > 0 ? (
            visibleDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} addToCart={addToCart} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-2xl font-semibold text-gray-600 dark:text-gray-400">No items found</p>
            </div>
          )}
        </div>

        {/* Sentinel for incremental loading */}
        <div ref={sentinelRef} className="mt-8 text-center">
          {visibleCount < filteredDishes.length ? (
            <p className="text-gray-600 dark:text-gray-400">Loading more items…</p>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">End of menu</p>
          )}
        </div>
      </div>
    </section>
  );
}
