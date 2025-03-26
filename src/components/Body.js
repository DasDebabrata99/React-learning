import RestCard from "./Restcard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    let searchText = "";
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    

    useEffect(() => {
        fetchData();
    }, []);

    fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5769238&lng=88.42797569999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                                );

        const restJson = await data.json();
        setListOfRestaurants(restJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredListOfRestaurants(restJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        console.log(restJson);                        
      

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
                    filteredListOfRestaurants.map(restData =>
                        <RestCard key={restData.info.id} rest={restData.info} data={restData.analytics} />
                    )
                }
            </div>
        </div>
    )
};


export default Body;