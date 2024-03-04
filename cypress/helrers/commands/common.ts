import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import type { User } from '@/entities/User';

export const getByTestId = (testId: string) => cy.get(`[data-testid="${testId}"]`);

const serverUrl = Cypress.env('serverUrl');
const user = Cypress.env('testUser');

export const login = (username: string = user.username, password: string = user.password) => cy.request<User>({
    method: 'POST',
    url: `${serverUrl}/login`,
    body: {
        username,
        password,
    },
}).then((response) => {
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.body));
    return response.body;
});

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
        }
    }
}
