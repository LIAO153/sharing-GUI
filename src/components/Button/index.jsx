import clsx from "clsx";
import LoadingSvg from "/src/icons/loading.svg";
import "./index.css";

function Button({ ghost, size, className, children, isLoding, ...args }) {
  return (
    <div
      className={clsx(
        "button",
        size,
        className,
        isLoding && "loading",
        ghost && "button-ghost"
      )}
      {...args}
    >
      {children}
      {/*{isLoding && <LoadingSvg className="loading-icon" />}*/}
      {isLoding && <img src={LoadingSvg} className="loading-icon" />}
    </div>
  );
}

export default Button;
