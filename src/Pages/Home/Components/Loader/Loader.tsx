import { FC } from "react";
import logoAnimation from "../../../../../src/assets2/ANIMATION MAKAYIRAM WHITE.mp4"

const Loader: FC = () => {
  return (
    <div className="loader-container fixed inset-0 flex justify-center items-center z-50">
      <video
        src={logoAnimation}
        autoPlay
        loop
        playsInline
        muted
        className="w-full max-w-md"
      />
    </div>
  );
};

export default Loader;
