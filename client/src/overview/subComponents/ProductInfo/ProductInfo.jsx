import React, { useContext } from 'react';
import ReviewStar from '../../../utils/ReviewStar.jsx';
import ProductCategory from './ProductCategory.jsx';
import ProductName from './ProductName.jsx';
import ProductPrice from './ProductPrice.jsx';
import { ReviewsMetadataContext } from '../../../contexts/Contexts.tsx';
import ProductReview from './ProductReview.jsx';

export default function ProductInfo() {
  const { reviewsMetadata } = useContext(ReviewsMetadataContext);
  let reviewShow = false;
  if (reviewsMetadata) {
    if (Object.keys(reviewsMetadata).length !== 0 && reviewsMetadata.constructor === Object) {
      reviewShow = true;
    }
  }
  return (
    <div className='productInfo'>
      {reviewShow
        ? <div className={'starReviewRow'}>
          <ReviewStar rating={reviewsMetadata.ratings} />
          <ProductReview />
        </div>
        : null
      }
      <ProductCategory />
      <ProductName />
      <ProductPrice />
    </div>
  );
};