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
import {
  Share2,
  ChevronRight,
  Heart,
  ShoppingCart,
  Package,
  Banknote,
  Repeat,
  ShieldCheck,
  Stamp,
} from "lucide-react";

// Hardcoded Product Data
const productData = {
  id: 1,
  name: "Premium Sneakers",
  description: "Stylish and comfortable sneakers for everyday",
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
    <>
      <div className={styles.wrapper}>
        <Nav2></Nav2>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Buyslide></Buyslide>
          </div>
          <div className={styles.titleDescription}>
            <div className={styles.titlePara}>
              <h2>
                Sangaria{" "}
                <span>
                  Blue Foral EEmbroided Notch Neck Straigt Kurta With Trouser &
                  Dopatta
                </span>{" "}
              </h2>
            </div>
            <div className={styles.priceDiscount}>
              <h2>
                MRP Rs. 6,449 <span>1,999</span> <span>60% OFF!</span>
              </h2>
            </div>
          </div>
          <div className={styles.cuponSection}>
            <h2>
              Best price <span>Rs. 1,699</span>with coupon <span>FLAT 300</span>
              <ChevronRight />
            </h2>
            <h2>Add to cart and save Rs. 300</h2>
          </div>
          <div className={styles.actions}>
            <div className={styles.selectSize}>
              <h2>Select Size</h2>
              <h2>
                Size Chart <ChevronRight size={20} />
              </h2>
            </div>
            <div className={styles.sizeButtons}>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
              <button>3XL</button>
            </div>
            <div className={styles.tradeBtn}>
              <button>
                Wishlist <Heart size={20} />
              </button>
              <button>
                Add to card
                <ShoppingCart />
              </button>
            </div>
          </div>

          <div className={styles.delivarySection}>
            <h2 className={styles.delivaryTitle}>Check Delivary</h2>
            <input type="text" placeholder="Enter Pin Code" />
            <h2 className={styles.delivaryExpress}>
              <Package size={20} /> Express delivery{" "}
              <span>might be available</span>
            </h2>
            <h2 className={styles.delivaryCashOn}>
              <Banknote size={20} /> Pay on delivery{" "}
              <span>might be available</span>
            </h2>
            <h2 className={styles.delivaryExchange}>
              {" "}
              <Repeat size={20} /> Return & Exchange{" "}
              <span>might be available</span>
            </h2>
          </div>
          <div className={styles.specificationWrapper}>
            <div className={styles.specifications}>
              <div className={styles.metarialsDetails}>
                <div className={styles.left}>
                  <div className={styles.section}>
                    <h2>Neck</h2>
                    <p>Round Neck</p>
                  </div>
                  <div className={styles.section}>
                    <h2>Top Design Styling</h2>
                    <p>Regular</p>
                  </div>
                  <div className={styles.section}>
                    <h2>Top Fabric</h2>
                    <p>Floral</p>
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.section}>
                    <h2>Ornamentation</h2>
                    <p>Squinned</p>
                  </div>
                  <div className={styles.section}>
                    <h2>Weave Type</h2>
                    <p>Machine Weave</p>
                  </div>
                  <div className={styles.section}>
                    <h2>Bottom Closure</h2>
                    <p>Drawstring</p>
                  </div>
                  <div className={styles.section}>
                    <h2>Weave Pattern</h2>
                    <p>Regular</p>
                  </div>
                </div>
              </div>
              <button className={styles.seeMore}>See more</button>

              <div className={styles.productDetails}>
                <h2 className={styles.pDetails}>Product Details</h2>
                <p>This kurta set consists of kurta, trousers and a dupatta</p>
              </div>
              <div className={styles.designSection}>
                <h2>Kurta Design</h2>
                <ul>
                  <li>Blue and gold tomed kurta</li>
                  <li>Floral Embroidered</li>
                  <li>Notch Neck</li>
                  <li>Three-quartee, regular sleeves</li>
                  <li>Straigt Shaped</li>
                </ul>
              </div>
              <div className={styles.designSection}>
                <h2>Kurta Design</h2>
                <ul>
                  <li>Blue and gold tomed kurta</li>
                  <li>Floral Embroidered</li>
                  <li>Notch Neck</li>
                  <li>Three-quartee, regular sleeves</li>
                  <li>Straigt Shaped</li>
                </ul>
              </div>

              <div className={styles.sizeFit}>
                <h2>Size & Fit</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laudantium odio magni maiores aliquam in quis?
                </p>
              </div>
              <div className={styles.metarialsCare}>
                <h2>Size & Fit</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laudantium odio magni maiores aliquam in quis?
                </p>
              </div>
            </div>
          </div>
          <div className={styles.geniuneStamp}>
            <div className={styles.genuine}>
              <ShieldCheck
                style={{
                  border: "3px solid var(--highlight-text)",
                  padding: "1vh",
                  borderRadius: "5vh",
                  background: "var(--secondary-bg)",
                }}
                strokeWidth={1.5}
                size={70}
              />
              <h2>Genuine</h2>
              <h2>Product</h2>
            </div>
            <div className={styles.quality}>
              <Stamp
                style={{
                  border: "3px solid var(--highlight-text)",
                  padding: "1vh",
                  borderRadius: "5vh",
                  background: "var(--secondary-bg)",
                }}
                strokeWidth={1.5}
                size={70}
              />
              <h2>Quality</h2>
              <h2>Checked</h2>
            </div>
          </div>
          <div className={styles.returnInfo}>
            <h2>Easy 14 days returns and exchages</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, aut
              voluptatum quia
            </p>
          </div>
          <div className={styles.similarProducts}>
            <h2>Fastest Selling Similar Product</h2>
            <h2>Don't miss out on these in-demand products</h2>
            <div className={styles.productSlide}>
              {kidcloth.map((item, index) => (
                <Hproduct link={item} key={index}></Hproduct>
              ))}
            </div>
          </div>
          <div className={styles.sponsoredProducts}>
            <h2>Sponsores todays products</h2>
            <div className={styles.productSlide}>
              {kidcloth.map((item, index) => (
                <Hproduct button={"none"} link={item} key={index}></Hproduct>
              ))}
            </div>
          </div>
          <div className={styles.similarProducts}>
            <h2>Similar Product</h2>
            <div className={styles.productSlide}>
              {kidcloth.map((item, index) => (
                <Hproduct link={item} key={index}></Hproduct>
              ))}
            </div>
          </div>
          <div className={styles.reviewGraph}>
            <h2 className={styles.reviewTitle}>Rating & Reviews</h2>
            <p className={styles.reviewPara}>
              <ShieldCheck strokeWidth={1} />
              By Verified Buyers Only
            </p>

            <div className={styles.graphBox}>
              <div className={styles.starNumber}>
                <h2>
                  4.4 <span>★ </span>
                </h2>
                <p>98 Verified Buyers</p>
              </div>
              <div className={styles.graphBars}>
                <div className={styles.bar}>
                  <h2>
                    {" "}
                    5 <span>★ </span>
                  </h2>
                  <div className={styles.line}></div>
                  <h2>
                    68 <ChevronRight strokeWidth={0.75} />
                  </h2>
                </div>
                <div className={styles.bar}>
                  <h2>
                    {" "}
                    4 <span>★ </span>
                  </h2>
                  <div className={styles.line}></div>
                  <h2>
                    68 <ChevronRight strokeWidth={0.75} />
                  </h2>
                </div>
                <div className={styles.bar}>
                  <h2>
                    {" "}
                    3 <span>★ </span>
                  </h2>
                  <div className={styles.line}></div>
                  <h2>
                    68 <ChevronRight strokeWidth={0.75} />
                  </h2>
                </div>
                <div className={styles.bar}>
                  <h2>
                    {" "}
                    2 <span>★ </span>
                  </h2>
                  <div className={styles.line}></div>
                  <h2>
                    68 <ChevronRight strokeWidth={0.75} />
                  </h2>
                </div>
                <div className={styles.bar}>
                  <h2>
                    {" "}
                    1 <span>★ </span>
                  </h2>
                  <div className={styles.line}></div>
                  <h2>
                    68 <ChevronRight strokeWidth={0.75} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.reviewsSections}>
            <h2 className={styles.reviewTitle}>Customer reviews (112)</h2>
            <div className={styles.reviewsList}>
              <Reviews></Reviews>
              <Reviews></Reviews>
            </div>
            <h2 className={styles.viewAll}>
              View all reviews <ChevronRight strokeWidth={0.75} />
            </h2>
          </div>
          <div className={styles.customerLiked}>
            <h2 className={styles.likedTitle}>Customer Liked</h2>
            <div className={styles.productSlide}>
              {kidcloth.map((item, index) => (
                <Hproduct link={item} key={index}></Hproduct>
              ))}
            </div>
          </div>
          <div className={styles.customerLiked}>
            <h2 className={styles.likedTitle}>Customer favorit</h2>
            <div className={styles.productSlide}>
              {kidcloth.map((item, index) => (
                <Hproduct button={"none"} link={item} key={index}></Hproduct>
              ))}
            </div>
          </div>
          <div className={styles.moreProducts}></div>
          <div className={styles.moreaboutBonadia}></div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
