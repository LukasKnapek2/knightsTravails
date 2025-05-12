
const knightMoves = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

function isOutOfField(x,y) {
  if(x < 0 || x > 7 || y < 0 || y > 7) {
    return true
  }
  return false
}

function searchShortestPath(start, end) {
    const queue = [[start]]
    const visited = new Set()
while (queue.length !== 0) {
  let currentPath = queue.shift();
  let currentNode = currentPath[currentPath.length - 1];
  console.log("Exploring:", currentNode);

  for (let i = 0; i < knightMoves.length; i++) {
    let x = currentNode[0] + knightMoves[i][0];
    let y = currentNode[1] + knightMoves[i][1];

    if (isOutOfField(x, y)) continue;

    console.log("  Considering move to:", [x, y]);

    if (x === end[0] && y === end[1]) {
      console.log("✅ Found path:", [...currentPath, [x, y]]);
      return [...currentPath, [x, y]];
    }

    const key = `${x},${y}`;
    if (!visited.has(key)) {
      visited.add(key);
      console.log("  → Adding to queue:", [...currentPath, [x, y]]);
      queue.push([...currentPath, [x, y]]);
    }
  }
}
}
console.log(searchShortestPath([3,3], [4,3]))