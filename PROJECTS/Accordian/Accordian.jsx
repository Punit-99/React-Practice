import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false); // Corrected variable naming
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentID) => {
    setSelected(getCurrentID === selected ? null : getCurrentID);
  };

  const handleMultiSelection = (getCurrentID) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentID = copyMultiple.indexOf(getCurrentID);
    
    if (findIndexOfCurrentID === -1) {
      copyMultiple.push(getCurrentID);
    } else {
      copyMultiple.splice(findIndexOfCurrentID, 1);
    }
    setMultiple(copyMultiple);
    console.log(multiple);
  };

  return (
    <div className="acc-wrapper">
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection); // Corrected variable naming
          console.log("enabled");
        }}
      >
        Enable Multiple Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.includes(dataItem.id) && ( // Changed condition to multiple.includes
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
