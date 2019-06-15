import React, { Component } from 'react';
import style from './App.scss';
import axios from 'axios';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs.jsx';
import ImageCarousel from '../ImageCarousel/ImageCarousel.jsx';
import EssentialInformation from '../EssentialInformation/EssentialInformation.jsx';
import RecommendationBar from '../RecommendationBar/RecommendationBar.jsx';
import MoreDetails from '../MoreDetails/MoreDetails.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      productName: '', 
      designer: '', 
      price: 0, 
      stars: 0, 
      reviews: 0, 
      description: '', 
      fit: '', 
      sizes: [], 
      colors: [], 
      imageUrlsColor1: [], 
      imageUrlsColor2: [],
      imageUrlsIndex: 0,
      colorSelectorArray: [],
      recommendationData: [],
      selectedImgIndex: 0,
      starsArray: [0,0,0,0,0],
      //lets try some new test data
      // _productName: "fake Clothes",
      // _designer: "Guccccccci",
      // _designerDescription: "Gucci da best yo",
      // _price: 9999,
      // _reviewStars: 0,
      // _reviews: 666,
      // _productDescription: ["Diamond perforations add subtle texture and vintage charm to this standby block-heel bootie.", "AND THEN SOME!!!"], // first string is intro descripton, second string is consequent description.
      // _productDetails: [`1 1/2" heel (size 8.5)`, `3 1/2" shaft`, `Side zip closure; adjustable side laces`, `Leather upper/synthetic lining/rubber sole`, `Imported`, `Women's Shoes`, `Item #5674302`], // bullet point of details and care
      // _helpfulInfo: [`The Best Dress for Your Body Type`],
      // _sizeInfo: {
      //   sizes: [`Small`, `Medium`, `Large`],
      //   fit: "this one's juuuuuuust right",
      //   other: [`Offers light support for most A-C cup sizes.`, `Band: XS=32, S=34, M=36, L=38, XL=40.`]
      // }, 
      // _similarStyles: []
    }
    this.fetchData = this.fetchData.bind(this);
    this.updateStarsArray = this.updateStarsArray.bind(this);
    this.updateColorSelectorArray = this.updateColorSelectorArray.bind(this);
    this.updateImageUrlsIndex = this.updateImageUrlsIndex.bind(this);
    this.updateSelectedImgIndex = this.updateSelectedImgIndex.bind(this);
    this.fetchRecommendationData = this.fetchRecommendationData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    this.fetchRecommendationData();
  }

  fetchData() {
    axios.get('/productDescription/findOneRandom')
      .then(({data}) => this.setState({
        productName: data.productName,
        designer: data.designer,
        price: data.price,
        stars: data.stars,
        reviews: data.reviews,
        description: data.description,
        fit: data.fit,
        sizes: data.sizes.slice(1, data.sizes.length-1).split(','),
        colors: data.colors.slice(1, data.colors.length-1).split(','),
        imageUrlsColor1: data.imageUrlsColor1.slice(1, data.imageUrlsColor1.length-1).split(','),
        imageUrlsColor2: data.imageUrlsColor2.slice(1, data.imageUrlsColor2.length-1).split(','),
        imageUrls: data.imageUrlsColor1.slice(1, data.imageUrlsColor1.length-1).split(','),
      }))
      .then(() => this.updateStarsArray())
      .then(() => this.updateColorSelectorArray())
      .catch(err => console.log(err));
        
  }

  updateStarsArray() {
    let starsArray = [];
    let starCount = this.state.stars;
    for (let i = 0 ; i < 5; i++) {
      if (starCount > 0) {
        starsArray.push(1);
        starCount -= 1;
      } else {
        starsArray.push(0);
      }
    }
    this.setState({
      starsArray
    })
  }

  updateColorSelectorArray() {
    let colorSelectorArray = [this.state.imageUrlsColor1[this.state.imageUrlsColor1.length - 1]];
    if (this.state.imageUrlsColor2.length > 0) {
      colorSelectorArray.push(this.state.imageUrlsColor2[this.state.imageUrlsColor2.length - 1])
    }
    this.setState({
      colorSelectorArray
    })
  }

  updateImageUrlsIndex(imageUrlsIndex) {
    this.setState({ imageUrlsIndex, selectedImgIndex: 0 })
  }

  updateSelectedImgIndex(selectedImgIndex) {
    this.setState({ selectedImgIndex })
  }

  fetchRecommendationData() {
    axios.get('/productDescription/recommendation')
      .then(({data}) => this.setState({ recommendationData: data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className={style.appContainer}>
        <BreadCrumbs designer={this.state.designer}/>
        <div className={style.productDescriptionContainer}>
          <ImageCarousel imageUrls={[this.state.imageUrlsColor1, this.state.imageUrlsColor2]} imageUrlsIndex={this.state.imageUrlsIndex} selectedImgIndex={this.state.selectedImgIndex} updateSelectedImgIndex={this.updateSelectedImgIndex}/>
          <EssentialInformation productName={this.state.productName} designer={this.state.designer} price={this.state.price} starsArray={this.state.starsArray} reviews={this.state.reviews} description={this.state.description} fit={this.state.fit} sizes={this.state.sizes} colors={this.state.colors} selectedImg={this.state.selectedImg} colorSelectorArray={this.state.colorSelectorArray} updateImageUrlsIndex={this.updateImageUrlsIndex}/>
          <RecommendationBar recommendationData={this.state.recommendationData}/>
        </div>
        <div className={style.sizeInfoContainer}>
          <img className={style.sizeInfoImage} src={'https://s3-us-west-1.amazonaws.com/fec-image-dump/SizeInfo.png'}></img>
        </div>
      </div>
    )
  }
}

export default App;