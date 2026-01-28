import {
    ArrowLeft,
    Building,
    CheckCircle,
    CreditCard,
    Home,
    Lock,
    Mail,
    MapPin,
    Package,
    Phone,
    Shield,
    Truck,
    User,
} from 'lucide-react';
import { useState } from 'react';

const CheckoutPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Shipping Information
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States',

        // Payment Information
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',

        // Shipping Method
        shippingMethod: 'standard',

        // Additional
        saveInfo: false,
        newsletter: false,
    });

    // Dummy order data
    const orderItems = [
        {
            id: 1,
            name: 'Wireless Headphones Pro',
            price: 299.99,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop',
        },
        {
            id: 2,
            name: 'Minimalist Leather Wallet',
            price: 89.99,
            quantity: 2,
            image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=150&h=150&fit=crop',
        },
        {
            id: 3,
            name: 'Smart Watch Series 8',
            price: 449.99,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=150&h=150&fit=crop',
        },
    ];

    const shippingMethods = [
        {
            id: 'standard',
            name: 'Standard Shipping',
            time: '5-7 business days',
            price: 15.99,
        },
        {
            id: 'express',
            name: 'Express Shipping',
            time: '2-3 business days',
            price: 29.99,
        },
        {
            id: 'overnight',
            name: 'Overnight Shipping',
            time: 'Next business day',
            price: 49.99,
        },
    ];

    const subtotal = orderItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );
    const shippingCost =
        shippingMethods.find((m) => m.id === formData.shippingMethod)?.price ||
        0;
    const tax = subtotal * 0.08;
    const total = subtotal + shippingCost + tax;

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const formatCardNumber = (value) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || '';
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        if (parts.length) {
            return parts.join(' ');
        } else {
            return value;
        }
    };

    const steps = [
        { number: 1, name: 'Shipping', icon: MapPin },
        { number: 2, name: 'Payment', icon: CreditCard },
        { number: 3, name: 'Review', icon: CheckCircle },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
            {/* Header */}
            <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-lg">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button className="rounded-lg p-2 transition-colors duration-200 hover:bg-slate-100">
                                <ArrowLeft className="h-6 w-6 text-slate-600" />
                            </button>
                            <div>
                                <h1 className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-3xl font-bold text-transparent">
                                    Secure Checkout
                                </h1>
                                <p className="mt-1 text-sm text-slate-600">
                                    Complete your purchase securely
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-600">
                            <Shield className="h-5 w-5" />
                            <span className="hidden text-sm font-semibold sm:block">
                                SSL Encrypted
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Steps */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-12 flex items-center justify-center">
                    {steps.map((step, index) => (
                        <div key={step.number} className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div
                                    className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${
                                        currentStep >= step.number
                                            ? 'scale-110 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg'
                                            : 'border-2 border-slate-200 bg-white text-slate-400'
                                    }`}
                                >
                                    <step.icon className="h-6 w-6" />
                                </div>
                                <span
                                    className={`mt-2 text-sm font-semibold ${
                                        currentStep >= step.number
                                            ? 'text-violet-600'
                                            : 'text-slate-400'
                                    }`}
                                >
                                    {step.name}
                                </span>
                            </div>
                            {index < steps.length - 1 && (
                                <div
                                    className={`mx-4 h-1 w-24 transition-all duration-300 ${
                                        currentStep > step.number
                                            ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600'
                                            : 'bg-slate-200'
                                    }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Main Form */}
                    <div className="lg:col-span-2">
                        {/* Step 1: Shipping Information */}
                        {currentStep === 1 && (
                            <div className="animate-fadeIn rounded-3xl bg-white p-8 shadow-xl">
                                <h2 className="mb-6 flex items-center text-2xl font-bold text-slate-900">
                                    <MapPin className="mr-3 h-6 w-6 text-violet-600" />
                                    Shipping Information
                                </h2>

                                <div className="space-y-6">
                                    {/* Contact Information */}
                                    <div>
                                        <h3 className="mb-4 text-lg font-semibold text-slate-900">
                                            Contact Details
                                        </h3>
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                                    First Name *
                                                </label>
                                                <div className="relative">
                                                    <User className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-slate-400" />
                                                    <input
                                                        type="text"
                                                        name="firstName"
                                                        value={
                                                            formData.firstName
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="w-full rounded-xl border-2 border-slate-200 py-3 pr-4 pl-11 transition-colors duration-200 focus:border-violet-500 focus:outline-none"
                                                        placeholder="John"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                                    Last Name *
                                                </label>
                                                <div className="relative">
                                                    <User className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-slate-400" />
                                                    <input
                                                        type="text"
                                                        name="lastName"
                                                        value={
                                                            formData.lastName
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="w-full rounded-xl border-2 border-slate-200 py-3 pr-4 pl-11 transition-colors duration-200 focus:border-violet-500 focus:outline-none"
                                                        placeholder="Doe"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                                Email Address *
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-slate-400" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border-2 border-slate-200 py-3 pr-4 pl-11 transition-colors duration-200 focus:border-violet-500 focus:outline-none"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                                Phone Number *
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-slate-400" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full rounded-xl border-2 border-slate-200 py-3 pr-4 pl-11 transition-colors duration-200 focus:border-violet-500 focus:outline-none"
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Shipping Address */}
                                    <div>
                                        <h3 className="mb-4 text-lg font-semibold text-slate-900">
                                            Shipping Address
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                                    Street Address *
                                                </label>
                                                <div className="relative">
                                                    <Home className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-slate-400" />
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        value={formData.address}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="w-full rounded-xl border-2 border-slate-200 py-3 pr-4 pl-11 transition-colors duration-200 focus:border-violet-500 focus:outline-none"
                                                        placeholder="123 Main Street"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                                    Apartment, suite, etc.
                                                    (optional)
                                                </label>
                                                <div className="relative">
                                                    <Building className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-slate-400" />
                                                    <input
                                                        type="text"
                                                        name="apartment"
                                                        value={
                                                            formData.apartment
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="w-full rounded-xl border-2 border-slate-200 py-3 pr-4 pl-11 transition-colors duration-200 focus:border-violet-500 focus:outline-none"
                                                        placeholder="Apt 4B"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                                <div>
                                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                                        City *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        value={formData.city}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors duration-200 focus:border-violet-500 focus:outline-none"
                                                        placeholder="New York"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                                        State *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="state"
                                                        value={formData.state}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors duration-200 focus:border-violet-500 focus:outline-none"
                                                        placeholder="NY"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                                        ZIP Code *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="zipCode"
                                                        value={formData.zipCode}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors duration-200 focus:border-violet-500 focus:outline-none"
                                                        placeholder="10001"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Shipping Method */}
                                    <div>
                                        <h3 className="mb-4 text-lg font-semibold text-slate-900">
                                            Shipping Method
                                        </h3>
                                        <div className="space-y-3">
                                            {shippingMethods.map((method) => (
                                                <label
                                                    key={method.id}
                                                    className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-all duration-200 ${
                                                        formData.shippingMethod ===
                                                        method.id
                                                            ? 'border-violet-500 bg-violet-50'
                                                            : 'border-slate-200 hover:border-slate-300'
                                                    }`}
                                                >
                                                    <div className="flex items-center space-x-4">
                                                        <input
                                                            type="radio"
                                                            name="shippingMethod"
                                                            value={method.id}
                                                            checked={
                                                                formData.shippingMethod ===
                                                                method.id
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            className="h-5 w-5 text-violet-600"
                                                        />
                                                        <div>
                                                            <div className="flex items-center space-x-2">
                                                                <Truck className="h-5 w-5 text-violet-600" />
                                                                <span className="font-semibold text-slate-900">
                                                                    {
                                                                        method.name
                                                                    }
                                                                </span>
                                                            </div>
                                                            <span className="text-sm text-slate-600">
                                                                {method.time}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="font-bold text-slate-900">
                                                        $
                                                        {method.price.toFixed(
                                                            2,
                                                        )}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="saveInfo"
                                            checked={formData.saveInfo}
                                            onChange={handleInputChange}
                                            className="h-4 w-4 rounded text-violet-600"
                                        />
                                        <label className="text-sm text-slate-600">
                                            Save this information for next time
                                        </label>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setCurrentStep(2)}
                                    className="mt-8 w-full transform cursor-pointer rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-violet-700 hover:to-fuchsia-700"
                                >
                                    Continue to Payment
                                </button>
                            </div>
                        )}

                        {/* Step 2: Payment Information */}
                        {currentStep === 2 && (
                            <div className="animate-fadeIn rounded-3xl bg-white p-8 shadow-xl">
                                <h2 className="mb-6 flex items-center text-2xl font-bold text-slate-900">
                                    <CreditCard className="mr-3 h-6 w-6 text-violet-600" />
                                    Payment Information
                                </h2>

                                <div className="space-y-6">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Card Number *
                                        </label>
                                        <div className="relative">
                                            <CreditCard className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-slate-400" />
                                            <input
                                                type="text"
                                                name="cardNumber"
                                                value={formatCardNumber(
                                                    formData.cardNumber,
                                                )}
                                                onChange={(e) =>
                                                    handleInputChange({
                                                        target: {
                                                            name: 'cardNumber',
                                                            value: formatCardNumber(
                                                                e.target.value,
                                                            ),
                                                        },
                                                    })
                                                }
                                                maxLength="19"
                                                className="w-full rounded-xl border-2 border-slate-200 py-3 pr-4 pl-11 text-lg tracking-wider transition-colors duration-200 focus:border-violet-500 focus:outline-none"
                                                placeholder="1234 5678 9012 3456"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Cardholder Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-slate-400" />
                                            <input
                                                type="text"
                                                name="cardName"
                                                value={formData.cardName}
                                                onChange={handleInputChange}
                                                className="w-full rounded-xl border-2 border-slate-200 py-3 pr-4 pl-11 transition-colors duration-200 focus:border-violet-500 focus:outline-none"
                                                placeholder="JOHN DOE"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                                Expiry Date *
                                            </label>
                                            <input
                                                type="text"
                                                name="expiryDate"
                                                value={formData.expiryDate}
                                                onChange={handleInputChange}
                                                maxLength="5"
                                                className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 transition-colors duration-200 focus:border-violet-500 focus:outline-none"
                                                placeholder="MM/YY"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                                CVV *
                                            </label>
                                            <div className="relative">
                                                <Lock className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-slate-400" />
                                                <input
                                                    type="text"
                                                    name="cvv"
                                                    value={formData.cvv}
                                                    onChange={handleInputChange}
                                                    maxLength="4"
                                                    className="w-full rounded-xl border-2 border-slate-200 py-3 pr-4 pl-11 transition-colors duration-200 focus:border-violet-500 focus:outline-none"
                                                    placeholder="123"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Security Badge */}
                                    <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4">
                                        <div className="flex items-start space-x-3">
                                            <Shield className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-600" />
                                            <div>
                                                <h4 className="mb-1 font-semibold text-emerald-900">
                                                    Your payment is secure
                                                </h4>
                                                <p className="text-sm text-emerald-700">
                                                    We use SSL encryption to
                                                    protect your personal
                                                    information and payment
                                                    details.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex gap-4">
                                    <button
                                        onClick={() => setCurrentStep(1)}
                                        className="flex-1 cursor-pointer rounded-xl border-2 border-slate-300 py-4 text-lg font-bold text-slate-700 transition-all duration-200 hover:bg-slate-50"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={() => setCurrentStep(3)}
                                        className="flex-1 transform cursor-pointer rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-violet-700 hover:to-fuchsia-700"
                                    >
                                        Review Order
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Order Review */}
                        {currentStep === 3 && (
                            <div className="animate-fadeIn rounded-3xl bg-white p-8 shadow-xl">
                                <h2 className="mb-6 flex items-center text-2xl font-bold text-slate-900">
                                    <CheckCircle className="mr-3 h-6 w-6 text-violet-600" />
                                    Review Your Order
                                </h2>

                                {/* Shipping Details */}
                                <div className="mb-6 rounded-xl bg-slate-50 p-6">
                                    <div className="mb-4 flex items-start justify-between">
                                        <h3 className="text-lg font-semibold text-slate-900">
                                            Shipping Address
                                        </h3>
                                        <button
                                            onClick={() => setCurrentStep(1)}
                                            className="cursor-pointer text-sm font-semibold text-violet-600 hover:text-violet-700"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                    <div className="text-slate-700">
                                        <p className="font-semibold">
                                            {formData.firstName}{' '}
                                            {formData.lastName}
                                        </p>
                                        <p>{formData.address}</p>
                                        {formData.apartment && (
                                            <p>{formData.apartment}</p>
                                        )}
                                        <p>
                                            {formData.city}, {formData.state}{' '}
                                            {formData.zipCode}
                                        </p>
                                        <p className="mt-2">{formData.email}</p>
                                        <p>{formData.phone}</p>
                                    </div>
                                </div>

                                {/* Payment Method */}
                                <div className="mb-6 rounded-xl bg-slate-50 p-6">
                                    <div className="mb-4 flex items-start justify-between">
                                        <h3 className="text-lg font-semibold text-slate-900">
                                            Payment Method
                                        </h3>
                                        <button
                                            onClick={() => setCurrentStep(2)}
                                            className="cursor-pointer text-sm font-semibold text-violet-600 hover:text-violet-700"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CreditCard className="h-6 w-6 text-slate-600" />
                                        <span className="text-slate-700">
                                            •••• •••• ••••{' '}
                                            {formData.cardNumber.slice(-4)}
                                        </span>
                                    </div>
                                </div>

                                {/* Order Items */}
                                <div className="mb-6">
                                    <h3 className="mb-4 text-lg font-semibold text-slate-900">
                                        Order Items
                                    </h3>
                                    <div className="space-y-3">
                                        {orderItems.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center space-x-4 rounded-xl bg-slate-50 p-4"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-16 w-16 rounded-lg object-cover"
                                                />
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-slate-900">
                                                        {item.name}
                                                    </h4>
                                                    <p className="text-sm text-slate-600">
                                                        Qty: {item.quantity}
                                                    </p>
                                                </div>
                                                <span className="font-bold text-slate-900">
                                                    $
                                                    {(
                                                        item.price *
                                                        item.quantity
                                                    ).toFixed(2)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setCurrentStep(2)}
                                        className="flex-1 cursor-pointer rounded-xl border-2 border-slate-300 py-4 text-lg font-bold text-slate-700 transition-all duration-200 hover:bg-slate-50"
                                    >
                                        Back
                                    </button>
                                    <button className="flex-1 transform cursor-pointer rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-700 hover:to-teal-700">
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-xl">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">
                                Order Summary
                            </h3>

                            {/* Order Items Preview */}
                            <div className="mb-6 space-y-3 border-b border-slate-200 pb-6">
                                {orderItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center space-x-3"
                                    >
                                        <div className="relative">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-16 w-16 rounded-lg object-cover"
                                            />
                                            <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                                                {item.quantity}
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-semibold text-slate-900">
                                                {item.name}
                                            </p>
                                            <p className="text-sm text-slate-600">
                                                ${item.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Price Breakdown */}
                            <div className="mb-6 space-y-3 border-b border-slate-200 pb-6">
                                <div className="flex justify-between text-slate-600">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">
                                        ${subtotal.toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Shipping</span>
                                    <span className="font-semibold">
                                        ${shippingCost.toFixed(2)}
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
                                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-3xl font-bold text-transparent">
                                    ${total.toFixed(2)}
                                </span>
                            </div>

                            {/* Trust Badges */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-sm text-slate-600">
                                    <Shield className="h-5 w-5 text-emerald-600" />
                                    <span>Secure SSL Encryption</span>
                                </div>
                                <div className="flex items-center space-x-3 text-sm text-slate-600">
                                    <Package className="h-5 w-5 text-violet-600" />
                                    <span>Free returns within 30 days</span>
                                </div>
                                <div className="flex items-center space-x-3 text-sm text-slate-600">
                                    <Truck className="h-5 w-5 text-blue-600" />
                                    <span>Track your order anytime</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
        </div>
    );
};

export default CheckoutPage;
