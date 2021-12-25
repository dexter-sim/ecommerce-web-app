import rx6800xtimg from "./images/rx-6800-xt.png";
import rtx3070img from "./images/rtx-3070.png";
import rtx3090img from "./images/rtx-3090.png";
import ryzen5img from "./images/ryzen5.png";
import ryzen7img from "./images/ryzen7.png";
import ryzen9img from "./images/ryzen9.png";
import rgbimg from "./images/trident-z-rgb.png";
import royalimg from "./images/trident-z-royal.png";
import z5img from "./images/trident-z5.png";

import ryzenbanner from "./images/ryzen-banner.webp";
import nvidiabanner from "./images/nvidia-3090.png";
import razerbanner from "./images/razer.png";

export const sliderItems = [
  {
    id: "slide0",
    img: nvidiabanner,
    title: "GeForce RTX 3090",
    desc: "Now Available",
  },
  {
    id: "slide1",
    img: ryzenbanner,
    title: "Ryzen 5000-Series Processors",
    desc: "Now Available",
  },
  {
    id: "slide2",
    img: razerbanner,
    title: "Razer Quartz Collection",
    desc: "Coming Soon",
  },
];

export const productItems = [
  {
    index: 0,
    id: "ryzen-5-5600x",
    img: ryzen5img,
    title: "AMD Ryzen 5 5600X",
    desc: "6-core, 12-thread CPU",
    price: 299,
    count: 0,
    cat: 0,
  },
  {
    index: 1,
    id: "ryzen-7-5800x",
    img: ryzen7img,
    title: "AMD Ryzen 7 5800X",
    desc: "8-core, 16-thread CPU",
    price: 449,
    count: 0,
    cat: 0,
  },
  {
    index: 2,
    id: "ryzen-9-5950x",
    img: ryzen9img,
    title: "AMD Ryzen 9 5950X",
    desc: "16-core, 32-thread CPU",
    price: 799,
    count: 0,
    cat: 0,
  },
  {
    index: 3,
    id: "rtx-3070",
    img: rtx3070img,
    title: "NVIDIA GeForce RTX 3070",
    desc: "1440p Gaming",
    price: 499,
    count: 0,
    cat: 1,
  },
  {
    index: 4,
    id: "rtx-3090",
    img: rtx3090img,
    title: "NVIDIA GeForce RTX 3090",
    desc: "4K Gaming",
    price: 1499,
    count: 0,
    cat: 1,
  },
  {
    index: 5,
    id: "rx-6800-xt",
    img: rx6800xtimg,
    title: "Radeon RX 6800 XT",
    desc: "4K Gaming",
    price: 649,
    count: 0,
    cat: 1,
  },
  {
    index: 6,
    id: "trident-z-rgb",
    img: rgbimg,
    title: "G.SKILL Trident Z RGB",
    desc: "2x8GB DDR4",
    price: 99,
    count: 0,
    cat: 2,
  },
  {
    index: 7,
    id: "trident-z-royal",
    img: royalimg,
    title: "G.SKILL Trident Z Royal",
    desc: "2x8GB DDR4",
    price: 119,
    count: 0,
    cat: 2,
  },
  {
    index: 8,
    id: "trident-z5",
    img: z5img,
    title: "G.SKILL Trident Z5",
    desc: "2x16GB DDR5",
    price: 299,
    count: 0,
    cat: 2,
  },
];
