import React from "react";
import styles from "./buy.module.css";
import Vcard from "../components/Vcard/Vcard";
import Hcard from "../components/Hcard/Hcard";
import Hproduct from "../components/Hproduct/Hproduct";
import kdimg from "../../../public/kids.jpg";
import Image from "next/image";
import Reviews from "../components/Reviews/Reviews";
import Slider from "../components/Slider/Slider";
import Nav from "../components/Nav/Nav";
import Nav2 from "../components/Nav2/Nav2";
import Buyslide from "./Buyslide/Buyslide";
import { Share2 } from "lucide-react";

// Hardcoded Product Data
const productData = {
  id: 1,
  name: "Premium Sneakers",
  description: "Stylish and comfortable sneakers for everyday wear.",
  rating: 4.5,
  actualPrice: 879.99,
  originalPrice: 999.99,
  discount: 20,
  freeDelivery: true,
  colors: ["Black", "White", "Blue", "pink", "gray", "red"],
  sizes: ["S", "M", "XL", "XXl", "10"],
  image: "https://via.placeholder.com/250",
  reviews: [
    { name: "John Doe", comment: "Great quality and super comfortable!" },
    { name: "Jane Smith", comment: "Loved the design and perfect fit." },
  ],
  relatedProducts: [
    {
      id: 2,
      name: "Casual Shoes",
      actualPrice: 59.99,
      originalPrice: 79.99,
      discount: 25,
      image: "https://via.placeholder.com/250",
    },
  ],
};
const kidcloth = [
  "https://plus.unsplash.com/premium_photo-1724296696869-59cc80d104c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1697183203294-f846144fde19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1698305282759-0d295cbb96d6?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1638110006382-1480f3d4b98c?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1697183203524-3e7c6da4d4e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1723575737806-ecd7f74bf3a1?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1723575737806-ecd7f74bf3a1?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1686823939646-69f76240e778?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1728163807630-0f30b4eb9390?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583656345883-5189c01c024f?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1664982803698-b6b514e9928b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1578897367002-2873f26520fd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1661776091539-f6f0874d14b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1697183203538-08c30b0a6709?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1714889307579-3dabfd972c49?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1697183202005-0f506eb7d014?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1722859248384-8cfdcaaa9ce1?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1707816501026-e618c34026da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1707816501030-d931ca6a5354?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1630345910963-1a697bb5262d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const ProductDetails = () => {
  return (
    <div className={styles.wrapper}>
      <Nav2></Nav2>

      <div className={styles.container}>
        <div className={styles.titlerating}>
          <div className={styles.title}>
            {" "}
            <h1>{productData.name}</h1>
            <p>{productData.description}</p>
          </div>
          <div className={styles.rating}>
            4.5
            <i className="fa-solid fa-star" style={{ color: "orange" }}></i>|
            245 Ratings
          </div>
        </div>
        <div className={styles.product}>
          {/* Left: Image */}

          <div className={styles.imageContainer}>
            <Buyslide></Buyslide>
            <div className={styles.imgProperty}>
              {new Array(5).fill().map((_, index) => (
                <div key={index} className={styles.quickView}>
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    src={kdimg}
                    alt="img"
                  ></Image>
                </div>
              ))}
            </div>

            <div className={styles.whishShare}>
              <i className="fa-regular fa-heart"></i>
              <Share2 size={30} strokeWidth={2} absoluteStrokeWidth />{" "}
            </div>
          </div>

          {/* Right: Details */}
          <div className={styles.details}>
            <div className={styles.priceSection}>
              <p className={styles.price}>
                ₹{productData.actualPrice}{" "}
                <span className={styles.originalPrice}>
                  ₹{productData.originalPrice}
                </span>
              </p>
              <p className={styles.discount}>{productData.discount}% Off</p>
              <p className={styles.delivery}>
                {productData.freeDelivery
                  ? "✅ Free Delivery"
                  : "❌ No Free Delivery"}
              </p>
            </div>
            {/* Sizes */}
            <div className={styles.sizes}>
              <h4>SELECT SIZE </h4>
              {productData.sizes.map((size) => (
                <button key={size} className={styles.sizeBtn}>
                  {size}
                </button>
              ))}
            </div>

            {/* Colors */}
            <div className={styles.colors}>
              <h4>COLOR</h4>
              {productData.colors.map((color) => (
                <span
                  key={color}
                  className={styles.colorBox}
                  style={{ backgroundColor: color.toLowerCase() }}
                ></span>
              ))}
            </div>

            {/* Buy/Add to Cart */}
            <div className={styles.buttons}>
              <button className={styles.buyNow}>BUY NOW</button>
              <button className={styles.addToCart}>ADD TO CART</button>
            </div>

            <div className={styles.delivery}>
              <h1 className={styles.deliveryTitle}>
                DELIVERY OPTIONS <i className="fa-solid fa-truck"></i>{" "}
              </h1>
              <div className={styles.inputPin}>
                <input
                  placeholder="Enter pincode"
                  className={styles.inputField}
                  type="text"
                />
                <h3 className={styles.check}>Check</h3>
              </div>
              <p>
                Please enter PIN code to check delivery time & Pay on Delivery
                Availability
              </p>
              <p>
                100% Original Products Pay on delivery might be available Easy
                14 days returns and exchanges BEST OFFERS Best Price: Rs. 599
                Applicable on: Orders above Rs. 400 (only on first purchase)
                Coupon code: MYNTRASAVE Coupon Discount: 30% off (Your total
                saving: Rs. 1900)
              </p>
            </div>
            <div className={styles.productDetails}>
              <div>
                <h1> PRODUCT DETAILS </h1>
                <p>
                  A pair of teal blue solid sports sandals Synthetic upper with
                  Velcro closure Cushioned footbed Patterned outsole Warranty: 1
                  month Warranty provided by brand/manufacturer
                </p>{" "}
              </div>

              <div>
                <h1>Material & Care </h1>
                <p>Synthetic Wipe with a clean, dry cloth to remove dust</p>
              </div>
              <div className={styles.specifications}>
                <h2>Specifications</h2>

                <div className={styles.sections}>
                  <div className={styles.section}>
                    <p className={styles.sectionPara}>Type</p>
                    <h3 className={styles.sectionTitle}>Sports Sandals</h3>
                  </div>
                  <div className={styles.section}>
                    <p className={styles.sectionPara}>Type</p>
                    <h3 className={styles.sectionTitle}>Sports Sandals</h3>
                  </div>
                  <div className={styles.section}>
                    <p className={styles.sectionPara}>Type</p>
                    <h3 className={styles.sectionTitle}>Sports Sandals</h3>
                  </div>
                  <div className={styles.section}>
                    <p className={styles.sectionPara}>Type</p>
                    <h3 className={styles.sectionTitle}>Sports Sandals</h3>
                  </div>
                  <div className={styles.section}>
                    <p className={styles.sectionPara}>Type</p>
                    <h3 className={styles.sectionTitle}>Sports Sandals</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
          </div>
        </div>

        {/* Related Products */}
        <div className={styles.related}>
          <h2 className={styles.relatedTitle}>Related Products</h2>
          <div className={styles.relatedGrid}>
            <div className={styles.hCardSection}>
              {kidcloth.map((link, index) => (
                <Hcard key={index} link={link} />
              ))}
            </div>
            <h1 className={styles.title}>You may like</h1>
            <div className={styles.hProductSection}>
              {kidcloth.map((link, index) => (
                <Hproduct key={index} link={link} />
              ))}
            </div>
            <h1 className={styles.title}>You may like</h1>
            <div className={styles.hProductSection}>
              {kidcloth.map((link, index) => (
                <Hproduct button={"none"} key={index} link={link} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.reviews}>
          <div className={styles.reviewTitle}>RATING⭐</div>
          <div className={styles.reviewGraph}>
            <div className={styles.buyerStar}>
              <h2 className={styles.numStar}>
                4{" "}
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
              </h2>{" "}
              <p className={styles.vTitle}>Verified buyers</p>
            </div>

            <div className={styles.graphBox}>
              <div className={styles.graph}>
                <h1>
                  5<i className="fa-solid fa-star"></i>
                </h1>
                <div className={styles.firstBar}></div>
                <h1>72</h1>
              </div>
              <div className={styles.graph}>
                <h1>
                  4<i className="fa-solid fa-star"></i>
                </h1>
                <div className={styles.secondBar}></div>
                <h1>72</h1>
              </div>
              <div className={styles.graph}>
                <h1>
                  3<i className="fa-solid fa-star"></i>
                </h1>
                <div className={styles.thirdBar}></div>
                <h1>72</h1>
              </div>
              <div className={styles.graph}>
                <h1>
                  2<i className="fa-solid fa-star"></i>
                </h1>
                <div className={styles.forthBar}></div>
                <h1>72</h1>
              </div>
              <div className={styles.graph}>
                <h1>
                  1<i className="fa-solid fa-star"></i>
                </h1>
                <div className={styles.fifthBar}></div>
                <h1>72</h1>
              </div>
            </div>
          </div>
          <h3 className={styles.cReviews}>Customer Reviews (112)</h3>

          <div className={styles.reviewsItem}>
            {Array(5)
              .fill()
              .map((_, index) => (
                <Reviews key={index} />
              ))}
            <h3 className={styles.viewAll}>View all Reviews</h3>
          </div>
        </div>
      </div>

      <div className={styles.related}>
        <div className={styles.relatedGrid}>
          <h1 className={styles.title}>You may like</h1>
          <div className={styles.hProductSection}>
            {kidcloth.map((link, index) => (
              <Hproduct key={index} link={link} />
            ))}
          </div>
          <h1 className={styles.title}>You may like</h1>
          <div className={styles.hProductSection}>
            {kidcloth.map((link, index) => (
              <Hproduct button={"none"} key={index} link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
