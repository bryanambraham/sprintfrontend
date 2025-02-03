import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

interface HeroFeature {
  text: string
}

interface HeroButton {
  text: string
  href: string
}

interface HeroCertification {
  imageUrl: string
  alt: string
}

interface HeroSectionProps {
  title: string
  description: string
  subDescription?: string
  features?: HeroFeature[]
  button?: HeroButton
  certifications?: HeroCertification[]
  imageUrl?: string
  imageAlt?: string
  backgroundPattern?: boolean
  className?: string
}

export function HeroSection({
  title,
  description,
  subDescription,
  features = [],
  button,
  certifications = [],
  imageUrl = "/placeholder.svg",
  imageAlt = "Hero Image",
  backgroundPattern = true,
  className = "",
}: HeroSectionProps) {
  return (
    <section className={`relative bg-[#FF6600] overflow-hidden ${className}`}>
      {/* Background circles */}
      {backgroundPattern && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-1/4 -bottom-1/4 w-2/3 h-2/3 bg-[#ff751a] rounded-full opacity-50" />
          <div className="absolute -right-1/3 -top-1/4 w-2/3 h-2/3 bg-[#ff751a] rounded-full opacity-50" />
        </div>
      )}

      <div className="container-responsive relative">
        <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-24">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>

            <div className="space-y-4">
              <p className="text-lg md:text-xl">{description}</p>
              {subDescription && <p className="font-semibold">{subDescription}</p>}
            </div>

            {features.length > 0 && (
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-white" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            )}

            {button && (
              <Link
                href={button.href}
                className="inline-block bg-[#1B1464] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#251b8c] transition-colors"
              >
                {button.text}
              </Link>
            )}

            {certifications.length > 0 && (
              <div className="flex items-center gap-4 pt-8">
                {certifications.map((cert, index) => (
                  <Image
                    key={index}
                    src={cert.imageUrl || "/placeholder.svg"}
                    alt={cert.alt}
                    width={100}
                    height={100}
                    className="w-24 h-auto"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={imageAlt}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

