import type { Dispatch, JSX, SetStateAction } from "react"
import type { Job } from "./interface.types"
import type React from "react"

export type HeroProps = {
    isHero?: boolean,
    isAddNewJob?: boolean,
    isFindJob?: boolean,
    titleOne: string,
    titleTwo?: string,
    description: string,
}

export type SubTitleProps = {
    title: string
}

export type TitleProps = {
    title: string
}

export type DescriptionProps = {
    description: string
}

export type ValidationTextProps = {
    text: string
}

export type AlertProps = {
    isSuccess?: boolean,
    isError?: boolean,
    title: string,
    description: string,
}

export type JobCardProps = {
    job: Job,
    isGrid: boolean,
  
}

export type SearchBarProps = {
    title: string,
    company: string,
    setTitle: Dispatch<SetStateAction<string>>,
    setCompany: Dispatch<SetStateAction<string>>,
    handleSearch: ()=> void
}

export type PrivateRouteProps = {
    page: React.ReactNode
}

export type PublicRouteProps = {
    page: () => JSX.Element
}