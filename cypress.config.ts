import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: 'http://localhost:3000/',
        env: {
            serverUrl: 'http://localhost:8000',
            testUser: {
                username: 'testuser',
                password: '123',
            },
        },
    },
});
