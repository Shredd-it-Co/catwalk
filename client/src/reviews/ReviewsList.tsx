import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { ModalContext, ReviewsContext } from '../contexts/Contexts';
import ReviewSort from './ReviewSort';
import ReviewTile from './ReviewTile';

const ReviewsList: React.FC = () => {
  const { setModalContent } = useContext(ModalContext) || {};
  const { reviews } = useContext(ReviewsContext) || {};

  const [displayedReviews, setDisplayReviews] = useState<ReactNode[]>([]);
  const [numDisplayed, setNumDisplayed] = useState(2);

  const child = <div>CHILD EXAMPLE</div>;

  const addReview = () => {
    setModalContent?.call(null, child);
  };

  const moreReviews = () => {
    if (reviews?.results) {
      if (numDisplayed === 14 || (reviews.results.length - 1) === numDisplayed) {
        setNumDisplayed(numDisplayed + 1);
        setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 0);
      } else if (numDisplayed < 15 && reviews.results.length - 1 > numDisplayed) {
        setNumDisplayed(numDisplayed + 2);
        setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 0);
      };
    }
  };


  useEffect(() => {
    if (reviews?.results) {
      const displayReviews = [];
      for (let i = 0; i < numDisplayed; i++) {
        displayReviews.push(<ReviewTile key={reviews.results[i].review_id} review={reviews.results[i]} />);
      }
      setDisplayReviews(displayReviews);
    }
  }, [reviews, numDisplayed]);

  return (
    <>
      <div className='reviewList'>
        <ReviewSort />
        <div className='reviewTileContainer'>
          {reviews
            ? [...displayedReviews]
            : null}
        </div>
        <div className="btnContainer">
          <button onClick={addReview}>Add Review</button>
          {reviews && numDisplayed < (reviews.results?.length || 16)
            ? <button onClick={moreReviews}>More Reviews</button>
            : null}
        </div>
      </div>
    </>
  );
};

export default ReviewsList;
