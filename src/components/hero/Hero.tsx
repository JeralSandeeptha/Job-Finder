import type { HeroProps } from "../../types/component.types";
import heroBg from '../../assets/images/hero-graffiti.svg';
import swan from '../../assets/logos/swan.svg';

const Hero = (props: HeroProps) => {
  return (
    <div className="relative bg-[#F3F3F3] flex w-full mb-[3rem]">
      {
        props.isHero && (
          <div className="py-[8.5rem] px-[3rem] lg:w-[50%] md:w-[50%] sm:w-[100%]">
            <div>
              <h1 className="font-semibold text-[2rem] leading-[1.5rem]">{props.titleOne}</h1>
              <h1 className="font-bold text-[2.5rem] text-[#009A4B]">{props.titleTwo}</h1>
            </div>
            <h5 className="text-[#676767] text-[1.5rem] pt-[1rem]">{props.description}</h5>
            
          </div>
        )
      }

      {
        props.isAddNewJob && (
          <div className="py-[8.5rem] px-[3rem] lg:w-[50%] sm:w-[100%]">
            <h1 className="font-semibold text-[2.5rem] leading-[1.5rem]">{props.titleOne}</h1>
            <h5 className="text-[#676767] text-[1.5rem] pt-[1rem]">{props.description}</h5>
          </div>
        )                                        
      }                         

      {
        props.isFindJob && (
          <div className="py-[8.5rem] px-[3rem] lg:w-[50%] sm:w-[100%]">
            <h1 className="font-semibold text-[2.5rem] leading-[1.5rem]">{props.titleOne}</h1>
            <h5 className="text-[#676767] text-[1.5rem] pt-[1rem]">{props.description}</h5>
            <button>Find Jobs</button>
          </div>
        )
      }

      {
        props.isHero && (
          <img src={swan} alt="swan" className="absolute right-[1rem] z-1 h-[21rem] lg:opacity-100 md:opacity-100 opacity-0"/>
        )
      }

      <img src={heroBg} alt="hero-bg" className="absolute h-[-webkit-fill-available] right-0 lg:opacity-100 md:opacity-100 opacity-0"/>

    </div>
  );
}

export default Hero;