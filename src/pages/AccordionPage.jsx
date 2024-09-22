// import React from "react";
import Accordion from "../components/Accordion";
const AccordionPage = () => {
  const items = [
    {
      id: "l2k32",
      label: "Can I Use React On A Project?",
      content:
        "You can use whatever you want like html,css,scss and react in your project or javascript.",
    },
    {
      id: "3223k",
      label: "Can I Use Javascript On A Project?",
      content:
        "You can use whatever you want like html,css,scss and react in your project or javascript.",
    },
    {
      id: "k2212",
      label: "Can I Use Css On A Project?",
      content:
        "You can use whatever you want like html,css,scss and react in your project or javascript.",
    },
  ];
  return <Accordion items={items} />;
};

export default AccordionPage;
