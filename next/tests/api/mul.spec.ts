
import { expect, test } from '@playwright/test'

test('should multiply two numbers', async ({ request }) => {
  const result = await request.post('/api/mul', {
    data: { x: 1, y: 1 }
  })
  expect(result.ok())
  expect(await result.json()).toEqual({
    result: 1
  })
})