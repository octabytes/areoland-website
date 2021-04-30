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
      display: "none",
    },
  },
}));

const ReminderFeature = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery("(max-width: 768px");
  const sectionPadding = isMobile ? { padding: 0 } : { padding: "5rem 0" };

  return (
    <section className="section" style={sectionPadding}>
      <div className="container">
        <Grid container spacing={3} alignItems="center">
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className={classes.musicImageWrapper}>
              <img src="/assets/images/reminder.png" alt="mobile-1" />
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className="flex items-center">
              <h1 className="font-normal text-48 m-0 relative inline-bock text-primary">
                Reminder System
              </h1>
              <div className="flex ml--4">
                <div className={classes.tube1}></div>
                <div className={classes.tube2}></div>
                <div className={classes.tube3}></div>
              </div>
            </div>

            <p className="my-10 max-w-400">
              Reminder system allowing you to reminder about your important
              tasks. You can add reminders on your each individual property. Set
              the time and write the note, AreoLand will automatically remind
              you about this tasks with the note. <br />
              It is very helpful when you have daily or weekly tasks. You don't
              have to remember things just put them in AreoLand and it will
              remind you.
            </p>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default ReminderFeature;
