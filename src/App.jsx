import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlashCard from "./Components/FlashCard/FlashCard";

import HomePage from "./Components/HomePage/HomePage";
import CreateFlashcardGroup from "./Components/CreateGroup/CreateFlashcardGroup";
import Card from "./Components/Cards/Card";

export default function App() {
  const [groupName, setGroupName] = useState("");
  const [groupDesc, setGroupDesc] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardDesc, setCardDesc] = useState("");
  const [groupImage, setGroupImage] = useState("");
  const [itemImage, setItemImage] = useState("");
  const handleGroupName = (event) => {
    setGroupName(event.target.value);
  };
  const handleGroupDesc = (event) => {
    setGroupDesc(event.target.value);
  };
  const handleCardName = (event) => {
    setCardName(event.target.value);
  };
  const handleCardDesc = (event) => {
    setCardDesc(event.target.value);
  };

  const handleGroupImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGroupImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleItemImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setItemImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitBtn = (event) => {
    event.preventDefault();
  };

  const handleHeadings = (event) => {
    const page1 = document.querySelector(".homepageContainerHeadingPage1");
    const page2 = document.querySelector(".homepageContainerHeadingPage2");

    const create = document.querySelector(".createP");
    const myflashcard = document.querySelector(".myflashcardP");
    if (event.target === page2) {
      page2.style.borderBottom = " 4px solid #b33a3a";
      myflashcard.style.color = "#b33a3a";
    } else if (event.target === page1) {
      page1.style.borderBottom = " 4px solid #b33a3a";
      create.style.color = "#b33a3a";
    } else {
      page1.style.borderBottom = " 4px solid #b33a3a";
      create.style.color = "#b33a3a";
    }
  };
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                handleGroupName={handleGroupName}
                handleGroupDesc={handleGroupDesc}
                handleCardName={handleCardName}
                handleCardDesc={handleCardDesc}
                handleSubmitBtn={handleSubmitBtn}
                handleGroupImageUpload={handleGroupImageUpload}
                groupImage={groupImage}
                handleItemImageUpload={handleItemImageUpload}
                itemImage={itemImage}
                handleHeadings={handleHeadings}
              />
            }
          />
          <Route
            path="createflashcard"
            element={
              <CreateFlashcardGroup
                handleGroupName={handleGroupName}
                handleGroupDesc={handleGroupDesc}
                handleCardName={handleCardName}
                handleCardDesc={handleCardDesc}
                handleSubmitBtn={handleSubmitBtn}
                handleGroupImageUpload={handleGroupImageUpload}
                groupImage={groupImage}
                handleItemImageUpload={handleItemImageUpload}
                itemImage={itemImage}
              />
            }
          />
          <Route
            path="myflashcard"
            element={
              <FlashCard
                groupName={groupName}
                groupDesc={groupDesc}
                groupImage={groupImage}
                handleItemImageUpload={handleItemImageUpload}
              />
            }
          />
          <Route
            path="card"
            element={
              <Card
                groupName={groupName}
                groupDesc={groupDesc}
                cardName={cardName}
                cardDesc={cardDesc}
                itemImage={itemImage}
                handleItemImageUpload={handleItemImageUpload}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
