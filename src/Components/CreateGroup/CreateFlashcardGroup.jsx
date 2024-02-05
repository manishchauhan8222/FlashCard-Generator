import React, { useState } from "react";
import style from "./CreateFlashcardGroup.module.css";

export default function CreateFlashcardGroup(props) {
  const {
    handleGroupName,
    handleGroupDesc,
    handleCardName,
    handleCardDesc,
    handleSubmitBtn,
    groupImage,
    handleGroupImageUpload,
    handleItemImageUpload,
    itemImage,
  } = props;

  return (
    <form className={style.CreateFlashcard} onSubmit={handleSubmitBtn}>
      <div className={style.CreateFlashcardGroup}>
        <div className={style.CreateFlashcardGroupInner}>
          <div className={style.CreateFlashcardGroupName}>
            <label htmlFor="groupName">Create Group *</label>
            <input
              type="text"
              id="groupName"
              className="groupItems"
              placeholder="Group Name"
              required
              onChange={handleGroupName}
            ></input>
          </div>
          <div className={style.groupImage}>
            <label htmlFor="groupImage">Upload Image *</label>
            <input
              type="file"
              accept="image/*"
              id="groupImage"
              onChange={handleGroupImageUpload}
            />
          </div>
          {groupImage && (
            <div>
              <img
                src={groupImage}
                alt="Uploaded"
                style={{ width: "2rem" }}
              ></img>
            </div>
          )}
          <div className={style.groupDesc}>
            <label htmlFor="groupdesc">Add description *</label>
            <textarea
              type=""
              id="groupdesc"
              placeholder="Write your thoughts here..."
              required
              onChange={handleGroupDesc}
            ></textarea>
          </div>
        </div>
      </div>
      <div className={style.CreateFlashcardItem}>
        <div className={style.CreateFlashcardItemName}>
          <label htmlFor="cardName">Enter Term *</label>
          <input
            type="text"
            id="cardName"
            placeholder="Term Name"
            required
            onChange={handleCardName}
          ></input>
        </div>
        <div className={style.CreateFlashcardItemName}>
          <label htmlFor="cardDesc">Enter Defination *</label>
          <input
            type="text"
            id="cardDesc"
            placeholder="Term Defination"
            required
            onChange={handleCardDesc}
          ></input>
        </div>

        <div className={style.itemImage}>
          <label htmlFor="Card Image">Select Image *</label>
          <input
            type="file"
            accept="image/*"
            id="itemImage"
            onChange={handleItemImageUpload}
          />
        </div>
        {itemImage && (
          <div>
            <img src={itemImage} alt="Uploaded" style={{ width: "2rem" }}></img>
          </div>
        )}
      </div>
      <div className={style.CreateFlashcardBtn}>
        <button
          type="submit"
          onClick={handleSubmitBtn}
          className={style.createBtn}
        >
          Create
        </button>
      </div>
    </form>
  );
}
