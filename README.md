# @tsxo/assure

A very simple, lightweight, type-safe assertion library for JavaScript and TypeScript.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue)](https://www.typescriptlang.org/)
![npm](https://img.shields.io/npm/v/@tsxo/assure)
![Tree Shakeable](https://img.shields.io/badge/Tree%20Shakeable-✔-brightgreen)

## Features

- **Type Safety** - Full TypeScript support.
- **Type Narrows** - Ability to narrow types via `assert`.
- **Small and Fast** - Minimal overhead for your projects.
- **ESM and CJS** - Seamlessly supports both ECMAScript Modules (ESM) and CommonJS (CJS) for flexibility across modern and legacy projects.
- **Tree-Shaking Ready** - Designed with tree-shaking in mind to optimize application size.

## Installation

```bash
npm install @tsxo/assure
```

## Quick Start

The library provides a simple API for asserting conditions and throwing meaningful errors when conditions fail.

```typescript
import { assert } from "@tsxo/assure";

type MyType = "a" | "b";

function act(v: MyType | undefined) {
    assert(v); // v is now narrowed to MyType
}
```

## API Reference

### Base Assertion

#### `assert(value: unknown, msg?: string): asserts value`

The core assertion function that checks if a value is truthy. Will type narrow.

```typescript
assert(someValue, "Value must be truthy");
```

### Equality Assertions

#### `assert_eq<T>(l: T, r: T, msg?: string): void`

Asserts that two values are strictly equal.

```typescript
assert_eq(5, 5); // passes
assert_eq("hello", "hello"); // passes
assert_eq(5, 6); // throws error
```

#### `assert_ne<T>(l: T, r: T, msg?: string): void`

Asserts that two values are not strictly equal.

```typescript
assert_ne(5, 6); // passes
assert_ne("hello", "world"); // passes
assert_ne(5, 5); // throws error
```

### Ordering Assertions

#### `assert_gt<T extends Ordered>(l: T, r: T, msg?: string): void`

Asserts that the left value is greater than the right value.

```typescript
assert_gt(5, 3); // passes
assert_gt(3, 5); // throws error
```

#### `assert_lt<T extends Ordered>(l: T, r: T, msg?: string): void`

Asserts that the left value is less than the right value.

```typescript
assert_lt(3, 5); // passes
assert_lt(5, 3); // throws error
```

#### `assert_gte<T extends Ordered>(l: T, r: T, msg?: string): void`

Asserts that the left value is greater than or equal to the right value.

```typescript
assert_gte(5, 3); // passes
assert_gte(5, 5); // passes
assert_gte(3, 5); // throws error
```

#### `assert_lte<T extends Ordered>(l: T, r: T, msg?: string): void`

Asserts that the left value is less than or equal to the right value.

```typescript
assert_lte(3, 5); // passes
assert_lte(5, 5); // passes
assert_lte(5, 3); // throws error
```

## Error Messages

All assertion functions accept an optional message parameter that will be included in the error when the assertion fails:

```typescript
assert_eq(5, 6, "Numbers must be equal"); // throws "Assertion Error: Numbers must be equal"
```

## Acknowledgments

This project draws inspiration from several excellent assertion libraries:

- [Node.js Assert](https://nodejs.org/api/assert.html) - The built-in Node.js assertion module
- [tiny-invariant](https://github.com/alexreardon/tiny-invariant) - A tiny invariant function.
- [claims](https://crates.io/crates/claims) - Additional assertion macros for testing in Rust applications.

## License

MIT License - fork, modify and use however you want.
