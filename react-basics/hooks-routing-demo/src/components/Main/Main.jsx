import ScreenGenerater from "../ScreenGenerator/ScreenGenerator";
import "./main.css";

const Main = (props) => {
  return (
    <>
      <div className="main">
        <ScreenGenerater {...props} />
      </div>
    </>
  );
};

export default Main;
