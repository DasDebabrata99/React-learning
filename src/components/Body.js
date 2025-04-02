import RestCard, { PromotedRestCardFunction } from "./Restcard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useConnectivityStatus from "../config/useConnectivityStatus";

const Body = () => {

    

    const onlineStatus = useConnectivityStatus();
   
    const PromotedRestCard = PromotedRestCardFunction(RestCard);
    let searchText = "";
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    

    useEffect(() => {
        fetchData();
    }, []);

    fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5769238&lng=88.42797569999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                                );

        const json = await data.json();

        const validData = json?.data?.cards.find((eachCard)=> eachCard?.card?.card?.id === 'restaurant_grid_listing_v2');
        const resData = validData?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setListOfRestaurants(resData);
        setFilteredListOfRestaurants(resData);
        console.log(resData);                        
      

    }

    if(!onlineStatus){
        return <h1>Connection Lost!! Check your Internet Connection!</h1>;
    }

    if (listOfRestaurants.length == 0) {
        return <Shimmer />
    }

    onSearch=(e) => { 
        e.preventDefault();
        console.log("Form submitted");
        console.log(searchText);
        setFilteredListOfRestaurants(listOfRestaurants.filter(restData => restData.info.name.toLowerCase().includes(searchText.toLowerCase())));
    }
    return (
        <div className="body">
            <div className="seach">
                <form onSubmit={onSearch}>                
                    Search Component
                    <input  onChange={(e) => {
                        searchText = e.target.value;
                        console.log(searchText);
                    }} />
                </form>               
                         
        
            </div>
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        filteredlistOfRestaurants = listOfRestaurants.filter(restData => restData.info.avgRating > 4.5);
                        setFilteredListOfRestaurants(filteredlistOfRestaurants);
                        console.log(listOfRestaurants.length);

                    }}
                >Top-Rated</button>
            </div>


            <div className="rest-container">
                {
                    filteredListOfRestaurants.map((restData,index) =>

                       <Link key={restData.info.id}  to={"/rest-menu/" + restData.info.id}> 
                            { (index%2==0)? <RestCard rest={restData.info} />
                                : <PromotedRestCard rest={restData.info} />}
                            <RestCard rest={restData.info} />
                       </Link>
                    )
                }
            </div>
        </div>
    )
};


export default Body;