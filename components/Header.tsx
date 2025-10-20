'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Lidio //
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/productos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Productos
              </Link>
              <Link href="/categorias" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Categorías
              </Link>
              <Link href="/ofertas" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Ofertas
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link href="/carrito">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="py-4 border-t border-gray-200 animate-in slide-in-from-top duration-200">
            <Input
              type="search"
              placeholder="Buscar productos..."
              className="w-full"
            />
          </div>
        )}
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col p-4 gap-4">
            <Link
              href="/productos"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="/categorias"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categorías
            </Link>
            <Link
              href="/ofertas"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ofertas
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
