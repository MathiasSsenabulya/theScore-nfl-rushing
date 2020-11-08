import React from 'react';
import FetchStats from './FetchStats';

const GetMoreStats = (props) => {
    const getMore = () => {
        FetchStats({ startAt: props.players.length + 1 })
            .then(res => {
                props.onMore(res);
            })
            .catch(err => console.log(err));
    }
    if (props.render) {
        return (
            <div className="more-stats">
                <button onClick={e => getMore()}>Get More Results</button>
            </div>
        )
    } else {
        return (
            <div className="more-stats">
            </div>
        )
    }
}
export default GetMoreStats;
