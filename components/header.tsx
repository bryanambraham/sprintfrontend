"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Facebook, Twitter, Rss, ChevronDown, Search, Menu, X } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const layananItems = [
    { title: "Jasa Ekspedisi Barang", href: "/Barang" },
    { title: "Jasa Pengiriman Mobil", href: "/Mobil" },
    { title: "Jasa Pengiriman Motor", href: "/Motor" },
    { title: "Jasa Pengiriman Alat Berat", href: "/AlatBerat" },
    { title: "Sewa Truk", href: "/SewaTruk" },
  ]

  const cekOngkirItems = [
    { title: "Ongkir Jakarta Kalimantan", href: "/Kalimantan" },
    { title: "Ongkir Jakarta Sumatera", href: "/Sumatera" },
    { title: "Ongkir Jakarta Sulawesi", href: "/Sulawesi" },
    { title: "Ongkir Jakarta Papua", href: "/Papua" },
    { title: "Ongkir Jakarta Maluku", href: "/Maluku" },
    { title: "Ongkir Jakarta Bali", href: "/Bali" },
    { title: "Ongkir Jakarta Jawa", href: "/Jawa" },
  ]

  return (
    <header className="w-full relative z-50">
      {/* Top bar */}
      <div className="w-full bg-[#FF6600] text-white py-1">
        <div className="container-responsive flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(021) 270 922 88</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>marketing@cargonesia.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-200 hide-on-mobile">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-gray-200 hide-on-mobile">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-gray-200 hide-on-mobile">
              <Rss className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-gray-200 text-sm">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-sm">
        <div className="container-responsive py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/sprintlogo.png"
                alt="SprintCargo Logo"
                width={180}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-[#FF6600]">
                Home
              </Link>

              {/* Layanan Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-gray-700 hover:text-[#FF6600]"
                  onClick={() => setActiveDropdown(activeDropdown === "layanan" ? null : "layanan")}
                  onMouseEnter={() => setActiveDropdown("layanan")}
                >
                  Layanan
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-64 ${
                    activeDropdown === "layanan" ? "block" : "hidden"
                  }`}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {layananItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#FF6600]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Cek Ongkir Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-gray-700 hover:text-[#FF6600]"
                  onClick={() => setActiveDropdown(activeDropdown === "ongkir" ? null : "ongkir")}
                  onMouseEnter={() => setActiveDropdown("ongkir")}
                >
                  Cek Ongkir
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-64 ${
                    activeDropdown === "ongkir" ? "block" : "hidden"
                  }`}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {cekOngkirItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-row px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#FF6600]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/AboutUs" className="text-gray-700 hover:text-[#FF6600]">
                Tentang Kami
              </Link>
              <Link href="/Blog" className="text-gray-700 hover:text-[#FF6600]">
                Blog
              </Link>
              <Link href="/Promo" className="text-gray-700 hover:text-[#FF6600]">
                Promo
              </Link>
              <button className="p-2 hover:text-[#FF6600]">
                <Search className="h-5 w-5" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 py-4 border-t">
              <div className="flex flex-col gap-4">
                <Link href="/" className="text-gray-700 hover:text-[#FF6600]">
                  Home
                </Link>

                {/* Mobile Layanan */}
                <div className="space-y-2">
                  <button
                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#FF6600]"
                    onClick={() => setActiveDropdown(activeDropdown === "layanan-mobile" ? null : "layanan-mobile")}
                  >
                    Layanan
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === "layanan-mobile" && (
                    <div className="pl-4 space-y-2">
                      {layananItems.map((item) => (
                        <Link key={item.href} href={item.href} className="block text-gray-600 hover:text-[#FF6600]">
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Cek Ongkir */}
                <div className="space-y-2">
                  <button
                    className="flex items-center justify-between w-full text-gray-700 hover:text-[#FF6600]"
                    onClick={() => setActiveDropdown(activeDropdown === "ongkir-mobile" ? null : "ongkir-mobile")}
                  >
                    Cek Ongkir
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === "ongkir-mobile" && (
                    <div className="pl-4 space-y-2">
                      {cekOngkirItems.map((item) => (
                        <Link key={item.href} href={item.href} className="block text-gray-600 hover:text-[#FF6600]">
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/tentang-kami" className="text-gray-700 hover:text-[#FF6600]">
                  Tentang Kami
                </Link>
                <Link href="/blog" className="text-gray-700 hover:text-[#FF6600]">
                  Blog
                </Link>
                <Link href="/promo" className="text-gray-700 hover:text-[#FF6600]">
                  Promo
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

