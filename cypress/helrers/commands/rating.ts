type GradeString = '1' | '2' | '3' | '4' | '5';
type GradeNumber = 1 | 2 | 3 | 4 | 5;
type Grade = GradeString | GradeNumber;

export const rate = (grade: Grade, feedback?: string) => {
    cy.getByTestId(`StarRating.${grade}`).click();
    cy.getByTestId('RatingCard.Modal.input')
        .type(feedback ?? 'test')
        .wait(500);
    cy.getByTestId('RatingCard.Modal.sendButton').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            rate(grade: Grade, feedback?: string): Chainable<void>
        }
    }
}
