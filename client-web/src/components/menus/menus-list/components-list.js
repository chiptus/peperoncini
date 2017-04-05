import React, { PropTypes } from 'react';

const ComponentsList = ({ comps = [], title }) => {
  return (
    <div>
      <h2> {title}</h2>
      <div>
        {comps.map(({ _id, name, value }) => (
          <div key={_id}>{`${value} ${name}`}</div>
        ))}
      </div>
    </div>
  );
};

ComponentsList.propTypes = {
  comps: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

export default ComponentsList;
