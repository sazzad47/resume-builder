import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Template1 from "../templates/template1";
import Template2 from "../templates/template2";
import { FiDownload } from "react-icons/fi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Oval } from "react-loader-spinner";

const images = [
  {
    id: 1,
    label: "Template 1",
    template: <Template1 />,
  },
  {
    id: 2,
    label: "Template 2",
    template: <Template2 />,
  },
];

const Home: React.FC = () => {
  const [loader, setLoader] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const downloadPDF = () => {
    const capture = document.querySelector(
      `#template-${images[activeStep].id}`
    ) as HTMLElement;
    setLoader(true);

    if (capture) {
      html2canvas(capture).then((canvas) => {
        const imgData = canvas.toDataURL("img/png");
        const doc = new jsPDF("p", "mm", "a4");
        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = doc.internal.pageSize.getHeight();
        doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
        setLoader(false);
        doc.save(`template-${images[activeStep].id}.pdf`);
      });
    }
  };

  return (
    <div className="text-light py-[5rem] w-full flex flex-col items-center">
      <div className="w-full flex relative">
        <h2 className="w-full font-heading text-center text-2xl text-gray-700 font-bold">
          {images[activeStep].label}
        </h2>
        <div className="absolute right-0">
          <button
            className="btn-download bg-[#209978]"
            type="button"
            onClick={downloadPDF}
          >
            <span className={`button__text ${loader ? "loading" : ""}`}>
              Download
            </span>
            <span className={`button__icon ${loader ? "loading" : ""}`}>
              {loader ? (
                <Oval
                  height={20}
                  width={20}
                  color="#fff"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#e2e8f0"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              ) : (
                <FiDownload className="text-xl font-bold" />
              )}
            </span>
          </button>
        </div>
      </div>
      <SwipeableViews
        axis="x-reverse"
        index={activeStep}
        animateHeight
        className="w-full"
      >
        {images.map((step, index) => (
          <div
            key={step.label}
            className="w-full flex justify-center my-[3rem]"
          >
            {Math.abs(activeStep - index) <= 2 ? (
              <div id={`template-${images[activeStep].id}`}>
                {images[activeStep].template}
              </div>
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <div className="w-full flex justify-center items-center gap-5 mt-[5rem]">
        <button
          onClick={handleBack}
          disabled={activeStep === 0}
          className="btn-secondary"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          className="btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
