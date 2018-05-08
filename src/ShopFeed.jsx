import ShopItemsStore from './ShopItemsStore.jsx'

        export default class ShopFeed {

    constructor() {
        if (this.search_field === undefined) {
            throw new TypeError("Abstract field 'search_field' must be initiated");
        }

        if (this.api_url === undefined) {
            throw new TypeError("Abstract field 'api_url' must be initiated");
        }

        if (this.shop_name === undefined) {
            throw new TypeError("Abstract field 'shop_name' must be initiated");
        }

        if (this.shop_code === undefined) {
            throw new TypeError("Abstract field 'shop_code' must be initiated");
        }

    }

    createFilter(params) {
        var word = this.search_field;
        var ifilter = {};

        Object.keys(params).map(
                (e) => ifilter[word[e]] = (params[e])
        );
        if (ifilter[word.sort] != '')
            ifilter[word.sort] = word.options.sort[word.options.sort.findIndex(d => d.index == ifilter[word.sort])].key;
        if (ifilter[word.condition] != '')
            ifilter[word.condition] = word.options.condition[word.options.condition.findIndex(d => d.index == ifilter[word.condition])].key;

        var urlparams = Object.keys(ifilter).map((key) => {
            return [key, ifilter[key]].map(encodeURIComponent).join("=");
        }).join("&");

        return urlparams;
    }

    readRecords(data) {
        throw new TypeError("Method 'readRecords' must be overridden.");
    }

    performGetRequest(filterParams) {
      return (dispatch) => {
        fetch(this.api_url + this.createFilter(filterParams))
          .then(response => {
              if (response.ok) {
                  response.json().then(data => {
                      var items = this.readRecords(data);
                      dispatch({shopItems: items,sortType:filterParams.sort,type:'SUCCESS'}, filterParams.sort);
                  });
              } else {
                  throw Error(response.statusText);
              }
          })
        .catch(err => {
            alert("Error in fetching data from " + this.shop_name + ": ", err);
        });
      };
    }

    clearData(){
      return (dispatch) => {
        dispatch({type:'CLEAR'});
      }
    }

}
