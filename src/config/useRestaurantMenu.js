import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restId)=> {
    const [restInfo, setRestInfo] = useState(null);
    const [menuItem, setMenuItem] = useState(null);

    useEffect(() => {
        fetchOverviewData();
    }, []);
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
    
    return [restInfo, menuItem];
};
export default useRestaurantMenu;

