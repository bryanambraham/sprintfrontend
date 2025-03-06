import Image from "next/image"

interface OfficeLocation {
  name: string
  address: string
  serviceArea?: string
  phone: string
}

export function OfficeLocations() {
  const offices: OfficeLocation[] = [
    {
      name: "SprintCargo Jakarta",
      address: "Jl Pasar Kebayoran Lama No 20, Kebayoran Lama , Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12230",
      phone: "+62 852-8265-6556",
    },
    {
        name: "SprintCargo Jakarta",
        address: "Jl Pasar Kebayoran Lama No 20, Kebayoran Lama , Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12230",
        phone: "+62 852-8265-6556",
      },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold">KANTOR & CABANG CARGONESIA EXPRESS</h2>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1B1464] -mb-2"></div>
          </div>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center space-y-4"
            >
              {/* Logo */}
              <div className="w-48 h-24 relative">
                <Image src="/sprintlogo.png" alt="Cargonesia Logo" width={180} height={20} className="object-contain" />
              </div>

              {/* Office Name */}
              <h3 className="text-xl font-semibold text-gray-900">{office.name}</h3>

              {/* Address */}
              <p className="text-gray-600">{office.address}</p>

              {/* Service Area */} 
              {/* <p className="text-gray-600">{office.serviceArea}</p> */}

              {/* Phone */}
              <p className="text-[#FF6600] font-semibold"><a href="">{office.phone}</a></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

