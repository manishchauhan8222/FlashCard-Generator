import React from "react";
import style from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={style.navigaiton}>
      <nav>
        <div className={style.navBar}>
          <div className={style.navBarLeft}>
            <p className={style.navBarLeftP}>
              <span className={style.navBarLeftRed}>Al</span>
              maBetter
            </p>
          </div>
          <div className={style.navBarRight}></div>
        </div>
      </nav>
    </div>
  );
}
