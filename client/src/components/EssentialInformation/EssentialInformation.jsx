import React, { Component } from 'react';
import style from './EssentialInformation.scss';

class EssentialInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 'Size',
      sizeIndex: 'none',
      color: 'Color',
      colorIndex: 'none',
      dropdown: 'none',
    }
    this.onClickSizeHandler = this.onClickSizeHandler.bind(this);
    this.onClickDropdownHandler = this.onClickDropdownHandler.bind(this);
    this.onClickColorHandler = this.onClickColorHandler.bind(this);
  }

  onClickSizeHandler(size, sizeIndex) {
    this.setState({ size, sizeIndex }, () => this.setState({ dropdown: 'none' }))
  }

  onClickColorHandler(color, colorIndex) {
    this.setState({ color, colorIndex }, () => this.setState({ dropdown: 'none' }))
    if (typeof colorIndex === 'number') {
      this.props.updateImageUrlsIndex(colorIndex);
    }
  }
  
  onClickDropdownHandler(dropdown) {
    this.setState({ dropdown })
  }

  render() {
    return (
      <div className={style.essentialInformationContainer}>
        <div className={style.starAndReviewCountContainer}>
          <span className={style.starsContainer}>
            {this.props.starsArray.map((star, index) => {
              let starColor = star ? { fill: '#383838' } : { fill: '#e3e3e3' };
              return (
                <svg className={style.star} style={starColor} width="16" height="16" viewBox="0 0 24 24" key={index}>
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                </svg>
              )
            })}
          </span>
          <span className={style.reviews}>({this.props.reviews})</span>
        </div>
        <div className={style.productNameContainer}>
          <h1 className={style.productName}>{this.props.productName}</h1>
        </div>
        <div className={style.designerContainer}>
          <a className={style.designerLink} href="#">{this.props.designer.toUpperCase()}</a>
        </div>
        <div className={style.priceContainer}>
          <span className={style.price}>${this.props.price}.00</span>
        </div>
        <div className={style.descriptionContainer}>
          <p className={style.description}>{this.props.description[0]}</p>
        </div>
        <div className={style.fitContainer}>
          <span className={style.fit}>Fit</span>
          <span className={style.fitSize}>{this.props.fit}</span> 
        </div>
        <div className={style.dropDownMainContainer}>
          <div className={style.dropDownContainerMainTitle} onClick={() => this.onClickDropdownHandler('size')}>
            <span className={style.sizeTitleText} style={this.state.size === 'Size' ? { fontWeight: 700 } : { fontWeight: 400 }}>{this.state.size}</span>
            <span className={style.carrot}>
              <svg height="12" width="13" viewBox="0 0 129 129">
                <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
              </svg>
            </span>
          </div>
          {this.state.dropdown === 'size' && (
            <div className={style.dropDownContainer}>
              <span className={`${style.dropDownContainerMainTitle} ${style.bold}`} onClick={() => this.setState({ dropdown: 'none' })}>Choose a size</span>
              {this.props.sizes.map((size, index) => {
                let dropDownClassName = this.state.size === size ? style.selectedBox : style.dropDownContainerBox;
                return <span className={dropDownClassName} key={index} href="#" onClick={() => this.onClickSizeHandler(size, index)}>{size}</span>
              })} 
            </div>
          )}
        </div>
        <div className={style.sizeGuideContainer}>
          <a href='#' className={style.sizeGuideLink}>{this.props.designer} Size Guides</a>
        </div>
        <div className={style.dropDownMainContainer}>
          <div className={style.dropDownContainerMainTitle} onClick={() => this.onClickDropdownHandler('color')}>
            <span className={style.colorTitleText} style={this.state.color === 'Color' ? { fontWeight: 700 } : { fontWeight: 400 }}>{this.state.color}</span>
            <span className={style.carrot}>
              <svg height="12" width="13" viewBox="0 0 129 129">
                <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
              </svg>
            </span>
          </div>
          {this.state.dropdown === 'color' && (
            <div className={style.dropDownContainer}>
              <span className={`${style.dropDownContainerMainTitle} ${style.bold}`} onClick={() => this.setState({ dropdown: 'none' })}>Choose a color</span>
              {this.props.colors.map((color, index) => {
                let dropDownClassName = this.state.color === color ? style.selectedBox : style.dropDownColorContainerBox;
                return (
                  <span className={dropDownClassName} key={index} href="#" onClick={() => this.onClickColorHandler(color, index)}>
                    <span>
                      <img className={style.colorSelectorImage} src={this.props.colorSelectorArray[index]}></img>
                    </span>
                    <span className={style.colorText}>{color}</span>
                  </span>
                )})}
            </div>
          )}
        </div>
        <div className={style.colorContainer}>
        {this.props.colors.map((color, index) => {
          let colorSelectorStyle = this.state.colorIndex === index ? `${style.colorSelectorImage} ${style.colorSelectedImage}` : style.colorSelectorImage;
          return (
            <span key={index} onClick={() => this.onClickColorHandler(color, index)}>
              <img className={colorSelectorStyle} src={this.props.colorSelectorArray[index]}></img>
            </span>
          )})}
        </div>
        <div className={style.quantityContainer}>
          <input type='text' placeholder='1' className={style.quantity}></input>
        </div>
        <div className={style.bagContainer}>
          <button className={style.button}>Add to Bag</button>
        </div>
        <div className={style.wishListContainer}>
          <a href='#' className={style.wishListLink}>Add to Wish List</a>
        </div>
        <div className={style.buyContainer}>
          <div className={style.buy}>Buy & Pickup</div>
        </div>
        <div className={style.availabilityContainer}>
          <div className={style.availability}>Check availability within 100 miles of:</div>
        </div>
        <div className={style.zipAndButtonContainer}>
          <input className={style.zipCode} type='text' placeholder='Zip code'></input>
          <button className={style.button}>Check Locations</button>
        </div>
      </div>
    )
  }
}

export default EssentialInformation;
