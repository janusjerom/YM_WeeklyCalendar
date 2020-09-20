import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

import ComponentCal from './WeeklyCal';

const useStyles = makeStyles(() => ({
  grid: {
  },
  subGrid: {
  },
}));

function Dashboard() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item sm={3} className={classes.grid}>
        sidebar
      </Grid>
      <Grid item sm={7} className={classes.grid}>
        <Grid container>
          <Grid item sm={12} className={classes.subGrid}>
            topbar
          </Grid>
          <Grid item sm={12} xs={12} className={classes.subGrid}>
            <ComponentCal/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={2} className={classes.grid}>
        right side
      </Grid>
    </Grid>
  );
}

export default Dashboard;
