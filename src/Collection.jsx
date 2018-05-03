import React from 'react';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import CollectionSearch from './CollectionSearch.jsx';
import ShopItemsStore from './ShopItemsStore.jsx';
import ShopFeed from './ShopFeed.jsx';
import Bukalapak from './Feed/Bukalapak.jsx';
import Tokopedia from './Feed/Tokopedia.jsx';

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

           console.log(this.props);
    }

    render() {
        return (
                <div>
                    <h1>List :</h1>
                    <CollectionSearch performSearch={this.performSearch}/>
                    <hr />
                    <ItemsDisplay items={this.props.items} />
                    <hr />
                </div>
                );
    }
}

function ItemsDisplay(props) {
    const items = props.items.map(item => <CollectionItem  item={item} />)
    return (
            <ul>{items}</ul>
            );
}

const CollectionItem = (props) => (
            <li>
                <div className={"product " +props.item.origin}>
                    <div className="product-image">
                        <img src={props.item.img}/>
                    </div>
                    <div className="product-title">
                    <a href={props.item.url}><span>{props.item.title}</span></a>
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
                </div>
            </li>
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
