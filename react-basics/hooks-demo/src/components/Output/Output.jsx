import "./output.css";

const Output = ({ explanationCMP, heading }) => {
  return (
    <>
      <div className="output">
        <div className="blockHeader">{heading ?? "Output"}</div>
        <div className="explanation">{explanationCMP}</div>
      </div>
    </>
  );
};

export default Output;
