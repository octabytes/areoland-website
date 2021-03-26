import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Icon } from "@material-ui/core";

const tubeStyle = {
  height: 64,
  width: 14,
  borderRadius: 300,
  marginTop: 12,
  marginRight: 6,
  transform: "rotate(28deg)",
  transformOrigin: "center center",
};

const useStyles = makeStyles((theme) => ({
  tube1: {
    ...tubeStyle,
    background: "rgba(var(--primary),0.1)",
  },
  tube2: {
    ...tubeStyle,
    background: "rgba(var(--primary),0.18)",
  },
  tube3: {
    ...tubeStyle,
    background: "rgba(var(--primary),0.25)",
  },
  description: (props) => ({
    maxWidth: "420px",
    paddingBottom: "12px",
  }),
  themeText: {
    color: theme.palette.text.primary,
  },

  musicImage: {
    width: "362px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  musicImageWrapper: {
    position: "relative",
    display: "inline-block",
    "&::before": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: "72%",
      top: "14%",
      left: 0,
      right: 0,
      margin: "0 -100px 0 -2000px",
      bottom: 0,
      borderRadius: "300px",
      background: theme.palette.primary.main,
      transformOrigin: "right bottom",
      zIndex: -1,
      opacity: 0.1,
    },

    "&::after": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 36,
      width: "80%",
      marginTop: 32,
      left: "10%",
      opacity: 0.75,
      background:
        "radial-gradient(ellipse at center,  rgba(0,0,0,0.65) -25%,rgba(0,0,0,0) 55%);",
    },

    [theme.breakpoints.down("sm")]: {
      display: "block",
      "&::after": {
        display: "none",
      },
      "&::before": {
        display: "none",
      },
    },
  },
}));

const UploadPhotoFeature = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <div className="container">
        <Grid container spacing={3} alignItems="center">
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className={classes.musicImageWrapper}>
              <img src="/assets/images/upload-photo.png" alt="mobile-1" />
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className="flex items-center">
              <h1 className="font-normal text-48 m-0 relative inline-bock text-primary">
                Upload Photos/Files
              </h1>
              <div className="flex ml--4">
                <div className={classes.tube1}></div>
                <div className={classes.tube2}></div>
                <div className={classes.tube3}></div>
              </div>
            </div>

            <p className="max-w-400" style={{ marginTop: "2.5rem" }}>
              Mostly when you add properties you have to upload photos or files
              associate with these properties. For example photos of house
              interior and exterior. Often these photos grow in large amount.
              Keeping these photos in local computer or in phone is not possible
              and there is always risk to loose this information due to Virus or
              in some other harmful act. There is also always a problem to run
              out of storage.
            </p>
            <p className="max-w-400">
              Instead of keeping these photos and files in local use AeroLand
              where you can upload your photos and files there is no storage
              limit and Easy to access from anywhere in any device.
            </p>
            <p className="max-w-400">
              Another advantage to keeping your photos/files on AreoLand is you
              can easily find them which photo is related to which property.{" "}
            </p>
            <p className="max-w-400">
              Photos/files saved with timestamp so you can know when you added
              these photos.
            </p>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default UploadPhotoFeature;
