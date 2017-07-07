import React, {Component} from 'react';

export default class WordList extends Component {
  renderWords() {
    const classNameFixed = 'word-entry';
    return this.props.words.map((word) => {
      var className = `${classNameFixed} font-size-${word.size}`;
      return (
        <span className={className} key={word.word}>{word.word}</span>);
      });
  }

  render() {
    return (
      <div className="component-word-list">
          {this.renderWords()}
      </div>
    );
  }
}
