import React from "react";
import IndexPage from "../IndexPage/IndexPage";
import CreateFlashcardGroup from "../CreateGroup/CreateFlashcardGroup";
import style from "./HomePage.module.css";
import { Link } from "react-router-dom";

export default function HomePage(props) {
  return (
    <div className={style.mainContainer}>
      <div className={style.indexContainer}>
        <IndexPage></IndexPage>
      </div>
      <div className={style.contentContainer}>
        <div className={style.homepageContainerHeadingPages}>
          <div className={style.homepageContainerHeadingPage1}>
            <Link to="/" className="link">
              <p className={style.createP}>Create New</p>
            </Link>
          </div>
          <div className={style.homepageContainerHeadingPage2}>
            <Link to="myflashcard" className="link">
              <p className={style.myflashcardP}>My Flashcard</p>
            </Link>
          </div>
        </div>
        <div className={style.createFlashcardGroupContainer}>
          <CreateFlashcardGroup
            handleGroupName={props.handleGroupName}
            handleGroupDesc={props.handleGroupDesc}
            handleCardName={props.handleCardName}
            handleCardDesc={props.handleCardDesc}
            handleSubmitBtn={props.handleSubmitBtn}
            handleGroupImageUpload={props.handleGroupImageUpload}
            groupImage={props.groupImage}
            handleItemImageUpload={props.handleItemImageUpload}
            itemImage={props.itemImage}
          />
        </div>
      </div>
    </div>
  );
}
