import axios from "axios";
import type { CreateNewJobProps } from "../../types/functions.types";
import { baseURL } from "../api/baseURL";

const createNewJob = async (props: CreateNewJobProps) => {
    try {
        const res = await axios.post(`${baseURL}/jobs`, props.newJob);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
};

export default createNewJob;
