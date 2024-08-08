import React from 'react';
import { controller } from '../utils';

const Controls = ({ moveRobot }) => {
    return (
        <div className="controls">
            <button onClick={() => moveRobot(controller.move)}>Move</button>
            <button onClick={() => moveRobot(controller.left)}>Left</button>
            <button onClick={() => moveRobot(controller.right)}>Right</button>
        </div>
    );
};

export default Controls;
