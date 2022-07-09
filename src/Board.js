import React, { Component } from 'react';
import Tiles from './Tiles';

class Board extends Component {
    render() {
        return (
            <div className="home">
                <div className="Board">
                    <Tiles piece={'O'}/>
                    <Tiles piece={'O'}/>
                    <Tiles piece={'O'}/>
                    <Tiles piece={'O'}/>
                    <Tiles piece={'O'}/>
                    <Tiles piece={'O'}/>
                    <Tiles piece={'O'}/>
                    <Tiles piece={'O'}/>
                    <Tiles piece={'O'}/>
                </div>
            </div>
            
        );
    }
}

export default Board;