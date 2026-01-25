// components/landing/Categories.jsx
const categories = ['Electronics', 'Fashion', 'Home', 'Beauty', 'Accessories'];

export default function Categories() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-10 text-3xl font-bold">Shop by Category</h2>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="rounded-xl bg-gray-100 p-6 text-center transition hover:shadow-md"
                        >
                            <h3 className="font-semibold">{cat}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
