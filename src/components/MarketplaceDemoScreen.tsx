import React, { useState } from 'react';
import { ShoppingBag, Laptop, Shirt, BookOpen, Check, Tag, ShieldCheck, Plus, Minus, Trash2, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { MARKETPLACE_PRODUCTS, MarketplaceProduct, DEVELOPER_PROFILE } from '../data/portfolioData';

export const MarketplaceDemoScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<{ product: MarketplaceProduct; quantity: number }[]>([
    { product: MARKETPLACE_PRODUCTS[0], quantity: 1 },
    { product: MARKETPLACE_PRODUCTS[3], quantity: 1 },
  ]);
  const [studentId, setStudentId] = useState<string>('REVA-2024-CS189');
  const [isStudentVerified, setIsStudentVerified] = useState<boolean>(true);
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);

  const filteredProducts = MARKETPLACE_PRODUCTS.filter((prod) => {
    if (selectedCategory === 'all') return true;
    return prod.category === selectedCategory;
  });

  const addToCart = (product: MarketplaceProduct) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: MarketplaceProduct; quantity: number }[]
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  // Pricing calculations
  const totalOriginalPrice = cart.reduce(
    (sum, item) => sum + item.product.originalPrice * item.quantity,
    0
  );
  const totalSubsidizedPrice = cart.reduce(
    (sum, item) => sum + item.product.discountedPrice * item.quantity,
    0
  );
  const totalSavings = totalOriginalPrice - totalSubsidizedPrice;
  const isFreeDelivery = totalSubsidizedPrice > 500;
  const deliveryFee = isFreeDelivery ? 0 : 40;
  const finalPayable = totalSubsidizedPrice + deliveryFee;

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12 space-y-10">
      {/* Platform Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#3B82F6]">
          <ShoppingBag className="h-3.5 w-3.5" />
          <span>Interactive Project Showcase · Built by Monish (REVA University)</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#F8FAFC]">
          CampusMart: Online Affordable Goods Platform
        </h1>
        <p className="font-mono text-sm text-[#94A3B8] max-w-2xl leading-relaxed">
          "I have created this website so people can get all the goods they need for a lesser rate. This is majorly for students and is also available to others." Explore the live e-commerce catalog featuring electronics, apparel, and campus essentials.
        </p>
      </div>

      {/* Student Discount Verification Bar */}
      <div className="glass-card rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-[#3B82F6]/30 bg-[#13192B]/60">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-[#3B82F6]/15 border border-[#3B82F6]/30 flex items-center justify-center text-[#3B82F6]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="font-mono text-xs font-bold text-[#F8FAFC] flex items-center gap-2">
              <span>Student Subsidy Verification Engine</span>
              <span className="rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] px-2 py-0.5">
                Active 45% Subsidy
              </span>
            </div>
            <p className="font-mono text-xs text-[#94A3B8]">
              REVA University students & all learners receive special lower rates on electronics & apparel.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto font-mono text-xs">
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Enter Student ID / Roll No"
            className="input-terminal px-3 py-1.5 text-xs w-full md:w-48 text-[#F8FAFC]"
          />
          <button
            onClick={() => setIsStudentVerified(true)}
            className="btn-primary text-xs py-1.5 px-3 shrink-0"
          >
            <Check className="h-3.5 w-3.5" />
            <span>Verify ID</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Products Catalog on Left, Live Cart on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Products List & Category Tabs */}
        <div className="lg:col-span-8 space-y-6">
          {/* Category Filter Controls */}
          <div className="flex items-center gap-2 overflow-x-auto p-1 bg-[#0D111D] border border-white/[0.08] rounded-lg font-mono text-xs">
            {[
              { id: 'all', label: 'All Student Goods' },
              { id: 'electronics', label: 'Electronics & Gadgets' },
              { id: 'clothes', label: 'Campus Clothes & Apparel' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#3B82F6] text-white shadow-sm shadow-[#3B82F6]/30 font-medium'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="glass-card rounded-xl p-5 flex flex-col justify-between space-y-4 relative overflow-hidden group"
              >
                <div className="space-y-3">
                  {/* Badge & Rating */}
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="tag-tech text-[10px] text-[#3B82F6] border-[#3B82F6]/30 bg-[#3B82F6]/10">
                      {product.studentTag}
                    </span>
                    <span className="text-amber-400 font-semibold text-[11px]">
                      ★ {product.rating}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-bold text-base text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="font-mono text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Price & Action Button */}
                <div className="pt-3 border-t border-white/[0.08] space-y-3 font-mono">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-[10px] text-[#64748B]">Student Subsidized Rate</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-emerald-400 tabular-nums">
                          ₹{product.discountedPrice}
                        </span>
                        <span className="text-xs text-[#64748B] line-through tabular-nums">
                          ₹{product.originalPrice}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] font-bold text-[#8B5CF6]">
                        Save {product.discountPct}%
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full btn-secondary text-xs py-2 flex items-center justify-center gap-2 hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10"
                  >
                    <Plus className="h-3.5 w-3.5 text-[#3B82F6]" />
                    <span>Add to Student Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Cart & Student Savings Calculator */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel-elevated rounded-xl p-5 space-y-5 font-mono text-xs sticky top-20">
            {/* Cart Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4 text-[#3B82F6]" />
                <span className="font-bold text-sm text-[#F8FAFC]">Student Cart</span>
              </div>
              <span className="text-[#3B82F6] font-bold">
                {cart.reduce((a, b) => a + b.quantity, 0)} Items
              </span>
            </div>

            {/* Cart Items List */}
            {cart.length === 0 ? (
              <div className="py-8 text-center text-[#64748B]">
                Your student cart is empty. Add items from the catalog!
              </div>
            ) : (
              <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3 rounded-lg border border-white/[0.06] bg-[#090D16] space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[#F8FAFC] font-semibold text-[11px] leading-tight">
                        {item.product.name}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-[#64748B] hover:text-rose-400 transition-colors p-0.5"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2 bg-[#0D111D] border border-white/[0.08] rounded px-1.5 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="text-[#94A3B8] hover:text-[#F8FAFC]"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-[#F8FAFC] font-bold px-1 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="text-[#94A3B8] hover:text-[#F8FAFC]"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-emerald-400 font-bold tabular-nums">
                          ₹{item.product.discountedPrice * item.quantity}
                        </div>
                        <div className="text-[10px] text-[#64748B] line-through tabular-nums">
                          ₹{item.product.originalPrice * item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Price Breakdown */}
            {cart.length > 0 && (
              <div className="pt-3 border-t border-white/[0.08] space-y-2 text-xs">
                <div className="flex justify-between text-[#94A3B8]">
                  <span>Retail Market Price:</span>
                  <span className="line-through tabular-nums">₹{totalOriginalPrice}</span>
                </div>

                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Student Subsidized Savings:</span>
                  <span className="tabular-nums">- ₹{totalSavings}</span>
                </div>

                <div className="flex justify-between text-[#94A3B8]">
                  <span>Campus Delivery:</span>
                  <span className="tabular-nums">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-400 font-bold">FREE (Orders &gt; ₹500)</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>

                <div className="pt-2 border-t border-white/[0.08] flex justify-between text-sm font-bold text-[#F8FAFC]">
                  <span>Total Payable:</span>
                  <span className="text-[#3B82F6] text-base tabular-nums">
                    ₹{finalPayable}
                  </span>
                </div>

                {/* Simulated Order Button */}
                <button
                  onClick={() => setOrderPlaced(true)}
                  className="w-full btn-primary mt-2 py-2.5 text-xs"
                >
                  <span>Place Subsidized Order</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            {/* Order Confirmation Feedback */}
            {orderPlaced && (
              <div className="rounded-lg border border-emerald-500/40 bg-emerald-950/20 p-3 text-center space-y-1.5 animate-fadeIn">
                <div className="text-emerald-400 font-bold text-xs flex items-center justify-center gap-1.5">
                  <Check className="h-4 w-4" />
                  <span>Order Dispatched to REVA Campus!</span>
                </div>
                <p className="text-[10px] text-[#94A3B8]">
                  Estimated delivery to student hostel/campus center within 24 hours. You saved ₹{totalSavings}!
                </p>
                <button
                  onClick={() => setOrderPlaced(false)}
                  className="text-[10px] text-[#3B82F6] hover:underline pt-1"
                >
                  Continue Browsing
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
