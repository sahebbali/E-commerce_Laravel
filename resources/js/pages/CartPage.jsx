import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    Heart,
    Minus,
    Plus,
    ShoppingBag,
    Tag,
    Trash2,
} from 'lucide-react';
import { useState } from 'react';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Wireless Headphones Pro',
            price: 299.99,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
            category: 'Electronics',
            inStock: true,
        },
        {
            id: 2,
            name: 'Minimalist Leather Wallet',
            price: 89.99,
            quantity: 2,
            image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop',
            category: 'Accessories',
            inStock: true,
        },
        {
            id: 3,
            name: 'Smart Watch Series 8',
            price: 449.99,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop',
            category: 'Electronics',
            inStock: true,
        },
        {
            id: 4,
            name: 'Premium Coffee Beans',
            price: 24.99,
            quantity: 3,
            image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
            category: 'Food & Beverage',
            inStock: true,
        },
    ]);

    const [promoCode, setPromoCode] = useState('');
    const [appliedPromo, setAppliedPromo] = useState(null);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item,
            ),
        );
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const applyPromoCode = () => {
        if (promoCode.toUpperCase() === 'SAVE20') {
            setAppliedPromo({ code: promoCode, discount: 0.2 });
        } else if (promoCode.toUpperCase() === 'FIRST10') {
            setAppliedPromo({ code: promoCode, discount: 0.1 });
        }
    };

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );
    const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
    const shipping = subtotal > 500 ? 0 : 15.99;
    const tax = (subtotal - discount) * 0.08;
    const total = subtotal - discount + shipping + tax;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Header */}
            <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-3">
                            <ShoppingBag className="h-8 w-8 text-indigo-600" />
                            <h1 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
                                Shopping Cart
                            </h1>
                        </Link>
                        <span className="text-sm font-medium text-slate-600">
                            {cartItems.length}{' '}
                            {cartItems.length === 1 ? 'item' : 'items'}
                        </span>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Cart Items */}
                    <div className="space-y-4 lg:col-span-2">
                        {cartItems.length === 0 ? (
                            <div className="rounded-2xl bg-white p-12 text-center shadow-lg">
                                <ShoppingBag className="mx-auto mb-4 h-20 w-20 text-slate-300" />
                                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                                    Your cart is empty
                                </h3>
                                <p className="mb-6 text-slate-600">
                                    Add items to get started
                                </p>
                                <button className="transform rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-indigo-700">
                                    Continue Shopping
                                </button>
                            </div>
                        ) : (
                            cartItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                                    style={{
                                        animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                                    }}
                                >
                                    <div className="p-6">
                                        <div className="flex gap-6">
                                            {/* Product Image */}
                                            <div className="relative flex-shrink-0">
                                                <div className="h-32 w-32 overflow-hidden rounded-xl bg-slate-100 transition-transform duration-300 group-hover:scale-105">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                <button className="absolute -top-2 -right-2 rounded-full bg-white p-2 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                                                    <Heart className="h-4 w-4 text-rose-500" />
                                                </button>
                                            </div>

                                            {/* Product Details */}
                                            <div className="min-w-0 flex-1">
                                                <div className="mb-2 flex items-start justify-between">
                                                    <div>
                                                        <span className="mb-2 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                                                            {item.category}
                                                        </span>
                                                        <h3 className="mb-1 text-lg font-bold text-slate-900">
                                                            {item.name}
                                                        </h3>
                                                        <p className="text-sm font-medium text-emerald-600">
                                                            ✓ In Stock
                                                        </p>
                                                    </div>
                                                    <button
                                                        onClick={() =>
                                                            removeItem(item.id)
                                                        }
                                                        className="cursor-pointer rounded-lg p-2 text-slate-400 transition-all duration-200 hover:bg-rose-50 hover:text-rose-500"
                                                    >
                                                        <Trash2 className="h-5 w-5" />
                                                    </button>
                                                </div>

                                                {/* Price and Quantity */}
                                                <div className="mt-4 flex items-center justify-between">
                                                    <div className="flex items-center space-x-3 rounded-xl bg-slate-50 p-1">
                                                        <button
                                                            onClick={() =>
                                                                updateQuantity(
                                                                    item.id,
                                                                    item.quantity -
                                                                        1,
                                                                )
                                                            }
                                                            className="cursor-pointer rounded-lg p-2 transition-all duration-200 hover:bg-white disabled:opacity-50"
                                                            disabled={
                                                                item.quantity <=
                                                                1
                                                            }
                                                        >
                                                            <Minus className="h-4 w-4 text-slate-600" />
                                                        </button>
                                                        <span className="w-8 text-center font-bold text-slate-900">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() =>
                                                                updateQuantity(
                                                                    item.id,
                                                                    item.quantity +
                                                                        1,
                                                                )
                                                            }
                                                            className="cursor-pointer rounded-lg p-2 transition-all duration-200 hover:bg-white"
                                                        >
                                                            <Plus className="h-4 w-4 text-slate-600" />
                                                        </button>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-2xl font-bold text-slate-900">
                                                            $
                                                            {(
                                                                item.price *
                                                                item.quantity
                                                            ).toFixed(2)}
                                                        </p>
                                                        <p className="text-sm text-slate-500">
                                                            $
                                                            {item.price.toFixed(
                                                                2,
                                                            )}{' '}
                                                            each
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-lg">
                            <h2 className="mb-6 text-xl font-bold text-slate-900">
                                Order Summary
                            </h2>

                            {/* Promo Code */}
                            <div className="mb-6">
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Promo Code
                                </label>
                                <div className="flex gap-2">
                                    <div className="relative flex-1">
                                        <Tag className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-slate-400" />
                                        <input
                                            type="text"
                                            value={promoCode}
                                            onChange={(e) =>
                                                setPromoCode(e.target.value)
                                            }
                                            placeholder="Enter code"
                                            className="w-full rounded-xl border-2 border-slate-200 py-3 pr-4 pl-10 transition-colors duration-200 focus:border-indigo-500 focus:outline-none"
                                        />
                                    </div>
                                    <button
                                        onClick={applyPromoCode}
                                        className="cursor-pointer rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-slate-800"
                                    >
                                        Apply
                                    </button>
                                </div>
                                {appliedPromo && (
                                    <p className="mt-2 text-sm font-medium text-emerald-600">
                                        ✓ Code "{appliedPromo.code}" applied!{' '}
                                        {appliedPromo.discount * 100}% off
                                    </p>
                                )}
                                <p className="mt-2 text-xs text-slate-500">
                                    Try: SAVE20 or FIRST10
                                </p>
                            </div>

                            {/* Price Breakdown */}
                            <div className="mb-6 space-y-3 border-b border-slate-200 pb-6">
                                <div className="flex justify-between text-slate-600">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">
                                        ${subtotal.toFixed(2)}
                                    </span>
                                </div>
                                {appliedPromo && (
                                    <div className="flex justify-between text-emerald-600">
                                        <span>
                                            Discount (
                                            {appliedPromo.discount * 100}%)
                                        </span>
                                        <span className="font-semibold">
                                            -${discount.toFixed(2)}
                                        </span>
                                    </div>
                                )}
                                <div className="flex justify-between text-slate-600">
                                    <span>Shipping</span>
                                    <span className="font-semibold">
                                        {shipping === 0 ? (
                                            <span className="text-emerald-600">
                                                FREE
                                            </span>
                                        ) : (
                                            `$${shipping.toFixed(2)}`
                                        )}
                                    </span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Tax (8%)</span>
                                    <span className="font-semibold">
                                        ${tax.toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="mb-6 flex items-center justify-between">
                                <span className="text-lg font-bold text-slate-900">
                                    Total
                                </span>
                                <span className="text-3xl font-bold text-indigo-600">
                                    ${total.toFixed(2)}
                                </span>
                            </div>

                            {/* Free Shipping Banner */}
                            {shipping > 0 && (
                                <div className="mb-6 rounded-xl border-2 border-amber-200 bg-amber-50 p-4">
                                    <p className="text-center text-sm font-medium text-amber-800">
                                        Add ${(500 - subtotal).toFixed(2)} more
                                        for FREE shipping! 🚚
                                    </p>
                                </div>
                            )}

                            {/* Checkout Button */}
                            <Link
                                href="/checkout"
                                disabled={cartItems.length === 0}
                                className="flex w-full transform cursor-pointer items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                            >
                                <span>Proceed to Checkout</span>
                                <ArrowRight className="h-5 w-5" />
                            </Link>

                            {/* Security Badge */}
                            <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-slate-500">
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Secure Checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default CartPage;
