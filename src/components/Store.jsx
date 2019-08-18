import React, { Component } from 'react';
import CardsView from './CardsView';
import ListView from './ListView';
import ShopCard from './ShopCard';
import ShopItem from './ShopItem';
import IconSwitch from './IconSwitch';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewModule: true,
    };

    this.switchView = this.switchView.bind(this);
  }

  switchView() {
    this.setState({ viewModule: !this.state.viewModule });
  }

  renderLayout(cardView) {
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)}
        />
      );
    }
    return (
      <ListView items={this.getShopItems(this.props.products, cardView)} />
    );
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`,
      };
      if (cardView) {
        return <ShopCard {...cardProps} />;
      }
      return <ShopItem {...cardProps} />;
    });
  }

  render() {
    const VIEW_LIST = 'view_list';
    const VIEW_MODULE = 'view_module';
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.viewModule ? VIEW_MODULE : VIEW_LIST}
            onSwitch={this.switchView}
          />
        </div>
        {this.renderLayout(this.state.viewModule)}
      </div>
    );
  }
}

export default Store;
