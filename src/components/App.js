import React, { Component } from 'react';
import SearchBar from './SearchBar';
import WordList from './WordList';
import '../styles/style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {word: 'Clean room', size: 2},
        {word: 'Make your bed', size: 1},
        {word: 'Complete homework', size: 3}
      ]
    };

    this.addWord = this.addWord.bind(this);
  }

  addWord(word, size) {
    this.setState({
      words: this.state.words.concat({
        word: word,
        size: size
      })
    });
  }

  render() {
    return (
      <div>
        <SearchBar addWord={this.addWord}/>
        <WordList words={this.state.words}/>
      </div>
    );
  }
}
