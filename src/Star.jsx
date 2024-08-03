import React from "react"

export default function Star(props) {
    const starIcon = props.isFilled ? "Group (1).png" : "Group.png"
    const buttonLabel = props.isFilled ? "Unmark as favorite" : "Mark as favorite"
    return (
        <button 
         onClick={props.handleClick} 
         aria-label={buttonLabel} 
         aria-pressed={props.isFilled}
         className="card--favorite-button" >
        <img 
            src={`${starIcon}`} 
            className="card--favorite"
           alt="Star"
        />
        </button>
    )
}