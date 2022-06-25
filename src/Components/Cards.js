import React from "react";

const Cards = (props) => {
    return (
        <div className="cardGrid">
            {props.item.map((a, index) => {
                return <div key={a.id} className="materials" onClick={e=> props.refresh(index)}>
                    <img src={a.icon} alt=""  ></img>
                    <p className="itemName">{a.name}</p>
                </div>
            })}

        </div>
    )
}

export default Cards