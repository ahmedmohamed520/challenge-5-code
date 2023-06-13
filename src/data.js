import arcadeIcon from "./assets/images/icon-arcade.svg";
import advancedIcon from "./assets/images/icon-advanced.svg";
import proIcon from "./assets/images/icon-pro.svg";
export const steps = [
    {
        id: 1,
        text: "your info",
        url: "/challenge-5/",
    },
    {
        id: 2,
        text: "select plan",
        url: "/challenge-5/plan",
    },
    {
        id: 3,
        text: "add-ons",
        url: "/challenge-5/addons",
    },
    {
        id: 4,
        text: "summary",
        url: "/challenge-5/summary",
    },
];
export const billingOptions = [
    {
        iconUrl: arcadeIcon,
        planName: "Arcade",
        monthPrice: 9,
        yearPrice: 90,
    },
    {
        iconUrl: advancedIcon,
        planName: "Advanced",
        monthPrice: 12,
        yearPrice: 120,
    },
    {
        iconUrl: proIcon,
        planName: "Pro",
        monthPrice: 15,
        yearPrice: 150,
    },
];
export const addons = [
    {
        id: 0,
        name: "Online service",
        desc: "Access to multiplayer games",
        monthPrice: 1,
        yearPrice: 10,
        isChecked: 1,
    },
    {
        id: 1,
        name: "Larger storage",
        desc: "Extra 1TB cloud save",
        monthPrice: 2,
        yearPrice: 20,
        isChecked: 1,
    },
    {
        id: 2,
        name: "Customizable profile",
        desc: "Custom theme on your profile",
        monthPrice: 2,
        yearPrice: 20,
        isChecked: 0,
    },
];
