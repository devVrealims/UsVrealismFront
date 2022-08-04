import React from "react";

export const Pdfviewer = ({ displayiframetwo, iframelinktwo }) => {
  return (
    <div style={{ display: { displayiframetwo } }}>
      <object
        /* data={require("../pdf/elevation.pdf")} */
        /* data="https://drive.google.com/file/d/1bHUz5KKfz0m_mstlqQTZQU9ALEiPKmL4/view" */
        /*     data="http://africau.edu/images/default/sample.pdf" */
        /* data="https://drive.google.com/embeddedfolderview?id=1_2ajx9Ozf2dhod07_K8MY-WjXaP-4R-6#grid" */
        data="https://drive.google.com/embeddedfolderview?id=1WsCB4cNEoAS5ghwSIK9ji0adWqZ7hR83#grid"
        type="application/pdf"
        width="100%"
        height="300px"
      >
      </object>
    </div>
  );
};
