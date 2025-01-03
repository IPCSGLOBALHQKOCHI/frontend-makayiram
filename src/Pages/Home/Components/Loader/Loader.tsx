import { FC } from "react";
import "./Loader.css"

// Define the Loader component as a Functional Component (FC)
const Loader: FC = () => {
  return (
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot" />
        <div className="newtons-cradle__dot" />
        <div className="newtons-cradle__dot" />
        <div className="newtons-cradle__dot" />
      </div>
  );
};


export default Loader;
