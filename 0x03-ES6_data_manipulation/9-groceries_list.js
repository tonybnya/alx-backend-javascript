export default function groceriesList() {
  const groceries = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const myMap = new Map();

  groceries.forEach(([name, quantity]) => {
    myMap.set(name, quantity);
  });

  return myMap;
}
