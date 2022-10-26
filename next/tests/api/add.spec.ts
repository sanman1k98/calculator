import { expect, test } from '@playwright/test'

test('should add two numbers', async ({ request }) => {
  const result = await request.post('/api/add', {
    data: { x: 1, y: 1 }
  })
  expect(result.ok())
  expect(await result.json()).toEqual({
    result: 2
  })
})