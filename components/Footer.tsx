import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent inline-block mb-4">
              Lidio //
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Tu tienda de tecnología de confianza. Productos de última generación con envío rápido y atención personalizada.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Compra</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/productos" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Categorías
                </Link>
              </li>
              <li>
                <Link href="/ofertas" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Ofertas especiales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Ayuda</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/envios" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Envíos
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Lidio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
