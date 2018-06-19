import React, {Component} from 'React';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "3o6ZsYnRbWjANxh9Je"
    }
  }

  search = (query) => {
    giphy('dE8QivdBoc11ogmdhy5Nwevk5PVSggo2').search({
      q: query,
      rating: 'g'
    }, (error, result) => {
      this.setState({
        gifs: result.data,
        limit: 10
      });
    });
  }
  render() {

    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
          <GifList gifs={this.state.gifs}/>
          </div>
        </div>
      </div>
      );
  }
}

export default App;
