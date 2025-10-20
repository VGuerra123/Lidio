import Link from 'next/link';
import { Laptop, Smartphone, Headphones, Watch, Camera, Gamepad } from 'lucide-react';

const categories = [
  { name: 'Laptops', icon: Laptop, href: '/categorias/laptops', color: 'from-cyan-500 to-blue-500' },
  { name: 'Smartphones', icon: Smartphone, href: '/categorias/smartphones', color: 'from-blue-500 to-cyan-500' },
  { name: 'Audio', icon: Headphones, href: '/categorias/audio', color: 'from-cyan-500 to-blue-500' },
  { name: 'Wearables', icon: Watch, href: '/categorias/wearables', color: 'from-blue-500 to-cyan-500' },
  { name: 'Cámaras', icon: Camera, href: '/categorias/camaras', color: 'from-cyan-500 to-blue-500' },
  { name: 'Gaming', icon: Gamepad, href: '/categorias/gaming', color: 'from-blue-500 to-cyan-500' },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explora por categoría
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra exactamente lo que buscas en nuestras categorías especializadas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900 text-center group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
