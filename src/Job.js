import React, { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Job = ({ data }) => {
  const [value, setValue] = useState(0);
  const { id, dates, duties, order, title, company } = data[value];

  return (
    <div key={id} className="job">
      <div className="job__nav">
        {data.map((el, i) => {
          return (
            <button
              key={i}
              className={`btn btn__job ${
                i === value ? "btn__job--active" : ""
              }`}
              onClick={() => setValue(i)}
            >
              {el.company}
            </button>
          );
        })}
      </div>

      <div className="job-container">
        <h2 className="job__title">{title}</h2>
        <h3 className="job__name">{company}</h3>
        <p className="job__time">{dates}</p>
      </div>

      <div className="job__detail">
        {duties.map((el, i) => (
          <div key={i} className="job__des">
            <span className="job__icon">
              <AiOutlineDoubleRight></AiOutlineDoubleRight>
            </span>
            <p className="job__text">{el}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
