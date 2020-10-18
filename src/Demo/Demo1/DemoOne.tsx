import React from "react";
import { Link } from "react-router-dom";
import * as wjGrid from "@grapecity/wijmo.react.grid";
import { CollectionView } from "@grapecity/wijmo";
import "./DemoOne.css";
import { data1, data2 } from "./data";
import "@grapecity/wijmo.styles/wijmo.css";
import { initializeGrid } from "./methodA";

//将数组data2展开，放入数组1
let tableData = [];
  tableData.push(...data1);
  tableData.push(...data2);
//将合并后的数组生成flexGrid的试图数据
export let dataTable = new CollectionView(tableData);
//     const dataNew: any = {
//       country: 'c1',
//       downloads: 'c2',
//       sales: 'c3',
//       expenses: 'c4',
//     }
// let newItem = dataTable.addNew();
// newItem.country = dataNew.country;
// dataTable.commitNew()

function DemoOne() {
  return (
    <div className="container-fluid">
      <h1>Hello DemoOne</h1>

      <div className="table">
        <wjGrid.FlexGrid
          itemsSource={data1} //テーブルに表示用データ
          // allowAddNew={true} //テーブルの最後に1行データを追加することができる
          showSort={true}
          initialized={initializeGrid.bind(wjGrid.FlexGrid)}
          // allowSorting={false}
          alternatingRowStep={1}
          // headersVisibility="Column"
        ></wjGrid.FlexGrid>
        <wjGrid.FlexGrid
          itemsSource={dataTable} //テーブルに表示用データ
          allowAddNew={true} //テーブルの最後に1行データを追加することができる
          showSort={true}
          // allowSorting={false}
          alternatingRowStep={1}
          // headersVisibility="Column"
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
