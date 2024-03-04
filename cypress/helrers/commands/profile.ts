const serverUrl = Cypress.env('serverUrl');

export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();

    cy.getByTestId('ProfileCard.firstname')
        .clear()
        .type(firstname);

    cy.getByTestId('ProfileCard.lastname')
        .clear()
        .type(lastname);

    cy.getByTestId('EditableProfileCardHeader.SaveEditButton').click();
};

export const resetProfile = (profileId: string | number) => {
    cy.request({
        method: 'PUT',
        url: `${serverUrl}/profile/${profileId}`,
        headers: { Authorization: 'asdasd' },
        body: {
            id: 4,
            first: 'test',
            lastname: 'user',
            age: 22,
            currency: 'RUB',
            country: 'Россия',
            city: 'testCountry',
            username: 'testuser',
            avatar: 'https://sun9-68.userapi.com/impf/c824409/v824409851/fca00/aGQuUsQM-TM.jpg?size=1620x2160&quality=96&sign=511bd599f11958886661b70d4727da2f&type=album',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>
            resetProfile(profileId: string | number): Chainable<void>
        }
    }
}
