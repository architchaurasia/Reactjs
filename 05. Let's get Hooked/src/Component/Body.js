//Here were using props
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../../Constant";
import { useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("ddd"); //returns =[variable name, function to update]

  const [textTrue, setTextTrue] = useState("false");

  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <h1>{textTrue}</h1>
        <button
          className="search-btn"
          onClick={() => {
            if (textTrue == "true") {
              setTextTrue("false");
            } else {
              setTextTrue("true");
            }
          }}
        >
          Search
        </button>
      </div>

      <div className="cardlist">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
