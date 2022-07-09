import React from 'react';
import "./home.css";
function Tiles({ piece }) {
    return (
        <button className="Tile">
            {piece}
        </button>
    );
}

export default Tiles;