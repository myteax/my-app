import { Paper } from "@material-ui/core";
import { useEffect } from "react";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import styles from "../styles/viewer.module.css";

const Viewer = ({ data }) => {
  return (
    <div className={(styles.vw_flex, styles.vw_jfjf)}>
      <Grid container spacing={3}>
        {data.length > 0
          ? data.map((resp) => {
              return (
                <Grid item xs={12} sm={4}>
                  <Card>
                    <CardHeader>{resp.address}</CardHeader>
                    <CardMedia className={styles.vw_fi33}>
                      {resp.address}
                    </CardMedia>
                    <CardContent>
                      <Link href={`/listing/${resp.id}`}>
                        <img className={styles.vw_img} src={resp.img} />
                      </Link>
                      <div className={styles.vw_diva}>
                        $
                        {resp.amount
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                      <div className={styles.vw_jfue2}>
                        <span> 4+2 bed•4 bath•2500-3000 sqft</span>
                      </div>
                    </CardContent>
                    <CardActions>
                      <div>
                        <FavoriteBorderIcon className={styles.vw_fjr9} />{" "}
                        <ShareIcon className={styles.vw_fjr9} />
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          : null}
      </Grid>
    </div>
  );
};

export default Viewer;
