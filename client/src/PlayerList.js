import React from 'react';
import SortButton from './SortButton.js';

const PlayerList = (props) => {
    const statColumns = ["Player", "Team", "Pos", "Att", "Att/G", "Yds", "Avg", "Yds/G", "TD", "Lng", "1st", "1st%", "20+", "40+", "FUM"];
    const sortableColumns = ["Yds", "TD", "Lng"];

    return (
        <div className="Rtable Rtable--15cols">
            {statColumns.map(stat => {
                if (sortableColumns.includes(stat)) {
                    return (
                        <div key={stat} className="Rtable-cell Rtable-cell--head">
                            <SortButton column={stat} onSort={props.refreshFn} />
                        </div>
                    )
                }
                else {
                    return <div key={stat} className="Rtable-cell Rtable-cell--head">{stat}</div>
                }
            })}

            { props.players ?
                props.players[0] ?
                    Object.keys(props.players).map((key) =>
                        <>
                            {statColumns.map(stat =>
                                <div key={stat} className="Rtable-cell">{props.players[key][stat]}</div>
                            )}
                        </>
                    )
                    : <div className="Rtable-cell">No players found.</div>
                : <div className="Rtable-cell">No players found.</div>
             }
        </div>
    );

}

export default PlayerList;
