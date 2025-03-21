"use client";
import { useState } from "react";
import Tesseract from "tesseract.js";

const TextScanner = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("Extracted text will appear here...");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      extractText(file);
    }
  };

  const extractText = (imageFile) => {
    setLoading(true);
    Tesseract.recognize(
      imageFile,
      "eng", // Language (you can add more)
      {
        logger: (m) => console.log(m), // Logs progress
      }
    )
      .then(({ data: { text } }) => {
        setText(text);
        setLoading(false);
      })
      .catch((error) => {
        console.error("OCR Error:", error);
        setText("Error extracting text.");
        setLoading(false);
      });
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Text Scanner from Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ marginBottom: "10px" }}
      />
      {image && (
        <div style={{ marginBottom: "10px" }}>
          <img
            src={image}
            alt="Uploaded"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "5px" }}
          />
        </div>
      )}
      {loading ? (
        <p>Extracting text...</p>
      ) : (
        <div
          style={{
            padding: "10px",
            border: "1px solid #ddd",
            background: "#f9f9f9",
            borderRadius: "5px",
            minHeight: "100px",
            whiteSpace: "pre-wrap",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default TextScanner;
