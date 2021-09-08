import React from 'react';
import './Home.css';
import Product from './Product';
import ControlledCarousel from './Carousel'


const Home = () => {
    return (

        <div className="home">
            <ControlledCarousel className="home-image" />
             
            <div className="home-row">
              <Product
                id = '1575839'
                title = "Mini-power pack"
                price = {11.96}
                rating = {5}
                image = 'https://m.media-amazon.com/images/I/51mozegkpaL._AC_SY200_.jpg'

              />
              
              <Product
                id = '1395759'
                title = "Iphone 13"
                price = {1100.96}
                rating = {5}
                image = 'https://m.media-amazon.com/images/I/41Ltf-12SIL._AC_SY200_.jpg'

              />
              <Product
                id = '4jfbvkw'
                title = "Amazon Basics"
                price = {1100.96}
                rating = {5}
                image = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'

              />
              <Product
                id = '7398rdq'
                title = "Iphone 13"
                price = {1100.96}
                rating = {5}
                image = 'https://m.media-amazon.com/images/I/31023URPopL._AC_SY200_.jpg'
              />  
              <Product
                id = '7398sgq'
                title = "Iphone 13"
                price = {1100.96}
                rating = {5}
                image = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg'
              />
              <Product
                id = '7398req'
                title = "Iphone 13"
                price = {1100.96}
                rating = {5}
                image = 'https://m.media-amazon.com/images/I/41Ltf-12SIL._AC_SY200_.jpg'

              />
            </div> 
            <div className="home-row">
              <Product
                  id = '58st949'
                  title = "1Tb HardDrive"
                  price = {1120.96}
                  rating = {5}
                  image = 'https://m.media-amazon.com/images/I/51-NCTV3ymL._AC_SY200_.jpg'
                />
              <Product
                  id = '49fjvr9o0'
                  title = "Extreme PRO SD card"
                  price = {11.96}
                  rating = {5}
                  image = 'https://m.media-amazon.com/images/I/51eQxcYpAgL._AC_SY200_.jpg'
                />
              <Product
                  id = '1turite0959'
                  title = "Game Box"
                  price = {105.96}
                  rating = {5}
                  image = 'https://m.media-amazon.com/images/I/41C4JkSnyzL._AC_SY200_.jpg'
                />
            </div>
            <div className="home-row">
                <Product
                  id = '1eur3u0'
                  title = "Monitor"
                  price = {230.96}
                  rating = {5}
                  image ='https://images-na.ssl-images-amazon.com/images/I/51pUnYYWQBL.jpg'
                />
                <Product
                  id = '1eur3u0'
                  title = "Monitor"
                  price = {230.96}
                  rating = {5}
                  image ='https://images-na.ssl-images-amazon.com/images/I/51pUnYYWQBL.jpg'
                />
                <Product
                  id = '1eur3u0'
                  title = "Monitor"
                  price = {230.96}
                  rating = {5}
                  image ='https://images-na.ssl-images-amazon.com/images/I/51pUnYYWQBL.jpg'
                />
            </div>
        </div>
    )
}

export default Home
 