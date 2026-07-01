import { test, expect } from '@playwright/test'

test('GET Request 1', async ({ request }) => {

    const response = await request.get('https://api.restful-api.dev/objects')
    const responseBody = await response.json()
    console.log(responseBody)
    // for (const body of responseBody) {
    //     console.log(body.data)
    // }

})

test.only('POST Request ', async ({ request }) => {

   const response = await request.post('https://api.restful-api.dev/objects',
        {
        headers: {'Content-Type': 'application/json'},
        data: {
            "name": "Swati MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }
    })

    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    const responseBody = await response.json()
    console.log("============ POST RESPONSE ===========")
    console.log(responseBody)
    
    const{id, createdAt, ...bodyWithoutIdAndCreatedAt } = responseBody
    bodyWithoutIdAndCreatedAt.name = 'Updated Swati MacBook Pro 16';

    //Using PUT METHOD 
    const putResponse = await request.put(`https://api.restful-api.dev/objects/${id}`,
        {
        headers: {'Content-Type': 'application/json'},
        data: bodyWithoutIdAndCreatedAt
    })

    expect(putResponse.status()).toBe(200)
    expect(putResponse.ok()).toBeTruthy();
    const putResponseBody = await putResponse.json()
    console.log("=========== PUT RESPONSE =============")
    console.log(putResponseBody)

    
})

test('PATCH Request ', async ({ request }) => {

   const response = await request.put('https://api.restful-api.dev/objects/ff8081819d82fab6019e888276282dc7',
        {
        headers: {'Content-Type': 'application/json'},
        data: {
            "name": "Swati MacBook Pro 16 Updated",
        }
    })

    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    console.log(responseBody)
})