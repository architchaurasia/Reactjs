import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../../Constant";

const RestaurantMenu = () => {
  //   const para = useParams();
  const { id } = useParams();
  //   console.log(id);

  const [menuDetails, setMenuDetails] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6053914&lng=77.3282854&restaurantId=441176"
    );
    const json = await data.json();
    console.log(json.data.cards[0].card.card.info.feeDetails.amount);
    setMenuDetails(json.data.cards[0].card.card.info);
  }
  return (
    <>
      <h1>We use dynamic ID:{id}</h1>
      <p>{menuDetails?.name}</p>
      <img src={IMG_CDN + menuDetails.cloudinaryImageId} alt="Food_Image" />
      <p>{menuDetails?.cuisines}</p>
      <p>{menuDetails?.avgRating}</p>
    </>
  );
};

export default RestaurantMenu;
