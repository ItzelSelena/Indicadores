// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
//import img1 from "../imgs/img1.png";
import robot from "../imgs/robot.svg";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Panel",
    Path: '/',
  },
  {
    icon: UilChart,
    heading: "Estadisticas",
    Path: '/estadisticas',
  },
//    {
//      icon: UilClipboardAlt,
//    heading: "Orders",
//    Path: '/estadisticas',
//  },
 {
   icon: UilUsersAlt,
   heading: "Evaluaciones",
   Path: '/',
 },
 {
   icon: UilPackage,
   heading: 'Ayuda',
   Path: '/estadisticas',
 }
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "TDC NTB",
    color: {
      backGround: "linear-gradient(180deg, #6686A0, #6686A0)", //Aquí se cambia el COLOR de fondo  #3498db , #2980b9
      boxShadow: "0px 10px 20px 0px #e0c6f5", //original
    },
    barValue: 93.4,
    value: "93",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "México",
        data: [78, 80, 28, 51, 80, 67, 98],
      },
      {
        name: "Guadalajara",
        data: [92, 87, 40, 89, 75, 56, 78],
      }
    ],
  },
  {
    title: "TDC ETB",
    color: {
      backGround: "linear-gradient(180deg, #6686A0, #6686A0)", //Aquí se cambia el COLOR de fondo
      boxShadow: "0px 10px 20px 0px #e0c6f5",

    },
    barValue: 93.4,
    value: "93",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "México",
        data: [78, 80, 28, 51, 80, 67, 98],
      },
      {
        name: "Guadalajara",
        data: [92, 87, 40, 89, 75, 56, 78],
      }
    ],
  },
  {
    title: "BT",
    color: {
      backGround: "linear-gradient(180deg, #ECD161, #ECD161)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    //Aquí se cambia el valor de la ruedita de la gráfica
    barValue: 87.2,
    //Aquí se cambia el valor que aparece en cada carta :3 
    value: "87",
    png: UilClipboardAlt,
    //png: UilMoneyWithdrawal,
    series: [
      {
        name: "México",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
      {
        name: "Guadalajara",
        data: [92, 87, 40, 89, 75, 56, 78],
      },
    ],
  },
  {
    title: "L2",
    color: {
      backGround:
        "linear-gradient(180deg, #ECD161, #ECD161)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 93,
    value: "327 s",
    png: UilClipboardAlt,
    series: [
      {
        name: "México",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
      {
        name: "Guadalajara",
        data: [92, 87, 40, 89, 75, 56, 78],
    },
    ],
  },
  {
    title: "Nómina",
    color: {
      backGround: "linear-gradient(180deg, #ECD161, #ECD161)", //Aquí se cambia el COLOR de fondo
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 93.4,
    value: "93",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "México",
        data: [78, 80, 28, 51, 80, 67, 98],
      },
      {
        name: "Guadalajara",
        data: [92, 87, 40, 89, 75, 56, 78],
      }
    ],
  },
  {
    title: "Personales",
    color: {
      backGround: "linear-gradient(180deg, #ECD161, #ECD161)", //Aquí se cambia el COLOR de fondo
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 93.4,
    value: "93",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "México",
        data: [78, 80, 28, 51, 80, 67, 98],
      },
      {
        name: "Guadalajara",
        data: [92, 87, 40, 89, 75, 56, 78],
      }
    ],
  },
  {
    title: "Seguros",
    color: {
      backGround: "linear-gradient(180deg, #CBC970, #807F46)", //Aquí se cambia el COLOR de fondo
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 93.4,
    value: "93",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "México",
        data: [78, 80, 28, 51, 80, 67, 98],
      },
      {
        name: "Guadalajara",
        data: [92, 87, 40, 89, 75, 56, 78],
      }
    ],
  }
];

//AQUI PONEMOS EL MENSAJE DEL ROBOT :3 
export const UpdatesData = [
  {
    img: robot,
    mensaje: "Si tienes alguna duda o sugerencia sobre éste Dashboard, escribenos y el equipo de Robotics te ayudará.",
  },
  
];
// Recent Update Card Data
/*export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
*/

/*
export const UpdatesData = [
  {
    img: robot,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  
];
*/
