import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Plus from "../images/plusGreen.png";
import apple from "../images/apple.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import microsoft from "../images/microsoft.png";
import amazon from "../images/amazon.png";

import Buy from "../images/buyButton.png";
import Sell from "../images/sellButton.png";

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

export default function Software(props) {
  const [open, setOpen] = useState(false);

  const [software, setSoftware] = useState([]);

  const [appleStocks, setAppleStocks] = useState([]);

  const filterApple = () => {
    setAppleStocks(
      software.filter(s => {
        if (s.symbol === "AAPL") {
          return s;
        }
      })
    );
  };

  const [googleStocks, setGoogleStocks] = useState([]);

  const filterGoogle = () => {
    setGoogleStocks(
      software.filter(s => {
        if (s.symbol === "GOOG") {
          return s;
        }
      })
    );
  };

  const [faceStocks, setFaceStocks] = useState([]);

  const filterFace = () => {
    setFaceStocks(
      software.filter(s => {
        if (s.symbol === "FB") {
          return s;
        }
      })
    );
  };

  const [microStocks, setMicroStocks] = useState([]);

  const filterMicro = () => {
    setMicroStocks(
      software.filter(s => {
        if (s.symbol === "MSFT") {
          return s;
        }
      })
    );
  };

  const [amznStocks, setAmznStocks] = useState([]);

  const filterAmzn = () => {
    setAmznStocks(
      software.filter(s => {
        if (s.symbol === "AMZN") {
          return s;
        }
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await getStocksByType("Software");
    setSoftware(data.stocks);
  };
  useEffect(() => {
    filterApple();
    filterGoogle();
    filterFace();
    filterMicro();
    filterAmzn();
  }, [software]);

  return (
    <div className={open ? "allStocks click" : "allStocks"}>
      <div className='PlusText'><img
        onClick={() => setOpen(!open)}
        src={Plus}
        className={open ? "Plus click" : "Plus"}
      ></img>
      <h2 className="PlusTitle">Software</h2></div>
      <ul style={open ? {display: "flex"}:{display: "none"}}>
        <div className="theLogos">
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <div>
                <img src={apple} className="logos"></img>
              </div>
              <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
                <h1>{appleStocks[0] && appleStocks[0].price}</h1>
              </div>
              <div>
                <img className="buySell" src={Buy} />
              </div>
              <div>
                <img className="buySell" src={Sell} />
              </div>
            </div>
          </motion.div>
          <motion.div variants={vars} animate={open ? "shown" : "hidden"}>
            <div>
              <img src={google} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{googleStocks[0] && googleStocks[0].price}</h1>
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
              <img src={facebook} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{faceStocks[0] && faceStocks[0].price}</h1>
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
              <img src={microsoft} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{microStocks[0] && microStocks[0].price}</h1>
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
              <img src={amazon} className="logos"></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "1.5vw" }}>
              <h1>{amznStocks[0] && amznStocks[0].price}</h1>
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
