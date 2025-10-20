import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-semibold">
                Nuevos productos disponibles
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Tecnología de
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                última generación
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Descubre los mejores productos tecnológicos con envío rápido y garantía extendida.
              Tu próximo dispositivo está a un clic de distancia.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/productos">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explorar productos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/ofertas">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600"
                >
                  Ver ofertas
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 mb-2">
                  <Zap className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-gray-900">Envío rápido</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-2">
                  <Shield className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-gray-900">Garantía extendida</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 mb-2">
                  <Truck className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-gray-900">Devolución gratis</p>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />
              <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/20 rounded-xl mb-4" />
                    <div className="h-3 bg-white/40 rounded mb-2" />
                    <div className="h-3 bg-white/20 rounded w-2/3" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/20 rounded-xl mb-4" />
                    <div className="h-3 bg-white/40 rounded mb-2" />
                    <div className="h-3 bg-white/20 rounded w-2/3" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/20 rounded-xl mb-4" />
                    <div className="h-3 bg-white/40 rounded mb-2" />
                    <div className="h-3 bg-white/20 rounded w-2/3" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/20 rounded-xl mb-4" />
                    <div className="h-3 bg-white/40 rounded mb-2" />
                    <div className="h-3 bg-white/20 rounded w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
