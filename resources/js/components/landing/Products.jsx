// components/landing/Products.jsx
const products = [1, 2, 3, 4];

export default function Products() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-10 text-3xl font-bold">Best Sellers</h2>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {products.map((_, i) => (
                        <div
                            key={i}
                            className="rounded-xl bg-white p-4 shadow-sm hover:shadow-md"
                        >
                            <div className="mb-4 h-40 rounded-md bg-gray-200"></div>
                            <h3 className="font-semibold">Product Name</h3>
                            <p className="text-gray-600">$99.00</p>
                            <button className="mt-4 w-full rounded-lg bg-black py-2 text-white">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
