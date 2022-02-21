/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'tools/loadable';

export const NotFound = lazyLoad(
  () => import('./index'),
  module => module.NotFound,
);
