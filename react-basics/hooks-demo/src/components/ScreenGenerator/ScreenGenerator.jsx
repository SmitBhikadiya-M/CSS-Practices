import Code from "../Code/Code";
import Output from "../Output/Output";
import "./screenGenerator.css";

const ScreenGenerater = ({ code, hookName, explanationCMP }) => {
  return (
    <>
      <div className="codePreviewWrapper">
        <Code code={code} heading={hookName} />
      </div>
      <div className="codeOutputWrapper">
        <Output explanationCMP={explanationCMP} />
      </div>
    </>
  );
};

export default ScreenGenerater;
