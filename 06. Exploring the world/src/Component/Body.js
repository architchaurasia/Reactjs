//Here were using props
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import { restaurantList } from "../../Constant";
import { useEffect, useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants?.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterdRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState(""); //returns =[variable name, function to update]
  //? Empty dependency array => once after render
  //? dependency array[searchText] => once after initial render + everytime after render (my searchText changes)
  console.log("render");
  useEffect(() => {
    //API
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6063669&lng=77.3252633&page_type=DESKTOP_WEB_LISTING"
    );
    console.log(data);
    const json = await data.json();
    console.log(json);
    //Optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  //? Condidtional rendering
  //If rest. no data - Shimmer UI
  //Else show data

  if (!allRestaurants) return null;

  // if (filterdRestaurants?.length === 0) return <h1>Not Restaurant Found!!</h1>;

  //Not return component(Early return)
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchText, allRestaurants);
            //update thestate restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="cardlist">
        {filterdRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          )
        })}
      </div>
    </>
  );
};

export default Body;
