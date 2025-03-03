"use client";
import { useState } from "react";

const CalculatorCargo = () => {
  const [actualWeight, setActualWeight] = useState<number>(0);
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [usePacking, setUsePacking] = useState<boolean>(false);

  // Hitung Berat Volume (Kgv)
  const volumeWeight = (length * width * height) / 4000;

  // Hitung Berat Final (Nilai terbesar antara berat aktual dan volume)
  const finalWeight = Math.max(actualWeight, volumeWeight);

  // Hitung Kubikasi (CBM)
  const cbm = (length * width * height) / 1000000;

  // Hitung Dimensi Setelah Packing (+8cm tiap sisi)
  const packedVolume = usePacking
    ? ((length + 8) * (width + 8) * (height + 8)) / 4000
    : 0;

  // Biaya Packing (Jika Packing Dipilih)
  const packingCost = packedVolume * 2000;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg my-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Kalkulator Cargo</h2>
      <p className="text-gray-600 mb-4">
        Cara menghitung berat barang pengiriman melalui ekspedisi cargo.
      </p>

    {/* Input Berat Aktual */}
    <label className="block font-semibold text-gray-700">
    Berat Aktual (KG)*
    </label>
    <input
    type="number"
    className="w-full p-2 border rounded mb-3"
    value={actualWeight === 0 ? "" : actualWeight}
    onChange={(e) => {
        const value = e.target.value;
        setActualWeight(value === "" ? 0 : parseFloat(value) || 0);
    }}
    />

    {/* Input Dimensi */}
    <div className="grid grid-cols-3 gap-3">
        <div>
            <label className="block font-semibold text-gray-700">Panjang (CM)*</label>
            <input
            type="number"
            className="w-full p-2 border rounded"
            value={length === 0 ? "" : length}
            onChange={(e) => {
                const value = e.target.value;
                setLength(value === "" ? 0 : parseFloat(value) || 0);
            }}
            />
        </div>
        <div>
            <label className="block font-semibold text-gray-700">Lebar (CM)*</label>
            <input
            type="number"
            className="w-full p-2 border rounded"
            value={width === 0 ? "" : width}
            onChange={(e) => {
                const value = e.target.value;
                setWidth(value === "" ? 0 : parseFloat(value) || 0);
            }}
            />
        </div>
        <div>
            <label className="block font-semibold text-gray-700">Tinggi (CM)*</label>
            <input
            type="number"
            className="w-full p-2 border rounded"
            value={height === 0 ? "" : height}
            onChange={(e) => {
                const value = e.target.value;
                setHeight(value === "" ? 0 : parseFloat(value) || 0);
            }}
            />
        </div>
    </div>


      {/* Output Berat Volume */}
      <div className="mt-4 p-3 bg-gray-100 rounded">
        <p className="font-semibold text-gray-800">Volume (Kgv):</p>
        <p className="text-xl font-bold">{volumeWeight.toFixed(2)} Kgv</p>
        <p className="text-sm text-gray-600">Rumus: (P × L × T) / 4000</p>
      </div>

      {/* Output Berat yang Diambil */}
      <div className="mt-4 p-3 bg-gray-100 rounded">
        <p className="font-semibold text-gray-800">Berat yang Diambil:</p>
        <p className="text-xl font-bold">{finalWeight.toFixed(2)} KG</p>
        <p className="text-sm text-gray-600">Perbandingan antara Berat Aktual & Volume</p>
      </div>
      
      {/* Output Kubikasi (CBM) */}
      <div className="mt-4 p-3 bg-gray-100 rounded">
        <p className="font-semibold text-gray-800">Kubikasi (CBM):</p>
        <p className="text-xl font-bold">{cbm.toFixed(3)} CBM</p>
        <p className="text-sm text-gray-600">Rumus: (P × L × T) / 1.000.000</p>
      </div>

      {/* Opsi Packing */}
      <div className="mt-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="mr-2"
            checked={usePacking}
            onChange={() => setUsePacking(!usePacking)}
          />
          <span className="text-gray-800 font-semibold">Tambahkan Packing</span>
        </label>
      </div>

      {/* Output Volume Setelah Packing */}
      {usePacking && (
        <div className="mt-4 p-3 bg-yellow-100 rounded">
          <p className="font-semibold text-gray-800">Est. Volume Setelah Packing:</p>
          <p className="text-xl font-bold">{packedVolume.toFixed(3)}</p>
          <p className="text-sm text-gray-600">Opsi tambahan jika barang butuh packing</p>
        </div>
      )}

      {/* Output Biaya Packing */}
      {usePacking && (
        <div className="mt-4 p-3 bg-yellow-100 rounded">
          <p className="font-semibold text-gray-800">Est. Biaya Packing:</p>
          <p className="text-xl font-bold">Rp {packingCost.toLocaleString()}</p>
          <p className="text-sm text-gray-600">
            Perhitungan: Volume Packing × Rp 2000
          </p>
        </div>
      )}
    </div>
  );
};

export default CalculatorCargo;
