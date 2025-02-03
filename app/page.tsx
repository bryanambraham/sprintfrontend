import { HeroSection } from "@/components/hero"

export default function Home() {
  return (
    <div>
      <HeroSection
        title="JASA EKSPEDISI PENGIRIMAN KARGO JAKARTA KE SELURUH INDONESIA"
        description="Perusahaan Ekspedisi Di Jakarta Yang Mendukung Pengiriman Barang Antar Pulau Ke Kalimantan, Sumatera, Sulawesi, Nusa Tenggara, Maluku & Papua."
        subDescription="Gratis Jemput Area DKI Jakarta & Barang Dijamin Aman!"
        features={[
          { text: "Kirim Barang Lebih Murah" },
          { text: "Kirim Barang Lebih Mudah" },
          { text: "Kirim Barang Lebih Menyenangkan" },
        ]}
        button={{
          text: "CEK ONGKIR",
          href: "/cek-ongkir",
        }}
        certifications={[
          { imageUrl: "/placeholder.svg", alt: "ISO 9001:2015" },
          { imageUrl: "/placeholder.svg", alt: "TUV Certification" },
        ]}
        imageUrl="/placeholder.svg"
        imageAlt="Cargo Staff"
      />
    </div>
  )
}

