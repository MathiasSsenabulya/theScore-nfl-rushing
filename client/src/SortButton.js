import React from 'react';
import FetchStats from './FetchStats';

const SortButton = (props) => {
  const sortBy = async (column) => {
    FetchStats({ sortCol: column })
      .then(res => {
        props.onSort(res);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="options-3">
      <div>
        <button onClick={e => sortBy(props.column)}>{props.column}</button>
      </div>
    </div>
  )
}

export default SortButton;  