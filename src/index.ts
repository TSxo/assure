type Ordered = number | string | bigint | Date;

/**
 * Asserts that a given value is truthy and type narrows.
 * If the value is falsy, it throws an error with an optional custom message.
 *
 * @param {unknown} v - The value to check for truthiness.
 * @param {string} [msg] - An optional custom error message to include in the thrown error.
 *
 * @throws {Error} If the value is falsy, throws an error.
 */
export function assert(v: unknown, msg?: string): asserts v {
    const err = "Assertion Error";

    if (!v) {
        const out = msg ? `${err}: ${msg}` : err;
        throw new Error(out);
    }
}

/**
 * Asserts that two values are strictly equal.
 *
 * @template T
 * @param {T} l - The left-hand value to compare.
 * @param {T} r - The right-hand value to compare.
 * @param {string} [msg] - An optional custom error message to include in the thrown error.
 *
 * @throws {Error} If the values are not strictly equal.
 */
export function assert_eq<T>(l: T, r: T, msg?: string): void {
    assert(l === r, msg);
}

/**
 * Asserts that two values are strictly not equal.
 *
 * @template T
 * @param {T} l - The left-hand value to compare.
 * @param {T} r - The right-hand value to compare.
 * @param {string} [msg] - An optional custom error message to include in the thrown error.
 *
 * @throws {Error} If the values are strictly equal.
 */
export function assert_ne<T>(l: T, r: T, msg?: string): void {
    assert(l !== r, msg);
}

/**
 * Asserts that the left-hand value is greater than the right-hand value.
 *
 * @template T
 * @param {T} l - The left-hand value to compare.
 * @param {T} r - The right-hand value to compare.
 * @param {string} [msg] - An optional custom error message to include in the thrown error.
 *
 * @throws {Error} If the left-hand value is not greater than the right-hand value.
 */
export function assert_gt<T extends Ordered>(l: T, r: T, msg?: string): void {
    assert(l > r, msg);
}

/**
 * Asserts that the left-hand value is less than the right-hand value.
 *
 * @template T
 * @param {T} l - The left-hand value to compare.
 * @param {T} r - The right-hand value to compare.
 * @param {string} [msg] - An optional custom error message to include in the thrown error.
 *
 * @throws {Error} If the left-hand value is not less than the right-hand value.
 */
export function assert_lt<T extends Ordered>(l: T, r: T, msg?: string): void {
    assert(l < r, msg);
}

/**
 * Asserts that the left-hand value is greater than or equal to the right-hand value.
 *
 * @template T
 * @param {T} l - The left-hand value to compare.
 * @param {T} r - The right-hand value to compare.
 * @param {string} [msg] - An optional custom error message to include in the thrown error.
 *
 * @throws {Error} If the left-hand value is not greater than or equal to the right-hand value.
 */
export function assert_gte<T extends Ordered>(l: T, r: T, msg?: string): void {
    assert(l >= r, msg);
}

/**
 * Asserts that the left-hand value is less than or equal to the right-hand value.
 *
 * @template T
 * @param {T} l - The left-hand value to compare.
 * @param {T} r - The right-hand value to compare.
 * @param {string} [msg] - An optional custom error message to include in the thrown error.
 *
 * @throws {Error} If the left-hand value is not less than or equal to the right-hand value.
 */
export function assert_lte<T extends Ordered>(l: T, r: T, msg?: string): void {
    assert(l <= r, msg);
}
