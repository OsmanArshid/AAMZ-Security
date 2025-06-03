"use client"

import electronicServices from "../../resources/electronicServices";
import { useState } from "react"
import { Shield, Scan, Flame, Monitor, DoorOpen, Fingerprint, CreditCard, Clock,
        AlertTriangle, Search, Camera, Zap, ChevronRight, CheckCircle} from "lucide-react"


// Get icon component
const getIconComponent = (iconName) => {
  const iconMap = {
    DoorOpen, Scan, Flame, Monitor, Shield, Fingerprint,
    CreditCard, Clock, AlertTriangle, Search, Camera, Zap,
  }
  
  return iconMap[iconName] || Shield
}


// Electronic Service Card Component
const ElectronicServiceCard = ({ service, isActive, onClick }) => {
  const IconComponent = getIconComponent(service.icon)

  return (
    <div
      className={`group cursor-pointer transition-all duration-300 ${isActive ? "scale-105" : "hover:scale-102"}`}
      onClick={() => onClick(service.id)}
    >
      <div
        className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${
          isActive
            ? "bg-[#00852E] border-[#00852E] text-white shadow-2xl shadow-green-500/25"
            : "bg-white dark:bg-slate-800 border-green-200 dark:border-slate-700 hover:border-[#00852E] dark:hover:border-green-400"
        }`}
      >
        <div className="flex items-center gap-4 mb-3">
          <div
            className={`p-3 rounded-lg transition-colors ${
              isActive
                ? "bg-white/20"
                : "bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-800/50"
            }`}
          >
            <IconComponent className={`w-6 h-6 ${isActive ? "text-white" : "text-[#00852E] dark:text-green-400"}`} />
          </div>
          <h3 className={`font-bold text-lg ${isActive ? "text-white" : "text-slate-800 dark:text-slate-200"}`}>
            {service.title}
          </h3>
        </div>

        <p className={`text-sm leading-relaxed ${isActive ? "text-white/90" : "text-slate-600 dark:text-slate-400"}`}>
          {service.description}
        </p>

        <div
          className={`absolute top-4 right-4 transition-transform duration-300 ${
            isActive ? "rotate-90" : "group-hover:translate-x-1"
          }`}
        >
          <ChevronRight className={`w-5 h-5 ${isActive ? "text-white" : "text-green-600 dark:text-green-400"}`} />
        </div>
      </div>
    </div>
  )
}


// Service Details Panel
const ServiceDetailsPanel = ({ service }) => {
  const IconComponent = getIconComponent(service.icon)

  if (!service) return null

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 border border-green-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-4 bg-[#00852E] rounded-xl">
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{service.title}</h3>
          <p className="text-[#00852E] dark:text-green-400 font-medium">Advanced Security Solution</p>
        </div>
      </div>

      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">{service.description}</p>

      <div>
        <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-[#00852E] dark:text-green-400" />
          Key Features
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-green-100 dark:border-slate-700"
            >
              <div className="w-2 h-2 bg-[#00852E] rounded-full flex-shrink-0"></div>
              <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Main Electronic Services Component
const ElectronicServices = () => {
  const [activeService, setActiveService] = useState(electronicServices[0].id)

  const selectedService = electronicServices.find((service) => service.id === activeService)

  return (
    <>
      <div 
      className="border-t border-[rgba(87,199,133,1)] dark:border-[rgba(0,133,46,1)]/[0.8] dark:bg-slate-950"
      ></div>

      <div className="relative py-16 bg-gradient-to-b from-white to-green-50/30 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-[#00852E] rounded-2xl">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              Electronic <span className="text-[#00852E] dark:text-green-600">Security</span>
            </h2>
            <p className="text-base dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              At AAMZ, we provide advanced electronic security solutions designed to protect personnel, facilities, and
              assets. Leveraging cutting-edge technology, our tailored e-security services ensure unmatched reliability
              and peace of mind across all industries.
            </p>
          </div>

          {/* Services Grid and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Services Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {electronicServices.map((service) => (
                  <ElectronicServiceCard
                    key={service.id}
                    service={service}
                    isActive={activeService === service.id}
                    onClick={setActiveService}
                  />
                ))}
              </div>
            </div>

            {/* Service Details Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <ServiceDetailsPanel service={selectedService} />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
  <div 
    className="rounded-2xl p-8 text-white"
    style={{
      background:
        "linear-gradient(180deg, rgba(0,133,46,1) 0%, rgba(87,199,133,1) 40%, rgba(0,0,0,1) 100%)",
    }}
  >
    <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Facility?</h3>
    <p className="text-green-100 mb-6 max-w-2xl mx-auto">
      Contact our security experts today for a comprehensive consultation and customized electronic security
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

export default ElectronicServices
