import React from "react";
import { Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const About = () => {
  return (
    <section className="section section-bg-light-primary" id="about">
      <div className="container">
        <div className="mx-auto">
          <h1 className="mt-0 font-normal text-44 text-primary">About</h1>
          <p className="mx-auto mb-14">
            AreoLand is a software for real estate agents to Manage their
            properties record in better way.
          </p>
          <p>
            First of all AeroLand is not for selling, buying or dealing
            properties it's only for real estate agent to keep record of
            properties and information associated with them e.g photos/files
            etc.
          </p>
          <p>
            Real Estate Agents need to keep records about their properties or
            houses. Most of the agents have many properties and number of house
            to sell or rent. Each property and house contain number of photos.
            So keeping all these information is headache for estate agents.
            That's why AreoLand is handy way to keep all these things in better
            way and make your life easy.
          </p>
          <p>
            Instead of keep records in hard paper and saving file and photos in
            your local computer use AreoLand to keep your data in cloud in
            secure way and access It from anywhere.
          </p>
          <br />
          Check our training videos for more information how to use AeroLand.
          <br />
          <br />
          <div>
            <Button
              variant="outlined"
              color="primary"
              className="mr-4 border-radius-8 px-6"
            >
              <a href="https://www.youtube.com/watch?v=p6-nawU2IHI&list=PLY5nMiRWs-1pvxAZlUm4Uq2aT6S_YHWpa&index=1">
                Training Videos
              </a>
              <div className="bg-primary ml-2 w-20 h-20 rounded flex justify-center items-center">
                <PlayArrowIcon className="text-white text-13" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
