import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { Provider } from 'react-redux';
import ShopItemsStore from './ShopItemsStore.jsx'
import Collection from './Collection.jsx';

const contentNode = document.getElementById('contents');
const store = ShopItemsStore();

//asdsd
//ReactDOM.render(<IssueList />, contentNode); // Render the component inside the content Node

const contentNode2 = document.getElementById('contents2');
ReactDOM.render(
  <Provider store={store}>
    <Collection/>
  </Provider>,
  contentNode2
); // Render the component inside the content Node

if (module.hot) {
    module.hot.accept();
}
