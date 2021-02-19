import { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Axios from "axios";
import styles from "../styles/searchpane.module.css";

const Searchpane = (props) => {
  const [city, setCity] = useState("Toronto");
  const [minAmount, setMinAmount] = useState(200000);
  const [maxAmount, setMaxAmount] = useState(500000);
  const [valueString, setValueString] = useState("$200,000 - $500,000");
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  const changeHandler = (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case "$200,000 - $500,000":
        {
          setValueString(e.target.value);
          setMinAmount(200000);
          setMaxAmount(500000);
        }
        break;
      case "$500,000 - $1,000,000":
        {
          setValueString(e.target.value);
          setMinAmount(500000);
          setMaxAmount(1000000);
        }
        break;
      case "$1,000,000 - $3,000,000": {
        setValueString(e.target.value);
        setMinAmount(1000000);
        setMaxAmount(3000000);
      }
      default:
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post(`/api/getdatasp`, {
      city: city,
      maxamount: maxAmount,
      minamount: minAmount,
    }).then((res) => {
      if (res) {
        console.log(res);
        props.sett(res.data.dd);
      }
    });
  };

  return (
    <div className={styles.sp_mt}>
      <Paper>
        <div className={styles.sp_flex}>
          <div className={styles.sp_margin}>
            <select
              value={city}
              onChange={(e) => {
                e.preventDefault();
                setCity(e.target.value);
              }}
            >
              <option value="all"> All Locations</option>
              <option value="toronto"> Toronto,ON</option>
              <option value="milton"> Milton,ON</option>
              <option value="burlington"> Burlington,ON</option>
              <option value="missisauga"> Mississauga,ON</option>
              <option value="ottawa"> Ottawa,ON</option>
            </select>
          </div>
          <div className={styles.sp_margin}>
            <select value={valueString} onChange={changeHandler}>
              <option> $200,000 - $500,000 </option>
              <option> $500,000 - $1,000,000 </option>
              <option> $1,000,000 - $3,000,000 </option>
            </select>
          </div>
          <div className={[styles.sp_margin, styles.sp_ip]}>
            <Button
              variant="contained"
              color="primary"
              className={styles.sp_btn}
              onClick={submitHandler}
            >
              {" "}
              Submit
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Searchpane;
