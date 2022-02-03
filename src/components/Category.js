import React, { useState, useEffect } from "react";
import "./Category.css";
import actimg1 from "../asserts/images/Action/battletankv2.png";
import actimg2 from "../asserts/images/Action/carnivalducks.png";
import actimg3 from "../asserts/images/Action/combattank.png";
import actimg4 from "../asserts/images/Action/darkshooter.png";
import actimg5 from "../asserts/images/Action/dollargrabber.png";
import actimg6 from "../asserts/images/Action/gulffighter.png";
import actimg7 from "../asserts/images/Action/homealone.png";
import actimg8 from "../asserts/images/Action/monsterhit.png";

function Category() {
  const [active, setActive] = useState(false);
  const [button, setButton] = useState("all");
  const [data, setData] = useState([]);
  // const [category , setCategory] =useState()
  // const [title , setTitle] =useState()

  useEffect(async () => {
    const data = await fetch("https://ktgamez.com/storage/games.json");
    const items = await data.json();
    setData(items);
  }, [fetch]);

  const handleClickAction = () => {
    setButton("Action");
  };
  const handleClickAll = () => {
    setButton("All");
  };
  const handleClicEducational = () => {
    setButton("Educational");
  };
  const handleClicArcade = () => {
    setButton("Arcade");
  };
  const handleClicSports = () => {
    setButton("Sports & Racing");
  };
  const handleClicPuzzle = () => {
    setButton("Puzzle");
  };

  return (
    <div className="category">
      <p className="active-category">{button} Games <hr className="line"/>
      </p>
      
      <div className="dropdown">
        <div
          className="dropdown-btn"
          onClick={() => {
            setActive(!active);
          }}
        >
          {" "}
          Categories
        </div>
        {active && (
          <div className="dropdown-content">
            <div onClick={handleClickAll} className="dropdown-item">
              All
            </div>
            <div onClick={handleClickAction} className="dropdown-item">
              Action
            </div>
            <div onClick={handleClicEducational} className="dropdown-item">
              Educational
            </div>
            <div onClick={handleClicArcade} className="dropdown-item">
              Arcade
            </div>
            <div onClick={handleClicSports} className="dropdown-item">
              Sports and Racing
            </div>
            <div onClick={handleClicPuzzle} className="dropdown-item">
              Puzzle
            </div>
          </div>
        )}
      </div>
      <div className="cards">
        {data.map((data, key) => {
          if (data.genre_name == button) {
            return (
              <div className="card-content" key={key}>
                <div className="card-img">
                  <img src={data.game_cover_url} alt="" />
                </div>
                <div className="card-inner-title">
                  <p>{data.game_name}</p>
                </div>
              </div>
            );
          } else if (button == "all") {
            return (
              <div className="card-content" key={key}>
                <div className="card-img">
                  <img src={data.game_cover_url} alt="" />
                </div>
                <div className="card-inner-title">
                  <p>{data.game_name}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Category;
