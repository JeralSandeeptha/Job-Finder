import axios from "axios";
import type { GetAllJobsProps } from "../../types/functions.types";
import { baseURL } from "../api/baseURL";

const getAllJobs = async (props: GetAllJobsProps) => {
    try {
        const response = await axios.get(`${baseURL}/jobs?_page=${props.page}&_limit=${props.limit}`);
        
        console.log(response.data);

        props.setJobs((prev) => [...prev, ...response.data]);
        props.setHasMore(response.data.length === 3);

    } catch (error) {
        console.log(error);
    }
}

export default getAllJobs;