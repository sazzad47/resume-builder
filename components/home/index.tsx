import React from "react";
import SwipeableViews from "react-swipeable-views";
import Template1 from "../templates/template1";

const images = [
  {
    label: "Template 1",
    template: <Template1 />,
  },
  {
    label: "Template 2",
    template: <Template1 />,
  },
];

const Home: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="text-light py-[5rem] w-full flex flex-col items-center">
      <h2 className="w-full font-heading text-center text-2xl text-gray-700 font-bold">
        {images[activeStep].label}
      </h2>
      <SwipeableViews axis="x-reverse" index={activeStep} animateHeight className="w-full">
        {images.map((step, index) => (
          <div
            key={step.label}
            className="w-full flex justify-center my-[3rem]"
          >
            {Math.abs(activeStep - index) <= 2 ? <>{step.template}</> : null}
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
