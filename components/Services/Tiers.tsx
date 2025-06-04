"use client"

import { Shield, Star, Award, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import basic from "../../images/logos/basic.png"
import elite from "../../images/logos/elite.png"

const Tiers = () => {
  const tiers = [
    {
      id: "basic",
      name: "AAMZ SECURITY BASIC",
      tagline: "Reliable Protection",
      description:
        "Our affordable and efficient security service is perfect for residential, commercial, and industrial settings. With well-trained and professional guards, we provide a reliable first line of defense against intrusions and violations.",
      features: [
        "Professional Security Guards",
        "24/7 Monitoring Coverage",
        "Basic Patrol Services",
        "Incident Reporting",
        "Emergency Response",
      ],
      icon: Shield,
      gradient: "from-green-600 via-green-700 to-green-900",
      imageSection: "top",
      // image: basic,
    },
    {
      id: "elite",
      name: "AAMZ SECURITY ELITE",
      tagline: "Premium Protection",
      description:
        "Designed for clients requiring the highest level of protection, this premium service features highly skilled personnel, including former SSG commandos. Equipped with advanced gear, our elite team is prepared to handle any security threat with precision and expertise.",
      features: [
        "Advanced Tactical Equipment",
        "Specialized Threat Assessment",
        "VIP Protection Services",
        "Counter-Surveillance Operations",
        "Crisis Management Expertise",
      ],
      icon: Star,
      gradient: "from-slate-800 via-green-800 to-green-900",
      imageSection: "bottom",
      // image: elite,
    },
  ]

  return (
    <> 
      <div
      className="text-xs py-1 pb-2 border-t border-[rgba(87,199,133,1)] dark:border-[rgba(0,133,46,1)]/[0.8] text-center 
      text-slate-600 dark:text-slate-500 bg-white dark:bg-slate-950"
      ></div>

    <div className="relative py-16 bg-white dark:bg-black dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-[#00852E] rounded-2xl shadow-lg">
              <Award className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            SERVICE <span className="text-[#00852E] dark:text-green-600">TIERS</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Choose the security solution that best fits your needs. From reliable basic protection to elite tactical
            services, we deliver excellence at every level.
          </p>
        </div>

        {/* Service Tiers */}
        <div className="space-y-12">
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div
                className={`bg-gradient-to-br ${tier.gradient} p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12`}
              >
                {/* Content Section */}
                <div className="flex-1 text-white space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        <tier.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-medium text-green-200 uppercase tracking-wider">
                        {tier.tagline}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight">{tier.name}</h3>

                    <p className="text-green-100 leading-relaxed text-base lg:text-lg">{tier.description}</p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tier.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                        <span className="text-sm text-white font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex-shrink-0 relative">
                  <div className="relative w-80 h-64 lg:w-96 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                    <Image
                      src={tier.image}
                      alt={`${tier.name} Security Personnel`}
                      fill
                      className="object-cover object-center"
                      style={{
                        objectPosition: tier.imageSection === "top" ? "center 20%" : "center 80%",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div> 
                </div>
              </div>


              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-[150px] text-center">
          <div className="rounded-2xl p-8 text-white"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,133,46,1) 0%, rgba(87,199,133,1) 40%, rgba(0,0,0,1) 100%)",
            }}
            >
            <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Facility?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Contact our security experts today for a comprehensive consultation and customized security
              solution for your organization.
            </p>
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="bg-white text-[#00852E] px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tiers