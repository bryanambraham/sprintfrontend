"use client"

import { useState } from "react"
import { Truck, Ship, Plane, Car, Search, Loader2 } from "lucide-react"
import Link from "next/link"
import type React from "react"

type ShippingMethod = "DARAT" | "LAUT" | "UDARA" | "MOBIL"

interface ShippingOption {
  id: ShippingMethod
  label: string
  icon: React.ReactNode
}

// Define separate interfaces for each shipping method
interface BaseShippingRate {
  tujuan: string
  estimasi: string
}

interface DaratShippingRate extends BaseShippingRate {
  min_charge: number
  tarif: number
}

interface LautShippingRate extends BaseShippingRate {
  min_charge: number
  tipe: number
  tarif: number
}

interface UdaraShippingRate extends BaseShippingRate {
  min_charge: number
  tarif: string
}

interface MobilShippingRate extends BaseShippingRate {
  tipe: number
  tarif: number
}

type ShippingRate = DaratShippingRate | LautShippingRate | UdaraShippingRate | MobilShippingRate

export function ShippingCalculator() {
  const [selectedMethod, setSelectedMethod] = useState<ShippingMethod>("DARAT")
  const [destination, setDestination] = useState("")
  const [results, setResults] = useState<ShippingRate[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const shippingOptions: ShippingOption[] = [
    { id: "DARAT", label: "DARAT", icon: <Truck className="w-8 h-8" /> },
    { id: "LAUT", label: "LAUT", icon: <Ship className="w-8 h-8" /> },
    { id: "UDARA", label: "UDARA", icon: <Plane className="w-8 h-8" /> },
    { id: "MOBIL", label: "MOBIL", icon: <Car className="w-8 h-8" /> },
  ]

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setResults([])

    try {
      let table = ""
      switch (selectedMethod) {
        case "DARAT":
          table = "cargodarat"
          break
        case "LAUT":
          table = "cargolaut"
          break
        case "UDARA":
          table = "cargoudara"
          break
        case "MOBIL":
          table = "cargomobil"
          break
      }

      // Use your existing PHP endpoint
      const response = await fetch(
        `search_rates.php?method=${selectedMethod}&destination=${encodeURIComponent(destination)}&table=${table}`,
      )

      if (!response.ok) {
        throw new Error("Failed to fetch rates")
      }

      const data = await response.json()
      setResults(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const renderRateDetails = (rate: ShippingRate) => {
    switch (selectedMethod) {
      case "DARAT":
        return (
          <>
            <p className="text-gray-600">Estimasi: {rate.estimasi}</p>
            <p className="text-gray-600">
              Min Charge: Rp {(rate as DaratShippingRate).min_charge.toLocaleString("id-ID")}
            </p>
          </>
        )
      case "LAUT":
        return (
          <>
            <p className="text-gray-600">Estimasi: {rate.estimasi}</p>
            <p className="text-gray-600">
              Min Charge: Rp {(rate as LautShippingRate).min_charge.toLocaleString("id-ID")}
            </p>
            <p className="text-gray-600">Tipe: {(rate as LautShippingRate).tipe}</p>
          </>
        )
      case "UDARA":
        return (
          <>
            <p className="text-gray-600">Estimasi: {rate.estimasi}</p>
            <p className="text-gray-600">
              Min Charge: Rp {(rate as UdaraShippingRate).min_charge.toLocaleString("id-ID")}
            </p>
          </>
        )
      case "MOBIL":
        return (
          <>
            <p className="text-gray-600">Estimasi: {rate.estimasi}</p>
            <p className="text-gray-600">Tipe: {(rate as MobilShippingRate).tipe}</p>
          </>
        )
      default:
        return null
    }
  }

  return (
    <section className="max-w-4xl mx-auto p-4">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="bg-[#1B1464] text-white py-6 px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Butuh Info Ongkos Kirim Cargo Kalimantan ?</h2>
        </div>

        {/* Shipping Methods */}
        <div className="bg-[#FF6600] p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shippingOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedMethod(option.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors
                  ${
                    selectedMethod === option.id
                      ? "bg-white text-[#FF6600]"
                      : "bg-transparent text-white hover:bg-white/10"
                  }`}
              >
                {option.icon}
                <span className="mt-2 font-semibold">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search Form */}
        <div className="bg-white p-8">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Masukkan Tujuan..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg pr-12
                  focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading || !destination}
                className="bg-[#FF6600] text-white px-8 py-3 rounded-lg font-semibold
                  hover:bg-[#ff751a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Cari Tarif"}
              </button>
            </div>
          </form>

          {/* Results */}
          {error && <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>}

          {results.length > 0 && (
            <div className="mt-6 space-y-4">
              <h3 className="font-semibold text-lg">Hasil Pencarian:</h3>
              <div className="divide-y divide-gray-200">
                {results.map((rate, index) => (
                  <div key={index} className="py-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{rate.tujuan}</h4>
                        {renderRateDetails(rate)}
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-[#FF6600]">
                          Rp {typeof rate.tarif === "number" ? rate.tarif.toLocaleString("id-ID") : rate.tarif}
                          {selectedMethod === "DARAT" || selectedMethod === "LAUT" ? "/Kg" : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chat Button */}
          <div className="flex justify-center mt-8">
            <Link
              href="https://wa.me/your-number-here"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Chat CS Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

