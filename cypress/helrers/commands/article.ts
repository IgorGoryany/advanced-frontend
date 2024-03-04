import { Article } from '@/entities/Article';

import { defaultArticle } from '../const/article';

const serverUrl = Cypress.env('serverUrl');
const headers = Cypress.env('authorizationHeaders');

export const createArticle = (article?: Article) => cy.request<Article>({
    method: 'POST',
    url: `${serverUrl}/articles`,
    headers,
    body: article ?? defaultArticle,
}).then((response) => response.body);

export const deleteArticle = (articleId: string | number) => {
    cy.request<Article>({
        method: 'DELETE',
        headers,
        url: `${serverUrl}/articles/${articleId}`,
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>
            deleteArticle(articleId: string | number): Chainable<void>
        }
    }
}
