import React from "react";
import "./DataCard.css";

function DataCard(props){
    return (
        <div className="DataCard">
            <h3>{props.title}</h3>
            <div className="FromTo">
                {props.fromTo}
            </div>
            <div className="Position">
                {props.position}
            </div>
            <div className="Description">
                {props.children}
            </div>
        </div>
    );
}

export default DataCard;