import ShopFeed from '../ShopFeed.jsx';

export default class Tokopedia extends ShopFeed{
    get shop_name(){
        return 'Tokopedia'; 
    }
    get shop_code(){
        return 'TP'; 
    }    
    get api_url(){
        return 'http://localhost:8000/api/tp?st=product&image_size=100&image_square=true&rows=20&';
    }
    get search_field(){
        return {
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
        }; 
    }
    
    readRecords(data){ 
        var word = this.search_field;   
        var temp = [];
        
        console.log("Total count of records of "+ this.shop_code + ": ", data.data.length);
        data.data.forEach(item => {
            temp.push({
                title: item.name,
                img: item.image_uri_700,
                seller_name: item.shop.name,
                location: item.shop.location,
                price: parseInt(item.price.replace(/[Rp .]+/g,"")),
                condition: word.options.condition[word.options.condition.findIndex(d => d.key == item.condition)].text ,
                url: item.uri,
//                origin : this.shop_code,
                origin : 'TP',
            });
        },this);
        
        console.log(temp);
        return temp;
    }
    
    constructor(){
        super();        
    }
}