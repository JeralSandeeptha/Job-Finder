import type { HeroProps } from "../../types/component.types";
import heroBg from '../../assets/images/hero-img.svg';
import swan from '../../assets/logos/swan.svg';

const Hero = (props: HeroProps) => {
  return (
    <div>

      {
        props.isHero && (
          <div>
            <div>
              <h1>{props.titleOne}</h1>
              <h1>{props.titleTwo}</h1>
            </div>
            <h5>{props.description}</h5>
            <button>Find Jobs</button>
          </div>
        )
      }

      {
        props.isAddNewJob && (
          <div>
            <h1>{props.titleOne}</h1>
            <h5>{props.description}</h5>
          </div>
        )                                        
      }                         

      {
        props.isFindJob && (
          <div>
            <h1>{props.titleOne}</h1>
            <h5>{props.description}</h5>
          </div>
        )
      }

      {
        props.isHero && (
          <div>
            {
              props.isHero && (
                <img src={swan} alt="swan" className=""/>
              )
            }
            <img src={heroBg} alt="hero-bg" className=""/>
          </div>
        )
      }

    </div>
  );
}

export default Hero;