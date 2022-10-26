import { expect, test } from "@playwright/test";

test('should divide a number using another', async ({ request }) => {
  const result = await request.post('/api/div', {
    data: { x: 51, y: 17 }
  })
  expect(result.ok())
  expect(await result.json()).toEqual({
    result: 3
  })
})

test('should not result in a number when dividing by zero', async ({ request }) => {
  const result = await request.post('/api/div', {
    data: { x: 51, y: 0 }
  })
  expect(!result.ok())
  expect(result.status() === 500)
})

test('should return 1.5 when dividing 3 with 2', async ({ request }) => {
  const result = await request.post('/api/div', {
    data: { x: 3, y: 2 }
  })
  expect(result.ok())
  expect(await result.json()).toEqual({
    result: 1.5
  })
})