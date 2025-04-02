import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restId)=> {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchOverviewData();
    }, []);
     const fetchOverviewData = async () => {
            const data = await fetch(MENU_API + restId);
            let menu = await data.json();
            console.log(menu);
            setRestInfo(menu);
            // setMenuItem(menu.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
            // console.log(menuItem);
        };
    
    return [restInfo];
};
export default useRestaurantMenu;

