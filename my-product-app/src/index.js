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

//import Home from './Home';
import ProductDetail from "./ProductDetail";
import Report from "./Report";
import Stock from "./Stock";
import ProductCart from "./ProductCart";
import Register from "./Register";
import Comment1 from "./Comment1";
import Comment2 from "./Comment2";
import Comment3 from "./Comment3";
import Comment4 from "./Comment4";
import Comment5 from "./Comment5";
import Comment6 from "./Comment6";
import Comment7 from "./Comment7";
import Comment8 from "./Comment8";
import Comment9 from "./Comment9";
import Comment10 from "./Comment10";
import Comment11 from "./Comment11";
import Comment12 from "./Comment12";
import Comment13 from "./Comment13";
import Comment14 from "./Comment14";
import Comment15 from "./Comment15";
import Comment16 from "./Comment16";
import Comment17 from "./Comment17";
import Comment18 from "./Comment18";
import Comment19 from "./Comment19";
import Comment20 from "./Comment20";
import Comment21 from "./Comment21";
import Comment22 from "./Comment22";
import Comment23 from "./Comment23";
import Comment24 from "./Comment24";
import Cart from "./cart";

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
      <Route path="/product/cart" element={<ProductCart />} />
      <Route path="/comment/add/1" element={<Comment1 />} />
      <Route path="/comment/add/2" element={<Comment2 />} />
      <Route path="/comment/add/3" element={<Comment3 />} />
      <Route path="/comment/add/4" element={<Comment4 />} />
      <Route path="/comment/add/5" element={<Comment5 />} />
      <Route path="/comment/add/6" element={<Comment6 />} />
      <Route path="/comment/add/7" element={<Comment7 />} />
      <Route path="/comment/add/8" element={<Comment8 />} />
      <Route path="/comment/add/9" element={<Comment9 />} />
      <Route path="/comment/add/10" element={<Comment10 />} />
      <Route path="/comment/add/11" element={<Comment11 />} />
      <Route path="/comment/add/12" element={<Comment12 />} />
      <Route path="/comment/add/13" element={<Comment13 />} />
      <Route path="/comment/add/14" element={<Comment14 />} />
      <Route path="/comment/add/15" element={<Comment15 />} />
      <Route path="/comment/add/16" element={<Comment16 />} />
      <Route path="/comment/add/17" element={<Comment17 />} />
      <Route path="/comment/add/18" element={<Comment18 />} />
      <Route path="/comment/add/19" element={<Comment19 />} />
      <Route path="/comment/add/20" element={<Comment20 />} />
      <Route path="/comment/add/21" element={<Comment21 />} />
      <Route path="/comment/add/22" element={<Comment22 />} />
      <Route path="/comment/add/23" element={<Comment23 />} />
      <Route path="/comment/add/24" element={<Comment24 />} />
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
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
