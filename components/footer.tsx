import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full bg-gray-100 pt-16 pb-8">
      <div className="container-responsive">
        <div className="grid-responsive-4 grid-cols-5">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#002E5D] border-b-2 border-[#1B1464] pb-2 mb-4 inline-block">
              TENTANG KAMI
            </h3>
            <p className="text-gray-600 text-sm">
              Sprint Cargo adalah perusahaan ekspedisi terpercaya yang melayani pengiriman barang ke seluruh Indonesia melalui jalur darat, laut, dan udara. Sprint Cargo siap menjadi mitra logistik terbaik untuk kebutuhan bisnis maupun personal.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#002E5D] border-b-2 border-[#1B1464] pb-2 mb-4 inline-block">
              KONTAK KAMI
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#DE1F26]">
                <Phone className="h-4 w-4 text-[#DE1F26]" />
                <a href="https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong.">+62 852-8265-6556</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 ">
                <Mail className="h-4 w-4 text-[#DE1F26]" />
                <a href="mailto:marketing@sprintcargo.id" className="text-gray-600 hover:underline hover:text-[#DE1F26]">
                  marketing@sprintcargo.id
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-[#DE1F26]" />
                <a href="mailto:marketing@sprintcargo.id" className="text-gray-600 hover:underline hover:text-[#DE1F26]">
                  cs@sprintcargo.id
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-[#DE1F26] mt-1" />
                <a href="https://www.google.com/maps?q=Jl+Pasar+Kebayoran+Lama+No+20,+Kebayoran+Lama,+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12230" target="_blank" rel="noopener noreferrer" className="hover:text-[#DE1F26]">
                  <span>Jl Pasar Kebayoran Lama No 20, <br /> Kebayoran Lama, Jakarta Selatan, <br /> Daerah Khusus Ibukota Jakarta 12230</span>
                </a>
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
                <Link href="/#" className="text-sm text-gray-600 hover:text-[#DE1F26]">
                  Biaya Pick-up
                </Link>
              </li>
              <li>
                <Link href="/Calculator" className="text-sm text-gray-600 hover:text-[#DE1F26]">
                  Calculator Cargo
                </Link>
              </li>
              <li>
                <Link href="/Blog" className="text-sm text-gray-600 hover:text-[#DE1F26]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/Promo" className="text-sm text-gray-600 hover:text-[#DE1F26]">
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
              <li className="text-sm text-gray-600 hover:text-[#DE1F26]"><a href="/Kalimantan">Kalimantan</a></li>
              <li className="text-sm text-gray-600  hover:text-[#DE1F26]"><a href="/Sumatera">Sumatera</a></li>
              <li className="text-sm text-gray-600  hover:text-[#DE1F26]"><a href="/Bali">Bali</a></li>
              <li className="text-sm text-gray-600  hover:text-[#DE1F26]"><a href="/Jawa">Jawa</a></li>
              {/* <li className="text-sm text-gray-600">Maluku & Papua</li> */}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#002E5D] border-b-2 border-[#1B1464] pb-2 mb-4 inline-block">
              JAM KERJA
            </h3>
            <ul className="space-y-2">
              <div className="mt-1 text-gray-600 font-bold">
                  <p>Mon- Fri &nbsp; 09.00 - 23.00</p>
                  <p>Sun &nbsp; 09.00 - 16.00</p>
              </div>
              {/* <li className="text-sm text-gray-600">Maluku & Papua</li> */}
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-gray-300">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} SPRINT CARGO
          </p>
        </div>
      </div>
    </footer>
  )
}

