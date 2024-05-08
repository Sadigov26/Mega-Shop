import React from "react";
import style from "./Header.module.css";
import logo from "../About/Image/logo (14).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <header>
        <div className={style.containerHeader}>
          <div className={style.headerTop}>
            <p>ADD ANYTHING HERE OR JUST REMOVE IT....</p>
            <div className={style.navbarTop}>
              <nav>
                <ul>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Our Stores</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                  <li>
                    <a href="">Newsletter</a>
                  </li>
                  <li>
                    <a href="">Languages</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={style.headerMain}>
            <div className={style.headerMainLogo}>
              <img src={logo} />
            </div>
            <div className={style.headerMainSearch}>
              <select>
                <option value="option1">All</option>
                <option value="option2">All 2</option>
                <option value="option3">All 3</option>
              </select>
              <input type="text" placeholder="Search..." />
              <FontAwesomeIcon icon={faSearch} className={style.search} />
            </div>
            <div className={style.headerMainIcons}>
              <FontAwesomeIcon icon={faHeart} className={style.hedIcons} />
              <FontAwesomeIcon icon={faUser} className={style.hedIcons} />
              <FontAwesomeIcon
                icon={faBasketShopping}
                className={style.hedIcons}
              />
            </div>
          </div>

          <div className={style.headerMainBlue}>
            <div className={style.headerMainBlueContainer}>
              <nav>
                <ul>
                  <li>
                    <a href="">DEMOS</a>
                  </li>
                  <li>
                    <a href="">FEATURES</a>
                  </li>
                  <li>
                    <a href="">SHOP</a>
                  </li>
                  <li>
                    <a href="">PAGES</a>
                  </li>
                  <li>
                    <a href="">BLOG</a>
                  </li>
                  <li>
                    <a href="">ELEMENTS</a>
                  </li>
                </ul>
              </nav>

              <div className={style.headerMainBlueContact}>
                <div className={style.headerMainContact}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>CONTACT</p>
                </div>
                <div className={style.headerMainContact}>
                  <FontAwesomeIcon icon={faClock} />
                  <p>08:00 - 17:00</p>
                </div>
                <div className={style.headerMainContact}>
                  <FontAwesomeIcon icon={faPhone} />
                  <p>+47 900 99 000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.headerBottom}>
          <div className={style.bottomIcon}>
            <FontAwesomeIcon icon={faStar} />{" "}
            <p>Free Delivery World Wide* Learn more</p>
          </div>
          <div className={style.bottomIcon}>
            <FontAwesomeIcon icon={faHeart} />{" "}
            <p>Loved by our Customers. 5000+ Reviews</p>
          </div>
          <div className={style.bottomIcon}>
            <FontAwesomeIcon icon={faCheck} />{" "}
            <p>Free Returns and Free Shipping</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
