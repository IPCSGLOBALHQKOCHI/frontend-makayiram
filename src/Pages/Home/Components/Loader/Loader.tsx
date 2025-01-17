import { FC } from "react";
import logoAnimation from "../../../../../src/assets2/ANIMATION MAKAYIRAM WHITE.mp4"

const Loader: FC = () => {
  return (
    <div className="loader-container flex justify-center items-center h-screen">
      <video
        src={logoAnimation}
        autoPlay
        muted
        className="w-full max-w-md"
      />
    </div>
  );
};

export default Loader;
