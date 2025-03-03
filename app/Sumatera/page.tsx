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
        "Jasa Ekspedisi Cargo Jakarta Ke Sumatera – Sumatera merupakan pulau keenam terbesar di dunia yang ada di Indonesia, dimana pulau ini dikenal dengan nama lain pulau percha, andalas, atau suwarnadwipa yang berarti pulau emas dan kemudian pada prasasti padang roco tahun 1286 dipahatkan swarnabhumi yang bahasa sanskerta berarti “tanah emas” atau “tanah melayu” untuk menyebut pulau ini.",
        "Pulau seluas 473.481 Km2 ini dihubungkan oleh 4 ruas jalan lintas yaitu lintas tenga, timur, barat dan pantai timur yang melintang dari barat laut hingga tenggara Sumatera. Pulau Sumatera sendiri adalah pulang yang sangat kaya dengan hasil buminya, hasil bumi utama yang dihasilkan oleh pulau utama adalah tembakau, kelapa sawit, minyak bumi, bauksit, timah, gas alam hingga batu bara.",
      ],
    }
  ]

  const descriptionItems = [
    {
      content: [
        "Jasa Ekspedisi Cargo Jakarta Ke Sumatera – Sumatera merupakan pulau keenam terbesar di dunia yang ada di Indonesia, dimana pulau ini dikenal dengan nama lain pulau percha, andalas, atau suwarnadwipa yang berarti pulau emas dan kemudian pada prasasti padang roco tahun 1286 dipahatkan swarnabhumi yang bahasa sanskerta berarti “tanah emas” atau “tanah melayu” untuk menyebut pulau ini.",
        "Pulau seluas 473.481 Km2 ini dihubungkan oleh 4 ruas jalan lintas yaitu lintas tenga, timur, barat dan pantai timur yang melintang dari barat laut hingga tenggara Sumatera. Pulau Sumatera sendiri adalah pulang yang sangat kaya dengan hasil buminya, hasil bumi utama yang dihasilkan oleh pulau utama adalah tembakau, kelapa sawit, minyak bumi, bauksit, timah, gas alam hingga batu bara.",
      ],
    },
    {
      title: "Ekspedisi Jakarta Sumatera Murah ",
      content: [
        "PT. Cargonesia Utama Trans atau dikenal Cargonesia Express merupakan perusahaan ekspedisi Jakarta yang melayani distribusi barang ke seluruh wilayah Indonesia salah satunya pulau Sumatera. Untuk jalur ekspedisi Jakarta ke Sumatera sendiri bisa ditempuh oleh berbagai armada baik itu Darat, Laut hingga Udara.",
        "Untuk pengiriman cargo darat ke Sumatera, Cargonesia Express telah didukung oleh jaringan mitra trucking dan transportasi darat lainnya dengan berbagai armada pengiriman seperti Pickup, CDE, CDD, Fuso hingga Wingbox yang siap mendistribusikan pengiriman barang anda mulai dari barang pengiriman barang pindahan, kebutuhan usaha hingga project ke seluruh pelosok wilayah Sumatera.",
        "Sedangkan untuk jalur ekspedisi muatan kapal laut (EMKL) ke Sumatera sendiri hanya support ke kota-kota yang mendukung pelabuhan seperti Medan, Palembang, Batam, Kepulauan Riau, dan sebagainya menggunakan armada kapal roro, kapal cargo, kapal cepat PELNI hingga kapal ferry.",
      ],
    },
    {
      title: "Layanan Jasa Cargo Jakarta Ke Sumatera",
      content: [
        "Cargonesia Express memiliki beberapa layanan unggulan untuk membantu anda dalam mendistribusikan pengiriman barang maupun kendaraan ke wilayah Sumatera, berikut layanan unggulan jasa cargo Jakarta ke Sumatera : ",
        <em className='italic'>Selengkapnya tentang
        <a href="/Mobil" className='text-blue-600 font-bold'> Ekspedisi Jakarta Balikpapan.</a>
      </em>
      ],
      list: [
        "Ekspedisi Muatan Kapal Laut via kapal cepat Pelni dan kapal cargo",
        "Ekspedisi cargo darat trucking (CDE, CDD, Hingga FUSO)",
        "Cargo pesawat cepat untuk barang dengan prioritas tinggi",
        "Jasa kirim motor via Kapal Roro & Trucking",
        "Jasa pengiriman mobil via Self Drive, Car Carrier, Car Towing, Kapal Roro",
        "Jasa pengiriman alat berat",
      ]
    },
    {
      content: [
        "Cargonesia Express memiliki beberapa layanan unggulan untuk membantu anda dalam mendistribusikan pengiriman barang maupun kendaraan ke wilayah Sumatera, berikut layanan unggulan jasa cargo Jakarta ke Sumatera : ",
        "Lebih Mudah Kirim Barang Ke Sumatera Bersama Cargonesia",
        "Selain memiliki berbagai layanan cargo ke Sumatera, Cargonesia Express juga terus berkembang untuk terus memenuhi bentuk kepuasan pelanggan dengan tagline Murah, Mudah Menyenangkan. Lalu apa saja keuntungan bagi anda saat kirim barang bersama Cargonesia?",
        <ol className="list-decimal pl-5"> {/* Tambahkan class ini */}
          <li><strong>Gratis Jemput Barang</strong><br />Anda tidak perlu repot antar barang ke gudang kami karena kami siap jemput barang anda dan lebih menariknya khusus anda yang berlokasi di Jakarta bisa menikmati layanan tersebut GRATIS.</li>
          <li><strong>Gratis Asuransi Barang</strong><br />Lebih aman kirim barang dengan GRATIS Asuransi untuk nilai barang dibawah Rp. 50.000.000,-.</li>
          <li><strong>Terpercaya</strong><br />Kami memiliki legalitas yang lengkap dan juga didukung oleh gudang pengiriman yang luas</li>
          <li><strong>Ongkos Kirim Bersahabat</strong><br />Jangan takut dompet jebol, ongkir cargo jakarta ke sumatera kami murah.</li>
        </ol>
      ],
    },
    {
      title: "Barang yang sering dikirim",
      content: [
        "Motor, Mobil, Material Konstruksi (Kaca, Semen, Besi, Cat), Bahan Kimia, Peralatan Laboratorium, Alkes (Alat Kesehatan), Obat obatan,  Kabel Haspel / Fiber Optik, Konveksi & Tekstile (T Shirt, Kaos, Baju seragam ), Barang kebutuhan Industri (Water Treatment, Tabung, UPS, Panel Listrik, Panel Surya / Solar Cell, Server, Oli, Genset, Valve, Barang Percetakan), Furniture, Peralatan Safety, Pipa Besi, Pupuk, Barang Promosi, Alat Elektronik Rumah Tangga (Kulkas, AC, TV, Komputer, Mesin Cuci), Mesin & Spare Part ( Alat Berat, Excavator, Forklift, Stone Crusher, Mesin Pabrik, Mesin Traktor, Alat Pertanian, Mesin Pompa, Seal Mechanical), Tower.",
      ],
    },
    {
      title: "Cara menghitung berat volume barang kiriman",
      content: [
        "Sebelum memutuskan mengirim barang tentu sangat penting bagi anda memperhitungkan budget pengiriman, maka dari itu hal penting yang harus anda ketahui adalah mengetahui berat atau volume pengiriman anda nantinya yang akan dikalikan dengan tarif pengiriman atau ongkos kirim.",
        "Sebagian orang tentu hanya mengetahui bahwa berat yang diambil yaitu berat actual hasil alat timbangan akan tetapi untuk pengiriman cargo juga dihitung volume barangnya, hal tersebut dikarenakan ada beberapa jenis barang yang volumenya besar dan memakan tempat akan tetapi untuk beratnya sangatlah ringan seperti contoh yaitu lemari kulkas, mesin cuci, dan juga kasur.",
        <p>Adapun perhitungan akan diambil nilai terbesar antara <strong>berat actual (Kg) </strong>dan <strong>volume (Kgv)</strong>, untuk rumus perhitungan volume sendiri yaitu :</p>,
        <em>Panjang (cm) x Lebar (cm) x Tinggi (cm) / 4000 = ….Kgv</em>,
        <p>Perhitungan berikut merupakan perhitungan final, jika misalnya barang anda memerlukan packing estimasi dimensi tentunya akan ditambahkan 8cm tiap sisinya sesuai dengan ukuran kayu yang digunakan untuk packing.</p>
      ],
    },
    {
      title: "Perhitungan berikut merupakan perhitungan final, jika misalnya barang anda memerlukan packing estimasi dimensi tentunya akan ditambahkan 8cm tiap sisinya sesuai dengan ukuran kayu yang digunakan untuk packing.",
      content: [
        "Selain mengetahui estimasi berat dan volume, penting juga bagi anda yang memiliki barang riskan untuk mengetahui estimasi biaya packing pengiriman.",
        <p>Perhitungan estimasi biaya packing bisa didapatkan dari rumus <strong>Est. Volume x Rp. 2000.</strong> Tetapi untuk biaya packing sifatnya opsional dan negotiable jadi jika anda memiliki barang yang besar anda tidak perlu khawatir untuk negosiasi packing kepada kami.</p>,
        " Tetapi untuk biaya packing sifatnya opsional dan negotiable jadi jika anda memiliki barang yang besar anda tidak perlu khawatir untuk negosiasi packing kepada kami."
      ],
    },
  ]

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