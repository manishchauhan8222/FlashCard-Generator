import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import IndexPage from "../IndexPage/IndexPage";
import { IoArrowBack } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { IoPrintOutline } from "react-icons/io5";
import { IoCloudDownloadOutline } from "react-icons/io5";
export default function Card(props) {
  const cardItems = {
    groupName: props.groupName,
    groupDesc: props.groupDesc,

    cardName: props.cardName,
    cardDesc: props.cardDesc,
    cardImage: props.itemImage,
  };

  return (
    <div className={style.card}>
      <IndexPage></IndexPage>
      <div className={style.cardContainer}>
        <div className={style.homepageContainerHeadingPages}>
          <div className={style.homepageContainerHeadingPage1}>
            <Link to="/" className="link">
              <p className={style.createP}>Create New</p>
            </Link>
          </div>
          <div className={style.homepageContainerHeadingPage2}>
            <Link to="" className="link">
              <p className={style.myflashcardP}>My Flashcard</p>
            </Link>
          </div>
        </div>
        <div className={style.cardContent}>
          <div className={style.cardHeading}>
            <div className={style.cardHeadingArrow}>
              <IoArrowBack />
            </div>
            <div className={style.cardHeadingName}>{cardItems.groupName}</div>
          </div>
          <div className={style.groupDesc}>{cardItems.groupDesc}</div>
          <div className={style.cardItems}>
            <div className={style.cardItem1}>
              <div className={style.cardItem1Heading}>Flashcards</div>
              <div className={style.cardItems1Items}>
                <div className={style.cardItemHeadingArrow}>
                  <MdArrowForwardIos />
                </div>
                <div className={style.cardHeadingName}>
                  {cardItems.cardName}
                </div>
              </div>
            </div>
            <div className={style.cardItem2}>
              <div className={style.cardItem2Image}>
                <img
                  src={cardItems.cardImage}
                  className={style.cardPageImage}
                ></img>
              </div>

              <div className={style.cardDesc}>{cardItems.cardDesc}</div>
            </div>
            <div className={style.cardItem3}>
              <div className={style.cardItem3Items}>
                <div className={style.cardItem3Item}>
                  <div className={style.cardItem3ItemArrow}>
                    <CiShare2 />
                  </div>
                  <div className={style.cardItem3ItemText}>Share</div>
                </div>
                <div className={style.cardItem3Item}>
                  <div className={style.cardItem3ItemArrow}>
                    <IoCloudDownloadOutline />
                  </div>
                  <div className={style.cardItem3ItemText}>Download</div>
                </div>
                <div className={style.cardItem3Item}>
                  <div className={style.cardItem3ItemArrow}>
                    <IoPrintOutline />
                  </div>
                  <div className={style.cardItem3ItemText}>Print</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
