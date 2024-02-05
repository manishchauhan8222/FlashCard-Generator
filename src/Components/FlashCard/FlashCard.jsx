import React from "react";
import style from "./FlashCard.module.css";
import IndexPage from "../IndexPage/IndexPage";
import { Link } from "react-router-dom";

export default function FlashCard(props) {
  const groupItems = [
    {
      name: props.groupName,
      desc: props.groupDesc,
      image: props.groupImage,
      count: 1,
      btn: "view cards",
    },
  ];

  return (
    <div className={style.flashcard}>
      <IndexPage></IndexPage>
      <div className={style.contentContainer}>
        <div className={style.homepageContainerHeadingPages}>
          <div className={style.homepageContainerHeadingPage1}>
            <Link to="/" className="link">
              <p className={style.createP}>Create New</p>
            </Link>
          </div>
          <div className={style.homepageContainerHeadingPage2}>
            <p className={style.myflashcardP}>My Flashcard</p>
          </div>
        </div>
        <div className={style.flashcardContent}>
          {groupItems[0].name ? (
            groupItems.map((item) => (
              <div className={style.flashcardContainer}>
                <div className={style.flashcardGroupImage}>
                  <img src={item.image} style={{ width: "2rem" }} />
                </div>
                <div className={style.flashcardGroupName}>{item.name}</div>
                <div className={style.flashcardGroupDesc}>{item.desc}</div>

                <div className={style.flashcardGroupCardCount}>
                  Cards {item.count}
                </div>
                <Link to="/card" className="link">
                  <div className={style.flashcardGroupViewBtn}>{item.btn}</div>
                </Link>
              </div>
            ))
          ) : (
            <div className={style.notAvailableContainer}>
              <p className={style.notAvailableP}>Flashcards Is Not Available</p>
              <Link to="/">
                <button>Create FlashCards</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
