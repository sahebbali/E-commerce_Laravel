// components/landing/Hero.jsx
export default function Hero() {
    return (
        <section className="bg-gray-50 pt-32 pb-20">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
                <div>
                    <h1 className="text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
                        Premium Products for Modern Living
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Discover quality products with fast delivery and secure
                        checkout.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <button className="rounded-lg bg-black px-6 py-3 text-white">
                            Shop Now
                        </button>
                        <button className="rounded-lg border border-gray-300 px-6 py-3">
                            View Collection
                        </button>
                    </div>
                </div>

                <div>
                    <img
                        src="/images/hero-product.png"
                        alt="Product"
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
