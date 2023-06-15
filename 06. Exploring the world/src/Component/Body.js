//Here were using props
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../../Constant";
import { useEffect, useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);

  const [searchText, setSearchText] = useState(""); //returns =[variable name, function to update]
  //? Empty dependency array => once after render
  //? dependency array[searchText] => once after initial render + everytime after render (my searchText changes)
  useEffect(() => {
    //API
    getRestaurants()
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6063669&lng=77.3252633&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  }

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
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, restaurants);
            //update thestate restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="cardlist">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
