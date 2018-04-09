import React from 'react';
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
                    <form name="collectionSearch" onSubmit={this.handleSubmit}>
                        <input type="text" name="keyword" placeholder="Masukkan Kata Kunci" />
                        <select name="sort" placeholder="urut berdasar">
                            <option value="lowest">Termurah</option>
                            <option value="highest">Termahal</option>                        
                            <option value="newest">Terbaru</option>
                            <option value="">Acak</option>                            
                        </select>
                        <select name="condition" placeholder="">
                            <option value="">Semua</option>
                            <option value="new">Baru</option>
                            <option value="used">Bekas</option>                                    
                        </select>
                        <input type="text" name="price_min" placeholder="Harga Minimum" />
                        <input type="text" name="price_max" placeholder="Harga Maksimum" />
                        <button>Cari</button>
                    </form>
                </div>
                )
    }
}

