import { Shield, Building, Home, User, Calendar, Lightbulb, Target } from "lucide-react"
import services from "@/resources/services"

// Get icon component
const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    Building,
    Home,
    User,
    Calendar,
    Lightbulb,
    Target,
    Shield,
  }
  return iconMap[iconName] || Shield
}

// SectionHeading component
const SectionHeading = ({
  iconName,
  title,
  className = "",
}: {
  iconName: string
  title: string
  className?: string
}) => {
  const IconComponent = getIconComponent(iconName)
  return (
    <div className={`flex items-center justify-center mb-8 ${className}`}>
      <IconComponent className="w-8 h-8 mr-3 text-[#00852E] dark:text-green-400" />
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">{title}</h2>
    </div>
  )
}

// SubHeading component
const SubHeading = ({ iconName, title }: { iconName: string; title: string }) => {
  const IconComponent = getIconComponent(iconName)

  return (
    <div className="flex items-center mb-3">
      <IconComponent className="w-4 h-4 mr-2 text-[#00852E] dark:text-green-300/70" />
      <h4 className="text-sm font-bold text-[#00852E] dark:text-green-300/70">{title}</h4>
    </div>
  )
}

// Service Card Component with flip effect using inline styles
const ServiceCard = ({ service }: { service: any }) => {
  const IconComponent = getIconComponent(service.icon)

  const cardContainerStyle = {
    perspective: "1000px",
    height: "16rem", // 64 in tailwind
  }

  const cardInnerStyle = {
    position: "relative" as const,
    width: "100%",
    height: "100%",
    transition: "transform 0.7s",
    transformStyle: "preserve-3d" as const,
  }

  const cardHoverStyle = {
    transform: "rotateY(180deg)",
  }

  const cardFaceStyle = {
    position: "absolute" as const,
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden" as const,
    borderRadius: "0.5rem",
    borderWidth: "2px",
  }

  const cardBackStyle = {
    ...cardFaceStyle,
    transform: "rotateY(180deg)",
  }

  return (
    <div style={cardContainerStyle} className="group">
      <div style={cardInnerStyle} className="group-hover:[transform:rotateY(180deg)]">
        {/* Front of card */}
        <div
          style={cardFaceStyle}
          className="border-green-200 dark:border-slate-700 bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-900 p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="mb-4 p-4 rounded-full bg-green-200 dark:bg-slate-700">
            <IconComponent className="w-12 h-12 text-[#00852E] dark:text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-green-900 dark:text-green-200 mb-2">{service.shortTitle}</h3>
          <p className="text-sm text-green-700 dark:text-green-300/80 opacity-75">Hover to learn more</p>
        </div>

        {/* Back of card */}
        <div
          style={cardBackStyle}
          className="border-green-300 dark:border-slate-600 bg-gradient-to-br from-green-100 to-green-200 dark:from-slate-900 dark:to-slate-800 p-4 shadow-lg"
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-green-300 dark:border-slate-600">
              <IconComponent className="w-5 h-5 text-[#00852E] dark:text-green-400" />
              <span className="text-xs font-bold px-2 py-1 rounded bg-green-300 dark:bg-green-900 text-green-900 dark:text-green-200">
                {service.shortTitle}
              </span>
            </div>

            {/* Service Description */}
            <div className="mb-3">
              <SubHeading iconName="Target" title="Service Description" />
              <p className="text-xs text-green-800 dark:text-slate-300 leading-relaxed">{service.desc}</p>
            </div>

            {/* Key Features */}
            <div className="flex-1">
              <SubHeading iconName="Shield" title="Key Features" />
              <ul className="space-y-1">
                {service.features.slice(0, 4).map((feature: string, index: number) => (
                  <li key={index} className="text-xs text-green-800 dark:text-slate-300 flex items-start">
                    <span className="w-1 h-1 bg-[#00852E] dark:bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
                {service.features.length > 4 && (
                  <li className="text-xs text-green-700 dark:text-green-400 italic">
                    +{service.features.length - 4} more features
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Services Component
const ServicesSection = () => {
  return (
    <div className="relative h-max py-12 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading iconName="Shield" title="Security Services" className="mb-8" />

        {/* Description Section - Centered */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Comprehensive <span className="font-extrabold text-[#00852E] dark:text-green-600">Security</span> Solutions
          </h3>

          <p className="text-base dark:text-slate-400 leading-relaxed mb-8">
            At AAMZ Security, we provide a full spectrum of security services tailored to meet the diverse needs of our
            clients. From industrial protection to personal security, our expert team delivers reliable and professional
            solutions across Pakistan.
          </p>
        </div>

        {/* Service Cards Grid - Full Width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
