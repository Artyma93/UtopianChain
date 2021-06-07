import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LoginContainer from "../../../components/Auth/Login/LoginContainer/LoginContainer";



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
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Обратите внимание
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          component="h2"
          //   component="p"
        >
          Для входа в личный кабинет необходимо иметь почту ЮФУ, которая
          заканчивается на ...@sfedu.ru
        </Typography>

        <Typography variant="body2" component="p">
          При нажатии на кнопку "Вход" вы будете перенаправлены на страницу
          авторизации на сервисе Microsoft. После успешной авторизации вы будете
          перенаправлены в личный кабинет.
          {/* <br /> */}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="large ">Вход</Button>
      </CardActions> */}

      <Typography className={classes.bullet}>
        <CardActions>
          <LoginContainer />
        </CardActions>
      </Typography>
    </Card>
  );
}
