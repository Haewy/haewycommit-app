import React, { useState } from "react";
import "./TitleLeft.css";

import TabButton from "../TabButton";

const Cat_Data = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="data-container">
        <li className="data-year">2022 / Canada</li>
        <li className="data-title">Keywords Studios Montreal, LQA tester</li>
        <li>
          Reported linguistic and functional errors in bug-tracking database
        </li>
        <br />
        <li className="data-year">2010-2012 / South Korea</li>
        <li className="data-title">
          Korea Automotive Technology Institute, Accounting Assistant
        </li>
        <li>
          Examined and verified all expense and receipts for audit reports and
          external auditors
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="data-container">
        <li className="data-year">2022 / Online</li>
        <li className="data-title">Web Develompment</li>
        <li>Bootcamp</li>
        <br />
        <li className="data-year">2019-2022 / Canada</li>
        <li className="data-title">Computer Science Technology</li>
        <li>Lasalle College</li>
        <br />
        <li className="data-year">2005-2009 / South Korea</li>
        <li className="data-title">Culture Management</li>
        <li>Hoseo University</li>
      </ul>
    ),
  },
];

const TitleLeft = (props) => {
  const [tab, setTab] = useState("experience");
  // const [startTransition, isPending] = useTransition();
  const selectTab = (nextTab) => {
    setTab(nextTab);
  };

  return (
    <div className="titleL-container">
      <div className="titleL-left-content">
        <div className="heading-container">
          <TabButton
            isActive={tab === "experience"}
            onClick={() => selectTab("experience")}
          >
            Experience
          </TabButton>

          <TabButton
            isActive={tab === "education"}
            onClick={() => selectTab("education")}
          >
            Education
          </TabButton>
        </div>
        <p className="titleL-desc-s">{props.desc_01}</p>
        <p className="titleL-desc-l">{props.desc_02}</p>
      </div>
      <div className="detail-container">
        {Cat_Data.find((data) => data.id === tab).content}
      </div>
    </div>
  );
};

export default TitleLeft;
