import React, { Component } from 'react';
import style from './RecommendationBar.scss'

class RecommendationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.recommendationBarContainer}>
        <h3 className={style.titleText}>People Also Viewed</h3>
        <ul className={style.dressListContainer}>
          {this.props.recommendationData.map((dress, index) => (
            <li className={style.dressDescriptionContainer} key={index}>
              <a className={style.link} href='#'>
                <img className={style.dressImage} src={dress.imageUrlsColor1.slice(1,dress.imageUrlsColor1.length-1).split(',')[0]}></img>
                <div className={style.designerText}>{dress.designer}</div>
                <div className={style.dressPrice}>${dress.price}.00</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default RecommendationBar;