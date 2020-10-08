import React from "react";
import { Link } from "react-router-dom";
import * as wjGrid from "@grapecity/wijmo.react.grid";
import "./DemoOne.css";
import { data } from "./data";
import "@grapecity/wijmo.styles/wijmo.css";
import { initializeGrid } from "./methodA";
// export const addButton = () => {
//   //   var bt: any = document.getElementById("btn");
//   //   bt.addEventListener("click", () => {
//   alert("test");
//   //   });
// };
function DemoOne() {
  return (
    <div className="container-fluid">
      <h1>Hello DemoOne</h1>

      <div className="table">
        <wjGrid.FlexGrid
          itemsSource={data} //テーブルに表示用データ
          allowAddNew={true} //テーブルの最後に1行データを追加することができる
          showSort={true}
          initialized={initializeGrid.bind(wjGrid.FlexGrid)}
          // allowSorting={false}
          alternatingRowStep={1}
          // headersVisibility="Column"
        ></wjGrid.FlexGrid>
        <wjGrid.FlexGrid
          itemsSource={data} //テーブルに表示用データ
          allowAddNew={true} //テーブルの最後に1行データを追加することができる
          showSort={true}
          // allowSorting={false}
          alternatingRowStep={1}
          headersVisibility="Column"
        ></wjGrid.FlexGrid>
      </div>

      <Link to="/">
        <h3>Back Home Page</h3>
      </Link>
      <button id="btn" className="tt">
        {/* // onClick={addButton} */}
        <h2>test</h2>
      </button>
    </div>
  );
}

export default DemoOne;
