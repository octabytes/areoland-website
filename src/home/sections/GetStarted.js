import React from "react";
import { Button, useMediaQuery } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const GetStarted = () => {
  const isMobile = useMediaQuery("(max-width: 768px");
  const marginTop = isMobile ? "mt-4" : "";

  return (
    <section className="section section-bg-light-primary" id="get-started">
      <div className="container">
        <div className="text-center mx-auto">
          <h1 className="mt-0 font-normal text-44 text-primary">Get Started</h1>
          <p className="max-w-400 mx-auto mb-14">
            Start using our platform. Not sure about Pro account, try Trail
            first. We are providing 14 days free trail without any credit card
            requirement
          </p>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              className="mr-4 border-radius-8 px-6"
            >
              <a href="https://www.youtube.com/watch?v=p6-nawU2IHI&list=PLY5nMiRWs-1pvxAZlUm4Uq2aT6S_YHWpa&index=1">
                WATCH VIDEO
              </a>
              <div className="bg-primary ml-2 w-20 h-20 rounded flex justify-center items-center">
                <PlayArrowIcon className="text-white text-13" />
              </div>
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={`border-radius-8 px-6 ${marginTop}`}
            >
              <a href="https://dashboard.areoland.com/sign-up">GET STARTED</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
