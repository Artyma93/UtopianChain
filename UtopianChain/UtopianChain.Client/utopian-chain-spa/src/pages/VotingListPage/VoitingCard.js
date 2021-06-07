import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
  },
  bullet: {
    // display: "inline-block",
    // margin: "0 2px",
    // transform: "scale(0.8)",
    // marginBottom: "300px",
    // lineHeight: 50,
  },
  title: {
    // fontSize: 14,
  },
  pos: {
    // marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const { elementData, midleLink } = props;
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  // console.log("elementData", elementData);

  // const link = `https://localhost:44360/blockchain/CountingVotesByElection/${elementData.id}`;

  const link = `${midleLink}/${elementData.id}`;

  return (
    <>
      {elementData ? (
        <ListItem button to={link} component={Link}>
          <Card >
            <CardContent>
              {/* <Typography  */}
              {/* // variant="h3" */}
              {/* //  component="h2" */}
               {/* > */}
                {/* Обратите внимание {elementData.id} */}
              {/* </Typography> */}
              <Typography
                // className={classes.title}
                // color="textSecondary"
                // gutterBottom
                // component="h2"
                //   component="p"
              >
                {elementData.description}
              </Typography>

              {/* <Typography variant="body2" component="p"> */}
                {/* Описание голосования */}
              {/* </Typography> */}
            </CardContent>
          </Card>
        </ListItem>
      ) : (
        <p className="App-intro">Загрузка...</p>
      )}
    </>
  );
}
