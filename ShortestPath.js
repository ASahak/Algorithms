// Shortest path Between two cities
const stack = {};
const start = 'A';
const end = 'F';
const ways = [
  {from: 'A', to: 'B', time: 4},
  {from: 'B', to: 'D', time: 10},
  {from: 'D', to: 'F', time: 11},
  {from: 'B', to: 'C', time: 5},
  {from: 'C', to: 'E', time: 3},
  {from: 'E', to: 'D', time: 4},
  {from: 'D', to: 'F', time: 1},
  {from: 'A', to: 'C', time: 2},
  {from: 'C', to: 'E', time: 3},
  {from: 'E', to: 'D', time: 4},
  {from: 'D', to: 'F', time: 11},
];
const findRoute = (from, city, val) => {
  const foundedWays = ways.filter(e => e.from === city);
  if (foundedWays.length > 0) {
      foundedWays.forEach(point => {
          stack[from + city + point.to] = val + point.time
          findRoute(from + city, point.to, val + point.time)
      })
  }
}
findRoute('', start, 0);


const betterWay = Object.keys(stack).reduce((acc, item) => {
  if (item.indexOf(start) > -1 && item.indexOf(end) > -1) {
      if (!acc.val || acc.val > stack[item]) {
          acc.key = item;
          acc.val = stack[item];
      }
  }
  return acc
}, {});

console.log('The shortest path is - ', betterWay);

// Dijkstra's shortest path algorithm
