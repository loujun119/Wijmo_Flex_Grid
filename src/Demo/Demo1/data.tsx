export function getData1() {
  let countries = ["US", "Germany", "UK", "Japan", "Italy", "Greece"],
    data:any = [];
  //
  // for (let i = 0; i < 1000; i++) {
  //   data.push({
  //     country: countries[i % countries.length],
  //     downloads: Math.round(Math.random() * 20000),
  //     sales: Math.random() * 10000,
  //     expenses: Math.random() * 5000,
  //   });
  // }
  //
  data.push({
    country: 'a1',
    downloads: 'a2',
    sales: 'a3',
    expenses: 'a4',
  }
  );
    data.push({
    country: 'b1',
    downloads: 'b2',
    sales: 'b3',
    expenses: 'b4',
  }
  );
  //     data.push({
  //   country: 'c1',
  //   downloads: 'c2',
  //   sales: 'c3',
  //   expenses: 'c4',
  // }
  // );
      data.push({
    country: 'd1',
    downloads: 'd2',
    sales: 'd3',
    expenses: 'd4',
  }
  );
      data.push({
    country: 'e1',
    downloads: 'e2',
    sales: 'e3',
    expenses: 'e4',
  }
  );
  return data;
}
export function getData2() {
  let countries = ["US", "Germany", "UK", "Japan", "Italy", "Greece"],
    data:any = [];
  data.push({
    country: 'f1',
    downloads: 'f2',
    sales: 'f3',
    expenses: 'f4',
  }
  );
    data.push({
    country: 'g1',
    downloads: 'g2',
    sales: 'g3',
    expenses: 'g4',
  }
  );
  return data;
}
export const data1 = getData1();
export const data2 = getData2();
