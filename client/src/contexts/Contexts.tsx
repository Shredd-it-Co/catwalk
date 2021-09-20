import { createContext } from 'react';
import { modalProps } from '../models/modal.interface';
import { product } from '../models/product.interface';
import { reviewMetaData } from '../models/reviewMetaData.interface';
import { reviewsProps } from '../models/reviews.interface';
import { style } from '../models/style.interface';


const ModalContext = createContext<modalProps>(undefined);
ModalContext.displayName = 'ModalContext';

const ProductsContext = createContext<product[]>(undefined);
ProductsContext.displayName = 'ProductsContext';

const ProductContext = createContext<product>(undefined);
ProductContext.displayName = 'ProductContext';

const ProductStyleContext = createContext<style[]>(undefined);
ProductStyleContext.displayName = 'ProductStyleContext';

const RelatedProducts = createContext<number[]>(undefined);
RelatedProducts.displayName = 'RelatedProducts';

const ReviewsContext = createContext<reviewsProps>(undefined);
ReviewsContext.displayName = 'ReviewsContext';

const ReviewsMetadataContext = createContext<reviewMetaData>(undefined);
ReviewsMetadataContext.displayName = 'ReviewsMetadataContext';


const Contexts = {
  ModalContext,
  ProductsContext,
  ProductContext,
  ProductStyleContext,
  RelatedProducts,
  ReviewsContext,
  ReviewsMetadataContext
};

export default Contexts;
