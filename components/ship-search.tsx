"use client"
import { useState } from 'react';

interface Cargo {
  id: number;
  tujuan: string;
  tarif: string;
  estimasi: string;
}

const CargoSearch = () => {
    const [cargoData, setCargoData] = useState<Cargo[]>([]);
    const [type, setType] = useState('darat');
    const [destination, setDestination] = useState('');

    const searchCargo = async () => {
        const response = await fetch(`/api/getcargo?type=${type}&destination=${destination}`);
        const data = await response.json();
        setCargoData(data);
    };

    return (
        <div>
            <h1>Search Cargo Information</h1>
            <input
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="darat">Darat</option>
                <option value="laut">Laut</option>
                <option value="udara">Udara</option>
                <option value="mobil">Mobil</option>
            </select>
            <button onClick={searchCargo}>Search</button>

            <div>
                {cargoData.length > 0 ? (
                    cargoData.map((cargo) => (
                        <div key={cargo.id}>
                            <p>Tarif: {cargo.tarif}</p>
                            <p>Estimasi: {cargo.estimasi}</p>
                        </div>
                    ))
                ) : (
                    <p>No data found</p>
                )}
            </div>
        </div>
    );
};

export default CargoSearch;
