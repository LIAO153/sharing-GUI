import { useState } from "react";
import clsx from "clsx";
import CheckboxSvg from "/src/icons/checkout.svg";
import "./index.css";

function Checkbox({ defaultChecked = false, onClick = () => {} }) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const onClickHandle = () => {
    setIsChecked(!isChecked);
    onClick(!isChecked);
  };

  return (
    <div
      className={clsx("checkbox", isChecked && "checked")}
      onClick={onClickHandle}
    >
      {/*{isChecked && <CheckboxSvg />}*/}
      {isChecked && <img src={CheckboxSvg}/>}
    </div>
  );
}

export default Checkbox;
