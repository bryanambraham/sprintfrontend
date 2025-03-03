"use client"

import { useState } from "react"
import Image from "next/image"
import { CreditCard, Package, MessageSquare, Play } from "lucide-react"
import Link from "next/link"

export function ShippingSolution() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  const youtubeVideoId = "OnGbs4SRi1Y" // ID Video YouTube

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          {/* Left side - Image and Video */}
          <div className="relative w-full">
            {/* Staff Image */}
            <Image
              src="/staff.jpg"
              alt="Cargonesia Staff"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-lg"
            />

            {/* Video Thumbnail / Player */}
            <div className="absolute bottom-[-40px] left-10 w-[350px] sm:w-[400px] rounded-lg overflow-hidden shadow-lg">
              {!isPlaying ? (
                <div className="relative w-full h-full">
                  <Image
                    src={`https://img.youtube.com/vi/VKGQHTwB8p4/maxresdefault.jpg`}
                    alt="YouTube Thumbnail"
                    width={400}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      onClick={handlePlayClick}
                    >
                      <Play className="w-8 h-8 text-[#FF6600] ml-1" />
                    </button>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full aspect-video rounded-lg"
                  src={`https://www.youtube.com/embed/VKGQHTwB8p4?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl font-bold mb-12">
              Solusi Kirim Barang
              <br />
              Dengan 3M :
            </h2>

            <div className="space-y-12">
              {/* Murah */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-500 mb-2">MURAH</h3>
                  <p className="text-gray-600">
                    Cargonesia Express menawarkan ongkos kirim yang sangat bersahabat ditambah dengan beberapa pilihan
                    armada pada setiap layanan, pastinya anda dapat memilih layanan sesuai dengan kebutuhan dan budget
                    anda.
                  </p>
                </div>
              </div>

              {/* Mudah */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">MUDAH</h3>
                  <p className="text-gray-600">
                    Rasakan mudahnya kirim barang bersama Cargonesia. Repot Antar Barang? Tenang, kami bisa jemput
                    barang anda dan kabar baiknya khusus jemput barang area DKI Jakarta Gratis biaya jemput. Lebih mudah
                    dan tidak perlu keluar biaya tambahan bukan?
                  </p>
                </div>
              </div>

              {/* Menyenangkan */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-500 mb-2">MENYENANGKAN</h3>
                  <p className="text-gray-600">
                    Cargonesia Express siap menjadi sahabat pengiriman anda, yang selalu siap memberikan info terkait
                    sebelum pengiriman, pada saat pengiriman hingga barang sampai di tujuan.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <div className="flex justify-center mt-12">
              <Link
                href="https://wa.me/6285282656556"
                className="bg-[#FF6600] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#ff751a] transition-colors"
              >
                HUBUNGI CS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
