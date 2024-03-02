import * as commands from '../helrers';

const serverUrl = Cypress.env('server');

Cypress.Commands.addAll(commands);

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<void>
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
export default {};
