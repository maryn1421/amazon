import React from "react";
import './Home.css'
import Product from "../Product/Product";


const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className={"home__image"}
                     src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                     alt=""/>
                <div className="home__row">
                    <Product
                        id={"12321341"}
                        title={"The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback "}
                        price={29.99}
                        image={"https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"}
                        rating={5}/>
                    <Product id={"49538094"}
                             title={"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough and Whisk, 5 Litre Glass Bowl"}
                             price={239.0}
                             rating={4}
                             image={"https://images-na.ssl-images-amazon.com/images/I/91gRKbX%2BS8L._AC_SX450_.jpg"}/>
                </div>
                <div className="home__row">
                    <Product id={"4903850"}
                    title={"Samsung Gear Fit2 Pro Smartwatch Fitness Band (Small), Liquid Black, SM-R365NZKNXAR – US Version with Warranty"}
                    price={199.99}
                    rating={4}
                    image={"https://images-na.ssl-images-amazon.com/images/I/51Oicwj%2BhAL._AC_SY550_.jpg"}/>
                    <Product
                    id={"23445930"}
                    title={"Amazon Echo (3rd generation) | Snart speaker with Alexa, Charcoal Fabric"}
                    price={98.99}
                    rating={5}
                    image={"https://images-na.ssl-images-amazon.com/images/I/51TFnR7AtGL._AC_SY400_.jpg"}/>
                    <Product
                    id={"32543554345"}
                    title={"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"}
                    price={598.99}
                    rating={4}
                    image={"https://images-na.ssl-images-amazon.com/images/I/81Pi4nhjlwL._AC_SL1500_.jpg"}/>
                </div>
                <div className="home__row">
                    <Product id={"4903850"}
                             title={"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"}
                             price={199.99}
                             rating={3}
                             image={"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"}/>
                </div>
            </div>
        </div>
    )
}

export default Home;