import axios from "axios";
import type { CreateNewJobProps } from "../../types/functions.types";
import { baseURL } from "../api/baseURL";

const createNewJob = async (props: CreateNewJobProps) => {
    try {
        await axios.get(`${baseURL}/jobs`)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
    } catch (error) {
        console.log(error);
    }
}

export default createNewJob;