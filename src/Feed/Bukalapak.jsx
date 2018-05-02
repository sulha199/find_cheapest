import ShopFeed from '../ShopFeed.jsx';

export default class Bukalapak extends ShopFeed{
    get shop_name(){
        return 'Bukalapak'; 
    }
    get shop_code(){
        return 'BL'; 
    }    
    get field_map(){
        return 'Bukalapak'; 
    }
    get api_url(){
        return 'https://api.bukalapak.com/v2/products.json?page=1&per_page=20&';
    }
    get search_field(){
        return {
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
        }; 
    }
    
    readRecords(data){ 
        var word = this.search_field;   
        console.log("Total count of records of BL:", data.products.length);
        var temp = [];
        data.products.forEach(item => {
            temp.push({
                title: item.name,
                img: item.small_images[0].replace("/small/","/s-190-190/"),
                seller_name: item.seller_name,
                location: item.city,
                price: item.price,
                condition: word.options.condition[word.options.condition.findIndex(d => d.key == item.condition)].text ,
                url: item.url,
//                origin:this.shop_code,
                origin:'BL',
            });
        },this);
        
        console.log(temp);
        
        return temp;
    }
    
    constructor(){
        super();        
    }
}