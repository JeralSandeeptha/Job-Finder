import type { AlertProps } from "../../types/component.types";

const Alert = (props: AlertProps) => {

  return (
    <div className="z-20 fixed bottom-0 left-0 rounded px-[30px] py-[20px] cursor-pointer" style={{
      backgroundColor: props.isSuccess ? 'green' : 'red'
    }}>
        <h3>{props.title}</h3>
        <h5>{props.description}</h5>
    </div>
  );

}

export default Alert;