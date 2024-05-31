import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const headstyle = { color: "red", fontSize: "50px" };
  return (
    <header style={headstyle} className="header">
      Pizzario, the pizza house
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        imageurl="pizzas/spinaci.jpg"
        price={100}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Panner, Tomato, mozarella, spinach, and ricotta cheese"
        imageurl="pizzas/funghi.jpg"
        price={120}
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        imageurl="pizzas/spinaci.jpg"
        price={100}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Panner, Tomato, mozarella, spinach, and ricotta cheese"
        imageurl="pizzas/funghi.jpg"
        price={120}
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        imageurl="pizzas/spinaci.jpg"
        price={100}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Panner, Tomato, mozarella, spinach, and ricotta cheese"
        imageurl="pizzas/funghi.jpg"
        price={120}
      />
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.imageurl} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 10}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closrHour = 22;
  const isOpen = hour >= openHour && hour <= closrHour;
  console.log(isOpen);

  //   if (hour >= openHour && hour <= closrHour) alert("We're currently open!");
  //   else alert("We're currently closed!");

  return (
    <footer className="footer">
      <h6>{new Date().toLocaleTimeString()}, Open now! </h6>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
