import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full bg-gray-100 pt-16 pb-8">
      <div className="container-responsive">
        <div className="grid-responsive-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#002E5D] border-b-2 border-[#1B1464] pb-2 mb-4 inline-block">
              TENTANG KAMI
            </h3>
            <p className="text-gray-600 text-sm">
              Cargonesia adalah perusahaan ekspedisi di Jakarta yang menyediakan jasa pengiriman barang ke seluruh
              Indonesia.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#002E5D] border-b-2 border-[#1B1464] pb-2 mb-4 inline-block">
              KONTAK KAMI
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-[#DE1F26]" />
                <span>(021) 270 922 88</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-[#DE1F26]" />
                <span>marketing@cargonesia.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-[#DE1F26] mt-1" />
                <span>
                  Jl. Kebon Sirih No.123
                  <br />
                  Jakarta Pusat
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#002E5D] border-b-2 border-[#1B1464] pb-2 mb-4 inline-block">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/layanan" className="text-sm text-gray-600 hover:text-[#DE1F26]">
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link href="/cek-ongkir" className="text-sm text-gray-600 hover:text-[#DE1F26]">
                  Cek Ongkir
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-[#DE1F26]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/promo" className="text-sm text-gray-600 hover:text-[#DE1F26]">
                  Promo
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#002E5D] border-b-2 border-[#1B1464] pb-2 mb-4 inline-block">
              AREA LAYANAN
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Kalimantan</li>
              <li className="text-sm text-gray-600">Sumatera</li>
              <li className="text-sm text-gray-600">Sulawesi</li>
              <li className="text-sm text-gray-600">Nusa Tenggara</li>
              <li className="text-sm text-gray-600">Maluku & Papua</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-gray-300">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Cargonesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

