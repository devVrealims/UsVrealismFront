import React from "react";
import { Chart } from "react-google-charts";

const Chartpie = () => {
  const data = [
    ["From", "To", "Weight"],
    ["Catalina", "Laura", 5],
    ["Catalina", "Amit", 1],
    ["Catalina", "Diego", 1],
    ["Catalina", "Karen", 1],
    ["Miguel", "Laura", 1],
    ["Miguel", "Amit", 5],
    ["Miguel", "Karen", 1],
    ["Juan", "Laura", 1],
    ["Juan", "Amit", 1],
    ["Juan", "Diego", 5],
    ["Juan", "Karen", 1],
    ["Ruben", "Laura", 1],
    ["Ruben", "Amit", 1],
    ["Ruben", "Diego", 1],
    ["Ruben", "Karen", 5],
    ["Laura", "Tiffany", 2],
    ["Laura", "Gmbc", 1],
    ["Laura", "Sueling", 1],
    ["Laura", "Edwin", 3],
    ["Amit", "Tiffany", 1],
    ["Amit", "Gmbc", 3],
    ["Amit", "Wisebuilders", 3],
    ["Amit", "Sueling", 3],
    ["Amit", "Edwin", 1],
    ["Diego", "Gmbc", 1],
    ["Diego", "Sueling", 3],
    ["Diego", "Edwin", 1],
    ["Karen", "Tiffany", 1],
    ["Karen", "Gmbc", 1],
    ["Karen", "Sueling", 2],
    ["Karen", "Edwin", 7],
    ["Edwin", "Vrealism", 5],
    ["Edwin", "Oasis", 1],
    ["Edwin", "Nuvision", 3],
    ["Tiffany", "Vrealism", 5],
    ["Tiffany", "Oasis", 1],
    ["Tiffany", "Nuvision", 3],
    ["Gmbc", "Vrealism", 5],
    ["Gmbc", "Oasis", 1],
    ["Gmbc", "Nuvision", 3],
    ["Wisebuilders", "Vrealism", 5],
    ["Wisebuilders", "Oasis", 1],
    ["Wisebuilders", "Nuvision", 3],
    ["Sueling", "Vrealism", 5],
    ["Sueling", "Oasis", 1],
    ["Sueling", "Nuvision", 3],
  ];
  return (
    <div>
      <Chart chartType="Sankey" width="100%" height="200px" data={data} />
    </div>
  );
};

export default Chartpie;
