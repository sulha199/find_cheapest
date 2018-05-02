import React from 'react';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import CollectionSearch from './CollectionSearch.jsx';
import ShopItemsStore from './ShopItemsStore.jsx';
import Bukalapak from './Feed/Bukalapak.jsx';
import Tokopedia from './Feed/Tokopedia.jsx';

export default class Collection extends React.Component {
    constructor() {
        super();
        var words = {
            bl: {
                keyword: "keywords",
                row_numbers: 'per_page',
                sort: "sort_by",
                condition: "conditions",
                city: "city",
                province: "province",
                price_min: "price_min",
                price_max: "price_max",
                post_date: "created_at",
                shipping:'shipping',
                options: {
                    condition: [
                        {
                            index: 'new',
                            key : 'new',
                            text : 'New',
                        },
                        {
                            index:'used',
                            key:'used',
                            text:'Used'
                        }
                    ],
                    sort : [
                        {
                            index: 'lowest',
                            key : 'Termurah',
                            text : 'Termurah',
                        },
                        {
                            index:'highest',
                            key:'Termahal',
                            text:'Termahal'
                        },
                        {
                            index:'newest',
                            key:'Terbaru',
                            text:'Terbaru'
                        }
                    ]
                }
            },
            tp: {
                keyword: "q",
                row_numbers: 'rows',
                sort: "ob",
                condition: "condition",
                city: "city",
                province: "province",
                price_min: "pmin",
                price_max: "pmax",
                shipping:'shipping',
                options: {
                    condition: [
                        {
                            index: 'new',
                            key : 1,
                            text : 'New',
                        },
                        {
                            index:'used',
                            key: 2,
                            text:'Used'
                        }
                    ],
                    sort : [
                        {
                            index: '',
                            key : '',
                            text : 'Default',
                        },
                        {
                            index: 'lowest',
                            key : '3',
                            text : 'Termurah',
                        },
                        {
                            index:'highest',
                            key:'4',
                            text:'Termahal'
                        },
                        {
                            index:'newest',
                            key:'9',
                            text:'Terbaru'
                        }
                    ]
                }
            },
        };

        this.state = {items: [],words:words, filters : {}};

        this.loadBl = this.loadBl.bind(this);
        this.loadTp = this.loadTp.bind(this);
        this.sort = this.sort.bind(this);
        this.performSearch = this.performSearch.bind(this);
    }

    componentDidMount() {
       this.loadTp();
       this.loadBl({});
    }

    performSearch(filters)
    {
        ShopItemsStore.dispatch(filters.sort);

        var ShopFactories = [
            new Bukalapak(),
            new Tokopedia()
        ];

        for (var f in ShopFactories)
            f.performGetRequest(filters);


//        var bl = new Bukalapak();
//        var tp = new Tokopedia();
////        tp.performGetRequest(filters);
//
//        var br = bl.performGetRequest(filters);
//        var tr = tp.performGetRequest(filters);
//
//        this.setState({items: []});
//        this.setState({items: this.sort(this.state.items.concat(br),filters.sort)});
//        this.setState({items: this.sort(this.state.items.concat(tr),filters.sort)});
//        console.log(this.state.items);

//
//        this.setState({
//            filters:filters
//        });
//
//        this.loadBl(filters);
//        this.loadTp(filters);
    }

    loadBl(params) {
        var word = this.state.words.bl;
        var ifilter = {};

        Object.keys(params).map(
            (e) => ifilter[word[e]] = (params[e])
        );
        if(ifilter[word.sort] != '')
            ifilter[word.sort] = word.options.sort[word.options.sort.findIndex(d => d.index == ifilter[word.sort])].key;
        if(ifilter[word.condition] != '')
            ifilter[word.condition] = word.options.condition[word.options.condition.findIndex(d => d.index == ifilter[word.condition])].key;

        var urlparams = Object.keys(ifilter).map((key) => {
            return [key, ifilter[key]].map(encodeURIComponent).join("=");
        }).join("&");

        fetch('https://api.bukalapak.com/v2/products.json?page=1&per_page=20&'+urlparams).then(response => {
            if (response.ok) {
                response.json().then(data => {

                    console.log("Total count of records of bl:", data.products.length);
                    var temp = [];
                    data.products.forEach(item => {
                        temp.push({
                            title: item.name,
                            img: item.small_images[0].replace("/small/","/s-190-190/"),
                            seller_name: item.seller_name,
                            location: item.city,
                            price: item.price,
                            //post_date: item.created_at,
                            condition: word.options.condition[word.options.condition.findIndex(d => d.key == item.condition)].text ,
                            url: item.url,
                            origin:"BL"
                        });
                    });
                    this.setState({items: this.sort(this.state.items.concat(temp),params.sort)});
                });
            } else {
                response.json().then(error => {
                    alert("Failed to fetch issues:" + error.message)
                });
            }
        }).catch(err => {
            alert("Error in fetching data from Bukalapak:", err);
        });
    }

    priceAsc(obj)
    {
        return obj.sort(function (a, b) {
            return a.price - b.price;
        });
    }

    priceDesc(obj)
    {
        return obj.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    sort(obj,method)
    {
        if (method == 'lowest')
            return this.priceAsc(obj);
        else if (method == 'highest')
            return this.priceDesc(obj);
        else
            return obj;
    }

    loadTp(params) {

        var word = this.state.words.tp;
        var ifilter = {};

        Object.keys(params).map(
            (e) => ifilter[word[e]] = (params[e])
        );
        if(ifilter[word.sort] != '')
            ifilter[word.sort] = word.options.sort[word.options.sort.findIndex(d => d.index == ifilter[word.sort])].key;
        if(ifilter[word.condition] != '')
            ifilter[word.condition] = word.options.condition[word.options.condition.findIndex(d => d.index == ifilter[word.condition])].key;

        var urlparams = Object.keys(ifilter).map((key) => {
            return [key, ifilter[key]].map(encodeURIComponent).join("=");
        }).join("&");

        fetch('http://localhost:8000/api/tp?st=product&image_size=100&image_square=true&rows=20&'+urlparams).then(response => {
//        fetch('http://crossorigin.me/https://ace.tokopedia.com/search/v2.6/product?st=product&image_size=190&image_square=true&rows=20&'+urlparams,{credentials: 'same-origin'}).then(response => {

            if (response.ok) {
                response.json().then(data => {
                    console.log("Total count of records tp :", data.data.length);
                    var word = this.state.words.tp;
                    var temp = [];
                    data.data.forEach(item => {
                        temp.push({
                            title: item.name,
                            img: item.image_uri_700,
                            seller_name: item.shop.name,
                            location: item.shop.location,
                            price: parseInt(item.price.replace(/[Rp .]+/g,"")),
                            condition: word.options.condition[word.options.condition.findIndex(d => d.key == item.condition)].text ,
                            url: item.uri,
                            origin : "TP"
                        });
                    });
                    this.setState({items: this.sort(this.state.items.concat(temp),params.sort)});
                });
            } else {
                response.json().then(error => {
                    alert("Failed to fetch issues:" + error.message)
                });
            }
        }).catch(err => {
            alert("Error in fetching data from Tokopedia : ", err);
        });
    }

    render() {
        return (
                <div>
                    <h1>List :</h1>
                    <CollectionSearch performSearch={this.performSearch}/>
                    <hr />
                    <ItemsDisplay items={this.props.shopItems} />
                    <hr />
                </div>
                );
    }
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

function ItemsDisplay(props) {
    const items = props.items.map(item => <CollectionItem  item={item} />)
    return (
            <ul>{items}</ul>
            );
}
