"use client"
import React, { useEffect, useRef } from "react"
import Image from "next/image"
import AZG from "/images/logos/AZG91.png"
import Happily from "/images/logos/Happily.png"
import crest from "/images/logos/cres.png"
import curemd from "/images/logos/curemd_plain.png"
import swyft from "/images/logos/swyft.jpg"
import shekh from "/images/logos/shekh_sahab.png"
import Master from "/images/logos/Master.png"
import Changan from "/images/logos/Changan.jpg"
import Cables from "/images/logos/Cables.jpg"
import layers from "/images/logos/layers.png"
import GMV from "/images/logos/GMV.jpg"
import SSH from "/images/logos/SSH.jpg"
import Vplay from "/images/logos/Vplay.png"
import cheeta from "/images/logos/cheeta.png"
import LGS from "/images/logos/LGS.jpg"
import KAMRAN from "/images/logos/KAMRAN.jpg"
import ravi from "/images/logos/ravi.png"
import damaan from "/images/logos/damaan.png"
import imperial from "/images/logos/imperial.png"
import MGA from "/images/logos/MGA.png"

export default function ClientSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    let scrollPosition = 0
    const speed = 0.75 // pixels per frame

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
    { name: "Happilac", logo: Happily },
    { name: "Crescent Bahümán Ltd", logo: crest },
    { name: "CureMD", logo: curemd },
    { name: "Swyft Logistics", logo: swyft},
    { name: "Sheikhoo Sugar", logo: shekh },
    { name: "MasterFoam", logo: Master },
    { name: "Changan Automobile", logo: Changan },
    { name: "GM Cables & Pipes", logo: Cables},
    { name: "LAYERS Bakeshop", logo: layers },
    { name: "GWM Haval", logo: GMV },
    { name: "Support Soultions Hub", logo: SSH },
    { name: "Venevisión Play", logo: Vplay },
    { name: "Cheetay logistics", logo: cheeta },
    { name: "LGS School", logo: LGS },
    { name: "KAMRAN Steel", logo: KAMRAN },
    { name: "Ravi Motorcycles", logo: ravi },
    { name: "DAMAAN group", logo: damaan },
    { name: "Imperial Synergies", logo: imperial },
    { name: "MGA Industries Pvt. Ltd.", logo: MGA },

    { name: "AZG9", logo: AZG },
    { name: "Happilac", logo: Happily },
    { name: "Crescent Bahümán Ltd", logo: crest },
    { name: "CureMD", logo: curemd },
    { name: "Swyft Logistics", logo: swyft},
    { name: "Sheikhoo Sugar", logo: shekh},
    { name: "MasterFoam", logo: Master },
    { name: "Changan Automobile", logo: Changan },
    { name: "GM Cables & Pipes", logo: Cables },
    { name: "LAYERS Bakeshop", logo: layers },
    { name: "GWM Haval", logo: GMV },
    { name: "Support Soultions Hub", logo: SSH },
    { name: "Venevisión Play", logo: Vplay },
    { name: "Cheetay logistics", logo: cheeta },
    { name: "LGS School", logo: LGS },
    { name: "KAMRAN Steel", logo: KAMRAN },
    { name: "Ravi Motorcycles", logo: ravi },
    { name: "DAMAAN group", logo: damaan },
    { name: "Imperial Synergies", logo: imperial },
    { name: "MGA Industries Pvt. Ltd.", logo: MGA },
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
          <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-[rgba(87,199,133,1)] to-transparent"></div>

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
          <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-[rgba(87,199,133,1)] to-transparent"></div>
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