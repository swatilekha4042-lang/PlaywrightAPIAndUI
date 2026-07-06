import { test as base, expect, request } from '@playwright/test';

export const test = base.extend({
    apiContext: async ({ }, use) => {
        const baseURL = 'https://api.restful-api.dev';
        //Step 1 : Create context to register
        const registerContext = await request.newContext({
            baseURL,
            extraHTTPHeaders: {
                'x-api-key': process.env.API_KEY,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });

        //Step 2  : Register user and get JWT token

        const registerResponse = await registerContext.post('/register', {
            data: {
                email: `swati_${Date.now()}@example.com`,
                password: 'Password123',
                name: 'Swati'
            }
        })

        expect(registerResponse.status()).toBe(200)
        const registerBody = await registerResponse.json()
        console.log(registerBody)

        const jwtToken = registerBody.token;
        expect(jwtToken).toBeTruthy();

        //Step 3 : Create authenticated context
        const apiContext = await request.newContext({
            baseURL,
            extraHTTPHeaders: {
                'x-api-key': process.env.API_KEY,
                Accept: 'application/json',
                Authorization: `Bearer ${jwtToken}`
            }
        });

        //Step 4: Use authenticated context
        await use(apiContext);

        //Step 5: Clean up
        await apiContext.dispose();
        await registerContext.dispose();
    }
});

export { expect };

