import React, { Component } from 'react';
import style from './ProductDescription.scss';

class Star extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        {this.props.star ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
        ) : (
          <svg className={style.empty} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
        )}
      </span>
    )
  }
}

export default Star