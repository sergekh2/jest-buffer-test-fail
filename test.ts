test("i-need-buffer", () => {
  const buffer = Buffer.from("hello");
  expect(buffer instanceof Uint8Array).toBe(true);
});
