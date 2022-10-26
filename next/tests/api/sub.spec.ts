import { expect, test } from "@playwright/test";

test('should subtract two numbers',async ({ request }) => {
  const result = await request.post('/api/sub', {
    data: { x: 70, y: 1 }
  })
  expect(result.ok())
  expect(await result.json()).toEqual({
    result: 69
  })
})