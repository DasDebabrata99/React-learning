import RestCard from "./Restcard";
import restaurants from "../config/mockData";
import { useState } from "react";

const Body = ()=> {
    const [listOfRestaurants, setListOfRestaurants] = useState( restaurants);
    console.log(restaurants);
    return (
    <div className="body">
        <div className="seach">
        Search Component  <input />
        </div>
        <div className="filter">
            <button 
                className="filter-btn"
                onClick={()=>{
                    filteredlistOfRestaurants = listOfRestaurants.filter(restData=> restData.info.avgRating > 4.5);
                    setListOfRestaurants(filteredlistOfRestaurants);
                    console.log(listOfRestaurants.length);
                    
                }}
                >Top-Rated</button>
        </div>


        <div className="rest-container">
        {
           listOfRestaurants.map( restData => 
               <RestCard  key={restData.info.id} rest={restData.info}  data={restData.analytics}/>
           )
        }
        </div>
    </div>
)};


export default Body;