import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./Login";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./Project_01";
import Page01 from "./Page01";
import Page02 from "./Page02";
import Page03 from "./Page03";
import Page04 from "./Page04";
import Game01 from "./game_01";
import Game02 from "./game_02";
import Game03 from "./game_03";
import Game04 from "./game_04";
import Game05 from "./game_05";
import Game06 from "./game_06";
import Game07 from "./game_07";
import Game08 from "./game_08";
import Game09 from "./game_09";
import Game10 from "./game_10";
import Game11 from "./game_11";
import Game12 from "./game_12";
import Game13 from "./game_13";
import Game14 from "./game_14";
import Game15 from "./game_15";
import Game16 from "./game_16";
import Game17 from "./game_17";
import Game18 from "./game_18";
import Game19 from "./game_19";
import Game20 from "./game_20";
import Game21 from "./game_21";
import Game22 from "./game_22";
import Game23 from "./game_23";
import Game24 from "./game_24";
import ProductDetail from "./ProductDetail";
import Report from "./Report";
import Stock from "./Stock";
import ProductCart from "./ProductCart";
import Register from "./Register";
import Cart from "./cart";
import UserInfo from "./user_info";
import ProductType from "./product_type";
import Contact from "./contact";
import ContactDetail from "./ContactDetail";
import CommentDetail from "./CommentDetail";
import User from "./User";
import UserDetail from "./UserDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Project />} />
      <Route path="/page01" element={<Page01 />} />
      <Route path="/page02" element={<Page02 />} />
      <Route path="/page03" element={<Page03 />} />
      <Route path="/page04" element={<Page04 />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/comment/add" element={<CommentDetail />} />

      <Route path="/contact/:contactId" element={<ContactDetail />} />
      <Route path="/product/cart" element={<ProductCart />} />
      <Route path="report" element={<Report />} />
      <Route path="stock" element={<Stock />} />
      <Route path="/game_1" element={<Game01 />} />
      <Route path="/game_2" element={<Game02 />} />
      <Route path="/game_3" element={<Game03 />} />
      <Route path="/game_4" element={<Game04 />} />
      <Route path="/game_5" element={<Game05 />} />
      <Route path="/game_6" element={<Game06 />} />
      <Route path="/game_7" element={<Game07 />} />
      <Route path="/game_8" element={<Game08 />} />
      <Route path="/game_9" element={<Game09 />} />
      <Route path="/game_10" element={<Game10 />} />
      <Route path="/game_11" element={<Game11 />} />
      <Route path="/game_12" element={<Game12 />} />
      <Route path="/game_13" element={<Game13 />} />
      <Route path="/game_14" element={<Game14 />} />
      <Route path="/game_15" element={<Game15 />} />
      <Route path="/game_16" element={<Game16 />} />
      <Route path="/game_12" element={<Game12 />} />
      <Route path="/game_13" element={<Game13 />} />
      <Route path="/game_14" element={<Game14 />} />
      <Route path="/game_15" element={<Game15 />} />
      <Route path="/game_16" element={<Game16 />} />
      <Route path="/game_17" element={<Game17 />} />
      <Route path="/game_18" element={<Game18 />} />
      <Route path="/game_19" element={<Game19 />} />
      <Route path="/game_20" element={<Game20 />} />
      <Route path="/game_21" element={<Game21 />} />
      <Route path="/game_22" element={<Game22 />} />
      <Route path="/game_23" element={<Game23 />} />
      <Route path="/game_24" element={<Game24 />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/user_info" element={<UserInfo />} />
      <Route path="/product_type" element={<ProductType />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ContactDetail" element={<ContactDetail />} />
      <Route path="/api/user" element={<User />} />
      <Route path="/api/user/:userId" element={<UserDetail />} />

      <Route path="/api/user" element={<User />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
