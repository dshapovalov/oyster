import React, { useState } from "react";
import AccordionBox from "./AccordionBox/AccordionBox";
import styles from "./Accordion.module.css";

const APIResponse = [
  {
    id: 1,
    name: "Jason Bourne",
    provider: "United Health",
    priceEstimates: [
      {
        plan: "standard",
        priceEstimate: 91,
      },
      {
        plan: "premium",
        priceEstimate: 121,
      },
    ],
  },
  {
    id: 2,
    name: "James Bond",
    provider: "United Health",
    priceEstimates: [
      {
        plan: "standard",
        priceEstimate: 90,
      },
      {
        plan: "premium",
        priceEstimate: 120,
      },
    ],
  },
  {
    id: 3,
    name: "Ethan Hunt",
    provider: "Distributed Health",
    priceEstimates: [
      {
        plan: "basic",
        priceEstimate: 50,
      },
      {
        plan: "standard",
        priceEstimate: 99,
      },
    ],
  },
];

export default function Accordion() {
  const [accordionData, setAccordionData] = useState(
    APIResponse.reduce((prev, current) => {
      if (prev[current.provider]) {
        prev[current.provider].push({ name: current.name });
      } else {
        prev[current.provider] = [{ name: current.name }];
      }
      return prev;
    }, {})
  );

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.header}>Health benefits</h1>

        {Object.keys(accordionData).map((provider) => {
          return (
            <AccordionBox
              provider={accordionData[provider]}
              title={provider}
              key={provider}
            />
          );
        })}
      </div>
    </div>
  );
}
