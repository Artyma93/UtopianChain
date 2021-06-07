import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { createBlockApi } from "../../utils/api/CreateBlockApiCall";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(1),
      // width: "25ch",
      // borderColor: "red",
    },
  },
}));

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => setValue("");

  return {
    bind: { value, onChange },
    value,
    clear,
  };
}

export const VotingContainer = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(true);
  let { id } = useParams();
  const desc = useInput("");
  const vote = data.data;
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <TextField
        className={classes.root}
        // color="red"
        // id="standard-basic"
        label="Выбор"
        variant="outlined"
        {...desc.bind}
      />
      <p />

      {/* <input type="text" {...desc.bind}></input> */}
      {/* <p /> */}

      <Button
        variant="contained"
        onClick={() =>
          createBlockApi("token", desc.value, id).then((response) =>
            setData(response)
          )
        }
      >
        Проголосовать
      </Button>

      {/* <input type="text" {...desc.bind}></input>
      <p />
      <button
        onClick={() =>
          createBlockApi("token", desc.value, id).then((response) =>
            setData(response)
          )
        }
      >
        Проголосовать
      </button>
      <p /> */}

      {vote ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Ваш голос: {vote} успешно учтён!
          </Alert>
        </Snackbar>
      ) : (
        <p></p>
      )}
      {/* {JSON.stringify(data, null, " ")} */}
      {/* <h3>REST API</h3>
      <BGUCashIncomeRESTView budget={graphData} /> */}
      {/* <VotingCountView data={data} /> */}
    </>
  );
};
