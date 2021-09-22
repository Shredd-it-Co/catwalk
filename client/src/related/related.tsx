import React, { useContext } from 'react';
import Contexts from '../contexts/Contexts';
import Carousel from './carousel/carousel';
import CarouselCardLoader from './carouselCard/carouselCardLoader';

const Related: React.FC = () => {
  const ids = useContext(Contexts.RelatedProducts) || [];
  return <React.Fragment>
    <h2>Related Items</h2>
    <Carousel
      title="Related Products"
      ids={ids}
      cardCreator={id => (<CarouselCardLoader key={id} id={id} />)}
    />
  </React.Fragment>;
};

export default Related;