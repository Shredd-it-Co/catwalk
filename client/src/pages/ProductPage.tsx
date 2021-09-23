import React, { Props, ReactNode, useState } from 'react';
import Contexts from '../contexts/Contexts';
import * as Providers from '../contexts/Providers';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Overview from '../overview/overview';
import Related from '../related/related';
import Reviews from '../reviews/Reviews';
import Modal from '../utils/Modal';

interface ProductPageProps extends Props<typeof ProductPage> {
  match: {
    params: {
      'product_id': string
    }
  },
}

const ProductPage:React.FC<ProductPageProps> = (props: ProductPageProps) => {
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  console.log(props);
  console.log(props.match.params.product_id);
  return (
    <Contexts.ModalContext.Provider value={{ modalContent, setModalContent }}>
      <Providers.ProductsProvider>
        <Providers.ProductProvider>
          <Providers.ReviewsMetadataProvider>
            <Providers.ProductSytlesProvider>
              <Overview />
              <Providers.RelatedProductsProvider>
                <Related />
              </Providers.RelatedProductsProvider>
            </Providers.ProductSytlesProvider>
            <Providers.ReviewsProvider>
              <Reviews />
            </Providers.ReviewsProvider>
          </Providers.ReviewsMetadataProvider>
        </Providers.ProductProvider>
      </Providers.ProductsProvider>
      <Modal />
    </Contexts.ModalContext.Provider>
  );
};

export default ProductPage;