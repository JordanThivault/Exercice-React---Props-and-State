import React from "react";
import { useState } from "react";

function MenuItem(props) {
    const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  
    const handleClickFavorite = () => {
        setIsFavorite((prevFavorite) => !prevFavorite);
      };
  
    return (
      <section className="itemContainer">
        <figure className="imgContainer">
          <img src={props.foodImage} alt={props.itemName} />
          <figcaption>
            <h2>{props.itemName}</h2>
            <p>{props.description}</p>
          </figcaption>
        </figure>
        <span>{props.price} EUR</span>
  
        <button onClick={handleClickFavorite}>
            {isFavorite ? "❤️" : "🖤"}
        </button>

      </section>
    );
  }
  
  export default MenuItem;