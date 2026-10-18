import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/cartStore';
import { getWhatsAppLink } from '../../data/businessData';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice, totalCount, isCartOpen, setIsCartOpen } = useCart();

  const generateWhatsAppOrderText = () => {
    let text = `*NEW ORDER INQUIRY - HARIDEALERS TEXTILES*\n\n`;
    text += `Hello! I would like to place an order for the following items:\n\n`;
    cart.forEach((item, index) => {
      text += `${index + 1}. *${item.product.name}*\n`;
      text += `   - Size: ${item.selectedSize} | Color: ${item.selectedColor}\n`;
      text += `   - Qty: ${item.quantity} × ₹${item.product.price} = ₹${item.quantity * item.product.price}\n\n`;
    });
    text += `*Estimated Total: ₹${totalPrice}*\n\n`;
    text += `Please confirm availability and payment/delivery instructions. Thank you!`;
    return text;
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-[#0e0f15] border-l border-white/10 shadow-2xl flex flex-col text-white"
            >
              {/* Header */}
              <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#13141d]/70">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
                  <h2 className="font-editorial text-lg font-bold tracking-wide">Your Selection</h2>
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-[#9da0ab]">
                    {totalCount} {totalCount === 1 ? 'item' : 'items'}
                  </span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-lg text-[#9da0ab] hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#9da0ab]">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                      <ShoppingBag className="w-8 h-8 text-[#656874]" />
                    </div>
                    <p className="text-base font-semibold text-white mb-1">Your cart is currently empty</p>
                    <p className="text-xs max-w-xs mb-6">Explore our curated Haridealers apparel, heavyweight streetwear, and lifestyle pieces.</p>
                    <Link
                      to="/shop"
                      onClick={() => setIsCartOpen(false)}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#D4AF37] text-black hover:bg-[#F5D77F] transition-all"
                    >
                      Browse Clothing Catalog
                    </Link>
                  </div>
                ) : (
                  <>
                    {cart.map((item) => (
                      <div
                        key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                        className="flex gap-3 p-3 bg-white/[0.03] border border-white/10 rounded-xl hover:border-white/20 transition-all"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-18 h-22 object-cover rounded-lg border border-white/10 shrink-0"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start gap-1">
                              <h3 className="text-sm font-semibold text-white line-clamp-1">{item.product.name}</h3>
                              <button
                                onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                                className="text-[#656874] hover:text-rose-400 p-1"
                                title="Remove item"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <div className="text-[11px] text-[#9da0ab] mt-0.5 space-x-2">
                              <span>Size: <strong className="text-white">{item.selectedSize}</strong></span>
                              <span>&middot;</span>
                              <span>Color: <strong className="text-white">{item.selectedColor}</strong></span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-3">
                            <span className="text-sm font-bold text-[#F5D77F]">
                              ₹{item.product.price * item.quantity}
                            </span>
                            <div className="flex items-center gap-1.5 bg-black/40 border border-white/10 rounded-lg p-0.5">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, -1)}
                                className="p-1 hover:bg-white/10 rounded text-gray-300"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs px-1.5 font-mono">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, 1)}
                                className="p-1 hover:bg-white/10 rounded text-gray-300"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={clearCart}
                        className="text-[11px] text-[#656874] hover:text-rose-400 flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Empty Cart</span>
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Footer with honest payment disclosure & WhatsApp order button */}
              {cart.length > 0 && (
                <div className="p-5 border-t border-white/10 bg-[#13141d]/80 space-y-4">
                  {/* Transparent Disclosure */}
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong>Catalog & Preview Mode:</strong> Automated online card checkout is currently being configured. You can submit your order directly via WhatsApp or pickup in store.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-[#9da0ab]">
                      <span>Items Subtotal</span>
                      <span>₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-xs text-[#9da0ab]">
                      <span>Shipping / Packaging</span>
                      <span className="text-emerald-400">Calculated on order</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                      <span>Total Estimate</span>
                      <span className="text-[#F5D77F] font-mono">₹{totalPrice}</span>
                    </div>
                  </div>

                  {/* Primary WhatsApp Order CTA */}
                  <a
                    href={getWhatsAppLink(generateWhatsAppOrderText())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.01]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order via WhatsApp Direct</span>
                  </a>

                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-full py-2.5 text-xs text-[#9da0ab] hover:text-white transition-colors"
                  >
                    Continue Browsing
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
