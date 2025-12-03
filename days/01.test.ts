import {assertEquals} from "std/assert/assert_equals.ts";
import '../extension-methods.ts';
import {p1, p2} from './01.ts';

const input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

Deno.test('it should run the first part of day 01 correctly', () => {
  const result = p1(input);
  const expected = 3;
  assertEquals(result, expected);
});

Deno.test('it should run the second part of day 01 correctly', () => {
  const result = p2(input);
  const expected = 6;
  assertEquals(result, expected);
});
