import { useState } from "react";
import MenuItem from "./MenuItem";

const MenuCategory = (props) => {
    const { itemCards, title, type } = props.categories.card.card;

    const [showItems, setShowItems] = useState(false);

    const OnCategoryClicked = ()=>{
        setShowItems(!showItems);
    }


    return (
        <div className="catergory-card">
            <div className="category-title" onClick={OnCategoryClicked}> 
                {title}<div>
                    {!showItems && <span>&#8595;</span>}
                    {showItems && <span>&#8593;</span>}
                </div>
 
            </div>
            <div>
                { showItems && itemCards.map(item =>(
                        <MenuItem item={item} />
                    ))}             
                

            </div>
        </div>
    );
}
export default MenuCategory;