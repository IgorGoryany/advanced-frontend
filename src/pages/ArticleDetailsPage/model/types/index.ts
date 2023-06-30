import {
    ArticleDetailsRecommendationSchema,
} from './ArticleDetailsRecommendationSchema';
import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';

export interface ArticleDetailsPageSchema {
    comment?: ArticleDetailsCommentSchema
    recommendation?: ArticleDetailsRecommendationSchema
}
