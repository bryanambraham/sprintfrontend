"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface Destination{
    description: string
    contact: string
    cektarif: string
}

interface TimeCounter{
    days: number
    hours: number
    minutes: number
    seconds: number
}

export function PromoCounter(){
    const[timeCounter, settimeCounter] = useState<TimeCounter>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    const destinations: Destination[] = [
        {
            description: "Info seputar promo, jadwal, ongkor kirim ke Kalimantan, bisa hubungi CS",
            contact: "https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong.",
            cektarif: "#cargo-search",
        },
        {
            description: "Info seputar promo, jadwal, ongkor kirim ke Sumatera, bisa hubungi CS",
            contact: "https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong.",
            cektarif: "#cargo-search",
        },
        {
            description: "Info seputar promo, jadwal, ongkor kirim ke Bali, bisa hubungi CS",
            contact: "https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong.",
            cektarif: "#cargo-search",
        },
    ]

    useEffect( () => {
        const calculateTimeCounter = () => {
            const targetDate = new Date("2026-03-30T23:59:59")
            const now = new Date ()
            const difference = targetDate.getTime() - now.getTime()

            if (difference > 0){
                settimeCounter({
                    days: Math.floor(difference / (1000*60*60*24)),
                    hours: Math.floor((difference / (1000* 60* 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                })
            }
        }

        const timer = setInterval(calculateTimeCounter, 1000)
        calculateTimeCounter()

        return () => clearInterval(timer)
    }, [])

    const padNumber = (num: number) => String(num).padStart(2, "0")

    return(
        <section className="py-16 bg-gray-50">
            <div className="containerm mx-auto px-4 max-w-4xl">
                {/* Cek Ongkir */}
                    <div className="text-center mb-8">
                        <Link
                        href="#"
                        className="inline-block bg-gray-800 text-white px-8 py-3
                        rounded-lg font-semibold hover:bg-red-500 transition-colors"
                        >
                            Ayo Cek Ongkir dan Gunakan Kalkulator Cargo!
                        </Link>
                    </div>

                    {/* Countdown Timer */}
                    <div className="bg-[#FF6600] text-white rounded-lg p-6 mb-8">
                        <h2 className="text-center text-xl md:text-2xl font-bold mb-6">
                            Promo Berakhir Pada 30 Maret 2026
                        </h2>
                        <div className="flex justify-center items-center space-x-4">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold">
                                    {padNumber(timeCounter.days)}
                                </div>
                                <div className="text-sm">Day(s)</div>
                            </div>
                            <div className="text-3xl md:text-4xl font-bold">:</div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold">
                                    <div className="text-3xl md:text-4xl font-bold">
                                        {padNumber(timeCounter.hours)}
                                    </div>
                                    <div className="text-sm">Hour(s)</div>
                                </div>
                            </div>
                            <div className="text-3xl md:text-4xl font-bold">:</div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold">
                                    <div className="text-3xl md:text-4xl font-bold">
                                        {padNumber(timeCounter.minutes)}
                                    </div>
                                    <div className="text-sm">Minute(s)</div>
                                </div>
                            </div>
                            <div className="text-3xl md:text-4xl font-bold">:</div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold">
                                    <div className="text-3xl md:text-4xl font-bold">
                                        {padNumber(timeCounter.seconds)}
                                    </div>
                                    <div className="text-sm">Second(s)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="space-y-6">
                    {destinations.map((destination, index) => (
                        <div
                        key={index}
                        className="flex flex-col md:flex-row justify-between
                        items-center gap-4 p-4 bg-white rounded-lg shadow"
                        >
                            <p className="text-gray-700 text-center md:text-left">
                                {destination.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                href={destination.contact}
                                className="inline-flex items-center bg-green-500
                                text-white px-4 py-2 rounded-lg hover:bg-green-600
                                transition-colors"
                                >
                                    <span className="mr-2">WhatsApp</span>
                                </Link>

                                <Link
                                href={destination.cektarif}
                                className="inline-flex items-center border-2 border-[#FF6600] text-[#FF6600]
                                px-46 py-2 rounded-lg hover:bg-[#FF6600] hover:text-white transition-colors"
                                >
                                    Cek Ongkir
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}