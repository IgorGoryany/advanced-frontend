import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

const serverUrl = Cypress.env('serverUrl');
const user = Cypress.env('testUser');
export const login = (username: string = user.username, password: string = user.password) => {
    cy.request({
        method: 'POST',
        url: `${serverUrl}/login`,
        body: {
            username,
            password,
        },
    }).then((resp) => {
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(resp.body));
    });
};
