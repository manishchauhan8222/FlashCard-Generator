import React from "react";
import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import style from "./IndexPage.module.css";

export default function IndexPage() {
  return (
    <div className={style.homepage}>
      <Navigation />
    </div>
  );
}
