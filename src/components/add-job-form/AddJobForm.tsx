import { useState } from "react";
import Description from "../description/Description";
import SubTitle from "../sub-title/SubTitle";
import ValidationText from "../validation-text/ValidationText";

const AddJobForm = () => {

    const [title, setTitle] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [description, setDescription] = useState<string>('');

  return (
    <div className="px-[20px] md:px-[30px]">
        
        <div className="max-w-[1200px] mx-auto">

            <div className="">
                <SubTitle title="Post a Job"/>
            </div>

            <hr className="my-[20px]"/>

            <div className="">
                
                <div className="mb-[20px] gap-[20px] w-full grid md:grid-cols-[1fr_2fr]">
                    <div className="md:py-[20px]">
                        <SubTitle title="Job Title"/>
                        <Description description="Job title must be describe at least one job"/>
                    </div>
                    <div className="md:py-[20px] pb-[20px] border-b-[3px] border-b-[#6EAF4E]/50">
                        <input onChange={(e) => setTitle(e.target.value)} value={title} className="md:ml-[30px] mb-[5px] w-full rounded-[30px] outline-none text-[gray] text-sm border-[#AEAEAE] border-[2px] px-[20px] py-[10px] md:w-[300px]" placeholder="e.g. Software Engineer"/>
                        <ValidationText text="max.80 characters"/>
                    </div>
                </div>                                  
                
                <div className="mb-[20px] gap-[20px] w-full grid md:grid-cols-[1fr_2fr]">
                    <div className="md:py-[20px]">
                        <SubTitle title="Company"/>
                        <Description description="Company must be describe at least one company"/>
                    </div>
                    <div className="md:py-[20px] pb-[20px] border-b-[3px] border-b-[#6EAF4E]/50">
                        <input onChange={(e) => setCompany(e.target.value)} value={company} className="md:ml-[30px] mb-[5px] w-full rounded-[30px] outline-none text-[gray] text-sm border-[#AEAEAE] border-[2px] px-[20px] py-[10px] md:w-[300px]" placeholder="e.g. Software Engineer"/>
                        <ValidationText text="max.80 characters"/>
                    </div>
                </div>                                  
                
                <div className="mb-[20px] gap-[20px] w-full grid md:grid-cols-[1fr_2fr]">
                    <div className="md:py-[20px]">
                        <SubTitle title="Location"/>
                        <Description description="Select at least on location"/>
                    </div>
                    <div className="md:py-[20px] pb-[20px] border-b-[3px] border-b-[#6EAF4E]/50">
                        <select onChange={(e) => setLocation(e.target.value)} value={location} name="lcoation" id="select" className="md:ml-[30px] mb-[5px] w-full rounded-[30px] outline-none text-[gray] text-sm border-[#AEAEAE] border-[2px] px-[20px] py-[10px] md:w-[300px]">
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
                    <div className="md:py-[20px] pb-[20px] border-b-[3px] border-b-[#6EAF4E]/50">
                        <input onChange={(e) => setDescription(e.target.value)} value={description} className="md:ml-[30px] mb-[5px] w-full rounded-[30px] outline-none text-[gray] text-sm border-[#AEAEAE] border-[2px] px-[20px] py-[10px] md:w-[300px]" placeholder="e.g. Software Engineer"/>
                        <ValidationText text="max.80 characters"/>
                    </div>
                </div>                            

            </div>

        </div>

    </div>
  );

}

export default AddJobForm;