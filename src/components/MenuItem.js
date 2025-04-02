import { MENU_ITEM_IMAGE_LINK } from "../config/constants";

const MenuItem = (props) => {
    const item = props.item.card.info;

    const { name, imageId, description, defaultPrice } = item;
    const rating = item.ratings.aggregatedRating.rating;
    const ratingCount = item.ratings.aggregatedRating.ratingCount;
    return (
        <div className="menu-item-container" >
            <div classname="item-description">
                <div>{name}</div>
                <div>{description}</div>
                <div>{defaultPrice}</div>
                <div>{rating} ({ratingCount})</div>
            </div>
            <div >
                <img className="item-image" src={MENU_ITEM_IMAGE_LINK + imageId}></img>
            </div>
        </div>
    );
}

export default MenuItem;