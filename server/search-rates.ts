"user server"; 

import type { NextApiRequest, NextApiResponse } from "next"
import mysql from "mysql2/promise"

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, destination } = req.query

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  if (!method || !destination) {
    return res.status(400).json({ message: "Missing required parameters" })
  }

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
  })

  try {
    let table: string
    switch (method) {
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
      default:
        throw new Error("Invalid shipping method")
    }

    const [rows] = await connection.execute(
      `SELECT * FROM ${table} WHERE tujuan LIKE ?`,
      [`%${destination}%`]
    )

    res.status(200).json({ success: true, data: rows })
  } catch (error) {
    console.error("Database query error:", error)
    res.status(500).json({ success: false, message: "Internal Server Error" })
  } finally {
    await connection.end()
  }
}
