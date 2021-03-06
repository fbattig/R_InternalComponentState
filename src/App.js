import React, {Component} from 'react'
import './App.css';


const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    point: 4,
    objectId: 0,
  },
  {
    title: 'Redux',
    url: 'https://facebook.github.io/redux/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    point: 5,
    objectId: 1,
  },
]

class App extends Component{

constructor(props) {
  super(props);
  this.state = {
    list: list,
  };

}
  render(){
    return (
      <div className="App">
        {this.state.list.map(item => {
          return (
            <div key={item.objectId}>
              <span>
                < a href={item.url}>{item.title} </a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          )
        }
        )}
      </div>
    )
  }
}

export default App;
