import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
// import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  fjf: {
    display: "flex",
    justifyContent: "right",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link href="/"> RealtorBT</Link>
            </Typography>
            <div className={classes.fjf}>
              <div className={styles.pop999}>
                <Link href="/about"> About</Link>
              </div>
              <div className={styles.pop999}>
                <Link href="/contactus"> Contact us</Link>
              </div>
            </div>

            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Navbar;
