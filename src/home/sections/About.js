import React from "react";
import { Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const About = () => {
  return (
    <section className="section section-bg-light-primary" id="get-started">
      <div className="container">
        <div className="mx-auto">
          <h1 className="mt-0 font-normal text-44 text-primary">About</h1>
          <p className="mx-auto mb-14">
            AreoLand is a software for real estate agents to Manage their
            properties in better way.
          </p>
          <p>
            First of all AeroLand is not for selling, buying or for dealing
            properties it's only for real estate agent to keep record of
            properties.
          </p>
          <p>
            Instead of keep records in hard paper and saving file and photos in
            your local computer use AreoLand to keep your data in cloud in
            secure way and access It from anywhere.
          </p>
          <p>
            Suppose you have 50 properties or houses to sell or rent it's hard
            to keep record in Paper about each property owner, location, rent
            price etc. And also If you want to save photos of interior and
            exterior of each house. There are lot of other things it's way
            harder to manage them manually. That's why AreoLand is a handy way
            to Manage all of things in easy and effective way. Keep your records
            in AreoLand and access them from anywhere.
          </p>
          <b>Main Features</b>
          <br />
          <ul>
            <li>
              Easily add properties using Map. Pick location or search address.
            </li>
            <li>
              You can also create Property by photo which contains the GPS
              location
            </li>
            <li>Upload house photos and files there is no storage limit</li>
            <li>
              set reminder which remind you via notification or email about your
              task
            </li>
            <li>
              AreoLand has a vendor feature. Which allow you to create sub
              accounts for FREE for your vendors. Vendor can be photo taker or
              property finder or someone else.
            </li>
          </ul>
          <br />
          Check our training videos for more information how to use AeroLand.
          <br />
          <div>
            <Button
              variant="outlined"
              color="primary"
              className="mr-4 border-radius-8 px-6"
            >
              Training Videos
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
