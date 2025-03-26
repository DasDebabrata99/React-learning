import { IMAGE_LINK } from "../config/constants";

const RestCard = ({rest, data})=> {
    const {name, cuisines, avgRating, cloudinaryImageId} = rest;
    return (
        <div className="rest-card">
        <img alt="rest-image" className="rest-logo" src={IMAGE_LINK + cloudinaryImageId}/>
        <h4>{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating}</h5>
        
    </div>
    )

};

export default RestCard;