import React, { Component } from 'react';

class MoreDetails extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   _sizeInfo: {},
    //   _productDetails: [],
    //   _productDescription: [],
    //   _helpfulInfo: [],
    //   _designer: "",
    //   _designerDescription: ""
    // }
  }

  render() {
    return (
      <div>
        <h1>SIZE INFO</h1>
          <ul>
            <li>{this.props._sizeInfoFit}</li>
            {this.props._sizeInfoOther.map((des, ind) => <li key={ind}>{des}</li>)}
          </ul>
        <h1>DETAILS & CARE</h1>
          {this.props._productDescription.join(' ')}
          <ul>
            {this.props._productDetails.map((des, ind) => <li key={ind}>{des}</li>)}
          </ul>
          Helpful info:<br></br>
          {this.props._helpfulInfo.length > 0 ? this.props._helpfulInfo : "" }
      </div>
        
    )
  }
}

export default MoreDetails;