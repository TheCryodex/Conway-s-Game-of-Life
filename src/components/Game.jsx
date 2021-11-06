import React, { Component } from 'react'
import './Game.css';

const CELL_SIZE = 20;
const HEIGHT = 600;
const WIDTH = 800;    
    

export default class Game extends Component {
    
    constructor(){
        super();
        this.rows = HEIGHT/CELL_SIZE;
        this.cols = WIDTH/CELL_SIZE;
        this.board = this.makeEmptyBoard();
    }
    state = { 
        cells : [],
    }

    //Create an Empty Board
    makeEmptyBoard(){
        let board = [];
        for(let i=0; i < this.rows; i++){
            board[i] = [];
            for(let j = 0; j < this.cols; j++){
                board[i][j] = false;
            }
        }
        return board;
    }

    render() {
        
        return (
            <div>
                <div className="Board" style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px` }}></div>
            </div>
        )
    }
}
