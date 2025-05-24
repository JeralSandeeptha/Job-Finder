import { MapPin, Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="bg-[white] flex border-2 border-[#E4E4E4] ml-[3rem] mr-[3rem] rounded-full px-[2rem] py-[1.8rem] justify-between">
      <div className="flex gap-8">
        <div className="flex items-center gap-3">                               
          <Search className="stroke-[#DDDDDD] w-[30px] h-[30px]" />
          <p className="text-[#DDDDDD] text-[1.3rem] leading-0">search a job or keywork</p>
        </div>

        <div className="flex">
          <div className="flex items-center gap-3">
            <MapPin className="stroke-[#DDDDDD] w-[30px] h-[30px]"/>
            <p className="text-[#DDDDDD] text-[1.3rem] leading-0">country or city</p>
          </div>
        </div>
      </div>
      <button>Find Jobs</button>

    </div>
  );
}

export default SearchBar;