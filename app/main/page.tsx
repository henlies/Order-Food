export default function main() {
    const foodMenu = [
        {
            name: 'Chicken Rice',
            price: 5.99,
            description: 'Steamed rice with roasted chicken, served with soup.',
        },
        {
            name: 'Pad Thai',
            price: 6.5,
            description: 'Stir-fried rice noodles with shrimp, tofu, and peanuts.',
        },
        {
            name: 'Green Curry',
            price: 7.25,
            description: 'Spicy green curry with chicken and vegetables over rice.',
        },
        {
            name: 'Mango Sticky Rice',
            price: 4.75,
            description: 'Sweet sticky rice with fresh mango and coconut milk.',
        },
    ];

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6 font-[family-name:var(--font-kanit)]">
                🍽 เมนูวันนี้
            </h1>
            <ul className="space-y-4 font-[family-name:var(--font-kanit)]">
                {foodMenu.map((item, index) => (
                    <li
                        key={index}
                        className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
                    >
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="mt-2 font-bold">${item.price.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
