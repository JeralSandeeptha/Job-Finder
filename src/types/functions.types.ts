import type { Dispatch, SetStateAction } from "react"
import type { Job } from "./interface.types"

export type GetAllJobsProps = {
    page: number,
    limit: number,
    setPage: Dispatch<SetStateAction<number>>,
    setJobs: Dispatch<SetStateAction<Job[]>>,
    setHasMore: Dispatch<SetStateAction<boolean>>,
}

export type CreateNewJobProps = {
    page: number
}