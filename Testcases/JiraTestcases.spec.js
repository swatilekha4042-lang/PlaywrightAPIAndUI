import { test,expect } from "@playwright/test"

test('Api to fetch the Jira dashboards',async ({request}) => {
    const email = process.env.JIRA_EMAIL
    const apiToken = process.env.JIRA_API_TOKEN
    const baseUrl = 'https://swatilekha4042.atlassian.net'

    expect(email).toBeDefined();
    expect(apiToken).toBeDefined();

    const auth = Buffer.from(`${email}:${apiToken}`).toString('base64')
    
    const response = await request.get(`${baseUrl}/rest/api/3/dashboard`,{
        headers:{
            Accept:'application/json',
            Authorization:`Basic ${auth}`
        }
    })

    expect(response.ok()).toBeTruthy()

    const body = await response.json()
    console.log(JSON.stringify(body, null, 2));
})