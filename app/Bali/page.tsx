import { DescriptionContent } from '@/components/content-desc';
import { DescriptionContentBot } from '@/components/content-desc-bot';
import { HeroSection } from '@/components/hero';
import { WhyChooseHero } from '@/components/hero2';
import CargoSearch from '@/components/ship-search';
import React from 'react'

const page = () => {
  const descriptionItemsBot = [
    {
      content: [
        "Ekspedisi Jakarta ke Bali – Sprint Cargo menyediakan layanan pengiriman barang dari Jakarta ke berbagai kota di Bali dengan aman, cepat, dan harga terjangkau. Dengan pengalaman bertahun-tahun di industri logistik, kami menjadi pilihan utama untuk pengiriman barang antar pulau.",
        "Proses pengiriman ke Bali umumnya menggunakan jalur darat dan laut untuk memastikan efisiensi biaya serta keamanan barang. Rute ini mencakup pengiriman ke berbagai daerah seperti Denpasar, Badung, Gianyar, Tabanan, hingga ke pelosok lainnya di Pulau Dewata.",
        "Pengiriman dilakukan dari Jakarta menuju pelabuhan atau titik distribusi di Bali sebelum diteruskan ke alamat penerima. Sprint Cargo memastikan bahwa setiap barang dikirim dengan prosedur standar dan melalui tahap sortir sebelum mencapai tujuan akhir.",
      ],
    }
  ];
  
  const descriptionItems = [
    {
      title: "Jasa Pengiriman Barang ke Bali Terbaik Pilihan Pelanggan",
      content: [
        "Sprint Cargo adalah solusi terbaik bagi Anda yang membutuhkan jasa ekspedisi dari Jakarta ke Bali dengan layanan profesional, tarif bersaing, dan jaminan keamanan barang.",
        "Kami menawarkan berbagai metode pengiriman, mulai dari trucking, cargo laut, hingga ekspedisi udara untuk kebutuhan pengiriman yang lebih cepat.",
        "Dengan jaringan distribusi yang luas, kami melayani pengiriman ke seluruh kota dan kabupaten di Bali, termasuk Denpasar, Gianyar, Badung, Klungkung, Bangli, Karangasem, Buleleng, Tabanan, dan Jembrana.",
      ],
    },
    {
      title: "Rute Ekspedisi Jakarta ke Denpasar dan Seluruh Bali",
      content: [
        "Pengiriman barang dari Jakarta ke Bali dilakukan melalui jalur trucking dan kapal laut. Barang dikirim dari Jakarta menuju Pelabuhan Ketapang sebelum diangkut menggunakan kapal ferry menuju Pelabuhan Gilimanuk.",
        "Dari Gilimanuk, barang akan disortir sebelum didistribusikan ke berbagai kota di Bali. Proses ini memastikan pengiriman tetap efisien dengan waktu tempuh yang optimal.",
        "Kami juga melayani pengiriman ke wilayah terpencil atau lokasi khusus di Bali dengan sistem pengiriman door-to-door.",
        <em className='italic'>Selengkapnya tentang 
          <a href='/Denpasar' className='text-blue-600 font-bold'> Ekspedisi Jakarta Denpasar.</a>
        </em>
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Laut ke Bali",
      content: [
        "Sprint Cargo menyediakan layanan cargo laut untuk pengiriman barang dengan volume besar ke Bali. Layanan ini cocok untuk pengiriman alat berat, kendaraan, atau barang dengan kapasitas besar yang tidak memungkinkan dikirim melalui jalur udara.",
        "Kami menggunakan kapal Roro dan kapal cargo untuk memastikan pengiriman lebih hemat biaya dan tetap aman.",
        "Layanan cargo laut banyak dipilih pelanggan karena ongkos kirimnya yang lebih ekonomis dibandingkan dengan metode lain.",
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Udara ke Bali",
      content: [
        "Bagi pelanggan yang membutuhkan pengiriman cepat, Sprint Cargo juga menyediakan layanan ekspedisi cargo udara dari Jakarta ke Bandara Ngurah Rai, Bali.",
        "Layanan ini sangat cocok untuk barang bernilai tinggi atau kebutuhan mendesak seperti dokumen penting, produk medis, atau barang e-commerce yang harus tiba dalam waktu singkat.",
        "Kami bekerja sama dengan berbagai maskapai penerbangan untuk memastikan setiap pengiriman memiliki prioritas tinggi.",
      ],
    },
    {
      title: "Jasa Ekspedisi Kirim Mobil ke Bali",
      content: [
        "Sprint Cargo menyediakan layanan pengiriman mobil dari Jakarta ke Bali dengan metode pengiriman yang aman dan terpercaya.",
        "Pilihan metode pengiriman termasuk car towing, car carrier, self drive, kapal Roro, dan container untuk memastikan kendaraan tiba dengan kondisi terbaik.",
        "Kami juga menyediakan layanan penjemputan mobil langsung dari lokasi pelanggan untuk kenyamanan lebih.",
      ],
    },
    {
      title: "Keunggulan Menggunakan Jasa Ekspedisi Sprint Cargo ke Bali",
      content: [
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Jalur Pengiriman Fleksibel</strong> – Barang dikirim melalui jalur darat menggunakan trucking dan dilanjutkan dengan kapal ferry dari Ketapang ke Gilimanuk.</li>
          <li><strong>Gratis Jemput Barang</strong> – Untuk area Jakarta dan sekitarnya, kami menyediakan layanan penjemputan barang langsung ke lokasi Anda.</li>
          <li><strong>Estimasi Pengiriman Cepat</strong> – Pengiriman barang ke Denpasar dan kota-kota lain di Bali hanya membutuhkan waktu 2-3 hari.</li>
          <li><strong>Keamanan Barang Terjamin</strong> – Setiap pengiriman memiliki opsi packing kayu dan layanan asuransi untuk perlindungan tambahan.</li>
          <li><strong>Layanan Door-to-Door</strong> – Kami memastikan barang tiba langsung ke alamat tujuan dengan sistem pengiriman yang aman dan profesional.</li>
        </ol>
      ]
    },    
    {
      title: "Ekspedisi Jakarta ke Bali dan Wilayah Sekitarnya",
      content: [
        "Sprint Cargo tidak hanya melayani pengiriman dari Jakarta ke Bali, tetapi juga ke berbagai kota di sekitarnya, seperti Nusa Penida dan Lombok.",
        "Kami menawarkan berbagai metode pengiriman yang bisa disesuaikan dengan kebutuhan pelanggan untuk memastikan barang tiba dengan aman dan tepat waktu.",
      ],
      list: [
        <a href="/Denpasar" className='font-semibold text-gray-500'>Ekspedisi Jakarta Denpasar</a>,
        <a href="/Gianyar"  className='font-semibold text-gray-500'>Ekspedisi Jakarta Gianyar</a>,
        <a href="/Badung"  className='font-semibold text-gray-500'>Ekspedisi Jakarta Badung</a>,
        <a href="/Tabanan"  className='font-semibold text-gray-500'>Ekspedisi Jakarta Tabanan</a>,
        <a href="/Buleleng"  className='font-semibold text-gray-500'>Ekspedisi Jakarta Buleleng</a>,
        <a href="/Karangasem"  className='font-semibold text-gray-500'>Ekspedisi Jakarta Karangasem</a>,
        <a href="/NusaPenida"  className='font-semibold text-gray-500'>Ekspedisi Jakarta Nusa Penida</a>,
      ]
    },
  ];

  
  return (
    <div className='min-h-screen bg-white'>
      <HeroSection
        title="Jasa Ekspedisi Jakarta ke Bali Cepat dan Terpercaya"
        description="Butuh jasa ekspedisi murah dari Jakarta ke Bali? Sprint Cargo siap mengirim barang ke Denpasar, Badung, Gianyar, dan seluruh Bali dengan layanan aman dan profesional."
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
      
      {/* <section className='py-6 bg-white'>

      </section> */}

      <WhyChooseHero />


    </div>
  )
}

export default page