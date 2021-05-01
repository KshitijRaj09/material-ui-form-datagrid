import axios from "axios";
import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import CustomButton from "./CustomButton";
import Form from "./Form";

const useStyles = makeStyles((theme) => ({
  MuiDataGrid: {
    borderRadius: "10px",
    margin: "20px 0",
    color: "purple",
    boxShadow: "2px 2px 10px #888888",
  },

  root: {
    margin: "0 auto",
    width: "50%",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      margin: "2px auto",
      width: "95%",
    },
  },
}));

const Employees = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [employee, setEmployee] = useState({});

  const classes = useStyles();

  //Columns for Data Grid
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Name", headerName: "Name", width: 150 },
    { field: "Email", headerName: "Email", width: 150 },
    { field: "Position", headerName: "Position", width: 250 },
  ];

  //To Show Input Form
  const showAddNew = () => {
    setShowForm(true);
  };

  //To Hide Input Form
  const hideAddNew = (input) => {
    setShowForm(false);
    setEmployee(input);
  };

  //Fetching Employee Data from API
  useEffect(() => {
    try {
      (async () => {
        const { data } = await axios.get(
          `https://608c2bb79f42b20017c3d852.mockapi.io/employees`
        );
        setData(data);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, [employee]);

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <DataGrid
          className={classes.MuiDataGrid}
          rows={data}
          columns={columns}
          pageSize={5}
          autoHeight
          rowHeight={50}
        />
      </Grid>

      <Grid item>
        {showForm ? (
          <Form hideForm={hideAddNew} />
        ) : (
          <CustomButton
            text="Add New Employee"
            click={showAddNew}
            className=""
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Employees;
