"use client";
import React, { useState } from "react";
import styles from "./edit.module.css";
import Nav2 from "@/app/components/Nav2/Nav2";

const Page = () => {
  const [fullName, setFullName] = useState("Your Name");
  const [email, setEmail] = useState("youremail@example.com");
  const [gender, setGender] = useState("male");
  const [birthday, setBirthday] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={styles.wrapper}>
      <Nav2></Nav2>
      <form className={styles.editDetails} onSubmit={handleSubmit}>
        <h2 className={styles.editTitle}>Edit Profile</h2>
        <div className={styles.phoneBox}>
          <div className={styles.number}>
            <h2>Mobile Number*</h2>
            <h2>
              {" "}
              99289829792{" "}
              <div className={styles.badge}>
                {" "}
                <i
                  style={{ fontWeight: "900" }}
                  className="fa-solid fa-check"
                ></i>
              </div>{" "}
            </h2>
          </div>
          <button className={styles.change}>CHANGE</button>
        </div>

        <div className={styles.fullName}>
          <h2>Full Name</h2>
          <input type="text" value={fullName} onChange={handleFullNameChange} />
        </div>
        <div className={styles.fullName}>
          <h2>Email</h2>
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>

        <div className={styles.gender}>
          <button
            type="button"
            className={gender === "male" ? styles.selected : ""}
            onClick={() => handleGenderChange("male")}
          >
            <i className="fa-solid fa-check"></i>Male
          </button>
          <button
            type="button"
            className={gender === "female" ? styles.selected : ""}
            onClick={() => handleGenderChange("female")}
          >
            <i className="fa-solid fa-check"></i>Female
          </button>
        </div>

        <div className={styles.dob}>
          <input
            type="text"
            value={birthday}
            onChange={handleBirthdayChange}
            placeholder=" "
          />
          <label>Birthday (dd/mm/yyyy)</label>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
          <h2 className={styles.altTitle} style={{ fontSize: "1.5vh" }}>
            Alternate Number Details
          </h2>

          <div className={styles.altNumber}>
            <input type="text" />
            <h2 className={styles.code}>+91 |</h2>
          </div>
        </div>
        <button type="button" className={styles.delete}>
          DELETE ACCOUNT
        </button>
        <div className={styles.submit}>
          <button type="submit" className={styles.saveDetails}>
            SAVE DETAILS
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
