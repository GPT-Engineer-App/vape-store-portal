import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Products from "./components/Products.jsx";
import Header from "./components/Header.jsx";
import Cart from "./pages/Cart.jsx";

const products = [
  {
    name: "crown simply mint",
    price: "26.99",
    brand: "AL FAKHER",
  },
  {
    name: "crown lush ice",
    price: "26.99",
    brand: "AL FAKHER",
  },
  {
    name: "crown mango ice",
    price: "26.99",
    brand: "AL FAKHER",
  },
  {
    name: "crown two apple",
    price: "26.99",
    brand: "AL FAKHER",
  },
  {
    name: "crown peach ice",
    price: "26.99",
    brand: "AL FAKHER",
  },
  {
    name: "crown strawberry punch",
    price: "26.99",
    brand: "AL FAKHER",
  },
  {
    name: "crown blue raspberry lemon",
    price: "26.99",
    brand: "AL FAKHER",
  },
  {
    name: "crown blueberry chew",
    price: "26.99",
    brand: "AL FAKHER",
  },
  {
    name: "Crown Cherry raspberry",
    price: "26.99",
    brand: "AL FAKHER",
  },
  {
    name: "Crown lemon mint",
    price: "26.99",
    brand: "AL FAKHER",
  },
  {
    name: "crown chew mint",
    price: "26.99",
    brand: "AL FAKHER",
  },
  {
    name: "crown lucid dream",
    price: "26.99",
    brand: "AL FAKHER",
  },
  {
    name: "crown grape mint",
    price: "26.99",
    brand: "AL FAKHER",
  },
  {
    name: "crown berry mint",
    price: "26.99",
    brand: "AL FAKHER",
  },
  {
    name: "Crown white flash",
    price: "26.99",
    brand: "AL FAKHER",
  },
  {
    name: "Breeze Smoke Pro - Straw Kiwi",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "60ml juice",
    price: "29.99",
    brand: "",
  },
  {
    name: "30 ml juice",
    price: "24.99",
    brand: "",
  },
  {
    name: "ARCHER 12000 spearmint",
    price: "25.99",
    brand: "ARCHER",
  },
  {
    name: "ARCHER 12000 Strawberry Kiwi",
    price: "25.99",
    brand: "ARCHER",
  },
  {
    name: "ARCHER 12000 watermelon kiwi berry",
    price: "25.99",
    brand: "ARCHER",
  },
  {
    name: "ARCHER 12000 wigly",
    price: "25.99",
    brand: "ARCHER",
  },
  {
    name: "ARCHER 12000 blue razz",
    price: "25.99",
    brand: "ARCHER",
  },
  {
    name: "ARCHER 12000 peach mango watermelon",
    price: "25.99",
    brand: "ARCHER",
  },
  {
    name: "ARCHER 12000 cherry cola",
    price: "25.99",
    brand: "ARCHER",
  },
  {
    name: "ARCHER 12000 Lemon Lime",
    price: "25.99",
    brand: "ARCHER",
  },
  {
    name: "Archer 12000 Strawberry Banana",
    price: "25.99",
    brand: "ARCHER",
  },
  {
    name: "ARCHER 12000 kiwi passion fruit guava",
    price: "25.99",
    brand: "ARCHER",
  },
  {
    name: "ARCHER 12000 purple wings",
    price: "25.99",
    brand: "ARCHER",
  },
  {
    name: "ARCHER 12000 watermelon ice",
    price: "25.99",
    brand: "ARCHER",
  },
  {
    name: "DUMMY VAPES 8000 BLUEBERRY ICE",
    price: "21.99",
    brand: "DUMMY VAPES",
  },
  {
    name: "Dummy Vape 8K Grape",
    price: "21.99",
    brand: "DUMMY VAPES",
  },
  {
    name: "Dummy Vape 8K SMW",
    price: "21.99",
    brand: "DUMMY VAPES",
  },
  {
    name: "DUMMY VAPES 8000 SOUR BLUE RAZZ",
    price: "21.99",
    brand: "DUMMY VAPES",
  },
  {
    name: "Dummy Vapes 8K Banana",
    price: "21.99",
    brand: "DUMMY VAPES",
  },
  {
    name: "Breeze Smoke Pro - Strawberry Banana",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Peach Mango",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Root",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "breeze smoke Pro - tobacco",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Banana Coconut",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Strawberry Lime Acai",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Pineapple PassionFruit",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Grape Blackcurrant",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Cherry Fizz",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Cherry Lemon",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Chew Mint",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Grape S",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Lemon Mint",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Blue Raspberry",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Mint",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Pina",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Raspberry Lemon",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Rush",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "Breeze Smoke Pro - Strawberry Peach Mint",
    price: "21.99",
    brand: "BREEZE PRO",
  },
  {
    name: "breeze prime peach berry",
    price: "26.99",
    brand: "BREEZE PRIME",
  },
  {
    name: "breeze prime mint",
    price: "26.99",
    brand: "BREEZE PRIME",
  },
  {
    name: "breeze prime strawberry mint",
    price: "26.99",
    brand: "BREEZE PRIME",
  },
  {
    name: "breeze prime cherry lemon",
    price: "26.99",
    brand: "BREEZE PRIME",
  },
  {
    name: "breeze prime honeydew pineapple",
    price: "26.99",
    brand: "BREEZE PRIME",
  },
  {
    name: "breeze prime strawberry apple",
    price: "26.99",
    brand: "BREEZE PRIME",
  },
  {
    name: "breeze prime banana coconut",
    price: "26.99",
    brand: "BREEZE PRIME",
  },
  {
    name: "breeze prime juicy peach ice",
    price: "26.99",
    brand: "BREEZE PRIME",
  },
  {
    name: "breeze prime grape",
    price: "26.99",
    brand: "BREEZE PRIME",
  },
  {
    name: "breeze prime double apple",
    price: "26.99",
    brand: "BREEZE PRIME",
  },
  {
    name: "breeze elite kiwi dragon berry",
    price: "24.99",
    brand: "BREEZE ELITE",
  },
  {
    name: "breeze elite apple cranberry",
    price: "24.99",
    brand: "BREEZE ELITE",
  },
  {
    name: "breeze elite black cherry",
    price: "24.99",
    brand: "BREEZE ELITE",
  },
  {
    name: "Breeze elite cherry lemon",
    price: "24.99",
    brand: "BREEZE ELITE",
  },
  {
    name: "breeze elite raspberry watermelon",
    price: "24.99",
    brand: "BREEZE ELITE",
  },
  {
    name: "breeze elite cherry watermelon",
    price: "24.99",
    brand: "BREEZE ELITE",
  },
  {
    name: "breeze elite punch ice",
    price: "24.99",
    brand: "BREEZE ELITE",
  },
  {
    name: "breeze elite strawberry pineapple ice",
    price: "24.99",
    brand: "BREEZE ELITE",
  },
  {
    name: "breeze elite raspberry peach ice",
    price: "24.99",
    brand: "BREEZE ELITE",
  },
  {
    name: "breeze elite blue raspberry",
    price: "24.99",
    brand: "BREEZE ELITE",
  },
  {
    name: "breeze elite strawberry banana",
    price: "24.99",
    brand: "BREEZE ELITE",
  },
  {
    name: "Breeze Elite 4000 - Orange Pineapple Tangerine",
    price: "24.99",
    brand: "BREEZE ELITE",
  },
  {
    name: "beast mode bomb blue razz",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode busin' banana",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode extreme mint",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode flippin' fruit flash",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast Mode groovy grape passionfruit",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast Mode gusto green apple",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode mad mango",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode sic strawberry",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode slammin' sts",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode super spearmint",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode trippin' triple berry",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode vc delight",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode weekend watermelon",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode wild white grape",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode bangin' blood orange",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode blazin' banana blackberry",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode dope double kiwi",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode grapplin' grape sour apple",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode hip honeydew mango",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode rad razz melon",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode ragin' razz mango",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode str8 up strawberry banana",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode super sour blueberry",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "beast mode watermelon G melonmania",
    price: "25.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "Zpods Chew",
    price: "15.99",
    brand: "Z-PODS",
  },
  {
    name: "zpods watermelon ice",
    price: "15.99",
    brand: "Z-PODS",
  },
  {
    name: "ZPods 20 mg Blue Raspberry",
    price: "15.99",
    brand: "Z-PODS",
  },
  {
    name: "Zpods Pink Lemon",
    price: "15.99",
    brand: "Z-PODS",
  },
  {
    name: "ZPods Berry Mix",
    price: "15.99",
    brand: "Z-PODS",
  },
  {
    name: "ZPods Blue Lemon",
    price: "15.99",
    brand: "Z-PODS",
  },
  {
    name: "Stlth Device Black",
    price: "14.49",
    brand: "STLTH",
  },
  {
    name: "Stlth Device Sliver",
    price: "14.49",
    brand: "STLTH",
  },
  {
    name: "Stlth Device Grey",
    price: "14.49",
    brand: "STLTH",
  },
  {
    name: "Stlth Device Navy",
    price: "14.49",
    brand: "STLTH",
  },
  {
    name: "Stlth Device Blue",
    price: "14.49",
    brand: "STLTH",
  },
  {
    name: "stlth device gold",
    price: "14.49",
    brand: "STLTH",
  },
  {
    name: "Stlth Device Olive",
    price: "14.49",
    brand: "STLTH",
  },
  {
    name: "Stlth Device Champagne",
    price: "14.49",
    brand: "STLTH",
  },
  {
    name: "Stlth Device Red",
    price: "14.49",
    brand: "STLTH",
  },
  {
    name: "Stlth Device Orange",
    price: "14.49",
    brand: "STLTH",
  },
  {
    name: "stlth titan double berry twist ice",
    price: "28.99",
    brand: "STLTH TITAN",
  },
  {
    name: "stlth titan green apple ice",
    price: "28.99",
    brand: "STLTH TITAN",
  },
  {
    name: "stlth titan juicy peach ice",
    price: "28.99",
    brand: "STLTH TITAN",
  },
  {
    name: "stlth titan mango peach apricot ice",
    price: "28.99",
    brand: "STLTH TITAN",
  },
  {
    name: "stlth titan pineapple blueberry kiwi ice",
    price: "28.99",
    brand: "STLTH TITAN",
  },
  {
    name: "stlth titan punch ice",
    price: "28.99",
    brand: "STLTH TITAN",
  },
  {
    name: "stlth titan quad berry ice",
    price: "28.99",
    brand: "STLTH TITAN",
  },
  {
    name: "stlth titan razz apple ice",
    price: "28.99",
    brand: "STLTH TITAN",
  },
  {
    name: "stlth titan smooth mint",
    price: "28.99",
    brand: "STLTH TITAN",
  },
  {
    name: "stlth titan smooth tobacco",
    price: "28.99",
    brand: "STLTH TITAN",
  },
  {
    name: "stlth titan strawnana ice",
    price: "28.99",
    brand: "STLTH TITAN",
  },
  {
    name: "stlth titan white grape",
    price: "28.99",
    brand: "STLTH TITAN",
  },
  {
    name: "STLTH 8K Rich Tobacco",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Strawberry Lime Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Tropical Storm Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "stlth 8k watermelon lime ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K white Grape Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "Zpods Cherry Watermelon",
    price: "15.99",
    brand: "Z-PODS",
  },
  {
    name: "ZPods 20 mg strawberry Apple Watermelon",
    price: "15.99",
    brand: "Z-PODS",
  },
  {
    name: "zpods fruit punch watermelon ice",
    price: "15.99",
    brand: "Z-PODS",
  },
  {
    name: "ZPods 20 mg wiggly b ice",
    price: "15.99",
    brand: "Z-PODS",
  },
  {
    name: "ZPods 20 mg burst ice",
    price: "15.99",
    brand: "Z-PODS",
  },
  {
    name: "zpods pineapple",
    price: "15.99",
    brand: "Z-PODS",
  },
  {
    name: "ZPods Banana Iced",
    price: "15.99",
    brand: "Z-PODS",
  },
  {
    name: "zpods cranberry lemon",
    price: "15.99",
    brand: "Z-PODS",
  },
  {
    name: "ZPods 20 mg Fruit Punch Lem",
    price: "15.99",
    brand: "Z-PODS",
  },
  {
    name: "HQD 7K Grape Pomegranate",
    price: "25.99",
    brand: "HQD",
  },
  {
    name: "Stlth 8k Kiwi Dragon Berry Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Apple Berry Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Arctic Mint",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K BlackBerry Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Blue Razz Lemon Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Citrus Burst Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Dragon Mango Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Flavourless",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Green Apple Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Hawaiian Mist Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Ice Mint",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Juicy Peach Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Lychee Melon Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Peach Blue Razz Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Peach Mango Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Punch Ice",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "STLTH 8K Quad Berry",
    price: "26.49",
    brand: "STLTH 8K",
  },
  {
    name: "HQD Caribbean White",
    price: "25.99",
    brand: "HQD",
  },
  {
    name: "HQD Strawberry Watermelon",
    price: "25.99",
    brand: "HQD",
  },
  {
    name: "HQD Berrylicious",
    price: "25.99",
    brand: "HQD",
  },
  {
    name: "HQD Peach Ice",
    price: "25.99",
    brand: "HQD",
  },
  {
    name: "HQD 7K Mango Peach",
    price: "25.99",
    brand: "HQD",
  },
  {
    name: "HQD 7K Grape",
    price: "25.99",
    brand: "HQD",
  },
  {
    name: "HQD 7K Strawberry Watermelon",
    price: "25.99",
    brand: "HQD",
  },
  {
    name: "HQD 7K Blueberry Watermelon",
    price: "25.99",
    brand: "HQD",
  },
  {
    name: "HQD 7K Blueberry Banana",
    price: "25.99",
    brand: "HQD",
  },
  {
    name: "HQD 7K Blue Raspberry",
    price: "25.99",
    brand: "HQD",
  },
  {
    name: "HQD 7K Watermelon Ice",
    price: "25.99",
    brand: "HQD",
  },
  {
    name: "HQD 7K Peach Ice",
    price: "25.99",
    brand: "HQD",
  },
  {
    name: "HQD 7K GRAPE POMEGRANATE ICE",
    price: "25.99",
    brand: "HQD",
  },
  {
    name: "HQD 7K Caribbean White",
    price: "25.99",
    brand: "HQD",
  },
  {
    name: "ELFBAR BC10000 Blue Razz Ice",
    price: "26.99",
    brand: "ELFBAR",
  },
  {
    name: "ELFBAR BC10000 Blueberry Mint",
    price: "26.99",
    brand: "ELFBAR",
  },
  {
    name: "ELFBAR BC10000 Cherry Watermelon",
    price: "26.99",
    brand: "ELFBAR",
  },
  {
    name: "ELFBAR BC10000 Grape Cherry",
    price: "26.99",
    brand: "ELFBAR",
  },
  {
    name: "ELFBAR BC10000 Peach Mango",
    price: "26.99",
    brand: "ELFBAR",
  },
  {
    name: "ELFBAR BC10000 Red Berry Cherry",
    price: "26.99",
    brand: "ELFBAR",
  },
  {
    name: "ELFBAR BC10000 Strawberry Kiwi Ice",
    price: "26.99",
    brand: "ELFBAR",
  },
  {
    name: "ELFBAR BC10000 Double Mango",
    price: "26.99",
    brand: "ELFBAR",
  },
  {
    name: "ELFBAR BC10000 Grape Ice",
    price: "26.99",
    brand: "ELFBAR",
  },
  {
    name: "ELFBAR BC10000 Peach Ice",
    price: "26.99",
    brand: "ELFBAR",
  },
  {
    name: "ELFBAR BC10000 Strawberry Ice",
    price: "26.99",
    brand: "ELFBAR",
  },
  {
    name: "ELFBAR BC10000 Watermelon Ice",
    price: "26.99",
    brand: "ELFBAR",
  },
  {
    name: "ELFBAR BC10000 Blueberry Cloudz",
    price: "26.99",
    brand: "ELFBAR",
  },
  {
    name: "ELFBAR BC10000 Fuji Ice",
    price: "26.99",
    brand: "ELFBAR",
  },
  {
    name: "ELFBAR BC10000 Miami Mint",
    price: "26.99",
    brand: "ELFBAR",
  },
  {
    name: "ICEWAVE S50 Strawberry Dream",
    price: "26.99",
    brand: "ICE WAVE",
  },
  {
    name: "genie air max - cherry lemon",
    price: "11.99",
    brand: "GENIE",
  },
  {
    name: "genie air max - raspberry strawberry lemonade",
    price: "11.99",
    brand: "GENIE",
  },
  {
    name: "genie air max - c hearts",
    price: "11.99",
    brand: "GENIE",
  },
  {
    name: "genie air max - fruit berry",
    price: "11.99",
    brand: "GENIE",
  },
  {
    name: "genie air max - mango pineapple ice",
    price: "11.99",
    brand: "GENIE",
  },
  {
    name: "Icewave S50 Blue Razz Ice",
    price: "26.99",
    brand: "ICE WAVE",
  },
  {
    name: "Icewave S50 Honeydew Watermelon",
    price: "26.99",
    brand: "ICE WAVE",
  },
  {
    name: "Icewave S50 Fresh Mint",
    price: "26.99",
    brand: "ICE WAVE",
  },
  {
    name: "Dummy Vapes 8K Mixed Berries",
    price: "21.99",
    brand: "DUMMY VAPES",
  },
  {
    name: "Dummy Vapes 8K Raspberry Peach Lime Ice",
    price: "21.99",
    brand: "DUMMY VAPES",
  },
  {
    name: "Dummy Vapes 8K Fruit Burst",
    price: "21.99",
    brand: "DUMMY VAPES",
  },
  {
    name: "Dummy Vapes 8K Wiggly B",
    price: "21.99",
    brand: "DUMMY VAPES",
  },
  {
    name: "Dummy Vapes 8K Pink Lemon",
    price: "21.99",
    brand: "DUMMY VAPES",
  },
  {
    name: "Palm 7000 - Blue Razz Ice",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Pop Hit Palm 7000 - Cali Cherry",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7000 - Double Apple",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7000 - Tropical Clouds",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7000 - PassionFruit Kiwi Lime",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7000 - Peach Mango Watermelon",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7000 - Poppin Peach",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7000 - Watermelon Ice",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Pop Hit Palm 7000 - Pink Lemon",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7000 - Pearl Grape",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7000 - Strawberry Banana",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7000 - Super Berry",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7000 - Mix Fruit Blast",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7000 - Grape Raspberry",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7000 - Strawberry Kiwi",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7K Banana Ice",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "PALM 7K - grape ice",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7K Mango Lychee",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7K Strawberry Mango",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "Palm 7K Tropical Blue Razz",
    price: "19.99",
    brand: "POP HIT",
  },
  {
    name: "level x boost bomb blue razz",
    price: "19.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x boost bangin blood orange",
    price: "19.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x boost bussin banana",
    price: "19.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x boost super sour blueberry",
    price: "19.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x boost extreme mint",
    price: "19.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x boost flippin fruit flash",
    price: "19.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x boost groovy grape passion fruit",
    price: "19.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x boost gusto green apple",
    price: "19.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x boost mad mango peach",
    price: "19.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x boost packin peach berry",
    price: "19.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x boost ragin razz mango",
    price: "19.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x boost sic strawberry",
    price: "19.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x boost slammin sts",
    price: "19.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x boost weekend watermelon",
    price: "19.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x boost wild white grape",
    price: "19.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x device black",
    price: "9.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x device grey",
    price: "9.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x device white",
    price: "9.99",
    brand: "FLAVOUR BEAST",
  },
  {
    name: "level x device red",
    price: "9.99",
    brand: "FLAVOUR BEAST",
  },
];

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
