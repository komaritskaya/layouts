import React from 'react';
import shortid from 'shortid';

const CardsView = props => {
  const { layout, cards } = props;

  const getLayoutClasses = layout => {
    return Object.keys(layout)
      .map(key => `col-${key}-${layout[key]}`)
      .join(' ');
  };

  const layoutClasses = getLayoutClasses(layout);
  console.log(layoutClasses);
  const renderCards = cards => {
    return cards.map(card => {
      return (
        <div className={layoutClasses} key={shortid.generate()}>
          {card}
        </div>
      );
    });
  };

  return <div className="row">{renderCards(cards)}</div>;
};

export default CardsView;
