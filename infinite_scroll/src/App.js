import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
// import data from './component/data/nyc_ttp_pins.json';
import InfiniteScroll from 'react-infinite-scroll-component';

const style = {
  // height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};
const picStyle = {
  border: "1px solid red",
  width: "20%",
  height: "750px",
  padding: 10
}

const data = require('./component/data/nyc_ttp_pins.json')
console.log(data.map)
class App extends React.Component {
  state = {
    items: Array.from({ length: 5 })
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 5 }))
      });
    }, 1500);
  };

  GetAuthor(author){
    // let author = props.item.attribution.author_name
    if(author){
      return <h1>Author: {author}</h1>
    }else{
      <h1>Author: Unknown</h1>
    }
  }

  render(){
    console.log(data)
    return (
      <div className="App">
        <header>
          <h2>Infinite Scroll</h2>
        </header>
        <body>
          <InfiniteScroll 
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {data.map((item, index) => (
              <div style = {style}>
                <p>div - #{index}</p>
                <img src = {item.images['136x136']} style = {picStyle} alt = {item.images['136x136'].url}></img>
                <img src = {item.images['236x']} style = {picStyle} alt = {item.images['236x'].url}></img>
                <img src = {item.images['474x']} style = {picStyle} alt = {item.images['474x'].url}></img>
                <img src = {item.images['736x']} style = {picStyle} alt = {item.images['736x'].url}></img>
                {/* <p>{this.getAuthor(item.attribution.author_name)}</p> */}
                {/* <GetAuthor {...item.attribution.author_name}></GetAuthor> */}
                {/* {this.GetAuthor(item.attribution.a)} */}
                {/* {if(index === map){index = 0}} */}
                {() => {if(index === 47) index = 0}}
              </div>
            ))}
          </InfiniteScroll>
        </body>
      </div>
    );
  }
}

export default App;
