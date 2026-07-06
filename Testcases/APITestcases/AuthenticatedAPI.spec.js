import { expect, test } from '../../Fixtures/apiFixtures'

let objectId;
test.beforeAll(async ({ apiContext }) => {
  const response = await apiContext.post('/collections/collection1/objects', {
    params: {
      'auth-type': 'jwt'
    },
    data: {
      name: 'Swati MacBook Pro 16',
      data: {
        "year": 2019,
        "price": 1849.99,
        "CPU model": 'Intel Core i9',
        "Hard disk size": '1 TB'
      }
    }
  });

  expect(response.status()).toBe(200)
  const responseBody = await response.json();
  console.log('Created object:', JSON.stringify(responseBody, null, 2));
  objectId = responseBody.id;
  expect(objectId).toBeTruthy();

});

test('Update any object using PUT', async ({ apiContext }) => {

  const response1 = await apiContext.put(`/collections/collection1/objects/${objectId}`, {
    params: {
      'auth-type': 'jwt'
    },
    data: {
      "name": "Swati MacBook Pro 16",
      "data": {
        "year": 2020,
        "price": 1849.99,
        "CPU model": "M2",
        "Hard disk size": "1 TB"
      }
    }
  });

  expect(response1.status()).toBe(200)
  const responseBody1 = await response1.json()
  console.log(`The response is :`)
  console.log(responseBody1)

})

test('Update any object using PATCH', async ({ apiContext }) => {

  const response1 = await apiContext.patch(`/collections/collection1/objects/${objectId}`, {
    params: {
      'auth-type': 'jwt'
    },
    data: {
      "name": "Apple MacBook Pro 16 (Updated Name)"
    }
  });

  expect(response1.status()).toBe(200)
  const responseBody1 = await response1.json()
  console.log(`The response is :`)
  console.log(responseBody1)

})

test('Delete an object from collection', async ({ apiContext }) => {

  const response1 = await apiContext.delete(`/collections/collection1/objects/${objectId}`, {
    params: {
      'auth-type': 'jwt'
    }
  })
  expect(response1.status()).toBe(200)
  const responseBody1 = await response1.json()
  console.log(`The response is :`)
  console.log(responseBody1)

})
