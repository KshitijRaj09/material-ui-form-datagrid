import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  links: {
    color: "#FFF",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="primary">
        <Toolbar>
          <Grid container>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                Assessment
              </Typography>
            </Grid>

            <Grid item xs />
            <Grid item>
              <Button>
                <Typography>
                  <Link to="/" className={classes.links}>
                    Counter
                  </Link>
                </Typography>
              </Button>
              <Button>
                <Typography>
                  <Link to="/employees" className={classes.links}>
                    Employees
                  </Link>
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Header;
