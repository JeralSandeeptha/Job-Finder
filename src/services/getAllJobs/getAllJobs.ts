import axios from "axios";
import type { GetAllJobsProps } from "../../types/functions.types";
import { baseURL } from "../api/baseURL";
import type { Job } from "../../types/interface.types";

const getAllJobs = async (props: GetAllJobsProps) => {
    props.setLoading(true);
    try {
        const response = await axios.get(`${baseURL}/jobs?_page=${props.page}&_limit=${props.limit}`);
        const newJobs = response.data;
        console.log(response.data);

        props.setJobs((prevJobs) => {
            const existingIds = new Set(prevJobs.map((job) => job.id));
            const filteredJobs = newJobs.filter((job:Job) => !existingIds.has(job.id));
            return [...prevJobs, ...filteredJobs];
        });
        props.setHasMore(newJobs.length === props.limit);
        props.setLoading(false);
    } catch (error) {
        console.log(error);
        props.setLoading(false);
    }
}

export default getAllJobs;