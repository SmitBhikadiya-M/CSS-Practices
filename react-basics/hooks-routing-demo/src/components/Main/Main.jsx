import Code from "../Code/Code";
import Output from "../Output/Output";
import "./main.css";

const Main = ({code, hookName, explanationCMP}) => {
  return (
    <>
      <div className="main">
        <div className="codePreviewWrapper">
          <Code code={code} heading={hookName} />
        </div>
        <div className="codeOutputWrapper">
          <Output explanationCMP={explanationCMP} />
        </div>
      </div>
    </>
  );
};

export default Main;
