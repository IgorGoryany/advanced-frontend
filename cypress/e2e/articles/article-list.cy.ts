const text = 'Webpack news';

describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login();
        cy.visit('articles');
        cy.getByTestId('ArticleList').should('exist');
    });
    it('и статьи успешно подгружаются', () => {
        cy.getByTestId('ArticlePage').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it('и фильтрует по политическим статьям', () => {
        cy.getByTestId('ArticleSort.Tabs.2').click();
        cy.getByTestId('ArticleListItem').should('have.length', 1);
    });
    it('Вводит что в поиск', () => {
        cy.getByTestId('ArticleSort.input').type(text);
        cy.getByTestId('ArticleListItem.Title').should('have.text', text);
    });
    it('перехдит по ссылке которую ему скинули', () => {
        cy.visit('articles?order=desc&search=Webpack+news&sort=createdAt&type=ALL');
        cy.getByTestId('ArticleSort.input').should('have.value', text);
        cy.getByTestId('ArticleListItem.Title')
            .should('have.length', 1)
            .and('have.text', text);
    });
    it('Вводит в инпут аброкадабру и меняет язык', () => {
        cy.getByTestId('ArticleSort.input').type('asdasdsaddadasdadadad');
        cy.getByTestId('ArticleListItem.Title')
            .should('have.length', 0);

        cy.getByTestId('ArticleListNotFound.Title').should('exist').and('have.text', 'Статьи не найдены');
        cy.getByTestId('LangSwitcher').click().click();
        cy.getByTestId('ArticleListNotFound.Title').should('have.text', 'Articles not found');
        cy.getByTestId('LangSwitcher').click();
        cy.getByTestId('ArticleListNotFound.Title').should('have.text', 'Статьи не найдены');
    });
});
