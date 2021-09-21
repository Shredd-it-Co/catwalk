import axios, { AxiosResponse } from 'axios';
import { product } from '../models/product.interface';
import { reviews } from '../models/reviews.interface';
import { reviewsMetaData } from '../models/reviewsMetaData.interface';
import { style } from '../models/style.interface';
import { reviewSubmission } from '../models/reviewSubmission.interface';


const apiServer = axios.create({
  baseURL: 'http://localhost:9001/api',
  timeout: 10000
});

const responseBody = (response: AxiosResponse) => response.data;

// ---Requests---

const requests = {
  get: (url: string, params?: unknown) => apiServer.get(url, params).then(responseBody),
  post: (url: string, body: unknown) => apiServer.post(url, body).then(responseBody),
  put: (url: string, body?: unknown) => apiServer.put(url, body).then(responseBody)
};

export const apiRequest = {
  getAllProducts: (): Promise<product[]> => {
    return requests.get('/products');
  },
  getProductById: (productId: number): Promise<product> => {
    return requests.get(`/products/${productId}`);
  },
  getProductStyles: (productId: number): Promise<style[]> => {
    return requests.get(`/products/${productId}/styles`);
  },
  getRelatedProducts: (productId: number): Promise<number[]> => {
    return requests.get(`/products/${productId}/related`);
  },
  getReviewsForProduct: (productId: number, page = 1, count = 5, sort = 'newest'): Promise<reviews> => {
    return requests.get('/reviews/', { params: { product_id: productId, page: page, count: count, sort: sort } });
  },
  getReviewsMetadata: (productId: number): Promise<reviewsMetaData> => {
    return requests.get('/reviews/meta', { params: { product_id: productId } });
  },
  postReview: (review: reviewSubmission): Promise<string> => {
    return requests.post('/reviews/', review);
  },
  updateReview: (reviewId: number): Promise<string> => {
    return requests.put(`/reviews/${reviewId}/helpful`);
  },
  reportReview: (reviewId: number): Promise<string> => {
    return requests.put(`/reviews/${reviewId}/report`);
  }
};
