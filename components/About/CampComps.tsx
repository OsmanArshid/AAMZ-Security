"use client"

import type React from "react"
import { Tent, Text, List } from "lucide-react"

const CampButton = (props: any) => {
  //Props
  const id = props.id
  const title = props.title
  const active = props.active
  const onClick = props.onClick

  //Tailwind CSS
  const buttonTail = `border rounded-md col-span-3 sm:col-span-2 md:col-span-3 flex px-6 py-3 transition-colors select-none`
  const activeTail = `bg-green-200/[0.8] dark:bg-slate-800/[0.9] text-green-950 dark:text-slate-100 border-green-300 dark:border-slate-700 `

  const iconTail = `p-0.5 mr-3`
  const inactiveIconTail = `text-green-900/[0.5] dark:text-green-300/[0.5]`
  const activeIconTail = `text-[#00852E] dark:text-green-400`

  const inactiveTitleTail = `font-medium text-green-900/[0.8] dark:text-slate-200/[0.8]`
  const activeTitleTail = `font-bold text-[#00852E] dark:text-green-400`

  //Render
  return (
    <button
      key={id}
      className={`${buttonTail} ${active ? activeTail : ""}`}
      onClick={() => {
        onClick(id)
      }}
    >
      <Tent className={`${iconTail} ${active ? activeIconTail : inactiveIconTail}`} />
      <h4 className={`${active ? activeTitleTail : inactiveTitleTail}`}>{title}</h4>
    </button>
  )
}

type CampCardProps = {
  activities: string[]
  shortTitle: string
  desc: string
  active: boolean
}

const CampCard: React.FC<CampCardProps & React.HTMLProps<HTMLDivElement>> = ({ activities, ...props }) => {
  //Props
  const id = props.id
  const title = props.title
  const shortTitle = props.shortTitle
  const desc = props.desc
  const active = props.active

  // Gradient backgrounds similar to Service Tier cards
  const gradients = [
    "from-green-600 via-green-700 to-green-900",
    "from-slate-800 via-green-800 to-green-900",
    "from-green-700 via-slate-700 to-slate-900",
    "from-slate-700 via-green-700 to-green-800",
  ]

  // Use a gradient based on the card id or index
  const gradientIndex = typeof id === "string" ? id.length % gradients.length : 0
  const selectedGradient = gradients[gradientIndex]

  //Tailwind CSS - Updated to match Service Tier cards
  const cardTail = `relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] bg-gradient-to-br ${selectedGradient} p-8 text-white opacity-100`
  const inactiveCardTail = `hidden opacity-0 transition-opacity duration-500`

  const titleTail = `text-xl lg:text-2xl font-bold text-white leading-tight`
  const shortTitleTail = `inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-bold bg-white/20 backdrop-blur-sm border border-white/30 text-white`

  const iconTail = `w-5 h-5 mr-2 text-green-300 flex-shrink-0`
  const subHeadingTail = `text-base font-bold text-white flex items-center mb-3`

  const descTail = `text-green-100 leading-relaxed text-base mb-6 pl-2`
  const activityTail = `text-green-100 text-sm leading-relaxed flex items-start gap-2 mb-2`

  function subHeading(Icon: any, title: string) {
    return (
      <div className={subHeadingTail}>
        <Icon className={iconTail} />
        <h4>{title}</h4>
      </div>
    )
  }

  //Render
  return (
    <div key={id} className={active ? cardTail : inactiveCardTail}>
      {/* Header Section */}
      <div className="flex flex-col min-[460px]:flex-row items-start min-[460px]:items-center gap-3 mb-6 pb-4 border-b border-white/20">
        <span className={shortTitleTail}>{shortTitle}</span>
        <h3 className={titleTail}>{title}</h3>
      </div>

      {/* Description Section */}
      <div className="mb-6">
        {subHeading(Text, "Description")}
        <p className={descTail}>{desc}</p>
      </div>

      {/* Activities Section */}
      <div>
        {subHeading(List, "Activities")}
        <div className="space-y-2">
          {activities.map((activity: string, index) => (
            <div key={index} className={activityTail}>
              <div className="w-2 h-2 bg-green-300 rounded-full mt-2 flex-shrink-0"></div>
              <span>{activity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements - Similar to Service Tier cards */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 translate-x-12"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>
    </div>
  )
}

export { CampButton, CampCard }
