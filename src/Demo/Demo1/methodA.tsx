import { dataTable } from "./DemoOne"
import { data1, data2 } from "./data";

export const initializeGrid = (flex: any) => {
  // add 'edit button' to row header cells
  flex.formatItem.addHandler((s: any, e: any) => {
    if (e.panel == s.rowHeaders && e.col == 0) {
      e.cell.innerHTML = '<span class="wj-glyph-pencil"></span>';
    }
  });
  let be: any = document.getElementById("btn");
  be.addEventListener("click", (e: any) => {
    //需要添加的行新数据
    const dataNew: any = {
      country: 'c1',
      downloads: 'c2',
      sales: 'c3',
      expenses: 'c4',
    }
  // 方法1
  // 将新数据放入试图数据中，默认放入最后1行，可根据newRowAtTop属性，来设置添加后的数据位置，首尾。
  // dataTable.addNew(dataNew);
  // dataTable.commitNew();

  // 方法2 

//                    参考资料
//   原来的数组
//   var array = ["one", "two", "four"];
//   splice(position, numberOfItemsToRemove, item)
//   拼接函数(索引位置, 要删除元素的数量, 元素)
//   array.splice(2, 0, "three");
//   array;  // 现在数组是这个样子 ["one", "two", "three", "four"]

  // 既存试图の長さ
  let table = dataTable.items.length;
  // 将新的行数据，插入到data1的指定位置。
  data1.splice(2,0,dataNew);
  // 先清空视图数组
    for (let i = 0; i < table; i++){
      //此出的index是当前视图数组的索引，因为每次删除一项之后，长度会变化，所以每次只删除第一条
      const index = 0;
      dataTable.removeAt(index);
    }
  // 生成新的试图数组
    data1.forEach((e:any) => {
      dataTable.addNew(e);
    });
    // dataTable.addNew(dataNew);
    data2.forEach((e:any) => {
      dataTable.addNew(e);
    });
  // viewTable.addNew(tableData);
  // 提交新的试图数组
  dataTable.commitNew();
  });
  flex.addEventListener(flex.hostElement, "click", (e: any) => {
    let ht = flex.hitTest(e);
    if (ht.panel == flex.rowHeaders) {
      const data: number = -10;
      alert("test" + data);
    }
  });
};