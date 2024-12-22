import React from 'react';

const menuItems = [
  {
    category: "Signature Burgers",
    items: [
      { name: "Classic Lee's Burger", price: "$12.99", description: "1/3 lb beef patty, lettuce, tomato, onion, special sauce" },
      { name: "Cheese Paradise", price: "$14.99", description: "Double cheese, caramelized onions, bacon" },
      { name: "Spicy Deluxe", price: "$15.99", description: "Jalapeños, pepper jack, chipotle mayo" },
    ]
  },
  {
    category: "Sides",
    items: [
      { name: "Classic Fries", price: "$4.99", description: "Crispy golden fries with sea salt" },
      { name: "Onion Rings", price: "$5.99", description: "Beer-battered onion rings" },
      { name: "Coleslaw", price: "$3.99", description: "Fresh house-made coleslaw" },
    ]
  },
  {
    category: "Drinks",
    items: [
      { name: "Craft Sodas", price: "$3.99", description: "Various flavors available" },
      { name: "Milkshakes", price: "$6.99", description: "Vanilla, chocolate, or strawberry" },
      { name: "Iced Tea", price: "$2.99", description: "Fresh brewed daily" },
    ]
  }
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((category) => (
            <div key={category.category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-red-600">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="border-b pb-4 last:border-b-0">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <span className="text-red-600 font-semibold">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;