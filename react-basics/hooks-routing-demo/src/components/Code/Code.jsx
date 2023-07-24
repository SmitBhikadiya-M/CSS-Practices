import "./code.css";

import { CopyBlock, dracula } from "react-code-blocks";
const CodeCMP = ({
  heading,
  language,
  code,
  showLineNumbers,
  theme,
  wrapLines,
}) => {
  return (
    <>
      <div className="codeBlock">
        {heading && <div className="blockHeader">{heading}</div>}
        <div className="codeWrapper">
          <CopyBlock
            language={language ?? "jsx"}
            text={code ?? "<></>"}
            showLineNumbers={showLineNumbers ?? true}
            theme={theme ?? dracula}
            wrapLines={wrapLines ?? true}
            codeBlock
          />
        </div>
      </div>
    </>
  );
};

export default CodeCMP;
