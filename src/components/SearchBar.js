import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      size: 2
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addWord(this.state.word, this.getRandomSize());
    this.setState({word: '', size: 2});
  }

  getRandomSize() {
    return Math.floor(Math.random() * 3) + 1;
  }

  render() {
    return (
      <form className="search-bar-component" onSubmit={this.onSubmitHandler}>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Add a new thought"
            value={this.state.word}
            onChange={event =>{this.setState({word: event.target.value})}}
          />
          {/*<input
            value={this.state.size}
            onChange={event => {this.setState({size: event.target.value})}}
          />*/}
          {/*}<div className="input-group-btn">
            <button className="btn btn-danger" type="submit">Add A Thought</button>
          </div>*/}
        </div>
      </form>
    );
  }
}
