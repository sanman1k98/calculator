import { expect, test } from "@playwright/test";

test('should subtract two numbers',async ({ request }) => {
  const result = await request.post('/api/sub', {
    data: { left: 70, right: 1 }
  })
  expect(result.ok())
  expect(await result.json()).toEqual({
    result: 69
  })
})