import {
    ArrowLeft,
    Calendar,
    CheckCircle,
    Clock,
    CreditCard,
    Download,
    Home,
    Mail,
    MapPin,
    MessageCircle,
    Package,
    Phone,
    Printer,
    Share2,
    Star,
    Truck,
} from 'lucide-react';
import { useState } from 'react';

const OrderPage = () => {
    const [activeTab, setActiveTab] = useState('details');

    // Order data
    const order = {
        orderNumber: 'ORD-2026-48392',
        orderDate: 'January 28, 2026',
        estimatedDelivery: 'February 2, 2026',
        status: 'processing',
        trackingNumber: 'TRK1Z9876543210',

        customer: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+1 (555) 123-4567',
        },

        shippingAddress: {
            name: 'John Doe',
            street: '123 Main Street',
            apartment: 'Apt 4B',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
            country: 'United States',
        },

        billingAddress: {
            name: 'John Doe',
            street: '123 Main Street',
            apartment: 'Apt 4B',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
            country: 'United States',
        },

        payment: {
            method: 'Credit Card',
            last4: '4242',
            brand: 'Visa',
        },

        items: [
            {
                id: 1,
                name: 'Wireless Headphones Pro',
                price: 299.99,
                quantity: 1,
                image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
                sku: 'WHP-001',
            },
            {
                id: 2,
                name: 'Minimalist Leather Wallet',
                price: 89.99,
                quantity: 2,
                image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop',
                sku: 'MLW-002',
            },
            {
                id: 3,
                name: 'Smart Watch Series 8',
                price: 449.99,
                quantity: 1,
                image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop',
                sku: 'SWS-003',
            },
        ],

        pricing: {
            subtotal: 929.97,
            shipping: 15.99,
            tax: 74.4,
            discount: 0,
            total: 1020.36,
        },

        timeline: [
            {
                status: 'Order Placed',
                date: 'Jan 28, 2026 10:30 AM',
                description: 'Your order has been received and confirmed',
                completed: true,
            },
            {
                status: 'Processing',
                date: 'Jan 28, 2026 02:15 PM',
                description: 'Your order is being prepared for shipment',
                completed: true,
                current: true,
            },
            {
                status: 'Shipped',
                date: 'Expected Jan 29, 2026',
                description: 'Your order will be shipped soon',
                completed: false,
            },
            {
                status: 'Out for Delivery',
                date: 'Expected Feb 1, 2026',
                description: 'Package is on the way to you',
                completed: false,
            },
            {
                status: 'Delivered',
                date: 'Expected Feb 2, 2026',
                description: 'Package will be delivered to your address',
                completed: false,
            },
        ],
    };

    const getStatusColor = (status) => {
        const colors = {
            processing: 'bg-blue-100 text-blue-700 border-blue-200',
            shipped: 'bg-purple-100 text-purple-700 border-purple-200',
            delivered: 'bg-emerald-100 text-emerald-700 border-emerald-200',
            cancelled: 'bg-rose-100 text-rose-700 border-rose-200',
        };
        return colors[status] || 'bg-slate-100 text-slate-700 border-slate-200';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
            {/* Header */}
            <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-lg">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button className="rounded-lg p-2 transition-colors duration-200 hover:bg-slate-100">
                                <ArrowLeft className="h-6 w-6 text-slate-600" />
                            </button>
                            <div>
                                <h1 className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-3xl font-bold text-transparent">
                                    Order Details
                                </h1>
                                <p className="mt-1 text-sm text-slate-600">
                                    Order #{order.orderNumber}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button className="rounded-lg p-2 transition-colors duration-200 hover:bg-slate-100">
                                <Share2 className="h-5 w-5 text-slate-600" />
                            </button>
                            <button className="rounded-lg p-2 transition-colors duration-200 hover:bg-slate-100">
                                <Printer className="h-5 w-5 text-slate-600" />
                            </button>
                            <button className="flex items-center space-x-2 rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-cyan-700">
                                <Download className="h-4 w-4" />
                                <span className="hidden sm:inline">
                                    Invoice
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Success Banner */}
                <div className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-2xl">
                    <div className="p-8 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                    <CheckCircle className="h-10 w-10" />
                                </div>
                                <div>
                                    <h2 className="mb-2 text-3xl font-bold">
                                        Order Confirmed!
                                    </h2>
                                    <p className="text-lg text-emerald-50">
                                        Thank you for your purchase,{' '}
                                        {order.customer.name}
                                    </p>
                                </div>
                            </div>
                            <div className="hidden text-right md:block">
                                <p className="mb-1 text-emerald-50">
                                    Estimated Delivery
                                </p>
                                <p className="text-2xl font-bold">
                                    {order.estimatedDelivery}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Order Status Timeline */}
                        <div className="rounded-3xl bg-white p-8 shadow-xl">
                            <h3 className="mb-6 flex items-center text-2xl font-bold text-slate-900">
                                <Truck className="mr-3 h-6 w-6 text-cyan-600" />
                                Order Status & Tracking
                            </h3>

                            <div className="relative">
                                {order.timeline.map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative pb-8 last:pb-0"
                                    >
                                        {index !==
                                            order.timeline.length - 1 && (
                                            <div
                                                className={`absolute top-12 left-6 h-full w-0.5 ${
                                                    item.completed
                                                        ? 'bg-gradient-to-b from-cyan-600 to-blue-600'
                                                        : 'bg-slate-200'
                                                }`}
                                            />
                                        )}

                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                                                    item.completed
                                                        ? 'scale-110 bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                                                        : item.current
                                                          ? 'scale-110 animate-pulse border-4 border-cyan-600 bg-white text-cyan-600 shadow-lg'
                                                          : 'border-2 border-slate-200 bg-slate-100 text-slate-400'
                                                }`}
                                            >
                                                {item.completed ? (
                                                    <CheckCircle className="h-6 w-6" />
                                                ) : item.current ? (
                                                    <Clock className="h-6 w-6" />
                                                ) : (
                                                    <Package className="h-6 w-6" />
                                                )}
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <div className="mb-1 flex items-center justify-between">
                                                    <h4
                                                        className={`text-lg font-bold ${
                                                            item.completed ||
                                                            item.current
                                                                ? 'text-slate-900'
                                                                : 'text-slate-400'
                                                        }`}
                                                    >
                                                        {item.status}
                                                    </h4>
                                                    <span
                                                        className={`text-sm font-medium ${
                                                            item.completed ||
                                                            item.current
                                                                ? 'text-cyan-600'
                                                                : 'text-slate-400'
                                                        }`}
                                                    >
                                                        {item.date}
                                                    </span>
                                                </div>
                                                <p
                                                    className={`text-sm ${
                                                        item.completed ||
                                                        item.current
                                                            ? 'text-slate-600'
                                                            : 'text-slate-400'
                                                    }`}
                                                >
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Tracking Number */}
                            <div className="mt-8 rounded-2xl border-2 border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="mb-1 text-sm font-semibold text-slate-600">
                                            Tracking Number
                                        </p>
                                        <p className="text-xl font-bold tracking-wider text-slate-900">
                                            {order.trackingNumber}
                                        </p>
                                    </div>
                                    <button className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-cyan-700">
                                        Track Package
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="rounded-3xl bg-white p-8 shadow-xl">
                            <h3 className="mb-6 flex items-center text-2xl font-bold text-slate-900">
                                <Package className="mr-3 h-6 w-6 text-cyan-600" />
                                Order Items ({order.items.length})
                            </h3>

                            <div className="space-y-4">
                                {order.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center space-x-6 rounded-2xl bg-slate-50 p-6 transition-colors duration-200 hover:bg-slate-100"
                                    >
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-white">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <h4 className="mb-1 text-lg font-bold text-slate-900">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-slate-600">
                                                SKU: {item.sku}
                                            </p>
                                            <p className="mt-1 text-sm text-slate-600">
                                                Quantity: {item.quantity}
                                            </p>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-slate-900">
                                                $
                                                {(
                                                    item.price * item.quantity
                                                ).toFixed(2)}
                                            </p>
                                            <p className="text-sm text-slate-600">
                                                ${item.price.toFixed(2)} each
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="mt-6 flex flex-wrap gap-3">
                                <button className="flex min-w-[200px] flex-1 items-center justify-center space-x-2 rounded-xl border-2 border-slate-200 px-6 py-3 font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50">
                                    <Star className="h-4 w-4" />
                                    <span>Rate Products</span>
                                </button>
                                <button className="flex min-w-[200px] flex-1 items-center justify-center space-x-2 rounded-xl border-2 border-slate-200 px-6 py-3 font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50">
                                    <MessageCircle className="h-4 w-4" />
                                    <span>Contact Support</span>
                                </button>
                            </div>
                        </div>

                        {/* Shipping & Billing Info */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {/* Shipping Address */}
                            <div className="rounded-2xl bg-white p-6 shadow-xl">
                                <h3 className="mb-4 flex items-center text-lg font-bold text-slate-900">
                                    <MapPin className="mr-2 h-5 w-5 text-cyan-600" />
                                    Shipping Address
                                </h3>
                                <div className="space-y-1 text-slate-700">
                                    <p className="font-semibold">
                                        {order.shippingAddress.name}
                                    </p>
                                    <p>{order.shippingAddress.street}</p>
                                    {order.shippingAddress.apartment && (
                                        <p>{order.shippingAddress.apartment}</p>
                                    )}
                                    <p>
                                        {order.shippingAddress.city},{' '}
                                        {order.shippingAddress.state}{' '}
                                        {order.shippingAddress.zipCode}
                                    </p>
                                    <p>{order.shippingAddress.country}</p>
                                </div>
                            </div>

                            {/* Billing Address */}
                            <div className="rounded-2xl bg-white p-6 shadow-xl">
                                <h3 className="mb-4 flex items-center text-lg font-bold text-slate-900">
                                    <Home className="mr-2 h-5 w-5 text-cyan-600" />
                                    Billing Address
                                </h3>
                                <div className="space-y-1 text-slate-700">
                                    <p className="font-semibold">
                                        {order.billingAddress.name}
                                    </p>
                                    <p>{order.billingAddress.street}</p>
                                    {order.billingAddress.apartment && (
                                        <p>{order.billingAddress.apartment}</p>
                                    )}
                                    <p>
                                        {order.billingAddress.city},{' '}
                                        {order.billingAddress.state}{' '}
                                        {order.billingAddress.zipCode}
                                    </p>
                                    <p>{order.billingAddress.country}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6 lg:col-span-1">
                        {/* Order Summary */}
                        <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-xl">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">
                                Order Summary
                            </h3>

                            {/* Order Info */}
                            <div className="mb-6 space-y-3 border-b border-slate-200 pb-6">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="flex items-center text-slate-600">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        Order Date
                                    </span>
                                    <span className="font-semibold text-slate-900">
                                        {order.orderDate}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="flex items-center text-slate-600">
                                        <Package className="mr-2 h-4 w-4" />
                                        Order Number
                                    </span>
                                    <span className="font-semibold text-slate-900">
                                        {order.orderNumber}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600">
                                        Status
                                    </span>
                                    <span
                                        className={`rounded-full border-2 px-3 py-1 text-xs font-bold ${getStatusColor(order.status)}`}
                                    >
                                        {order.status.charAt(0).toUpperCase() +
                                            order.status.slice(1)}
                                    </span>
                                </div>
                            </div>

                            {/* Price Breakdown */}
                            <div className="mb-6 space-y-3 border-b border-slate-200 pb-6">
                                <div className="flex justify-between text-slate-600">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">
                                        ${order.pricing.subtotal.toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Shipping</span>
                                    <span className="font-semibold">
                                        ${order.pricing.shipping.toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Tax</span>
                                    <span className="font-semibold">
                                        ${order.pricing.tax.toFixed(2)}
                                    </span>
                                </div>
                                {order.pricing.discount > 0 && (
                                    <div className="flex justify-between text-emerald-600">
                                        <span>Discount</span>
                                        <span className="font-semibold">
                                            -$
                                            {order.pricing.discount.toFixed(2)}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Total */}
                            <div className="mb-6 flex items-center justify-between">
                                <span className="text-lg font-bold text-slate-900">
                                    Total Paid
                                </span>
                                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-3xl font-bold text-transparent">
                                    ${order.pricing.total.toFixed(2)}
                                </span>
                            </div>

                            {/* Payment Method */}
                            <div className="rounded-xl bg-slate-50 p-4">
                                <p className="mb-2 text-sm font-semibold text-slate-600">
                                    Payment Method
                                </p>
                                <div className="flex items-center space-x-3">
                                    <CreditCard className="h-5 w-5 text-slate-600" />
                                    <span className="font-semibold text-slate-900">
                                        {order.payment.brand} ••••{' '}
                                        {order.payment.last4}
                                    </span>
                                </div>
                            </div>

                            {/* Customer Support */}
                            <div className="mt-6 rounded-2xl border-2 border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 p-6">
                                <h4 className="mb-3 font-bold text-slate-900">
                                    Need Help?
                                </h4>
                                <div className="space-y-3">
                                    <a
                                        href={`mailto:${order.customer.email}`}
                                        className="flex items-center space-x-3 text-slate-700 transition-colors duration-200 hover:text-cyan-600"
                                    >
                                        <Mail className="h-4 w-4" />
                                        <span className="text-sm">
                                            Email Support
                                        </span>
                                    </a>
                                    <a
                                        href={`tel:${order.customer.phone}`}
                                        className="flex items-center space-x-3 text-slate-700 transition-colors duration-200 hover:text-cyan-600"
                                    >
                                        <Phone className="h-4 w-4" />
                                        <span className="text-sm">
                                            Call Support
                                        </span>
                                    </a>
                                    <button className="flex items-center space-x-3 text-slate-700 transition-colors duration-200 hover:text-cyan-600">
                                        <MessageCircle className="h-4 w-4" />
                                        <span className="text-sm">
                                            Live Chat
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="rounded-3xl bg-white p-6 shadow-xl">
                            <h3 className="mb-4 text-lg font-bold text-slate-900">
                                Quick Actions
                            </h3>
                            <div className="space-y-3">
                                <button className="w-full transform rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-cyan-700 hover:to-blue-700">
                                    Reorder Items
                                </button>
                                <button className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50">
                                    Return Items
                                </button>
                                <button className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50">
                                    View Invoice
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
        </div>
    );
};

export default OrderPage;
