import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Controls from './components/Control';
import { controller, direction } from './utils';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0, direct: direction.NORTH });

  const moveRobot = (command) => {
    let { x, y, direct } = position;
    switch (command) {
      case controller.move:
        if (direct === direction.NORTH && y < 4) y += 1;
        else if (direct === direction.SOUTH && y > 0) y -= 1;
        else if (direct === direction.EAST && x < 4) x += 1;
        else if (direct === direction.WEST && x > 0) x -= 1;
        break;
      case controller.left:
        direct = turnLeft(direct);
        break;
      case controller.right:
        direct = turnRight(direct);
        break;
      default:
        break;
    }
    setPosition({ x, y, direct });
  };

  const turnLeft = (direct) => {
    switch (direct) {
      case direction.NORTH: return direction.WEST;
      case direction.WEST: return direction.SOUTH;
      case direction.SOUTH: return direction.EAST;
      case direction.EAST: return direction.NORTH;
      default: return direct;
    }
  };

  const turnRight = (direct) => {
    switch (direct) {
      case direction.NORTH: return direction.EAST;
      case direction.EAST: return direction.SOUTH;
      case direction.SOUTH: return direction.WEST;
      case direction.WEST: return direction.NORTH;
      default: return direct;
    }
  };

  return (
    <div className="App">
      <h1>Robot Simulator</h1>
      <Grid position={position} />
      <Controls moveRobot={moveRobot} />
    </div>
  );
}

export default App;