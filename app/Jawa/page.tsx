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
        "Ekspedisi Jakarta ke Jawa – Sprint Cargo melayani pengiriman barang dari Jakarta ke berbagai kota di Pulau Jawa dengan layanan cepat, aman, dan tarif terjangkau. Dengan pengalaman bertahun-tahun di industri logistik, kami menjadi pilihan utama untuk ekspedisi ke Jawa Barat, Jawa Tengah, dan Jawa Timur.",
        "Proses pengiriman ke Jawa umumnya dilakukan melalui jalur darat menggunakan armada trucking yang efisien dan kapal laut untuk tujuan tertentu. Kami melayani pengiriman ke berbagai kota besar seperti Bandung, Semarang, Yogyakarta, Surabaya, hingga ke kota-kota lainnya di seluruh Pulau Jawa.",
        "Pengiriman dilakukan dari Jakarta menuju titik distribusi di masing-masing provinsi sebelum diteruskan ke alamat penerima. Sprint Cargo memastikan setiap pengiriman dilakukan dengan prosedur standar dan melewati tahap sortir untuk menjaga ketepatan dan keamanan barang.",
      ],
    }
  ];
  
  const descriptionItems = [
    {
      title: "Jasa Pengiriman Barang ke Jawa Terbaik Pilihan Pelanggan",
      content: [
        "Sprint Cargo adalah pilihan terbaik untuk jasa ekspedisi dari Jakarta ke Jawa dengan layanan profesional, tarif kompetitif, dan jaminan keamanan barang.",
        "Kami menawarkan berbagai metode pengiriman, mulai dari trucking, cargo laut, hingga ekspedisi udara untuk kebutuhan pengiriman yang lebih cepat.",
        "Dengan jaringan distribusi yang luas, kami melayani pengiriman ke berbagai kota dan kabupaten di Jawa Barat, Jawa Tengah, dan Jawa Timur.",
      ],
    },
    {
      title: "Rute Ekspedisi Jakarta ke Jawa Barat, Jawa Tengah, dan Jawa Timur",
      content: [
        "Pengiriman dari Jakarta ke berbagai kota di Jawa menggunakan jalur darat dengan sistem pengiriman reguler maupun ekspres.",
        "Barang dikirim dari Jakarta menuju kota tujuan seperti Bandung, Pangandaran, Semarang, Yogyakarta, Surabaya, Malang, dan kota lainnya.",
        "Setelah sampai di hub distribusi masing-masing kota, barang akan melalui tahap sortir sebelum didistribusikan ke alamat penerima dengan estimasi waktu yang cepat.",
        <em className='italic'>Selengkapnya tentang 
          <a href='/Jawa' className='text-blue-600 font-bold'> Ekspedisi Jakarta ke Jawa.</a>
        </em>
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Darat ke Jawa",
      content: [
        "Sprint Cargo menyediakan layanan trucking untuk pengiriman barang dari Jakarta ke berbagai kota di Jawa dengan harga terjangkau dan pengiriman tepat waktu.",
        "Kami menggunakan berbagai jenis armada, seperti truk CDD, CDE, truk wingbox, hingga fuso untuk memastikan fleksibilitas pengiriman sesuai kebutuhan pelanggan.",
        "Jalur darat menjadi pilihan utama karena lebih cepat, hemat biaya, dan bisa menjangkau seluruh daerah di Pulau Jawa.",
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Laut ke Jawa",
      content: [
        "Bagi pelanggan yang mengirimkan barang dalam jumlah besar, Sprint Cargo juga menyediakan layanan cargo laut dari Jakarta ke kota-kota di Jawa yang memiliki pelabuhan utama.",
        "Layanan ini ideal untuk pengiriman barang dengan volume besar atau alat berat yang tidak memungkinkan dikirim melalui jalur darat.",
        "Kami menggunakan kapal Roro dan kapal cargo untuk memastikan pengiriman efisien dan biaya lebih hemat.",
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Udara ke Jawa",
      content: [
        "Sprint Cargo juga melayani ekspedisi cargo udara dari Jakarta ke bandara di kota-kota besar di Jawa, seperti Bandung, Semarang, Yogyakarta, Surabaya, dan Malang.",
        "Layanan ini sangat cocok untuk barang bernilai tinggi atau kebutuhan pengiriman cepat dengan target waktu yang ketat.",
        "Kami bekerja sama dengan maskapai penerbangan terkemuka untuk memastikan setiap pengiriman mendapatkan prioritas.",
      ],
    },
    {
      title: "Jasa Ekspedisi Kirim Mobil ke Jawa",
      content: [
        "Sprint Cargo menyediakan layanan pengiriman mobil dari Jakarta ke berbagai kota di Pulau Jawa dengan metode pengiriman yang aman dan terpercaya.",
        "Pilihan metode pengiriman mencakup car towing, car carrier, self drive, kapal Roro, dan container untuk memastikan kendaraan tiba dalam kondisi prima.",
        "Kami juga menawarkan layanan door-to-door untuk kenyamanan pelanggan.",
      ],
    },
    {
      title: "Keunggulan Menggunakan Jasa Ekspedisi Sprint Cargo",
      content: [
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Gratis Jemput Barang</strong> – Tidak perlu repot mengantar barang ke gudang ekspedisi. Sprint Cargo menyediakan layanan penjemputan barang langsung dari lokasi Anda di Jakarta.</li>
          <li><strong>Gratis Asuransi</strong> – Untuk pengiriman dengan nilai tertentu, Sprint Cargo memberikan asuransi gratis guna menjamin keamanan barang selama perjalanan.</li>
          <li><strong>Estimasi Pengiriman Cepat</strong> – Dengan jalur darat dan laut yang optimal, pengiriman ke Jawa bisa dilakukan dalam waktu singkat dengan estimasi yang jelas.</li>
          <li><strong>Berbagai Pilihan Pengiriman</strong> – Anda bisa memilih layanan pengiriman reguler, ekspres, cargo darat, cargo laut, atau cargo udara sesuai dengan kebutuhan.</li>
          <li><strong>Dukungan Customer Service</strong> – Tim kami siap membantu Anda 24/7 untuk menjawab pertanyaan dan memberikan solusi terbaik terkait pengiriman barang.</li>
        </ol>
      ]
    },
    
    {
      title: "Ekspedisi Jakarta ke Berbagai Kota di Jawa",
      content: [
        "Sprint Cargo tidak hanya melayani pengiriman dari Jakarta ke kota-kota besar di Jawa, tetapi juga ke berbagai kota kecil dan kabupaten.",
        "Kami menawarkan berbagai metode pengiriman yang bisa disesuaikan dengan kebutuhan pelanggan untuk memastikan barang tiba dengan aman dan tepat waktu.",
      ],
      list: [
        <a href="/Bandung" className='font-semibold text-gray-500'>Ekspedisi Jakarta Bandung</a>,
        <a href="/Semarang" className='font-semibold text-gray-500'>Ekspedisi Jakarta Semarang</a>,
        <a href="/Yogyakarta" className='font-semibold text-gray-500'>Ekspedisi Jakarta Yogyakarta</a>,
        <a href="/Surabaya" className='font-semibold text-gray-500'>Ekspedisi Jakarta Surabaya</a>,
        <a href="/Malang" className='font-semibold text-gray-500'>Ekspedisi Jakarta Malang</a>,
        <a href="/Solo" className='font-semibold text-gray-500'>Ekspedisi Jakarta Solo</a>,
        <a href="/Cilacap" className='font-semibold text-gray-500'>Ekspedisi Jakarta Cilacap</a>,
      ]
    },
  ];
  
  return (
    <div className='min-h-screen bg-white'>
      <HeroSection
        title="Jasa Ekspedisi Jakarta ke Jawa Cepat dan Terpercaya"
        description="Sprint Cargo siap mengirim barang dari Jakarta ke berbagai kota di Jawa Barat, Jawa Tengah, dan Jawa Timur, termasuk Bandung, Semarang, Yogyakarta, dan Surabaya dengan layanan aman, cepat, dan harga terjangkau."
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