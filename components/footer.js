import React from "react";
import css from "../styles/footer.module.css";
import {
  YoutubeFilled,
  TwitterCircleFilled,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";
import Link from "next/link";

const footer = () => {
  return (
    <>
      <div className={`${css.main}`}>
        {/* <div className={`${css.overlay}`}></div> */}
        <video
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
          loop
          autoPlay
          muted
          className={`${css.video}`}
        ></video>
        <ul className={`${css.centerLinks}`}>
          <li>
            <Link href="">
              <FacebookFilled />
            </Link>
          </li>
          <li>
            <Link href="">
              <YoutubeFilled />
            </Link>
          </li>
          <li>
            <Link href="">
              <TwitterCircleFilled />
            </Link>
          </li>
          <li>
            <Link href="">
              <InstagramFilled />
            </Link>
          </li>
        </ul>
        <p className={`${css.footerText}`}>
          Email | Contact | Information
          <br />
          abhishekmeena7452@gmail.com
        </p>
      </div>
    </>
  );
};

export default footer;
