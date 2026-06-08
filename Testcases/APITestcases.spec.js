import { test, expect } from '@playwright/test'

test('GET Request 1', async ({ request }) => {

    const response = await request.get('https://api.restful-api.dev/objects')
    const responseBody = await response.json()
    console.log(responseBody)
    // for (const body of responseBody) {
    //     console.log(body.data)
    // }

})

test('POST Request ', async ({ request }) => {

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
    const responseBody = await response.json()
    console.log(responseBody)
})

// {
//     id: 'ff8081819d82fab6019e888276282dc7',
//         name: 'Swati MacBook Pro 16',
//             createdAt: 1780406711848,
//                 data: {
//         year: 2019,
//             price: 1849.99,
//                 'CPU model': 'Intel Core i9',
//                     'Hard disk size': '1 TB'
//     }
// }

test('PUT Request ', async ({ request }) => {

   const response = await request.put('https://api.restful-api.dev/objects/ff8081819d82fab6019e888276282dc7',
        {
        headers: {'Content-Type': 'application/json'},
        data: {
            "name": "Swati MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Apple M1 Pro",
                "Hard disk size": "1 TB"
            }
        }
    })

    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    console.log(responseBody)
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