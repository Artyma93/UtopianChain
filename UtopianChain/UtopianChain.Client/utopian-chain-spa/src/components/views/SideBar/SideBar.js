import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { SideBarItem } from "./SideBarItems/SideBarItem";
import { SideBarItems } from "./SideBarItems/SideBarItems";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <List
      // component="nav"
      // aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {SideBarItems.items.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <SideBarItem link={item.link} icon={item.icon} title={item.title} />
          </React.Fragment>
        );
      })}
    </List>
  );
}
