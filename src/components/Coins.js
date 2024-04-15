import React, { useState, useEffect } from "react";
import { Baseurl } from "./baseUrl";
import Loader from "./Loader";
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./Res.css";
import FooterName from "./Footer";

const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("usd");
  const [search, setSearch] = useState("");
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const currencySymbol = currency === "inr" ? "₹" : "$";

  useEffect(() => {
    const getCoinsData = async () => {
      try {
        const { data } = await axios.get(
          `${Baseurl}/coins/markets?vs_currency=${currency}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCoinsData();
  }, [currency]);

  // Calculate the indexes for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // Filter the coins based on the current page and search criteria
  const filteredCoins = coins.filter((data) => {
    if (data === "") {
      return data;
    } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
      return data;
    }
  });

  // Get the coins for the current page
  const currentCoins = filteredCoins.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg">
          <Header />
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Your Coins "
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="btns">
            <button
              onClick={() => setCurrency("inr")}
              className={currency === "inr" ? "active" : ""}
            >
              ₹ INR
            </button>
            <button
              onClick={() => setCurrency("usd")}
              className={currency === "usd" ? "active" : ""}
            >
              $ USD
            </button>
          </div>
          <div className="coins-grid">
            {currentCoins.map((coindata, i) => (
              <Link
                to={`/coins/${coindata.id}`}
                style={{ color: "white", textDecoration: "none" }}
                key={i}
              >
                <div className="ex-cards">
                  <div className="image">
                    <img height="80px" src={coindata.image} alt="" />
                  </div>
                  <div className="name">{coindata.name}</div>
                  <div className="price">
                    {currencySymbol} {coindata.current_price.toFixed(0)}
                  </div>
                  <div
                    style={{
                      color:
                        coindata.price_change_percentage_24h > 0
                          ? "green"
                          : "red",
                    }}
                    className="rank"
                  >
                    {coindata.price_change_percentage_24h > 0
                      ? `+${coindata.price_change_percentage_24h.toFixed(2)}`
                      : coindata.price_change_percentage_24h.toFixed(2)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* <div className="pagination">
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage} of {Math.ceil(filteredCoins.length / cardsPerPage)}</span>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(filteredCoins.length / cardsPerPage)}>Next</button>
          </div> */}
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={currentPage === 1 ? "" : "active"}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of{" "}
              {Math.ceil(filteredCoins.length / cardsPerPage)}
            </span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(filteredCoins.length / cardsPerPage)
              }
              className={
                currentPage === Math.ceil(filteredCoins.length / cardsPerPage)
                  ? ""
                  : "active"
              }
            >
              Next
            </button>
          </div>
          <div className="coins-footer">
            <FooterName />
          </div>
        </div>
      )}
    </>
  );
};

export default Coins;
