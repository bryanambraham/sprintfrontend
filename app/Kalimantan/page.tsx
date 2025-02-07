import { HeroSection } from '@/components/hero'
import React from 'react'
import { DescriptionContent } from "@/components/content-desc"
import { WhyChooseHero } from '@/components/hero2'

const page = () => {

  const descriptionItems = [
    {
      content: [
        "Ekspedisi Jakarta ke Kalimantan – Pasca berdirinya perusahaan tahun 2010 silam, Kalimantan merupakan pulau kedua yang menjadi tujuan pengiriman Cargonesia Express setelah Pulau Jawa. Jadi sebelum pengiriman merata ke seluruh pulau di Indonesia seperti Sumatera, Bali, Sulawesi, Maluku, Papua dan pulau lainnya, Cargonesia sudah terlebih dulu “menancapkan kukunya” di Pulau Kalimantan.",
        "Untuk proses pengirimannya sendiri secara keseluruhan menggunakan jalur laut. Ini mencakup tujuan pengiriman diseluruh provinsi di Pulau Kalimantan yaitu: Kalimantan Timur, Kalimantan Selatan, Kalimantan Barat, Kalimantan Tengah dan Kalimantan Utara.",
        "Pengiriman dilakukan dari Jakarta menuju port masing-masing pelabuhan yang ditunjuk. Jadi sebelum sampai di alamat penerima, barang kiriman harus melalui beberapa pos untuk proses sortir barang dan lain-lainnya termasuk termasuk perpindahan pengiriman via trucking.",
      ],
    },
    {
      title: "Jasa Pengiriman Barang ke Kalimantan Terbaik Pilihan Customer",
      content: [
        "Jam terbang di bidang jasa logistik yang bisa dikatakan lebih unggul dibanding perusahaan lain, menjadikan Cargonesia Express jasa ekspedisi paling dicari, termasuk para pengguna jasa pengiriman barang ke Kalimantan. Mengapa bisa demikian?",
        "Selain karena profesionalitas dalam hal jaminan keamanan dan estimasi waktu, Cargonesia Express juga menawarkan tarif yang terjangkau yaitu mulai dari 4.500/kg dengan minimal berat pengiriman 50 kg. Istimewanya lagi, Cargonesia juga menyediakan asuransi gratis untuk barang kiriman dengan nilai tertentu.",
        "Masih banyak lagi keistimewaan dan kemudahan yang ditawarkan oleh Cargonesia untuk pengiriman seluruh kota di Kalimantan. Semuanya akan kita bahas satu persatu untuk masing-masing provinsi.",
      ],
    },
    {
      title: "Rute Ekspedisi Pengiriman ke Kalimantan Timur dan Kalimantan Utara",
      content: [
        "Untuk ekspedisi Kalimantan Timur dan Kalimantan Utara, barang yang dikirimkan dari Jakarta diangkut menggunakan kapal laut. Selanjutnya kapal akan bersandar di pelabuhan di Balikpapan baru kemudian barang didistribusikan ke alamat penerima.",
        "Kota Balikpapan sendiri ditunjuk sebagai port atau tempat sortir barang sebelum barang diantar menggunakan armada yang sesuai. Dengan kata lain semua pengiriman tujuan kota di Provinsi Kalimantan Timur dan Kalimantan Utara terlebih dulu harus singgah di kota tersebut.",
        "Ekspedisi ke Kalimantan Timur sendiri mencakup tujuan pengiriman seluruh kota / kabupaten meliputi: Kota Balikpapan, Kota Samarinda, Kota Bontang, Kabaupaten Berau, Kabupaten Kutai Barat, Kabupaten Kutai Kartanegara, Kabupaten Kutai Timur, Kabupaten Mahakam Ulu, Kabupaten Paser dan Kabupaten Penajam Paser Utara.",
        "Sedangkan layanan ekspedisi Kalimantan Utara juga mencakup seluruh kota / kabupaten di provinsi tersebut yaitu: Kota Tarakan, Kabupaten Bulungan (Tanjung Selor), Kabupaten Nunukan, Kabupaten Malinau serta Kabupaten Tana Tidung.",
        "Seperti disebutkan sebelumnya, barang yang dikirimkan ke kota-kota di dua provinsi tersebut terlebih dulu transit di Kota Balikpapan untuk proses sortir. Prosesnya sendiri memakan waktu maksimal 2 hari.",
        <em className='italic'>Selengkapnya tentang
        <a href="/Mobil" className='text-blue-600 font-bold'> Ekspedisi Jakarta Balikpapan.</a>
      </em>
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Laut",
      content: [
        "Jasa ekspedisi cargo laut dari Cargonesia Express merupakan layanan yang bisa Anda manfaatkan guna pengiriman barang yang tidak memungkinkan dengan jalur udara, seperti alat berat atau barang elektronik yang punya baterai aktif.",
        "Selain itu ekspedisi cargo laut juga banyak dipilih para klien kami karena lebih hemat biaya. Pasalnya jumlah volume pengiriman akan dibagi dengan 4.000. Dengan biaya terjangkau, Anda bisa kirim produk bisnis online, retail, barang distribusi, hingga alat berat sampai ke kepulauan.",
        "Ekspedisi cargo laut akan mengandalkan berbagai jenis armada seperti kapal cepat (kapal Roro), kapal barang (cargo), peti kemas (container) dan kapal PELNI.",
        "Kapal PELNI adalah layanan transportasi milik BUMN, sehingga bisa menjangkau hampir seluruh pelabuhan besar dan kecil di seluruh Indonesia.",
        "Pengiriman lewat Cargo Kapal PELNI juga lebih unggul dari segi kecepatan, pasalnya jadwal keberangkatan ekspedisi kapal PELNI lebih terjadwal dan pasti dikarenakan sejatinya kapal tersebut diutamakan untuk penumpang.",
        "Selain itu Kapal PELNI juga dalam proses muat dan bongkar barang lebih cepat dikarenakan kuota volume barang dan container PELNI lebih sedikit dibandingkan kapal cargo. Singkatnya, Kapal PELNI lebih efektif guna pengiriman barang besar dan berat dalam waktu cepat.",
        "Sedangkan untuk kapal cargo merupakan kapal yang kebanyakan dimiliki oleh pelayaran swasta, kelebihan dari cargo terkait pengiriman barang dibandingkan PELNI adalah dari segi ongkos kirim dikarenakan dalam satu kapal bisa memuat hingga ratusan container. Pengiriman menggunakan kapal cargo cocok untuk barang-barang project besar dengan ongkos kirim lebih bersahabat."
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Udara",
      content: [
        "Jasa cargo udara adalah layanan kirim barang dengan fasilitas pengiriman terbaik dan waktu tercepat. Pengiriman cocok bagi Anda yang sedang kejar target waktu pengiriman atau proyek deadline.",
        "Cargo udara selama ini banyak dipakai untuk pengiriman ke wilayah timur seperti Papua dan sekitarnya. Cargonesia Express selaku jasa cargo profesional sudah bermitra dengan maskapai penerbangan setempat, sehingga pengiriman Anda menjadi prioritas dan bebas kendala.",
        "Berbeda dengan layanan cargo lainnya, cargo udara punya syarat barang yang lebih diperhatikan. Misalnya, tidak bisa kirim barang elektronik yang memiliki baterai dengan kapasitas tertentu.",
        "Namun jangan khawatir, proses pengiriman akan melalui tahap pengecekan oleh tim kami, supaya menghindari hal yang tidak diinginkan seperti penolakan barang, barang rusak atau jenis resiko pengiriman lainnya.",
      ],
    },
    {
      title: "Jasa Ekspedisi Kirim Mobil",
      content: [
        "Jasa ekspedisi kirim mobil bisa Anda gunakan untuk kirim mobil pribadi atau mobil perusahaan. Semua tipe atau jenis mobil seperti SUV, LCGC, mobil mewah, mobil sport, mobil truk bisa Anda kirim.",
        "Keunggulan kirim mobil di Cargonesia diantaranya, tidak perlu kirim mobil ke gudang atau kantor kami, karena mobil akan dijemput oleh tim kami di rumah atau kantor Anda.",
        "Proses pengiriman menggunakan berbagai metode pengiriman yaitu car towing, car carrier, self drive, kapal roro & container.",
      ],
    },
    {
      title: "Kirim Mobil Via Car Towing",
      content: [
        "Car towing merupakan layanan kirim mobil dengan sistem mobil gendong. Cocok untuk pengiriman mobil satuan seperti pribadi atau mobil mewah juga mobil yang butuh dikirim dalam waktu cepat.",
        "Keunggulan car towing adalah pengiriman bisa langsung dilakukan, meski hanya 1 unit mobil saja. Sehingga mobil bisa sampai lebih cepat dibandingkan dengan layanan kirim mobil lainnya.",
        "Kirim mobil via car towing juga cenderung lebih aman, karena tidak ada resiko bergesekan dengan mobil lain. Cargonesia Express biasa menangani klien mobil pribadi maupun mobil untuk ikut event mobil di daerah tertentu.",
      ],
    },
    {
      title: "Kirim Mobil Via Car Carrier",
      content: [
        "Car carrier adalah layanan kirim mobil menggunakan truck FUSO yang muat untuk 5-6 mobil dalam sekali perjalanan. Car carrier lebih unggul dari sisi biaya pengiriman yang lebih murah. Pasalnya, dalam sekali perjalanan bisa mengantar lebih dari 1 unit mobil.",
        "Proses keberangkatan car carrier akan menunggu jadwal, sehingga terkadang waktu pengiriman tidak secepat car towing. Selain itu proses muat mobil juga dilakukan secara ekstra hati-hati, jadi waktu yang dibutuhkan juga semakin banyak.",
      ],
    },
    {
      title: "Kirim Mobil Via Self Drive",
      content: [
        "Self drive merupakan kirim mobil dengan cara dikemudikan langsung oleh tim Cargonesia Express. Keunggulan proses pengiriman menggunakan self drive dari sisi kecepatan. Pasalnya mobil Anda akan dikendarai langsung oleh tim profesional kami.",
        "Semua jenis mobil bisa Anda kirim menggunakan layanan self drive, baik mobil matic, mobil manual, sedan, LCGC, mobil angkutan dan jenis lainnya.",
      ],
    },
    {
      title: "Kirim Mobil Via Kapal Roro",
      content: [
        "Kapal Roro merupakan kapal yang memang sejatinya diperuntukan pengiriman unit kendaraan hingga alat berat. Roro sendiri kependekan dari Roll on/roll off dengan artian kapal bisa dinaik turunkan untuk jalur kendaraan secara langsung.",
        "Pengiriman kapal roro biasanya digunakan juga oleh truk ekspedisi dalam penyebrangan, untuk jalur Kapal roro sendiri cukup banyak seperti ke wilayah Sumatera, Kalimantan, Sulawesi.",
      ],
    },
    {
      title: "Kirim Mobil Via Container",
      content: [
        "Pengiriman via container biasanya terjadi untuk pengiriman ke wilayah Indonesia Timur yang mana tidak ada jalur kapal roro, akan tetapi tidak menutup kemungkinan wilayah lainnya dengan permintaan customer agar pengirimannya lebih safety.",
        "Layanan self drive umumnya juga dilengkapi dengan premi asuransi dengan tarif murah yaitu hanya 0.3% saja. Dengan premi tersebut, Anda bisa bebas rasa khawatir melakukan kirim mobil di Cargonesia Express.",
       
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
    {
      title: "Jasa Ekspedisi Kirim Motor",
      content: [
        "Jasa ekspedisi kirim motor adalah layanan yang banyak dipesan oleh perusahaan seperti dealer untuk kebutuhan pasokan stok motor di dealer berbagai daerah. Selain itu tidak jarang juga klien kirim motor dari Cargonesia Express merupakan perorangan, yang biasanya untuk kepentingan pindahan atau kirim ke keluarga di daerah.",
        "Untuk pengiriman motor bisa menggunakan armada truck, towing, carrier, kapal roro dan container tergantung dari masing-masing wilayah pengiriman.",
      ],
    },
    {
      title: "Jasa Kirim Alat Berat",
      content: [
        "Jasa kirim alat berat banyak dipesan oleh klien kami dari perusahaan konstruksi, proyek pertambangan, proyek pengeboran minyak dan gas dan perusahaan sejenis lainnya.",
        "Anda bisa kirim alat berat seperti Bego/Excavator, Crane, Bulldozer, Mesin Traktor, Mesin Panen Otomatis, Dump Truck, Vibratory Roller, Water Tank Truck, Jack Hammer dan masih banyak lagi, tanpa khawatir melalui Cargonesia Express.",
        "Kirim alat berat di Cargonesia Express prosesnya sangat mudah, Anda hanya perlu konfirmasi jenis barang, lalu tim kami akan melakukan pengecekan dan setelah persyaratan administrasi sudah Anda lengkapi, alat berat akan segera langsung dikirim ke tempat tujuan.",
      ],
    },
    {
      imageURL: "/placeholder.svg",
      imageAlt: "Alat Berat",
    },
    {
      title: "Keuntungan menggunakan Jasa Ekspedisi Cargonesia"
    },
    {
      title: "Gratis Jemput Barang",
      content: [
        "Kirim barang dengan bobot puluhan hingga ratusan kilo tentu akan sulit jika harus kirim ke gudang atau logistik jasa ekspedisi terlebih dahulu. Di Cargonesia Express, Anda tidak perlu khawatir, karena barang akan dijemput di lokasi sesuai dengan permintaan klien.",
        "Nggak perlu lagi bongkar muat barang, jadi pengiriman lebih efektif dan efisien. Jika Anda merupakan pebisnis online yang punya produk dengan pengamanan ekstra, kami juga menyediakan packing kayu yang pasti lebih aman sampai di lokasi tujuan.",
      ],
    },
    {
      title: "Gratis Asuransi",
      content: [
        "Asuransi adalah layanan perlindungan yang banyak ditemukan pada jasa ekspedisi cargo. Fungsi asuransi untuk menjamin barang Anda akan aman atau bisa mendapat penggantian jika terjadi hal buruk selama pengiriman, seperti barang rusak atau resiko kehilangan.",
        "Keuntungan jika Anda menggunakan jasa cargo dari Cargonesia Express adalah gratis asuransi. Jadi Anda tidak perlu cemas jika terjadi hal yang tidak diinginkan. Anda akan ganti rugi yang sesuai jika terjadi cacat fisik atau hilang akibat kelalaian kru kami.",
        "Gratis asuransi bisa berlaku untuk pengiriman dengan nilai barang maksimal Rp 50 juta. Namun tidak sedikit klien kami yang mengirim barang dengan nominal barang mencapai ratusan juta rupiah, tetap bisa mendaftarkan asuransi dengan premi yang sangat terjangkau.",
      ],
    },
    {
      title: "Gratis Konsultasi Pengiriman",
      content: [
        "Konsultasi pengiriman sebaiknya memang disarankan untuk dilakukan oleh klien yang baru pertama kali mengirim barang besar melalui cargo. Pasalnya Anda mungkin membutuhkan informasi seperti cara pengemasan, rute pengiriman atau fasilitas yang disediakan jasa ekspedisi.",
        "Bagi Anda yang akan kirim barang berat / besar, jangan ragu untuk menanyakan semua informasi atau layanan ekspedisi melalui tim CS kami. Anda bisa menghubungi via Whatsapp maupun panggilan telepon ke nomor admin kami yang tertera di website.",
      ],
    },
    {
      title: "Jasa Ekspedisi Cargo Murah Terdekat Dengan Anda",
      content: [
        "Kami selalu bergerak dengan semangat visi kami yaitu “Menjadi Perusahaan Ekspedisi Terbesar Di Indonesia” maka dari itu kami berkomitmen untuk selalu memenuhi kebutuhan pengiriman cargo anda dimanapun anda berada.",
        "Anda dapat menikmati layanan cargo terdekat di Kota anda melalui Kantor Pusat dan Cabang kami di:",
      ]
    },
    {
      title: "Alamat Ekspedisi Cargo Di Jakarta",
      content: [
        "Cargonesia Express Jakarta : Jalan Kangkung Nomor 4, Cipulir, Kebayoran Lama, Jakarta Selatan.",
        "Telepon : (021) 27092288",
        "Melayani jemput barang JABODETABEK dan layanan GRATIS jemput barang area :",
          <h3 className='text-bold min-w-fit italic text-gray-800'>Jakarta Pusat:</h3>,
          <p className='max-w-auto'>Cempaka Putih, Gambir, Johar Baru, Kemayoran, Menteng, Sawah Besar, Senen, Tanah Abang.</p>,
      ]
    },
    {
      title: "Ekspedisi Jakarta Ke Berbagai Wilayah Indonesia",
      content: [
        "Sebagai Ekspedisi Jakarta yang sudah berpengalaman serta didukung dari berbagai layanan dan banyak keuntungan bagi customer, Cargonesia Express siap membantu distribusi barang, kendaraan dan alat berat anda ke berbagai wilayah Indonesia.",
        "Selengkapnya untuk ekspedisi jakarta bisa klik tautan dibawah ini :",
      ],
      list: [
        <a href="/Sumatera" className='font-semibold text-gray-500'>Ekspedisi Jakarta Sumatera</a>,
        <a href="/Kalimantan"  className='font-semibold text-gray-500'>Ekspedisi Jakarta Kalimantan</a>,
        <a href="/NTB"  className='font-semibold text-gray-500'>Ekspedisi Jakarta Nusa Tenggara Barat</a>,
        <a href="/NTB"  className='font-semibold text-gray-500'>Ekspedisi Nusa Tenggara Timur</a>,
        <a href="/Sulawesi"  className='font-semibold text-gray-500'>Ekspedisi Jakarta Sulawesi</a>,
        <a href="/Maluku"  className='font-semibold text-gray-500'>Ekspedisi Jakarta Maluku</a>,
        <a href="/Papua"  className='font-semibold text-gray-500'>Ekspedisi Jakarta Papua</a>,
      ]
    },
  ]

  return (
    <div className='min-h-screen bg-white'>
      <HeroSection
        title="Jasa Ekspedisi Jakarta ke Kalimantan Murah via Trucking"
        description="Ekspedisi Cargo Jakarta Ke Balikpapan, Banjarmasin, Pontianak, Sampit, Pangkalan Bun, Tarakan"
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