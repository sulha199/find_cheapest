import React from 'react';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import CollectionSearch from './CollectionSearch.jsx';
import ShopItemsStore from './ShopItemsStore.jsx';
import ShopFeed from './ShopFeed.jsx';
import Bukalapak from './Feed/Bukalapak.jsx';
import Tokopedia from './Feed/Tokopedia.jsx';
import { Grid, Col, Row, Button, Image, Thumbnail } from 'react-bootstrap';

class Collection extends React.Component {
    constructor() {
        super();
        this.performSearch = this.performSearch.bind(this);
    }

    componentDidMount() {
    }

    performSearch(filters)
    {
        this.setState({items:[]});

        //this.props.clearData(new Bukalapak);
        this.props.clearData();

        var ShopFactories = [
            new Bukalapak(),
            new Tokopedia()
        ];

        for (var f in ShopFactories)
            (this.props.fetchData(ShopFactories[f],filters));

    }

    render() {
        return (
                <div>
                    <h3>Find top 20 cheapest products from Bukalapak and Tokopedia</h3>
                    <CollectionSearch performSearch={this.performSearch}/>
                    <hr />
                    <BootstrapItemsDisplay items={this.props.items} />
                    <hr />
                </div>
                );
    }
}

function BootstrapItemsDisplay(props) {
    const items = props.items.map(item => <BootstrapCollectionItem  item={item} />)
    return (
            <Grid>
              <Row className="show-grid">
                {items}
              </Row>
            </Grid>
    );
}

const BootstrapCollectionItem = (props) => (
      <Col xs={6} sm={4} md={3} lg={2}>
        <Thumbnail className={"product " +props.item.origin} href={props.item.url}>
          <Thumbnail src={props.item.img} className={"product-image"}>
          </Thumbnail>

          <div className="product-title">
            <a href={props.item.url}>{props.item.title}</a>
          </div>

          <div className="products-info">
              <div className="product-price">
                  <span>Rp {props.item.price.toLocaleString()}</span>
              </div>
              <div className="product-condition">
                  <span>{props.item.condition}</span>
              </div>
          </div>

          <div className={"seller-info " +props.item.origin}>
              <div className="product-origin">
                  <span><b>{props.item.origin} </b></span>
              </div>
              <div className="product-seller">
                  <span>{props.item.seller_name}</span>
              </div>
              <div className="product-location">
                  <span>{props.item.location}</span>
              </div>
          </div>
        </Thumbnail>
      </Col>
)

const mapStateToProps = (state) => {
    return {
        items: state.shopItems,
        rr:'random',
    };
};

const mapDispatchToProps = (dispatch) => {
    //console.log(shopFeed);
    return {
        fetchData: (shopFeed,filterParams) => dispatch(shopFeed.performGetRequest(filterParams)),
        clearData: () =>dispatch({type:'CLEAR'})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Collection);
