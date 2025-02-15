import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const productsData = [
  {
    name: "Zebronics Soundbar",
    desc: "ZEB_JUKE BAR 9400 Pro Dolby 5.1 (525 Watt)",
    price: 6000,
    photoName: "products/zebbar.jpg",
    soldOut: false,
    qnty: 1,
  },
  {
    name: "Sony Headphones",
    desc: "Sony MDR-ZX110AP Headphones",
    price: 600,
    photoName: "products/sonyheadphone.jpg",
    soldOut: false,
    qnty: 1,
  },
  {
    name: "Verity",
    desc: "A classic bestseller edition by Colleen Hoover",
    price: 150,
    photoName: "products/ch_verity.jpg",
    soldOut: false,
    qnty: 1,
  },
  {
    name: "The Boy with a Broken Heart",
    desc: "It's the 2nd book of The Boy Series by Durjoy Datta",
    price: 150,
    photoName: "products/dd_brokenheart.jpg",
    soldOut: false,
    qnty: 1,
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
  //const styleHead = { color: "blue", fontSize: "50px", transform: "uppercase" };
  const styleHead = {};
  return (
    <header className="header">
      <h1 style={styleHead}>Resell Co.</h1>
    </header>
  );
}

function Menu() {
  const numProducts = productsData.length;
  return (
    <main className="menu">
      <h2>Our Products</h2>

      {numProducts > 0 ? (
        <>
          <p>
            We are serving you the used products, but those looks same as new
            with original packaging to give you like a new unboxing experience.
          </p>

          <ul className="products">
            {productsData.map((product) => (
              <Products productObj={product} key={product.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          Sorry, No products anymore. But wait, will get something soon for you
          !
        </p>
      )}
      {/*<Products
        name="Zebronics Soundbar"
        desc="Description"
        pic="products/zebbar.jpg"
        price={6000}
      />
      <Products />
      <Products />
      <Products />*/}
    </main>
  );
}

function Products({ productObj }) {
  return (
    <li className={`product ${productObj.qnty < 1 ? "sold-out" : ""}`}>
      <img
        className="pics"
        src={productObj.photoName}
        alt={productObj.name}
      ></img>
      <div>
        <h3>{productObj.name}</h3>
        <p>{productObj.desc}</p>

        {productObj.qnty < 1 ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{productObj.price}₹</span>
        )}
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      Created with ❤️ by Connex and currently it's{" "}
      {new Date().toLocaleTimeString()}
    </footer>
  );
  // return React.createElement("footer", null, "Created with ❤️ by Connex");
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);