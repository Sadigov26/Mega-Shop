import React, { useState, useEffect } from "react";
import style from "./Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <section className={style.Hero}>
        <div className={style.HeroContainer}>
          <div className={style.heroLogo}>
            <h2>OUR BESTSELLERS</h2>
            <h1>
              Browse All <FontAwesomeIcon icon={faChevronRight} />
            </h1>
          </div>
          <div className={style.product}>
            {products.map((product) => (
              <div key={product.id} className={style.card}>
                <img src={product.image} alt={product.title} />
                <FontAwesomeIcon icon={faHeart} className={style.cardIcon} />
                <button className={style.cardBtn}>ADD TO CART</button>
                <p>{product.title}</p>
                <h3>{product.category}</h3>
                <div className={style.cardIcons}>
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} />
                  ))}
                </div>
                <span>{product.price}$</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
