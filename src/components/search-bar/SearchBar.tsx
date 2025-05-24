import { MapPin, Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="absolute bg-[white] flex border-2 border-[#E4E4E4] ml-[3rem] mr-[3rem] rounded-full justify-between px-[2rem] pr-[1rem] w-[65%] -mt-[3rem] z-2 items-center">
      <div className="flex gap-8 items-center h-[5rem]">
        <div className="flex items-center gap-3 h-[5rem] pr-[3rem] border-r-2 border-[#E9E9E9]">                               
          <Search className="stroke-[#DDDDDD] w-[30px] h-[30px]" />
          <p className="text-[#DDDDDD] text-[1.3rem] leading-0">search a job or keywork</p>
        </div>

        <div className="flex">
          <div className="flex items-center gap-3 h-[5rem]">
            <MapPin className="stroke-[#DDDDDD] w-[30px] h-[30px]"/>
            <p className="text-[#DDDDDD] text-[1.3rem] leading-0">country or city</p>
          </div>
        </div>
      </div>
      <button className="bg-[linear-gradient(to_right,#009A4B_1%,#35A44C_1%,#57AB4D_16%,#6EAF4E_51%,#9EB84F_76%,#E5C651_100%)] py-[0.8rem] px-[4rem] text-[white] rounded-full h-fit text-[1.3rem] font-medium hover:bg-[linear-gradient(to_left,#009A4B_1%,#35A44C_1%,#57AB4D_16%,#6EAF4E_51%,#9EB84F_76%,#E5C651_100%)] hover:scale-105 transition-all duration-500 ease-in-out">Find Jobs</button>

    </div>
  );
}

export default SearchBar;