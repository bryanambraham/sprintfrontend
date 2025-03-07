"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Cargo {
  id: number;
  tujuan: string;
  tarif: string;
  estimasi: string;
  cde?: number;
  cdd?: number;
  cdd_long?: number
  min_charge?: string;
  keterangan?: string;
}

const CargoSearch = () => {
  const [cargoData, setCargoData] = useState<Cargo[]>([]);
  const [type, setType] = useState("darat");
  const [destination, setDestination] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(""); // ✅ State tambahan
  const [allDestinations, setAllDestinations] = useState<string[]>([]);
  const [filteredDestinations, setFilteredDestinations] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Fetch daftar tujuan ketika komponen dimuat
  useEffect(() => {
    const fetchDestinations = async () => {
      const response = await fetch(`http://127.0.0.1:8000/api/getdestinations?type=${type}`);
      const data = await response.json();
      setAllDestinations(data);
    };
    fetchDestinations();
  }, [type]);

  // Reset data jika type berubah
  const handleTypeChange = (newType: string) => {
    setType(newType);
    setDestination("");
    setSelectedDestination(""); // ✅ Reset selectedDestination
    setCargoData([]);
    setShowDropdown(false);
  };

  // Fungsi untuk menangani perubahan input pencarian
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toLowerCase();
    setDestination(input);
    setSelectedDestination(""); // ✅ Reset jika mengetik manual
    
    if (input.length > 0) {
      const filtered = allDestinations.filter((dest) => dest.toLowerCase().includes(input));
      setFilteredDestinations(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  // Fungsi untuk memilih tujuan dari dropdown
  const handleSelectDestination = (selected: string) => {
    setDestination(selected);
    setSelectedDestination(selected); // ✅ Menyimpan tujuan yang valid
    setShowDropdown(false);
  };

  // Fungsi untuk mencari cargo berdasarkan tujuan yang dipilih
  const searchCargo = async () => {
    if (!destination.trim() || destination !== selectedDestination) { // ✅ Validasi tambahan
      setCargoData([]); // Kosongkan data jika input tidak valid
      setShowDropdown(false);
      return;
    }

    const response = await fetch(
      `http://127.0.0.1:8000/api/getcargo?type=${type}&destination=${destination}`
    );
    const data = await response.json();
    setCargoData(data);
    setShowDropdown(false);
  };

  return (
    <div className="w-full flex justify-center" id="cargo-search">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md px-4">
        {/* Header */}
        <div className="bg-blue-900 text-white text-center py-4 rounded-t-lg">
          <h1 className="text-xl font-semibold">Butuh Info Ongkos Kirim Cargo?</h1>
        </div>

        {/* Tabs Pilihan Transportasi */}
        <div className="flex justify-center bg-orange-500 py-3 rounded-b-lg">
          {["darat", "laut", "udara", "mobil", "ftl", "cargo", "reguler"].map((t) => (
            <button
              key={t}
              className={`px-6 py-2 mx-2 text-white font-semibold ${
                type === t ? "bg-orange-700" : "bg-orange-500"
              }`}
              onClick={() => handleTypeChange(t)}
            >
              {t === "darat" ? "🚛" : t === "laut" ? "⛴️" : t === "udara" ? "✈️" : t === "ftl" ? "✈️" : t === "cargo" ? "✈️" : t === "reguler" ? "✈️" : "🚗"}{" "}
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Input Pencarian dengan Autocomplete */}
        <div className="relative mt-4">
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Masukkan Tujuan..."
            value={destination}
            onChange={handleInputChange}
          />
          <button onClick={searchCargo} className="absolute right-2 top-2 text-gray-600">
            🔍
          </button>

          {/* Dropdown hasil autocomplete */}
          {showDropdown && filteredDestinations.length > 0 && (
            <ul className="absolute w-full bg-white border mt-1 max-h-40 overflow-y-auto shadow-lg rounded-md">
              {filteredDestinations.map((dest, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelectDestination(dest)}
                >
                  {dest}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Hasil Pencarian */}
        {cargoData.length > 0 ? (
          <div className="mt-6 bg-orange-500 rounded-lg shadow-md">
            <div className="bg-orange-700 text-white p-3 text-lg font-bold flex justify-between">
              <span>JAKARTA ➡️ {cargoData[0].tujuan.toUpperCase()}</span>
            </div>
            <div className="bg-white p-4">
              <p className="font-semibold">Minimum Charge: <span className="text-gray-700">{cargoData[0].min_charge || "N/A"}</span></p>
              <p className="font-semibold">Estimasi: <span className="text-gray-700">{cargoData[0].estimasi} </span>Hari</p>
              <p className="font-semibold">Tarif: <span className="text-gray-700">{cargoData[0].tarif || "N/A"} </span></p>
              <p className="font-semibold">CDE: <span className="text-gray-700">{cargoData[0].cde || " N/A"}</span></p>
              <p className="font-semibold">CDD: <span className="text-gray-700">{cargoData[0].cdd || " N/A"}</span></p>
              <p className="font-semibold">CDD Long: <span className="text-gray-700">{cargoData[0].cdd_long || "N/A"}</span></p>
              {/* <p className="text-red-700 text-xs text-center">Keterangan: N/A berarti Tidak ada!</p> */}
            </div>

            {/* Tombol WhatsApp */}
            <div className="relative flex flex-col justify-center items-center mt-6">
              {/* Tombol WhatsApp */}
              <a
                href="https://wa.me/6285282656556?text=Hai%20SprintCargo,%20saya%20mau%20bertanya%20dong."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold flex items-center gap-2 hover:bg-green-600 transition-colors"
              >
                📞 Hubungi CS Kami
              </a>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-4">No data found</p>
        )}
      </div>
    </div>
  );
};

export default CargoSearch;
