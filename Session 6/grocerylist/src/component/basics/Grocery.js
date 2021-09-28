import React, {useState} from "react";
import "../style.css";
import Menu from "../List";
import ListCard from "./ListCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.type;
    })
  ),
  "All",
];

console.log(uniqueList);

const  Grocery = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (type) => {
    if (type === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.type === type;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <ListCard menuData={menuData} />
    </>
  );
};
export default Grocery;
