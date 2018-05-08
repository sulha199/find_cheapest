import React from 'react';
import { Button, FormControl, Glyphicon, Form, FormGroup, ControlLabel } from 'react-bootstrap';

export default class CollectionSearch extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        var form = document.forms.collectionSearch;
        this.props.performSearch({
            keyword: form.keyword.value,
            sort: form.sort.value,
            condition: form.condition.value,
            price_min: form.price_min.value,
            price_max: form.price_max.value
        });
    }
    render() {
        return (
                <div>
                    <Form inline name="collectionSearch" onSubmit={this.handleSubmit}>
                        <FormControl type="text" name="keyword" placeholder="Masukkan Kata Kunci" />
                        <FormControl type="hidden" name="condition" />                        
                        <FormGroup>
                          <FormControl type="text" name="price_min" placeholder="Harga Minimum" />
                          <FormControl type="text" name="price_max" placeholder="Harga Maksimum" />
                        </FormGroup>
                        <FormGroup className="has-feedback has-feedback-left">
                          <FormControl componentClass="select" name="sort" placeholder="urut berdasar">
                              <option value="lowest">Termurah</option>
                              <option value="highest">Termahal</option>
                              <option value="newest">Terbaru</option>
                              <option value="">Acak</option>
                          </FormControl>
                          <i className="glyphicon glyphicon-sort form-control-feedback"></i>
                        </FormGroup>
                        <Button  type="submit"><Glyphicon glyph="search" /></Button>
                    </Form>
                </div>
                )
    }
}
