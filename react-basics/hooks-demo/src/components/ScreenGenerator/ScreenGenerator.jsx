import CodeCMP from "../CodeCMP/CodeCMP";
import OutputCMP from "../OutputCMP/OutputCMP";

const ScreenGenerater = ({ code, hookName, explanationCMP }) => {
  return (
    <>
      <div className="codePreviewWrapper">
        <CodeCMP code={code} heading={hookName} />
      </div>
      <div className="codeOutputWrapper">
        <OutputCMP explanationCMP={explanationCMP} />
      </div>
    </>
  );
};

export default ScreenGenerater;
