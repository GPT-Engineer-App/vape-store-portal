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
