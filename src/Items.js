import React, { Component } from 'react';
import Item from './Item'

class Items extends Component {
    render() {
        return (
            <div className="item-container animated slideInUp">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        );
    }
}

export default Items;
