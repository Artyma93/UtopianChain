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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export function VotingCountView(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <React.Fragment>
      <Container maxWidth="lg" width={100}>
        <div className="App">
          {data ? (
            <React.Fragment>
              <div className="HeadGrid">
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>
                    <div className="HeadGrid2">
                      <p>Результат голосования</p>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Выбор</TableCell>
                      <TableCell align="center">Количество голосов</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.choice}>
                        <TableCell align="center">{row.choice}</TableCell>
                        <TableCell align="center">{row.choiceCount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </React.Fragment>
          ) : (
            <p className="App-intro">Загрузка бюджетов</p>
          )}
        </div>
      </Container>
    </React.Fragment>
  );
}
