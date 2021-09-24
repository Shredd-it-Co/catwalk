import { characteristics } from '../../models/reviewsMetaData.interface';
import { comparison } from './Context';

export default function buildComparisons(productFrom: characteristics | null, productTo: characteristics | null): comparison {
  const comparison: comparison = {};
  if (productFrom && productTo) {
    for (const characteristic in productFrom) {
      comparison[characteristic] = {
        mainValue: productFrom[characteristic].value,
        otherValue: null
      };
    }
    for (const characteristic in productTo) {
      if (comparison[characteristic]) {
        comparison[characteristic].otherValue = productTo[characteristic].value;
      } else {
        comparison[characteristic] = {
          mainValue: null,
          otherValue: productTo[characteristic].value
        };
      }
    }
  }
  return comparison;
}