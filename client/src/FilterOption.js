import React from 'react';
import FetchStats from './FetchStats';

const FilterOption = (props) => {
    const [nameFilter, setNameFilter] = React.useState('');
    const filterList = async (e) => {
      e.preventDefault();
      FetchStats({ player: nameFilter })
      .then(res => {
        props.onSubmit(res);
        setNameFilter('');
      })
      .catch(err => console.log(err));
    }
    return (
      <div className="options-1">
        <div>
          <form onSubmit={filterList}>
            <input
              type="text" value={nameFilter}
              onChange={e => setNameFilter(e.target.value)}
              placeholder="Player Name"
              required
            />
            <button>Filter</button>
          </form>
        </div>
      </div>
    )
  }

  export default FilterOption;