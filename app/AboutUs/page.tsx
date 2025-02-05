import { AboutHero } from '@/components/about-hero'
import { ShippingSolution } from '@/components/about-ship'
import { DescriptionContent } from '@/components/content-desc'
import { HeroSection } from '@/components/hero'
import { WhyChooseHero } from '@/components/hero2'
import { VisionMission } from '@/components/vision-mission'
import React from 'react'

const descriptionItems = [
  {
    content: [
      "Jasa Kirim Alat Berat – Jika membahas alat berat mungkin kita langsung berkesimpulan bahwa alat ini berukuran besar, berat, mahal, dan pengoperasiannya membutuhkan keahlian khusus. Memang benar, tapi apakah kita tahu apa saja yang termasuk jenis alat berat dan apa kegunaan masing-masing alat tersebut?",
      "Saat ini pendistribusian alat berat ke luar pulau semakin marak. Sudah pasti ini berkaitan dengan berbagai bidang usaha seperti pertambangan, pembangunan real estate, pabrik, gedung bertingkat dan sejenisnya yang harus melibatkan alat berat.",
      "Di Indonesia penggunaan alat berat adalah hal biasa untuk mengerjakan pekerjaan yang tidak mampu diselesaikan oleh tenaga manusia. Dengan demikian tujuan penggunaan alat-alat ini sudah pasti untuk mempermudah pekerjaan, mengurangi tenaga manusia dan juga efisiensi waktu.",
    ],
  },
  {
    title: "Didesain untuk Mengerjakan Tugas Konstruksi",
    content: [
      "Secara spesifik alat berat merupakan mesin berukuran besar dan didesain khusus untuk mengerjakan tugas-tugas yang berkaitan dengan konstruksi, misalnya pemindahan bahan bangunan, earth-working atau pengerjaan tanah ataupun fungsi lainnya.",
      "Meskipun kadang digunakan untuk pengerjaan lain namun alat berat lebih identik dengan pekerjaan konstruksi. Kita ambil contoh misalnya pembangunan gedung bertingkat, proyek pengerjaan jalan, hingga pertambangan semua melibatkan alat berat untuk membantu pekerjaan, selain sumber tenaga manusia tentunya.",
      "Alat berat terkenal banyak diproduksi oleh perusahaan-perusahaan ternama dari Amerika, Jepang, Swedia, dan Korea Selatan. Merek alat berat dari masing-masing negara tersebut yaitu: Caterpillar, Komatsu, Hitachi, Volvo serta Doosan Inracore.",
    ],
  },
  {
    title: "Jenis-Jenis dan Fungsi Alat Berat",
    content: [
      "Sebelum membahas jasa pengiriman alat berat lebih lanjut, penting kita ketahui terlebih dulu jenis-jenis alat berat dan fungsinya.",
    ],
  },
  {
    content: [
      <em className='italic'>Selengkapnya tentang
        <a href="/Mobil" className='text-blue-600'> jasa pengiriman mobil.</a>
      </em>
    ],
    imageURL: "/placeholder.svg",
    imageAlt: "Mobil",
  },
]

const page = () => {
  return (
    <div className='min-h-screen bg-white'>
      <HeroSection
        title="Jasa Pengiriman Alat Berat Murah di Jakarta"
        description=""
        button={{
          text: "Hubungi CS Kami",
          href: "/#",
        }}
        imageUrl="/ekspedisi.png"
        imageAlt="Hero PIC"
      />

      <AboutHero />
      <VisionMission />
      <ShippingSolution />

      <WhyChooseHero />
        

    </div>
  )
}

export default page