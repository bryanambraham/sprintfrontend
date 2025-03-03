import Image from "next/image"
import type { ReactNode } from "react"

interface DescriptionContentItem {
  title?: string
  content?: (string | ReactNode)[] // Updated to allow both strings and React elements
  list?: (string | ReactNode)[] // Also updated to allow React elements in lists
  imageURL?: string
  imageAlt?: string
}

interface DescriptionContentProps {
  items: DescriptionContentItem[]
  className?: string
}

export function DescriptionContentBot({ items, className = "" }: DescriptionContentProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="space-y-3">
          {item.title && <h4 className="text-lg md:text-xl font-semibold text-gray-900">{item.title}</h4>}
          {item.content &&
            item.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          {item.list && item.list.length > 0 && (
            <ul className="list-disc pl-5 space-y-2">
              {item.list.map((listItem, lIndex) => (
                <li key={lIndex} className="text-gray-700 leading-relaxed">
                  {listItem}
                </li>
              ))}
            </ul>
          )}
          {item.imageURL && item.imageAlt && (
            <div className="mt-4">
              <Image
                src={item.imageURL || "/placeholder.svg"}
                alt={item.imageAlt}
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

