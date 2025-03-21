import styles from "./cart.module.css";
import Nav2 from "../components/Nav2/Nav2";
import Tabbar from "../components/Tabbar/Tabbar";
import AddtoCartCards from "../components/AddtoCartCards/AddtoCartCards";
import Statusnav from "../components/Statuanav/Statusnav";
import WishCard from "../wishlist/WishCard/WishCard";
import Link from "next/link";
import axios from "axios";
import { nanoid } from "nanoid";

const CartPage = async () => {
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

  return (
    <div className={styles.cartContainer}>
      <Statusnav />

      <div className={styles.topOptions}>
        <div className={styles.deliveryStatus}>
          <h4>Deliver to: Someone 711111</h4>
          <p>Sultanpur, Santragachi, Howrah</p>
        </div>
        <div className={styles.avilableOffers}>
          <h2>
            <i className="fa-solid fa-percent"></i> Available Offers
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur Aspernatur, nostrum!</p>
          <h3>
            Show More <i className="fa-solid fa-angle-down"></i>
          </h3>
        </div>

        <div className={styles.oprations}>
          <input type="checkbox" name="" id="" />

          <h2>5/5 ITEMS SELECTED </h2>
          <p>(Rs. 58383)</p>
          <div className={styles.btns}>
            <i className="fa-solid fa-share-nodes"></i>
            <i className="fa-solid fa-trash"></i>
            <i className="fa-solid fa-heart"></i>
          </div>
        </div>
      </div>

      {kidcloth == false ? (
        <p className={styles.emptyCart}>Your cart is empty</p>
      ) : (
        <div key={nanoid()} className={styles.cartList}>
          {kidcloth.map((item, index) => (
            <AddtoCartCards key={index} item={item} />
          ))}
        </div>
      )}

      <div className={styles.bottomOptions}>
        <div className={styles.suggestion}>
          <div className={styles.alsoLike}>
            <i className="fa-solid fa-bag-shopping"></i>
            <p>You may also like</p>
          </div>

          <div className={styles.keywords}>
            {["All", "first", "second", "third", "Forth", "Fifth", "Sixth"].map(
              (item, index) => (
                <h3 key={index}>{item}</h3>
              )
            )}
          </div>

          <div className={styles.cards}>
            {kidcloth.map((item, index) => (
              <WishCard key={index} item={item} />
            ))}
          </div>
        </div>

        <div className={styles.priceDetails}>
          <div className={styles.title}>
            <h2>PRICE DETAILS (5 ITEMS)</h2>
          </div>
          <div className={styles.section}>
            <h2>Total MRP</h2>
            <p style={{ color: "black" }}>Rs. 20089</p>
          </div>
          <div className={styles.section}>
            <h2>Discount on MRP</h2>
            <p>Rs. 12049</p>
          </div>
          <div className={styles.section}>
            <h2>Shipping Charge</h2>
            <p>Rs. 40</p>
          </div>
          <div className={styles.totalAmount}>
            <h2>Total Amount</h2>
            <h2>Rs. 8079</h2>
          </div>
        </div>

        <div className={styles.genuine}>
          <div className={styles.iconText}>
            <div className={styles.box}>
              <i className="fa-solid fa-box-open"></i>
              <h2>Solid packaging</h2>
            </div>
            <div className={styles.box}>
              <i className="fa-solid fa-shield-halved"></i>
              <h2>Secure Payments</h2>
            </div>
          </div>

          <p style={{ fontSize: "1.5vh", paddingTop: "1vh" }}>
            By placing order you are agree to Bonadia's{" "}
            <Link href={"/"} style={{ color: "#FF406C", fontWeight: "600" }}>
              Terms of Use{" "}
            </Link>
            and{" "}
            <Link href={"/"} style={{ color: "#FF406C", fontWeight: "600" }}>
              {" "}
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {kidcloth.length > 0 && (
        <div className={styles.tab}>
          <p>3 item selected</p>
          <button className={styles.checkoutButton}>
            P L A C E <span style={{ color: "transparent" }}>" </span>O R D E R
          </button>
        </div>
      )}

      <Tabbar category={2} />
    </div>
  );
};

export default CartPage;
