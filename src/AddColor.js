import { useState } from 'react';
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("");

  const styles = {
    background: color,
  };

  const [colorList, setColorList] = useState([
    "crimson",
    "orange",
    "skyblue",
    "purple"
  ]);

  return (
    <div>
      <input
        type="text"
        style={styles}
        placeholder='Name'
        onChange={(event) => setColor(event.target.value)} />
      <button onClick={() => setColorList([...colorList, color])}> Add Color </button>

      {/* <p> Color : {color}</p> */}
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
