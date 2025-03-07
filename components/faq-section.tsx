"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const faqs: FAQItem[] = [
    {
      question: "APAKAH PROMO INI BERLAKU UNTUK SEMUA JENIS BARANG?",
      answer: "Ya, promo berlaku untuk pengiriman barang dengan minimal berat 100 kg.",
    },
    {
      question: "BAGAIMANA CARA MENGHITUNG TARIF SETELAH DISKON?",
      answer:
        "Tarif setelah diskon dihitung berdasarkan berat barang dikali dengan tarif dasar, kemudian dikurangi dengan persentase diskon yang berlaku. Minimal pembelian dan syarat & ketentuan berlaku.",
    },
    {
      question: "APAKAH SAYA BISA MENGGABUNGKAN DISKON INI DENGAN PROMO LAIN?",
      answer:
        "Tidak, promo ini tidak dapat digabungkan dengan promo atau diskon lainnya. Silakan pilih salah satu promo yang paling menguntungkan untuk Anda.",
    },
    {
      question: "BAGAIMANA CARA MENGKLAIM DISKON?",
      answer:
        "Untuk mengklaim diskon, Anda cukup menunjukkan kode promo saat melakukan pengiriman di kantor kami atau memberitahukan kode promo kepada customer service kami saat melakukan pemesanan via WhatsApp.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">FAQ</h2>
          <div className="h-1 w-full bg-[#FF6600]"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-[#1B1464]">{faq.question}</span>
                <span className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-[#FF6600]" />
                  ) : (
                    <Plus className="h-5 w-5 text-[#FF6600]" />
                  )}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
                style={{
                  transform:
                    openIndex === index ? "translateY(0)" : index === 0 ? "translateY(-100%)" : "translateY(100%)",
                  opacity: openIndex === index ? 1 : 0,
                  transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out, max-height 0.3s ease-in-out",
                }}
              >
                <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

