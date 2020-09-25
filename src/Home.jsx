import React from 'react'
import './Home.css'
import Product from './Product'

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Scarlett/GW/Hero/1500x600_HERO1._CB404251413_.jpg" alt=""/>

                <div className="home__row">
                    <Product title="Smart TV Amazon"
                    image="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Scarlett/GW/Cards/Sheldon-379x304._SY304_CB404680828_.jpg"
                    price={199.99}
                    rating={5}/>

                    <Product title="Echo 3ª geração Alexa "
                    image="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Cards/BTF-gateway/Echo/CategoryCard/379x304/CategoryCard_Echo_379x304_25._SY304_CB410962126_.jpg"
                    price={699.00}
                    rating={3}/>
                </div>

                <div className="home__row">     
                <Product title="Kindle com 3G "
                    image="https://m.media-amazon.com/images/I/41BC7Vhdo1L._AC_SY200_.jpg"
                    price={399.00}
                    rating={5}/>

                <Product title="Novo Echo Show 10: Smart Display HD de 10,1 "
                    image="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Scarlett/GW/Cards/Theia-379x304._SY304_CB404307553_.jpg"
                    price={1899.00}
                    rating={5}/>

                <Product title="Novo Echo Dot (4ª geração): Smart Speaker  "
                    image="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Scarlett/GW/Shoveler/250x200_Ganache._CB404254231_.jpg"
                    price={699.00}
                    rating={4}/>

                </div>

                <div className="home__row">
                <Product title="Notebook Intel 9° Geração HD SSD - Monitor 24 Polegadas 1980x1440  "
                    image="https://images-na.ssl-images-amazon.com/images/I/71j8jmt7cDL._AC_UL115_.jpg"
                    price={4999.00}
                    rating={4}/>
                </div>      
            </div>
        </div>
    )
}
