describe('Роутинг', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('переход на главную страницу', () => {
            cy.visit('/');
            cy.getByTestId('MainPage').should('exist');
        });

        it('переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.getByTestId('MainPage').should('exist');
        });

        it('переход на перезод на несуществующую страницу', () => {
            cy.visit('/asdadsasd');
            cy.getByTestId('NotFoundPage').should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });

        it('переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.getByTestId('ProfilePage').should('exist');
        });

        it('переход на страницу статей', () => {
            cy.visit('/articles');
            cy.getByTestId('ArticlePage').should('exist');
        });
    });
});
