import emailLeft from "../../assets/imgs/emailLeft.png";
import emailLeftSelected from "../../assets/imgs/emailLeftSelected.png";
import emailCenter from "../../assets/imgs/emailCenter.png";
import emailCenterSelected from "../../assets/imgs/emailCenterSelected.png";
import emailRight from "../../assets/imgs/emailRight.png";
import emailRightSelected from "../../assets/imgs/emailRightSelected.png";

export const emailData = (active) => [
  {
    id: 1,
    value: "left",
    img: active === "left" ? emailLeftSelected : emailLeft,
  },
  {
    id: 2,
    value: "center",
    img: active === "center" ? emailCenterSelected : emailCenter,
  },
  {
    id: 3,
    value: "right",
    img: active === "right" ? emailRightSelected : emailRight,
  },
];

import pageLeft from "../../assets/imgs/pageLeft.png";
import pageLeftSelected from "../../assets/imgs/pageLeftSelected.png";
import pageCenter from "../../assets/imgs/pageCenter.png";
import pageCenterSelected from "../../assets/imgs/pageCenterSelected.png";
import pageRight from "../../assets/imgs/pageRight.png";
import pageRightSelected from "../../assets/imgs/pageRightSelected.png";

export const pageData = (active) => [
  {
    id: 1,
    value: "left",
    img: active === "left" ? pageLeftSelected : pageLeft,
  },
  {
    id: 2,
    value: "center",
    img: active === "center" ? pageCenterSelected : pageCenter,
  },
  {
    id: 3,
    value: "right",
    img: active === "right" ? pageRightSelected : pageRight,
  },
];
