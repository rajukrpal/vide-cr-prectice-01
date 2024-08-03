import React, { useState } from "react"
import Star from "./Star"


export default function App() {
    const [contact, setContact] = useState({
        firstName: "Raju",
        lastName: "Pal",
        phone: "+91 6209090900",
        email: "rajukumarpa;95@gmail.com",
        isFavorite: true
    })
    
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    
    return (
        <main>
            <article className="card">
                <img src="/profile.png" className="card--image" />
                <div className="card--info">
                    <Star  handleClick={toggleFavorite} isFilled={contact.isFavorite} />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
