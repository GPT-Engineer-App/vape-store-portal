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
