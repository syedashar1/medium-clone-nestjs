import { ArticleType } from './article.type';

export interface ArticlesResponseInterface {
  articles: ArticleType[];
  articlesCount: number;
}
