# find_cheapest

Built on ReactJS and ExpressJS. It is useful for looking the best price on Indonesia's e-commerces(currently, working on Tokopedia and Bukalapak only).
Next Plan :
* Integrate with CSS preprocessor and maybe Bootstrap or Webpack
* Improve the OO structure. Create (made-up)abstract class for E-commerce-API consumer. Actually, there is no abstract class in Javascript.
* Deploy to a free host, or in Github Pages


## How to install
Make sure you have installed Node. Plesae run below command in your cmd
```
npm install
```

## How to run
To run Express run this command below. We use Express as the intermediary to create GET request to Tokopedia API as the Tokopedia API does not allows CORS request from browser.
```
npm start
```
And below to run ReactJs
```
npm run watch
```

visit [localhost:8000](http://localhost:8000/) to begin your eccommerces search.
