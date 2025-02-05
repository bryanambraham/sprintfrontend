import { DescriptionContent } from '@/components/content-desc'
import { HeroSection } from '@/components/hero'
import { WhyChooseHero } from '@/components/hero2'
import React from 'react'

const descriptionItems = [
  {
    content: [
      "Lebih praktis cepat dan aman, 3 hal tersebut cukup menjadi pertimbangan mengapa jasa ekspedisi lebih banyak dipilih banyak orang terkait kebutuhan jasa pengiriman motor. Faktor lainnya mungkin tarif yang relatif murah, terlebih untuk pengiriman ke luar kota atau bahkan luar provinsi di Indonesia.",
      "Perusahaan ekspedisi umumnya juga menyediakan jasa packing. Hal tersebut sedikit banyak berpengaruh terutama dari sisi keamanan. Seperti yang kita tahu, motor termasuk kendaraan yang mudah rusak terlebih bagian eksteriornya. Packing yang rapi tentu menjadi pertimbangan juga bagi customer yang tidak memiliki keahlian packing motor secara benar.",
      "Satu hal lagi, hampir semua perusahaan ekspedisi saat ini menyediakan asuransi pengiriman motor. Dengan sendirinya tidak ada kekhawatiran motor rusak atau hilang. Besarnya biaya asuransi sendiri mungkin berbeda untuk masing-masing jasa ekspedisi. Customer bisa memilih mana jasa ekspedisi yang paling tepat dan terpercaya.",
    ],
  },
  {
    title: "Jasa Pengiriman Motor Murah Cargonesia Express",
    content: [
      "Selain jasa pengiriman mobil, Cargonesia Express juga melayani pengiriman motor untuk tujuan pengiriman dalam kota (Jakarta) dan kota-kota sekitarnya seperti Bekasi, Tangerang, Depok, Bandung dan kota-kota lain di Pulau Jawa.",
      "Cargonesia juga menyediakan jasa kirim paket motor antar provinsi mencakup tujuan kota dan kabupaten di seluruh Indonesia. Estimasi waktu pengiriman tentu saja tergantung dari jarak kota tujuan dimana jarak dan waktu tempuh ini nantinya juga mempengaruhi biaya pengiriman.",
      "Diluar biaya pengiriman, berlaku premi asuransi yang sifatnya opsional. Biaya asuransi yaitu sebesar 0,25% dari nilai harga motor. Besarnya asuransi ini berlaku untuk semua jenis motor berapapun kapasitas mesinnya.",
      "Disamping jasa kirim motor murah, Cargonesia Express juga menawarkan jemput motor gratis untuk area Jadetabek. Pick up gratis ini disediakan untuk mempermudah customer yang tidak memiliki waktu untuk mengantarkan motor ke Cargonesia.",
    ],
  },
  {
    title: "Biaya Kirim Paket Motor ke Seluruh Indonesia",
    content: [
      "Penghitungan tarif pengiriman sepeda motor sebenarnya cukup mudah karena mengacu pada beberapa kriteria tertentu. Biasanya biaya kirim motor dihitung per-unit sekaligus berdasarkan kapasitas (cc) mesinnya. Semakin besar ukuran motor maka semakin tinggi cc-nya, dengan demikian semakin besar pula ongkos kirimnya.",
      "Cargonesia Express dan jasa ekspedisi lain pada umumnya menggunakan rincian biaya pengiriman motor berdasarkan beberapa kriteria berikut ini:",
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
        title="Jasa Pengiriman Motor Murah & Aman"
        description="Kirim Paket Motor Ke Luar Kota Hingga Ke Luar Pulau Via Trucking, Kapal, Container."
        button={{
          text: "Hubungi CS Kami",
          href: "/#",
        }}
        imageUrl="/ekspedisi.png"
        imageAlt="Hero PIC"
      />

      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <DescriptionContent items={descriptionItems} className="prose prose-lg max-w-none" />
        </div>
      </section>

      <WhyChooseHero />


    </div>
  )
}

export default page