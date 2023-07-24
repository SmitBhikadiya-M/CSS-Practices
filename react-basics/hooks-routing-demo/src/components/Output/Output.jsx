import Frame from "../Frame/Frame";
import "./output.css";

const Output = ({ heading, src, fwidth = '100%', fheight = '100%' }) => {
  return (
    <>
      <div className="output">
        <div className="blockHeader">{heading ?? "Output"}</div>
        <div className="explanation">
          <Frame width={fwidth} height={fheight} src={src} />
        </div>
      </div>
    </>
  );
};

export default Output;
