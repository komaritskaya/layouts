import React from 'react';
import shortid from 'shortid';

const ListView = props => {
  const { items } = props;

  const renderItems = items => {
    return items.map(item => {
      return (
        <li className="list-item" key={shortid.generate()}>
          {item}
        </li>
      );
    });
  };

  return <ul className="list">{renderItems(items)}</ul>;
};

export default ListView;
