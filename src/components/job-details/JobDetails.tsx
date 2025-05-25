import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getJob from "../../services/getJob/getJob";
import type { Job } from "../../types/interface.types";
import { Calendar, Circle, MapPin, MoveLeft } from "lucide-react";
import jobImage from '../../assets/logos/client logo.svg';

const JobDetails = () => {

    const { jobId } = useParams();
    const [job, setJob] = useState<Job>({
        description: '',
        job_type: '',
        location: '',
        posted_by: '',
        posted_date: '',
        title: '',
        id: ''
    });

    const getDetails = () => {
        getJob({
            setJob: setJob,
            jobId: jobId
        });
    }

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <div>

            <Link to={'/'} className="flex items-center gap-4 text-[#009A4B] pb-[3rem]"><MoveLeft size={20} className="stroke-[#009A4B]" />Back to Jobs</Link>

            <div>
                <div>
                    <img src={jobImage} alt="job-image" />
                </div>
                <div>
                    <h1>{job.title}</h1>
                    <div>
                        <div>
                            <Circle strokeWidth={3} />
                            <h5>{job.job_type}</h5>
                        </div>
                        <div>
                            <MapPin />
                            <h5>{job.location}</h5>
                        </div>
                        <div>
                            <Calendar />
                            <h5>Posted: {job.posted_date}</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="text-[black] bg-[#F8EFD0] rounded-[49px]">Apply Now</button>
                </div>
            </div>

            <div>
                <div>
                    <h1>Job Description</h1>
                    <h5>{job.description}</h5>
                </div>
                <div>
                    <h1>About this role</h1>
                    <div>
                        <div>
                            <h5>Job Posted</h5>
                            <h5>{job.posted_date}</h5>
                        </div>
                        <div>
                            <h5>Posted By</h5>
                            <h5>{job.posted_by}</h5>
                        </div>
                        <div>
                            <h5>Job Type</h5>
                            <h5>{job.job_type}</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default JobDetails;