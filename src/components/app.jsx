import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="MSfZBzAw8YqGGAg0Cd/giphy.gif?cid=ecf05e475d22301c436b774a6396b43e&amp;rid=giphy" />
          </div>
        </div>
        <div className="right-scene">
          <GifList />
        </div>
      </div>
    );
  }
}

export default App;

