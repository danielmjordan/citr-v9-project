import { StrictMode, useState } from "react";
import { CartContext } from "./hooks/contexts";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Order from "./components/Order";
import PizzaOfTheDay from "./partials/PizzaOfTheDay";

const App = () => {
  const cartHook = useState([]);

  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

