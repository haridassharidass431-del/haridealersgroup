import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLOTHING_PRODUCTS, ClothingProduct, getWhatsAppLink } from '../data/businessData';
import { useCart } from '../context/cartStore';
import { ShoppingBag, Search, Check, AlertCircle, X, MessageCircle, Layers } from 'lucide-react';

export const ClothingPage: React.FC = () => {
  const { addToCart } = useCart();

  // Filtering states
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ClothingProduct | null>(null);

  // Detail Modal selection states
  const [modalSize, setModalSize] = useState<string>('');
  const [modalColor, setModalColor] = useState<string>('');
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Garments' },
    { id: 't-shirts', label: 'T-Shirts & Tops' },
    { id: 'hoodies', label: 'Hoodies & Fleece' },
    { id: 'ethnic', label: 'Ethnic & Kurtas' },
    { id: 'workwear', label: 'Overshirts & Cargo' },
    { id: 'accessories', label: 'Totes & Gear' },
  ];

  const filteredProducts = useMemo(() => {
    return CLOTHING_PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const openProductModal = (product: ClothingProduct) => {
    setSelectedProduct(product);
    setModalSize(product.sizes[0] || 'Standard');
    setModalColor(product.colors[0] || 'Standard');
    setAddedAnimation(false);
  };

  const handleAddToCartFromModal = () => {
    if (!selectedProduct) return;
    addToCart(selectedProduct, modalSize, modalColor, 1);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      setSelectedProduct(null);
    }, 700);
  };

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-20 left-1/3 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HERO HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Curated Apparel Line &middot; Direct Sourcing</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-editorial">
            HARIDEALERS <span className="text-gold-gradient">TEXTILES &amp; APPAREL</span>
          </h1>

          <p className="text-sm sm:text-base text-[#9da0ab] leading-relaxed">
            Everyday heavyweight cotton essentials, modern streetwear drops, and artisanal ethnic silhouettes. 
            Crafted for endurance, clean silhouettes, and tactile comfort.
          </p>

          {/* Honest Transparent Mode Alert */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-amber-200 text-xs max-w-2xl mx-auto flex items-start gap-3 text-left">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-amber-300 block">Catalog &amp; Preview Notice</strong>
              <p className="text-[#9da0ab]">
                Automated credit/debit payment processing is in configuration. You can add items to your cart to estimate costs and 
                instantly submit orders directly to our team via <strong>WhatsApp Direct</strong> or visit our counter!
              </p>
            </div>
          </div>
        </div>

        {/* --- FILTERS & SEARCH BAR --- */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#D4AF37] text-black font-bold shadow-md shadow-[#D4AF37]/20'
                      : 'bg-white/5 text-[#9da0ab] hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#656874] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search styles, fabric, GSM..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-white/5 border border-white/10 rounded-full text-white placeholder-[#656874] focus:outline-none focus:border-[#D4AF37]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#656874] hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

          </div>
        </div>

        {/* --- PRODUCT GRID --- */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 glass-panel rounded-2xl border border-white/10 max-w-lg mx-auto p-8">
            <ShoppingBag className="w-12 h-12 text-[#656874] mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-1">No garments match your filter</h3>
            <p className="text-xs text-[#9da0ab] mb-4">Try resetting your category or search terms to see all available styles.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-5 py-2 text-xs font-semibold bg-[#D4AF37] text-black rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl glass-panel border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#D4AF37]/40 transition-all shadow-lg hover:shadow-2xl"
              >
                {/* Product Image */}
                <div 
                  className="relative h-80 overflow-hidden cursor-pointer"
                  onClick={() => openProductModal(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.isNew && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D4AF37] text-black uppercase">
                        New Drop
                      </span>
                    )}
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[#9da0ab] border border-white/10">
                      ★ {product.rating}
                    </span>
                  </div>

                  {/* Quick View Pill */}
                  <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white border border-white/20">
                      Click for Quick View &amp; Sizes
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                      {product.category}
                    </span>
                    <h3 
                      onClick={() => openProductModal(product)}
                      className="text-base font-bold text-white font-editorial mt-0.5 mb-1.5 hover:text-[#F5D77F] cursor-pointer transition-colors line-clamp-1"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#9da0ab] line-clamp-2 leading-relaxed mb-3">
                      {product.description}
                    </p>

                    <div className="text-[11px] text-[#656874] flex items-center gap-1.5 mb-4">
                      <Layers className="w-3 h-3 text-[#D4AF37]" />
                      <span className="truncate">{product.material}</span>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-extrabold text-[#F5D77F] font-mono">
                          ₹{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-[#656874] line-through font-mono">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-emerald-400">In Stock</span>
                    </div>

                    <button
                      onClick={() => openProductModal(product)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-[#D4AF37] text-white hover:text-black border border-white/10 hover:border-[#D4AF37] transition-all flex items-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Select Size</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* --- BULK ORDERS & CUSTOM PRINTING CALLOUT --- */}
        <div className="mt-20 p-8 rounded-3xl glass-panel-gold border border-[#D4AF37]/30 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5D77F]">
              Corporate &middot; Colleges &middot; Merchandise
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-editorial">
              Need Custom Printed T-Shirts or Bulk Uniforms?
            </h2>
            <p className="text-xs text-[#9da0ab] max-w-xl">
              We provide customized screen printing, embroidery, and bulk textile sourcing for businesses, institutions, and college events starting from 25 pieces.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Hello! I would like to inquire about bulk custom t-shirts / merchandise printing.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-bold text-xs bg-[#D4AF37] text-black hover:bg-[#F5D77F] transition-all shrink-0 flex items-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire Bulk Sourcing</span>
          </a>
        </div>

      </div>

      {/* --- PRODUCT DETAIL MODAL --- */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              aria-hidden="true"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl bg-[#0e0f15] border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2 text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-[#9da0ab] hover:text-white hover:bg-black/90 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative h-64 md:h-full">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f15] via-transparent to-transparent md:hidden" />
              </div>

              {/* Modal Specs */}
              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-xl font-bold font-editorial text-white mt-1">
                    {selectedProduct.name}
                  </h2>
                  
                  <div className="flex items-baseline gap-2 mt-2 mb-4">
                    <span className="text-2xl font-extrabold text-[#F5D77F] font-mono">
                      ₹{selectedProduct.price}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xs text-[#656874] line-through font-mono">
                        ₹{selectedProduct.originalPrice}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#9da0ab] leading-relaxed mb-4">
                    {selectedProduct.description}
                  </p>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-[#9da0ab] space-y-1 mb-4">
                    <div>Fabric: <strong className="text-white">{selectedProduct.material}</strong></div>
                    <div>Fit: <strong className="text-white">Relaxed Contemporary</strong></div>
                  </div>

                  {/* Size Selector */}
                  <div className="space-y-2 mb-4">
                    <label className="text-xs font-semibold text-white uppercase tracking-wider block">
                      Select Size
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.sizes.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setModalSize(s)}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                            modalSize === s
                              ? 'bg-[#D4AF37] text-black shadow-md'
                              : 'bg-white/5 text-[#9da0ab] border border-white/10 hover:border-white/20'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Selector */}
                  <div className="space-y-2 mb-4">
                    <label className="text-xs font-semibold text-white uppercase tracking-wider block">
                      Available Color
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.colors.map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setModalColor(c)}
                          className={`px-3 py-1 rounded-lg text-xs transition-all ${
                            modalColor === c
                              ? 'bg-white text-black font-semibold'
                              : 'bg-white/5 text-[#9da0ab] border border-white/10 hover:border-white/20'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal CTA Buttons */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <button
                    onClick={handleAddToCartFromModal}
                    className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                      addedAnimation
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#D4AF37] text-black hover:bg-[#F5D77F]'
                    }`}
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart ({modalSize} &middot; {modalColor})</span>
                      </>
                    )}
                  </button>

                  <a
                    href={getWhatsAppLink(`Hello! I want to inquire about purchasing ${selectedProduct.name} (Size: ${modalSize}, Color: ${modalColor}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl font-medium text-xs bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Inquire this Piece on WhatsApp</span>
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
