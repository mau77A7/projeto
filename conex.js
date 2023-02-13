/**const spreadsheetID = '1e3iq9tLZRrQxgi7tjeZHg6PQPHXqy0k1rNNv4mJe74E'
const url = `https://docs.google.com/spreadsheets/d/${spreadsheetID}/gviz/tq?tqx=out:json`
let data = fetch(url)
.then(res => res.text())
.then(text => JSON.parse(text.substr(47).slice(0, -2)))
console.log(parser(data)); **/        


function parser({table}){
        return table.rows
        .map(row => [ ...table.cols.map((col, index) => ({[col.label]: row.c[index].v,}))])
        .map(data => data.reduce((acc, value) =>  ({...acc, ...value}), {}))
    }
function listar() {
     const spreadsheetID = '1e3iq9tLZRrQxgi7tjeZHg6PQPHXqy0k1rNNv4mJe74E'
    const url = `https://docs.google.com/spreadsheets/d/${spreadsheetID}/gviz/tq?tqx=out:json`
    let data =  fetch(url)
    .then(res => res.text())
    .then(text => JSON.parse(text.substr(47).slice(0, -2)))

    console.log(parser(data));
 }

 
