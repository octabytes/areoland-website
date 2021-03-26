import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import MailIcon from "@material-ui/icons/Mail";
import RoomIcon from "@material-ui/icons/Room";

const useStyles = makeStyles(({ palette }) => ({
  footerSection: {
    background: "#011C3A",
    "& h4:after": {
      content: '" "',
      position: "absolute",
      bottom: -8,
      left: 0,
      height: 2,
      width: 64,
      background: palette.secondary.main,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={clsx("bg-light-dark", classes.footerSection)} id="footer1">
      <div className="container">
        <Grid container>
          <Grid item lg={9} md={9} sm={12}>
            <div className="p-8 h-full elevation-z3">
              <h4 className="text-20 mb-6 relative">About</h4>
              <p className="text-inherit">
                AreoLand is a software for real estate agents to Manage their
                properties in better way. Real Estate Agents need to keep
                records about their properties or houses. Most of the agents
                have many properties and number of house to sell or rent. Each
                property and house contain number of photos. So keeping all
                these information is headache for estate agents. That's why
                AreoLand is handy way to keep all these things in better way and
                make your life easy.
              </p>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12}>
            <div className="p-8 h-full elevation-z3">
              <h4 className="text-20 mb-6 relative">Contact</h4>
              <div className="px-4 my-8 flex items-center mx--4">
                <MailIcon className="text-secondary" />
                <div className="pl-4">
                  <h5 className="m-0 p-0 text-16">Email</h5>
                  <p className="m-0 p-0 text-inherit">support@areoland.com</p>
                </div>
              </div>
              <div className="px-4 mt-8 flex items-center mx--4">
                <RoomIcon className="text-secondary" />
                <div className="pl-4">
                  <h5 className="m-0 p-0 text-16">WhatsApp Support</h5>
                  <p className="m-0 p-0 text-inherit">+92 315 1101492</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
