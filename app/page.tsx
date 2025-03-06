import { AboutSection } from "@/components/about-home"
import { OfficeLocations } from "@/components/cabang"
import { HeroSection } from "@/components/hero"
import { ServicesGrid } from "@/components/services-card"
import { Check } from "lucide-react"

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Layanan Pengiriman Barang dari Jakarta ke Seluruh Indonesia dengan SprintCargo"
        description="SprintCargo menyediakan layanan pengiriman barang antar pulau dengan jangkauan ke Kalimantan, Sumatera, Sulawesi, Nusa Tenggara, Maluku, dan Papua."
        subDescription="Jemput barang gratis di area DKI Jakarta dengan jaminan keamanan pengiriman!"
        features={[
          { text: "Pengiriman Barang Hemat Biaya" },
          { text: "Proses Pengiriman Tanpa Ribet" },
          { text: "Kirim Barang dengan Layanan Terbaik" },
        ]}        
        button={{
          text: "CEK ONGKIR",
          href: "/cek-ongkir",
        }}
        certifications={[
          { imageUrl: "/placeholder.svg", alt: "ISO 9001:2015" },
          { imageUrl: "/placeholder.svg", alt: "TUV Certification" },
        ]}
        imageUrl="/staff.jpg"
        imageAlt="Cargo Staff"
      />

    <AboutSection />
    <ServicesGrid />
    <OfficeLocations />
    </div>
  )
}

