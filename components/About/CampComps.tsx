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
  // const duration = props.duration;
  const desc = props.desc
  const active = props.active

  //Tailwind CSS
  const cardTail = `border-2 rounded-md p-4 bg-green-100 dark:bg-slate-900 dark:border-slate-800 opacity-100 transition-opacity duration-500`
  const inactiveCardTail = `hidden opacity-0 transition-opacity duration-500`

  const titleTail = `text-xl lg:text-2xl font-bold text-green-900 dark:text-green-200`
  const shortTitleTail = `w-fit px-2 py-0.5 rounded-lg text-base font-bold border
      border-green-400 dark:border-green-600 bg-green-200 dark:bg-green-900 text-green-950 dark:text-green-200`

  const iconTail = `p-1 mr-2 pl-0 text-[#00852E] dark:text-green-300/[0.7]`
  const subHeadingTail = `text-base font-bold text-[#00852E] dark:text-green-300/[0.7]`

  const descTail = `pl-2 text-sm sm:text-base dark:text-text-white mb-4`
  const activityTail = `pl-2 text-sm sm:text-base dark:text-text-white`

  function subHeading(Icon: any, title: string) {
    return (
      <div className="flex items-center mb-2 ">
        <Icon className={iconTail} />
        <h4 className={subHeadingTail}>{title}</h4>
      </div>
    )
  }

  //Render
  return (
    <div key={id} className={active ? cardTail : inactiveCardTail}>
      <div className="flex flex-col min-[460px]:flex-row items:start min-[460px]:items-center gap-2 mb-2 pl-2 pb-3 border-b">
        <p className={shortTitleTail}>{shortTitle}</p>
        <h3 className={titleTail}>{title}</h3>
      </div>
      {subHeading(Text, "Description")}
      <p className={descTail}>{desc}</p>
      <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-end justify-between">
        <div>
          {subHeading(List, "Activities")}
          <ul className="list-disc list-inside ">
            {activities.map((activity: string, index) => (
              <li key={index} className={activityTail}>
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export { CampButton, CampCard }
