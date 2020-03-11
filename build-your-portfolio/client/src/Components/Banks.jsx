import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Plus from "../images/plusBlue.png";
import Buy from "../images/buyButton.png";
import Sell from "../images/sellButton.png";

import bac from "../images/bac.png";
import citi from "../images/citi.png";
import gs from "../images/gs.png";
import hsbc from "../images/hsbc.png";
import chase from "../images/chase.png";

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

export default function Banks(props) {
  const [open, setOpen] = useState(false);

  const [banks, setBanks] = useState([]);

  const [BACStocks, setBACStocks] = useState([]);

  const filterBAC = () => {
    setBACStocks(
      banks.filter(s => {
        if (s.symbol === "BAC") {
          return s;
        }
      })
    );
  };

  const [CStocks, setCStocks] = useState([]);

  const filterC = () => {
    setCStocks(
      banks.filter(s => {
        if (s.symbol === "C") {
          return s;
        }
      })
    );
  };

  const [GSStocks, setGSStocks] = useState([]);
  const filterGS = () => {
    setGSStocks(
      banks.filter(s => {
        if (s.symbol === "GS") {
          return s;
        }
      })
    );
  };

  const [HSBCStocks, setHSBCStocks] = useState([]);

  const filterHSBC = () => {
    setHSBCStocks(
      banks.filter(s => {
        if (s.symbol === "HSBC") {
          return s;
        }
      })
    );
  };

  const [JPMStocks, setJPMCStocks] = useState([]);

  const filterJPM = () => {
    setJPMCStocks(
      banks.filter(s => {
        if (s.symbol === "JPM") {
          return s;
        }
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await getStocksByType("Banks");
    console.log(data)
    setBanks(data.stocks);
  };
  useEffect(() => {
    filterBAC();
    filterC();
    filterGS();
    filterHSBC();
    filterJPM();
    // filterPfizer();
  }, [banks]);

  return (
    <div className={open ? "allStocks click" : "allStocks"}>
      <div className='PlusText'> <img
        onClick={() => setOpen(!open)}
        src={Plus}
        className={open ? "Plus click" : "Plus"}
      ></img>
      <h2 className="PlusTitle">Banks</h2></div>
      <ul style={open ? {display: "flex"}:{display: "none"}}>
        <div className="theLogos">
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={bac} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{BACStocks[0] && BACStocks[0].price}</h1>
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
              <img src={citi} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{CStocks[0] && CStocks[0].price}</h1>
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
              <img src={gs} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{GSStocks[0] && GSStocks[0].price}</h1>
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
              <img src={hsbc} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{HSBCStocks[0] && HSBCStocks[0].price}</h1>
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
              <img src={chase} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{JPMStocks[0] && JPMStocks[0].price}</h1>
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
