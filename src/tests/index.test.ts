import { test, expect, suite } from "vitest";
import {
    assert,
    assert_eq,
    assert_ne,
    assert_gt,
    assert_lt,
    assert_gte,
    assert_lte,
} from "../index.js";

// Existing Assert suite...
suite("Assert", () => {
    test("Should not throw for truthy values", () => {
        expect(() => assert(true)).not.toThrow();
        expect(() => assert(1)).not.toThrow();
        expect(() => assert("non-empty string")).not.toThrow();
    });
    test("Should throw for falsy values", () => {
        expect(() => assert(false)).toThrowError("Assertion Error");
        expect(() => assert(0)).toThrowError("Assertion Error");
        expect(() => assert("")).toThrowError("Assertion Error");
        expect(() => assert(null)).toThrowError("Assertion Error");
        expect(() => assert(undefined)).toThrowError("Assertion Error");
    });
    test("Should include custom message in error", () => {
        const customMsg = "Custom error message";
        expect(() => assert(false, customMsg)).toThrowError(
            `Assertion Error: ${customMsg}`,
        );
        expect(() => assert(0, customMsg)).toThrowError(
            `Assertion Error: ${customMsg}`,
        );
    });
});

suite("Assert Equality", () => {
    test("assert_eq should not throw for equal values", () => {
        expect(() => assert_eq(1, 1)).not.toThrow();
        expect(() => assert_eq("test", "test")).not.toThrow();
        expect(() => assert_eq(true, true)).not.toThrow();
    });

    test("assert_eq should throw for unequal values", () => {
        expect(() => assert_eq(1, 2)).toThrowError("Assertion Error");
        expect(() => assert_eq("test", "different")).toThrowError(
            "Assertion Error",
        );
    });

    test("assert_ne should not throw for unequal values", () => {
        expect(() => assert_ne(1, 2)).not.toThrow();
        expect(() => assert_ne("test", "different")).not.toThrow();
    });

    test("assert_ne should throw for equal values", () => {
        expect(() => assert_ne(1, 1)).toThrowError("Assertion Error");
        expect(() => assert_ne("test", "test")).toThrowError("Assertion Error");
    });
});

suite("Assert Ordering", () => {
    test("assert_gt should handle numbers correctly", () => {
        expect(() => assert_gt(2, 1)).not.toThrow();
        expect(() => assert_gt(1, 2)).toThrowError("Assertion Error");
        expect(() => assert_gt(1, 1)).toThrowError("Assertion Error");
    });

    test("assert_lt should handle numbers correctly", () => {
        expect(() => assert_lt(1, 2)).not.toThrow();
        expect(() => assert_lt(2, 1)).toThrowError("Assertion Error");
        expect(() => assert_lt(1, 1)).toThrowError("Assertion Error");
    });

    test("assert_gte should handle numbers correctly", () => {
        expect(() => assert_gte(2, 1)).not.toThrow();
        expect(() => assert_gte(1, 1)).not.toThrow();
        expect(() => assert_gte(1, 2)).toThrowError("Assertion Error");
    });

    test("assert_lte should handle numbers correctly", () => {
        expect(() => assert_lte(1, 2)).not.toThrow();
        expect(() => assert_lte(1, 1)).not.toThrow();
        expect(() => assert_lte(2, 1)).toThrowError("Assertion Error");
    });

    test("ordering functions should handle strings", () => {
        expect(() => assert_gt("b", "a")).not.toThrow();
        expect(() => assert_lt("a", "b")).not.toThrow();
        expect(() => assert_gte("b", "b")).not.toThrow();
        expect(() => assert_lte("a", "a")).not.toThrow();
    });

    test("ordering functions should handle bigint", () => {
        expect(() => assert_gt(BigInt(2), BigInt(1))).not.toThrow();
        expect(() => assert_lt(BigInt(1), BigInt(2))).not.toThrow();
        expect(() => assert_gte(BigInt(2), BigInt(2))).not.toThrow();
        expect(() => assert_lte(BigInt(1), BigInt(1))).not.toThrow();
    });

    test("custom error messages should be included", () => {
        const msg = "Custom comparison error";
        expect(() => assert_gt(1, 2, msg)).toThrowError(
            `Assertion Error: ${msg}`,
        );
        expect(() => assert_lt(2, 1, msg)).toThrowError(
            `Assertion Error: ${msg}`,
        );
        expect(() => assert_gte(1, 2, msg)).toThrowError(
            `Assertion Error: ${msg}`,
        );
        expect(() => assert_lte(2, 1, msg)).toThrowError(
            `Assertion Error: ${msg}`,
        );
    });
});
