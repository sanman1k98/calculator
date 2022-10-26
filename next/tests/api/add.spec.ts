import { expect, test } from '@playwright/test'

test('should add two numbers', async ({ request }) => {
  const result = await request.post('/api/add', {
    data: { left: 1, right: 1 }
  })
  expect(result.ok())
  expect(await result.json()).toEqual({
    result: 2
  })
})