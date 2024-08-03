import React from "react"

export default function Star(props) {
    const starIcon = props.isFilled ? "Group (1).png" : "Group.png"
    return (
        <img 
            src={`${starIcon}`} 
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}