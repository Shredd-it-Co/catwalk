import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ModalContext } from '../../contexts/Contexts';
import { product } from '../../models/product.interface';
import { style } from '../../models/style.interface';
import { apiRequest } from '../../utils/apiRequests';
import calAvgRating from '../../utils/calAvgRating';
import CarouselCard from './carouselCard';
import findImageUrl from './findImageUrl';

interface CarouselCardLoaderProps {
  id: number
}

const CarouselCardLoader: React.FC<CarouselCardLoaderProps> = ({ id }) => {
  const [style, setStyle] = useState<style | null>(null);
  useEffect(() => {
    apiRequest.getProductStyles(id)
      .then(setStyle)
      .catch(err => console.log(err));
  }, []);

  const [product, setProduct] = useState<product | null>(null);
  useEffect(() => {
    apiRequest.getProductById(id)
      .then(setProduct)
      .catch(err => console.log(err));
  }, []);

  const [rating, setRating] = useState(0);
  useEffect(() => {
    apiRequest.getReviewsMetadata(id)
      .then((ratings) => {
        setRating(calAvgRating(ratings.ratings));
      });
  });

  const history = useHistory();
  const { setModalContent } = useContext(ModalContext) || {};

  return <React.Fragment>
    <CarouselCard
      imageUrl={findImageUrl(style)}
      metaData={{ category: product?.category || '', name: product?.name || '', price: product?.default_price || '' }}
      rating={rating}
      actionChild={<span>v</span>}
      actionCallback={() => setModalContent?.call(null, <span>Hello</span>)}
      localCallback={() => history.push('/products/' + product?.id)}
    />
  </React.Fragment>;
};

export default CarouselCardLoader;