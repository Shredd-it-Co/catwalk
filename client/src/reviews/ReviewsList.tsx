import React, { ReactElement, useContext } from 'react';
import Contexts from '../contexts/Contexts';
import ReviewSort from './ReviewSort';
import ReviewTile from './ReviewTile';

const ReviewsList: React.FC = () => {
  // const [displayReviews, setDisplayReviews] = useState(false);
  // const [numDisplayed, setNumDisplayed] = useState(2);
  // const [filterType, setFilterType] = useState('relevant');


  const { setModalContent } = useContext(Contexts.ModalContext) || {};
  const { reviews } = useContext(Contexts.ReviewsContext) || {};
  const child = <div>CHILD EXAMPLE</div>;


  const onClick = () => {
    setModalContent?.call(null, child);
  };

  return (
    <>
      <div className='reviewList'>
        <h2>Reviews List</h2>
        <ReviewSort />
        <div className='reviewTileContainer'>
          {reviews
            ? reviews.results.map((review): ReactElement => <ReviewTile key={review.review_id} review={review} />)
            : null
          }
        </div>
        <button onClick={onClick}>Add Review</button>
        <button>More Reviews</button>
      </div>
    </>
  );
};

export default ReviewsList;
