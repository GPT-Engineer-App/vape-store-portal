import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Products from "./components/Products.jsx";

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
];

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/products" element={<Products products={products} />} />
      </Routes>
    </Router>
  );
}

export default App;
