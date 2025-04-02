import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import { MENU_API } from "../config/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../config/useRestaurantMenu";
import useConnectivityStatus from "../config/useConnectivityStatus";
import MenuCategory from "./MenuCategory.js";

const RestaurantMenu = () => {

    const { restId } = useParams();
    console.log(useParams());
    const [restInfo] = useRestaurantMenu(restId);

    if (restInfo == null) {
        return <Shimmer />
    }
    const { name, areaname, costForTwoMessage, cuisines, avgRating, totalRatingsString, sla }
        = restInfo.data.cards[2].card.card.info;

    const categoryType = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

    const categories = restInfo.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        e => e.card.card?.["@type"] == categoryType);

    //categories.map(e => console.log(e.card.card.title));


    return (
        <div className="menu">
            <div className="restaurant-overview">
                <div>
                    {name}
                </div>
                <div>
                    {areaname}
                </div>
                <div>
                    {cuisines.join(", ")}
                </div>
                <div>
                    {avgRating} ({totalRatingsString}) - {costForTwoMessage}
                </div>
                <div>
                    {sla.slaString}
                </div>
            </div>

            {/* { categories.map(e => ( <div key={e.card.card.categoryId}>{e.card.card.title}</div>) )} */}
            { categories.map(e=>
                    <MenuCategory categories={e}/> 
             )}
            
        </div>
    )
};

export default RestaurantMenu;