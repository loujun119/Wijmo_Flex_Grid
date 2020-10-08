export const initializeGrid = (flex: any) => {
  var _this = this;
  // add 'edit button' to row header cells
  flex.formatItem.addHandler((s: any, e: any) => {
    if (e.panel == s.rowHeaders && e.col == 0) {
      e.cell.innerHTML = '<span class="wj-glyph-pencil"></span>';
    }
  });
  let be: any = document.getElementById("btn");
  be.addEventListener("click", (e: any) => {
    alert("aa");
  });
  flex.addEventListener(flex.hostElement, "click", (e: any) => {
    let ht = flex.hitTest(e);
    if (ht.panel == flex.rowHeaders) {
      alert("test");
    }
  });
};
