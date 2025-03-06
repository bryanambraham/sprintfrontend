import type React from "react"
import { Ship, Truck, Plane, Bike, Car, Tractor } from "lucide-react"
import Link from "next/link"

interface ServiceCard {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  href: string
}

export function ServicesGrid() {
  const services: ServiceCard[] = [
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Ekspedisi Muatan Kapal Laut",
      description: "Layanan Pengiriman Barang Via Kapal Pelni & Kapal Kargo, Melayani Pengiriman FCL & LCL.",
      color: "bg-yellow-400",
      href: "/AlatBerat",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Ekspedisi Cargo Darat",
      description: "Layanan Pengiriman Barang Via Trucking, Melayani Sewa Truk CDE, CDD, Hingga FUSO.",
      color: "bg-red-400",
      href: "/Barang",
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Jasa Cargo Udara",
      description: "Layanan Kirim Barang Via Udara, Prioritas & Lebih Cepat Sampai Tujuan.",
      color: "bg-orange-400",
      href: "/Barang",
    },
    {
      icon: <Bike className="w-8 h-8" />,
      title: "Jasa Pengiriman Motor",
      description: "Jasa Kirim Motor Ke Berbagai Wilayah Indonesia Dengan Ongkir Murah.",
      color: "bg-emerald-400",
      href: "/Motor",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Jasa Pengiriman Mobil",
      description: "Jasa Kirim Mobil Via Car Towing, Car Carrier, Self Drive, Kapal Roro & Container.",
      color: "bg-yellow-400",
      href: "/Mobil",
    },
    {
      icon: <Tractor className="w-8 h-8" />,
      title: "Jasa Pengiriman Alat Berat",
      description: "Jasa Kirim Alat Berat Ke Berbagai Wilayah Indonesia Via Darat & Laut.",
      color: "bg-red-400",
      href: "/AlatBerat",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold">LAYANAN EKSPEDISI CARGONESIA</h2>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1B1464] -mb-2"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className={`${service.color} p-4 rounded-full text-white`}>{service.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className="text-center mt-12">
          <Link
            href="https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong."
            className="inline-flex items-center bg-[#FF6600] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#ff751a] transition-colors"
          >
            <span className="mr-2">HUBUNGI KAMI</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

