import { combineReducers } from '@reduxjs/toolkit';

import { ArticleDetailsPageSchema } from '../types';

import {
    articleDetailsRecommendationReducer,
} from './articleDetailsRecomndationSlice';
import {
    articleDetailsCommentReducer,
} from './articleDetailsCommentSlice';

// @ts-ignore
export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comment: articleDetailsCommentReducer,
    recommendation: articleDetailsRecommendationReducer,
});
