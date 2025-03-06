import CalculatorCargo from '@/components/calculator-cargo'
import { DescriptionContent } from '@/components/content-desc'
import { DescriptionContentBot } from '@/components/content-desc-bot'
import { HeroSection } from '@/components/hero'
import { WhyChooseHero } from '@/components/hero2'
import CargoSearch from '@/components/ship-search'
import { list } from 'postcss'
import React from 'react'

const page = () => {

  const descriptionItemsBot = [
    {
      content: [
        "Jasa Ekspedisi Cargo Jakarta ke Sumatera – Sprint Cargo melayani pengiriman barang dari Jakarta ke berbagai kota di Sumatera dengan layanan cepat, aman, dan harga kompetitif. Dengan berbagai pilihan transportasi darat dan laut, kami memastikan setiap pengiriman tiba tepat waktu dan dalam kondisi terbaik.",
        "Jaringan logistik kami mencakup seluruh Sumatera, termasuk kota-kota besar seperti Medan, Palembang, Pekanbaru, Padang, dan Lampung. Kami menyediakan layanan ekspedisi reguler dan ekspres sesuai dengan kebutuhan bisnis maupun individu.",
      ],
    }
  ];
  

  const descriptionItems = [
    {
      content: [
        "Sprint Cargo adalah solusi ekspedisi terpercaya untuk pengiriman barang dari Jakarta ke Sumatera. Dengan sistem pengiriman yang efisien dan tarif kompetitif, kami siap membantu pengiriman barang dalam berbagai skala, mulai dari kebutuhan bisnis, industri, hingga pengiriman personal.",
        "Kami melayani pengiriman ke seluruh Sumatera dengan berbagai metode transportasi, termasuk jalur darat menggunakan truk ekspedisi dan jalur laut dengan kapal Roro atau cargo.",
      ],
    },
    {
      title: "Ekspedisi Jakarta-Sumatera dengan Tarif Terjangkau",
      content: [
        "Sprint Cargo menyediakan layanan ekspedisi dengan harga yang kompetitif ke seluruh Sumatera. Kami memiliki berbagai pilihan armada trucking, mulai dari Pickup, CDE, CDD, Fuso, hingga Wingbox untuk memastikan fleksibilitas pengiriman.",
        "Untuk pengiriman via laut, kami melayani kota-kota yang memiliki pelabuhan utama seperti Medan, Palembang, dan Batam menggunakan kapal Roro, kapal cargo, serta kapal cepat PELNI.",
      ],
    },
    {
      title: "Layanan Jasa Cargo Jakarta ke Sumatera",
      content: [
        "Sprint Cargo menyediakan berbagai layanan ekspedisi untuk memenuhi kebutuhan pelanggan, termasuk:",
        <em className='italic'>Selengkapnya tentang 
          <a href="/Mobil" className='text-blue-600 font-bold'> Ekspedisi Jakarta Sumatera.</a>
        </em>
      ],
      list: [
        "Ekspedisi cargo laut dengan kapal cepat PELNI dan kapal cargo.",
        "Pengiriman cargo darat menggunakan armada trucking (CDE, CDD, Fuso, Wingbox).",
        "Cargo udara untuk pengiriman prioritas dengan SLA cepat.",
        "Jasa kirim motor via Kapal Roro & Trucking.",
        "Jasa pengiriman mobil via Self Drive, Car Carrier, Car Towing, Kapal Roro.",
        "Jasa pengiriman alat berat ke proyek dan lokasi industri.",
      ]
    },
    {
      title: "Keunggulan Menggunakan Jasa Ekspedisi Sprint Cargo ke Sumatera",
      content: [
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Pengiriman Tepat Waktu</strong> – Layanan ekspedisi yang cepat dan sesuai dengan estimasi waktu pengiriman.</li>
          <li><strong>Tarif Kompetitif</strong> – Harga bersaing dengan berbagai pilihan layanan pengiriman.</li>
          <li><strong>Gratis Jemput Barang</strong> – Layanan door-to-door di area Jakarta untuk memudahkan pelanggan.</li>
          <li><strong>Asuransi Pengiriman</strong> – Menyediakan perlindungan untuk barang yang dikirim agar lebih aman.</li>
          <li><strong>Jaringan Luas</strong> – Pengiriman ke seluruh kota dan kabupaten di Sumatera.</li>
        </ol>
      ]
    },
    {
      title: "Jenis Barang yang Sering Dikirim ke Sumatera",
      content: [
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Kendaraan</strong> – Motor, Mobil, dan Alat Berat.</li>
          <li><strong>Material Konstruksi</strong> – Kaca, Semen, Besi, Cat.</li>
          <li><strong>Bahan Kimia & Obat-obatan</strong></li>
          <li><strong>Peralatan Laboratorium dan Alat Kesehatan (Alkes)</strong></li>
          <li><strong>Peralatan Industri</strong> – Panel Listrik, Genset, Valve, Server.</li>
          <li><strong>Konveksi & Tekstil</strong> – Kaos, Seragam, Kain.</li>
          <li><strong>Peralatan Elektronik</strong> – Kulkas, TV, Komputer, Mesin Cuci.</li>
          <li><strong>Furniture</strong> – Sofa, Meja, Kursi, Lemari.</li>
        </ol>
      ]
    },
    {
      title: "Cara Menghitung Berat Volume Barang Kiriman",
      content: [
        "Menentukan berat atau volume barang penting untuk memperkirakan biaya pengiriman. Sprint Cargo menggunakan perhitungan volume untuk barang yang ringan tetapi berukuran besar, seperti lemari es atau mesin cuci.",
        <p>Rumus perhitungan volume barang adalah:</p>,
        <em>Panjang (cm) x Lebar (cm) x Tinggi (cm) / 4000 = Berat Volume (Kg)</em>,
        <p>Jika barang memerlukan packing kayu, maka estimasi dimensi akan ditambah 8 cm di setiap sisinya untuk keamanan ekstra.</p>
      ],
    },
    {
      title: "Estimasi Biaya Packing untuk Pengiriman",
      content: [
        "Untuk barang yang rentan terhadap kerusakan, Sprint Cargo menawarkan layanan packing kayu tambahan. Perhitungan estimasi biaya packing dilakukan dengan rumus:",
        <p><strong>Volume x Rp. 2000</strong></p>,
        "Biaya packing bersifat opsional dan dapat dinegosiasikan sesuai kebutuhan pelanggan."
      ],
    },
  ];
  
  

  return (
    <div className='min-h-screen bg-white'>
      <HeroSection
        title="Jasa Ekspedisi Jakarta Sumatera Murah Terpercaya"
        description="Kirim Barang Lebih Mudah & Murah Ke Sumatera Dari Jakarta. Gratis Asuransi & Jemput Barang."
        button={{
          text: "Hubungi CS Kami",
          href: "https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong.",
        }}
        imageUrl="/ekspedisi.png"
        imageAlt="Hero PIC"
      />

      <section className="py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <DescriptionContent items={descriptionItems} className="prose prose-lg max-w-none" />
        </div>  
      </section>
      
      <section className='py-6 bg-white'>
        {/* min-h-screen */}
      <div className="py-8 mb-8"> 
        <CargoSearch />
      </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <DescriptionContentBot items={descriptionItemsBot} className="prose prose-lg max-w-none" />
        </div>
        <div className='flex justify-center mt-6'>
          <button className="my-4 max-w-3xl flex justify-center items-center text-xl p-3 bg-red-600 rounded-md text-white transition duration-300 ease-in-out transform hover:bg-red-700 hover:scale-105 shadow-lg">  
              <a href="/Calculator" className="w-full h-full flex items-center justify-center">Calculator Cargo</a>  
          </button>  
          </div>
      </section>

      <WhyChooseHero />


    </div>
  )
}

export default page