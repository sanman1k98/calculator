import { expect, test } from "@playwright/test";

test('should divide a number using another', async ({ request }) => {
  const result = await request.post('/api/div', {
    data: { left: 51, right: 17 }
  })
  expect(result.ok())
  expect(await result.json()).toEqual({
    result: 3
  })
})

test('should not result in a number when dividing by zero', async ({ request }) => {
  const result = await request.post('/api/div', {
    data: { left: 51, right: 0 }
  })
  expect(result.ok())
  expect(await result.json())
})