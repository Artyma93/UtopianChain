import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

// import "./SimpleTable.css";

import Avatar from "@material-ui/core/Avatar";
// import { makeStyles } from '@material-ui/core/styles';

import { NavLink } from "react-router-dom";

import VoitingCard from "./VoitingCard";

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

export function VoitingListView(props) {
  const classes = useStyles();
  const { data, midleLink } = props;

//   console.log("data from view", data);
  return (
    <React.Fragment>
      <Container >
        {/* <div className="App"> */}
        {data ? (
          <React.Fragment>
            {data.map((elementData) => (
              <React.Fragment keys={elementData.id}>
                <VoitingCard elementData={elementData} midleLink={midleLink} />
                {/* <p>{elementData.description}</p> */}
              </React.Fragment>
            ))}
            {/* <p>Some</p> */}
          </React.Fragment>
        ) : (
          <p className="App-intro">Загрузка...</p>
        )}
        {/* </div> */}
      </Container>
    </React.Fragment>
  );
}
