import React from "react";
import "./ContactCard.css";

function ContactsCard({Name,Mobile,Email}){
    return(
        <div className="contact-card" >
                                <p className="contact-name m-2">🙂 {Name}</p>
                                <p className="contact-name m-2">📞{Mobile}</p>
                                <p className="contact-name m-2">✉ {Email}</p>
                            </div>
                        
    )
}

export default ContactsCard