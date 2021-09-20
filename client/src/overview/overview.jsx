import React from 'react';
import AddToCart from './subComponents/AddToCart.jsx';
import ImageGallery from './subComponents/ImageGallery.jsx';
import ProductInfo from './subComponents/ProductInfo/ProductInfo.jsx';
import StyleSelector from './subComponents/StyleSelector.jsx';
// import Contexts from '../contexts/Contexts.tsx';

let test = 'str';
export default function OverView(props) {
  return (
    <div className="overViewContainer">
      <div className="overView">
        <ImageGallery />
        <ProductInfo />
        <StyleSelector
          testStr={test}
        />
        <AddToCart />
      </div>
    </div>
  );
};