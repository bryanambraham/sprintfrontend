import Image from "next/image"
import { Check } from "lucide-react"

export function LoyaltyRewards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Image src="/sprintlogo.png" alt="Cargonesia Logo" width={400} height={400} className="mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">SprintCargo Loyalty Rewards</h1>
          <h2 className="text-xl font-semibold mb-2">Diskon Hingga 30% untuk Wilayah Tertentu!</h2>
          <p className="text-gray-600 italic">
            Kami Hadir untuk Anda yang Setia! Dapatkan Keuntungan Spesial untuk Pengiriman ke Seluruh Indonesia!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Illustration */}
          <div className="relative">
            <Image
              src="/staff.jpg"
              alt="Delivery Illustration"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Right Side - Promo Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Promo yang Menguntungkan</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-1" />
                <p>
                  <span className="font-semibold">Diskon 10%</span> Area Jawa, Sumatera, Maluku, & Papua
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-1" />
                <p>
                  <span className="font-semibold">Diskon 20%</span> Area Bali, Nusa Tenggara Barat (NTB), Kalimantan &
                  Sulawesi
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-1" />
                <p>
                  <span className="font-semibold">Diskon 30%</span> Wilayah Nusa Tenggara Timur (NTT)
                </p>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Syarat & Ketentuan</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                <li>Minimal pengiriman sesuai masing-masing kota di daftar harga</li>
                <li>Diskon dihitung dari tarif normal</li>
                <li>Tidak berlaku kelipatan atau digabungkan dengan promo lain</li>
                <li>Pembayaran Cash</li>
              </ul>
            </div>

            <p className="text-center font-semibold text-[#FF6600] underline">
              Segera kirim barang Anda dan hemat lebih banyak bersama Cargonesia!
            </p>
          </div>
        </div>

        {/* Our Advantages */}
        <div className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <h3 className="text-xl font-semibold mb-4">Keunggulan Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-[#FF6600] mt-1" />
                <p>Jangkauan Terluas: Melayani seluruh Indonesia dari Sabang hingga Merauke.</p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-[#FF6600] mt-1" />
                <p>Keamanan Terjamin: Sistem pengamanan dan asuransi terbaik.</p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-[#FF6600] mt-1" />
                <p>Harga Kompetitif: Tarif terjangkau, apalagi dengan diskon spesial ini!</p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-[#FF6600] mt-1" />
                <p>Tepat Waktu: Jadwal pengiriman yang terencana tanpa kendala.</p>
              </li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/staff.jpg"
              alt="Warehouse Operations"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

