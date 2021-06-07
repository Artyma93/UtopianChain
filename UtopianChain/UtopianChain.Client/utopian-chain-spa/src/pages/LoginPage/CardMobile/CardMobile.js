import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MobileLogo from "../../../assets/MobileLogo.jpg";
// import MobileCard2_6 from "../../../assets/MobileCard2_6.png";
// import MobileCard3_1 from "../../../assets/MobileCard3_1.png";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    // textIndent: "1%",
  },
  text: {
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
  mobileLogo: {
    height: "400px",
    width: "350px",
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h5" component="h2" className={classes.text}>
              Приложение ЮФУ на мобильных устройствах
            </Typography>
            <Typography
              className={(classes.title, classes.text)}
              color="textSecondary"
              gutterBottom
              component="h2"
              //   component="p"
            >
              Установите официальное мобильное приложение ЮФУ и оставайтесь в
              курсе новостей, где бы вы ни находились.
            </Typography>
            {/* <Typography
              className={classes.title, classes.text}
              color="textSecondary"
              gutterBottom
              component="h2"
              //   component="p"
            >
              в курсе новостей, где бы вы ни находились.
            </Typography> */}
          </Grid>
        </Grid>
        {/* <Typography variant="body2" component="p">
        Установите официальное мобильное приложение ЮФУ и оставайтесь в курсе новостей, где бы вы ни находились.
          <br />
        </Typography> */}

        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography>
              <img
                // src={MobileCard3_1}
                // alt="MobileCard2_6"
                className={classes.mobileLogo}
              />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      {/* <CardActions>
        <Button size="large ">Вход</Button>
      </CardActions> */}

      {/* <Typography className={classes.bullet}>
        <CardActions></CardActions>
      </Typography> */}
    </Card>
  );
}
