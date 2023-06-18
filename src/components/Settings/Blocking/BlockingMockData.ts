import userImage1 from "../../../assets/images/users/user-2.svg";
import userImage2 from "../../../assets/images/users/user-3.svg";
import userImage3 from "../../../assets/images/users/user-4.svg";

// Interfaces
import { IACHIVEMENTSTABLEDATA } from "./BlockingInterface";

export const ACHIVEMENTTABSDATA = [
  {
    key: "",
    label: ``,
    image:""
  },
];

export const ACHIVEMENTTABLEDATA: IACHIVEMENTSTABLEDATA[] = [
  {
    key: "1",
    userName: [
      {
        key: "1a",
        name: `Ali`,
        image: userImage1,
      },
      {
        key: "2a",
        name: `Nizam`,
        image: userImage2,
      },
      {
        key: "3a",
        name: `Ahmed`,
        image: userImage1,
      },
      {
        key: "4a",
        name: `Zahir`,
        image: userImage3,
      },
    ],
    domainName: "www.youtube.com",
  },
  {
    key: "2",
    team: "Clocklog",
    userName: [
      {
        key: "11a",
        name: `Ali`,
        image: userImage3,
      },
      {
        key: "22a",
        name: `Nizam`,
        image: userImage2,
      },
      {
        key: "33a",
        name: `Ahmed`,
        image: userImage1,
      },
      {
        key: "44a",
        name: `Zahir`,
        image: userImage2,
      },
    ],
    domainName: "www.google.com",
  },
  {
    key: "3",
    userName: [
      {
        key: "12a",
        name: `Ali1`,
        image: userImage1,
      },
      {
        key: "221a",
        name: `Nizam1`,
        image: userImage1,
      },
      {
        key: "331a",
        name: `Ahmed`,
        image: userImage1,
      },
      {
        key: "442a",
        name: `Zahir`,
        image: userImage1,
      },
    ],
    domainName: "www.clickup.com",
  },
];
