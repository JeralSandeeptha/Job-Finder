import type { DescriptionProps } from "../../types/component.types";

const Description = (props: DescriptionProps) => {

  return (
    <h5 className="text-[gray] text-xs md:text-sm lg:text-base">{props.description}</h5>
  );

}

export default Description;