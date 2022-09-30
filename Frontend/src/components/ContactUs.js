import React from "react";
import contact from '../images/contact.jpeg';
const ContactUs = () => {
    return (
        <div>
            <div className="menuBar">
                <ul>
                    <li class="active"><a href="/">Home</a></li>
                </ul>
            </div>
            <br></br>
            <br></br>
            {/*<!-- Password--> */}
            <div class="container">
            </div >
            <div align="center">
                <div>
                </div>
                <img src={contact} alt="" />
            </div>
        </div>
    )
}

export default ContactUs;