let profileId: number;

describe('Пользователь заходит настраницу профиля', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`/profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('И редактирует его', () => {
        const firstname = 'new firstname';
        const lastname = 'new lastname';
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
        cy.getByTestId('ProfileCard.lastname').should('have.value', 'user');
        cy.updateProfile(firstname, lastname);

        cy.getByTestId('ProfileCard.firstname').should('have.value', firstname);
        cy.getByTestId('ProfileCard.lastname').should('have.value', lastname);
    });
});
