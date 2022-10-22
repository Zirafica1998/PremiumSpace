import React, { Component } from "react";



// const mysql = require('mysql')
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'dbuser',
//   password: 's3kreee7',
//   database: 'my_db'
// })

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()

export default class ResultSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: props.type,
            searchWord:props.searchWord,
            sizeFrom:props.sizeFrom,
            sifeOf:props.sifeOf,
            priceFrom:props.priceFrom,
            priceOf:props.priceOf,
        }
    }
  render() {
    return (
      <div>{this.state.searchWord}</div>
    );
  }
}
