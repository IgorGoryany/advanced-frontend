export const sendCommentWithClick = (text: string) => {
    cy.getByTestId('AddCommentForm.input').type(text);
    cy.wait(1000);
    cy.getByTestId('AddCommentForm.sendButton').click();
};

export const sendCommentWithEnter = (text: string) => {
    cy.getByTestId('AddCommentForm.input')
        .type(text)
        .wait(1000)
        .type('{enter}');
};

declare global {
    namespace Cypress {
        interface Chainable {
            sendCommentWithClick(text: string): Chainable<void>
            sendCommentWithEnter(text: string): Chainable<void>
        }
    }
}
