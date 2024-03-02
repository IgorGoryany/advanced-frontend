export const getByTestId = (testId: string) => cy.get(`[data-testid="${testId}"]`);
