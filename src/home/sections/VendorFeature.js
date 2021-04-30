import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from "@material-ui/core";

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
  feature: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center !important",
    },
  },

  musicImage: {
    width: "362px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  musicImageWrapper: {
    position: "relative",
    textAlign: "right",

    // marginLeft: "100px",
    "&::before": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: "72%",
      top: "14%",
      left: 0,
      right: 0,
      margin: "0 -2000px 0 -80px",
      borderRadius: "300px",
      background: theme.palette.primary.main,
      zIndex: -1,
      opacity: 0.1,

      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },

    "&::after": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 36,
      width: "80%",
      marginTop: 32,
      left: "calc(10% + 20px)",
      opacity: 0.75,
      background:
        "radial-gradient(ellipse at center,  rgba(0,0,0,0.65) -25%,rgba(0,0,0,0) 55%);",
    },

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const VendorFeature = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery("(max-width: 768px");
  const sectionPadding = isMobile ? { padding: 0 } : { padding: "5rem 0" };

  return (
    <section className="section" style={sectionPadding}>
      <div className="container">
        <Grid container spacing={isMobile ? 3 : 10} alignItems="center">
          <Grid item lg={8} md={6} sm={6} xs={12}>
            <div className="flex items-center">
              <h1 className="font-normal text-48 m-0 relative inline-bock text-primary">
                Vendor System
              </h1>
              <div className="flex ml--4">
                <div className={classes.tube1}></div>
                <div className={classes.tube2}></div>
                <div className={classes.tube3}></div>
              </div>
            </div>

            <p className="max-w-400" style={{ marginTop: "2.5rem" }}>
              Vendor system allow you to create free sub accounts for your
              vendors. There is no limit you can create unlimited free sub
              accounts. Vendor can be a photo taker, property finder or someone
              else. They can create properties can upload photos/file and do
              some additional tasks for you. Each vendor has it's own separate
              dashboard.
            </p>
            <p className="max-w-400">
              All properties and tasks done by vendors will also show you in
              your dashboard. There is also vendor payment record system which
              allow you to manage payments which are related to your vendors.
              For example if you pay a vendor $10 on adding each property you
              can set this record in vendor system and whenever your vendor add
              new property or complete the task you mention it will earn the
              money you specify. In this way you and your vendor can easily
              track what he earn and what you pay.
            </p>
            <p className="max-w-400">
              AreoLand also provide mobile apps on both android and apple store
              for you and your vendors. Which help you uploading photos/files
              about specific property or adding new properties.
            </p>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} className={classes.feature}>
            <div className={classes.musicImageWrapper}>
              <img
                className={classes.musicImage}
                src="/assets/images/vendor.png"
                alt="mobile-1"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default VendorFeature;
