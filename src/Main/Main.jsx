import React from "react";
import "./Main.css";

// Move your data into a logical array
const PRODUCTS = [
    "Blenders", "Washing Machines", "Electric Cookers", "Electric Burners",
    "Rechargeable Fans", "Kitchen Cooking Sets", "Electric Irons", "Kettles",
    "Gas Burners", "Sound Systems", "Gaming Chairs", "Office Tables",
    "Air Fryers", "Juicers", "Microwaves", "Ice Makers", "Swallow Makers",
    "Household Furniture", "Industrial Mist Fans"
];

function Main() {
    return (
        <div className="home-main" id="home">
            <div className="welcome-note">
                <h1>Welcome,<br />To Ike Adusei Enterprise</h1>
                <p>Assass Collection</p>
            </div>

            <div className="what-we-do">
                <p className="intro-text">
                   Welcome to the Asas Collection by Ike Adusei Enterprise. We are your premier destination for premium, high-quality,
                    and affordable electronics and appliances—available for both wholesale and retail.
                </p>

                <div className="product-list">
                    <ul>
                        {PRODUCTS.map((product, index) => (
                            /* Change <key> to <li> */
                            <li key={index}>
                                <a href={`#${product.toLowerCase().replace(/ /g, "-")}`}>{product}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export { Main };