import React from 'react';

const Grid = ({ position }) => {
    const renderGrid = () => {
        let grid = [];
        for (let i = 0; i < 25; i++) {
            const x = i % 5;
            const y = 4 - Math.floor(i / 5); // Calculate y in reverse order
            let className = 'cell';
            if (position.x === x && position.y === y) {
                className += ' robot ' + position.direct.toLowerCase();
            }
            grid.push(<div key={`${x}-${y}`} className={className}></div>);
        }

        const rows = [];
        for (let i = 0; i < 5; i++) {
            rows.push(
                <div key={i} className="row">
                    {grid.slice(i * 5, i * 5 + 5)}
                </div>
            );
        }

        return rows;
    };

    return <div className="grid">{renderGrid()}</div>;
};

export default Grid;
