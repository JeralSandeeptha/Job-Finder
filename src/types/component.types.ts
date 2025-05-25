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