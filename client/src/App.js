import React, { useEffect } from 'react';
import './App.css';
import PlayerList from './PlayerList.js';
import FilterOptions from './FilterOption.js';
import DownloadCSV from './DownloadCSV.js';
import FetchStats from './FetchStats';
import GetMoreStats from './GetMoreStats.js';

const Header = () => {
  return (
    <div>
      <div className="page-menu">
        <div className="menu-score-logo"></div>
        <div className="menu-hamburger">&#9776;</div>
        <div className="menu-item">NFL</div>
        <div className="menu-item">SCORES</div>
        <div className="menu-item">NEWS</div>
        <div className="menu-item">STANDINGS</div>
        <div className="menu-item-selected">LEADERS</div>
        <div className="menu-button">Download the app</div>
      </div>
      <div className="page-title">
        <h2>NFL Rushing Stats</h2>
      </div>
    </div>
  )
}

const App = (props) => {
  const [playersList, setResponse] = React.useState('');
  const [showMore, setShowMore] = React.useState(true);

  useEffect(() => {
    FetchStats({})
      .then(res => {
        refreshList(res);
      })
      .catch(err => console.log(err));
  }, []
  );

  const refreshList = (res) => {
    setResponse(res);
    if (res) {
      setShowMore(res.length > 0 ? true : false);
    }
  };

  const addToList = (res) => {
    setResponse(playersList.concat(res));
    if (res.length > 0) {
      setShowMore(true);
    }
    else {
      setShowMore(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="list-options">
        <FilterOptions onSubmit={refreshList} />
        <DownloadCSV data={playersList} />
      </div>

      <PlayerList refreshFn={refreshList} players={playersList} />
      <GetMoreStats render={showMore} onMore={addToList} players={playersList} />
    </div>
  );

}

export default App;