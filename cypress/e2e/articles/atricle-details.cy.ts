let articleId: string | number;
describe('Пользователь заходит на старницу статьи', () => {
    before(() => {
        cy.createArticle().then((article) => {
            cy.visit(`articles/${article.id}`);
            articleId = article.id;
        });
    });
    beforeEach(() => {
        cy.login();
        cy.visit(`articles/${articleId}`);
    });
    after(() => {
        cy.deleteArticle(articleId);
    });
    it('И видит статью', () => {
        cy.getByTestId('ArticleDetailsPage').should('exist');
    });
    it('И видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationList').should('exist');
        cy.getByTestId('ArticleRecommendationList.title.Title')
            .should('have.text', 'Рекомендации');
    });
    it('И сотавляет коментарий', () => {
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.sendCommentWithClick('test comment');
        cy.getByTestId('CommentCard').should('have.length', 1);
    });
    it('И ставит оценку', () => {
        const starNumber = 3;
        cy.getByTestId('StarRating').scrollIntoView();
        cy.getByTestId('RatingCard.title.Title').should('have.text', 'Оцените статью');
        cy.rate(starNumber);
        cy.getByTestId('RatingCard.title.Title').should('have.text', 'Спасибо за ваш отзыв');
        cy.get('[data-selected="true"]').should('have.length', starNumber);
    });
});
