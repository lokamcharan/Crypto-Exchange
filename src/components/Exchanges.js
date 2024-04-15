import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Baseurl } from "./baseUrl";
import Loader from "./Loader";
import "./Exchanges.css";
import OurModel from "./OurModel";
import FooterName from "./Footer";

const Exchanges = () => {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const getExchangesData = async () => {
      try {
        const { data } = await axios.get(`${Baseurl}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getExchangesData();
  }, []);

  return (
    <>
      <Header />
      <div className="content">
        {loading ? (
          <Loader />
        ) : (
          <>
            <OurModel />
          </>
        )}
      </div>
      <FooterName />
      {/* <OurModel /> */}
    </>
  );
};

export default Exchanges;
