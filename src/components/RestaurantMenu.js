import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import { MENU_API } from "../config/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const {restId} = useParams();
    console.log(useParams());

    useEffect(() => {
        fetchOverviewData();
    }, []);

    const [restInfo, setRestInfo] = useState(null);
    const [menuItem, setMenuItem] = useState(null);
    const fetchOverviewData = async () => {
        const data = await fetch(MENU_API + restId);
        let menu = await data.json();
        console.log(menu);
        setRestInfo(menu.data.cards[2].card.card.info);
        console.log(menu.data.cards[2].card.card.info);
        console.log(menu.data);
        setMenuItem(menu.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        // console.log(menuItem);
    };

    if (restInfo == null || menuItem==null) {
        return <Shimmer />
    }
    const { name, areaname, costForTwoMessage, cuisines, avgRating, totalRatingsString, sla }
        = restInfo

    

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
                menuItem.map(menuItem =>{
                  return <MenuItem  menuitem={menuItem} />  
                } )


            }
            {/* <MenuItem /> */}
        </div>
    )
};

export default RestaurantMenu;