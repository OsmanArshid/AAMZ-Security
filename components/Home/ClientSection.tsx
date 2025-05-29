"use client"
import React, { useEffect, useRef } from "react"
import Image from "next/image"
import AZG from "/images/logos/AZG91.png"

export default function ClientSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    let scrollPosition = 0
    const speed = 0.5 // pixels per frame

    const scroll = () => {
      scrollPosition += speed

      // Reset position when we've scrolled through half the content
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0
      }

      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition
      }

      requestAnimationFrame(scroll)
    }

    const animation = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animation)
  }, [])

  // Client logos - replace with actual client logos
  const clients = [
    { name: "AZG9", logo: AZG },
    { name: "Happilac", logo: "/placeholder.svg?height=60&width=120" },
    { name: "CRESCENT Bahuman Ltd", logo: "/placeholder.svg?height=60&width=120" },
    { name: "CureMD", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Swyft Logistics", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Sheikhoo Sugar", logo: "/placeholder.svg?height=60&width=120" },
    { name: "MasterFoam", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Changan Automobile", logo: "/placeholder.svg?height=60&width=120" },
    { name: "GM Cables & Pipes", logo: "/placeholder.svg?height=60&width=120" },
    { name: "LAYERS Bakeshop", logo: "/placeholder.svg?height=60&width=120" },
    { name: "GWM Haval", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Support Soultions Hub", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Venevisión Play", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Cheetay logistics", logo: "/placeholder.svg?height=60&width=120" },
    { name: "LGS School", logo: "/placeholder.svg?height=60&width=120" },
    { name: "KAMRAN Steel", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Ravi Motorcycles", logo: "/placeholder.svg?height=60&width=120" },
    { name: "DAMAAN group", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Imperial Synergies", logo: "/placeholder.svg?height=60&width=120" },
    { name: "MGA Industries Pvt. Ltd.", logo: "/placeholder.svg?height=60&width=120" },

    { name: "AZG9", logo: AZG },
    { name: "Happilac", logo: "/placeholder.svg?height=60&width=120" },
    { name: "CRESCENT Bahuman Ltd", logo: "/placeholder.svg?height=60&width=120" },
    { name: "CureMD", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Swyft Logistics", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Sheikhoo Sugar", logo: "/placeholder.svg?height=60&width=120" },
    { name: "MasterFoam", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Changan Automobile", logo: "/placeholder.svg?height=60&width=120" },
    { name: "GM Cables & Pipes", logo: "/placeholder.svg?height=60&width=120" },
    { name: "LAYERS Bakeshop", logo: "/placeholder.svg?height=60&width=120" },
    { name: "GWM Haval", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Support Soultions Hub", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Venevisión Play", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Cheetay logistics", logo: "/placeholder.svg?height=60&width=120" },
    { name: "LGS School", logo: "/placeholder.svg?height=60&width=120" },
    { name: "KAMRAN Steel", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Ravi Motorcycles", logo: "/placeholder.svg?height=60&width=120" },
    { name: "DAMAAN group", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Imperial Synergies", logo: "/placeholder.svg?height=60&width=120" },
    { name: "MGA Industries Pvt. Ltd.", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our <span className="text-green-600">Trusted</span> Clients
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          We are proud to serve and protect leading organizations across Pakistan, providing top-tier security solutions
          with unwavering commitment.
        </p>

        <div className="relative w-full overflow-hidden">
          {/* Gradient overlay on left */}
          <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-[#0a0f1a] to-transparent"></div>

          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="flex items-center gap-12 py-6 overflow-hidden"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" }
            }}
          >
            {clients.map((client, index) => (
              <div key={index} className="flex-shrink-0 flex flex-col items-center">
                <div className=" p-4 rounded-lg h-24 w-40 flex items-center justify-center">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    width={120}
                    height={60}
                    className="max-h-16 w-auto object-contain filter brightness-90 hover:brightness-100 transition-all"
                  />
                </div>
                <span className="mt-2 text-sm text-gray-400">{client.name}</span>
              </div>
            ))}
          </div>

          {/* Gradient overlay on right */}
          <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-[#0a0f1a] to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  )
}