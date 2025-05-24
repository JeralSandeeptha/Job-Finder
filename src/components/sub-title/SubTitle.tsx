import type { SubTitleProps } from "../../types/component.types";

const SubTitle = (props: SubTitleProps) => {

  return (
    <h1 className="text-[black] text-xl font-bold">{props.title}</h1>
  );

}

export default SubTitle;