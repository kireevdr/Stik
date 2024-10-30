import randomString from "./randomString";

test('string length', () => {
	expect(randomString(8).length).toBe(8);
});
test('is string', () => {
	expect(randomString(8)).toMatch(/^[a-z0-9]+$/);
});

test('is random', () => {
	expect(randomString(8)).not.toBe(randomString(8));
});
test('is string', () => {
	expect(randomString(8, true)).toMatch(/^[A-Za-z0-9]+$/);
});
test('upper', () => {
	expect(randomString(8, true)).not.toMatch(/^[a-z0-9]+$/);
});
