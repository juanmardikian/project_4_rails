import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Plus from "../images/plusOrange.png";
import Buy from "../images/buyButton.png";
import Sell from "../images/sellButton.png";

import pfizer from "../images/pfizer.png";
import johnson from "../images/j&j.png";
import abbv from "../images/abbv.png";
import novartis from "../images/novartis.png";
import sanofi from "../images/sanofi.png";

import { getStocksByType } from "../api-helper";

const vars = {
  shown: {
    opacity: 1,
    x: '27%'
  },
  hidden: {
    opacity: 0,
    x: 0
  }
};

export default function Health() {
  const [open, setOpen] = useState(false);

  const [health, setHealth] = useState([]);

  const [pfizerStocks, setPfizerStocks] = useState([]);

  const filterPfizer = () => {
    setPfizerStocks(
      health.filter(s => {
        if (s.symbol === "PFE") {
          return s;
        }
      })
    );
  };

  const [JJStocks, setJJStocks] = useState([]);

  const filterJJ = () => {
    setJJStocks(
      health.filter(s => {
        if (s.symbol === "JNJ") {
          return s;
        }
      })
    );
  };

  const [NVSStocks, setNVSStocks] = useState([]);

  const filterNVS = () => {
    setNVSStocks(
      health.filter(s => {
        if (s.symbol === "NVS") {
          return s;
        }
      })
    );
  };

  const [ABBVStocks, setABBVStocks] = useState([]);

  const filterABBV = () => {
    setABBVStocks(
      health.filter(s => {
        if (s.symbol === "ABBV") {
          return s;
        }
      })
    );
  };

  const [SNYStocks, setSNYStocks] = useState([]);

  const filterSNY = () => {
    setSNYStocks(
      health.filter(s => {
        if (s.symbol === "SNY") {
          return s;
        }
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await getStocksByType("Health");
    setHealth(data.stocks);
  };
  useEffect(() => {
    filterPfizer();
    filterJJ();
    filterNVS();
    filterABBV();
    filterSNY()
    // filterApple();
    // filterGoogle();
    // filterFace();
    // filterMicro();
    // filterAmzn();
  }, [health]);

  return (
    <div className={open ? "allStocks click" : "allStocks"}>
     <div className='PlusText'>
      <img
        onClick={() => setOpen(!open)}
        src={Plus}
        className={open ? "Plus click" : "Plus"}
      ></img>
      <h2 className="PlusTitle">Health</h2></div>
      <ul style={open ? {display: "flex"}:{display: "none"}}>
        <div className="theLogos">
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={pfizer} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{pfizerStocks[0] && pfizerStocks[0].price}</h1>
            </div>
            <div>
              <img className="buySell" src={Buy} />
            </div>
            <div>
              <img className="buySell" src={Sell} />
            </div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={johnson} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{JJStocks[0] && JJStocks[0].price}</h1>
            </div>
            <div>
              <img className="buySell" src={Buy} />
            </div>
            <div>
              <img className="buySell" src={Sell} />
            </div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={novartis} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{NVSStocks[0] && NVSStocks[0].price}</h1>
            </div>
            <div>
              <img className="buySell" src={Buy} />
            </div>
            <div>
              <img className="buySell" src={Sell} />
            </div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={abbv} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{ABBVStocks[0] && ABBVStocks[0].price}</h1>
            </div>
            <div>
              <img className="buySell" src={Buy} />
            </div>
            <div>
              <img className="buySell" src={Sell} />
            </div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={sanofi} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{SNYStocks[0] && SNYStocks[0].price}</h1>
            </div>
            <div>
              <img className="buySell" src={Buy} />
            </div>
            <div>
              <img className="buySell" src={Sell} />
            </div>
          </motion.div>
        </div>
      </ul>
    </div>
  );
}
