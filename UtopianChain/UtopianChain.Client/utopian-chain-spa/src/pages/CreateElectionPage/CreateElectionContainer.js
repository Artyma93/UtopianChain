import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { createElectionApi } from "../../utils/api/CreateElectionApiCall";
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

export const CreateElectionContainer = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(true);
  const desc = useInput("");
  const { state } = data;
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
        label="Название голосования"
        variant="outlined"
        {...desc.bind}
      />
      <p />

      {/* <input type="text" {...desc.bind}></input> */}
      {/* <p /> */}

      <Button
        variant="contained"
        onClick={() =>
          createElectionApi("token", desc.value).then((response) =>
            setData(response)
          )
        }
      >
        Создать голосование
      </Button>

      {/* <button
        onClick={() =>
          createElectionApi("token", desc.value).then((response) =>
            setData(response)
          )
        }
      >
        Создать голосование
      </button> */}

      <p />
      {state ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Голосование с названием {data.description} успешно создано!
          </Alert>
        </Snackbar>
      ) : (
        <p></p>
      )}
    </>
  );
};
