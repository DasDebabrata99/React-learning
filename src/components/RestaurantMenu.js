import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import { MENU_API } from "../config/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../config/useRestaurantMenu";
import useConnectivityStatus from "../config/useConnectivityStatus";

const RestaurantMenu = () => {

    const {restId} = useParams();
    console.log(useParams());
    const [restInfo, menuItems] = useRestaurantMenu(restId);

    if (restInfo == null || menuItems==null) {
        return <Shimmer />
    }
    const { name, areaname, costForTwoMessage, cuisines, avgRating, totalRatingsString, sla }
        = restInfo;

    

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
            {
                menuItems.map(menuItem =>{
                  return <MenuItem  menuitem={menuItem} />  
                } )


            }
            {/* <MenuItem /> */}
        </div>
    )
};

export default RestaurantMenu;