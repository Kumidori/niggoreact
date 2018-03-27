import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.toggleClass = this.toggleClass.bind(this);
        // This binding is necessary to make `this` work in the callback
    }
    toggleClass(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    };
    render() {
        return (
                <span onClick={this.toggleClass} className={this.state.isToggleOn ? 'item' : 'item animated wobble'}>test</span>
        );
    }

}

export default Item;
