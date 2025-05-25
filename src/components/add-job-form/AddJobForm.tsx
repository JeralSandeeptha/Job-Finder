import { useState } from "react";
import Description from "../description/Description";
import SubTitle from "../sub-title/SubTitle";
import Title from "../title/Title";
import ValidationText from "../validation-text/ValidationText";
import { Link } from "react-router-dom";
import { MoveLeft } from 'lucide-react';
import createNewJob from "../../services/createNewJob/createNewJob";
import type { newJob } from "../../types/interface.types";


const AddJobForm = () => {

    const [title, setTitle] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSubmit = async () => {
        const today = new Date();
        const posted_date = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
        const newJob : newJob = {
            title,
            company,
            location,
            description,
            job_type : "Full-Time",
            posted_date,
            posted_by : "Tech Labs (Pvt) Ltd"

        };
        createNewJob({newJob})
         
    };
    

  return (
    <div className="px-[20px] md:px-[3rem] mb-[5rem]">
        <Link to={'/'} className="flex items-center gap-4 text-[#009A4B] pb-[3rem]"><MoveLeft size={20} className="stroke-[#009A4B]" />Back to Jobs</Link>
        <div className="max-w-[90%] mx-auto ml-0">
            <div className="border-b-4 border-[#F9F9F9] pb-[1.8rem]">
                <Title title="Post a Job" />
            </div>

            <div className="py-[2.5rem] border-b-4 border-[#F9F9F9] mb-[2rem]">     
                <div className="mb-[20px] gap-[20px] w-full grid md:grid-cols-[1fr_2fr]">
                    <div className="md:py-[20px]">
                        <SubTitle title="Job Title"/>
                        <Description description="Job title must be describe at least one job"/>
                    </div>
                    <div className="lg:py-[2rem] pb-[3rem] border-b-[3px] border-b-[#CDE4C2] md:py-[1rem]">
                        <input onChange={(e) => setTitle(e.target.value)} value={title} className="md:ml-[30px] mb-[5px] w-full rounded-[30px] outline-none text-[gray] text-sm border-[#DADADA] border-[2px] px-[1.5rem] py-[0.7rem] md:w-[300px] rounded-full" placeholder="e.g. Software Engineer"/>
                        <ValidationText text="max.80 characters"/>
                    </div>
                </div>                                  
                
                <div className="mb-[20px] gap-[20px] w-full grid md:grid-cols-[1fr_2fr]">
                    <div className="md:py-[20px]">
                        <SubTitle title="Company"/>
                        <Description description="Company must be describe at least one company"/>
                    </div>
                    <div className="py-[1rem] pb-[3rem] border-b-[3px] border-b-[#CDE4C2]">
                        <input onChange={(e) => setCompany(e.target.value)} value={company} className="md:ml-[30px] mb-[5px] w-full rounded-[30px] outline-none text-[gray] text-sm border-[#DADADA] border-[2px] px-[1.5rem] py-[0.7rem] md:w-[300px] rounded-full" placeholder="e.g. Tech Labs"/>
                        <ValidationText text="max.80 characters"/>
                    </div>
                </div>                                  
                
                <div className="mb-[20px] gap-[20px] w-full grid md:grid-cols-[1fr_2fr]">
                    <div className="md:py-[20px]">
                        <SubTitle title="Location"/>
                        <Description description="Select at least on location"/>
                    </div>
                    <div className="py-[1rem] pb-[3rem] border-b-[3px] border-b-[#CDE4C2]">
                        <select onChange={(e) => setLocation(e.target.value)} value={location} name="lcoation" id="select" className="appearance-none md:ml-[30px] mb-[5px] w-full rounded-[30px] outline-none text-[gray] text-sm border-[#DADADA] border-[2px] px-[1.5rem] py-[0.7rem] py-[10px] md:w-[300px] rounded-full">
                            <option>Select Location</option>
                            <option>Sri Lanka</option>
                            <option>India</option>
                        </select>
                        <ValidationText text="Select a country"/>
                    </div>
                </div>      

                <div className="gap-[20px] w-full grid md:grid-cols-[1fr_2fr]">
                    <div className="md:py-[20px]">
                        <SubTitle title="Job Description"/>
                        <Description description="Give us a brief description about the job"/>
                    </div>
                    <div className="py-[1rem] pb-[3rem]">
                        <input onChange={(e) => setDescription(e.target.value)} value={description} className="md:ml-[30px] mb-[5px] w-full rounded-[30px] outline-none text-[gray] text-sm border-[#DADADA] border-[2px] px-[1.5rem] py-[0.7rem] md:w-[300px] rounded-full" placeholder="e.g. Software Engineer"/>
                        <ValidationText text="max.80 characters"/>
                    </div>
                </div>                            
            </div>
            <div className="action-btn flex justify-end gap-9">
                <Link onClick={handleSubmit} to={''} className="bg-[#00773A] text-[white] text-[1.2rem] py-[0.5rem] px-[2.5rem] rounded-full hover:bg-[linear-gradient(to_left,#009A4B_1%,#35A44C_1%,#57AB4D_16%,#6EAF4E_51%,#9EB84F_76%,#E5C651_100%)] hover:scale-105 transition-all duration-500 ease-in-out">Post this job</Link>
                 <Link to={'/'} className="bg-[#EDF8F2] text-[black] text-[1.2rem] py-[0.5rem] px-[2.5rem] rounded-full hover:bg-[#F8EFD0] hover:scale-105 transition-all duration-500 ease-in-out">Cancel</Link>
            </div>
        </div>
    </div>
  );

}

export default AddJobForm;