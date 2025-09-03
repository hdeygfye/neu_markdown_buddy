# V Programming Language - Complete Real-World Tutorial & Utility Library
## From Beginner to Advanced with Practical Examples

This comprehensive tutorial teaches you V programming with real-world examples, including JSON handling, file operations, web APIs, and complete project implementations. Perfect for Rapid Application Development (RAD) with practical, copy-paste ready code.

**V Language Official Resources:**
- [V Standard Library Documentation](https://modules.vlang.io/)
- [Official V Documentation](https://docs.vlang.io/introduction.html)

## 🚀 Why V Programming Language?

V is a statically typed compiled programming language designed for building maintainable software with:
- **Simple Syntax**: Clean, readable code similar to Go/Python
- **Fast Compilation**: Compiles to native binaries in milliseconds  
- **Memory Safety**: No null pointers, buffer overflows, or memory leaks
- **Cross-Platform**: Linux, macOS, Windows, and more
- **No Dependencies**: Ships with everything you need
- **Interoperability**: Seamless C integration
- **Real-World Ready**: Built-in JSON, HTTP, file system, and database support

## 🎯 What You'll Learn

By the end of this tutorial, you'll have:
- Complete understanding of V programming fundamentals
- Real-world utility library for common tasks
- JSON data handling and file operations
- Web API development skills
- Database integration techniques
- Complete project examples you can use immediately

## 📚 Table of Contents

### 🟢 **BEGINNER LEVEL**

1. [Quick Start Guide](#1-quick-start-guide)
   - [Installation & Setup](#installation--setup)
   - [Your First V Program](#your-first-v-program)
   - [Development Environment](#development-environment)

2. [V Language Fundamentals](#2-v-language-fundamentals)
   - [Basic Syntax](#basic-syntax)
   - [Variables & Constants](#variables--constants)
   - [Data Types](#data-types)
   - [Functions](#functions)

3. [Control Flow & Logic](#3-control-flow--logic)
   - [Conditionals](#conditionals)
   - [Loops](#loops)
   - [Pattern Matching](#pattern-matching)

### 🟡 **INTERMEDIATE LEVEL**

- Data Structures
     - [Arrays & Slices](#arrays)
     - [Maps & Dictionaries](#maps)
     - [Structs & Methods](#structs)
     - [Enums](#enums)
     - [Sum Types](#sum-types)

- Advanced Features
    - [Error Handling](#optionresult-types-and-error-handling)
    - [Memory Management](#3-memory-management-best-practices)
    - [Generics](#generics)
    - [Interfaces](#interfaces)

- Modules & Organization
    - [Modules](#modules)
    - [Creating Modules](#create-modules)
    - [Package Management](#publish-package)

### 🔴 **ADVANCED LEVEL**

- [Concurrency & Performance](#concurrency)
    - [Spawning Tasks](#spawning-concurrent-tasks)
    - [Channels](#channels)
    - [Shared Objects](#shared-objects)
    - [Performance Tuning](#performance-tuning)

- System Programming

- Web Development

### 🔧 **UTILITY LIBRARY** (Refactored for Reusability)

> **Refactoring Principles Applied:**
> - **DRY (Don't Repeat Yourself)**: Extracted common patterns into reusable functions
> - **Single Responsibility**: Each function has one clear purpose
> - **Composition over Inheritance**: Using structs to compose functionality
> - **Generic Programming**: Leveraging V's generics for type-safe reusable code
> - **Error Handling Consistency**: Unified error handling patterns throughout
> - **Configuration-Driven**: Configurable behavior instead of hard-coded values

- [String Utilities](#10-string-utilities) - *Refactored with character classification helpers and reusable string processing functions*
- [File System Utilities](#11-file-system-utilities) - *Refactored with generic operation wrappers and consistent error handling*
- [Data Processing Utilities](#12-data-processing-utilities) - *Refactored with chainable pipeline operations and efficient algorithms*
- [Network Utilities](#13-network-utilities) - *Refactored with configurable HTTP client and retry mechanisms*
- [Math & Algorithm Utilities](#14-math--algorithm-utilities) - *Refactored with optimized algorithms and reusable mathematical utilities*

### 🎯 **REAL-WORLD PROJECTS**

- [Complete Project Examples](#15-complete-project-examples)
    - [CLI Application](#cli-application)
    - [Web API Server](#web-api-server)
    - [Data Processing Pipeline](#data-processing-pipeline)

### ✅ **GUIDES AND REFERENCES**

- [Best Practices & Patterns](#16-best-practices--patterns)
- [Performance Tips](#performance-tips)
- Testing & Debugging
- Deployment Guide
- [Quick Reference](#20-quick-reference)

---

## 1. Quick Start Guide

### Installation & Setup

#### Installing V from Source (Recommended)

The best way to get the latest V is to install from source:
```bash
git clone --depth=1 https://github.com/vlang/v
cd v
make
```

Note: If you are on windows, outside of WSL, run `make.bat` instead of `make`, in a CMD shell.
Note: On Ubuntu/Debian, you may need to run `sudo apt install git build-essential make` first.

For more details, see the
[Installing V](https://github.com/vlang/v/blob/master/README.md#installing-v-from-source)
section in the README.md.

## Upgrading V to latest version

If V is already installed on a machine, it can be upgraded to its latest version
by using the V's built-in self-updater.
To do so, run the command `v up`.

## Packaging V for distribution
See the [notes on how to prepare a package for V](packaging_v_for_distributions.md) .

## Getting started

You can let V automatically set up the bare-bones structure of a project for you
by using any of the following commands in a terminal:

* `v init` → adds necessary files to the current folder to make it a V project
* `v new abc` → creates a new project in the new folder `abc`, by default a "hello world" project.
* `v new --web abcd` → creates a new project in the new folder `abcd`, using the vweb template.

## Table of Contents

<table>
<tr><td width=33% valign=top>

* [Hello world](#hello-world)
* [Running a project folder](#running-a-project-folder-with-several-files)
* [Comments](#comments)
* [Functions](#functions)
    * [Hoisting](#hoisting)
    * [Returning multiple values](#returning-multiple-values)
* [Symbol visibility](#symbol-visibility)
* [Variables](#variables)
    * [Mutable variables](#mutable-variables)
    * [Initialization vs assignment](#initialization-vs-assignment)
    * [Warnings and declaration errors](#warnings-and-declaration-errors)
* [V types](#v-types)
    * [Primitive types](#primitive-types)
    * [Strings](#strings)
    * [Runes](#runes)
    * [Numbers](#numbers)
    * [Arrays](#arrays)
        * [Multidimensional arrays](#multidimensional-arrays)
        * [Array methods](#array-methods)
        * [Array slices](#array-slices)
    * [Fixed size arrays](#fixed-size-arrays)
    * [Maps](#maps)
        * [Map update syntax](#map-update-syntax)

</td><td width=33% valign=top>

* [Module imports](#module-imports)
    * [Selective imports](#selective-imports)
    * [Module hierarchy](#module-hierarchy)
    * [Module import aliasing](#module-import-aliasing)
* [Statements & expressions](#statements--expressions)
    * [If](#if)
        * [`If` expressions](#if-expressions)
        * [`If` unwrapping](#if-unwrapping)
    * [Match](#match)
    * [In operator](#in-operator)
    * [For loop](#for-loop)
    * [Defer](#defer)
    * [Goto](#goto)
* [Structs](#structs)
    * [Heap structs](#heap-structs)
    * [Default field values](#default-field-values)
    * [Required fields](#required-fields)
    * [Short struct literal syntax](#short-struct-literal-syntax)
    * [Struct update syntax](#struct-update-syntax)
    * [Trailing struct literal arguments](#trailing-struct-literal-arguments)
    * [Access modifiers](#access-modifiers)
    * [Anonymous structs](#anonymous-structs)
    * [Static type methods](#static-type-methods)
    * [[noinit] structs](#noinit-structs)
    * [Methods](#methods)
    * [Embedded structs](#embedded-structs)
* [Unions](#unions)

</td><td valign=top>

* [Functions 2](#functions-2)
    * [Immutable function args by default](#immutable-function-args-by-default)
    * [Mutable arguments](#mutable-arguments)
    * [Variable number of arguments](#variable-number-of-arguments)
    * [Anonymous & higher-order functions](#anonymous--higher-order-functions)
    * [Closures](#closures)
    * [Parameter evaluation order](#parameter-evaluation-order)
* [References](#references)
* [Constants](#constants)
    * [Required module prefix](#required-module-prefix)
* [Builtin functions](#builtin-functions)
    * [println](#println)
    * [Printing custom types](#printing-custom-types)
    * [Dumping expressions at runtime](#dumping-expressions-at-runtime)
* [Modules](#modules)
    * [Create modules](#create-modules)
    * [Special considerations for project folders](#special-considerations-for-project-folders)
    * [init functions](#init-functions)
    * [cleanup functions](#cleanup-functions)

</td></tr>
<tr><td width=33% valign=top>

* [Type Declarations](#type-declarations)
    * [Type aliases](#type-aliases)
    * [Enums](#enums)
    * [Function Types](#function-types)
    * [Interfaces](#interfaces)
    * [Sum types](#sum-types)
    * [Option/Result types & error handling](#optionresult-types-and-error-handling)
        * [Handling options/results](#handling-optionsresults)
    * [Custom error types](#custom-error-types)
    * [Generics](#generics)
* [Concurrency](#concurrency)
    * [Spawning Concurrent Tasks](#spawning-concurrent-tasks)
    * [Channels](#channels)
    * [Shared Objects](#shared-objects)
* [JSON](#json)
    * [Decoding JSON](#decoding-json)
    * [Encoding JSON](#encoding-json)
* [Testing](#testing)
    * [Asserts](#asserts)
    * [Asserts with an extra message](#asserts-with-an-extra-message)
    * [Asserts that do not abort your program](#asserts-that-do-not-abort-your-program)
    * [Test files](#test-files)
    * [Running tests](#running-tests)
* [Memory management](#memory-management)
    * [Control](#control)
    * [Stack and Heap](#stack-and-heap)
* [ORM](#orm)
* [Writing documentation](#writing-documentation)
    * [Newlines in Documentation Comments](#newlines-in-documentation-comments)

</td><td width=33% valign=top>

* [Tools](#tools)
    * [v fmt](#v-fmt)
    * [v shader](#v-shader)
    * [Profiling](#profiling)
* [Package Management](#package-management)
    * [Package commands](#package-commands)
    * [Publish package](#publish-package)
* [Advanced Topics](#advanced-topics)
    * [Attributes](#attributes)
    * [Conditional compilation](#conditional-compilation)
        * [Compile time pseudo variables](#compile-time-pseudo-variables)
        * [Compile time reflection](#compile-time-reflection)
        * [Compile time code](#compile-time-code)
        * [Compile time types](#compile-time-types)
        * [Environment specific files](#environment-specific-files)
	* [Debugger](#debugger)
 		* [Call stack](#call-stack)
   		* [Trace](#trace)
    * [Memory-unsafe code](#memory-unsafe-code)
    * [Structs with reference fields](#structs-with-reference-fields)
    * [sizeof and __offsetof](#sizeof-and-__offsetof)
    * [Limited operator overloading](#limited-operator-overloading)
    * [Performance tuning](#performance-tuning)
    * [Atomics](#atomics)
    * [Global Variables](#global-variables)
    * [Static Variables](#static-variables)
    * [Cross compilation](#cross-compilation)
    * [Debugging](#debugging)
        * [C Backend binaries Default](#c-backend-binaries-default)
        * [Native Backend binaries](#native-backend-binaries)
        * [Javascript Backend](#javascript-backend)

</td><td valign=top>

* [V and C](#v-and-c)
    * [Calling C from V](#calling-c-from-v)
    * [Calling V from C](#calling-v-from-c)
    * [Passing C compilation flags](#passing-c-compilation-flags)
    * [#pkgconfig](#pkgconfig)
    * [Including C code](#including-c-code)
    * [C types](#c-types)
    * [C Declarations](#c-declarations)
    * [Export to shared library](#export-to-shared-library)
    * [Translating C to V](#translating-c-to-v)
    * [Working around C issues](#working-around-c-issues)
* [Other V Features](#other-v-features)
    * [Inline assembly](#inline-assembly)
    * [Hot code reloading](#hot-code-reloading)
    * [Cross-platform shell scripts in V](#cross-platform-shell-scripts-in-v)
    * [Vsh scripts with no extension](#vsh-scripts-with-no-extension)
* [Appendices](#appendices)
    * [Keywords](#appendix-i-keywords)
    * [Operators](#appendix-ii-operators)
    * [Other online resources](#other-online-resources)

</td></tr>
</table>

<!--
Note: There are several special keywords, which you can put after the code fences for v:
compile, cgen, live, ignore, failcompile, okfmt, oksyntax, badsyntax, wip, nofmt
For more details, do: `v check-md`
-->

## Hello World

```v
fn main() {
	println('hello world')
}
```

Save this snippet into a file named `hello.v`. Now do: `v run hello.v`.

> That is assuming you have symlinked your V with `v symlink`, as described
[here](https://github.com/vlang/v/blob/master/README.md#symlinking).
> If you haven't yet, you have to type the path to V manually.

Congratulations - you just wrote and executed your first V program!

You can compile a program without execution with `v hello.v`.
See `v help` for all supported commands.

From the example above, you can see that functions are declared with the `fn` keyword.
The return type is specified after the function name.
In this case `main` doesn't return anything, so there is no return type.

As in many other languages (such as C, Go, and Rust), `main` is the entry point of your program.

[`println`](#println) is one of the few [built-in functions](#builtin-functions).
It prints the value passed to it to standard output.

`fn main()` declaration can be skipped in single file programs.
This is useful when writing small programs, "scripts", or just learning the language.
For brevity, `fn main()` will be skipped in this tutorial.

This means that a "hello world" program in V is as simple as

```v
println('hello world')
```

> [!NOTE]
> If you do not explicitly use `fn main() {}`, you need to make sure that all your
> declarations come before any variable assignment statements or top level function calls,
> since V will consider everything after the first assignment/function call as part of your
> implicit main function.

## Running a project folder with several files

Suppose you have a folder with several .v files in it, where one of them
contains your `main()` function, and the other files have other helper
functions. They may be organized by topic, but still *not yet* structured
enough to be their own separate reusable modules, and you want to compile
them all into one program.

In other languages, you would have to use includes or a build system
to enumerate all files, compile them separately to object files,
then link them into one final executable.

In V however, you can compile and run the whole folder of .v files together,
using just `v run .`. Passing parameters also works, so you can
do: `v run . --yourparam some_other_stuff`

The above will first compile your files into a single program (named
after your folder/project), and then it will execute the program with
`--yourparam some_other_stuff` passed to it as CLI parameters.

Your program can then use the CLI parameters like this:

```v
import os

println(os.args)
```

> [!NOTE]
> After a successful run, V will delete the generated executable.
> If you want to keep it, use `v -keepc run .` instead, or just compile
> manually with `v .` .

> [!NOTE]
> Any V compiler flags should be passed *before* the `run` command.
> Everything after the source file/folder, will be passed to the program
> as is - it will not be processed by V.

## Comments

```v
// This is a single line comment.
/*
This is a multiline comment.
   /* It can be nested. */
*/
```

## Functions

```v
fn main() {
	println(add(77, 33))
	println(sub(100, 50))
}

fn add(x int, y int) int {
	return x + y
}

fn sub(x int, y int) int {
	return x - y
}
```

Again, the type comes after the argument's name.

Just like in Go and C, functions cannot be overloaded.
This simplifies the code and improves maintainability and readability.

### Hoisting

Functions can be used before their declaration:
`add` and `sub` are declared after `main`, but can still be called from `main`.
This is true for all declarations in V and eliminates the need for header files
or thinking about the order of files and declarations.

### Returning multiple values

```v
fn foo() (int, int) {
	return 2, 3
}

a, b := foo()
println(a) // 2
println(b) // 3
c, _ := foo() // ignore values using `_`
```

## Symbol visibility

```v
pub fn public_function() {
}

fn private_function() {
}
```

Functions are private (not exported) by default.
To allow other [modules](#module-imports) to use them, prepend `pub`. The same applies
to [structs](#structs), [constants](#constants) and [types](#type-declarations).

> [!NOTE]
> `pub` can only be used from a named module.
> For information about creating a module, see [Modules](#modules).

## Variables

```v
name := 'Bob'
age := 20
large_number := i64(9999999999)
println(name)
println(age)
println(large_number)
```

Variables are declared and initialized with `:=`. This is the only
way to declare variables in V. This means that variables always have an initial
value.

The variable's type is inferred from the value on the right hand side.
To choose a different type, use type conversion:
the expression `T(v)` converts the value `v` to the
type `T`.

Unlike most other languages, V only allows defining variables in functions.
By default V does not allow **global variables**. See more [details](#global-variables).

For consistency across different code bases, all variable and function names
must use the `snake_case` style, as opposed to type names, which must use `PascalCase`.

### Mutable variables

```v
mut age := 20
println(age)
age = 21
println(age)
```

To change the value of the variable use `=`. In V, variables are
immutable by default.
To be able to change the value of the variable, you have to declare it with `mut`.

Try compiling the program above after removing `mut` from the first line.

### Initialization vs assignment

Note the (important) difference between `:=` and `=`.
`:=` is used for declaring and initializing, `=` is used for assigning.

```v failcompile
fn main() {
	age = 21
}
```

This code will not compile, because the variable `age` is not declared.
All variables need to be declared in V.

```v
fn main() {
	age := 21
}
```

The values of multiple variables can be changed in one line.
In this way, their values can be swapped without an intermediary variable.

```v
mut a := 0
mut b := 1
println('${a}, ${b}') // 0, 1
a, b = b, a
println('${a}, ${b}') // 1, 0
```

### Warnings and declaration errors

In development mode the compiler will warn you that you haven't used the variable
(you'll get an "unused variable" warning).
In production mode (enabled by passing the `-prod` flag to v – `v -prod foo.v`)
it will not compile at all (like in Go).
```v
fn main() {
	a := 10
	// warning: unused variable `a`
}
```

To ignore values returned by a function `_` can be used
```v
fn foo() (int, int) {
	return 2, 3
}

fn main() {
	c, _ := foo()
	print(c)
	// no warning about unused variable returned by foo.
}
```

Unlike most languages, variable shadowing is not allowed. Declaring a variable with a name
that is already used in a parent scope will cause a compilation error.
```v failcompile nofmt
fn main() {
	a := 10
	{
		a := 20 // error: redefinition of `a`
	}
}
```
While variable shadowing is not allowed, field shadowing is allowed.
```v
pub struct Dimension {
	width  int = -1
	height int = -1
}

pub struct Test {
	Dimension
	width int = 100
	// height int
}

fn main() {
	test := Test{}
	println('${test.width} ${test.height} ${test.Dimension.width}') // 100 -1 -1
}
```
## V Types

### Primitive types

```v ignore
bool

string

i8    i16  int  i64      i128 (soon)
u8    u16  u32  u64      u128 (soon)

rune // represents a Unicode code point

f32 f64

isize, usize // platform-dependent, the size is how many bytes it takes to reference any location in memory

voidptr // this one is mostly used for [C interoperability](#v-and-c)
```

> [!NOTE]
> Unlike C and Go, `int` is always a 32 bit integer.

There is an exception to the rule that all operators
in V must have values of the same type on both sides. A small primitive type
on one side can be automatically promoted if it fits
completely into the data range of the type on the other side.
These are the allowed possibilities:

```v ignore
   i8 → i16 → int → i64
                  ↘     ↘
                    f32 → f64
                  ↗     ↗
   u8 → u16 → u32 → u64 ⬎
      ↘     ↘     ↘      ptr
   i8 → i16 → int → i64 ⬏
```

An `int` value for example can be automatically promoted to `f64`
or `i64` but not to `u32`. (`u32` would mean loss of the sign for
negative values).
Promotion from `int` to `f32`, however, is currently done automatically
(but can lead to precision loss for large values).

Literals like `123` or `4.56` are treated in a special way. They do
not lead to type promotions, however they default to `int` and `f64`
respectively, when their type has to be decided:

```v nofmt
u := u16(12)
v := 13 + u    // v is of type `u16` - no promotion
x := f32(45.6)
y := x + 3.14  // y is of type `f32` - no promotion
a := 75        // a is of type `int` - default for int literal
b := 14.7      // b is of type `f64` - default for float literal
c := u + a     // c is of type `int` - automatic promotion of `u`'s value
d := b + x     // d is of type `f64` - automatic promotion of `x`'s value
```

### Strings

In V, strings are encoded in UTF-8, and are immutable (read-only) by default:

```v
s := 'hello 🌎' // the `world` emoji takes 4 bytes, and string length is reported in bytes
assert s.len == 10

arr := s.bytes() // convert `string` to `[]u8`
assert arr.len == 10

s2 := arr.bytestr() // convert `[]u8` to `string`
assert s2 == s

name := 'Bob'
assert name.len == 3
// indexing gives a byte, u8(66) == `B`
assert name[0] == u8(66)
// slicing gives a string 'ob'
assert name[1..3] == 'ob'

// escape codes
// escape special characters like in C
windows_newline := '\r\n'
assert windows_newline.len == 2

// arbitrary bytes can be directly specified using `\x##` notation where `#` is
// a hex digit
aardvark_str := '\x61ardvark'
assert aardvark_str == 'aardvark'
assert '\xc0'[0] == u8(0xc0)

// or using octal escape `\###` notation where `#` is an octal digit
aardvark_str2 := '\141ardvark'
assert aardvark_str2 == 'aardvark'

// Unicode can be specified directly as `\u####` where # is a hex digit
// and will be converted internally to its UTF-8 representation
star_str := '\u2605' // ★
assert star_str == '★'
// UTF-8 can be specified this way too, as individual bytes.
assert star_str == '\xe2\x98\x85'
```

Since strings are immutable, you cannot directly change characters in a string:

```v failcompile
mut s := 'hello 🌎'
s[0] = `H` // not allowed
```

> error: cannot assign to `s[i]` since V strings are immutable

Note that indexing a string normally will produce a `u8` (byte), not a `rune` nor another `string`.
Indexes correspond to _bytes_ in the string, not Unicode code points.
If you want to convert the `u8` to a `string`, use the `.ascii_str()` method on the `u8`:

```v
country := 'Netherlands'
println(country[0]) // Output: 78
println(country[0].ascii_str()) // Output: N
```

However, you can easily get the runes for a string with the `runes()` method, which will return an
array of the UTF-8 characters from the string.  You can then index this array.  Just be aware that
there may be fewer indexes available on the `rune` array than on the bytes in the string, if there
_are_ any non-ASCII characters.

```v
mut s := 'hello 🌎'
// there are 10 bytes in the string (as shown earlier), but only 7 runes, since the `world` emoji
// only counts as one `rune` (one Unicode character)
assert s.runes().len == 7
println(s.runes()[6])
```

If you want the code point from a specific `string` index or other more advanced UTF-8 processing
and conversions, refer to the
[vlib/encoding/utf8](https://modules.vlang.io/encoding.utf8.html) module.

Both single and double quotes can be used to denote strings. For consistency, `vfmt` converts double
quotes to single quotes unless the string contains a single quote character.

Prepend `r` for raw strings. Escapes are not handled, so you will get exacly what you type:

```v
s := r'hello\nworld' // the `\n` will be preserved as two characters
println(s) // "hello\nworld"
```

Strings can be easily converted to integers:

```v
s := '42'
n := s.int() // 42

// all int literals are supported
assert '0xc3'.int() == 195
assert '0o10'.int() == 8
assert '0b1111_0000_1010'.int() == 3850
assert '-0b1111_0000_1010'.int() == -3850
```

For more advanced `string` processing and conversions, refer to the
[vlib/strconv](https://modules.vlang.io/strconv.html) module.

#### String interpolation

Basic interpolation syntax is pretty simple - use `${` before a variable name and `}` after. The
variable will be converted to a string and embedded into the literal:

```v
name := 'Bob'
println('Hello, ${name}!') // Hello, Bob!
```

It also works with fields: `'age = ${user.age}'`. You may also use more complex expressions:
`'can register = ${user.age > 13}'`.

Format specifiers similar to those in C's `printf()` are also supported. `f`, `g`, `x`, `o`, `b`,
etc. are optional and specify the output format. The compiler takes care of the storage size, so
there is no `hd` or `llu`.

To use a format specifier, follow this pattern:

`${varname:[flags][width][.precision][type]}`

- flags: may be zero or more of the following: `-` to left-align output within the field, `0` to use
  `0` as the padding character instead of the default `space` character.
  > **Note**
  >
  > V does not currently support the use of `'` or `#` as format flags, and V supports but
  > doesn't need `+` to right-align since that's the default.
- width: may be an integer value describing the minimum width of total field to output.
- precision: an integer value preceded by a `.` will guarantee that many digits after the decimal
  point without any insignificant trailing zeros. If displaying insignificant zero's is desired,
  append a `f` specifier to the precision value (see examples below). Applies only to float
  variables and is ignored for integer variables.
- type: `f` and `F` specify the input is a float and should be rendered as such, `e` and `E` specify
  the input is a float and should be rendered as an exponent (partially broken), `g` and `G` specify
  the input is a float--the renderer will use floating point notation for small values and exponent
  notation for large values, `d` specifies the input is an integer and should be rendered in base-10
  digits, `x` and `X` require an integer and will render it as hexadecimal digits, `o` requires an
  integer and will render it as octal digits, `b` requires an integer and will render it as binary
  digits, `s` requires a string (almost never used).

  > **Note**
  >
  > When a numeric type can render alphabetic characters, such as hex strings or special values
  > like `infinity`, the lowercase version of the type forces lowercase alphabetics and the
  > uppercase version forces uppercase alphabetics.

  > **Note**
  >
  > In most cases, it's best to leave the format type empty. Floats will be rendered by
  > default as `g`, integers will be rendered by default as `d`, and `s` is almost always redundant.
  > There are only three cases where specifying a type is recommended:

- format strings are parsed at compile time, so specifying a type can help detect errors then
- format strings default to using lowercase letters for hex digits and the `e` in exponents. Use a
  uppercase type to force the use of uppercase hex digits and an uppercase `E` in exponents.
- format strings are the most convenient way to get hex, binary or octal strings from an integer.

See
[Format Placeholder Specification](https://en.wikipedia.org/wiki/Printf_format_string#Format_placeholder_specification)
for more information.

```v
x := 123.4567
println('[${x:.2}]') // round to two decimal places => [123.46]
println('[${x:10}]') // right-align with spaces on the left => [   123.457]
println('[${int(x):-10}]') // left-align with spaces on the right => [123       ]
println('[${int(x):010}]') // pad with zeros on the left => [0000000123]
println('[${int(x):b}]') // output as binary => [1111011]
println('[${int(x):o}]') // output as octal => [173]
println('[${int(x):X}]') // output as uppercase hex => [7B]

println('[${10.0000:.2}]') // remove insignificant 0s at the end => [10]
println('[${10.0000:.2f}]') // do show the 0s at the end, even though they do not change the number => [10.00]
```

V also has `r` and `R` switches, which will repeat the string the specified amount of times.

```v
println('[${'abc':3r}]') // [abcabcabc]
println('[${'abc':3R}]') // [ABCABCABC]
```

#### String operators

```v
name := 'Bob'
bobby := name + 'by' // + is used to concatenate strings
println(bobby) // "Bobby"
mut s := 'hello '
s += 'world' // `+=` is used to append to a string
println(s) // "hello world"
```

All operators in V must have values of the same type on both sides. You cannot concatenate an
integer to a string:

```v failcompile
age := 10
println('age = ' + age) // not allowed
```

> error: infix expr: cannot use `int` (right expression) as `string`

We have to either convert `age` to a `string`:

```v
age := 11
println('age = ' + age.str())
```

or use string interpolation (preferred):

```v
age := 12
println('age = ${age}')
```

See all methods of [string](https://modules.vlang.io/index.html#string)
and related modules [strings](https://modules.vlang.io/strings.html),
[strconv](https://modules.vlang.io/strconv.html).

### Runes

A `rune` represents a single UTF-32 encoded Unicode character and is an alias for `u32`.
To denote them, use <code>`</code> (backticks) :

```v
rocket := `🚀`
```

A `rune` can be converted to a UTF-8 string by using the `.str()` method.

```v
rocket := `🚀`
assert rocket.str() == '🚀'
```

A `rune` can be converted to UTF-8 bytes by using the `.bytes()` method.

```v
rocket := `🚀`
assert rocket.bytes() == [u8(0xf0), 0x9f, 0x9a, 0x80]
```

Hex, Unicode, and Octal escape sequences also work in a `rune` literal:

```v
assert `\x61` == `a`
assert `\141` == `a`
assert `\u0061` == `a`

// multibyte literals work too
assert `\u2605` == `★`
assert `\u2605`.bytes() == [u8(0xe2), 0x98, 0x85]
assert `\xe2\x98\x85`.bytes() == [u8(0xe2), 0x98, 0x85]
assert `\342\230\205`.bytes() == [u8(0xe2), 0x98, 0x85]
```

Note that `rune` literals use the same escape syntax as strings, but they can only hold one unicode
character. Therefore, if your code does not specify a single Unicode character, you will receive an
error at compile time.

Also remember that strings are indexed as bytes, not runes, so beware:

```v
rocket_string := '🚀'
assert rocket_string[0] != `🚀`
assert 'aloha!'[0] == `a`
```

A string can be converted to runes by the `.runes()` method.

```v
hello := 'Hello World 👋'
hello_runes := hello.runes() // [`H`, `e`, `l`, `l`, `o`, ` `, `W`, `o`, `r`, `l`, `d`, ` `, `👋`]
assert hello_runes.string() == hello
```

### Numbers

```v
a := 123
```

This will assign the value of 123 to `a`. By default `a` will have the
type `int`.

You can also use hexadecimal, binary or octal notation for integer literals:

```v
a := 0x7B
b := 0b01111011
c := 0o173
```

All of these will be assigned the same value, 123. They will all have type
`int`, no matter what notation you used.

V also supports writing numbers with `_` as separator:

```v
num := 1_000_000 // same as 1000000
three := 0b0_11 // same as 0b11
float_num := 3_122.55 // same as 3122.55
hexa := 0xF_F // same as 255
oct := 0o17_3 // same as 0o173
```

If you want a different type of integer, you can use casting:

```v
a := i64(123)
b := u8(42)
c := i16(12345)
```

Assigning floating point numbers works the same way:

```v
f := 1.0
f1 := f64(3.14)
f2 := f32(3.14)
```

If you do not specify the type explicitly, by default float literals
will have the type of `f64`.

Float literals can also be declared as a power of ten:

```v
f0 := 42e1 // 420
f1 := 123e-2 // 1.23
f2 := 456e+2 // 45600
```

### Arrays

An array is a collection of data elements of the same type. An array literal is a
list of expressions surrounded by square brackets. An individual element can be
accessed using an *index* expression. Indexes start from `0`:

```v
mut nums := [1, 2, 3]
println(nums) // `[1, 2, 3]`
println(nums[0]) // `1`
println(nums[1]) // `2`

nums[1] = 5
println(nums) // `[1, 5, 3]`
```

<a id='array-operations'></a>

An element can be appended to the end of an array using the push operator `<<`.
It can also append an entire array.

```v
mut nums := [1, 2, 3]
nums << 4
println(nums) // "[1, 2, 3, 4]"

// append array
nums << [5, 6, 7]
println(nums) // "[1, 2, 3, 4, 5, 6, 7]"
```

```v
mut names := ['John']
names << 'Peter'
names << 'Sam'
// names << 10  <-- This will not compile. `names` is an array of strings.
```

`val in array` returns true if the array contains `val`. See [`in` operator](#in-operator).

```v
names := ['John', 'Peter', 'Sam']
println('Alex' in names) // "false"
```

#### Array Fields

There are two fields that control the "size" of an array:

* `len`: *length* - the number of pre-allocated and initialized elements in the array
* `cap`: *capacity* - the amount of memory space which has been reserved for elements,
  but not initialized or counted as elements. The array can grow up to this size without
  being reallocated. Usually, V takes care of this field automatically but there are
  cases where the user may want to do manual optimizations (see [below](#array-initialization)).

```v
mut nums := [1, 2, 3]
println(nums.len) // "3"
println(nums.cap) // "3" or greater
nums = [] // The array is now empty
println(nums.len) // "0"
```

`data` is a field (of type `voidptr`) with the address of the first
element. This is for low-level [`unsafe`](#memory-unsafe-code) code.

> [!NOTE]
> Fields are read-only and can't be modified by the user.

#### Array Initialization

The type of an array is determined by the first element:

* `[1, 2, 3]` is an array of ints (`[]int`).
* `['a', 'b']` is an array of strings (`[]string`).

The user can explicitly specify the type for the first element: `[u8(16), 32, 64, 128]`.
V arrays are homogeneous (all elements must have the same type).
This means that code like `[1, 'a']` will not compile.

The above syntax is fine for a small number of known elements but for very large or empty
arrays there is a second initialization syntax:

```v
mut a := []int{len: 10000, cap: 30000, init: 3}
```

This creates an array of 10000 `int` elements that are all initialized with `3`. Memory
space is reserved for 30000 elements. The parameters `len`, `cap` and `init` are optional;
`len` defaults to `0` and `init` to the default initialization of the element type (`0`
for numerical type, `''` for `string`, etc). The run time system makes sure that the
capacity is not smaller than `len` (even if a smaller value is specified explicitly):

```v
arr := []int{len: 5, init: -1}
// `arr == [-1, -1, -1, -1, -1]`, arr.cap == 5

// Declare an empty array:
users := []int{}
```

Setting the capacity improves performance of pushing elements to the array
as reallocations can be avoided:

```v
mut numbers := []int{cap: 1000}
println(numbers.len) // 0
// Now appending elements won't reallocate
for i in 0 .. 1000 {
	numbers << i
}
```

> [!NOTE]
> The above code uses a [range `for`](#range-for) statement.

You can initialize the array by accessing the `index` variable which gives
the index as shown here:

```v
count := []int{len: 4, init: index}
assert count == [0, 1, 2, 3]

mut square := []int{len: 6, init: index * index}
// square == [0, 1, 4, 9, 16, 25]
```

#### Array Types

An array can be of these types:

| Types        | Example Definition                   |
|--------------|--------------------------------------|
| Number       | `[]int,[]i64`                        |
| String       | `[]string`                           |
| Rune         | `[]rune`                             |
| Boolean      | `[]bool`                             |
| Array        | `[][]int`                            |
| Struct       | `[]MyStructName`                     |
| Channel      | `[]chan f64`                         |
| Function     | `[]MyFunctionType` `[]fn (int) bool` |
| Interface    | `[]MyInterfaceName`                  |
| Sum Type     | `[]MySumTypeName`                    |
| Generic Type | `[]T`                                |
| Map          | `[]map[string]f64`                   |
| Enum         | `[]MyEnumType`                       |
| Alias        | `[]MyAliasTypeName`                  |
| Thread       | `[]thread int`                       |
| Reference    | `[]&f64`                             |
| Shared       | `[]shared MyStructType`              |
| Option       | `[]?f64`                          |

**Example Code:**

This example uses [Structs](#structs) and [Sum Types](#sum-types) to create an array
which can handle different types (e.g. Points, Lines) of data elements.

```v
struct Point {
	x int
	y int
}

struct Line {
	p1 Point
	p2 Point
}

type ObjectSumType = Line | Point

mut object_list := []ObjectSumType{}
object_list << Point{1, 1}
object_list << Line{
	p1: Point{3, 3}
	p2: Point{4, 4}
}
dump(object_list)
/*
object_list: [ObjectSumType(Point{
    x: 1
    y: 1
}), ObjectSumType(Line{
    p1: Point{
        x: 3
        y: 3
    }
    p2: Point{
        x: 4
        y: 4
    }
})]
*/
```

#### Multidimensional Arrays

Arrays can have more than one dimension.

2d array example:

---

## 10. String Utilities

### Handy String Helpers Library

```v
module stringutils

// ============================================================================
// CHARACTER CLASSIFICATION HELPERS (Core building blocks for string processing)
// ============================================================================

// Check if rune is ASCII digit (0-9) - fast alternative to unicode checks
fn is_ascii_digit(r rune) bool {
    return r >= `0` && r <= `9`
}

// Check if rune is ASCII lowercase letter (a-z)
fn is_ascii_lower(r rune) bool {
    return r >= `a` && r <= `z`
}

// Check if rune is ASCII uppercase letter (A-Z)
fn is_ascii_upper(r rune) bool {
    return r >= `A` && r <= `Z`
}

// Check if rune is any ASCII letter (combines upper and lower checks)
fn is_ascii_letter(r rune) bool {
    return is_ascii_lower(r) || is_ascii_upper(r)
}

// Check if rune is a word separator for text processing
fn is_word_separator(r rune) bool {
    return r == ` ` || r == `-` || r == `_`
}

// Convert ASCII uppercase to lowercase (32 is the ASCII offset)
fn ascii_to_lower(r rune) rune {
    return if is_ascii_upper(r) { r + 32 } else { r }
}

// Convert ASCII lowercase to uppercase (subtract 32 for ASCII conversion)
fn ascii_to_upper(r rune) rune {
    return if is_ascii_lower(r) { r - 32 } else { r }
}

// ============================================================================
// CORE STRING PROCESSING ENGINE (Eliminates code duplication)
// ============================================================================

// Generic string processor - handles most string transformations with separators
// separator: what to use between words (-, _, etc.)
// processor: function to apply to each character (to_lower, to_upper, etc.)
fn process_string_with_separator(s string, separator rune, processor fn(rune) rune) string {
    mut out := []rune{}
    mut prev_separator := false
    
    // Process each character (rune) in the input string
    for r in s.runes() {
        if is_ascii_digit(r) || is_ascii_letter(r) {
            // Valid character - process and add to output
            out << processor(r)
            prev_separator = false
        } else if is_word_separator(r) {
            // Word boundary - add separator if not already added and output has content
            if !prev_separator && out.len > 0 {
                out << separator
                prev_separator = true
            }
        }
        // Invalid characters are dropped (punctuation, emojis, etc.)
    }
    
    // Clean up: remove trailing separator
    if out.len > 0 && out[out.len-1] == separator {
        out = out[..out.len-1]
    }
    
    return out.string()
}

// ============================================================================
// RAD HELPER FUNCTIONS (Common utilities for rapid development)
// ============================================================================

// Generic padding function - handles both left and right padding
// left: true for left padding, false for right padding
fn pad_string(s string, width int, pad rune, left bool) string {
    // Early return if no padding needed
    if s.len >= width { return s }
    
    // Calculate padding needed and create padding string
    padding := pad.str().repeat(width - s.len)
    
    // Apply padding based on direction
    return if left { padding + s } else { s + padding }
}

// ============================================================================
// PUBLIC STRING TRANSFORMATION API (Ready-to-use functions)
// ============================================================================

// Convert any string to Title Case (First Letter Of Each Word Capitalized)
// Handles: snake_case, kebab-case, normal text, mixed formats
// Usage: to_title_case('hello_world-example') -> 'Hello World Example'
pub fn to_title_case(s string) string {
    if s.len == 0 { return s }
    
    // Step 1: Normalize all separators to spaces
    normalized := s.replace('_', ' ').replace('-', ' ')
    
    // Step 2: Split into words and filter empty ones
    words := normalized.split_any(' \t\n').filter(it.len > 0)
    
    // Step 3: Capitalize each word
    mut result := []string{cap: words.len}  // Pre-allocate for performance
    for word in words {
        capitalized := if word.len == 1 { 
            word.to_upper() 
        } else { 
            word[0].ascii_str().to_upper() + word[1..].to_lower() 
        }
        result << capitalized
    }
    
    return result.join(' ')
}

// Create URL-friendly slug: lowercase, hyphens, ASCII only
// Perfect for creating clean URLs from titles
// Usage: slugify('Hello, World! 2025 🚀') -> 'hello-world-2025'
pub fn slugify(s string) string {
    return process_string_with_separator(s, `-`, ascii_to_lower)
}

// Convert to snake_case (commonly used in databases, APIs)
// Handles CamelCase, PascalCase, spaces, hyphens
// Usage: to_snake_case('HelloWorld 99') -> 'hello_world_99'
pub fn to_snake_case(s string) string {
    mut out := []rune{}
    mut was_lower := false
    
    for r in s.runes() {
        if is_ascii_upper(r) {
            // Add underscore before uppercase letter if previous was lowercase
            if was_lower { out << `_` }
            out << ascii_to_lower(r)
            was_lower = false
        } else if is_ascii_lower(r) || is_ascii_digit(r) {
            out << r
            was_lower = true
        } else if is_word_separator(r) {
            // Convert separators to underscores (avoid double underscores)
            if out.len > 0 && out[out.len-1] != `_` { 
                out << `_` 
            }
            was_lower = false
        }
    }
    
    // Clean up trailing underscore
    if out.len > 0 && out[out.len-1] == `_` { 
        out = out[..out.len-1] 
    }
    
    return out.string()
}

// Convert to kebab-case (popular in web development, CSS classes)
// Usage: to_kebab_case('HelloWorld 99') -> 'hello-world-99'
pub fn to_kebab_case(s string) string {
    return to_snake_case(s).replace('_', '-')
}

// Truncate string to maximum length with optional suffix
// Perfect for creating previews, summaries
// Usage: truncate('Long article content here...', 20, '...') -> 'Long article conte...'
pub fn truncate(s string, max int, suffix string) string {
    if max <= 0 { return '' }
    if s.len <= max { return s }
    if suffix.len >= max { return suffix[..max] }
    
    // Reserve space for suffix
    return s[..max - suffix.len] + suffix
}

// Indent every non-empty line with a prefix
// Great for code generation, formatting output
// Usage: indent_lines('line1\nline2', '  ') -> '  line1\n  line2'
pub fn indent_lines(s string, prefix string) string {
    lines := s.split_into_lines()
    mut result := []string{cap: lines.len}
    
    for line in lines {
        // Only indent non-empty lines to preserve formatting
        indented_line := if line.len == 0 { '' } else { prefix + line }
        result << indented_line
    }
    
    return result.join('\n')
}

// Pad string to the left with specified character
// Usage: pad_left('42', 5, `0`) -> '00042'
pub fn pad_left(s string, width int, pad rune) string {
    return pad_string(s, width, pad, true)
}

// Pad string to the right with specified character
// Usage: pad_right('42', 5, ` `) -> '42   '
pub fn pad_right(s string, width int, pad rune) string {
    return pad_string(s, width, pad, false)
}

// ============================================================================
// ADDITIONAL RAD UTILITIES (More functions for rapid development)
// ============================================================================

// Extract initials from a name (great for avatars, user displays)
// Usage: get_initials('John William Smith') -> 'JWS'
pub fn get_initials(name string) string {
    words := name.split(' ').filter(it.len > 0)
    mut initials := []string{cap: words.len}
    
    for word in words {
        if word.len > 0 {
            initials << word[0].ascii_str().to_upper()
        }
    }
    
    return initials.join('')
}

// Generate a random string of specified length (useful for IDs, tokens)
// charset: characters to choose from
// Usage: random_string(8, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') -> 'A7K2M9P1'
pub fn random_string(length int, charset string) string {
    if length <= 0 || charset.len == 0 { return '' }
    
    mut result := []string{cap: length}
    chars := charset.runes()
    
    for _ in 0..length {
        // Simple random selection (use crypto.rand for security-critical applications)
        import time
        idx := int(time.now().unix) % chars.len
        result << chars[idx].str()
    }
    
    return result.join('')
}

// Count words in text (useful for content management, validation)
// Usage: word_count('Hello world, how are you?') -> 5
pub fn word_count(text string) int {
    if text.trim().len == 0 { return 0 }
    
    // Split by whitespace and filter non-empty words
    words := text.split_any(' \t\n\r').filter(it.trim().len > 0)
    return words.len
}

// Check if string matches a simple pattern (* wildcards)
// Usage: matches_pattern('hello.txt', '*.txt') -> true
pub fn matches_pattern(text string, pattern string) bool {
    // Simple wildcard matching - in production, use regex for complex patterns
    if pattern == '*' { return true }
    if pattern.contains('*') {
        parts := pattern.split('*')
        if parts.len != 2 { return false }  // Only support single * for now
        
        prefix := parts[0]
        suffix := parts[1]
        
        return text.starts_with(prefix) && text.ends_with(suffix) && 
               text.len >= prefix.len + suffix.len
    }
    
    return text == pattern
}

// Create a URL-safe version of any string (more comprehensive than slugify)
// Usage: make_url_safe('Hello World! (2024)') -> 'hello-world-2024'
pub fn make_url_safe(s string) string {
    mut result := []rune{}
    mut prev_dash := false
    
    for r in s.runes() {
        if is_ascii_letter(r) {
            result << ascii_to_lower(r)
            prev_dash = false
        } else if is_ascii_digit(r) {
            result << r
            prev_dash = false
        } else {
            // Replace any non-alphanumeric with dash
            if !prev_dash && result.len > 0 {
                result << `-`
                prev_dash = true
            }
        }
    }
    
    // Remove trailing dash
    if result.len > 0 && result[result.len-1] == `-` {
        result = result[..result.len-1]
    }
    
    return result.string()
}

// ============================================================================
// COMPREHENSIVE EXAMPLES & RAD DEMONSTRATIONS
// ============================================================================

// Demonstration of all utilities with real-world use cases
pub fn string_utils_examples() {
    println('=== V String Utilities - RAD Examples ===\n')
    
    // 1. TEXT TRANSFORMATION EXAMPLES
    println('1. Text Transformations:')
    test_cases := [
        ('hello_world-example', 'Variable name from code'),
        ('Hello, World! 2025 🚀', 'Title with punctuation'),
        ('getUserProfile', 'CamelCase method name'),
        ('XML HTTP Request', 'Technical term'),
        ('user-account-settings', 'Kebab case config'),
    ]
    
    for input, description in test_cases {
        println('  Input: "${input}" (${description})')
        println('    Title Case: "${to_title_case(input)}"')
        println('    Slug: "${slugify(input)}"')
        println('    Snake Case: "${to_snake_case(input)}"')
        println('    Kebab Case: "${to_kebab_case(input)}"')
        println('    URL Safe: "${make_url_safe(input)}"')
        println('')
    }
    
    // 2. PRACTICAL RAD UTILITIES
    println('2. RAD Utilities for App Development:')
    
    // User display examples
    full_names := ['John Smith', 'Mary Jane Watson', 'Dr. Anthony Stark']
    for name in full_names {
        initials := get_initials(name)
        println('  ${name} -> Initials: ${initials}')
    }
    println('')
    
    // Content management examples
    sample_texts := [
        'Short text',
        'This is a medium length text that might need truncation in some UI contexts',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    ]
    
    for text in sample_texts {
        count := word_count(text)
        truncated := truncate(text, 50, '...')
        println('  Text: "${text}"')
        println('    Word count: ${count}')
        println('    Truncated: "${truncated}"')
        println('')
    }
    
    // 3. PATTERN MATCHING & VALIDATION
    println('3. Pattern Matching Examples:')
    files := ['readme.txt', 'config.json', 'script.py', 'image.png', 'data.csv']
    patterns := ['*.txt', '*.json', '*.py']
    
    for pattern in patterns {
        matching_files := files.filter(matches_pattern(it, pattern))
        println('  Pattern "${pattern}" matches: ${matching_files}')
    }
    println('')
    
    // 4. FORMATTING & PADDING EXAMPLES
    println('4. Formatting Examples:')
    numbers := ['1', '42', '1337', '999999']
    for num in numbers {
        left_padded := pad_left(num, 8, `0`)
        right_padded := pad_right(num, 8, ` `)
        println('  Number: ${num} -> Left: "${left_padded}" | Right: "${right_padded}"')
    }
    println('')
    
    // 5. CODE GENERATION EXAMPLE
    println('5. Code Generation (indenting):')
    code_template := 'fn main() {\n    println("Hello")\n    process_data()\n}'
    indented_code := indent_lines(code_template, '    ')  // Add extra indentation
    println('  Indented code:')
    println(indented_code)
    println('')
    
    // 6. RANDOM GENERATION (for testing, IDs, etc.)
    println('6. Random Generation:')
    println('  Random ID (alphanumeric): "${random_string(8, "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")}"')
    println('  Random password chars: "${random_string(12, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*")}"')
    println('')
    
    println('=== String Utilities Demo Complete ===')
}
```

---

## 11. File System Utilities

### Complete File Operations Library

```v
module fileutils

import os
import json
import crypto.sha256
import time

// ============================================================================
// ERROR HANDLING FOUNDATIONS (Consistent error patterns for all operations)
// ============================================================================

// Wrapper for OS errors with context - makes debugging easier
// operation: what we were trying to do (e.g., "Read file", "Create directory")
// err: the original error from the OS
fn handle_os_error(operation string, err IError) IError {
    return error('${operation} failed: ${err}')
}

// Check if path exists before operations - prevents common runtime errors
// path: file or directory path to check
// operation: description for error message
fn validate_path_exists(path string, operation string) ! {
    if !os.exists(path) {
        return error('${operation}: Path does not exist - ${path}')
    }
}

// ============================================================================
// FILE METADATA STRUCTURE (Unified file information)
// ============================================================================

// Complete file information structure for RAD applications
// Contains everything you typically need to know about a file
struct FileInfo {
pub:
    name        string    // Just the filename (e.g., "config.json")
    path        string    // Full path to the file
    size        i64       // File size in bytes
    is_dir      bool      // true if this is a directory
    mod_time    i64       // Last modification time (Unix timestamp)
    permissions int       // File permissions (Unix style)
}

// ============================================================================
// CORE FILE MANAGER (Foundation for all file operations)
// ============================================================================

// FileManager provides a safe, consistent interface for file operations
// base_path: root directory for relative path operations
// permissions: default permissions for different operation types
struct FileManager {
mut:
    base_path   string
    permissions map[string]int  // e.g., 'read': 0o644, 'write': 0o644
}

// Create a new FileManager with sensible default permissions
// base_path: directory that will be used as root for relative paths
pub fn new_file_manager(base_path string) FileManager {
    return FileManager{
        base_path: base_path
        permissions: {
            'read': 0o644        // Owner read/write, group/others read
            'write': 0o644       // Standard file permissions
            'execute': 0o755     // Executable permissions
        }
    }
}

// Convert relative paths to absolute paths safely
// Handles both absolute and relative paths correctly
fn (fm FileManager) resolve_path(path string) string {
    return if os.is_abs_path(path) { 
        path  // Already absolute, use as-is
    } else { 
        os.join_path(fm.base_path, path)  // Make relative to base_path
    }
}

// Generic wrapper for file operations - eliminates repetitive error handling
// This is a higher-order function that takes an operation and handles errors consistently
// T: return type of the operation
// path: file path for the operation
// operation: description for error messages
// action: the actual function to perform
fn (fm FileManager) perform_file_operation[T](path string, operation string, action fn(string) !T) !T {
    full_path := fm.resolve_path(path)
    return action(full_path) or { handle_os_error(operation, err) }
}

// ============================================================================
// FILE READING OPERATIONS (Safe file input with error handling)
// ============================================================================

// Read entire file content as string - most common file operation
// Automatically handles path resolution and error reporting
// path: file path (relative to base_path or absolute)
// Returns: file content as string
// Example: content := fm.read_file('config.txt')!
pub fn (fm FileManager) read_file(path string) !string {
    return fm.perform_file_operation(path, 'Read file', fn (full_path string) !string {
        validate_path_exists(full_path, 'Read file')!
        return os.read_file(full_path)
    })
}

// Read and parse JSON file into any type - essential for config files
// T: the type to decode into (must be JSON-compatible)
// path: path to JSON file
// Returns: decoded object of type T
// Example: config := fm.read_json[AppConfig]('settings.json')!
pub fn (fm FileManager) read_json[T](path string) !T {
    content := fm.read_file(path)!
    return json.decode(T, content) or { 
        error('JSON decode failed for ${path}: ${err}') 
    }
}

// Read file and split into lines - useful for processing text files
// Handles different line ending styles automatically
// path: path to text file
// Returns: array of lines (without line ending characters)
// Example: lines := fm.read_lines('data.txt')!
pub fn (fm FileManager) read_lines(path string) ![]string {
    content := fm.read_file(path)!
    return content.split_into_lines()
}

// ============================================================================
// FILE WRITING OPERATIONS (Safe file output with directory creation)
// ============================================================================

// Write string content to file - creates directories automatically
// This is the foundation for most file writing operations
// path: destination file path
// content: string content to write
// Example: fm.write_file('output/result.txt', 'Hello World')!
pub fn (fm FileManager) write_file(path string, content string) ! {
    fm.perform_file_operation(path, 'Write file', fn [fm] (full_path string) ! {
        // Create parent directory if it doesn't exist
        fm.ensure_directory(os.dir(full_path))!
        // Write file content
        os.write_file(full_path, content) or { return err }
    })!
}

// Write object as pretty-formatted JSON - perfect for config files
// T: any JSON-serializable type
// path: destination file path
// data: object to serialize and write
// Example: fm.write_json('settings.json', my_config)!
pub fn (fm FileManager) write_json[T](path string, data T) ! {
    content := json.encode_pretty(data)  // Pretty format for readability
    fm.write_file(path, content)!
}

// Append content to existing file - useful for logs, data collection
// Creates file if it doesn't exist
// path: target file path
// content: content to append
// Example: fm.append_file('app.log', '${time.now()}: User logged in\n')!
pub fn (fm FileManager) append_file(path string, content string) ! {
    fm.perform_file_operation(path, 'Append to file', fn (full_path string) ! {
        mut file := os.open_append(full_path) or { return err }
        defer { file.close() }  // Always close file when function exits
        file.write_string(content) or { return err }
    })!
}

// ============================================================================
// DIRECTORY OPERATIONS (Safe directory management)
// ============================================================================

// Create directory and all parent directories (like mkdir -p)
// Safe to call multiple times - won't error if directory exists
// path: directory path to create
// Example: fm.ensure_directory('data/backups/2024')!
pub fn (fm FileManager) ensure_directory(path string) ! {
    full_path := fm.resolve_path(path)
    if !os.exists(full_path) {
        os.mkdir_all(full_path) or { 
            return handle_os_error('Create directory', err) 
        }
    }
}

// List files in directory with optional recursion
// Very useful for file processing, backups, etc.
// path: directory to list
// recursive: if true, includes subdirectories
// Returns: array of file paths
// Example: files := fm.list_files('documents', true)!
pub fn (fm FileManager) list_files(path string, recursive bool) ![]string {
    full_path := fm.resolve_path(path)
    validate_path_exists(full_path, 'List files')!
    
    if !os.is_dir(full_path) {
        return error('Path is not a directory: ${full_path}')
    }
    
    return if recursive { 
        fm.collect_files_recursive(full_path) 
    } else { 
        os.ls(full_path) or { handle_os_error('List directory', err) }
    }
}

// Recursive file collection helper - used by list_files
// This function calls itself to traverse subdirectories
fn (fm FileManager) collect_files_recursive(path string) ![]string {
    mut all_files := []string{}
    
    files := os.ls(path) or { return handle_os_error('List directory', err) }
    
    for file in files {
        file_path := os.join_path(path, file)
        if os.is_dir(file_path) {
            // Recursively collect files from subdirectory
            sub_files := fm.collect_files_recursive(file_path)!
            all_files << sub_files
        } else {
            all_files << file_path
        }
    }
    
    return all_files
}

// ============================================================================
// FILE OPERATIONS (Copy, move, delete with safety checks)
// ============================================================================

// Copy file from source to destination - creates destination directory
// Safe operation with comprehensive error checking
// src: source file path
// dst: destination file path
// Example: fm.copy_file('template.json', 'configs/app.json')!
pub fn (fm FileManager) copy_file(src string, dst string) ! {
    src_path := fm.resolve_path(src)
    dst_path := fm.resolve_path(dst)
    
    validate_path_exists(src_path, 'Copy file')!
    fm.ensure_directory(os.dir(dst_path))!  // Create destination directory
    
    os.cp(src_path, dst_path) or { return handle_os_error('Copy file', err) }
}

// Move file (rename) with safety checks and directory creation
// src: source file path
// dst: destination file path  
// Example: fm.move_file('temp.txt', 'archive/processed.txt')!
pub fn (fm FileManager) move_file(src string, dst string) ! {
    src_path := fm.resolve_path(src)
    dst_path := fm.resolve_path(dst)
    
    validate_path_exists(src_path, 'Move file')!
    fm.ensure_directory(os.dir(dst_path))!
    
    os.mv(src_path, dst_path) or { return handle_os_error('Move file', err) }
}

// Delete file with existence check
// path: file to delete
// Example: fm.delete_file('temporary.txt')!
pub fn (fm FileManager) delete_file(path string) ! {
    full_path := fm.resolve_path(path)
    validate_path_exists(full_path, 'Delete file')!
    os.rm(full_path) or { return handle_os_error('Delete file', err) }
}

// ============================================================================
// FILE INFORMATION & UTILITIES (File inspection and utility functions)
// ============================================================================

// Get comprehensive file information - everything you need to know about a file
// path: file or directory path
// Returns: FileInfo struct with complete metadata
// Example: info := fm.get_file_info('config.json')!
pub fn (fm FileManager) get_file_info(path string) !FileInfo {
    full_path := fm.resolve_path(path)
    validate_path_exists(full_path, 'Get file info')!
    
    stat := os.stat(full_path) or { return handle_os_error('Get file stats', err) }
    
    return FileInfo{
        name: os.base(full_path)        // Just the filename
        path: full_path                 // Complete path
        size: stat.size                 // File size in bytes
        is_dir: stat.is_dir            // Directory flag
        mod_time: stat.mtime           // Last modified timestamp
        permissions: stat.mode          // Unix-style permissions
    }
}

// Calculate SHA256 hash of file - useful for integrity checks, deduplication
// path: file to hash
// Returns: hexadecimal hash string
// Example: hash := fm.get_file_hash('important.dat')!
pub fn (fm FileManager) get_file_hash(path string) !string {
    content := fm.read_file(path)!
    hash := sha256.sum(content.bytes())
    return hash.hex()
}

// Quick existence check - faster than get_file_info for simple checks
// path: file or directory path to check
// Returns: true if exists, false otherwise
// Example: if fm.file_exists('config.json') { ... }
pub fn (fm FileManager) file_exists(path string) bool {
    return os.exists(fm.resolve_path(path))
}

// Check if path is a directory
// path: path to check
// Returns: true if directory, false if file or doesn't exist
// Example: if fm.is_directory('data') { ... }
pub fn (fm FileManager) is_directory(path string) bool {
    return os.is_dir(fm.resolve_path(path))
}

// ============================================================================
// RAD ADDITIONAL UTILITIES (Common patterns for rapid development)
// ============================================================================

// Find files matching a pattern (simple wildcard support)
// directory: directory to search in
// pattern: simple pattern with * wildcards (e.g., "*.json", "config.*")
// recursive: search subdirectories
// Returns: array of matching file paths
// Example: configs := fm.find_files('settings', '*.json', false)!
pub fn (fm FileManager) find_files(directory string, pattern string, recursive bool) ![]string {
    all_files := fm.list_files(directory, recursive)!
    mut matching_files := []string{}
    
    for file_path in all_files {
        filename := os.base(file_path)
        if matches_simple_pattern(filename, pattern) {
            matching_files << file_path
        }
    }
    
    return matching_files
}

// Simple pattern matching helper for find_files
fn matches_simple_pattern(text string, pattern string) bool {
    if pattern == '*' { return true }
    if !pattern.contains('*') { return text == pattern }
    
    // Handle single wildcard patterns like "*.txt" or "config.*"
    parts := pattern.split('*')
    if parts.len != 2 { return false }
    
    prefix := parts[0]
    suffix := parts[1]
    
    return text.starts_with(prefix) && text.ends_with(suffix) && 
           text.len >= prefix.len + suffix.len
}

// Get file extension (without the dot)
// path: file path
// Returns: extension or empty string if none
// Example: ext := fm.get_file_extension('data.json') // returns 'json'
pub fn (fm FileManager) get_file_extension(path string) string {
    filename := os.base(fm.resolve_path(path))
    dot_index := filename.last_index('.') or { return '' }
    if dot_index == filename.len - 1 { return '' }  // Ends with dot
    return filename[dot_index + 1..]
}

// Get human-readable file size string
// size: size in bytes
// Returns: formatted string like "1.5 KB", "2.3 MB"
// Example: size_str := fm.format_file_size(1536) // returns "1.5 KB"
pub fn format_file_size(size i64) string {
    units := ['B', 'KB', 'MB', 'GB', 'TB']
    mut unit_size := f64(size)
    mut unit_index := 0
    
    for unit_size >= 1024.0 && unit_index < units.len - 1 {
        unit_size /= 1024.0
        unit_index++
    }
    
    if unit_index == 0 {
        return '${int(unit_size)} ${units[unit_index]}'
    } else {
        return '${unit_size:.1f} ${units[unit_index]}'
    }
}

// Create backup of file with timestamp
// path: file to backup
// Returns: backup file path
// Example: backup_path := fm.backup_file('important.json')!
pub fn (fm FileManager) backup_file(path string) !string {
    if !fm.file_exists(path) {
        return error('Cannot backup non-existent file: ${path}')
    }
    
    file_info := fm.get_file_info(path)!
    name_without_ext := file_info.name
    extension := fm.get_file_extension(path)
    
    // Remove extension from name if it exists
    if extension.len > 0 {
        name_without_ext = file_info.name[..file_info.name.len - extension.len - 1]
    }
    
    // Create backup filename with timestamp
    timestamp := time.now().format_ss_micro()  // Format: YYYYMMDD_HHMMSS
    backup_name := if extension.len > 0 {
        '${name_without_ext}_backup_${timestamp}.${extension}'
    } else {
        '${name_without_ext}_backup_${timestamp}'
    }
    
    backup_path := os.join_path(os.dir(fm.resolve_path(path)), backup_name)
    fm.copy_file(path, backup_path)!
    
    return backup_path
}

// ============================================================================
// CONFIGURATION MANAGER (Type-safe config handling with caching)
// ============================================================================

// Specialized configuration manager for application settings
// Uses generics for type safety and includes caching for performance
// T: configuration type (must be JSON-serializable)
struct ConfigManager[T] {
    fm          FileManager    // Embedded file manager
    config_file string        // Path to config file
mut:
    cached_config ?T         // Cached configuration (optional)
}

// Create new configuration manager
// T: type of configuration struct
// base_path: base directory for file operations
// config_file: relative path to config file
// Example: mut cfg_mgr := new_config_manager[AppConfig]('/app', 'config.json')
pub fn new_config_manager[T](base_path string, config_file string) ConfigManager[T] {
    return ConfigManager[T]{
        fm: new_file_manager(base_path)
        config_file: config_file
    }
}

// Load configuration with caching - only reads file if not cached
// Returns: configuration object
// Example: config := cfg_mgr.load_config()!
pub fn (mut cm ConfigManager[T]) load_config() !T {
    // Return cached config if available
    if config := cm.cached_config {
        return config
    }
    
    // Load from file and cache
    config := cm.fm.read_json[T](cm.config_file)!
    cm.cached_config = config
    return config
}

// Save configuration and update cache
// config: configuration object to save
// Example: cfg_mgr.save_config(updated_config)!
pub fn (mut cm ConfigManager[T]) save_config(config T) ! {
    cm.fm.write_json[T](cm.config_file, config)!
    cm.cached_config = config  // Update cache
}

// Force reload configuration from file (clears cache)
// Returns: fresh configuration from disk
// Example: fresh_config := cfg_mgr.reload_config()!
pub fn (mut cm ConfigManager[T]) reload_config() !T {
    cm.cached_config = none  // Clear cache
    return cm.load_config()
}

// Check if configuration file exists
// Returns: true if config file exists
// Example: if cfg_mgr.config_exists() { ... }
pub fn (cm ConfigManager[T]) config_exists() bool {
    return cm.fm.file_exists(cm.config_file)
}

// ============================================================================
// EXAMPLE DATA STRUCTURES (For demonstration purposes)
// ============================================================================

// Example application configuration structure
struct AppConfig {
    name     string = 'MyApp'     // Application name
    version  string = '1.0.0'     // Version string
    debug    bool = false         // Debug mode flag
    database DatabaseConfig       // Nested configuration
    features []string             // Feature flags
}

// Database configuration sub-structure
struct DatabaseConfig {
    host     string = 'localhost' // Database server host
    port     int = 5432          // Database port
    username string = 'admin'    // Database username  
    password string = ''         // Database password (empty by default)
    database string = 'myapp'    // Database name
}

// ============================================================================
// COMPREHENSIVE RAD EXAMPLES (Real-world usage patterns)
// ============================================================================

// Complete demonstration of file utilities for rapid application development
pub fn file_utils_examples() ! {
    println('=== V File Utilities - RAD Examples ===\n')
    
    // 1. BASIC SETUP
    println('1. Setting up FileManager:')
    fm := new_file_manager('/tmp/myapp')  // Use temp directory for demo
    mut config_mgr := new_config_manager[AppConfig]('/tmp/myapp', 'config.json')
    
    // Ensure base directory exists
    fm.ensure_directory('.')!
    println('  ✓ FileManager created with base path: /tmp/myapp')
    
    // 2. BASIC FILE OPERATIONS
    println('\n2. Basic File Operations:')
    
    // Write a simple text file
    sample_content := 'Hello, V FileManager!\nThis is a test file.\nLine 3 content.'
    fm.write_file('test.txt', sample_content)!
    println('  ✓ Created test.txt')
    
    // Read the file back
    read_content := fm.read_file('test.txt')!
    println('  ✓ Read file content: ${read_content.len} characters')
    
    // Read as lines
    lines := fm.read_lines('test.txt')!
    println('  ✓ File has ${lines.len} lines')
    
    // 3. CONFIGURATION MANAGEMENT
    println('\n3. Configuration Management:')
    
    // Create default configuration
    default_config := AppConfig{
        name: 'RAD Demo App'
        version: '1.2.0'
        debug: true
        database: DatabaseConfig{
            host: 'localhost'
            port: 5432
            username: 'demo_user'
            database: 'demo_db'
        }
        features: ['auth', 'api', 'logging']
    }
    
    // Save configuration
    config_mgr.save_config(default_config)!
    println('  ✓ Saved application configuration')
    
    // Load configuration (will use cache on subsequent calls)
    loaded_config := config_mgr.load_config()!
    println('  ✓ Loaded config: ${loaded_config.name} v${loaded_config.version}')
    println('    Database: ${loaded_config.database.username}@${loaded_config.database.host}:${loaded_config.database.port}')
    println('    Features: ${loaded_config.features}')
    
    // 4. FILE INFORMATION AND UTILITIES
    println('\n4. File Information:')
    
    // Get file information
    info := fm.get_file_info('test.txt')!
    size_str := format_file_size(info.size)
    println('  ✓ File: ${info.name}')
    println('    Size: ${size_str} (${info.size} bytes)')
    println('    Modified: ${time.unix(info.mod_time)}')
    println('    Is directory: ${info.is_dir}')
    
    // Calculate file hash
    hash := fm.get_file_hash('test.txt')!
    println('    SHA256: ${hash[..16]}...')  // Show first 16 chars
    
    // 5. DIRECTORY OPERATIONS
    println('\n5. Directory Operations:')
    
    // Create nested directories
    fm.ensure_directory('data/backups/2024')!
    fm.ensure_directory('logs')!
    fm.ensure_directory('temp')!
    println('  ✓ Created directory structure')
    
    // Create some test files in different directories
    fm.write_file('data/users.json', '{"users": []}')!
    fm.write_file('data/settings.json', '{"theme": "dark"}')!
    fm.write_file('logs/app.log', 'Application started\n')!
    fm.write_file('temp/cache.tmp', 'temporary data')!
    println('  ✓ Created test files in directories')
    
    // List files (non-recursive)
    current_files := fm.list_files('.', false)!
    println('  ✓ Files in root: ${current_files}')
    
    // List files recursively
    all_files := fm.list_files('.', true)!
    println('  ✓ All files recursively: ${all_files.len} files found')
    
    // 6. PATTERN MATCHING AND FILE FINDING
    println('\n6. Pattern Matching:')
    
    // Find JSON files
    json_files := fm.find_files('.', '*.json', true)!
    println('  ✓ JSON files found: ${json_files}')
    
    // Find log files
    log_files := fm.find_files('.', '*.log', true)!
    println('  ✓ Log files found: ${log_files}')
    
    // Find temporary files
    temp_files := fm.find_files('.', '*.tmp', true)!
    println('  ✓ Temporary files found: ${temp_files}')
    
    // 7. FILE OPERATIONS
    println('\n7. File Operations:')
    
    // Create backup of config file
    if fm.file_exists('config.json') {
        backup_path := fm.backup_file('config.json')!
        println('  ✓ Created backup: ${backup_path}')
    }
    
    // Copy a file
    fm.copy_file('test.txt', 'data/test_copy.txt')!
    println('  ✓ Copied test.txt to data/test_copy.txt')
    
    // Move a file
    fm.move_file('temp/cache.tmp', 'data/moved_cache.tmp')!
    println('  ✓ Moved cache.tmp to data directory')
    
    // 8. ADVANCED OPERATIONS
    println('\n8. Advanced Operations:')
    
    // Append to log file
    fm.append_file('logs/app.log', 'User action performed\n')!
    fm.append_file('logs/app.log', 'Data processed successfully\n')!
    println('  ✓ Appended to log file')
    
    // Check file extensions
    test_files := ['config.json', 'test.txt', 'app.log', 'script.py', 'README']
    for file in test_files {
        ext := fm.get_file_extension(file)
        ext_display := if ext.len > 0 { ext } else { '(none)' }
        println('    ${file} -> extension: ${ext_display}')
    }
    
    // 9. CLEANUP DEMONSTRATION
    println('\n9. Cleanup Operations:')
    
    // Delete temporary files
    if fm.file_exists('data/moved_cache.tmp') {
        fm.delete_file('data/moved_cache.tmp')!
        println('  ✓ Deleted temporary file')
    }
    
    // Show final directory structure
    final_files := fm.list_files('.', true)!
    println('  ✓ Final file count: ${final_files.len} files')
    
    // 10. PRACTICAL RAD PATTERNS
    println('\n10. Practical RAD Patterns:')
    
    // Configuration reloading pattern
    println('  • Configuration hot-reload:')
    println('    - Initial load: uses cache')
    println('    - After external changes: cfg_mgr.reload_config()!')
    
    // Backup pattern
    println('  • Backup pattern:')
    println('    - Before critical operations: fm.backup_file(path)!')
    
    // Batch processing pattern
    println('  • Batch processing:')
    println('    - Find files: fm.find_files(dir, "*.json", true)!')
    println('    - Process each: for file in files { process(file) }')
    
    // Logging pattern
    println('  • Logging pattern:')
    println('    - Append logs: fm.append_file("app.log", message)!')
    
    println('\n=== File Utilities Demo Complete ===')
    println('All operations completed successfully!')
}
    
    if !os.exists(full_path) {
        return error('File does not exist: ${full_path}')
    }
    
    stat := os.stat(full_path) or {
        return error('Failed to get file stats: ${err}')
    }
    
    return FileInfo{
        name: os.base(full_path)
        path: full_path
        size: stat.size
        is_dir: stat.is_dir
        mod_time: stat.mtime
        permissions: stat.mode
    }
}

fn (fm FileManager) get_file_hash(path string) !string {
    content := fm.read_file(path)!
    hash := sha256.sum(content.bytes())
    return hash.hex()
}

fn (fm FileManager) file_exists(path string) bool {
    full_path := fm.get_full_path(path)
    return os.exists(full_path)
}

fn (fm FileManager) is_directory(path string) bool {
    full_path := fm.get_full_path(path)
    return os.is_dir(full_path)
}

// Utility functions
fn (fm FileManager) get_full_path(path string) string {
    if os.is_abs_path(path) {
        return path
    }
    return os.join_path(fm.base_path, path)
}

// Data structures
struct FileInfo {
    name        string
    path        string
    size        i64
    is_dir      bool
    mod_time    i64
    permissions int
}

// Configuration file manager
struct ConfigManager {
    fm FileManager
    config_file string
}

fn new_config_manager(base_path string, config_file string) ConfigManager {
    return ConfigManager{
        fm: new_file_manager(base_path)
        config_file: config_file
    }
}

fn (mut cm ConfigManager) load_config[T]() !T {
    return cm.fm.read_json[T](cm.config_file)
}

fn (mut cm ConfigManager) save_config[T](config T) ! {
    cm.fm.write_json[T](cm.config_file, config)!
}

// Usage examples
struct AppConfig {
    name     string
    version  string
    debug    bool
    database struct {
        host     string
        port     int
        username string
    }
}

fn file_utils_examples() {
    // Initialize file manager
    fm := new_file_manager('/tmp/v_app')
    
    // Create some test data
    test_data := 'Hello, V File System!'
    fm.write_file('test.txt', test_data) or {
        println('Error writing file: ${err}')
        return
    }
    
    // Read the file back
    content := fm.read_file('test.txt') or {
        println('Error reading file: ${err}')
        return
    }
    println('File content: ${content}')
    
    // Work with JSON configuration
    config := AppConfig{
        name: 'My V App'
        version: '1.0.0'
        debug: true
        database: {
            host: 'localhost'
            port: 5432
            username: 'admin'
        }
    }
    
    mut config_manager := new_config_manager('/tmp/v_app', 'config.json')
    config_manager.save_config(config) or {
        println('Error saving config: ${err}')
        return
    }
    
    loaded_config := config_manager.load_config[AppConfig]() or {
        println('Error loading config: ${err}')
        return
    }
    
    println('Loaded config: ${loaded_config.name} v${loaded_config.version}')
    
    // File operations
    file_info := fm.get_file_info('config.json') or {
        println('Error getting file info: ${err}')
        return
    }
    
    println('Config file size: ${file_info.size} bytes')
    
    // List all files
    files := fm.list_files('.', true) or {
        println('Error listing files: ${err}')
        return
    }
    
    println('All files:')
    for file in files {
        println('  ${file}')
    }
}
```

---

## 12. Data Processing Utilities

### Advanced Data Manipulation Library

```v
module dataprocessing

import json
import math

// Generic data transformation pipeline
struct Pipeline[T] {
mut:
    data []T
    operations []fn([]T) []T
}

pub fn new_pipeline[T](data []T) Pipeline[T] {
    return Pipeline[T]{ data: data }
}

// Chainable operations (fluent interface)
pub fn (mut p Pipeline[T]) map[U](transform fn(T) U) Pipeline[U] {
    mut result := []U{cap: p.data.len}
    for item in p.data {
        result << transform(item)
    }
    return Pipeline[U]{ data: result }
}

pub fn (mut p Pipeline[T]) filter(predicate fn(T) bool) Pipeline[T] {
    mut filtered := []T{}
    for item in p.data {
        if predicate(item) {
            filtered << item
        }
    }
    return Pipeline[T]{ data: filtered }
}

pub fn (mut p Pipeline[T]) take(count int) Pipeline[T] {
    end := if count > p.data.len { p.data.len } else { count }
    return Pipeline[T]{ data: p.data[..end] }
}

pub fn (mut p Pipeline[T]) skip(count int) Pipeline[T] {
    start := if count > p.data.len { p.data.len } else { count }
    return Pipeline[T]{ data: p.data[start..] }
}

// Terminal operations
pub fn (p Pipeline[T]) reduce[U](initial U, accumulator fn(U, T) U) U {
    mut result := initial
    for item in p.data {
        result = accumulator(result, item)
    }
    return result
}

pub fn (p Pipeline[T]) collect() []T {
    return p.data.clone()
}

pub fn (p Pipeline[T]) count() int {
    return p.data.len
}

pub fn (p Pipeline[T]) first() ?T {
    return if p.data.len > 0 { p.data[0] } else { none }
}

// Generic sorting with custom comparator
pub fn (mut p Pipeline[T]) sort_by(compare fn(T, T) int) Pipeline[T] {
    mut sorted := p.data.clone()
    quick_sort(mut sorted, compare)
    return Pipeline[T]{ data: sorted }
}

// Efficient quick sort implementation (reusable)
fn quick_sort[T](mut arr []T, compare fn(T, T) int) {
    if arr.len <= 1 { return }
    quick_sort_range(mut arr, 0, arr.len - 1, compare)
}

fn quick_sort_range[T](mut arr []T, low int, high int, compare fn(T, T) int) {
    if low < high {
        pivot := partition(mut arr, low, high, compare)
        quick_sort_range(mut arr, low, pivot - 1, compare)
        quick_sort_range(mut arr, pivot + 1, high, compare)
    }
}

fn partition[T](mut arr []T, low int, high int, compare fn(T, T) int) int {
    pivot := arr[high]
    mut i := low - 1
    
    for j in low..high {
        if compare(arr[j], pivot) <= 0 {
            i++
            arr[i], arr[j] = arr[j], arr[i]
        }
    }
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1
}

// Statistical analysis utilities with reusable calculations
struct StatisticsEngine {
}

pub fn new_statistics() StatisticsEngine {
    return StatisticsEngine{}
}

// Core statistical operations
pub fn (s StatisticsEngine) calculate_basic_stats(numbers []f64) BasicStats {
    if numbers.len == 0 {
        return BasicStats{}
    }
    
    mut sorted := numbers.clone()
    sorted.sort()
    
    sum := s.sum(numbers)
    mean_val := sum / f64(numbers.len)
    
    return BasicStats{
        count: numbers.len
        sum: sum
        mean: mean_val
        median: s.calculate_median(sorted)
        mode: s.calculate_mode(numbers)
        std_dev: s.calculate_std_dev(numbers, mean_val)
        min: sorted[0]
        max: sorted[sorted.len - 1]
    }
}

fn (s StatisticsEngine) sum(numbers []f64) f64 {
    mut total := 0.0
    for x in numbers {
        total += x
    }
    return total
}

fn (s StatisticsEngine) calculate_median(sorted_numbers []f64) f64 {
    n := sorted_numbers.len
    if n == 0 { return 0 }
    
    mid := n / 2
    return if n % 2 == 0 {
        (sorted_numbers[mid - 1] + sorted_numbers[mid]) / 2.0
    } else {
        sorted_numbers[mid]
    }
}

fn (s StatisticsEngine) calculate_mode(numbers []f64) f64 {
    mut frequency := map[f64]int{}
    
    for num in numbers {
        frequency[num] = frequency[num] or { 0 } + 1
    }
    
    mut max_freq := 0
    mut mode_val := 0.0
    
    for num, freq in frequency {
        if freq > max_freq {
            max_freq = freq
            mode_val = num
        }
    }
    
    return mode_val
}

fn (s StatisticsEngine) calculate_std_dev(numbers []f64, mean_val f64) f64 {
    if numbers.len <= 1 { return 0 }
    
    mut sum_sq_diff := 0.0
    for x in numbers {
        diff := x - mean_val
        sum_sq_diff += diff * diff
    }
    
    variance := sum_sq_diff / f64(numbers.len - 1)
    return math.sqrt(variance)
}

// Data structure for statistical results
struct BasicStats {
pub:
    count   int
    sum     f64
    mean    f64
    median  f64
    mode    f64
    std_dev f64
    min     f64
    max     f64
}

// CSV processing with configurable parsing
struct CsvProcessor {
    delimiter   string
    quote_char  string
    has_header  bool
mut:
    headers     []string
}

pub fn new_csv_processor(options CsvOptions) CsvProcessor {
    return CsvProcessor{
        delimiter: options.delimiter or { ',' }
        quote_char: options.quote_char or { '"' }
        has_header: options.has_header or { true }
    }
}

struct CsvOptions {
    delimiter   ?string
    quote_char  ?string
    has_header  ?bool
}

pub fn (mut cp CsvProcessor) parse_csv(content string) ![]map[string]string {
    lines := content.split_into_lines().filter(it.trim().len > 0)
    if lines.len == 0 {
        return []map[string]string{}
    }
    
    mut start_index := 0
    if cp.has_header {
        cp.headers = cp.parse_csv_line(lines[0])
        start_index = 1
    } else {
        // Generate default headers
        first_row := cp.parse_csv_line(lines[0])
        cp.headers = []string{len: first_row.len, init: 'column_${index}'}
    }
    
    mut records := []map[string]string{cap: lines.len - start_index}
    
    for i in start_index .. lines.len {
        values := cp.parse_csv_line(lines[i])
        mut record := map[string]string{}
        
        for j, header in cp.headers {
            value := if j < values.len { values[j] } else { '' }
            record[header] = value
        }
        
        records << record
    }
    
    return records
}

pub fn (cp CsvProcessor) generate_csv(records []map[string]string) string {
    if records.len == 0 { return '' }
    
    mut lines := []string{cap: records.len + 1}
    
    // Add header if needed
    if cp.has_header && cp.headers.len > 0 {
        header_line := cp.headers.map(cp.escape_csv_value(it)).join(cp.delimiter)
        lines << header_line
    }
    
    // Add data rows
    for record in records {
        values := cp.headers.map(cp.escape_csv_value(record[it] or { '' }))
        lines << values.join(cp.delimiter)
    }
    
    return lines.join('\n')
}

fn (cp CsvProcessor) parse_csv_line(line string) []string {
    // Simplified CSV parsing - in production, use a proper CSV parser
    return line.split(cp.delimiter).map(it.trim().trim_string_left(cp.quote_char).trim_string_right(cp.quote_char))
}

fn (cp CsvProcessor) escape_csv_value(value string) string {
    // Simple escaping - wrap in quotes if contains delimiter or quote
    if value.contains(cp.delimiter) || value.contains(cp.quote_char) {
        escaped := value.replace(cp.quote_char, cp.quote_char + cp.quote_char)
        return cp.quote_char + escaped + cp.quote_char
    }
    return value
}

// ============================================================================
// COMPREHENSIVE RAD EXAMPLES (Real-world data processing scenarios)
// ============================================================================

// Complete demonstration of data processing utilities for rapid application development
pub fn data_processing_examples() {
    println('=== V Data Processing Utilities - RAD Examples ===\n')
    
    // 1. BASIC PIPELINE PROCESSING
    println('1. Basic Pipeline Operations:')
    
    // Sample sales data for demonstration
    sales_data := [125.50, 89.99, 234.75, 45.00, 167.25, 99.99, 78.50, 189.00, 156.75, 200.00]
    
    // Chain operations using fluent interface
    processed_sales := new_pipeline(sales_data)
        .filter(fn (sale f64) bool { return sale >= 100.0 })  // High-value sales only
        .map(fn (sale f64) f64 { return sale * 1.08 })        // Add 8% tax
        .take(5)                                              // Top 5 transactions
        .collect()
    
    println('  ✓ Original sales: ${sales_data.len} transactions')
    println('  ✓ High-value sales (≥$100): ${processed_sales.len} transactions')
    println('  ✓ With tax: ${processed_sales.map(fn (x f64) string { return '$${x:.2f}' })}')
    
    // 2. STATISTICAL ANALYSIS
    println('\n2. Statistical Analysis:')
    
    // Performance metrics data (response times in milliseconds)
    response_times := [45.2, 67.8, 123.4, 89.1, 156.7, 78.9, 234.5, 101.2, 87.3, 145.6, 
                       76.4, 198.7, 112.3, 89.9, 167.8, 134.5, 98.7, 176.2, 145.9, 187.4]
    
    stats_engine := new_statistics()
    perf_stats := stats_engine.calculate_basic_stats(response_times)
    
    println('  ✓ Performance Analysis Results:')
    println('    Sample size: ${perf_stats.count} requests')
    println('    Average response time: ${perf_stats.mean:.1f}ms')
    println('    Median response time: ${perf_stats.median:.1f}ms')  
    println('    Fastest response: ${perf_stats.min:.1f}ms')
    println('    Slowest response: ${perf_stats.max:.1f}ms')
    println('    Standard deviation: ${perf_stats.std_dev:.1f}ms')
    println('    Most common response time: ${perf_stats.mode:.1f}ms')
    
    // Performance categorization
    slow_requests := response_times.filter(fn (time f64) bool { return time > perf_stats.mean + perf_stats.std_dev })
    fast_requests := response_times.filter(fn (time f64) bool { return time < perf_stats.mean - perf_stats.std_dev })
    
    println('    Slow requests (>1σ): ${slow_requests.len} (${(slow_requests.len * 100.0 / response_times.len):.1f}%)')
    println('    Fast requests (<1σ): ${fast_requests.len} (${(fast_requests.len * 100.0 / response_times.len):.1f}%)')
    
    // 3. ADVANCED PIPELINE WITH COMPLEX DATA
    println('\n3. Advanced Pipeline with Complex Data:')
    
    // Sample employee data for HR analysis
    employees := [
        Employee{name: 'Alice Johnson', age: 28, salary: 65000, department: 'Engineering', years: 3},
        Employee{name: 'Bob Smith', age: 35, salary: 78000, department: 'Engineering', years: 7},
        Employee{name: 'Carol Davis', age: 42, salary: 92000, department: 'Management', years: 12},
        Employee{name: 'David Wilson', age: 29, salary: 58000, department: 'Marketing', years: 2},
        Employee{name: 'Eve Brown', age: 33, salary: 71000, department: 'Engineering', years: 5},
        Employee{name: 'Frank Miller', age: 45, salary: 85000, department: 'Sales', years: 15},
        Employee{name: 'Grace Taylor', age: 26, salary: 52000, department: 'Marketing', years: 1},
        Employee{name: 'Henry Clark', age: 38, salary: 89000, department: 'Engineering', years: 9}
    ]
    
    // Complex analysis: Senior engineers with high compensation
    senior_engineers := new_pipeline(employees)
        .filter(fn (emp Employee) bool { return emp.department == 'Engineering' })
        .filter(fn (emp Employee) bool { return emp.years >= 5 })
        .sort_by(fn (a Employee, b Employee) int { 
            // Sort by salary descending
            if a.salary > b.salary { return -1 }
            if a.salary < b.salary { return 1 }
            return 0
        })
        .collect()
    
    println('  ✓ Senior Engineers Analysis:')
    for eng in senior_engineers {
        experience_bonus := eng.years * 1000  // $1000 per year bonus calculation
        println('    ${eng.name}: $${eng.salary} (${eng.years}y) + $${experience_bonus} bonus')
    }
    
    // Department salary analysis
    dept_analysis := analyze_departments(employees)
    println('  ✓ Department Analysis:')
    for dept, stats in dept_analysis {
        println('    ${dept}: ${stats.count} employees, avg salary: $${stats.mean:.0f}')
    }
    
    // 4. CSV DATA PROCESSING
    println('\n4. CSV Data Processing:')
    
    // Sample customer data
    customer_csv := 'customer_id,name,email,age,city,purchase_amount,purchase_date
1001,Alice Johnson,alice@email.com,28,New York,156.75,2024-01-15
1002,Bob Smith,bob@email.com,35,Boston,234.50,2024-01-16  
1003,Carol Davis,carol@email.com,42,Chicago,89.99,2024-01-17
1004,David Wilson,david@email.com,29,Miami,167.25,2024-01-18
1005,Eve Brown,eve@email.com,33,Seattle,245.80,2024-01-19'
    
    // Parse CSV data
    mut csv_processor := new_csv_processor(CsvOptions{
        delimiter: ','
        has_header: true
    })
    
    customer_records := csv_processor.parse_csv(customer_csv)!
    println('  ✓ Parsed ${customer_records.len} customer records')
    
    // Process customer data with pipeline
    high_value_customers := customer_records
        .filter(fn (record map[string]string) bool { 
            amount := record['purchase_amount'].f64()
            return amount >= 150.0
        })
        .map(fn (record map[string]string) map[string]string {
            mut updated := record.clone()
            amount := record['purchase_amount'].f64()
            loyalty_bonus := amount * 0.05  // 5% loyalty bonus
            updated['loyalty_bonus'] = '${loyalty_bonus:.2f}'
            return updated
        })
    
    println('  ✓ High-value customers (≥$150):')
    for customer in high_value_customers {
        name := customer['name']
        amount := customer['purchase_amount']
        bonus := customer['loyalty_bonus']
        city := customer['city']
        println('    ${name} (${city}): $${amount} + $${bonus} bonus')
    }
    
    // Generate report CSV
    report_data := high_value_customers.map(fn (customer map[string]string) map[string]string {
        return {
            'customer_name': customer['name']
            'city': customer['city'] 
            'purchase_amount': customer['purchase_amount']
            'loyalty_bonus': customer['loyalty_bonus']
            'total_value': '${customer['purchase_amount'].f64() + customer['loyalty_bonus'].f64():.2f}'
        }
    })
    
    csv_processor.headers = ['customer_name', 'city', 'purchase_amount', 'loyalty_bonus', 'total_value']
    report_csv := csv_processor.generate_csv(report_data)
    println('  ✓ Generated loyalty report CSV (${report_csv.count('\n')} lines)')
    
    // 5. BATCH DATA TRANSFORMATION
    println('\n5. Batch Data Transformation:')
    
    // Log data processing example
    log_entries := [
        'INFO 2024-01-20 10:15:30 User login successful for user123',
        'ERROR 2024-01-20 10:16:45 Database connection failed',
        'INFO 2024-01-20 10:17:12 Data processing completed',
        'WARN 2024-01-20 10:18:22 High memory usage detected',
        'ERROR 2024-01-20 10:19:03 API request timeout',
        'INFO 2024-01-20 10:20:15 System backup initiated'
    ]
    
    // Parse and analyze log entries
    processed_logs := new_pipeline(log_entries)
        .map(fn (entry string) LogEntry {
            parts := entry.split(' ')
            return LogEntry{
                level: parts[0]
                timestamp: '${parts[1]} ${parts[2]}'
                message: parts[3..].join(' ')
            }
        })
        .sort_by(fn (a LogEntry, b LogEntry) int {
            // Sort by severity (ERROR > WARN > INFO)
            severity_order := {'ERROR': 3, 'WARN': 2, 'INFO': 1}
            a_val := severity_order[a.level] or { 0 }
            b_val := severity_order[b.level] or { 0 }
            return b_val - a_val  // Descending order
        })
        .collect()
    
    println('  ✓ Processed ${processed_logs.len} log entries (sorted by severity):')
    for log in processed_logs {
        println('    [${log.level}] ${log.timestamp}: ${log.message}')
    }
    
    // Error analysis
    error_count := processed_logs.filter(fn (log LogEntry) bool { return log.level == 'ERROR' }).len
    warn_count := processed_logs.filter(fn (log LogEntry) bool { return log.level == 'WARN' }).len
    info_count := processed_logs.filter(fn (log LogEntry) bool { return log.level == 'INFO' }).len
    
    println('  ✓ Log Summary: ${error_count} errors, ${warn_count} warnings, ${info_count} info messages')
    
    // 6. PRACTICAL RAD PATTERNS
    println('\n6. Practical RAD Patterns:')
    
    // Data validation pipeline
    println('  • Data Validation Pattern:')
    println('    - Filter invalid records: .filter(validation_fn)')
    println('    - Transform to standard format: .map(normalize_fn)')
    println('    - Collect clean data: .collect()')
    
    // ETL (Extract, Transform, Load) pattern
    println('  • ETL Pattern:')
    println('    - Extract: csv_processor.parse_csv(raw_data)')
    println('    - Transform: new_pipeline(records).map().filter()')
    println('    - Load: write_results_to_database(processed_data)')
    
    // Aggregation pattern
    println('  • Aggregation Pattern:')
    println('    - Group by key: group_by_department(employees)')
    println('    - Calculate stats: stats_engine.calculate_basic_stats()')
    println('    - Generate reports: format_summary_report(aggregated)')
    
    println('\n=== Data Processing Demo Complete ===')
    println('All operations completed successfully!')
}

// ============================================================================
// SUPPORTING DATA STRUCTURES (For comprehensive examples)
// ============================================================================

// Employee data structure for HR analytics examples
struct Employee {
    name       string    // Full employee name
    age        int       // Employee age
    salary     f64       // Annual salary in dollars
    department string    // Department name
    years      int       // Years of service
}

// Log entry structure for system monitoring examples
struct LogEntry {
    level     string     // Log level: INFO, WARN, ERROR
    timestamp string     // When the event occurred
    message   string     // Log message content
}

// Department statistics for organizational analysis
struct DepartmentStats {
    count  int     // Number of employees
    mean   f64     // Average salary
    min    f64     // Minimum salary
    max    f64     // Maximum salary
}

// ============================================================================
// HELPER FUNCTIONS (Reusable analysis utilities)
// ============================================================================

// Analyze employees by department - demonstrates grouping and aggregation
fn analyze_departments(employees []Employee) map[string]DepartmentStats {
    mut dept_groups := map[string][]f64{}
    
    // Group salaries by department
    for emp in employees {
        dept_groups[emp.department] = dept_groups[emp.department] or { []f64{} }
        dept_groups[emp.department] << emp.salary
    }
    
    // Calculate statistics for each department
    mut results := map[string]DepartmentStats{}
    for dept, salaries in dept_groups {
        mut sorted := salaries.clone()
        sorted.sort()
        
        sum := salaries.reduce(0.0, fn (acc f64, salary f64) f64 { return acc + salary })
        
        results[dept] = DepartmentStats{
            count: salaries.len
            mean: sum / f64(salaries.len)
            min: sorted[0]
            max: sorted[sorted.len - 1]
        }
    }
    
    return results
}
    
    records := csv_processor.parse_csv(csv_data) or {
        println('CSV parsing failed: ${err}')
        return
    }
    
    println('CSV Records:')
    for record in records {
        println('  ${record}')
    }
    
    // Generate updated CSV
    updated_csv := csv_processor.generate_csv(records)
    println('Updated CSV:\n${updated_csv}')
}
}

fn (mut cp CsvProcessor) parse_csv(content string) [][]string {
    lines := content.split_into_lines()
    mut rows := [][]string{}
    
    for line in lines {
        if line.trim_space().len > 0 {
            row := line.split(cp.delimiter).map(it.trim_space())
            rows << row
        }
    }
    
    if rows.len > 0 {
        cp.headers = rows[0]
        return rows[1..]
    }
    
    return rows
}

fn (cp CsvProcessor) to_maps(rows [][]string) []map[string]string {
    mut records := []map[string]string{}
    
    for row in rows {
        mut record := map[string]string{}
        for i, value in row {
            if i < cp.headers.len {
                record[cp.headers[i]] = value
            }
        }
        records << record
    }
    
    return records
}

fn (cp CsvProcessor) from_maps(records []map[string]string) string {
    if records.len == 0 {
        return ''
    }
    
    // Get headers from first record
    headers := records[0].keys()
    mut lines := []string{}
    
    // Add header line
    lines << headers.join(cp.delimiter)
    
    // Add data lines
    for record in records {
        mut row := []string{}
        for header in headers {
            row << record[header] or { '' }
        }
        lines << row.join(cp.delimiter)
    }
    
    return lines.join('\n')
}

// Data aggregation utilities
struct Aggregator[T] {
}

fn (a Aggregator[T]) group_by[K](data []T, key_fn fn(T) K) map[K][]T {
    mut groups := map[K][]T{}
    
    for item in data {
        key := key_fn(item)
        if key !in groups {
            groups[key] = []T{}
        }
        groups[key] << item
    }
    
    return groups
}

fn (a Aggregator[T]) count_by[K](data []T, key_fn fn(T) K) map[K]int {
    mut counts := map[K]int{}
    
    for item in data {
        key := key_fn(item)
        counts[key] = counts[key] or { 0 } + 1
    }
    
    return counts
}

// Usage examples with practical data structures
struct Person {
    name   string
    age    int
    city   string
    salary f64
}

struct Sale {
    product  string
    amount   f64
    date     string
    region   string
}

fn data_processing_examples() {
    // Sample data
    people := [
        Person{ name: 'Alice', age: 30, city: 'New York', salary: 75000 },
        Person{ name: 'Bob', age: 25, city: 'San Francisco', salary: 85000 },
        Person{ name: 'Charlie', age: 35, city: 'New York', salary: 65000 },
        Person{ name: 'Diana', age: 28, city: 'San Francisco', salary: 90000 },
    ]
    
    // Data processing with functional methods
    mut processor := new_data_processor(people)
    
    // Filter by city and get salaries
    sf_salaries := processor
        .filter(fn(p Person) bool { return p.city == 'San Francisco' })
        .map(fn(p Person) f64 { return p.salary })
    
    println('SF Salaries: ${sf_salaries}')
    
    // Statistical analysis
    stats := Statistics{}
    salaries := people.map(fn(p Person) f64 { return p.salary })
    
    println('Average salary: ${stats.mean(salaries)}')
    println('Median salary: ${stats.median(salaries)}')
    println('Salary std dev: ${stats.standard_deviation(salaries)}')
    
    // Group by city
    aggregator := Aggregator[Person]{}
    by_city := aggregator.group_by(people, fn(p Person) string { return p.city })
    
    for city, city_people in by_city {
        avg_salary := stats.mean(city_people.map(fn(p Person) f64 { return p.salary }))
        println('${city}: ${city_people.len} people, avg salary: ${avg_salary}')
    }
    
    // CSV processing example
    csv_data := 'Name,Age,City,Salary
Alice,30,New York,75000
Bob,25,San Francisco,85000
Charlie,35,New York,65000'
    
    mut csv_processor := new_csv_processor(',')
    rows := csv_processor.parse_csv(csv_data)
    records := csv_processor.to_maps(rows)
    
    println('CSV Records:')
    for record in records {
        println('  ${record}')
    }
    
    // Convert back to CSV
    updated_csv := csv_processor.from_maps(records)
    println('Updated CSV:')
    println(updated_csv)
}
```

---

## 13. Network Utilities

### HTTP and Networking Helpers

```v
module netutils

import net.http
import json
import os
import time

// HTTP client configuration
struct HttpConfig {
    timeout        time.Duration = 30 * time.second
    max_retries    int = 3
    retry_delay    time.Duration = 1 * time.second
    user_agent     string = 'V-NetUtils/1.0'
    default_headers map[string]string
}

// HTTP client wrapper with reusable configuration
struct HttpClient {
    config HttpConfig
}

pub fn new_http_client(config HttpConfig) HttpClient {
    return HttpClient{ config: config }
}

pub fn default_http_client() HttpClient {
    return HttpClient{
        config: HttpConfig{
            default_headers: {
                'Content-Type': 'application/json'
                'Accept': 'application/json'
            }
        }
    }
}

// Generic HTTP request with retry logic (reusable pattern)
fn (hc HttpClient) execute_request_with_retry[T](request_fn fn() !http.Response) !http.Response {
    mut last_error := error('No attempts made')
    
    for attempt in 1..hc.config.max_retries + 1 {
        response := request_fn() or {
            last_error = err
            if attempt < hc.config.max_retries {
                time.sleep(hc.config.retry_delay)
                continue
            }
            return err
        }
        
        if response.status_code >= 200 && response.status_code < 300 {
            return response
        }
        
        if response.status_code >= 400 && response.status_code < 500 {
            // Client errors - don't retry
            return error('HTTP ${response.status_code}: ${response.status_msg}')
        }
        
        // Server errors - retry
        last_error = error('HTTP ${response.status_code}: ${response.status_msg}')
        if attempt < hc.config.max_retries {
            time.sleep(hc.config.retry_delay)
        }
    }
    
    return last_error
}

// High-level HTTP operations
pub fn (hc HttpClient) get_json[T](url string) !T {
    resp := hc.execute_request_with_retry(fn [url, hc] () !http.Response {
        mut req := http.new_request(.get, url, '')
        for key, value in hc.config.default_headers {
            req.add_header(key, value)
        }
        req.add_header('User-Agent', hc.config.user_agent)
        return req.do()
    })!
    
    return json.decode(T, resp.text) or { 
        return error('JSON decode error: ${err}') 
    }
}

pub fn (hc HttpClient) post_json[T, U](url string, payload T) !U {
    body := json.encode(payload)
    resp := hc.execute_request_with_retry(fn [url, body, hc] () !http.Response {
        mut req := http.new_request(.post, url, body)
        for key, value in hc.config.default_headers {
            req.add_header(key, value)
        }
        req.add_header('User-Agent', hc.config.user_agent)
        return req.do()
    })!
    
    return json.decode(U, resp.text) or { 
        return error('JSON decode error: ${err}') 
    }
}

pub fn (hc HttpClient) download_file(url string, dest_path string) ! {
    resp := hc.execute_request_with_retry(fn [url, hc] () !http.Response {
        mut req := http.new_request(.get, url, '')
        req.add_header('User-Agent', hc.config.user_agent)
        return req.do()
    })!
    
    // Ensure destination directory exists
    dir_path := os.dir(dest_path)
    if !os.exists(dir_path) {
        os.mkdir_all(dir_path) or {
            return error('Failed to create directory: ${err}')
        }
    }
    
    os.write_file(dest_path, resp.body) or { 
        return error('Write file failed: ${err}') 
    }
}

// URL utilities
pub fn build_url(base string, path string, params map[string]string) string {
    mut url := base.trim_right('/')
    
    if path.len > 0 {
        clean_path := path.trim_left('/')
        url += '/' + clean_path
    }
    
    if params.len > 0 {
        mut param_pairs := []string{}
        for key, value in params {
            encoded_key := http.urllib_percent_encode(key)
            encoded_value := http.urllib_percent_encode(value)
            param_pairs << '${encoded_key}=${encoded_value}'
        }
        url += '?' + param_pairs.join('&')
    }
    
    return url
}

// Response validation helpers
pub fn validate_response(resp http.Response, expected_status []int) ! {
    if expected_status.len > 0 && resp.status_code !in expected_status {
        return error('Unexpected status code: ${resp.status_code}, expected one of: ${expected_status}')
    }
    
    if resp.status_code >= 400 {
        return error('HTTP Error ${resp.status_code}: ${resp.status_msg}')
    }
}

// ============================================================================
// COMPREHENSIVE RAD EXAMPLES (Real-world networking scenarios)
// ============================================================================

// Complete demonstration of network utilities for rapid application development
pub fn net_utils_examples() ! {
    println('=== V Network Utilities - RAD Examples ===\n')
    
    // 1. BASIC HTTP CLIENT CONFIGURATION
    println('1. HTTP Client Configuration:')
    
    // Create a production-ready HTTP client
    client := new_http_client(HttpConfig{
        timeout: 15 * time.second       // 15 second timeout
        max_retries: 3                  // Retry up to 3 times
        retry_delay: 2 * time.second    // Wait 2 seconds between retries
        default_headers: {
            'User-Agent': 'V-RAD-Client/1.0'
            'Accept': 'application/json'
            'Content-Type': 'application/json'
        }
    })
    
    println('  ✓ HTTP client configured with:')
    println('    - Timeout: 15 seconds')
    println('    - Max retries: 3 attempts')
    println('    - Default JSON headers')
    
    // 2. URL BUILDING AND PARAMETER HANDLING
    println('\n2. URL Building:')
    
    // E-commerce API example
    base_api := 'https://api.shop.com'
    
    // Product search URL
    search_url := build_url(base_api, '/v1/products/search', {
        'category': 'electronics'
        'min_price': '100'
        'max_price': '500'
        'sort': 'popularity'
        'page': '1'
        'limit': '20'
        'in_stock': 'true'
    })
    println('  ✓ Product search URL:')
    println('    ${search_url}')
    
    // User profile URL
    user_id := '12345'
    profile_url := build_url(base_api, '/v1/users/${user_id}', {
        'include': 'orders,preferences'
        'format': 'detailed'
    })
    println('  ✓ User profile URL:')
    println('    ${profile_url}')
    
    // 3. API DATA STRUCTURES
    println('\n3. API Data Structures:')
    
    // Sample structures for demonstration
    struct Product {
        id          string    // Product identifier
        name        string    // Product name
        price       f64       // Price in dollars
        category    string    // Product category
        in_stock    bool      // Stock availability
        rating      f64       // Average rating
        description string    // Product description
    }
    
    struct ApiResponse[T] {
        success   bool       // Request success status
        message   string     // Response message
        data      T          // Response data
        timestamp string     // Response timestamp
        errors    []string   // Any error messages
    }
    
    struct SearchResults {
        products []Product   // Array of products
        total    int        // Total number of results
        page     int        // Current page number
        per_page int        // Items per page
    }
    
    println('  ✓ Defined generic API structures:')
    println('    - Product: product information')
    println('    - ApiResponse[T]: generic API response wrapper')
    println('    - SearchResults: paginated search results')
    
    // 4. MOCK API OPERATIONS (Demonstrating patterns)
    println('\n4. API Operation Patterns:')
    
    // GET request pattern
    println('  • GET Request Pattern:')
    println('    URL: ${search_url}')
    println('    Purpose: Retrieve product search results')
    println('    Response: ApiResponse[SearchResults]')
    
    // POST request pattern  
    new_product := Product{
        id: 'PROD-7890'
        name: 'Wireless Headphones'
        price: 199.99
        category: 'electronics'
        in_stock: true
        rating: 4.5
        description: 'High-quality wireless headphones with noise cancellation'
    }
    
    println('  • POST Request Pattern:')
    println('    URL: ${base_api}/v1/products')
    println('    Payload: Product{name: "${new_product.name}", price: $${new_product.price}}')
    println('    Purpose: Create new product')
    println('    Response: ApiResponse[Product]')
    
    // PUT request pattern
    updated_product := Product{
        ...new_product,
        price: 179.99,  // Updated price
        description: 'High-quality wireless headphones with noise cancellation - NOW ON SALE!'
    }
    
    println('  • PUT Request Pattern:')
    println('    URL: ${base_api}/v1/products/${updated_product.id}')
    println('    Payload: Updated Product{price: $${updated_product.price}}')
    println('    Purpose: Update existing product')
    println('    Response: ApiResponse[Product]')
    
    // DELETE request pattern
    println('  • DELETE Request Pattern:')
    println('    URL: ${base_api}/v1/products/PROD-OLD-123')
    println('    Purpose: Remove discontinued product')
    println('    Response: ApiResponse[bool]')
    
    // 5. ERROR HANDLING PATTERNS
    println('\n5. Error Handling Patterns:')
    
    // Status code handling
    expected_success := [200, 201]  // Success codes
    expected_not_found := [404]     // Not found codes
    expected_client_error := [400, 401, 403]  // Client error codes
    
    println('  • Status Code Validation:')
    println('    Success codes: ${expected_success}')
    println('    Client errors: ${expected_client_error}')
    println('    Resource errors: ${expected_not_found}')
    
    // Retry logic demonstration
    println('  • Retry Logic:')
    println('    Network failures: Automatic retry with exponential backoff')
    println('    Timeout errors: Retry up to max_retries times')
    println('    Server errors (5xx): Retry with delay')
    println('    Client errors (4xx): No retry (permanent failure)')
    
    // 6. FILE DOWNLOAD PATTERNS
    println('\n6. File Download Patterns:')
    
    // Product image download
    image_url := 'https://cdn.shop.com/products/PROD-7890/main.jpg'
    local_path := '/tmp/product_images/PROD-7890_main.jpg'
    
    println('  • Image Download:')
    println('    Source: ${image_url}')
    println('    Destination: ${local_path}')
    println('    Use case: Product catalog management')
    
    // CSV export download
    export_url := build_url(base_api, '/v1/reports/sales.csv', {
        'start_date': '2024-01-01'
        'end_date': '2024-01-31'
        'format': 'csv'
    })
    
    println('  • Report Download:')
    println('    Source: ${export_url}')
    println('    Destination: /tmp/reports/sales_jan2024.csv')
    println('    Use case: Business intelligence and reporting')
    
    // 7. AUTHENTICATION PATTERNS
    println('\n7. Authentication Patterns:')
    
    // API key authentication
    api_key_client := new_http_client(HttpConfig{
        timeout: 10 * time.second
        default_headers: {
            'X-API-Key': 'your-secret-api-key-here'
            'Content-Type': 'application/json'
        }
    })
    println('  • API Key Authentication: X-API-Key header')
    
    // Bearer token authentication
    bearer_client := new_http_client(HttpConfig{
        timeout: 10 * time.second
        default_headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
            'Content-Type': 'application/json'
        }
    })
    println('  • Bearer Token Authentication: Authorization header')
    
    // Basic authentication
    basic_auth := base64.encode('username:password')
    basic_client := new_http_client(HttpConfig{
        timeout: 10 * time.second
        default_headers: {
            'Authorization': 'Basic ${basic_auth}'
            'Content-Type': 'application/json'
        }
    })
    println('  • Basic Authentication: Base64 encoded credentials')
    
    // 8. PAGINATION AND BATCH PROCESSING
    println('\n8. Pagination Patterns:')
    
    // Cursor-based pagination
    cursor_url := build_url(base_api, '/v1/orders', {
        'cursor': 'eyJpZCI6MTIzNDU2fQ'
        'limit': '50'
        'sort': 'created_at:desc'
    })
    println('  • Cursor-based: ${cursor_url}')
    println('    Advantages: Consistent results, handles real-time changes')
    
    // Offset-based pagination
    offset_url := build_url(base_api, '/v1/customers', {
        'offset': '100'
        'limit': '25'
        'sort': 'name'
    })
    println('  • Offset-based: ${offset_url}')
    println('    Advantages: Simple implementation, random access')
    
    // Page-based pagination
    page_url := build_url(base_api, '/v1/products', {
        'page': '5'
        'per_page': '20'
        'category': 'electronics'
    })
    println('  • Page-based: ${page_url}')
    println('    Advantages: User-friendly, easy navigation')
    
    // 9. WEBHOOK PATTERNS
    println('\n9. Webhook Patterns:')
    
    // Webhook payload structure
    struct WebhookPayload {
        event       string             // Event type (e.g., "order.created")
        timestamp   string             // When event occurred
        data        map[string]string  // Event-specific data
        signature   string             // HMAC signature for verification
        version     string             // API version
    }
    
    webhook_example := WebhookPayload{
        event: 'order.completed'
        timestamp: '2024-01-20T15:30:45Z'
        data: {
            'order_id': 'ORD-98765'
            'customer_id': 'CUST-12345'
            'total': '299.99'
            'status': 'completed'
        }
        signature: 'sha256=a3b2c1d4e5f6...'
        version: 'v1'
    }
    
    println('  • Webhook Structure: ${webhook_example.event}')
    println('    Timestamp: ${webhook_example.timestamp}')
    println('    Order ID: ${webhook_example.data['order_id']}')
    println('    Total: $${webhook_example.data['total']}')
    
    // 10. PRACTICAL RAD PATTERNS
    println('\n10. Practical RAD Patterns:')
    
    // Configuration pattern
    println('  • Configuration Pattern:')
    println('    - Environment-based URLs: dev, staging, prod')
    println('    - Configurable timeouts and retry policies')
    println('    - Centralized header management')
    
    // Circuit breaker pattern
    println('  • Circuit Breaker Pattern:')
    println('    - Monitor failure rates')
    println('    - Open circuit on high failure rate')
    println('    - Close circuit when service recovers')
    
    // Rate limiting pattern
    println('  • Rate Limiting Pattern:')
    println('    - Track request counts per time window')
    println('    - Respect API rate limit headers')
    println('    - Implement backoff strategies')
    
    // Caching pattern
    println('  • Caching Pattern:')
    println('    - Cache GET responses by URL + headers')
    println('    - Respect Cache-Control headers')
    println('    - Implement cache invalidation strategies')
    
    println('\n=== Network Utilities Demo Complete ===')
    println('All networking patterns demonstrated successfully!')
    println('Note: Examples show patterns - uncomment specific sections for real API calls')
}
```

---

## 14. Math & Algorithm Utilities

### Handy Algorithms and Helpers

```v
module mathutils

import math

// Mathematical utilities with error handling
struct MathUtils {
}

pub fn new_math_utils() MathUtils {
    return MathUtils{}
}

// Number theory functions
pub fn (mu MathUtils) gcd(a int, b int) int {
    mut x := if a < 0 { -a } else { a }
    mut y := if b < 0 { -b } else { b }
    
    for y != 0 {
        x, y = y, x % y
    }
    return x
}

pub fn (mu MathUtils) lcm(a int, b int) int {
    if a == 0 && b == 0 { return 0 }
    gcd_val := mu.gcd(a, b)
    return (a / gcd_val) * b
}

pub fn (mu MathUtils) is_prime(n int) bool {
    if n < 2 { return false }
    if n == 2 { return true }
    if n % 2 == 0 { return false }
    
    sqrt_n := int(math.sqrt(f64(n))) + 1
    for i := 3; i <= sqrt_n; i += 2 {
        if n % i == 0 { return false }
    }
    return true
}

// Efficient algorithms for common operations
pub fn (mu MathUtils) fibonacci_sequence(n int) []i64 {
    if n <= 0 { return [] }
    if n == 1 { return [i64(0)] }
    
    mut seq := []i64{cap: n}
    seq << 0
    seq << 1
    
    for i := 2; i < n; i++ {
        seq << seq[i - 1] + seq[i - 2]
    }
    
    return seq
}

// Generic binary search implementation (reusable for any comparable type)
pub fn binary_search[T](arr []T, target T, compare fn(T, T) int) int {
    mut low := 0
    mut high := arr.len - 1
    
    for low <= high {
        mid := low + (high - low) / 2
        comparison := compare(arr[mid], target)
        
        match comparison {
            0 { return mid }
            -1 { low = mid + 1 }
            1 { high = mid - 1 }
            else { return -1 } // Invalid comparison result
        }
    }
    
    return -1
}

// Optimized sorting algorithms
pub fn merge_sort[T](mut arr []T, compare fn(T, T) int) {
    if arr.len <= 1 { return }
    
    mut temp := []T{len: arr.len}
    merge_sort_recursive(mut arr, mut temp, 0, arr.len - 1, compare)
}

fn merge_sort_recursive[T](mut arr []T, mut temp []T, left int, right int, compare fn(T, T) int) {
    if left >= right { return }
    
    mid := left + (right - left) / 2
    
    merge_sort_recursive(mut arr, mut temp, left, mid, compare)
    merge_sort_recursive(mut arr, mut temp, mid + 1, right, compare)
    merge_arrays(mut arr, mut temp, left, mid, right, compare)
}

fn merge_arrays[T](mut arr []T, mut temp []T, left int, mid int, right int, compare fn(T, T) int) {
    // Copy to temporary array
    for i in left..right + 1 {
        temp[i] = arr[i]
    }
    
    mut i := left
    mut j := mid + 1
    mut k := left
    
    // Merge back to original array
    for i <= mid && j <= right {
        if compare(temp[i], temp[j]) <= 0 {
            arr[k] = temp[i]
            i++
        } else {
            arr[k] = temp[j]
            j++
        }
        k++
    }
    
    // Copy remaining elements
    for i <= mid {
        arr[k] = temp[i]
        i++
        k++
    }
    
    for j <= right {
        arr[k] = temp[j]
        j++
        k++
    }
}

// Array and data structure utilities
struct ArrayUtils {
}

pub fn new_array_utils() ArrayUtils {
    return ArrayUtils{}
}

// Prefix sums for efficient range queries
pub fn (au ArrayUtils) build_prefix_sums(arr []int) []i64 {
    mut prefix := []i64{len: arr.len + 1, init: 0}
    
    for i, val in arr {
        prefix[i + 1] = prefix[i] + i64(val)
    }
    
    return prefix
}

pub fn (au ArrayUtils) range_sum(prefix []i64, left int, right int) i64 {
    if left < 0 || right >= prefix.len - 1 || left > right {
        return 0
    }
    return prefix[right + 1] - prefix[left]
}

// Generic data structure operations
pub fn find_peak_element[T](arr []T, compare fn(T, T) int) int {
    if arr.len == 0 { return -1 }
    if arr.len == 1 { return 0 }
    
    mut left := 0
    mut right := arr.len - 1
    
    for left < right {
        mid := left + (right - left) / 2
        
        if compare(arr[mid], arr[mid + 1]) > 0 {
            right = mid
        } else {
            left = mid + 1
        }
    }
    
    return left
}

// Comprehensive examples demonstrating algorithms
pub fn math_utils_examples() {
    mu := new_math_utils()
    au := new_array_utils()
    
    // Number theory examples
    println('GCD(48, 18) = ${mu.gcd(48, 18)}')  // 6
    println('LCM(12, 8) = ${mu.lcm(12, 8)}')    // 24
    println('Is 17 prime? ${mu.is_prime(17)}')   // true
    
    // Fibonacci sequence
    fib_seq := mu.fibonacci_sequence(10)
    println('First 10 Fibonacci numbers: ${fib_seq}')
    
    // Binary search example
    sorted_numbers := [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    compare_int := fn (a int, b int) int { return a - b }
    
    target := 7
    index := binary_search(sorted_numbers, target, compare_int)
    println('Binary search for ${target}: index ${index}')
    
    // Sorting example
    mut unsorted := [64, 34, 25, 12, 22, 11, 90]
    println('Before sorting: ${unsorted}')
    merge_sort(mut unsorted, compare_int)
    println('After merge sort: ${unsorted}')
    
    // Prefix sums example
    arr := [1, 2, 3, 4, 5]
    prefix := au.build_prefix_sums(arr)
    sum_1_to_3 := au.range_sum(prefix, 1, 3)  // sum of [2,3,4] = 9
    println('Sum of elements from index 1 to 3: ${sum_1_to_3}')
    
    // Peak finding
    mountain := [1, 3, 20, 4, 1, 0]
    peak_idx := find_peak_element(mountain, compare_int)
    println('Peak element at index ${peak_idx}: ${mountain[peak_idx]}')
}
```

---

## 15. Complete Project Examples

### CLI Application: Task Manager

```v
module main

import os
import json
import time

// Task management system
struct Task {
mut:
    id          int
    title       string
    description string
    completed   bool
    created_at  time.Time
    due_date    ?time.Time
    priority    Priority
    tags        []string
}

enum Priority {
    low
    medium
    high
    urgent
}

fn (p Priority) str() string {
    return match p {
        .low { 'Low' }
        .medium { 'Medium' }
        .high { 'High' }
        .urgent { 'URGENT' }
    }
}

struct TaskManager {
mut:
    tasks    []Task
    next_id  int
    data_file string
}

fn new_task_manager(data_file string) TaskManager {
    mut tm := TaskManager{
        next_id: 1
        data_file: data_file
    }
    tm.load_tasks()
    return tm
}

// Task CRUD operations
fn (mut tm TaskManager) add_task(title string, description string, priority Priority, tags []string) {
    task := Task{
        id: tm.next_id
        title: title
        description: description
        completed: false
        created_at: time.now()
        priority: priority
        tags: tags
    }
    
    tm.tasks << task
    tm.next_id++
    tm.save_tasks()
    
    println('Task added successfully! ID: ${task.id}')
}

fn (mut tm TaskManager) complete_task(id int) bool {
    for mut task in tm.tasks {
        if task.id == id {
            task.completed = true
            tm.save_tasks()
            println('Task ${id} marked as completed!')
            return true
        }
    }
    
    println('Task ${id} not found!')
    return false
}

fn (mut tm TaskManager) delete_task(id int) bool {
    for i, task in tm.tasks {
        if task.id == id {
            tm.tasks.delete(i)
            tm.save_tasks()
            println('Task ${id} deleted!')
            return true
        }
    }
    
    println('Task ${id} not found!')
    return false
}

fn (tm TaskManager) list_tasks(filter string) {
    mut filtered_tasks := []Task{}
    
    match filter {
        'all' { filtered_tasks = tm.tasks }
        'pending' { 
            filtered_tasks = tm.tasks.filter(fn(t Task) bool { 
                return !t.completed 
            })
        }
        'completed' {
            filtered_tasks = tm.tasks.filter(fn(t Task) bool { 
                return t.completed 
            })
        }
        'urgent' {
            filtered_tasks = tm.tasks.filter(fn(t Task) bool { 
                return t.priority == .urgent && !t.completed
            })
        }
        else {
            println('Unknown filter: ${filter}')
            return
        }
    }
    
    if filtered_tasks.len == 0 {
        println('No tasks found.')
        return
    }
    
    tm.print_tasks(filtered_tasks)
}

fn (tm TaskManager) print_tasks(tasks []Task) {
    println('\n📋 Task List')
    println('=' * 60)
    
    for task in tasks {
        status := if task.completed { '✅' } else { '⏳' }
        priority_icon := match task.priority {
            .low { '🔵' }
            .medium { '🟡' }
            .high { '🟠' }
            .urgent { '🔴' }
        }
        
        println('${status} [${task.id}] ${task.title}')
        println('   ${priority_icon} Priority: ${task.priority.str()}')
        
        if task.description.len > 0 {
            println('   📝 ${task.description}')
        }
        
        if task.tags.len > 0 {
            println('   🏷️  Tags: ${task.tags.join(', ')}')
        }
        
        println('   📅 Created: ${task.created_at.format()}')
        println('')
    }
}

// Data persistence
fn (mut tm TaskManager) save_tasks() {
    json_data := json.encode_pretty(tm.tasks)
    os.write_file(tm.data_file, json_data) or {
        println('Error saving tasks: ${err}')
    }
}

fn (mut tm TaskManager) load_tasks() {
    if !os.exists(tm.data_file) {
        return
    }
    
    content := os.read_file(tm.data_file) or {
        println('Error reading tasks file: ${err}')
        return
    }
    
    tm.tasks = json.decode([]Task, content) or {
        println('Error parsing tasks file: ${err}')
        return
    }
    
    // Update next_id
    if tm.tasks.len > 0 {
        max_id := tm.tasks.map(fn(t Task) int { return t.id }).max()
        tm.next_id = max_id + 1
    }
}

// CLI interface
fn show_help() {
    println('🚀 V Task Manager')
    println('')
    println('USAGE:')
    println('  vtask add <title> [description] [priority] [tags...]')
    println('  vtask list [filter]')
    println('  vtask complete <id>')
    println('  vtask delete <id>')
    println('  vtask help')
    println('')
    println('EXAMPLES:')
    println('  vtask add "Fix bug" "Critical bug in login system" high bug,urgent')
    println('  vtask list pending')
    println('  vtask complete 1')
    println('')
    println('FILTERS: all, pending, completed, urgent')
    println('PRIORITIES: low, medium, high, urgent')
}

fn parse_priority(priority_str string) Priority {
    return match priority_str.to_lower() {
        'low' { .low }
        'medium' { .medium }
        'high' { .high }
        'urgent' { .urgent }
        else { .medium }
    }
}

fn parse_tags(tags_str string) []string {
    if tags_str.len == 0 {
        return []string{}
    }
    return tags_str.split(',').map(it.trim_space())
}

fn main() {
    args := os.args[1..]
    
    if args.len == 0 {
        show_help()
        return
    }
    
    // Initialize task manager with data file in user's home directory
    home_dir := os.home_dir()
    data_file := os.join_path(home_dir, '.vtasks.json')
    mut task_manager := new_task_manager(data_file)
    
    command := args[0]
    
    match command {
        'add' {
            if args.len < 2 {
                println('Error: Please provide a task title')
                return
            }
            
            title := args[1]
            description := if args.len > 2 { args[2] } else { '' }
            priority := if args.len > 3 { parse_priority(args[3]) } else { Priority.medium }
            tags := if args.len > 4 { parse_tags(args[4]) } else { []string{} }
            
            task_manager.add_task(title, description, priority, tags)
        }
        
        'list' {
            filter := if args.len > 1 { args[1] } else { 'all' }
            task_manager.list_tasks(filter)
        }
        
        'complete' {
            if args.len < 2 {
                println('Error: Please provide a task ID')
                return
            }
            
            id := args[1].int()
            task_manager.complete_task(id)
        }
        
        'delete' {
            if args.len < 2 {
                println('Error: Please provide a task ID')
                return
            }
            
            id := args[1].int()
            task_manager.delete_task(id)
        }
        
        'help' {
            show_help()
        }
        
        else {
            println('Unknown command: ${command}')
            show_help()
        }
    }
}
```

### Web API Server: RESTful Service

```v
module main

import vweb
import json
import time
import crypto.rand

// User management API
struct User {
mut:
    id         string
    username   string
    email      string
    created_at time.Time
    active     bool = true
}

struct ApiResponse[T] {
    success bool
    data    T
    message string
    timestamp time.Time = time.now()
}

fn new_success_response[T](data T) ApiResponse[T] {
    return ApiResponse[T]{
        success: true
        data: data
        message: 'Success'
    }
}

fn new_error_response[T](message string) ApiResponse[T] {
    return ApiResponse[T]{
        success: false
        data: T{}
        message: message
    }
}

struct App {
    vweb.Context
mut:
    users map[string]User
}

fn new_app() &App {
    mut app := &App{}
    
    // Sample data
    sample_users := [
        User{
            id: generate_id()
            username: 'alice'
            email: 'alice@example.com'
            created_at: time.now()
        },
        User{
            id: generate_id()
            username: 'bob'
            email: 'bob@example.com'
            created_at: time.now()
        }
    ]
    
    for user in sample_users {
        app.users[user.id] = user
    }
    
    return app
}

// Utility functions
fn generate_id() string {
    return rand.string(16)
}

// API Routes

// GET /api/users - List all users
['/api/users'; get]
pub fn (mut app App) get_users() vweb.Result {
    app.set_content_type('application/json')
    
    users_list := app.users.values()
    response := new_success_response(users_list)
    
    return app.json(response)
}

// GET /api/users/:id - Get user by ID
['/api/users/:id'; get]
pub fn (mut app App) get_user() vweb.Result {
    app.set_content_type('application/json')
    
    user_id := app.param('id')
    
    if user := app.users[user_id] {
        response := new_success_response(user)
        return app.json(response)
    } else {
        app.set_status(404, 'Not Found')
        response := new_error_response[User]('User not found')
        return app.json(response)
    }
}

// POST /api/users - Create new user
['/api/users'; post]
pub fn (mut app App) create_user() vweb.Result {
    app.set_content_type('application/json')
    
    // Parse request body
    body := app.req.data
    
    mut new_user := json.decode(User, body) or {
        app.set_status(400, 'Bad Request')
        response := new_error_response[User]('Invalid JSON data')
        return app.json(response)
    }
    
    // Validate required fields
    if new_user.username.len == 0 || new_user.email.len == 0 {
        app.set_status(400, 'Bad Request')
        response := new_error_response[User]('Username and email are required')
        return app.json(response)
    }
    
    // Check if user already exists
    for _, user in app.users {
        if user.username == new_user.username || user.email == new_user.email {
            app.set_status(409, 'Conflict')
            response := new_error_response[User]('User already exists')
            return app.json(response)
        }
    }
    
    // Create user
    new_user.id = generate_id()
    new_user.created_at = time.now()
    
    app.users[new_user.id] = new_user
    
    app.set_status(201, 'Created')
    response := new_success_response(new_user)
    return app.json(response)
}

// PUT /api/users/:id - Update user
['/api/users/:id'; put]
pub fn (mut app App) update_user() vweb.Result {
    app.set_content_type('application/json')
    
    user_id := app.param('id')
    
    if user_id !in app.users {
        app.set_status(404, 'Not Found')
        response := new_error_response[User]('User not found')
        return app.json(response)
    }
    
    body := app.req.data
    
    updated_data := json.decode(User, body) or {
        app.set_status(400, 'Bad Request')
        response := new_error_response[User]('Invalid JSON data')
        return app.json(response)
    }
    
    mut existing_user := app.users[user_id]
    existing_user.username = updated_data.username
    existing_user.email = updated_data.email
    existing_user.active = updated_data.active
    
    app.users[user_id] = existing_user
    
    response := new_success_response(existing_user)
    return app.json(response)
}

// DELETE /api/users/:id - Delete user
['/api/users/:id'; delete]
pub fn (mut app App) delete_user() vweb.Result {
    app.set_content_type('application/json')
    
    user_id := app.param('id')
    
    if user_id !in app.users {
        app.set_status(404, 'Not Found')
        response := new_error_response[string]('User not found')
        return app.json(response)
    }
    
    app.users.delete(user_id)
    
    response := new_success_response('User deleted successfully')
    return app.json(response)
}

// Health check endpoint
['/health'; get]
pub fn (mut app App) health() vweb.Result {
    app.set_content_type('application/json')
    
    health_data := {
        'status': 'healthy'
        'timestamp': time.now().format()
        'users_count': app.users.len
    }
    
    response := new_success_response(health_data)
    return app.json(response)
}

// CORS middleware
pub fn (mut app App) before_request() {
    app.add_header('Access-Control-Allow-Origin', '*')
    app.add_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    app.add_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
}

fn main() {
    mut app := new_app()
    
    println('🚀 Starting V Web API Server on http://localhost:8000')
    println('📡 Available endpoints:')
    println('   GET    /health')
    println('   GET    /api/users')
    println('   GET    /api/users/:id')
    println('   POST   /api/users')
    println('   PUT    /api/users/:id')
    println('   DELETE /api/users/:id')
    
    vweb.run(app, 8000)
}
```

---

## 16. Best Practices & Patterns

### V Programming Best Practices

#### 1. Code Organization

```v
// ✅ Good: Clear module structure
module myapp.utils

import os
import json

// ✅ Good: Descriptive struct names with clear purpose
struct DatabaseConfig {
    host     string
    port     int
    database string
    username string
    password string
}

// ✅ Good: Interface for dependency injection
interface Logger {
    info(message string)
    error(message string)
    debug(message string)
}

// ✅ Good: Implementation with clear error handling
struct FileLogger {
    log_file string
}

fn (mut fl FileLogger) info(message string) {
    fl.write_log('INFO', message)
}

fn (mut fl FileLogger) error(message string) {
    fl.write_log('ERROR', message)
}

fn (mut fl FileLogger) debug(message string) {
    fl.write_log('DEBUG', message)
}

fn (mut fl FileLogger) write_log(level string, message string) {
    timestamp := time.now().format()
    log_entry := '[${timestamp}] ${level}: ${message}\n'
    
    os.write_file_append(fl.log_file, log_entry) or {
        eprintln('Failed to write to log file: ${err}')
    }
}
```

#### 2. Error Handling Patterns

```v
// ✅ Good: Result types for operations that can fail
struct ValidationError {
    field   string
    message string
}

fn validate_email(email string) !string {
    if email.len == 0 {
        return error('Email cannot be empty')
    }
    
    if !email.contains('@') {
        return error('Invalid email format')
    }
    
    return email.to_lower()
}

// ✅ Good: Multiple error types with custom error handling
fn process_user_data(data map[string]string) !User {
    email := validate_email(data['email'] or { '' })!
    
    if data['username'] or { '' }.len < 3 {
        return error('Username must be at least 3 characters')
    }
    
    return User{
        username: data['username'] or { '' }
        email: email
        created_at: time.now()
    }
}

// ✅ Good: Graceful error handling with logging
fn safe_process_users(users_data []map[string]string, logger Logger) []User {
    mut valid_users := []User{}
    
    for i, user_data in users_data {
        user := process_user_data(user_data) or {
            logger.error('Failed to process user at index ${i}: ${err}')
            continue
        }
        
        valid_users << user
        logger.info('Successfully processed user: ${user.username}')
    }
    
    return valid_users
}
```

#### 3. Memory Management Best Practices

```v
// ✅ Good: Explicit ownership with clear lifetime
struct ResourceManager {
mut:
    connections []&DatabaseConnection
    max_connections int = 10
}

fn (mut rm ResourceManager) get_connection() !&DatabaseConnection {
    if rm.connections.len >= rm.max_connections {
        return error('Maximum connections reached')
    }
    
    conn := create_database_connection()!
    rm.connections << conn
    return conn
}

fn (mut rm ResourceManager) close_all() {
    for mut conn in rm.connections {
        conn.close()
    }
    rm.connections.clear()
}

// ✅ Good: RAII pattern with cleanup
struct TempFile {
    path string
}

fn new_temp_file() !TempFile {
    path := os.temp_file()!
    return TempFile{ path: path }
}

fn (tf TempFile) cleanup() {
    if os.exists(tf.path) {
        os.rm(tf.path) or {
            eprintln('Warning: Failed to cleanup temp file: ${tf.path}')
        }
    }
}
```

#### 4. Testing Patterns

```v
// test_user_service_test.v
module main

import time

// ✅ Good: Test fixtures and setup
fn test_user_creation() {
    // Arrange
    user_data := map[string]string{
        'username': 'testuser'
        'email': 'test@example.com'
    }
    
    // Act
    user := process_user_data(user_data) or {
        assert false, 'Failed to create user: ${err}'
        return
    }
    
    // Assert
    assert user.username == 'testuser'
    assert user.email == 'test@example.com'
    assert user.created_at.year == time.now().year
}

// ✅ Good: Testing error conditions
fn test_invalid_email_validation() {
    invalid_emails := ['', 'invalid', 'no@domain']
    
    for email in invalid_emails {
        validate_email(email) or {
            // Expected to fail
            continue
        }
        assert false, 'Email validation should have failed for: ${email}'
    }
}

// ✅ Good: Mock objects for testing
struct MockLogger {
mut:
    messages []string
}

fn (mut ml MockLogger) info(message string) {
    ml.messages << 'INFO: ${message}'
}

fn (mut ml MockLogger) error(message string) {
    ml.messages << 'ERROR: ${message}'
}

fn (mut ml MockLogger) debug(message string) {
    ml.messages << 'DEBUG: ${message}'
}

fn test_error_logging() {
    // Arrange
    invalid_data := [
        map[string]string{'username': 'ab'},  // Too short
        map[string]string{'email': 'invalid'} // Invalid email
    ]
    
    mut mock_logger := MockLogger{}
    
    // Act
    users := safe_process_users(invalid_data, mut mock_logger)
    
    // Assert
    assert users.len == 0
    assert mock_logger.messages.len == 2
    assert mock_logger.messages.any(it.contains('ERROR'))
}
```

#### 5. Performance Optimization Patterns

```v
// ✅ Good: Connection pooling
struct ConnectionPool {
mut:
    available []&Connection
    in_use    []&Connection
    max_size  int = 20
}

fn (mut cp ConnectionPool) acquire() !&Connection {
    if cp.available.len > 0 {
        conn := cp.available.pop()
        cp.in_use << conn
        return conn
    }
    
    if cp.in_use.len < cp.max_size {
        conn := create_connection()!
        cp.in_use << conn
        return conn
    }
    
    return error('No connections available')
}

fn (mut cp ConnectionPool) release(conn &Connection) {
    for i, used_conn in cp.in_use {
        if used_conn == conn {
            cp.in_use.delete(i)
            cp.available << conn
            break
        }
    }
}

// ✅ Good: Caching with TTL
struct Cache[T] {
mut:
    data map[string]CacheEntry[T]
    ttl  time.Duration = 5 * time.minute
}

struct CacheEntry[T] {
    value     T
    timestamp time.Time
}

fn (mut c Cache[T]) get(key string) ?T {
    if entry := c.data[key] {
        if time.now().sub(entry.timestamp) < c.ttl {
            return entry.value
        } else {
            c.data.delete(key)
        }
    }
    return none
}

fn (mut c Cache[T]) set(key string, value T) {
    c.data[key] = CacheEntry[T]{
        value: value
        timestamp: time.now()
    }
}

// ✅ Good: Batch processing for performance
struct BatchProcessor[T] {
    batch_size int = 100
    processor  fn([]T) !
}

fn (bp BatchProcessor[T]) process_all(items []T) ! {
    mut start := 0
    
    for start < items.len {
        end := if start + bp.batch_size < items.len {
            start + bp.batch_size
        } else {
            items.len
        }
        
        batch := items[start..end]
        bp.processor(batch)!
        start = end
    }
}
```

---

## 20. Quick Reference

### Essential V Syntax Cheat Sheet

#### Variables and Types
```v
// Variables
name := 'John'          // Immutable
mut age := 30           // Mutable
const pi = 3.14159      // Constant

// Types
i8, i16, int, i64       // Signed integers
u8, u16, u32, u64       // Unsigned integers  
f32, f64               // Floating point
bool                   // Boolean
string                 // UTF-8 string
rune                   // Unicode character
```

#### Control Flow
```v
// If-else
if condition {
    // code
} else if other {
    // code  
} else {
    // code
}

// Match (switch)
match value {
    'option1' { /* code */ }
    'option2' { /* code */ }
    else { /* default */ }
}

// Loops
for i := 0; i < 10; i++ { /* code */ }
for item in array { /* code */ }
for key, value in map { /* code */ }
for { /* infinite loop */ }
```

#### Functions
```v
fn function_name(param1 type1, param2 type2) return_type {
    return value
}

// Multiple returns
fn divide(a int, b int) (int, int) {
    return a / b, a % b
}
```

#### Data Structures
```v
// Arrays
arr := [1, 2, 3]
mut dynamic := []int{}
dynamic << 4

// Maps
m := {'key': 'value'}
m['new_key'] = 'new_value'

// Structs
struct Person {
    name string
    age  int
}

person := Person{name: 'Alice', age: 30}
```

#### Error Handling
```v
fn risky_operation() !string {
    if something_wrong {
        return error('Something went wrong')
    }
    return 'success'
}

result := risky_operation() or {
    println('Error: ${err}')
    return
}
```

### Common Patterns Quick Reference

#### String Operations
```v
text := 'Hello World'
text.to_upper()           // 'HELLO WORLD'
text.to_lower()           // 'hello world'
text.split(' ')           // ['Hello', 'World']
'${name} is ${age}'       // String interpolation
```

#### Array Operations
```v
arr := [1, 2, 3, 4, 5]
arr.len                   // 5
arr.first()               // 1
arr.last()                // 5
arr.filter(it > 2)        // [3, 4, 5]
arr.map(it * 2)           // [2, 4, 6, 8, 10]
```

#### File I/O
```v
import os

// Read file
content := os.read_file('file.txt')!

// Write file  
os.write_file('file.txt', 'content')!

// Check if file exists
if os.exists('file.txt') { /* code */ }
```

#### JSON Handling
```v
import json

// Struct to JSON
user := User{name: 'Alice', age: 30}
json_str := json.encode(user)

// JSON to struct
user := json.decode(User, json_str)!
```

### Performance Tips

1. **Use string builders for concatenation:**
   ```v
   mut sb := strings.new_builder(1000)
   sb.write_string('Hello')
   sb.write_string(' World')
   result := sb.str()
   ```

2. **Pre-allocate arrays when size is known:**
   ```v
   mut arr := []int{cap: 1000}
   ```

3. **Use references for large structs:**
   ```v
   fn process_data(data &LargeStruct) {
       // Avoids copying
   }
   ```

4. **Prefer immutable data when possible:**
   ```v
   const config = {
       'host': 'localhost'
       'port': 8080
   }
   ```

---

## Conclusion

This comprehensive V programming tutorial provides you with:

### ✅ **What You've Learned**
- Complete V language fundamentals
- Advanced programming patterns  
- Extensive utility library for RAD development
- Real-world project examples
- Best practices and performance optimization
- Testing strategies

### 🚀 **Next Steps**
1. **Practice**: Build small projects using the utilities provided
2. **Explore**: Check out V's growing ecosystem of modules
3. **Contribute**: Join the V community and contribute to open source projects
4. **Specialize**: Focus on areas that interest you (web, systems, CLI tools)

### 📚 **Key Takeaways**
- V prioritizes simplicity and performance
- Strong type system prevents common errors
- Excellent C interoperability
- Growing community and ecosystem
- Perfect for both beginners and experienced developers

### 🔗 **Additional Resources**
- [V Language Official Site](https://vlang.io/)
- [V GitHub Repository](https://github.com/vlang/v)
- [V Discord Community](https://discord.gg/vlang)
- [V Module Registry](https://vpm.vlang.io/)

**Happy coding with V! 🎉**
mut a := [][][]int{len: 2, init: [][]int{len: 3, init: []int{len: 2}}}
a[0][1][1] = 2
println(a) // [[[0, 0], [0, 2], [0, 0]], [[0, 0], [0, 0], [0, 0]]]
```

#### Array methods

All arrays can be easily printed with `println(arr)` and converted to a string
with `s := arr.str()`.

Copying the data from the array is done with `.clone()`:

```v
nums := [1, 2, 3]
nums_copy := nums.clone()
```

Arrays can be efficiently filtered and mapped with the `.filter()` and
`.map()` methods:

```v
nums := [1, 2, 3, 4, 5, 6]
even := nums.filter(it % 2 == 0)
println(even) // [2, 4, 6]
// filter can accept anonymous functions
even_fn := nums.filter(fn (x int) bool {
	return x % 2 == 0
})
println(even_fn)
```

```v
words := ['hello', 'world']
upper := words.map(it.to_upper())
println(upper) // ['HELLO', 'WORLD']
// map can also accept anonymous functions
upper_fn := words.map(fn (w string) string {
	return w.to_upper()
})
println(upper_fn) // ['HELLO', 'WORLD']
```

`it` is a builtin variable which refers to the element currently being
processed in filter/map methods.

Additionally, `.any()` and `.all()` can be used to conveniently test
for elements that satisfy a condition.

```v
nums := [1, 2, 3]
println(nums.any(it == 2)) // true
println(nums.all(it >= 2)) // false
```

There are further built-in methods for arrays:

* `a.repeat(n)` concatenates the array elements `n` times
* `a.insert(i, val)` inserts a new element `val` at index `i` and
  shifts all following elements to the right
* `a.insert(i, [3, 4, 5])` inserts several elements
* `a.prepend(val)` inserts a value at the beginning, equivalent to `a.insert(0, val)`
* `a.prepend(arr)` inserts elements of array `arr` at the beginning
* `a.trim(new_len)` truncates the length (if `new_length < a.len`, otherwise does nothing)
* `a.clear()` empties the array without changing `cap` (equivalent to `a.trim(0)`)
* `a.delete_many(start, size)` removes `size` consecutive elements from index `start`
  &ndash; triggers reallocation
* `a.delete(index)` equivalent to `a.delete_many(index, 1)`
* `a.delete_last()` removes the last element
* `a.first()` equivalent to `a[0]`
* `a.last()` equivalent to `a[a.len - 1]`
* `a.pop()` removes the last element and returns it
* `a.reverse()` makes a new array with the elements of `a` in reverse order
* `a.reverse_in_place()` reverses the order of elements in `a`
* `a.join(joiner)` concatenates an array of strings into one string
  using `joiner` string as a separator

See all methods of [array](https://modules.vlang.io/index.html#array)

See also [vlib/arrays](https://modules.vlang.io/arrays.html).

##### Sorting Arrays

Sorting arrays of all kinds is very simple and intuitive. Special variables `a` and `b`
are used when providing a custom sorting condition.

```v
mut numbers := [1, 3, 2]
numbers.sort() // 1, 2, 3
numbers.sort(a > b) // 3, 2, 1
```

```v
struct User {
	age  int
	name string
}

mut users := [User{21, 'Bob'}, User{20, 'Zarkon'}, User{25, 'Alice'}]
users.sort(a.age < b.age) // sort by User.age int field
users.sort(a.name > b.name) // reverse sort by User.name string field
```

V also supports custom sorting, through the `sort_with_compare` array method.
Which expects a comparing function which will define the sort order.
Useful for sorting on multiple fields at the same time by custom sorting rules.
The code below sorts the array ascending on `name` and descending `age`.

```v
struct User {
	age  int
	name string
}

mut users := [User{21, 'Bob'}, User{65, 'Bob'}, User{25, 'Alice'}]

custom_sort_fn := fn (a &User, b &User) int {
	// return -1 when a comes before b
	// return 0, when both are in same order
	// return 1 when b comes before a
	if a.name == b.name {
		if a.age < b.age {
			return 1
		}
		if a.age > b.age {
			return -1
		}
		return 0
	}
	if a.name < b.name {
		return -1
	} else if a.name > b.name {
		return 1
	}
	return 0
}
users.sort_with_compare(custom_sort_fn)
```

#### Array Slices

A slice is a part of a parent array. Initially it refers to the elements
between two indices separated by a `..` operator. The right-side index must
be greater than or equal to the left side index.

If a right-side index is absent, it is assumed to be the array length. If a
left-side index is absent, it is assumed to be 0.

```v
nums := [0, 10, 20, 30, 40]
println(nums[1..4]) // [10, 20, 30]
println(nums[..4]) // [0, 10, 20, 30]
println(nums[1..]) // [10, 20, 30, 40]
```

In V slices are arrays themselves (they are not distinct types). As a result
all array operations may be performed on them. E.g. they can be pushed onto an
array of the same type:

```v
array_1 := [3, 5, 4, 7, 6]
mut array_2 := [0, 1]
array_2 << array_1[..3]
println(array_2) // `[0, 1, 3, 5, 4]`
```

A slice is always created with the smallest possible capacity `cap == len` (see
[`cap` above](#array-initialization)) no matter what the capacity or length
of the parent array is. As a result it is immediately reallocated and copied to another
memory location when the size increases thus becoming independent from the
parent array (*copy on grow*). In particular pushing elements to a slice
does not alter the parent:

```v
mut a := [0, 1, 2, 3, 4, 5]

// Create a slice, that reuses the *same memory* as the parent array
// initially, without doing a new allocation:
mut b := unsafe { a[2..4] } // the contents of `b`, reuses the memory, used by the contents of `a`.

b[0] = 7 // Note that `b[0]` and `a[2]` refer to *the same element* in memory.
println(a) // `[0, 1, 7, 3, 4, 5]` - changing `b[0]` above, changed `a[2]` too.

// the content of `b` will get reallocated, to have room for the `9` element:
b << 9
// The content of `b`, is now reallocated, and fully independent from the content of `a`.

println(a) // `[0, 1, 7, 3, 4, 5]` - no change, since the content of `b` was reallocated,
// to a larger block, before the appending.

println(b) // `[7, 3, 9]` - the contents of `b`, after the reallocation, and appending of the `9`.
```

Appending to the parent array, may or may not make it independent from its child slices.
The behaviour depends on the *parent's capacity* and is predictable:

```v
mut a := []int{len: 5, cap: 6, init: 2}
mut b := unsafe { a[1..4] } // the contents of `b` uses part of the same memory, that is used by `a` too

a << 3
// still no reallocation of `a`, since `a.len` still fits in `a.cap`
b[2] = 13 // `a[3]` is modified, through the slice `b`.

a << 4
// the content of `a` has been reallocated now, and is independent from `b` (`cap` was exceeded by `len`)
b[1] = 3 // no change in `a`

println(a) // `[2, 2, 2, 13, 2, 3, 4]`
println(b) // `[2, 3, 13]`
```

You can call .clone() on the slice, if you *do* want to have an independent copy right away:

```v
mut a := [0, 1, 2, 3, 4, 5]
mut b := a[2..4].clone()
b[0] = 7 // Note: `b[0]` is NOT referring to `a[2]`, as it would have been, without the `.clone()`
println(a) // [0, 1, 2, 3, 4, 5]
println(b) // [7, 3]
```

##### Slices with negative indexes

V supports array and string slices with negative indexes.
Negative indexing starts from the end of the array towards the start,
for example `-3` is equal to `array.len - 3`.
Negative slices have a different syntax from normal slices, i.e. you need
to add a `gate` between the array name and the square bracket: `a#[..-3]`.
The `gate` specifies that this is a different type of slice and remember that
the result is "locked" inside the array.
The returned slice is always a valid array, though it may be empty:

```v
a := [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
println(a#[-3..]) // [7, 8, 9]
println(a#[-20..]) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
println(a#[-20..-8]) // [0, 1]
println(a#[..-3]) // [0, 1, 2, 3, 4, 5, 6]

// empty arrays
println(a#[-20..-10]) // []
println(a#[20..10]) // []
println(a#[20..30]) // []
```

#### Array method chaining

You can chain the calls of array methods like `.filter()` and `.map()` and use
the `it` built-in variable to achieve a classic `map/filter` functional paradigm:

```v
// using filter, map and negatives array slices
files := ['pippo.jpg', '01.bmp', '_v.txt', 'img_02.jpg', 'img_01.JPG']
filtered := files.filter(it#[-4..].to_lower() == '.jpg').map(it.to_upper())
// ['PIPPO.JPG', 'IMG_02.JPG', 'IMG_01.JPG']
```

## Real-World JSON Handling

V provides excellent built-in JSON support that makes working with APIs and data files straightforward. Here are comprehensive examples:

### Working with JSON Data

```v
import json
import os

// Define data structures for JSON
struct User {
    id       int
    name     string
    email    string
    age      int
    active   bool = true
    settings UserSettings
    tags     []string
}

struct UserSettings {
    theme       string = 'dark'
    notifications bool = true
    language    string = 'en'
}

struct ApiResponse[T] {
    success   bool
    data      T
    message   string
    timestamp string
}

// Example: Loading and saving user configuration
fn load_user_config(file_path string) !User {
    // Check if file exists
    if !os.exists(file_path) {
        return error('Config file does not exist: ${file_path}')
    }
    
    // Read the JSON file
    json_text := os.read_file(file_path)!
    
    // Parse JSON into our struct
    user := json.decode(User, json_text) or {
        return error('Failed to parse JSON: ${err}')
    }
    
    return user
}

fn save_user_config(user User, file_path string) ! {
    // Convert struct to JSON with pretty formatting
    json_text := json.encode_pretty(user)
    
    // Write to file
    os.write_file(file_path, json_text) or {
        return error('Failed to write config file: ${err}')
    }
    
    println('Configuration saved to ${file_path}')
}

// Example: Working with API responses
fn fetch_user_from_api(user_id int) !User {
    // This would be an actual HTTP request in real code
    // For demo, we'll simulate an API response
    api_response_json := '{
        "success": true,
        "data": {
            "id": ${user_id},
            "name": "John Doe",
            "email": "john.doe@example.com",
            "age": 30,
            "active": true,
            "settings": {
                "theme": "light",
                "notifications": false,
                "language": "en"
            },
            "tags": ["developer", "admin", "premium"]
        },
        "message": "User retrieved successfully",
        "timestamp": "2024-01-15T10:30:00Z"
    }'
    
    // Parse the API response
    response := json.decode(ApiResponse[User], api_response_json)!
    
    if !response.success {
        return error('API error: ${response.message}')
    }
    
    return response.data
}

// Example: Converting between JSON and maps for dynamic data
fn handle_dynamic_json(json_string string) !map[string]json.Any {
    // Parse JSON into a dynamic map when structure is unknown
    data := json.decode(map[string]json.Any, json_string)!
    
    // Access nested data safely
    if name := data['name'] {
        if name_str := name.str() {
            println('Name: ${name_str}')
        }
    }
    
    if age := data['age'] {
        if age_num := age.int() {
            println('Age: ${age_num}')
        }
    }
    
    return data
}

// Real-world example: Application settings manager
struct AppConfig {
mut:
    app_name    string = 'My V App'
    version     string = '1.0.0'
    debug       bool   = false
    database    DatabaseConfig
    api         ApiConfig
    ui          UiConfig
    features    []string
}

struct DatabaseConfig {
mut:
    host     string = 'localhost'
    port     int    = 5432
    database string = 'myapp'
    username string = 'admin'
    ssl_mode string = 'disable'
}

struct ApiConfig {
mut:
    base_url     string = 'https://api.example.com'
    timeout      int    = 30
    retry_count  int    = 3
    api_key      string
}

struct UiConfig {
mut:
    theme          string = 'system'
    language       string = 'en'
    show_tooltips  bool   = true
    animations     bool   = true
}

struct ConfigManager {
    config_file string
}

fn new_config_manager(config_file string) ConfigManager {
    return ConfigManager{
        config_file: config_file
    }
}

fn (cm ConfigManager) load() !AppConfig {
    if !os.exists(cm.config_file) {
        // Create default config if none exists
        default_config := AppConfig{
            features: ['user_management', 'reporting', 'exports']
        }
        cm.save(default_config)!
        return default_config
    }
    
    content := os.read_file(cm.config_file)!
    return json.decode(AppConfig, content)!
}

fn (cm ConfigManager) save(config AppConfig) ! {
    // Ensure directory exists
    config_dir := os.dir(cm.config_file)
    if !os.exists(config_dir) {
        os.mkdir_all(config_dir)!
    }
    
    json_content := json.encode_pretty(config)
    os.write_file(cm.config_file, json_content)!
}

// Example usage function
fn json_examples() ! {
    println('=== JSON Handling Examples ===')
    
    // 1. Create and save user configuration
    user := User{
        id: 1
        name: 'Alice Johnson'
        email: 'alice@example.com'
        age: 28
        settings: UserSettings{
            theme: 'dark'
            notifications: true
            language: 'en'
        }
        tags: ['developer', 'team_lead']
    }
    
    config_path := '/tmp/user_config.json'
    save_user_config(user, config_path)!
    
    // 2. Load configuration back
    loaded_user := load_user_config(config_path)!
    println('Loaded user: ${loaded_user.name} (${loaded_user.email})')
    
    // 3. Work with API response
    api_user := fetch_user_from_api(123)!
    println('API user: ${api_user.name}, Settings theme: ${api_user.settings.theme}')
    
    // 4. Handle dynamic JSON
    dynamic_json := '{"temperature": 25.5, "city": "New York", "sensors": [1, 2, 3]}'
    dynamic_data := handle_dynamic_json(dynamic_json)!
    
    // 5. Application configuration management
    config_manager := new_config_manager('/tmp/app_config.json')
    mut app_config := config_manager.load()!
    
    // Modify configuration
    app_config.debug = true
    app_config.database.host = 'production-db.example.com'
    app_config.api.api_key = 'your-secret-key-here'
    
    config_manager.save(app_config)!
    println('App configuration saved successfully!')
    
    // 6. Working with arrays of JSON objects
    users_json := '[
        {"id": 1, "name": "Alice", "email": "alice@test.com", "age": 28, "active": true, "settings": {"theme": "dark", "notifications": true, "language": "en"}, "tags": ["dev"]},
        {"id": 2, "name": "Bob", "email": "bob@test.com", "age": 32, "active": false, "settings": {"theme": "light", "notifications": false, "language": "es"}, "tags": ["admin"]}
    ]'
    
    users := json.decode([]User, users_json)!
    println('Loaded ${users.len} users from JSON array')
    
    for user_item in users {
        status := if user_item.active { 'active' } else { 'inactive' }
        println('- ${user_item.name} (${user_item.email}): ${status}')
    }
    
    println('JSON examples completed successfully!')
}
```

## Real-World File Operations

V provides excellent file system support for common operations. Here are comprehensive examples:

### File Manager Utility Class

```v
import os
import crypto.md5
import time

struct FileManager {
    base_path string
}

fn new_file_manager(base_path string) FileManager {
    return FileManager{
        base_path: base_path
    }
}

// Safe file reading with error handling
fn (fm FileManager) read_file_safe(path string) !string {
    full_path := os.join_path(fm.base_path, path)
    
    // Check if file exists
    if !os.exists(full_path) {
        return error('File does not exist: ${full_path}')
    }
    
    // Check if it's actually a file (not directory)
    if os.is_dir(full_path) {
        return error('Path is a directory, not a file: ${full_path}')
    }
    
    return os.read_file(full_path) or {
        return error('Failed to read file: ${err}')
    }
}

// Write file with directory creation
fn (fm FileManager) write_file_safe(path string, content string) ! {
    full_path := os.join_path(fm.base_path, path)
    
    // Create directory if it doesn't exist
    dir := os.dir(full_path)
    if !os.exists(dir) {
        os.mkdir_all(dir) or {
            return error('Failed to create directory: ${err}')
        }
    }
    
    os.write_file(full_path, content) or {
        return error('Failed to write file: ${err}')
    }
}

// Append to file
fn (fm FileManager) append_to_file(path string, content string) ! {
    full_path := os.join_path(fm.base_path, path)
    
    mut file := os.open_append(full_path) or {
        return error('Failed to open file for append: ${err}')
    }
    defer {
        file.close()
    }
    
    file.write_string(content) or {
        return error('Failed to append to file: ${err}')
    }
}

// Read file line by line (memory efficient for large files)
fn (fm FileManager) read_lines(path string) ![]string {
    content := fm.read_file_safe(path)!
    return content.split_into_lines()
}

// Process file line by line with callback
fn (fm FileManager) process_file_lines(path string, processor fn(string, int) bool) ! {
    lines := fm.read_lines(path)!
    
    for i, line in lines {
        // If processor returns false, stop processing
        if !processor(line, i + 1) {
            break
        }
    }
}

// Copy file with progress callback
fn (fm FileManager) copy_file(src_path string, dest_path string, progress_callback fn(int, int)) ! {
    src_full := os.join_path(fm.base_path, src_path)
    dest_full := os.join_path(fm.base_path, dest_path)
    
    if !os.exists(src_full) {
        return error('Source file does not exist: ${src_full}')
    }
    
    // Create destination directory
    dest_dir := os.dir(dest_full)
    if !os.exists(dest_dir) {
        os.mkdir_all(dest_dir)!
    }
    
    // For large files, we could implement chunked copying
    content := os.read_file(src_full)!
    progress_callback(50, 100) // Halfway through
    
    os.write_file(dest_full, content)!
    progress_callback(100, 100) // Complete
}

// Get file information
fn (fm FileManager) get_file_info(path string) !FileInfo {
    full_path := os.join_path(fm.base_path, path)
    
    if !os.exists(full_path) {
        return error('File does not exist: ${full_path}')
    }
    
    stat := os.stat(full_path)!
    
    return FileInfo{
        path: full_path
        name: os.base(full_path)
        size: stat.size
        is_dir: stat.is_dir
        modified: time.unix(stat.mtime)
    }
}

// Calculate file hash
fn (fm FileManager) get_file_hash(path string) !string {
    content := fm.read_file_safe(path)!
    hash := md5.sum(content.bytes())
    return hash.hex()
}

// List files with filtering
fn (fm FileManager) list_files(path string, filter FilterOptions) ![]FileInfo {
    full_path := os.join_path(fm.base_path, path)
    
    if !os.exists(full_path) {
        return error('Directory does not exist: ${full_path}')
    }
    
    if !os.is_dir(full_path) {
        return error('Path is not a directory: ${full_path}')
    }
    
    entries := os.ls(full_path)!
    mut result := []FileInfo{}
    
    for entry in entries {
        entry_path := os.join_path(full_path, entry)
        info := fm.get_file_info(os.join_path(path, entry))!
        
        // Apply filters
        if filter.files_only && info.is_dir {
            continue
        }
        
        if filter.dirs_only && !info.is_dir {
            continue
        }
        
        if filter.extensions.len > 0 && !info.is_dir {
            ext := os.file_ext(entry).to_lower()
            if ext !in filter.extensions {
                continue
            }
        }
        
        if filter.min_size > 0 && info.size < filter.min_size {
            continue
        }
        
        result << info
    }
    
    return result
}

// Recursively find files
fn (fm FileManager) find_files(start_path string, pattern string) ![]string {
    full_path := os.join_path(fm.base_path, start_path)
    mut results := []string{}
    
    entries := os.ls(full_path)!
    
    for entry in entries {
        entry_path := os.join_path(full_path, entry)
        relative_path := os.join_path(start_path, entry)
        
        if os.is_dir(entry_path) {
            // Recursively search subdirectories
            sub_results := fm.find_files(relative_path, pattern)!
            results << sub_results
        } else {
            // Check if file matches pattern
            if entry.contains(pattern) || entry.match_glob(pattern) {
                results << relative_path
            }
        }
    }
    
    return results
}

// Data structures
struct FileInfo {
    path     string
    name     string
    size     i64
    is_dir   bool
    modified time.Time
}

struct FilterOptions {
    files_only  bool
    dirs_only   bool
    extensions  []string
    min_size    i64
    max_size    i64
}

// Log file manager for applications
struct LogManager {
    log_dir    string
    max_size   i64 = 10 * 1024 * 1024 // 10MB default
    max_files  int = 5
}

fn new_log_manager(log_dir string) LogManager {
    return LogManager{
        log_dir: log_dir
    }
}

fn (mut lm LogManager) write_log(level string, message string) ! {
    timestamp := time.now().format()
    log_entry := '[${timestamp}] ${level}: ${message}\n'
    
    log_file := os.join_path(lm.log_dir, 'app.log')
    
    // Create log directory if needed
    if !os.exists(lm.log_dir) {
        os.mkdir_all(lm.log_dir)!
    }
    
    // Check if log file needs rotation
    if os.exists(log_file) {
        stat := os.stat(log_file)!
        if stat.size > lm.max_size {
            lm.rotate_logs()!
        }
    }
    
    // Append log entry
    mut file := os.open_append(log_file) or {
        return error('Failed to open log file: ${err}')
    }
    defer {
        file.close()
    }
    
    file.write_string(log_entry)!
}

fn (lm LogManager) rotate_logs() ! {
    log_file := os.join_path(lm.log_dir, 'app.log')
    
    // Rotate existing log files
    for i := lm.max_files - 1; i > 0; i-- {
        old_file := os.join_path(lm.log_dir, 'app.log.${i}')
        new_file := os.join_path(lm.log_dir, 'app.log.${i + 1}')
        
        if os.exists(old_file) {
            if i == lm.max_files - 1 {
                // Delete oldest file
                os.rm(old_file)!
            } else {
                os.mv(old_file, new_file)!
            }
        }
    }
    
    // Move current log to .1
    if os.exists(log_file) {
        archived_file := os.join_path(lm.log_dir, 'app.log.1')
        os.mv(log_file, archived_file)!
    }
}

fn (lm LogManager) info(message string) {
    lm.write_log('INFO', message) or {
        eprintln('Failed to write to log: ${err}')
    }
}

fn (lm LogManager) error(message string) {
    lm.write_log('ERROR', message) or {
        eprintln('Failed to write to log: ${err}')
    }
}

fn (lm LogManager) debug(message string) {
    lm.write_log('DEBUG', message) or {
        eprintln('Failed to write to log: ${err}')
    }
}

// Configuration file manager
struct ConfigManager[T] {
    config_file string
    backup_dir  string
}

fn new_config_manager[T](config_file string) ConfigManager[T] {
    backup_dir := os.join_path(os.dir(config_file), 'backups')
    return ConfigManager[T]{
        config_file: config_file
        backup_dir: backup_dir
    }
}

fn (cm ConfigManager[T]) load() !T {
    if !os.exists(cm.config_file) {
        return error('Configuration file does not exist: ${cm.config_file}')
    }
    
    content := os.read_file(cm.config_file)!
    return json.decode(T, content)!
}

fn (cm ConfigManager[T]) save(config T) ! {
    // Create backup if file exists
    if os.exists(cm.config_file) {
        cm.backup_config()!
    }
    
    // Ensure directory exists
    config_dir := os.dir(cm.config_file)
    if !os.exists(config_dir) {
        os.mkdir_all(config_dir)!
    }
    
    // Save configuration
    json_content := json.encode_pretty(config)
    os.write_file(cm.config_file, json_content)!
}

fn (cm ConfigManager[T]) backup_config() ! {
    if !os.exists(cm.config_file) {
        return
    }
    
    // Create backup directory
    if !os.exists(cm.backup_dir) {
        os.mkdir_all(cm.backup_dir)!
    }
    
    timestamp := time.now().format_ss()
    backup_name := 'config_${timestamp}.json'
    backup_path := os.join_path(cm.backup_dir, backup_name)
    
    os.cp(cm.config_file, backup_path)!
}

// Example usage functions
fn file_operations_examples() ! {
    println('=== File Operations Examples ===')
    
    // Initialize file manager
    fm := new_file_manager('/tmp/v_file_examples')
    
    // 1. Write and read files
    test_content := 'Hello, V File Operations!
This is a test file with multiple lines.
Line 3 of the test file.'
    
    fm.write_file_safe('test/sample.txt', test_content)!
    println('File written successfully')
    
    read_content := fm.read_file_safe('test/sample.txt')!
    println('Read content length: ${read_content.len} characters')
    
    // 2. Process file line by line
    println('Processing file lines:')
    fm.process_file_lines('test/sample.txt', fn (line string, line_num int) bool {
        println('Line ${line_num}: ${line}')
        return true
    })!
    
    // 3. File information
    file_info := fm.get_file_info('test/sample.txt')!
    println('File info: ${file_info.name}, Size: ${file_info.size} bytes')
    
    // 4. Calculate file hash
    file_hash := fm.get_file_hash('test/sample.txt')!
    println('File hash: ${file_hash}')
    
    // 5. Create multiple files and list them
    test_files := ['test/file1.txt', 'test/file2.log', 'test/subdir/file3.txt']
    for file in test_files {
        fm.write_file_safe(file, 'Content of ${file}')!
    }
    
    // List all files
    filter := FilterOptions{}
    files := fm.list_files('test', filter)!
    println('Found ${files.len} items in test directory:')
    for file in files {
        file_type := if file.is_dir { 'DIR' } else { 'FILE' }
        println('  ${file_type}: ${file.name} (${file.size} bytes)')
    }
    
    // 6. Find files by pattern
    txt_files := fm.find_files('test', '*.txt')!
    println('Found ${txt_files.len} .txt files: ${txt_files}')
    
    // 7. Logging example
    mut log_manager := new_log_manager('/tmp/v_file_examples/logs')
    log_manager.info('Application started')
    log_manager.debug('Debug message example')
    log_manager.error('Error message example')
    
    // 8. Configuration management
    struct AppSettings {
        name        string = 'My V App'
        version     string = '1.0.0'
        debug_mode  bool   = false
        max_workers int    = 4
    }
    
    config_manager := new_config_manager[AppSettings]('/tmp/v_file_examples/config.json')
    
    settings := AppSettings{
        name: 'Example V Application'
        version: '1.2.3'
        debug_mode: true
        max_workers: 8
    }
    
    config_manager.save(settings)!
    loaded_settings := config_manager.load()!
    println('Loaded config: ${loaded_settings.name} v${loaded_settings.version}')
    
    println('File operations examples completed successfully!')
}
```

## Web Development and HTTP Operations

V provides excellent support for web development and HTTP operations through the built-in `net.http` module and the `vweb` framework.

### HTTP Client Examples

```v
import net.http
import json
import time

// HTTP client wrapper for common operations
struct ApiClient {
    base_url    string
    timeout     time.Duration = 30 * time.second
    headers     map[string]string
}

fn new_api_client(base_url string) ApiClient {
    return ApiClient{
        base_url: base_url
        headers: {
            'Content-Type': 'application/json'
            'User-Agent': 'V HTTP Client 1.0'
        }
    }
}

// GET request with JSON response
fn (client ApiClient) get[T](endpoint string) !T {
    url := '${client.base_url}${endpoint}'
    
    mut req := http.Request{
        method: .get
        url: url
        header: client.headers.clone()
    }
    
    resp := req.do() or {
        return error('HTTP request failed: ${err}')
    }
    
    if resp.status_code < 200 || resp.status_code >= 300 {
        return error('HTTP ${resp.status_code}: ${resp.status_msg}')
    }
    
    return json.decode(T, resp.body)!
}

// POST request with JSON payload
fn (client ApiClient) post[T](endpoint string, data any) !T {
    url := '${client.base_url}${endpoint}'
    body := json.encode(data)
    
    mut req := http.Request{
        method: .post
        url: url
        header: client.headers.clone()
        data: body
    }
    
    resp := req.do() or {
        return error('HTTP POST failed: ${err}')
    }
    
    if resp.status_code < 200 || resp.status_code >= 300 {
        return error('HTTP ${resp.status_code}: ${resp.status_msg}')
    }
    
    return json.decode(T, resp.body)!
}

// PUT request for updates
fn (client ApiClient) put[T](endpoint string, data any) !T {
    url := '${client.base_url}${endpoint}'
    body := json.encode(data)
    
    mut req := http.Request{
        method: .put
        url: url
        header: client.headers.clone()
        data: body
    }
    
    resp := req.do() or {
        return error('HTTP PUT failed: ${err}')
    }
    
    if resp.status_code < 200 || resp.status_code >= 300 {
        return error('HTTP ${resp.status_code}: ${resp.status_msg}')
    }
    
    return json.decode(T, resp.body)!
}

// DELETE request
fn (client ApiClient) delete(endpoint string) !bool {
    url := '${client.base_url}${endpoint}'
    
    mut req := http.Request{
        method: .delete
        url: url
        header: client.headers.clone()
    }
    
    resp := req.do() or {
        return error('HTTP DELETE failed: ${err}')
    }
    
    return resp.status_code >= 200 && resp.status_code < 300
}

// Download file with progress tracking
fn (client ApiClient) download_file(url string, dest_path string, progress_callback fn(int, int)) ! {
    mut req := http.Request{
        method: .get
        url: url
        header: client.headers.clone()
    }
    
    resp := req.do() or {
        return error('HTTP download failed: ${err}')
    }
    
    if resp.status_code < 200 || resp.status_code >= 300 {
        return error('HTTP ${resp.status_code}: ${resp.status_msg}')
    }
    
    // Create directory if needed
    dest_dir := os.dir(dest_path)
    if !os.exists(dest_dir) {
        os.mkdir_all(dest_dir)!
    }
    
    total_size := resp.body.len
    progress_callback(0, total_size)
    
    os.write_file(dest_path, resp.body)!
    progress_callback(total_size, total_size)
}

// Example API data structures
struct User {
    id       int
    name     string
    email    string
    username string
}

struct Post {
    id      int
    title   string
    body    string
    user_id int
}

struct ApiResponse[T] {
    success bool
    data    T
    message string
    errors  []string
}

// Real-world API client example
struct BlogApiClient {
    ApiClient
}

fn new_blog_api_client(base_url string) BlogApiClient {
    return BlogApiClient{
        ApiClient: new_api_client(base_url)
    }
}

fn (client BlogApiClient) get_users() ![]User {
    return client.get[[]User]('/users')
}

fn (client BlogApiClient) get_user(user_id int) !User {
    return client.get[User]('/users/${user_id}')
}

fn (client BlogApiClient) create_user(user User) !User {
    return client.post[User]('/users', user)
}

fn (client BlogApiClient) update_user(user User) !User {
    return client.put[User]('/users/${user.id}', user)
}

fn (client BlogApiClient) delete_user(user_id int) !bool {
    return client.delete('/users/${user_id}')
}

fn (client BlogApiClient) get_posts() ![]Post {
    return client.get[[]Post]('/posts')
}

fn (client BlogApiClient) get_user_posts(user_id int) ![]Post {
    return client.get[[]Post]('/users/${user_id}/posts')
}

// HTTP client examples
fn http_client_examples() ! {
    println('=== HTTP Client Examples ===')
    
    // Example with JSONPlaceholder API
    client := new_blog_api_client('https://jsonplaceholder.typicode.com')
    
    // 1. Get all users
    users := client.get_users()!
    println('Fetched ${users.len} users')
    
    for i, user in users {
        if i < 3 { // Show first 3 users
            println('  ${user.id}: ${user.name} (${user.email})')
        }
    }
    
    // 2. Get specific user
    if users.len > 0 {
        user := client.get_user(users[0].id)!
        println('User details: ${user.name} - ${user.username}')
        
        // 3. Get user's posts
        posts := client.get_user_posts(user.id)!
        println('${user.name} has ${posts.len} posts')
        
        if posts.len > 0 {
            println('  Latest post: "${posts[0].title}"')
        }
    }
    
    // 4. Download a file (example - this URL may not exist)
    /*
    println('Downloading file...')
    client.download_file('https://example.com/sample.txt', '/tmp/downloaded_file.txt',
        fn(current int, total int) {
            if total > 0 {
                progress := (current * 100) / total
                println('Download progress: ${progress}%')
            }
        }
    ) or {
        println('Download failed: ${err}')
    }
    */
    
    println('HTTP client examples completed!')
}
```

### Simple Web Server with vweb

```v
import vweb
import json
import time

// Data models
struct Task {
pub mut:
    id          int
    title       string
    description string
    completed   bool
    created_at  time.Time
}

struct TaskResponse {
pub:
    success bool
    data    Task
    message string
}

struct TaskListResponse {
pub:
    success bool
    data    []Task
    message string
    total   int
}

struct ErrorResponse {
pub:
    success bool = false
    message string
    error_code int
}

// Web application structure
struct App {
    vweb.Context
pub mut:
    tasks   map[int]Task
    next_id int = 1
}

// Initialize app with sample data
fn new_app() &App {
    mut app := &App{}
    
    // Add sample tasks
    sample_tasks := [
        Task{
            id: app.next_id++
            title: 'Learn V programming'
            description: 'Complete the V tutorial and build a project'
            completed: false
            created_at: time.now()
        },
        Task{
            id: app.next_id++
            title: 'Build web API'
            description: 'Create a RESTful API using vweb'
            completed: true
            created_at: time.now().add(-24 * time.hour)
        }
    ]
    
    for task in sample_tasks {
        app.tasks[task.id] = task
    }
    
    return app
}

// Middleware for CORS
pub fn (mut app App) before_request() {
    app.add_header('Access-Control-Allow-Origin', '*')
    app.add_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    app.add_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    
    // Handle preflight requests
    if app.req.method == .options {
        app.set_status(204, 'No Content')
        return
    }
}

// Routes

// GET / - Home page with API documentation
@['/'; get]
pub fn (mut app App) index() vweb.Result {
    app.set_content_type('text/html')
    
    html := '<!DOCTYPE html>
<html>
<head>
    <title>V Task API</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .endpoint { background: #f5f5f5; padding: 15px; margin: 10px 0; border-radius: 5px; }
        .method { font-weight: bold; color: #2196F3; }
        .url { font-family: monospace; background: #e0e0e0; padding: 2px 6px; border-radius: 3px; }
    </style>
</head>
<body>
    <h1>V Task API</h1>
    <p>A simple RESTful API built with V and vweb</p>
    
    <h2>Available Endpoints</h2>
    
    <div class="endpoint">
        <span class="method">GET</span> <span class="url">/api/tasks</span>
        <p>Get all tasks</p>
    </div>
    
    <div class="endpoint">
        <span class="method">GET</span> <span class="url">/api/tasks/:id</span>
        <p>Get a specific task by ID</p>
    </div>
    
    <div class="endpoint">
        <span class="method">POST</span> <span class="url">/api/tasks</span>
        <p>Create a new task</p>
    </div>
    
    <div class="endpoint">
        <span class="method">PUT</span> <span class="url">/api/tasks/:id</span>
        <p>Update a task</p>
    </div>
    
    <div class="endpoint">
        <span class="method">DELETE</span> <span class="url">/api/tasks/:id</span>
        <p>Delete a task</p>
    </div>
    
    <div class="endpoint">
        <span class="method">GET</span> <span class="url">/health</span>
        <p>Health check endpoint</p>
    </div>
    
    <h2>Example Usage</h2>
    <pre>
// Get all tasks
curl http://localhost:8000/api/tasks

// Create a new task
curl -X POST http://localhost:8000/api/tasks \\
  -H "Content-Type: application/json" \\
  -d \'{"title":"New task","description":"Task description","completed":false}\'

// Update a task
curl -X PUT http://localhost:8000/api/tasks/1 \\
  -H "Content-Type: application/json" \\
  -d \'{"title":"Updated task","description":"Updated description","completed":true}\'
    </pre>
</body>
</html>'
    
    return app.html(html)
}

// GET /api/tasks - Get all tasks
@['/api/tasks'; get]
pub fn (mut app App) get_tasks() vweb.Result {
    app.set_content_type('application/json')
    
    tasks := app.tasks.values()
    response := TaskListResponse{
        success: true
        data: tasks
        message: 'Tasks retrieved successfully'
        total: tasks.len
    }
    
    return app.json(response)
}

// GET /api/tasks/:id - Get specific task
@['/api/tasks/:id'; get]
pub fn (mut app App) get_task() vweb.Result {
    app.set_content_type('application/json')
    
    task_id := app.param('id').int()
    
    if task := app.tasks[task_id] {
        response := TaskResponse{
            success: true
            data: task
            message: 'Task retrieved successfully'
        }
        return app.json(response)
    } else {
        app.set_status(404, 'Not Found')
        response := ErrorResponse{
            message: 'Task not found'
            error_code: 404
        }
        return app.json(response)
    }
}

// POST /api/tasks - Create new task
@['/api/tasks'; post]
pub fn (mut app App) create_task() vweb.Result {
    app.set_content_type('application/json')
    
    // Parse request body
    mut new_task := json.decode(Task, app.req.data) or {
        app.set_status(400, 'Bad Request')
        response := ErrorResponse{
            message: 'Invalid JSON data'
            error_code: 400
        }
        return app.json(response)
    }
    
    // Validate required fields
    if new_task.title.trim_space().len == 0 {
        app.set_status(400, 'Bad Request')
        response := ErrorResponse{
            message: 'Title is required'
            error_code: 400
        }
        return app.json(response)
    }
    
    // Set task properties
    new_task.id = app.next_id++
    new_task.created_at = time.now()
    
    // Store task
    app.tasks[new_task.id] = new_task
    
    app.set_status(201, 'Created')
    response := TaskResponse{
        success: true
        data: new_task
        message: 'Task created successfully'
    }
    return app.json(response)
}

// PUT /api/tasks/:id - Update task
@['/api/tasks/:id'; put]
pub fn (mut app App) update_task() vweb.Result {
    app.set_content_type('application/json')
    
    task_id := app.param('id').int()
    
    if task_id !in app.tasks {
        app.set_status(404, 'Not Found')
        response := ErrorResponse{
            message: 'Task not found'
            error_code: 404
        }
        return app.json(response)
    }
    
    // Parse update data
    update_data := json.decode(Task, app.req.data) or {
        app.set_status(400, 'Bad Request')
        response := ErrorResponse{
            message: 'Invalid JSON data'
            error_code: 400
        }
        return app.json(response)
    }
    
    // Update existing task
    mut existing_task := app.tasks[task_id]
    existing_task.title = update_data.title
    existing_task.description = update_data.description
    existing_task.completed = update_data.completed
    
    app.tasks[task_id] = existing_task
    
    response := TaskResponse{
        success: true
        data: existing_task
        message: 'Task updated successfully'
    }
    return app.json(response)
}

// DELETE /api/tasks/:id - Delete task
@['/api/tasks/:id'; delete]
pub fn (mut app App) delete_task() vweb.Result {
    app.set_content_type('application/json')
    
    task_id := app.param('id').int()
    
    if task_id !in app.tasks {
        app.set_status(404, 'Not Found')
        response := ErrorResponse{
            message: 'Task not found'
            error_code: 404
        }
        return app.json(response)
    }
    
    app.tasks.delete(task_id)
    
    response := map[string]any{
        'success': true
        'message': 'Task deleted successfully'
    }
    return app.json(response)
}

// GET /health - Health check
@['/health'; get]
pub fn (mut app App) health() vweb.Result {
    app.set_content_type('application/json')
    
    health_info := map[string]any{
        'status': 'healthy'
        'timestamp': time.now().format()
        'tasks_count': app.tasks.len
        'uptime': 'Running'
    }
    
    return app.json(health_info)
}

// Web server example
fn web_server_example() {
    mut app := new_app()
    
    println('🚀 Starting V Task API Server')
    println('📍 Server running at: http://localhost:8000')
    println('📚 API Documentation: http://localhost:8000')
    println('💊 Health Check: http://localhost:8000/health')
    println('📝 Tasks API: http://localhost:8000/api/tasks')
    println('')
    println('Press Ctrl+C to stop the server')
    
    vweb.run(app, 8000)
}
```

### WebSocket Support Example

```v
import net.websocket
import json
import time
import sync

// WebSocket server for real-time communication
struct WsMessage {
    type_    string @[json: 'type']
    data     json.RawMessage
    sender   string
    timestamp string
}

struct ChatMessage {
    message string
    user    string
}

struct WsServer {
mut:
    clients map[string]&websocket.Client
    mutex   sync.RwMutex
}

fn new_ws_server() &WsServer {
    return &WsServer{}
}

fn (mut ws WsServer) add_client(client_id string, client &websocket.Client) {
    ws.mutex.w_lock()
    ws.clients[client_id] = client
    ws.mutex.w_unlock()
    
    println('Client ${client_id} connected. Total clients: ${ws.clients.len}')
}

fn (mut ws WsServer) remove_client(client_id string) {
    ws.mutex.w_lock()
    ws.clients.delete(client_id)
    ws.mutex.w_unlock()
    
    println('Client ${client_id} disconnected. Total clients: ${ws.clients.len}')
}

fn (mut ws WsServer) broadcast_message(message WsMessage) {
    message_json := json.encode(message)
    
    ws.mutex.r_lock()
    for client_id, client in ws.clients {
        client.write_string(message_json) or {
            eprintln('Failed to send message to client ${client_id}: ${err}')
        }
    }
    ws.mutex.r_unlock()
}

fn websocket_example() {
    println('WebSocket server example - run with additional WebSocket client code')
}
```

## Database Integration Examples

V provides excellent database support through various modules. Here are comprehensive examples for SQLite, PostgreSQL, and MySQL.

### SQLite Database Operations

```v
import db.sqlite

// Database models
struct User {
    id         int    @[primary; sql: serial]
    name       string @[nonull]
    email      string @[unique; nonull]
    age        int
    created_at string @[default: 'CURRENT_TIMESTAMP']
    active     bool   @[default: true]
}

struct Post {
    id         int    @[primary; sql: serial]
    title      string @[nonull]
    content    string
    user_id    int    @[fkey: 'User(id)']
    created_at string @[default: 'CURRENT_TIMESTAMP']
    published  bool   @[default: false]
}

// Database manager
struct DatabaseManager {
mut:
    db sqlite.DB
}

fn new_database_manager(db_path string) !DatabaseManager {
    db := sqlite.connect(db_path) or {
        return error('Failed to connect to database: ${err}')
    }
    
    return DatabaseManager{
        db: db
    }
}

fn (mut dm DatabaseManager) close() {
    dm.db.close()
}

// Initialize database tables
fn (mut dm DatabaseManager) init_tables() ! {
    // Create users table
    sql_users := "
    CREATE TABLE IF NOT EXISTS User (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        age INTEGER,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        active BOOLEAN DEFAULT 1
    )"
    
    dm.db.exec(sql_users) or {
        return error('Failed to create users table: ${err}')
    }
    
    // Create posts table
    sql_posts := "
    CREATE TABLE IF NOT EXISTS Post (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT,
        user_id INTEGER,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        published BOOLEAN DEFAULT 0,
        FOREIGN KEY (user_id) REFERENCES User (id) ON DELETE CASCADE
    )"
    
    dm.db.exec(sql_posts) or {
        return error('Failed to create posts table: ${err}')
    }
    
    println('Database tables initialized successfully')
}

// User CRUD operations
fn (mut dm DatabaseManager) create_user(name string, email string, age int) !User {
    sql_insert := "INSERT INTO User (name, email, age) VALUES (?, ?, ?)"
    dm.db.exec_param(sql_insert, name, email, age) or {
        return error('Failed to create user: ${err}')
    }
    
    // Get the inserted user
    user_id := dm.db.last_id()
    return dm.get_user(user_id)!
}

fn (mut dm DatabaseManager) get_user(id int) !User {
    sql_select := "SELECT id, name, email, age, created_at, active FROM User WHERE id = ?"
    users := dm.db.exec_param(sql_select, id) or {
        return error('Failed to get user: ${err}')
    }
    
    if users.len == 0 {
        return error('User not found')
    }
    
    row := users[0]
    return User{
        id: row.vals[0].int()
        name: row.vals[1]
        email: row.vals[2]
        age: row.vals[3].int()
        created_at: row.vals[4]
        active: row.vals[5].int() == 1
    }
}

fn (mut dm DatabaseManager) get_all_users() ![]User {
    sql_select := "SELECT id, name, email, age, created_at, active FROM User ORDER BY created_at DESC"
    rows := dm.db.exec(sql_select) or {
        return error('Failed to get users: ${err}')
    }
    
    mut users := []User{}
    for row in rows {
        user := User{
            id: row.vals[0].int()
            name: row.vals[1]
            email: row.vals[2]
            age: row.vals[3].int()
            created_at: row.vals[4]
            active: row.vals[5].int() == 1
        }
        users << user
    }
    
    return users
}

fn (mut dm DatabaseManager) update_user(user User) ! {
    sql_update := "UPDATE User SET name = ?, email = ?, age = ?, active = ? WHERE id = ?"
    active_int := if user.active { 1 } else { 0 }
    
    dm.db.exec_param(sql_update, user.name, user.email, user.age, active_int, user.id) or {
        return error('Failed to update user: ${err}')
    }
}

fn (mut dm DatabaseManager) delete_user(id int) ! {
    // First delete related posts
    dm.db.exec_param("DELETE FROM Post WHERE user_id = ?", id) or {
        return error('Failed to delete user posts: ${err}')
    }
    
    // Then delete the user
    dm.db.exec_param("DELETE FROM User WHERE id = ?", id) or {
        return error('Failed to delete user: ${err}')
    }
}

// Post CRUD operations
fn (mut dm DatabaseManager) create_post(title string, content string, user_id int, published bool) !Post {
    published_int := if published { 1 } else { 0 }
    sql_insert := "INSERT INTO Post (title, content, user_id, published) VALUES (?, ?, ?, ?)"
    
    dm.db.exec_param(sql_insert, title, content, user_id, published_int) or {
        return error('Failed to create post: ${err}')
    }
    
    post_id := dm.db.last_id()
    return dm.get_post(post_id)!
}

fn (mut dm DatabaseManager) get_post(id int) !Post {
    sql_select := "SELECT id, title, content, user_id, created_at, published FROM Post WHERE id = ?"
    rows := dm.db.exec_param(sql_select, id) or {
        return error('Failed to get post: ${err}')
    }
    
    if rows.len == 0 {
        return error('Post not found')
    }
    
    row := rows[0]
    return Post{
        id: row.vals[0].int()
        title: row.vals[1]
        content: row.vals[2]
        user_id: row.vals[3].int()
        created_at: row.vals[4]
        published: row.vals[5].int() == 1
    }
}

fn (mut dm DatabaseManager) get_user_posts(user_id int) ![]Post {
    sql_select := "SELECT id, title, content, user_id, created_at, published FROM Post WHERE user_id = ? ORDER BY created_at DESC"
    rows := dm.db.exec_param(sql_select, user_id) or {
        return error('Failed to get user posts: ${err}')
    }
    
    mut posts := []Post{}
    for row in rows {
        post := Post{
            id: row.vals[0].int()
            title: row.vals[1]
            content: row.vals[2]
            user_id: row.vals[3].int()
            created_at: row.vals[4]
            published: row.vals[5].int() == 1
        }
        posts << post
    }
    
    return posts
}

fn (mut dm DatabaseManager) get_published_posts() ![]Post {
    sql_select := "SELECT id, title, content, user_id, created_at, published FROM Post WHERE published = 1 ORDER BY created_at DESC"
    rows := dm.db.exec(sql_select) or {
        return error('Failed to get published posts: ${err}')
    }
    
    mut posts := []Post{}
    for row in rows {
        post := Post{
            id: row.vals[0].int()
            title: row.vals[1]
            content: row.vals[2]
            user_id: row.vals[3].int()
            created_at: row.vals[4]
            published: row.vals[5].int() == 1
        }
        posts << post
    }
    
    return posts
}

// Advanced queries
fn (mut dm DatabaseManager) get_users_with_post_count() ![]map[string]any {
    sql_query := "
    SELECT u.id, u.name, u.email, COUNT(p.id) as post_count
    FROM User u
    LEFT JOIN Post p ON u.id = p.user_id
    GROUP BY u.id, u.name, u.email
    ORDER BY post_count DESC"
    
    rows := dm.db.exec(sql_query) or {
        return error('Failed to get users with post count: ${err}')
    }
    
    mut results := []map[string]any{}
    for row in rows {
        result := {
            'id': row.vals[0].int()
            'name': row.vals[1]
            'email': row.vals[2]
            'post_count': row.vals[3].int()
        }
        results << result
    }
    
    return results
}

fn (mut dm DatabaseManager) search_posts(keyword string) ![]Post {
    sql_search := "
    SELECT id, title, content, user_id, created_at, published 
    FROM Post 
    WHERE (title LIKE ? OR content LIKE ?) AND published = 1
    ORDER BY created_at DESC"
    
    search_term := '%${keyword}%'
    rows := dm.db.exec_param(sql_search, search_term, search_term) or {
        return error('Failed to search posts: ${err}')
    }
    
    mut posts := []Post{}
    for row in rows {
        post := Post{
            id: row.vals[0].int()
            title: row.vals[1]
            content: row.vals[2]
            user_id: row.vals[3].int()
            created_at: row.vals[4]
            published: row.vals[5].int() == 1
        }
        posts << post
    }
    
    return posts
}

// Database transaction example
fn (mut dm DatabaseManager) transfer_posts(from_user_id int, to_user_id int) ! {
    // Verify both users exist
    _ = dm.get_user(from_user_id)!
    _ = dm.get_user(to_user_id)!
    
    // In a real application, you would use proper transactions
    // For SQLite in V, we simulate it with error handling
    dm.db.exec_param("UPDATE Post SET user_id = ? WHERE user_id = ?", to_user_id, from_user_id) or {
        return error('Failed to transfer posts: ${err}')
    }
}

// Database examples
fn database_examples() ! {
    println('=== Database Examples ===')
    
    // Initialize database
    mut db_manager := new_database_manager('/tmp/blog.db')!
    defer {
        db_manager.close()
    }
    
    // Initialize tables
    db_manager.init_tables()!
    
    // 1. Create users
    user1 := db_manager.create_user('Alice Johnson', 'alice@example.com', 28)!
    user2 := db_manager.create_user('Bob Smith', 'bob@example.com', 32)!
    user3 := db_manager.create_user('Carol Brown', 'carol@example.com', 25)!
    
    println('Created ${[user1, user2, user3].len} users')
    
    // 2. Create posts
    posts_data := [
        ('Getting Started with V', 'V is an amazing programming language...', user1.id, true),
        ('Database Operations in V', 'This post covers SQLite integration...', user1.id, true),
        ('Draft Post', 'This is still a work in progress...', user1.id, false),
        ('Web Development with V', 'Building web applications is easy...', user2.id, true),
        ('My Journey Learning V', 'I started learning V last month...', user3.id, true),
    ]
    
    for title, content, user_id, published in posts_data {
        db_manager.create_post(title, content, user_id, published)!
    }
    
    println('Created ${posts_data.len} posts')
    
    // 3. Get all users
    all_users := db_manager.get_all_users()!
    println('All users (${all_users.len}):')
    for user in all_users {
        status := if user.active { 'active' } else { 'inactive' }
        println('  ${user.id}: ${user.name} (${user.email}) - ${status}')
    }
    
    // 4. Get published posts
    published_posts := db_manager.get_published_posts()!
    println('Published posts (${published_posts.len}):')
    for post in published_posts {
        println('  "${post.title}" by user ${post.user_id}')
    }
    
    // 5. Get user posts
    alice_posts := db_manager.get_user_posts(user1.id)!
    println('${user1.name}\'s posts (${alice_posts.len}):')
    for post in alice_posts {
        status := if post.published { 'published' } else { 'draft' }
        println('  "${post.title}" - ${status}')
    }
    
    // 6. Advanced query - users with post count
    users_with_counts := db_manager.get_users_with_post_count()!
    println('Users with post counts:')
    for user_data in users_with_counts {
        println('  ${user_data['name']}: ${user_data['post_count']} posts')
    }
    
    // 7. Search posts
    search_results := db_manager.search_posts('V')!
    println('Posts containing "V" (${search_results.len}):')
    for post in search_results {
        println('  "${post.title}"')
    }
    
    // 8. Update user
    mut updated_user := user3
    updated_user.age = 26
    db_manager.update_user(updated_user)!
    println('Updated ${updated_user.name}\'s age to ${updated_user.age}')
    
    println('Database examples completed successfully!')
}
```

### PostgreSQL Database Operations

```v
import db.pg

// PostgreSQL database manager
struct PostgresManager {
mut:
    db pg.DB
}

fn new_postgres_manager(host string, port int, user string, password string, dbname string) !PostgresManager {
    db := pg.connect(pg.Config{
        host: host
        port: port
        user: user
        password: password
        dbname: dbname
    }) or {
        return error('Failed to connect to PostgreSQL: ${err}')
    }
    
    return PostgresManager{
        db: db
    }
}

fn (mut pm PostgresManager) close() {
    pm.db.close()
}

fn (mut pm PostgresManager) init_tables() ! {
    // Create users table with PostgreSQL-specific features
    sql_users := "
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        age INTEGER CHECK (age >= 0),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        active BOOLEAN DEFAULT TRUE
    )"
    
    pm.db.exec(sql_users) or {
        return error('Failed to create users table: ${err}')
    }
    
    // Create posts table with full-text search support
    sql_posts := "
    CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        content TEXT,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        published BOOLEAN DEFAULT FALSE,
        tags TEXT[],
        search_vector TSVECTOR
    )"
    
    pm.db.exec(sql_posts) or {
        return error('Failed to create posts table: ${err}')
    }
    
    // Create index for full-text search
    pm.db.exec("CREATE INDEX IF NOT EXISTS idx_posts_search ON posts USING gin(search_vector)") or {
        return error('Failed to create search index: ${err}')
    }
    
    // Create trigger to update search vector
    trigger_sql := "
    CREATE OR REPLACE FUNCTION update_search_vector() RETURNS TRIGGER AS \$\$
    BEGIN
        NEW.search_vector := to_tsvector('english', coalesce(NEW.title, '') || ' ' || coalesce(NEW.content, ''));
        NEW.updated_at := CURRENT_TIMESTAMP;
        RETURN NEW;
    END;
    \$\$ LANGUAGE plpgsql;
    
    DROP TRIGGER IF EXISTS posts_search_update ON posts;
    CREATE TRIGGER posts_search_update
        BEFORE INSERT OR UPDATE ON posts
        FOR EACH ROW EXECUTE FUNCTION update_search_vector();"
    
    pm.db.exec(trigger_sql) or {
        return error('Failed to create trigger: ${err}')
    }
}

// Advanced PostgreSQL queries
fn (mut pm PostgresManager) full_text_search(query string) ![]map[string]any {
    sql_search := "
    SELECT p.id, p.title, p.content, u.name as author, p.created_at,
           ts_rank(p.search_vector, plainto_tsquery('english', \$1)) as rank
    FROM posts p
    JOIN users u ON p.user_id = u.id
    WHERE p.search_vector @@ plainto_tsquery('english', \$1)
    AND p.published = TRUE
    ORDER BY rank DESC, p.created_at DESC
    LIMIT 10"
    
    rows := pm.db.exec_param(sql_search, query) or {
        return error('Failed to perform full-text search: ${err}')
    }
    
    mut results := []map[string]any{}
    for row in rows {
        result := {
            'id': row.vals[0].int()
            'title': row.vals[1]
            'content': row.vals[2]
            'author': row.vals[3]
            'created_at': row.vals[4]
            'rank': row.vals[5].f64()
        }
        results << result
    }
    
    return results
}

fn postgres_examples() {
    println('PostgreSQL examples - requires PostgreSQL server setup')
    // Example would require actual PostgreSQL connection details
}
```

### Database Connection Pool Example

```v
import sync
import time

// Database connection pool for better performance
struct ConnectionPool {
mut:
    connections []sqlite.DB
    available   []bool
    mutex       sync.Mutex
    max_connections int = 10
}

fn new_connection_pool(db_path string, max_connections int) !ConnectionPool {
    mut pool := ConnectionPool{
        max_connections: max_connections
    }
    
    // Initialize connections
    for i in 0 .. max_connections {
        db := sqlite.connect(db_path) or {
            return error('Failed to create connection ${i}: ${err}')
        }
        pool.connections << db
        pool.available << true
    }
    
    return pool
}

fn (mut pool ConnectionPool) get_connection() !sqlite.DB {
    pool.mutex.m_lock()
    defer {
        pool.mutex.unlock()
    }
    
    for i, available in pool.available {
        if available {
            pool.available[i] = false
            return pool.connections[i]
        }
    }
    
    return error('No available connections in pool')
}

fn (mut pool ConnectionPool) release_connection(db sqlite.DB) {
    pool.mutex.m_lock()
    defer {
        pool.mutex.unlock()
    }
    
    for i, conn in pool.connections {
        if conn == db {
            pool.available[i] = true
            break
        }
    }
}

fn (mut pool ConnectionPool) close_all() {
    for mut db in pool.connections {
        db.close()
    }
}
```

## Complete CLI Application: Task Manager

Here's a comprehensive command-line task management application that demonstrates real-world V programming:

```v
// main.v - Task Manager CLI Application
module main

import os
import json
import time
import flag
import term

// Task management structures
struct Task {
pub mut:
    id          int
    title       string
    description string
    completed   bool
    priority    Priority
    due_date    ?time.Time
    created_at  time.Time
    updated_at  time.Time
    tags        []string
}

enum Priority {
    low = 1
    medium = 2
    high = 3
    urgent = 4
}

fn (p Priority) str() string {
    return match p {
        .low { 'Low' }
        .medium { 'Medium' }
        .high { 'High' }
        .urgent { 'URGENT' }
    }
}

fn (p Priority) color() string {
    return match p {
        .low { term.blue('Low') }
        .medium { term.yellow('Medium') }
        .high { term.bright_red('High') }
        .urgent { term.red('URGENT') }
    }
}

struct TaskManager {
mut:
    tasks      []Task
    next_id    int = 1
    data_file  string
    config     AppConfig
}

struct AppConfig {
mut:
    data_dir       string
    auto_save      bool = true
    date_format    string = 'YYYY-MM-DD'
    color_output   bool = true
    max_title_len  int = 50
}

fn new_task_manager() !TaskManager {
    home_dir := os.home_dir()
    data_dir := os.join_path(home_dir, '.vtasks')
    
    // Create data directory if it doesn't exist
    if !os.exists(data_dir) {
        os.mkdir_all(data_dir)!
    }
    
    data_file := os.join_path(data_dir, 'tasks.json')
    config_file := os.join_path(data_dir, 'config.json')
    
    mut tm := TaskManager{
        data_file: data_file
        config: AppConfig{
            data_dir: data_dir
        }
    }
    
    // Load configuration
    tm.load_config(config_file) or {
        // Use defaults if config doesn't exist
        tm.save_config(config_file) or {}
    }
    
    // Load existing tasks
    tm.load_tasks() or {
        // Start with empty task list if file doesn't exist
    }
    
    return tm
}

// Configuration management
fn (mut tm TaskManager) load_config(config_file string) ! {
    if !os.exists(config_file) {
        return error('Config file does not exist')
    }
    
    content := os.read_file(config_file)!
    tm.config = json.decode(AppConfig, content)!
}

fn (tm TaskManager) save_config(config_file string) ! {
    content := json.encode_pretty(tm.config)
    os.write_file(config_file, content)!
}

// Task data persistence
fn (mut tm TaskManager) load_tasks() ! {
    if !os.exists(tm.data_file) {
        return error('Tasks file does not exist')
    }
    
    content := os.read_file(tm.data_file)!
    tm.tasks = json.decode([]Task, content)!
    
    // Update next_id based on existing tasks
    if tm.tasks.len > 0 {
        max_id := tm.tasks.map(it.id).max()
        tm.next_id = max_id + 1
    }
}

fn (tm TaskManager) save_tasks() ! {
    content := json.encode_pretty(tm.tasks)
    os.write_file(tm.data_file, content) or {
        return error('Failed to save tasks: ${err}')
    }
}

// Task CRUD operations
fn (mut tm TaskManager) add_task(title string, description string, priority Priority, tags []string, due_date ?time.Time) !Task {
    if title.trim_space().len == 0 {
        return error('Task title cannot be empty')
    }
    
    task := Task{
        id: tm.next_id
        title: title.trim_space()
        description: description.trim_space()
        completed: false
        priority: priority
        due_date: due_date
        created_at: time.now()
        updated_at: time.now()
        tags: tags.map(it.trim_space().to_lower()).filter(it.len > 0)
    }
    
    tm.tasks << task
    tm.next_id++
    
    if tm.config.auto_save {
        tm.save_tasks()!
    }
    
    return task
}

fn (mut tm TaskManager) get_task(id int) ?Task {
    for task in tm.tasks {
        if task.id == id {
            return task
        }
    }
    return none
}

fn (mut tm TaskManager) update_task(updated_task Task) ! {
    for i, mut task in tm.tasks {
        if task.id == updated_task.id {
            mut new_task := updated_task
            new_task.updated_at = time.now()
            tm.tasks[i] = new_task
            
            if tm.config.auto_save {
                tm.save_tasks()!
            }
            return
        }
    }
    return error('Task not found')
}

fn (mut tm TaskManager) complete_task(id int) ! {
    for i, mut task in tm.tasks {
        if task.id == id {
            tm.tasks[i].completed = true
            tm.tasks[i].updated_at = time.now()
            
            if tm.config.auto_save {
                tm.save_tasks()!
            }
            return
        }
    }
    return error('Task not found')
}

fn (mut tm TaskManager) delete_task(id int) ! {
    for i, task in tm.tasks {
        if task.id == id {
            tm.tasks.delete(i)
            
            if tm.config.auto_save {
                tm.save_tasks()!
            }
            return
        }
    }
    return error('Task not found')
}

// Task filtering and searching
fn (tm TaskManager) filter_tasks(filter FilterOptions) []Task {
    mut filtered := []Task{}
    
    for task in tm.tasks {
        // Filter by completion status
        if filter.completed != null {
            if task.completed != filter.completed {
                continue
            }
        }
        
        // Filter by priority
        if filter.priority != null {
            if task.priority != filter.priority {
                continue
            }
        }
        
        // Filter by tags
        if filter.tags.len > 0 {
            mut has_tag := false
            for filter_tag in filter.tags {
                if filter_tag in task.tags {
                    has_tag = true
                    break
                }
            }
            if !has_tag {
                continue
            }
        }
        
        // Filter by due date
        if filter.due_today {
            if due_date := task.due_date {
                today := time.now().date()
                task_date := due_date.date()
                if task_date != today {
                    continue
                }
            } else {
                continue
            }
        }
        
        // Text search in title and description
        if filter.search.len > 0 {
            search_text := filter.search.to_lower()
            if !task.title.to_lower().contains(search_text) &&
               !task.description.to_lower().contains(search_text) {
                continue
            }
        }
        
        filtered << task
    }
    
    return filtered
}

struct FilterOptions {
    completed  ?bool
    priority   ?Priority
    tags       []string
    due_today  bool
    search     string
}

// Display functions
fn (tm TaskManager) display_tasks(tasks []Task) {
    if tasks.len == 0 {
        println('No tasks found.')
        return
    }
    
    println('─'.repeat(80))
    println('Tasks (${tasks.len} found)')
    println('─'.repeat(80))
    
    for task in tasks {
        tm.display_task(task)
        println('─'.repeat(40))
    }
}

fn (tm TaskManager) display_task(task Task) {
    // Status icon
    status_icon := if task.completed { '✅' } else { '⏳' }
    
    // Priority with color if enabled
    priority_str := if tm.config.color_output {
        task.priority.color()
    } else {
        task.priority.str()
    }
    
    // Title (truncated if too long)
    mut title := task.title
    if title.len > tm.config.max_title_len {
        title = title[..tm.config.max_title_len - 3] + '...'
    }
    
    println('${status_icon} [${task.id:3}] ${title}')
    println('    Priority: ${priority_str}')
    
    if task.description.len > 0 {
        // Word wrap description
        words := task.description.split(' ')
        mut line := '    '
        for word in words {
            if line.len + word.len + 1 > 76 {
                println(line)
                line = '    ${word}'
            } else {
                if line.len > 4 {
                    line += ' ${word}'
                } else {
                    line += word
                }
            }
        }
        if line.len > 4 {
            println(line)
        }
    }
    
    if task.tags.len > 0 {
        tags_str := task.tags.map('#${it}').join(' ')
        println('    Tags: ${tags_str}')
    }
    
    if due_date := task.due_date {
        due_str := due_date.format()
        is_overdue := !task.completed && due_date < time.now()
        if is_overdue && tm.config.color_output {
            println('    Due: ${term.red(due_str)} (OVERDUE)')
        } else {
            println('    Due: ${due_str}')
        }
    }
    
    created_str := task.created_at.format()
    println('    Created: ${created_str}')
}

fn (tm TaskManager) display_summary() {
    total := tm.tasks.len
    completed := tm.tasks.filter(it.completed).len
    pending := total - completed
    
    mut overdue := 0
    mut due_today := 0
    
    today := time.now().date()
    for task in tm.tasks {
        if task.completed {
            continue
        }
        
        if due_date := task.due_date {
            if due_date.date() < today {
                overdue++
            } else if due_date.date() == today {
                due_today++
            }
        }
    }
    
    println('📊 Task Summary')
    println('─'.repeat(30))
    println('Total tasks:     ${total}')
    println('Completed:       ${completed}')
    println('Pending:         ${pending}')
    if overdue > 0 {
        overdue_str := if tm.config.color_output { term.red('${overdue}') } else { '${overdue}' }
        println('Overdue:         ${overdue_str}')
    }
    if due_today > 0 {
        today_str := if tm.config.color_output { term.yellow('${due_today}') } else { '${due_today}' }
        println('Due today:       ${today_str}')
    }
}

// Command line interface
fn parse_priority(priority_str string) Priority {
    return match priority_str.to_lower() {
        'low', 'l', '1' { .low }
        'medium', 'med', 'm', '2' { .medium }
        'high', 'h', '3' { .high }
        'urgent', 'u', '4' { .urgent }
        else { .medium }
    }
}

fn parse_date(date_str string) ?time.Time {
    // Handle special keywords
    match date_str.to_lower() {
        'today' { return time.now() }
        'tomorrow' { return time.now().add(24 * time.hour) }
        else {}
    }
    
    // Try to parse date in YYYY-MM-DD format
    parts := date_str.split('-')
    if parts.len != 3 {
        return none
    }
    
    year := parts[0].int()
    month := parts[1].int()
    day := parts[2].int()
    
    if year < 2020 || month < 1 || month > 12 || day < 1 || day > 31 {
        return none
    }
    
    return time.new_time(time.Time{
        year: year
        month: month
        day: day
    })
}

fn show_help() {
    help_text := '
🚀 V Task Manager - A powerful command-line task management tool

USAGE:
    vtask <command> [options]

COMMANDS:
    add <title>              Add a new task
    list [filter]           List tasks (all, pending, completed, today)
    show <id>               Show detailed task information
    complete <id>           Mark task as completed
    update <id>             Update task interactively  
    delete <id>             Delete a task
    search <query>          Search tasks by title/description
    summary                 Show task summary statistics
    export [file]           Export tasks to JSON file
    import <file>           Import tasks from JSON file
    config                  Show configuration
    help                    Show this help message

ADD OPTIONS:
    -d, --description       Task description
    -p, --priority         Priority: low, medium, high, urgent
    -t, --tags             Comma-separated tags
    --due                  Due date (YYYY-MM-DD, today, tomorrow)

LIST FILTERS:
    all                    Show all tasks (default)
    pending                Show incomplete tasks
    completed              Show completed tasks  
    today                  Show tasks due today
    overdue                Show overdue tasks
    urgent                 Show urgent priority tasks

EXAMPLES:
    vtask add "Learn V programming" -d "Complete tutorial" -p high --due tomorrow
    vtask list pending
    vtask search "web development"
    vtask complete 5
    vtask summary

CONFIGURATION:
    Config file: ~/.vtasks/config.json
    Tasks file:  ~/.vtasks/tasks.json
'
    println(help_text)
}

fn main() {
    mut tm := new_task_manager() or {
        eprintln('Error initializing task manager: ${err}')
        exit(1)
    }
    
    args := os.args[1..]
    
    if args.len == 0 {
        show_help()
        return
    }
    
    command := args[0]
    
    match command {
        'add' {
            if args.len < 2 {
                eprintln('Error: Please provide a task title')
                eprintln('Usage: vtask add <title> [options]')
                exit(1)
            }
            
            // Parse command line flags
            mut fp := flag.new_flag_parser(args)
            fp.application('vtask add')
            fp.description('Add a new task')
            
            title := fp.string('title', `t`, '', 'Task title (required)')
            description := fp.string('description', `d`, '', 'Task description')
            priority_str := fp.string('priority', `p`, 'medium', 'Priority: low, medium, high, urgent')
            tags_str := fp.string('tags', 0, '', 'Comma-separated tags')
            due_str := fp.string('due', 0, '', 'Due date (YYYY-MM-DD, today, tomorrow)')
            
            remaining := fp.finalize() or {
                eprintln('Error parsing flags: ${err}')
                exit(1)
            }
            
            task_title := if title.len > 0 { title } else { remaining.join(' ') }
            
            if task_title.len == 0 {
                eprintln('Error: Task title is required')
                exit(1)
            }
            
            priority := parse_priority(priority_str)
            tags := if tags_str.len > 0 { tags_str.split(',') } else { []string{} }
            due_date := if due_str.len > 0 { parse_date(due_str) } else { none }
            
            task := tm.add_task(task_title, description, priority, tags, due_date) or {
                eprintln('Error adding task: ${err}')
                exit(1)
            }
            
            println('✅ Task added successfully!')
            tm.display_task(task)
        }
        
        'list' {
            filter_str := if args.len > 1 { args[1] } else { 'all' }
            
            mut filter := FilterOptions{}
            
            match filter_str.to_lower() {
                'all' {}
                'pending' { filter.completed = false }
                'completed' { filter.completed = true }
                'today' { filter.due_today = true }
                'overdue' {
                    filter.completed = false
                    // Would need more complex filtering for overdue
                }
                'urgent' { filter.priority = .urgent }
                else {
                    eprintln('Error: Unknown filter "${filter_str}"')
                    eprintln('Valid filters: all, pending, completed, today, overdue, urgent')
                    exit(1)
                }
            }
            
            tasks := tm.filter_tasks(filter)
            tm.display_tasks(tasks)
        }
        
        'show' {
            if args.len < 2 {
                eprintln('Error: Please provide a task ID')
                exit(1)
            }
            
            task_id := args[1].int()
            task := tm.get_task(task_id) or {
                eprintln('Error: Task ${task_id} not found')
                exit(1)
            }
            
            tm.display_task(task)
        }
        
        'complete' {
            if args.len < 2 {
                eprintln('Error: Please provide a task ID')
                exit(1)
            }
            
            task_id := args[1].int()
            tm.complete_task(task_id) or {
                eprintln('Error: ${err}')
                exit(1)
            }
            
            println('✅ Task ${task_id} marked as completed!')
        }
        
        'delete' {
            if args.len < 2 {
                eprintln('Error: Please provide a task ID')
                exit(1)
            }
            
            task_id := args[1].int()
            tm.delete_task(task_id) or {
                eprintln('Error: ${err}')
                exit(1)
            }
            
            println('🗑️  Task ${task_id} deleted successfully!')
        }
        
        'search' {
            if args.len < 2 {
                eprintln('Error: Please provide a search query')
                exit(1)
            }
            
            query := args[1..].join(' ')
            filter := FilterOptions{
                search: query
            }
            
            tasks := tm.filter_tasks(filter)
            println('🔍 Search results for "${query}":')
            tm.display_tasks(tasks)
        }
        
        'summary' {
            tm.display_summary()
        }
        
        'export' {
            export_file := if args.len > 1 { args[1] } else { 'tasks_export.json' }
            
            content := json.encode_pretty(tm.tasks)
            os.write_file(export_file, content) or {
                eprintln('Error exporting tasks: ${err}')
                exit(1)
            }
            
            println('📤 Tasks exported to ${export_file}')
        }
        
        'import' {
            if args.len < 2 {
                eprintln('Error: Please provide import file path')
                exit(1)
            }
            
            import_file := args[1]
            content := os.read_file(import_file) or {
                eprintln('Error reading import file: ${err}')
                exit(1)
            }
            
            imported_tasks := json.decode([]Task, content) or {
                eprintln('Error parsing import file: ${err}')
                exit(1)
            }
            
            // Add imported tasks with new IDs
            for task in imported_tasks {
                tm.add_task(task.title, task.description, task.priority, task.tags, task.due_date) or {
                    eprintln('Error importing task "${task.title}": ${err}')
                    continue
                }
            }
            
            println('📥 Imported ${imported_tasks.len} tasks from ${import_file}')
        }
        
        'config' {
            println('📋 Configuration:')
            println('Data directory: ${tm.config.data_dir}')
            println('Auto save: ${tm.config.auto_save}')
            println('Color output: ${tm.config.color_output}')
            println('Date format: ${tm.config.date_format}')
            println('Max title length: ${tm.config.max_title_len}')
        }
        
        'help' {
            show_help()
        }
        
        else {
            eprintln('Error: Unknown command "${command}"')
            eprintln('Run "vtask help" for usage information')
            exit(1)
        }
    }
}
```

### Building and Using the CLI Application

To build and use this task manager:

```bash
# Clone or create the project
mkdir vtask && cd vtask

# Save the code as main.v
# Then compile it
v -o vtask main.v

# Make it executable and add to PATH (optional)
chmod +x vtask
sudo mv vtask /usr/local/bin/

# Now you can use it anywhere
vtask add "Learn V programming" -d "Complete the tutorial" -p high --due tomorrow
vtask list pending
vtask summary
```

This comprehensive CLI application demonstrates:

- **JSON configuration and data persistence**
- **Command-line argument parsing with flags**
- **Rich text output with colors and formatting**
- **Data filtering and searching**
- **Error handling and validation**
- **File operations and data import/export**
- **Real-world application architecture**

The application is feature-complete and ready for daily use as a task management tool!
}
```
```
```

### Advanced JSON Patterns

```v
// Working with optional fields and custom JSON tags
struct Product {
    id          int    @[json: 'product_id']
    name        string
    price       f64
    description string @[json: 'desc']
    category_id int    @[json: 'category']
    in_stock    bool   @[json: 'available']
    metadata    ?ProductMetadata @[json: 'meta']
}

struct ProductMetadata {
    weight      f64
    dimensions  Dimensions
    tags        []string
}

struct Dimensions {
    length f64
    width  f64
    height f64
}

// JSON validation and error handling
fn validate_and_parse_product(json_str string) !Product {
    product := json.decode(Product, json_str) or {
        return error('Invalid product JSON: ${err}')
    }
    
    // Custom validation
    if product.name.trim_space().len == 0 {
        return error('Product name cannot be empty')
    }
    
    if product.price < 0 {
        return error('Product price cannot be negative')
    }
    
    return product
}

// Batch processing JSON data
fn process_product_batch(json_file string) ! {
    content := os.read_file(json_file)!
    products := json.decode([]Product, content)!
    
    mut total_value := 0.0
    mut in_stock_count := 0
    
    for product in products {
        if product.in_stock {
            in_stock_count++
            total_value += product.price
        }
    }
    
    println('Processed ${products.len} products')
    println('In stock: ${in_stock_count}')
    println('Total value of in-stock items: \$${total_value:.2f}')
}
```

### Fixed size arrays

V also supports arrays with fixed size. Unlike ordinary arrays, their
length is constant. You cannot append elements to them, nor shrink them.
You can only modify their elements in place.

However, access to the elements of fixed size arrays is more efficient,
they need less memory than ordinary arrays, and unlike ordinary arrays,
their data is on the stack, so you may want to use them as buffers if you
do not want additional heap allocations.

Most methods are defined to work on ordinary arrays, not on fixed size arrays.
You can convert a fixed size array to an ordinary array with slicing:

```v
mut fnums := [3]int{} // fnums is a fixed size array with 3 elements.
fnums[0] = 1
fnums[1] = 10
fnums[2] = 100
println(fnums) // => [1, 10, 100]
println(typeof(fnums).name) // => [3]int

fnums2 := [1, 10, 100]! // short init syntax that does the same (the syntax will probably change)

anums := fnums[..] // same as `anums := fnums[0..fnums.len]`
println(anums) // => [1, 10, 100]
println(typeof(anums).name) // => []int
```

Note that slicing will cause the data of the fixed size array to be copied to
the newly created ordinary array.

### Maps

```v
mut m := map[string]int{} // a map with `string` keys and `int` values
m['one'] = 1
m['two'] = 2
println(m['one']) // "1"
println(m['bad_key']) // "0"
println('bad_key' in m) // Use `in` to detect whether such key exists
println(m.keys()) // ['one', 'two']
m.delete('two')
```

Maps can have keys of type string, rune, integer, float or voidptr.

The whole map can be initialized using this short syntax:

```v
numbers := {
	'one': 1
	'two': 2
}
println(numbers)
```

If a key is not found, a zero value is returned by default:

```v
sm := {
	'abc': 'xyz'
}
val := sm['bad_key']
println(val) // ''
```

```v
intm := {
	1: 1234
	2: 5678
}
s := intm[3]
println(s) // 0
```

It's also possible to use an `or {}` block to handle missing keys:

```v
mm := map[string]int{}
val := mm['bad_key'] or { panic('key not found') }
```

You can also check, if a key is present, and get its value, if it was present, in one go:

```v
m := {
	'abc': 'def'
}
if v := m['abc'] {
	println('the map value for that key is: ${v}')
}
```

The same option check applies to arrays:

```v
arr := [1, 2, 3]
large_index := 999
val := arr[large_index] or { panic('out of bounds') }
println(val)
// you can also do this, if you want to *propagate* the access error:
val2 := arr[333]!
println(val2)
```

V also supports nested maps:

```v
mut m := map[string]map[string]int{}
m['greet'] = {
	'Hello': 1
}
m['place'] = {
	'world': 2
}
m['code']['orange'] = 123
print(m)
```

Maps are ordered by insertion, like dictionaries in Python. The order is a
guaranteed language feature. This may change in the future.

See all methods of
[map](https://modules.vlang.io/builtin.html#map)
and
[maps](https://modules.vlang.io/maps.html).

### Map update syntax

As with structs, V lets you initialise a map with an update applied on top of
another map:

```v
const base_map = {
	'a': 4
	'b': 5
}

foo := {
	...base_map
	'b': 88
	'c': 99
}

println(foo) // {'a': 4, 'b': 88, 'c': 99}
```

This is functionally equivalent to cloning the map and updating it, except that
you don't have to declare a mutable variable:

```v failcompile
// same as above (except mutable)
mut foo := base_map.clone()
foo['b'] = 88
foo['c'] = 99
```

## Module imports

For information about creating a module, see [Modules](#modules).

Modules can be imported using the `import` keyword:

```v
import os

fn main() {
	// read text from stdin
	name := os.input('Enter your name: ')
	println('Hello, ${name}!')
}
```

This program can use any public definitions from the `os` module, such
as the `input` function. See the [standard library](https://modules.vlang.io/)
documentation for a list of common modules and their public symbols.

By default, you have to specify the module prefix every time you call an external function.
This may seem verbose at first, but it makes code much more readable
and easier to understand - it's always clear which function from
which module is being called. This is especially useful in large code bases.

Cyclic module imports are not allowed, like in Go.

### Selective imports

You can also import specific functions and types from modules directly:

```v
import os { input }

fn main() {
	// read text from stdin
	name := input('Enter your name: ')
	println('Hello, ${name}!')
}
```

> [!NOTE]
> This will import the module as well. Also, this is not allowed for
> constants - they must always be prefixed.

You can import several specific symbols at once:

```v
import os { input, user_os }

name := input('Enter your name: ')
println('Name: ${name}')
current_os := user_os()
println('Your OS is ${current_os}.')
```
### Module hierarchy

> [!NOTE]
> This section is valid when .v files are not in the project's root directory.

Modules names in .v files, must match the name of their directory.

A .v file `./abc/source.v` must start with `module abc`. All .v files in this directory
belong to the same module `abc`. They should also start with `module abc`.

If you have `abc/def/`, and .v files in both folders, you can `import abc`, but you will have
to `import abc.def` too, to get to the symbols in the subfolder. It is independent.

In `module name` statement, name never repeats directory's hierarchy, but only its directory.
So in `abc/def/source.v` the first line will be `module def`, and not `module abc.def`.

`import module_name` statements must respect file hierarchy, you cannot `import def`, only
`abc.def`

Referring to a module symbol such as a function or const, only needs module name as prefix:

```v ignore
module def

// func is a dummy example function.
pub fn func() {
	println('func')
}
```

can be called like this:

```v ignore
module main

import def

fn main() {
	def.func()
}
```

A function, located in `abc/def/source.v`, is called with `def.func()`, not `abc.def.func()`

This always implies a *single prefix*, whatever sub-module depth. This behavior flattens
modules/sub-modules hierarchy. Should you have two modules with the same name in different
directories, then you should use Module import aliasing (see below).

### Module import aliasing

Any imported module name can be aliased using the `as` keyword:

> [!NOTE]
> This example will not compile unless you have created `mymod/sha256/somename.v`
> (submodule names are determined by their path, not by the names of the .v file(s) in them).

```v failcompile
import crypto.sha256
import mymod.sha256 as mysha256

fn main() {
	v_hash := sha256.sum('hi'.bytes()).hex()
	my_hash := mysha256.sum('hi'.bytes()).hex()
	assert my_hash == v_hash
}
```

You cannot alias an imported function or type.
However, you _can_ redeclare a type.

```v
import time
import math

type MyTime = time.Time

fn (mut t MyTime) century() int {
	return int(1.0 + math.trunc(f64(t.year) * 0.009999794661191))
}

fn main() {
	mut my_time := MyTime{
		year:  2020
		month: 12
		day:   25
	}
	println(time.new(my_time).utc_string())
	println('Century: ${my_time.century()}')
}
```

## Statements & expressions

### If

```v
a := 10
b := 20
if a < b {
	println('${a} < ${b}')
} else if a > b {
	println('${a} > ${b}')
} else {
	println('${a} == ${b}')
}
```

`if` statements are pretty straightforward and similar to most other languages.
Unlike other C-like languages,
there are no parentheses surrounding the condition and the braces are always required.

#### `If` expressions
Unlike C, V does not have a ternary operator, that would allow you to do: `x = c ? 1 : 2` .
Instead, it has a bit more verbose, but also clearer to read, ability to use `if` as an
expression. The direct translation in V of the ternary construct above, assuming `c` is a
boolean condition, would be: `x = if c { 1 } else { 2 }`.

Here is another example:
```v
num := 777
s := if num % 2 == 0 { 'even' } else { 'odd' }
println(s)
// "odd"
```

You can use multiple statements in each of the branches of an `if` expression, followed by a final
value, that will become the value of the entire `if` expression, when it takes that branch:
```v
n := arguments().len
x := if n > 2 {
	dump(arguments())
	42
} else {
	println('something else')
	100
}
dump(x)
```

#### `If` unwrapping
Anywhere you can use `or {}`, you can also use "if unwrapping". This binds the unwrapped value
of an expression to a variable when that expression is not none nor an error.

```v
m := {
	'foo': 'bar'
}

// handle missing keys
if v := m['foo'] {
	println(v) // bar
} else {
	println('not found')
}
```

```v
fn res() !int {
	return 42
}

// functions that return a result type
if v := res() {
	println(v)
}
```

```v
struct User {
	name string
}

arr := [User{'John'}]

// if unwrapping with assignment of a variable
u_name := if v := arr[0] {
	v.name
} else {
	'Unnamed'
}
println(u_name) // John
```

#### Type checks and casts

You can check the current type of a sum type using `is` and its negated form `!is`.

You can do it either in an `if`:

```v cgen
struct Abc {
	val string
}

struct Xyz {
	foo string
}

type Alphabet = Abc | Xyz

x := Alphabet(Abc{'test'}) // sum type
if x is Abc {
	// x is automatically cast to Abc and can be used here
	println(x)
}
if x !is Abc {
	println('Not Abc')
}
```

or using `match`:

```v oksyntax
match x {
	Abc {
		// x is automatically cast to Abc and can be used here
		println(x)
	}
	Xyz {
		// x is automatically cast to Xyz and can be used here
		println(x)
	}
}
```

This works also with struct fields:

```v
struct MyStruct {
	x int
}

struct MyStruct2 {
	y string
}

type MySumType = MyStruct | MyStruct2

struct Abc {
	bar MySumType
}

x := Abc{
	bar: MyStruct{123} // MyStruct will be converted to MySumType type automatically
}
if x.bar is MyStruct {
	// x.bar is automatically cast
	println(x.bar)
} else if x.bar is MyStruct2 {
	new_var := x.bar as MyStruct2
	// ... or you can use `as` to create a type cast an alias manually:
	println(new_var)
}
match x.bar {
	MyStruct {
		// x.bar is automatically cast
		println(x.bar)
	}
	else {}
}
```

Mutable variables can change, and doing a cast would be unsafe.
However, sometimes it's useful to type cast despite mutability.
In such cases the developer must mark the expression with the `mut` keyword
to tell the compiler that they know what they're doing.

It works like this:

```v oksyntax
mut x := MySumType(MyStruct{123})
if mut x is MyStruct {
	// x is cast to MyStruct even if it's mutable
	// without the mut keyword that wouldn't work
	println(x)
}
// same with match
match mut x {
	MyStruct {
		// x is cast to MyStruct even if it's mutable
		// without the mut keyword that wouldn't work
		println(x)
	}
}
```

### Match

```v
os := 'windows'
print('V is running on ')
match os {
	'darwin' { println('macOS.') }
	'linux' { println('Linux.') }
	else { println(os) }
}
```

A match statement is a shorter way to write a sequence of `if - else` statements.
When a matching branch is found, the following statement block will be run.
The else branch will be run when no other branches match.

```v
number := 2
s := match number {
	1 { 'one' }
	2 { 'two' }
	else { 'many' }
}
```

A match statement can also to be used as an `if - else if - else` alternative:

```v
match true {
	2 > 4 { println('if') }
	3 == 4 { println('else if') }
	2 == 2 { println('else if2') }
	else { println('else') }
}
// 'else if2' should be printed
```

or as an `unless` alternative: [unless Ruby](https://www.tutorialspoint.com/ruby/ruby_if_else.htm)

```v
match false {
	2 > 4 { println('if') }
	3 == 4 { println('else if') }
	2 == 2 { println('else if2') }
	else { println('else') }
}
// 'if' should be printed
```

A match expression returns the value of the final expression from the matching branch.

```v
enum Color {
	red
	blue
	green
}

fn is_red_or_blue(c Color) bool {
	return match c {
		.red, .blue { true } // comma can be used to test multiple values
		.green { false }
	}
}
```

A match statement can also be used to branch on the variants of an `enum`
by using the shorthand `.variant_here` syntax. An `else` branch is not allowed
when all the branches are exhaustive.

```v
c := `v`
typ := match c {
	`0`...`9` { 'digit' }
	`A`...`Z` { 'uppercase' }
	`a`...`z` { 'lowercase' }
	else { 'other' }
}
println(typ)
// 'lowercase'
```

A match statement also can match the variant types of a `sumtype`. Note that
in that case, the match is exhaustive, since all variant types are mentioned
explicitly, so there is no need for an `else{}` branch.

```v nofmt
struct Dog {}
struct Cat {}
struct Veasel {}
type Animal = Dog | Cat | Veasel
a := Animal(Veasel{})
match a {
	Dog { println('Bay') }
	Cat { println('Meow') }
	Veasel { println('Vrrrrr-eeee') } // see: https://www.youtube.com/watch?v=qTJEDyj2N0Q
}
```

You can also use ranges as `match` patterns. If the value falls within the range
of a branch, that branch will be executed.

Note that the ranges use `...` (three dots) rather than `..` (two dots). This is
because the range is *inclusive* of the last element, rather than exclusive
(as `..` ranges are). Using `..` in a match branch will throw an error.

```v
const start = 1

const end = 10

c := 2
num := match c {
	start...end {
		1000
	}
	else {
		0
	}
}
println(num)
// 1000
```

Constants can also be used in the range branch expressions.

> [!NOTE]
> `match` as an expression is not usable in `for` loop and `if` statements.

### In operator

`in` allows to check whether an array or a map contains an element.
To do the opposite, use `!in`.

```v
nums := [1, 2, 3]
println(1 in nums) // true
println(4 !in nums) // true
```

> [!NOTE]
> `in` checks if map contains a key, not a value.

```v
m := {
	'one': 1
	'two': 2
}

println('one' in m) // true
println('three' !in m) // true
```

It's also useful for writing boolean expressions that are clearer and more compact:

```v
enum Token {
	plus
	minus
	div
	mult
}

struct Parser {
	token Token
}

parser := Parser{}
if parser.token == .plus || parser.token == .minus || parser.token == .div || parser.token == .mult {
	// ...
}
if parser.token in [.plus, .minus, .div, .mult] {
	// ...
}
```

V optimizes such expressions,
so both `if` statements above produce the same machine code and no arrays are created.

### For loop

V has only one looping keyword: `for`, with several forms.

#### `for`/`in`

This is the most common form. You can use it with an array, map or
numeric range.

##### Array `for`

```v
numbers := [1, 2, 3, 4, 5]
for num in numbers {
	println(num)
}
names := ['Sam', 'Peter']
for i, name in names {
	println('${i}) ${name}')
	// Output: 0) Sam
	//         1) Peter
}
```

The `for value in arr` form is used for going through elements of an array.
If an index is required, an alternative form `for index, value in arr` can be used.

Note that the value is read-only.
If you need to modify the array while looping, you need to declare the element as mutable:

```v
mut numbers := [0, 1, 2]
for mut num in numbers {
	num++
}
println(numbers) // [1, 2, 3]
```

When an identifier is just a single underscore, it is ignored.

##### Custom iterators

Types that implement a `next` method returning an `Option` can be iterated
with a `for` loop.

```v
struct SquareIterator {
	arr []int
mut:
	idx int
}

fn (mut iter SquareIterator) next() ?int {
	if iter.idx >= iter.arr.len {
		return none
	}
	defer {
		iter.idx++
	}
	return iter.arr[iter.idx] * iter.arr[iter.idx]
}

nums := [1, 2, 3, 4, 5]
iter := SquareIterator{
	arr: nums
}
for squared in iter {
	println(squared)
}
```

The code above prints:

```
1
4
9
16
25
```

##### Map `for`

```v
m := {
	'one': 1
	'two': 2
}
for key, value in m {
	println('${key} -> ${value}')
	// Output: one -> 1
	//         two -> 2
}
```

Either key or value can be ignored by using a single underscore as the identifier.

```v
m := {
	'one': 1
	'two': 2
}
// iterate over keys
for key, _ in m {
	println(key)
	// Output: one
	//         two
}
// iterate over values
for _, value in m {
	println(value)
	// Output: 1
	//         2
}
```

##### Range `for`

```v
// Prints '01234'
for i in 0 .. 5 {
	print(i)
}
```

`low..high` means an *exclusive* range, which represents all values
from `low` up to *but not including* `high`.

> [!NOTE]
> This exclusive range notation and zero-based indexing follow principles of
logical consistency and error reduction. As Edsger W. Dijkstra outlines in
'Why Numbering Should Start at Zero'
([EWD831](https://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html)),
zero-based indexing aligns the index with the preceding elements in a sequence,
simplifying handling and minimizing errors, especially with adjacent subsequences.
This logical and efficient approach shapes our language design, emphasizing clarity
and reducing confusion in programming.

#### Condition `for`

```v
mut sum := 0
mut i := 0
for i <= 100 {
	sum += i
	i++
}
println(sum) // "5050"
```

This form of the loop is similar to `while` loops in other languages.
The loop will stop iterating once the boolean condition evaluates to false.
Again, there are no parentheses surrounding the condition, and the braces are always required.

#### Bare `for`

```v
mut num := 0
for {
	num += 2
	if num >= 10 {
		break
	}
}
println(num) // "10"
```

The condition can be omitted, resulting in an infinite loop.

#### C `for`

```v
for i := 0; i < 10; i += 2 {
	// Don't print 6
	if i == 6 {
		continue
	}
	println(i)
}
```

Finally, there's the traditional C style `for` loop. It's safer than the `while` form
because with the latter it's easy to forget to update the counter and get
stuck in an infinite loop.

Here `i` doesn't need to be declared with `mut` since it's always going to be mutable by definition.

#### Labelled break & continue

`break` and `continue` control the innermost `for` loop by default.
You can also use `break` and `continue` followed by a label name to refer to an outer `for`
loop:

```v
outer: for i := 4; true; i++ {
	println(i)
	for {
		if i < 7 {
			continue outer
		} else {
			break outer
		}
	}
}
```

The label must immediately precede the outer loop.
The above code prints:

```
4
5
6
7
```

### Defer

A defer statement defers the execution of a block of statements
until the surrounding function returns.

```v
import os

fn read_log() {
	mut ok := false
	mut f := os.open('log.txt') or { panic(err) }
	defer {
		f.close()
	}
	// ...
	if !ok {
		// defer statement will be called here, the file will be closed
		return
	}
	// ...
	// defer statement will be called here, the file will be closed
}
```

If the function returns a value the `defer` block is executed *after* the return
expression is evaluated:

```v
import os

enum State {
	normal
	write_log
	return_error
}

// write log file and return number of bytes written

fn write_log(s State) !int {
	mut f := os.create('log.txt')!
	defer {
		f.close()
	}
	if s == .write_log {
		// `f.close()` will be called after `f.write()` has been
		// executed, but before `write_log()` finally returns the
		// number of bytes written to `main()`
		return f.writeln('This is a log file')
	} else if s == .return_error {
		// the file will be closed after the `error()` function
		// has returned - so the error message will still report
		// it as open
		return error('nothing written; file open: ${f.is_opened}')
	}
	// the file will be closed here, too
	return 0
}

fn main() {
	n := write_log(.return_error) or {
		println('Error: ${err}')
		0
	}
	println('${n} bytes written')
}
```

To access the result of the function inside a `defer` block the `$res()` expression can be used.
`$res()` is only used when a single value is returned, while on multi-return the `$res(idx)`
is parameterized.

```v ignore
fn (mut app App) auth_middleware() bool {
	defer {
		if !$res() {
			app.response.status_code = 401
			app.response.body = 'Unauthorized'
		}
	}
	header := app.get_header('Authorization')
	if header == '' {
		return false
	}
	return true
}

fn (mut app App) auth_with_user_middleware() (bool, string) {
	defer {
		if !$res(0) {
			app.response.status_code = 401
			app.response.body = 'Unauthorized'
		} else {
			app.user = $res(1)
		}
	}
	header := app.get_header('Authorization')
	if header == '' {
		return false, ''
	}
	return true, 'TestUser'
}
```

### Goto

V allows unconditionally jumping to a label with `goto`. The label name must be contained
within the same function as the `goto` statement. A program may `goto` a label outside
or deeper than the current scope. `goto` allows jumping past variable initialization or
jumping back to code that accesses memory that has already been freed, so it requires
`unsafe`.

```v ignore
if x {
	// ...
	if y {
		unsafe {
			goto my_label
		}
	}
	// ...
}
my_label:
```

`goto` should be avoided, particularly when `for` can be used instead.
[Labelled break/continue](#labelled-break--continue) can be used to break out of
a nested loop, and those do not risk violating memory-safety.

## Structs

```v
struct Point {
	x int
	y int
}

mut p := Point{
	x: 10
	y: 20
}
println(p.x) // Struct fields are accessed using a dot
// Alternative literal syntax
p = Point{10, 20}
assert p.x == 10
```

Struct fields can re-use reserved keywords:

```v
struct Employee {
	type string
	name string
}

employee := Employee{
	type: 'FTE'
	name: 'John Doe'
}
println(employee.type)
```

### Heap structs

Structs are allocated on the stack. To allocate a struct on the heap
and get a [reference](#references) to it, use the `&` prefix:

```v
struct Point {
	x int
	y int
}

p := &Point{10, 10}
// References have the same syntax for accessing fields
println(p.x)
```

The type of `p` is `&Point`. It's a [reference](#references) to `Point`.
References are similar to Go pointers and C++ references.

```v
struct Foo {
mut:
	x int
}

fa := Foo{1}
mut a := fa
a.x = 2
assert fa.x == 1
assert a.x == 2

// fb := Foo{ 1 }
// mut b := &fb  // error: `fb` is immutable, cannot have a mutable reference to it
// b.x = 2

mut fc := Foo{1}
mut c := &fc
c.x = 2
assert fc.x == 2
assert c.x == 2
println(fc) // Foo{ x: 2 }
println(c) // &Foo{ x: 2 } // Note `&` prefixed.
```

see also [Stack and Heap](#stack-and-heap)

### Default field values

```v
struct Foo {
	n   int    // n is 0 by default
	s   string // s is '' by default
	a   []int  // a is `[]int{}` by default
	pos int = -1 // custom default value
}
```

All struct fields are zeroed by default during the creation of the struct.
Array and map fields are allocated.
In case of reference value, see [here](#structs-with-reference-fields).

It's also possible to define custom default values.

### Required fields

```v
struct Foo {
	n int @[required]
}
```

You can mark a struct field with the `[required]` [attribute](#attributes), to tell V that
that field must be initialized when creating an instance of that struct.

This example will not compile, since the field `n` isn't explicitly initialized:

```v failcompile
_ = Foo{}
```

<a id='short-struct-initialization-syntax'></a>

### Short struct literal syntax

```v
struct Point {
	x int
	y int
}

mut p := Point{
	x: 10
	y: 20
}
p = Point{
	x: 30
	y: 4
}
assert p.y == 4
//
// array: first element defines type of array
points := [Point{10, 20}, Point{20, 30}, Point{40, 50}]
println(points) // [Point{x: 10, y: 20}, Point{x: 20, y: 30}, Point{x: 40,y: 50}]
```

Omitting the struct name also works for returning a struct literal or passing one
as a function argument.

### Struct update syntax

V makes it easy to return a modified version of an object:

```v
struct User {
	name          string
	age           int
	is_registered bool
}

fn register(u User) User {
	return User{
		...u
		is_registered: true
	}
}

mut user := User{
	name: 'abc'
	age:  23
}
user = register(user)
println(user)
```

### Trailing struct literal arguments

V doesn't have default function arguments or named arguments, for that trailing struct
literal syntax can be used instead:

```v
@[params]
struct ButtonConfig {
	text        string
	is_disabled bool
	width       int = 70
	height      int = 20
}

struct Button {
	text   string
	width  int
	height int
}

fn new_button(c ButtonConfig) &Button {
	return &Button{
		width:  c.width
		height: c.height
		text:   c.text
	}
}

button := new_button(text: 'Click me', width: 100)
// the height is unset, so it's the default value
assert button.height == 20
```

As you can see, both the struct name and braces can be omitted, instead of:

```v oksyntax nofmt
new_button(ButtonConfig{text:'Click me', width:100})
```

This only works for functions that take a struct for the last argument.

> [!NOTE]
> Note the `[params]` tag is used to tell V, that the trailing struct parameter
> can be omitted *entirely*, so that you can write `button := new_button()`.
> Without it, you have to specify *at least* one of the field names, even if it
> has its default value, otherwise the compiler will produce this error message,
> when you call the function with no parameters:
> `error: expected 1 arguments, but got 0`.

### Access modifiers

Struct fields are private and immutable by default (making structs immutable as well).
Their access modifiers can be changed with
`pub` and `mut`. In total, there are 5 possible options:

```v
struct Foo {
	a int // private immutable (default)
mut:
	b int // private mutable
	c int // (you can list multiple fields with the same access modifier)
pub:
	d int // public immutable (readonly)
pub mut:
	e int // public, but mutable only in parent module
__global:
	// (not recommended to use, that's why the 'global' keyword starts with __)
	f int // public and mutable both inside and outside parent module
}
```

Private fields are available only inside the same [module](#modules), any attempt
to directly access them from another module will cause an error during compilation.
Public immutable fields are readonly everywhere.

### Anonymous structs

V supports anonymous structs: structs that don't have to be declared separately
with a struct name.

```v
struct Book {
	author struct {
		name string
		age  int
	}

	title string
}

book := Book{
	author: struct {
		name: 'Samantha Black'
		age:  24
	}
}
assert book.author.name == 'Samantha Black'
assert book.author.age == 24
```

### Static type methods

V now supports static type methods like `User.new()`. These are defined on a struct via
`fn [Type name].[function name]` and allow to organize all functions related to a struct:

```v oksyntax
struct User {}

fn User.new() User {
	return User{}
}

user := User.new()
```

This is an alternative to factory functions like `fn new_user() User {}` and should be used
instead.

> [!NOTE]
> Note, that these are not constructors, but simple functions. V doesn't have constructors or
> classes.

### `[noinit]` structs

V supports `[noinit]` structs, which are structs that cannot be initialised outside the module
they are defined in. They are either meant to be used internally or they can be used externally
through _factory functions_.

For an example, consider the following source in a directory `sample`:

```v oksyntax
module sample

@[noinit]
pub struct Information {
pub:
	data string
}

pub fn new_information(data string) !Information {
	if data.len == 0 || data.len > 100 {
		return error('data must be between 1 and 100 characters')
	}
	return Information{
		data: data
	}
}
```

Note that `new_information` is a _factory_ function. Now when we want to use this struct
outside the module:

```v okfmt
import sample

fn main() {
	// This doesn't work when the [noinit] attribute is present:
	// info := sample.Information{
	// 	data: 'Sample information.'
	// }

	// Use this instead:
	info := sample.new_information('Sample information.')!

	println(info)
}
```

### Methods

```v
struct User {
	age int
}

fn (u User) can_register() bool {
	return u.age > 16
}

user := User{
	age: 10
}
println(user.can_register()) // "false"
user2 := User{
	age: 20
}
println(user2.can_register()) // "true"
```

V doesn't have classes, but you can define methods on types.
A method is a function with a special receiver argument.
The receiver appears in its own argument list between the `fn` keyword and the method name.
Methods must be in the same module as the receiver type.

In this example, the `can_register` method has a receiver of type `User` named `u`.
The convention is not to use receiver names like `self` or `this`,
but a short, preferably one letter long, name.

### Embedded structs

V supports embedded structs.

```v
struct Size {
mut:
	width  int
	height int
}

fn (s &Size) area() int {
	return s.width * s.height
}

struct Button {
	Size
	title string
}
```

With embedding, the struct `Button` will automatically get all the fields and methods from
the struct `Size`, which allows you to do:

```v oksyntax
mut button := Button{
	title:  'Click me'
	height: 2
}

button.width = 3
assert button.area() == 6
assert button.Size.area() == 6
print(button)
```

output :

```
Button{
    Size: Size{
        width: 3
        height: 2
    }
    title: 'Click me'
}
```

Unlike inheritance, you cannot type cast between structs and embedded structs
(the embedding struct can also have its own fields, and it can also embed multiple structs).

If you need to access embedded structs directly, use an explicit reference like `button.Size`.

Conceptually, embedded structs are similar to [mixin](https://en.wikipedia.org/wiki/Mixin)s
in OOP, *NOT* base classes.

You can also initialize an embedded struct:

```v oksyntax
mut button := Button{
	Size: Size{
		width:  3
		height: 2
	}
}
```

or assign values:

```v oksyntax
button.Size = Size{
	width:  4
	height: 5
}
```

If multiple embedded structs have methods or fields with the same name, or if methods or fields
with the same name are defined in the struct, you can call methods or assign to variables in
the embedded struct like `button.Size.area()`.
When you do not specify the embedded struct name, the method of the outermost struct will be
targeted.

## Unions

Just like structs, unions support embedding.

```v
struct Rgba32_Component {
	r u8
	g u8
	b u8
	a u8
}

union Rgba32 {
	Rgba32_Component
	value u32
}

clr1 := Rgba32{
	value: 0x008811FF
}

clr2 := Rgba32{
	Rgba32_Component: Rgba32_Component{
		a: 128
	}
}

sz := sizeof(Rgba32)
unsafe {
	println('Size: ${sz}B,clr1.b: ${clr1.b},clr2.b: ${clr2.b}')
}
```

Output: `Size: 4B, clr1.b: 136, clr2.b: 0`

Union member access must be performed in an `unsafe` block.

> [!NOTE]
> Embedded struct arguments are not necessarily stored in the order listed.

## Functions 2

### Immutable function args by default

In V function arguments are immutable by default, and mutable args have to be
marked on call.

Since there are also no globals, that means that the return values of the functions,
are a function of their arguments only, and their evaluation has no side effects
(unless the function uses I/O).

Function arguments are immutable by default, even when [references](#references) are passed.

> [!NOTE]
> However, V is not a purely functional language.

There is a compiler flag to enable global variables (`-enable-globals`), but this is
intended for low-level applications like kernels and drivers.

### Mutable arguments

It is possible to modify function arguments by declaring them with the keyword `mut`:

```v
struct User {
	name string
mut:
	is_registered bool
}

fn (mut u User) register() {
	u.is_registered = true
}

mut user := User{}
println(user.is_registered) // "false"
user.register()
println(user.is_registered) // "true"
```

In this example, the receiver (which is just the first argument) is explicitly marked as mutable,
so `register()` can change the user object. The same works with non-receiver arguments:

```v
fn multiply_by_2(mut arr []int) {
	for i in 0 .. arr.len {
		arr[i] *= 2
	}
}

mut nums := [1, 2, 3]
multiply_by_2(mut nums)
println(nums)
// "[2, 4, 6]"
```

Note that you have to add `mut` before `nums` when calling this function. This makes
it clear that the function being called will modify the value.

It is preferable to return values instead of modifying arguments,
e.g. `user = register(user)` (or `user.register()`) instead of `register(mut user)`.
Modifying arguments should only be done in performance-critical parts of your application
to reduce allocations and copying.

For this reason V doesn't allow the modification of arguments with primitive types (e.g. integers).
Only more complex types such as arrays and maps may be modified.

### Variable number of arguments
V supports functions that receive an arbitrary, variable amounts of arguments, denoted with the
`...` prefix.
Below, `a ...int` refers to an arbitrary amount of parameters that will be collected
into an array named `a`.

```v
fn sum(a ...int) int {
	mut total := 0
	for x in a {
		total += x
	}
	return total
}

println(sum()) // 0
println(sum(1)) // 1
println(sum(2, 3)) // 5
// using array decomposition
a := [2, 3, 4]
println(sum(...a)) // <-- using prefix ... here. output: 9
b := [5, 6, 7]
println(sum(...b)) // output: 18
```

### Anonymous & higher order functions

```v
fn sqr(n int) int {
	return n * n
}

fn cube(n int) int {
	return n * n * n
}

fn run(value int, op fn (int) int) int {
	return op(value)
}

fn main() {
	// Functions can be passed to other functions
	println(run(5, sqr)) // "25"
	// Anonymous functions can be declared inside other functions:
	double_fn := fn (n int) int {
		return n + n
	}
	println(run(5, double_fn)) // "10"
	// Functions can be passed around without assigning them to variables:
	res := run(5, fn (n int) int {
		return n + n
	})
	println(res) // "10"
	// You can even have an array/map of functions:
	fns := [sqr, cube]
	println(fns[0](10)) // "100"
	fns_map := {
		'sqr':  sqr
		'cube': cube
	}
	println(fns_map['cube'](2)) // "8"
}
```

### Closures

V supports closures too.
This means that anonymous functions can inherit variables from the scope they were created in.
They must do so explicitly by listing all variables that are inherited.

```v oksyntax
my_int := 1
my_closure := fn [my_int] () {
	println(my_int)
}
my_closure() // prints 1
```

Inherited variables are copied when the anonymous function is created.
This means that if the original variable is modified after the creation of the function,
the modification won't be reflected in the function.

```v oksyntax
mut i := 1
func := fn [i] () int {
	return i
}
println(func() == 1) // true
i = 123
println(func() == 1) // still true
```

However, the variable can be modified inside the anonymous function.
The change won't be reflected outside, but will be in the later function calls.

```v oksyntax
fn new_counter() fn () int {
	mut i := 0
	return fn [mut i] () int {
		i++
		return i
	}
}

c := new_counter()
println(c()) // 1
println(c()) // 2
println(c()) // 3
```

If you need the value to be modified outside the function, use a reference.

```v oksyntax
mut i := 0
mut ref := &i
print_counter := fn [ref] () {
	println(*ref)
}

print_counter() // 0
i = 10
print_counter() // 10
```

### Parameter evaluation order

The evaluation order of the parameters of function calls is *NOT* guaranteed.
Take for example the following program:

```v
fn f(a1 int, a2 int, a3 int) {
	dump(a1 + a2 + a3)
}

fn main() {
	f(dump(100), dump(200), dump(300))
}
```

V currently does not guarantee that it will print 100, 200, 300 in that order.
The only guarantee is that 600 (from the body of `f`) will be printed after all of them.

This *may* change in V 1.0 .

## References

```v
struct Foo {}

fn (foo Foo) bar_method() {
	// ...
}

fn bar_function(foo Foo) {
	// ...
}
```

If a function argument is immutable (like `foo` in the examples above)
V can pass it either by value or by reference. The compiler will decide,
and the developer doesn't need to think about it.

You no longer need to remember whether you should pass the struct by value
or by reference.

You can ensure that the struct is always passed by reference by
adding `&`:

```v
struct Foo {
	abc int
}

fn (foo &Foo) bar() {
	println(foo.abc)
}
```

`foo` is still immutable and can't be changed. For that,
`(mut foo Foo)` must be used.

In general, V's references are similar to Go pointers and C++ references.
For example, a generic tree structure definition would look like this:

```v
struct Node[T] {
	val   T
	left  &Node[T]
	right &Node[T]
}
```

To dereference a reference, use the `*` operator, just like in C.

## Constants

```v
const pi = 3.14
const world = '世界'

println(pi)
println(world)
```

Constants are declared with `const`. They can only be defined
at the module level (outside of functions).
Constant values can never be changed. You can also declare a single
constant separately:

```v
const e = 2.71828
```

V constants are more flexible than in most languages. You can assign more complex values:

```v
struct Color {
	r int
	g int
	b int
}

fn rgb(r int, g int, b int) Color {
	return Color{
		r: r
		g: g
		b: b
	}
}

const numbers = [1, 2, 3]
const red = Color{
	r: 255
	g: 0
	b: 0
}
// evaluate function call at compile time*
const blue = rgb(0, 0, 255)

println(numbers)
println(red)
println(blue)
```

\* WIP - for now function calls are evaluated at program start-up

Global variables are not normally allowed, so this can be really useful.

**Modules**

Constants can be made public with `pub const`:

```v oksyntax
module mymodule

pub const golden_ratio = 1.61803

fn calc() {
	println(golden_ratio)
}
```

The `pub` keyword is only allowed before the `const` keyword and cannot be used inside
a `const ( )` block.

Outside from module main all constants need to be prefixed with the module name.

### Required module prefix

When naming constants, `snake_case` must be used. In order to distinguish consts
from local variables, the full path to consts must be specified. For example,
to access the PI const, full `math.pi` name must be used both outside the `math`
module, and inside it. That restriction is relaxed only for the `main` module
(the one containing your `fn main()`), where you can use the unqualified name of
constants defined there, i.e. `numbers`, rather than `main.numbers`.

vfmt takes care of this rule, so you can type `println(pi)` inside the `math` module,
and vfmt will automatically update it to `println(math.pi)`.

<!--
Many people prefer all caps consts: `TOP_CITIES`. This wouldn't work
well in V, because consts are a lot more powerful than in other languages.
They can represent complex structures, and this is used quite often since there
are no globals:

```v oksyntax
println('Top cities: ${top_cities.filter(.usa)}')
```
-->

## Builtin functions

Some functions are builtin like `println`. Here is the complete list:

```v ignore
fn print(s string) // prints anything on stdout
fn println(s string) // prints anything and a newline on stdout

fn eprint(s string) // same as print(), but uses stderr
fn eprintln(s string) // same as println(), but uses stderr

fn exit(code int) // terminates the program with a custom error code
fn panic(s string) // prints a message and backtraces on stderr, and terminates the program with error code 1
fn print_backtrace() // prints backtraces on stderr
```

> [!NOTE]
> Although the `print` functions take a string, V accepts other printable types too.
> See below for details.

There is also a special built-in function called [`dump`](#dumping-expressions-at-runtime).

### println

`println` is a simple yet powerful builtin function, that can print anything:
strings, numbers, arrays, maps, structs.

```v
struct User {
	name string
	age  int
}

println(1) // "1"
println('hi') // "hi"
println([1, 2, 3]) // "[1, 2, 3]"
println(User{ name: 'Bob', age: 20 }) // "User{name:'Bob', age:20}"
```

See also [String interpolation](#string-interpolation).

<a id='custom-print-of-types'></a>

### Printing custom types

If you want to define a custom print value for your type, simply define a
`str() string` method:

```v
struct Color {
	r int
	g int
	b int
}

pub fn (c Color) str() string {
	return '{${c.r}, ${c.g}, ${c.b}}'
}

red := Color{
	r: 255
	g: 0
	b: 0
}
println(red)
```

### Dumping expressions at runtime

You can dump/trace the value of any V expression using `dump(expr)`.
For example, save this code sample as `factorial.v`, then run it with
`v run factorial.v`:

```v
fn factorial(n u32) u32 {
	if dump(n <= 1) {
		return dump(1)
	}
	return dump(n * factorial(n - 1))
}

fn main() {
	println(factorial(5))
}
```

You will get:

```
[factorial.v:2] n <= 1: false
[factorial.v:2] n <= 1: false
[factorial.v:2] n <= 1: false
[factorial.v:2] n <= 1: false
[factorial.v:2] n <= 1: true
[factorial.v:3] 1: 1
[factorial.v:5] n * factorial(n - 1): 2
[factorial.v:5] n * factorial(n - 1): 6
[factorial.v:5] n * factorial(n - 1): 24
[factorial.v:5] n * factorial(n - 1): 120
120
```

Note that `dump(expr)` will trace both the source location,
the expression itself, and the expression value.

## Modules

Every file in the root of a folder is part of the same module.
Simple programs don't need to specify module name, in which case it defaults to 'main'.

See [symbol visibility](#symbol-visibility), [Access modifiers](#access-modifiers).

### Create modules

V is a very modular language. Creating reusable modules is encouraged and is
quite easy to do.
To create a new module, create a directory with your module's name containing
.v files with code:

```shell
cd ~/code/modules
mkdir mymodule
vim mymodule/myfile.v
```

```v failcompile
// myfile.v
module mymodule

// To export a function we have to use `pub`
pub fn say_hi() {
	println('hello from mymodule!')
}
```
All items inside a module can be used between the files of a module regardless of whether or
not they are prefaced with the `pub` keyword.
```v failcompile
// myfile2.v
module mymodule

pub fn say_hi_and_bye() {
	say_hi() // from myfile.v
	println('goodbye from mymodule')
}
```

You can now use `mymodule` in your code:

```v failcompile
import mymodule

fn main() {
	mymodule.say_hi()
	mymodule.say_hi_and_bye()
}
```

* Module names should be short, under 10 characters.
* Module names must use `snake_case`.
* Circular imports are not allowed.
* You can have as many .v files in a module as you want.
* You can create modules anywhere.
* All modules are compiled statically into a single executable.

### Special considerations for project folders

For the top level project folder (the one, compiled with `v .`), and *only*
that folder, you can have several .v files, that may be mentioning different modules
with `module main`, `module abc` etc

This is to ease the prototyping workflow in that folder:
- you can start developing some new project with a single .v file
- split functionality as necessary to different .v files in the same folder
- when that makes logical sense to be further organised, put them into their own directory module.

Note that in ordinary modules, all .v files must start with `module name_of_folder`.

### `init` functions

If you want a module to automatically call some setup/initialization code when it is imported,
you can define a module `init` function:

```v
fn init() {
	// your setup code here ...
}
```

The `init` function cannot be public - it will be called automatically by V, *just once*, no matter
how many times the module was imported in your program. This feature is particularly useful for
initializing a C library.

### `cleanup` functions

If you want a module to automatically call some cleanup/deinitialization code, when your program
ends, you can define a module `cleanup` function:

```v
fn cleanup() {
	// your deinitialisation code here ...
}
```

Just like the `init` function, the `cleanup` function for a module cannot be public - it will be
called automatically, when your program ends, once per module, even if the module was imported
transitively by other modules several times, in the reverse order of the init calls.

## Type Declarations

### Type aliases

To define a new type `NewType` as an alias for `ExistingType`,
do `type NewType = ExistingType`.<br/>
This is a special case of a [sum type](#sum-types) declaration.

### Enums

An enum is a group of constant integer values, each having its own name,
whose values start at 0 and increase by 1 for each name listed.
For example:
```v
enum Color as u8 {
	red   // the default start value is 0
	green // the value is automatically incremented to 1
	blue  // the final value is now 2
}

mut color := Color.red
// V knows that `color` is a `Color`. No need to use `color = Color.green` here.
color = .green
println(color) // "green"
match color {
	.red { println('the color was red') }
	.green { println('the color was green') }
	.blue { println('the color was blue') }
}
println(int(color)) // prints 1
```

The enum type can be any integer type, but can be omitted, if it is `int`: `enum Color {`.

Enum match must be exhaustive or have an `else` branch.
This ensures that if a new enum field is added, it's handled everywhere in the code.

Enum fields can re-use reserved keywords:

```v
enum Color {
	none
	red
	green
	blue
}

color := Color.none
println(color)
```

Integers may be assigned to enum fields.

```v
enum Grocery {
	apple
	orange = 5
	pear
}

g1 := int(Grocery.apple)
g2 := int(Grocery.orange)
g3 := int(Grocery.pear)
println('Grocery IDs: ${g1}, ${g2}, ${g3}')
```

Output: `Grocery IDs: 0, 5, 6`.

Operations are not allowed on enum variables; they must be explicitly cast to `int`.

Enums can have methods, just like structs.

```v
enum Cycle {
	one
	two
	three
}

fn (c Cycle) next() Cycle {
	match c {
		.one {
			return .two
		}
		.two {
			return .three
		}
		.three {
			return .one
		}
	}
}

mut c := Cycle.one
for _ in 0 .. 10 {
	println(c)
	c = c.next()
}
```

Output:

```
one
two
three
one
two
three
one
two
three
one
```

Enums can be created from string or integer value and converted into string

```v
enum Cycle {
	one
	two = 2
	three
}

// Create enum from value
println(Cycle.from(10) or { Cycle.three })
println(Cycle.from('two')!)

// Convert an enum value to a string
println(Cycle.one.str())
```

Output:

```
three
two
one
```

### Function Types

You can use type aliases for naming specific function signatures - for
example:

```v
type Filter = fn (string) string
```

This works like any other type - for example, a function can accept an
argument of a function type:

```v
type Filter = fn (string) string

fn filter(s string, f Filter) string {
	return f(s)
}
```

V has duck-typing, so functions don't need to declare compatibility with
a function type - they just have to be compatible:

```v
fn uppercase(s string) string {
	return s.to_upper()
}

// now `uppercase` can be used everywhere where Filter is expected
```

Compatible functions can also be explicitly cast to a function type:

```v oksyntax
my_filter := Filter(uppercase)
```

The cast here is purely informational - again, duck-typing means that the
resulting type is the same without an explicit cast:

```v oksyntax
my_filter := uppercase
```

You can pass the assigned function as an argument:

```v oksyntax
println(filter('Hello world', my_filter)) // prints `HELLO WORLD`
```

And you could of course have passed it directly as well, without using a
local variable:

```v oksyntax
println(filter('Hello world', uppercase))
```

And this works with anonymous functions as well:

```v oksyntax
println(filter('Hello world', fn (s string) string {
	return s.to_upper()
}))
```

You can see the complete
[example here](https://github.com/vlang/v/tree/master/examples/function_types.v).

### Interfaces

```v
// interface-example.1
struct Dog {
	breed string
}

fn (d Dog) speak() string {
	return 'woof'
}

struct Cat {
	breed string
}

fn (c Cat) speak() string {
	return 'meow'
}

// unlike Go, but like TypeScript, V's interfaces can define both fields and methods.
interface Speaker {
	breed string
	speak() string
}

fn main() {
	dog := Dog{'Leonberger'}
	cat := Cat{'Siamese'}

	mut arr := []Speaker{}
	arr << dog
	arr << cat
	for item in arr {
		println('a ${item.breed} says: ${item.speak()}')
	}
}
```

#### Implement an interface

A type implements an interface by implementing its methods and fields.

An interface can have a `mut:` section. Implementing types will need
to have a `mut` receiver, for methods declared in the `mut:` section
of an interface.

```v
// interface-example.2
module main

interface Foo {
	write(string) string
}

// => the method signature of a type, implementing interface Foo should be:
// `fn (s Type) write(a string) string`

interface Bar {
mut:
	write(string) string
}

// => the method signature of a type, implementing interface Bar should be:
// `fn (mut s Type) write(a string) string`

struct MyStruct {}

// MyStruct implements the interface Foo, but *not* interface Bar
fn (s MyStruct) write(a string) string {
	return a
}

fn main() {
	s1 := MyStruct{}
	fn1(s1)
	// fn2(s1) -> compile error, since MyStruct does not implement Bar
}

fn fn1(s Foo) {
	println(s.write('Foo'))
}

// fn fn2(s Bar) { // does not match
//      println(s.write('Foo'))
// }
```

There is an **optional** `implements` keyword for explicit declaration
of intent, which applies to `struct` declarations.

```v
struct PathError implements IError {
	Error
	path string
}

fn (err PathError) msg() string {
	return 'Failed to open path: ${err.path}'
}

fn try_open(path string) ! {
	return PathError{
		path: path
	}
}

fn main() {
	try_open('/tmp') or { panic(err) }
}
```

#### Casting an interface

We can test the underlying type of an interface using dynamic cast operators.
> [!NOTE]
> Dynamic cast converts variable `s` into a pointer inside the `if` statements in this example:

```v oksyntax
// interface-example.3 (continued from interface-example.1)
interface Something {}

fn announce(s Something) {
	if s is Dog {
		println('a ${s.breed} dog') // `s` is automatically cast to `Dog` (smart cast)
	} else if s is Cat {
		println('a cat speaks ${s.speak()}')
	} else {
		println('something else')
	}
}

fn main() {
	dog := Dog{'Leonberger'}
	cat := Cat{'Siamese'}
	announce(dog)
	announce(cat)
}
```

```v
// interface-example.4
interface IFoo {
	foo()
}

interface IBar {
	bar()
}

// implements only IFoo
struct SFoo {}

fn (sf SFoo) foo() {}

// implements both IFoo and IBar
struct SFooBar {}

fn (sfb SFooBar) foo() {}

fn (sfb SFooBar) bar() {
	dump('This implements IBar')
}

fn main() {
	mut arr := []IFoo{}
	arr << SFoo{}
	arr << SFooBar{}

	for a in arr {
		dump(a)
		// In order to execute instances that implements IBar.
		if a is IBar {
			a.bar()
		}
	}
}
```

For more information, see [Dynamic casts](#dynamic-casts).

#### Interface method definitions

Also unlike Go, an interface can have its own methods, similar to how
structs can have their methods. These 'interface methods' do not have
to be implemented, by structs which implement that interface.
They are just a convenient way to write `i.some_function()` instead of
`some_function(i)`, similar to how struct methods can be looked at, as
a convenience for writing `s.xyz()` instead of `xyz(s)`.

> [!NOTE]
> This feature is NOT a "default implementation" like in C#.

For example, if a struct `cat` is wrapped in an interface `a`, that has
implemented a method with the same name `speak`, as a method implemented by
the struct, and you do `a.speak()`, *only* the interface method is called:

```v
interface Adoptable {}

fn (a Adoptable) speak() string {
	return 'adopt me!'
}

struct Cat {}

fn (c Cat) speak() string {
	return 'meow!'
}

struct Dog {}

fn main() {
	cat := Cat{}
	assert dump(cat.speak()) == 'meow!'

	a := Adoptable(cat)
	assert dump(a.speak()) == 'adopt me!' // call Adoptable's `speak`
	if a is Cat {
		// Inside this `if` however, V knows that `a` is not just any
		// kind of Adoptable, but actually a Cat, so it will use the
		// Cat `speak`, NOT the Adoptable `speak`:
		dump(a.speak()) // meow!
	}

	b := Adoptable(Dog{})
	assert dump(b.speak()) == 'adopt me!' // call Adoptable's `speak`
	// if b is Dog {
	// 	dump(b.speak()) // error: unknown method or field: Dog.speak
	// }
}
```

#### Embedded interface

Interfaces support embedding, just like structs:

```v
pub interface Reader {
mut:
	read(mut buf []u8) ?int
}

pub interface Writer {
mut:
	write(buf []u8) ?int
}

// ReaderWriter embeds both Reader and Writer.
// The effect is the same as copy/pasting all of the
// Reader and all of the Writer methods/fields into
// ReaderWriter.
pub interface ReaderWriter {
	Reader
	Writer
}
```

### Sum types

A sum type instance can hold a value of several different types. Use the `type`
keyword to declare a sum type:

```v
struct Moon {}

struct Mars {}

struct Venus {}

type World = Mars | Moon | Venus

sum := World(Moon{})
assert sum.type_name() == 'Moon'
println(sum)
```

The built-in method `type_name` returns the name of the currently held
type.

With sum types you could build recursive structures and write concise but powerful code on them.

```v
// V's binary tree
struct Empty {}

struct Node {
	value f64
	left  Tree
	right Tree
}

type Tree = Empty | Node

// sum up all node values

fn sum(tree Tree) f64 {
	return match tree {
		Empty { 0 }
		Node { tree.value + sum(tree.left) + sum(tree.right) }
	}
}

fn main() {
	left := Node{0.2, Empty{}, Empty{}}
	right := Node{0.3, Empty{}, Node{0.4, Empty{}, Empty{}}}
	tree := Node{0.5, left, right}
	println(sum(tree)) // 0.2 + 0.3 + 0.4 + 0.5 = 1.4
}
```

#### Dynamic casts

To check whether a sum type instance holds a certain type, use `sum is Type`.
To cast a sum type to one of its variants you can use `sum as Type`:

```v
struct Moon {}

struct Mars {}

struct Venus {}

type World = Mars | Moon | Venus

fn (m Mars) dust_storm() bool {
	return true
}

fn main() {
	mut w := World(Moon{})
	assert w is Moon
	w = Mars{}
	// use `as` to access the Mars instance
	mars := w as Mars
	if mars.dust_storm() {
		println('bad weather!')
	}
}
```

`as` will panic if `w` doesn't hold a `Mars` instance.
A safer way is to use a smart cast.

#### Smart casting

```v oksyntax
if w is Mars {
	assert typeof(w).name == 'Mars'
	if w.dust_storm() {
		println('bad weather!')
	}
}
```

`w` has type `Mars` inside the body of the `if` statement. This is
known as *flow-sensitive typing*.
If `w` is a mutable identifier, it would be unsafe if the compiler smart casts it without a warning.
That's why you have to declare a `mut` before the `is` expression:

```v ignore
if mut w is Mars {
	assert typeof(w).name == 'Mars'
	if w.dust_storm() {
		println('bad weather!')
	}
}
```

Otherwise `w` would keep its original type.
> This works for both simple variables and complex expressions like `user.name`

#### Matching sum types

You can also use `match` to determine the variant:

```v
struct Moon {}

struct Mars {}

struct Venus {}

type World = Mars | Moon | Venus

fn open_parachutes(n int) {
	println(n)
}

fn land(w World) {
	match w {
		Moon {} // no atmosphere
		Mars {
			// light atmosphere
			open_parachutes(3)
		}
		Venus {
			// heavy atmosphere
			open_parachutes(1)
		}
	}
}
```

`match` must have a pattern for each variant or have an `else` branch.

```v ignore
struct Moon {}
struct Mars {}
struct Venus {}

type World = Moon | Mars | Venus

fn (m Moon) moon_walk() {}
fn (m Mars) shiver() {}
fn (v Venus) sweat() {}

fn pass_time(w World) {
    match w {
        // using the shadowed match variable, in this case `w` (smart cast)
        Moon { w.moon_walk() }
        Mars { w.shiver() }
        else {}
    }
}
```

### Option/Result types and error handling

Option types are for types which may represent `none`. Result types may
represent an error returned from a function.

`Option` types are declared by prepending `?` to the type name: `?Type`.
`Result` types use `!`: `!Type`.

```v
struct User {
	id   int
	name string
}

struct Repo {
	users []User
}

fn (r Repo) find_user_by_id(id int) !User {
	for user in r.users {
		if user.id == id {
			// V automatically wraps this into a result or option type
			return user
		}
	}
	return error('User ${id} not found')
}

// A version of the function using an option
fn (r Repo) find_user_by_id2(id int) ?User {
	for user in r.users {
		if user.id == id {
			return user
		}
	}
	return none
}

fn main() {
	repo := Repo{
		users: [User{1, 'Andrew'}, User{2, 'Bob'}, User{10, 'Charles'}]
	}
	user := repo.find_user_by_id(10) or { // Option/Result types must be handled by `or` blocks
		println(err)
		return
	}
	println(user.id) // "10"
	println(user.name) // "Charles"

	user2 := repo.find_user_by_id2(10) or { return }

	// To create an Option var directly:
	my_optional_int := ?int(none)
	my_optional_string := ?string(none)
	my_optional_user := ?User(none)
}
```

V used to combine `Option` and `Result` into one type, now they are separate.

The amount of work required to "upgrade" a function to an option/result function is minimal;
you have to add a `?` or `!` to the return type and return `none` or an error (respectively)
when something goes wrong.

This is the primary mechanism for error handling in V. They are still values, like in Go,
but the advantage is that errors can't be unhandled, and handling them is a lot less verbose.
Unlike other languages, V does not handle exceptions with `throw/try/catch` blocks.

`err` is defined inside an `or` block and is set to the string message passed
to the `error()` function.

```v oksyntax
user := repo.find_user_by_id(7) or {
	println(err) // "User 7 not found"
	return
}
```

#### Options/results when returning multiple values

Only one `Option` or `Result` is allowed to be returned from a function. It is
possible to return multiple values and still signal an error.

```v
fn multi_return(v int) !(int, int) {
	if v < 0 {
		return error('must be positive')
	}
	return v, v * v
}
```

#### Handling options/results

There are four ways of handling an option/result. The first method is to
propagate the error:

```v
import net.http

fn f(url string) !string {
	resp := http.get(url)!
	return resp.body
}
```

`http.get` returns `!http.Response`. Because `!` follows the call, the
error will be propagated to the caller of `f`. When using `?` after a
function call producing an option, the enclosing function must return
an option as well. If error propagation is used in the `main()`
function it will `panic` instead, since the error cannot be propagated
any further.

The body of `f` is essentially a condensed version of:

```v ignore
    resp := http.get(url) or { return err }
    return resp.body
```

The second method is to break from execution early:

```v oksyntax
user := repo.find_user_by_id(7) or { return }
```

Here, you can either call `panic()` or `exit()`, which will stop the execution of the
entire program, or use a control flow statement (`return`, `break`, `continue`, etc)
to break from the current block.

> [!NOTE]
> `break` and `continue` can only be used inside a `for` loop.

V does not have a way to forcibly "unwrap" an option (as other languages do,
for instance Rust's `unwrap()` or Swift's `!`). To do this, use `or { panic(err) }` instead.

The third method is to provide a default value at the end of the `or` block.
In case of an error, that value would be assigned instead,
so it must have the same type as the content of the `Option` being handled.

```v
fn do_something(s string) !string {
	if s == 'foo' {
		return 'foo'
	}
	return error('invalid string')
}

a := do_something('foo') or { 'default' } // a will be 'foo'
b := do_something('bar') or { 'default' } // b will be 'default'
println(a)
println(b)
```

The fourth method is to use `if` unwrapping:

```v
import net.http

if resp := http.get('https://google.com') {
	println(resp.body) // resp is a http.Response, not an option
} else {
	println(err)
}
```

Above, `http.get` returns a `!http.Response`. `resp` is only in scope for the first
`if` branch. `err` is only in scope for the `else` branch.

### Custom error types

V gives you the ability to define custom error types through the `IError` interface.
The interface requires two methods: `msg() string` and `code() int`. Every type that
implements these methods can be used as an error.

When defining a custom error type it is recommended to embed the builtin `Error` default
implementation. This provides an empty default implementation for both required methods,
so you only have to implement what you really need, and may provide additional utility
functions in the future.

```v
struct PathError {
	Error
	path string
}

fn (err PathError) msg() string {
	return 'Failed to open path: ${err.path}'
}

fn try_open(path string) ! {
	// V automatically casts this to IError
	return PathError{
		path: path
	}
}

fn main() {
	try_open('/tmp') or { panic(err) }
}
```

### Generics

```v wip

struct Repo[T] {
    db DB
}

struct User {
	id   int
	name string
}

struct Post {
	id   int
	user_id int
	title string
	body string
}

fn new_repo[T](db DB) Repo[T] {
    return Repo[T]{db: db}
}

// This is a generic function. V will generate it for every type it's used with.
fn (r Repo[T]) find_by_id(id int) ?T {
    table_name := T.name // in this example getting the name of the type gives us the table name
    return r.db.query_one[T]('select * from ${table_name} where id = ?', id)
}

db := new_db()
users_repo := new_repo[User](db) // returns Repo[User]
posts_repo := new_repo[Post](db) // returns Repo[Post]
user := users_repo.find_by_id(1)? // find_by_id[User]
post := posts_repo.find_by_id(1)? // find_by_id[Post]
```

Currently generic function definitions must declare their type parameters, but in
future V will infer generic type parameters from single-letter type names in
runtime parameter types. This is why `find_by_id` can omit `[T]`, because the
receiver argument `r` uses a generic type `T`.

Another example:

```v
fn compare[T](a T, b T) int {
	if a < b {
		return -1
	}
	if a > b {
		return 1
	}
	return 0
}

// compare[int]
println(compare(1, 0)) // Outputs: 1
println(compare(1, 1)) //          0
println(compare(1, 2)) //         -1
// compare[string]
println(compare('1', '0')) // Outputs: 1
println(compare('1', '1')) //          0
println(compare('1', '2')) //         -1
// compare[f64]
println(compare(1.1, 1.0)) // Outputs: 1
println(compare(1.1, 1.1)) //          0
println(compare(1.1, 1.2)) //         -1
```

## Concurrency

### Spawning Concurrent Tasks

V's model of concurrency is similar to Go's.

`go foo()` runs `foo()` concurrently in a lightweight thread managed by the V runtime.

`spawn foo()` runs `foo()` concurrently in a different thread:

```v
import math

fn p(a f64, b f64) { // ordinary function without return value
	c := math.sqrt(a * a + b * b)
	println(c)
}

fn main() {
	spawn p(3, 4)
	// p will be run in parallel thread
	// It can also be written as follows
	// spawn fn (a f64, b f64) {
	// 	c := math.sqrt(a * a + b * b)
	// 	println(c)
	// }(3, 4)
}
```

> [!NOTE]
> Threads rely on the machine's CPU (number of cores/threads).
> Be aware that OS threads spawned with `spawn`
> have limitations in regard to concurrency,
> including resource overhead and scalability issues,
> and might affect performance in cases of high thread count.

Sometimes it is necessary to wait until a parallel thread has finished. This can
be done by assigning a *handle* to the started thread and calling the `wait()` method
to this handle later:

```v
import math

fn p(a f64, b f64) { // ordinary function without return value
	c := math.sqrt(a * a + b * b)
	println(c) // prints `5`
}

fn main() {
	h := spawn p(3, 4)
	// p() runs in parallel thread
	h.wait()
	// p() has definitely finished
}
```

This approach can also be used to get a return value from a function that is run in a
parallel thread. There is no need to modify the function itself to be able to call it
concurrently.

```v
import math { sqrt }

fn get_hypot(a f64, b f64) f64 { //       ordinary function returning a value
	c := sqrt(a * a + b * b)
	return c
}

fn main() {
	g := spawn get_hypot(54.06, 2.08) // spawn thread and get handle to it
	h1 := get_hypot(2.32, 16.74) //   do some other calculation here
	h2 := g.wait() //                 get result from spawned thread
	println('Results: ${h1}, ${h2}') //   prints `Results: 16.9, 54.1`
}
```

If there is a large number of tasks, it might be easier to manage them
using an array of threads.

```v
import time

fn task(id int, duration int) {
	println('task ${id} begin')
	time.sleep(duration * time.millisecond)
	println('task ${id} end')
}

fn main() {
	mut threads := []thread{}
	threads << spawn task(1, 500)
	threads << spawn task(2, 900)
	threads << spawn task(3, 100)
	threads.wait()
	println('done')
}

// Output:
// task 1 begin
// task 2 begin
// task 3 begin
// task 3 end
// task 1 end
// task 2 end
// done
```

Additionally for threads that return the same type, calling `wait()`
on the thread array will return all computed values.

```v
fn expensive_computing(i int) int {
	return i * i
}

fn main() {
	mut threads := []thread int{}
	for i in 1 .. 10 {
		threads << spawn expensive_computing(i)
	}
	// Join all tasks
	r := threads.wait()
	println('All jobs finished: ${r}')
}

// Output: All jobs finished: [1, 4, 9, 16, 25, 36, 49, 64, 81]
```

### Channels

Channels are the preferred way to communicate between threads. They allow threads to exchange data
safely without requiring explicit locking. V's channels are similar to those in Go, enabling you
to push objects into a channel on one end and pop objects from the other.
Channels can be buffered or unbuffered, and you can use the `select` statement to monitor multiple
channels simultaneously.

#### Syntax and Usage

Channels are declared with the type `chan objtype`.
You can optionally specify a buffer length using the `cap` field:

```v
ch := chan int{} // unbuffered - "synchronous"
ch2 := chan f64{cap: 100} // buffered with a capacity of 100
```

Channels do not have to be declared as `mut`. The buffer length is not part of the type but
a field of the individual channel object. Channels can be passed to threads like normal
variables:

```v
import time

fn worker(ch chan int) {
	for i in 0 .. 5 {
		ch <- i // push values into the channel
	}
}

fn clock(ch chan int) {
	for i in 0 .. 5 {
		time.sleep(1 * time.second)
		println('Clock tick')
		ch <- (i + 1000) // push a value into the channel
	}
	ch.close() // close the channel when done
}

fn main() {
	ch := chan int{cap: 5}
	spawn worker(ch)
	spawn clock(ch)
	for {
		value := <-ch or { // receive/pop values from the channel
			println('Channel closed')
			break
		}
		println('Received: ${value}')
	}
}
```

#### Buffered Channels

Buffered channels allow you to push multiple items without blocking,
as long as the buffer is not full:

```v
ch := chan string{cap: 2}
ch <- 'hello'
ch <- 'world'
// ch <- '!' // This would block because the buffer is full

println(<-ch) // "hello"
println(<-ch) // "world"
```

#### Closing Channels

A channel can be closed to indicate that no further objects can be pushed. Any attempt
to do so will then result in a runtime panic (with the exception of `select` and
`try_push()` - see below). Attempts to pop will return immediately if the
associated channel has been closed and the buffer is empty. This situation can be
handled using an `or {}` block (see [Handling options/results](#handling-optionsresults)).

```v wip
ch := chan int{}
ch2 := chan f64{}
// ...
ch.close()
// ...
m := <-ch or {
    println('channel has been closed')
}

// propagate error
y := <-ch2 ?
```

#### Channel Select

The `select` command allows monitoring several channels at the same time
without noticeable CPU load. It consists of a list of possible transfers and associated branches
of statements - similar to the [match](#match) command:

```v
import time

fn main() {
	ch := chan f64{}
	ch2 := chan f64{}
	ch3 := chan f64{}
	mut b := 0.0
	c := 1.0
	// ... setup spawn threads that will send on ch/ch2
	spawn fn (the_channel chan f64) {
		time.sleep(5 * time.millisecond)
		the_channel <- 1.0
	}(ch)
	spawn fn (the_channel chan f64) {
		time.sleep(1 * time.millisecond)
		the_channel <- 1.0
	}(ch2)
	spawn fn (the_channel chan f64) {
		_ := <-the_channel
	}(ch3)

	select {
		a := <-ch {
			// do something with `a`
			eprintln('> a: ${a}')
		}
		b = <-ch2 {
			// do something with predeclared variable `b`
			eprintln('> b: ${b}')
		}
		ch3 <- c {
			// do something if `c` was sent
			time.sleep(5 * time.millisecond)
			eprintln('> c: ${c} was send on channel ch3')
		}
		500 * time.millisecond {
			// do something if no channel has become ready within 0.5s
			eprintln('> more than 0.5s passed without a channel being ready')
		}
	}
	eprintln('> done')
}
```

The timeout branch is optional. If it is absent `select` waits for an unlimited amount of time.
It is also possible to proceed immediately if no channel is ready in the moment `select` is called
by adding an `else { ... }` branch. `else` and `<timeout>` are mutually exclusive.

The `select` command can be used as an *expression* of type `bool`
that becomes `false` if all channels are closed:

```v wip
if select {
    ch <- a {
        // ...
    }
} {
    // channel was open
} else {
    // channel is closed
}
```

#### Special Channel Features

For special purposes there are some builtin fields and methods:

```v
ch := chan int{cap: 2}
println(ch.try_push(42)) // `.success` if pushed, `.not_ready` if full, `.closed` if closed
println(ch.len) // Number of items in the buffer
println(ch.cap) // Buffer capacity
println(ch.closed) // Whether the channel is closed
```

```v
struct Abc {
	x int
}

a := 2.13
ch := chan f64{}
res := ch.try_push(a) // try to perform `ch <- a`
println(res)
l := ch.len // number of elements in queue
c := ch.cap // maximum queue length
is_closed := ch.closed // bool flag - has `ch` been closed
println(l)
println(c)
mut b := Abc{}
ch2 := chan Abc{}
res2 := ch2.try_pop(mut b) // try to perform `b = <-ch2`
```

The `try_push/pop()` methods will return immediately with one of the results
`.success`, `.not_ready` or `.closed` - dependent on whether the object has been transferred or
the reason why not.
Usage of these methods and fields in production is not recommended -
algorithms based on them are often subject to race conditions. Especially `.len` and
`.closed` should not be used to make decisions.
Use `or` branches, error propagation or `select` instead (see [Syntax and Usage](#syntax-and-usage)
and [Channel Select](#channel-select) above).

### Shared Objects

Data can be exchanged between a thread and the calling thread via a shared variable.
Such variables should be created as `shared` and passed to the thread as such, too.
The underlying `struct` contains a hidden *mutex* that allows locking concurrent access
using `rlock` for read-only and `lock` for read/write access.

Note: Shared variables must be structs, arrays or maps.

#### Example of Shared Objects

```v
struct Counter {
mut:
	value int
}

fn (shared counter Counter) increment() {
	lock counter {
		counter.value += 1
		println('Incremented to: ${counter.value}')
	}
}

fn main() {
	shared counter := Counter{}

	spawn counter.increment()
	spawn counter.increment()

	rlock counter {
		println('Final value: ${counter.value}')
	}
}
```

### Difference Between Channels and Shared Objects

**Purpose

```powershell
v install ui
```

Packages can be installed directly from git or mercurial repositories.

```powershell
v install [--once] [--git|--hg] [url]
```

**Example:**

```powershell
v install --git https://github.com/vlang/markdown
```

Sometimes you may want to install the dependencies **ONLY** if those are not installed:

```
v install --once [package]
```

Removing a package with v:

```powershell
v remove [package]
```

**Example:**

```powershell
v remove ui
```

Updating an installed package from [VPM](https://vpm.vlang.io/):

```powershell
v update [package]
```

**Example:**

```powershell
v update ui
```

Or you can update all your packages:

```powershell
v update
```

To see all the packages you have installed, you can use:

```powershell
v list
```

**Example:**

```powershell
> v list
Installed packages:
  markdown
  ui
```

To see all the packages that need updates:

```powershell
v outdated
```

**Example:**

```powershell
> v outdated
Package are up to date.
```

### Publish package

1. Put a `v.mod` file inside the toplevel folder of your package (if you
   created your package with the command `v new mypackage` or `v init`
   you already have a `v.mod` file).

   ```sh
   v new mypackage
   Input your project description: My nice package.
   Input your project version: (0.0.0) 0.0.1
   Input your project license: (MIT)
   Initialising ...
   Complete!
   ```

   Example `v.mod`:
   ```v ignore
   Module {
       name: 'mypackage'
       description: 'My nice package.'
       version: '0.0.1'
       license: 'MIT'
       dependencies: []
   }
   ```

   Minimal file structure:
   ```
   v.mod
   mypackage.v
   ```

   The name of your package should be used with the `module` directive
   at the top of all files in your package. For `mypackage.v`:
   ```v
   module mypackage

   pub fn hello_world() {
       println('Hello World!')
   }
   ```

2. Create a git repository in the folder with the `v.mod` file
   (this is not required if you used `v new` or `v init`):
   ```sh
   git init
   git add .
   git commit -m "INIT"
   ````

3. Create a public repository on github.com.
4. Connect your local repository to the remote repository and push the changes.
5. Add your package to the public V package registry VPM:
   https://vpm.vlang.io/new

   You will have to login with your Github account to register the package.
   **Warning:** _Currently it is not possible to edit your entry after submitting.
   Check your package name and github url twice as this cannot be changed by you later._
6. The final package name is a combination of your github account and
   the package name you provided e.g. `mygithubname.mypackage`.

**Optional:** tag your V package with `vlang` and `vlang-package` on github.com
to allow for a better search experience.

# Advanced Topics

## Attributes

V has several attributes that modify the behavior of functions and structs.

An attribute is a compiler instruction specified inside `[]` right before a
function/struct/enum declaration and applies only to the following declaration.

```v
// @[flag] enables Enum types to be used as bitfields

@[flag]
enum BitField {
	read
	write
	other
}

fn main() {
	assert 1 == int(BitField.read)
	assert 2 == int(BitField.write)
	mut bf := BitField.read
	assert bf.has(.read | .other) // test if *at least one* of the flags is set
	assert !bf.all(.read | .other) // test if *all* of the flags are set
	bf.set(.write | .other)
	assert bf.has(.read | .write | .other)
	assert bf.all(.read | .write | .other)
	bf.toggle(.other)
	assert bf == BitField.read | .write
	assert bf.all(.read | .write)
	assert !bf.has(.other)
	empty := BitField.zero()
	assert empty.is_empty()
	assert !empty.has(.read)
	assert !empty.has(.write)
	assert !empty.has(.other)
	mut full := empty
	full.set_all()
	assert int(full) == 7 // 0x01 + 0x02 + 0x04
	assert full == .read | .write | .other
	mut v := full
	v.clear(.read | .other)
	assert v == .write
	v.clear_all()
	assert v == empty
	assert BitField.read == BitField.from('read')!
	assert BitField.other == BitField.from('other')!
	assert BitField.write == BitField.from(2)!
	assert BitField.zero() == BitField.from('')!
}
```

```v
// @[_allow_multiple_values] allows an enum to have multiple duplicate values.
// Use it carefully, only when you really need it.

@[_allow_multiple_values]
enum ButtonStyle {
	primary   = 1
	secondary = 2
	success   = 3

	blurple = 1
	grey    = 2
	gray    = 2
	green   = 3
}

fn main() {
	assert int(ButtonStyle.primary) == 1
	assert int(ButtonStyle.blurple) == 1

	assert int(ButtonStyle.secondary) == 2
	assert int(ButtonStyle.gray) == 2
	assert int(ButtonStyle.grey) == 2

	assert int(ButtonStyle.success) == 3
	assert int(ButtonStyle.green) == 3

	assert ButtonStyle.primary == ButtonStyle.blurple
	assert ButtonStyle.secondary == ButtonStyle.grey
	assert ButtonStyle.secondary == ButtonStyle.gray
	assert ButtonStyle.success == ButtonStyle.green
}
```

Struct field deprecations:

```v oksyntax
module abc

// Note that only *direct* accesses to Xyz.d in *other modules*, will produce deprecation notices/warnings:
pub struct Xyz {
pub mut:
	a int
	d int @[deprecated: 'use Xyz.a instead'; deprecated_after: '2999-03-01']
	// the tags above, will produce a notice, since the deprecation date is in the far future
}
```

Function/method deprecations:

Functions are deprecated before they are finally removed to give users time to migrate their code.
Adding a date is preferable in most cases. An immediate change, without a deprecation date, may be
used for functions that are found to be conceptually broken and obsoleted by much better
functionality. Other than that setting a date is advisable to grant users a grace period.

Deprecated functions cause warnings, which cause errors if built with `-prod`. To avoid immediate
CI breakage, it is advisable to set a future date, ahead of the date when the code is merged. This
gives people who actively developed V projects, the chance to see the deprecation notice at least
once and fix the uses. Setting a date in the next 30 days, assumes they would have compiled their
projects manually at least once, within that time. For small changes, this should be plenty
of time. For complex changes, this time may need to be longer.

Different V projects and maintainers may reasonably choose different deprecation policies.
Depending on the type and impact of the change, you may want to consult with them first, before
deprecating a function.

```v
// Calling this function will result in a deprecation warning

@[deprecated]
fn old_function() {
}

// It can also display a custom deprecation message

@[deprecated: 'use new_function() instead']
fn legacy_function() {}

// You can also specify a date, after which the function will be
// considered deprecated. Before that date, calls to the function
// will be compiler notices - you will see them, but the compilation
// is not affected. After that date, calls will become warnings,
// so ordinary compiling will still work, but compiling with -prod
// will not (all warnings are treated like errors with -prod).
// 6 months after the deprecation date, calls will be hard
// compiler errors.

@[deprecated: 'use new_function2() instead']
@[deprecated_after: '2021-05-27']
fn legacy_function2() {}
```

```v globals
// This function's calls will be inlined.
@[inline]
fn inlined_function() {
}

// This function's calls will NOT be inlined.
@[noinline]
fn function() {
}

// This function will NOT return to its callers.
// Such functions can be used at the end of or blocks,
// just like exit/1 or panic/1. Such functions can not
// have return types, and should end either in for{}, or
// by calling other `[noreturn]` functions.
@[noreturn]
fn forever() {
	for {}
}

// The following struct must be allocated on the heap. Therefore, it can only be used as a
// reference (`&Window`) or inside another reference (`&OuterStruct{ Window{...} }`).
// See section "Stack and Heap"
@[heap]
struct Window {
}

// Calls to following function must be in unsafe{} blocks.
// Note that the code in the body of `risky_business()` will still be
// checked, unless you also wrap it in `unsafe {}` blocks.
// This is useful, when you want to have an `[unsafe]` function that
// has checks before/after a certain unsafe operation, that will still
// benefit from V's safety features.
@[unsafe]
fn risky_business() {
	// code that will be checked, perhaps checking pre conditions
	unsafe {
		// code that *will not be* checked, like pointer arithmetic,
		// accessing union fields, calling other `[unsafe]` fns, etc...
		// Usually, it is a good idea to try minimizing code wrapped
		// in unsafe{} as much as possible.
		// See also [Memory-unsafe code](#memory-unsafe-code)
	}
	// code that will be checked, perhaps checking post conditions and/or
	// keeping invariants
}

// V's autofree engine will not take care of memory management in this function.
// You will have the responsibility to free memory manually yourself in it.
// Note: it is NOT related to the garbage collector. It will only make the
// -autofree mechanism, ignore the body of that function.
@[manualfree]
fn custom_allocations() {
}

// The memory pointed to by the pointer arguments of this function will not be
// freed by the garbage collector (if in use) before the function returns
// For C interop only.
@[keep_args_alive]
fn C.my_external_function(voidptr, int, voidptr) int

// A @[weak] tag tells the C compiler, that the next declaration will be weak, i.e. when linking,
// if there is another declaration of a symbol with the same name (a 'strong' one), it should be
// used instead, *without linker errors about duplicate symbols*.
// For C interop only.

@[weak]
__global abc = u64(1)

// Tell V, that the following global was defined on the C side,
// thus V will not initialise it, but will just give you access to it.
// For C interop only.

@[c_extern]
__global my_instance C.my_struct
struct C.my_struct {
	a int
	b f64
}

// Tell V that the following struct is defined with `typedef struct` in C.
// For C interop only.
@[typedef]
pub struct C.Foo {}

// Used to add a custom calling convention to a function, available calling convention: stdcall, fastcall and cdecl.
// This list also applies for type aliases (see below).
// For C interop only.
@[callconv: 'stdcall']
fn C.DefWindowProc(hwnd int, msg int, lparam int, wparam int)

// Used to add a custom calling convention to a function type aliases.
// For C interop only.

@[callconv: 'fastcall']
type FastFn = fn (int) bool

// Calls to the following function, will have to use its return value somehow.
// Ignoring it, will emit warnings.
@[must_use]
fn f() int {
	return 42
}

fn g() {
	// just calling `f()` here, will produce a warning
	println(f()) // this is fine, because the return value was used as an argument
}

// Windows only (and obsolete; instead of it, use `-subsystem windows` when compiling)
// Without this attribute all graphical apps will have the following behavior on Windows:
// If run from a console or terminal; keep the terminal open so all (e)println statements can be viewed.
// If run from e.g. Explorer, by double-click; app is opened, but no terminal is opened, and no
// (e)println output can be seen.
// Use it to force-open a terminal to view output in, even if the app is started from Explorer.
// Valid before main() only.
@[console]
fn main() {
}
```

## Conditional compilation

The goal of this feature, is to tell V to *not compile* a function, and all its calls, in the final
executable, if a provided custom flag is not passed.

V will still type check the function and all its calls, *even* if they will not be present in the
final executable, due to the passed -d flags.

In order to see it in action, run the following example with `v run example.v` once,
and then a second time with `v -d trace_logs example.v`:
```v
@[if trace_logs ?]
fn elog(s string) {
	eprintln(s)
}

fn main() {
	elog('some expression: ${2 + 2}') // such calls will not be done *at all*, if `-d trace_logs` is not passed
	println('hi')
	elog('finish')
}
```

Conditional compilation, based on custom flags, can also be used to produce slightly different
executables, which share the majority of the same code, but where some of the logic, is needed
only some of the time, for example a network server/client program can be written like so:
```v ignore
fn act_as_client() { ... }
fn act_as_server() { ... }
fn main() {
	$if as_client ? {
		act_as_client()
	}
	$if as_server ? {
		act_as_server()
	}
}
```
To generate a `client.exe` executable do: `v -d as_client -o client.exe .`
To generate a `server.exe` executable do: `v -d as_server -o server.exe .`

### Compile time pseudo variables

V also gives your code access to a set of pseudo string variables,
that are substituted at compile time:

- `@FN` => replaced with the name of the current V function.
- `@METHOD` => replaced with ReceiverType.MethodName.
- `@MOD` => replaced with the name of the current V module.
- `@STRUCT` => replaced with the name of the current V struct.
- `@FILE` => replaced with the absolute path of the V source file.
- `@LINE` => replaced with the V line number where it appears (as a string).
- `@FILE_LINE` => like `@FILE:@LINE`, but the file part is a relative path.
- `@LOCATION` => file, line and name of the current type + method; suitable for logging.
- `@COLUMN` => replaced with the column where it appears (as a string).
- `@VEXE` => replaced with the path to the V compiler.
- `@VEXEROOT`  => will be substituted with the *folder*,
  where the V executable is (as a string).
- `@VHASH`  => replaced with the shortened commit hash of the V compiler (as a string).
- `@VCURRENTHASH` => Similar to `@VHASH`, but changes when the compiler is
  recompiled on a different commit (after local modifications, or after
  using git bisect etc).
- `@VMOD_FILE` => replaced with the contents of the nearest v.mod file (as a string).
- `@VMODHASH` => is replaced by the shortened commit hash, derived from the .git directory
  next to the nearest v.mod file (as a string).
- `@VMODROOT` => will be substituted with the *folder*,
  where the nearest v.mod file is (as a string).
- `@BUILD_DATE` => replaced with the build date, for example '2024-09-13' .
- `@BUILD_TIME` => replaced with the build time, for example '12:32:07' .
- `@BUILD_TIMESTAMP` => replaced with the build timestamp, for example '1726219885' .
Note: `@BUILD_DATE`, `@BUILD_TIME`, `@BUILD_TIMESTAMP` represent times in the UTC timezone.
By default, they are based on the current time of the compilation/build. They can be overridden
by setting the environment variable `SOURCE_DATE_EPOCH`. That is also useful while making
releases, since you can use the equivalent of this in your build system/script:
`export SOURCE_DATE_EPOCH=$(git log -1 --pretty=%ct) ;` , and then use `@BUILD_DATE` etc.,
inside your program, when you for example print your version information to users.
See also https://reproducible-builds.org/docs/source-date-epoch/ .

The compile time pseudo variables allow you to do the following
example, which is useful while debugging/logging/tracing your code:

```v
eprintln(@LOCATION)
```

Another example, is if you want to embed the version/name from v.mod *inside* your executable:

```v ignore
import v.vmod
vm := vmod.decode( @VMOD_FILE ) or { panic(err) }
eprintln('${vm.name} ${vm.version}\n ${vm.description}')
```

A program that prints its own source code (a quine):
```v
print($embed_file(@FILE).to_string())
```

A program that prints the time when it was built:
```v
import time

println('This program, was compiled at ${time.unix(@BUILD_TIMESTAMP.i64()).format_ss_milli()} .')
```

> [!NOTE]
> you can have arbitrary source code in the file, without problems, since the full file
> will be embedded into the executable, produced by compiling it. Also note that printing
> is done with `print` and not `println`, to not add another new line, missing in the
> source code.

### Compile time reflection

`$` is used as a prefix for compile time (also referred to as 'comptime') operations.

Having built-in JSON support is nice, but V also allows you to create efficient
serializers for any data format. V has compile time `if` and `for` constructs:

#### <h4 id="comptime-fields">.fields</h4>

You can iterate over struct fields using `.fields`, it also works with generic types
(e.g. `T.fields`) and generic arguments (e.g. `param.fields` where `fn gen[T](param T) {`).

```v
struct User {
	name string
	age  int
}

fn main() {
	$for field in User.fields {
		$if field.typ is string {
			println('${field.name} is of type string')
		}
	}
}

// Output:
// name is of type string
```

#### <h4 id="comptime-values">.values</h4>

You can read [Enum](#enums) values and their attributes.

```v
enum Color {
	red   @[RED]  // first attribute
	blue  @[BLUE] // second attribute
}

fn main() {
	$for e in Color.values {
		println(e.name)
		println(e.attrs)
	}
}

// Output:
// red
// ['RED']
// blue
// ['BLUE']
```

#### <h4 id="comptime-attrs">.attributes</h4>

You can read [Struct](#structs) attributes.

```v
@[COLOR]
struct Foo {
	a int
}

fn main() {
	$for e in Foo.attributes {
		println(e)
	}
}

// Output:
// StructAttribute{
//    name: 'COLOR'
//    has_arg: false
//    arg: ''
//    kind: plain
// }
```

#### <h4 id="comptime-variants">.variants</h4>

You can read variant types from [Sum type](#sum-types).

```v
type MySum = int | string

fn main() {
	$for v in MySum.variants {
		$if v.typ is int {
			println('has int type')
		} $else $if v.typ is string {
			println('has string type')
		}
	}
}

// Output:
// has int type
// has string type
```

#### <h4 id="comptime-methods">.methods</h4>

You can retrieve information about struct methods.

```v
struct Foo {
}

fn (f Foo) test() int {
	return 123
}

fn (f Foo) test2() string {
	return 'foo'
}

fn main() {
	foo := Foo{}
	$for m in Foo.methods {
		$if m.return_type is int {
			print('${m.name} returns int: ')
			println(foo.$method())
		} $else $if m.return_type is string {
			print('${m.name} returns string: ')
			println(foo.$method())
		}
	}
}

// Output:
// test returns int: 123
// test2 returns string: foo
```

#### <h4 id="comptime-method-params">.params</h4>

You can retrieve information about struct method params.

```v
struct Test {
}

fn (t Test) foo(arg1 int, arg2 string) {
}

fn main() {
	$for m in Test.methods {
		$for param in m.params {
			println('${typeof(param.typ).name}: ${param.name}')
		}
	}
}

// Output:
// int: arg1
// string: arg2
```

See [`examples/compiletime/reflection.v`](/examples/compiletime/reflection.v)
for a more complete example.

### Compile time code

#### `$if` condition

```v
fn main() {
	// Support for multiple conditions in one branch
	$if ios || android {
		println('Running on a mobile device!')
	}
	$if linux && x64 {
		println('64-bit Linux.')
	}
	// Usage as expression
	os := $if windows { 'Windows' } $else { 'UNIX' }
	println('Using ${os}')
	// $else-$if branches
	$if tinyc {
		println('tinyc')
	} $else $if clang {
		println('clang')
	} $else $if gcc {
		println('gcc')
	} $else {
		println('different compiler')
	}
	$if test {
		println('testing')
	}
	// v -cg ...
	$if debug {
		println('debugging')
	}
	// v -prod ...
	$if prod {
		println('production build')
	}
	// v -d option ...
	$if option ? {
		println('custom option')
	}
}
```

If you want an `if` to be evaluated at compile time it must be prefixed with a `$` sign.
Right now it can be used to detect an OS, compiler, platform or compilation options.
`$if debug` is a special option like `$if windows` or `$if x32`, it's enabled if the program
is compiled with `v -g` or `v -cg`.
If you're using a custom ifdef, then you do need `$if option ? {}` and compile with`v -d option`.
Full list of builtin options:

| OS                             | Compilers        | Platforms                     | Other                                         |
|--------------------------------|------------------|-------------------------------|-----------------------------------------------|
| `windows`, `linux`, `macos`    | `gcc`, `tinyc`   | `amd64`, `arm64`, `aarch64`   | `debug`, `prod`, `test`                       |
| `darwin`, `ios`, `bsd`         | `clang`, `mingw` | `i386`, `arm32`               | `js`, `glibc`, `prealloc`                     |
| `freebsd`, `openbsd`, `netbsd` | `msvc`           | `rv64`, `rv32`, `s390x`       | `no_bounds_checking`, `freestanding`          |
| `android`, `mach`, `dragonfly` | `cplusplus`      | `ppc64le`                     | `no_segfault_handler`, `no_backtrace`         |
| `gnu`, `hpux`, `haiku`, `qnx`  |                  | `x64`, `x32`                  | `no_main`, `fast_math`, `apk`, `threads`      |
| `solaris`, `termux`            |                  | `little_endian`, `big_endian` | `js_node`, `js_browser`, `js_freestanding`    |
| `serenity`, `vinix`, `plan9`   |                  |                               | `interpreter`, `es5`, `profile`, `wasm32`     |
|                                |                  |                               | `wasm32_emscripten`, `wasm32_wasi`            |
|                                |                  |                               | `native`, `autofree`                          |

#### `$embed_file`

```v ignore
import os
fn main() {
	embedded_file := $embed_file('v.png')
	os.write_file('exported.png', embedded_file.to_string())!
}
```

V can embed arbitrary files into the executable with the `$embed_file(<path>)`
compile time call. Paths can be absolute or relative to the source file.

Note that by default, using `$embed_file(file)`, will always embed the whole content
of the file, but you can modify that behaviour by passing: `-d embed_only_metadata`
when compiling your program. In that case, the file will not be embedded. Instead,
it will be loaded *the first time* your program calls `embedded_file.data()` at runtime,
making it easier to change in external editor programs, without needing to recompile
your program.

Embedding a file inside your executable, will increase its size, but
it will make it more self contained and thus easier to distribute.
When that happens (the default), `embedded_file.data()` will cause *no IO*,
and it will always return the same data.

`$embed_file` supports compression of the embedded file when compiling with `-prod`.
Currently only one compression type is supported: `zlib`.

```v ignore
import os
fn main() {
	embedded_file := $embed_file('x.css', .zlib) // compressed using zlib
	os.write_file('exported.css', embedded_file.to_string())!
}
```

Note: compressing binary assets like png or zip files, usually will not gain you much,
and in some cases may even take more space in the final executable, since they are
already compressed.

`$embed_file` returns
[EmbedFileData](https://modules.vlang.io/v.embed_file.html#EmbedFileData)
which could be used to obtain the file contents as `string` or `[]u8`.

#### `$tmpl` for embedding and parsing V template files

V has a simple template language for text and html templates, and they can easily
be embedded via `$tmpl('path/to/template.txt')`:

```v ignore
fn build() string {
	name := 'Peter'
	age := 25
	numbers := [1, 2, 3]
	return $tmpl('1.txt')
}

fn main() {
	println(build())
}
```

1.txt:

```
name: @name

age: @age

numbers: @numbers

@for number in numbers
  @number
@end
```

output:

```
name: Peter

age: 25

numbers: [1, 2, 3]

1
2
3
```

See more [details](https://github.com/vlang/v/blob/master/vlib/v/TEMPLATES.md)

#### `$env`

```v
module main

fn main() {
	compile_time_env := $env('ENV_VAR')
	println(compile_time_env)
}
```

V can bring in values at compile time from environment variables.
`$env('ENV_VAR')` can also be used in top-level `#flag` and `#include` statements:
`#flag linux -I $env('JAVA_HOME')/include`.

#### `$d`

V can bring in values at compile time from `-d ident=value` flag defines, passed on
the command line to the compiler. You can also pass `-d ident`, which will have the
same meaning as passing `-d ident=true`.

To get the value in your code, use: `$d('ident', default)`, where `default`
can be `false` for booleans, `0` or `123` for i64 numbers, `0.0` or `113.0`
for f64 numbers, `'a string'` for strings.

When a flag is not provided via the command line, `$d()` will return the `default`
value provided as the *second* argument.

```v
module main

const my_i64 = $d('my_i64', 1024)

fn main() {
	compile_time_value := $d('my_string', 'V')
	println(compile_time_value)
	println(my_i64)
}
```

Running the above with `v run .` will output:
```
V
1024
```

Running the above with `v -d my_i64=4096 -d my_string="V rocks" run .` will output:
```
V rocks
4096
```

Here is an example of how to use the default values, which have to be *pure* literals:
```v
fn main() {
	val_str := $d('id_str', 'value') // can be changed by providing `-d id_str="my id"`
	val_f64 := $d('id_f64', 42.0) // can be changed by providing `-d id_f64=84.0`
	val_i64 := $d('id_i64', 56) // can be changed by providing `-d id_i64=123`
	val_bool := $d('id_bool', false) // can be changed by providing `-d id_bool=true`
	val_char := $d('id_char', `f`) // can be changed by providing `-d id_char=v`
	println(val_str)
	println(val_f64)
	println(val_i64)
	println(val_bool)
	println(rune(val_char))
}
```

`$d('ident','value')` can also be used in top-level statements like `#flag` and `#include`:
`#flag linux -I $d('my_include','/usr')/include`. The default value for `$d` when used in these
statements should be literal `string`s.

`$d('ident', false)` can also be used inside `$if $d('ident', false) {` statements,
granting you the ability to selectively turn on/off certain sections of code, at compile
time, without modifying your source code, or keeping different versions of it.

#### `$compile_error` and `$compile_warn`

These two comptime functions are very useful for displaying custom errors/warnings during
compile time.

Both receive as their only argument a string literal that contains the message to display:

```v failcompile nofmt
// x.v
module main

$if linux {
    $compile_error('Linux is not supported')
}

fn main() {
}

$ v run x.v
x.v:4:5: error: Linux is not supported
    2 |
    3 | $if linux {
    4 |     $compile_error('Linux is not supported')
      |     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    5 | }
    6 |
```

### Compile time types

Compile time types group multiple types into a general higher-level type. This is useful in
functions with generic parameters, where the input type must have a specific property, for example
the `.len` attribute in arrays.

V supports the following compile time types:

- `$alias` => matches [Type aliases](#type-aliases).
- `$array` => matches [Arrays](#arrays) and [Fixed Size Arrays](#fixed-size-arrays).
- `$array_dynamic` => matches [Arrays](#arrays), but not [Fixed Size Arrays](#fixed-size-arrays).
- `$array_fixed` => matches [Fixed Size Arrays](#fixed-size-arrays), but not [Arrays](#arrays)
- `$enum` => matches [Enums](#enums).
- `$float` => matches `f32`, `f64` and float literals.
- `$function` => matches [Function Types](#function-types).
- `$int` => matches `int`, `i8`, `i16`, `i32`, `i64`, `u8`, `u16`, `u32`, `u64`, `isize`, `usize`
  and integer literals.
- `$interface` => matches [Interfaces](#interfaces).
- `$map` => matches [Maps](#maps).
- `$option` => matches [Option Types](#optionresult-types-and-error-handling).
- `$struct` => matches [Structs](#structs).
- `$sumtype` => matches [Sum Types](#sum-types).
- `$string` => matches [Strings](#strings).

### Environment specific files

If a file has an environment-specific suffix, it will only be compiled for that environment.

- `.js.v` => will be used only by the JS backend. These files can contain JS. code.
- `.c.v` => will be used only by the C backend. These files can contain C. code.
- `.native.v` => will be used only by V's native backend.
- `_nix.c.v` => will be used only on Unix systems (non Windows).
- `_${os}.c.v` => will be used only on the specific `os` system.
  For example, `_windows.c.v` will be used only when compiling on Windows, or with `-os windows`.
- `_default.c.v` => will be used only if there is NOT a more specific platform file.
  For example, if you have both `file_linux.c.v` and `file_default.c.v`,
  and you are compiling for linux, then only `file_linux.c.v` will be used,
  and `file_default.c.v` will be ignored.

Here is a more complete example:

`main.v`:

```v ignore
module main
fn main() { println(message) }
```

`main_default.c.v`:

```v ignore
module main
const message = 'Hello world'
```

`main_linux.c.v`:

```v ignore
module main
const message = 'Hello linux'
```

`main_windows.c.v`:

```v ignore
module main
const message = 'Hello windows'
```

With the example above:

- when you compile for Windows, you will get `Hello windows`
- when you compile for Linux, you will get `Hello linux`
- when you compile for any other platform, you will get the
  non specific `Hello world` message.

- `_d_customflag.v` => will be used *only* if you pass `-d customflag` to V.
  That corresponds to `$if customflag ? {}`, but for a whole file, not just a
  single block. `customflag` should be a snake_case identifier, it can not
  contain arbitrary characters (only lower case latin letters + numbers + `_`).
  > **Note**
  >
  > A combinatorial `_d_customflag_linux.c.v` postfix will not work.
  > If you do need a custom flag file, that has platform dependent code, use the
  > postfix `_d_customflag.v`, and then use platform dependent compile time
  > conditional blocks inside it, i.e. `$if linux {}` etc.

- `_notd_customflag.v` => similar to _d_customflag.v, but will be used
  *only* if you do NOT pass `-d customflag` to V.

See also [Cross Compilation](#cross-compilation).

## Debugger

To use the native *V debugger*, add the `$dbg` statement to your source, where you
want the debugger to be invoked.

```v
fn main() {
	a := 1
	$dbg;
}
```

Running this V code, you will get the debugger REPL break when the execution
reaches the `$dbg` statement.

```
$ v run example.v
Break on [main] main in example.v:3
example.v:3 vdbg>
```

At this point, execution is halted, and the debugger is now available.

To see the available commands, type
?, h or help. (Completion for commands works - Non-Windows only)

```
example.v:3 vdbg> ?
vdbg commands:
  anon?                 check if the current context is anon
  bt                    prints a backtrace
  c, continue           continue debugging
  generic?              check if the current context is generic
  heap                  show heap memory usage
  h, help, ?            show this help
  l, list [lines]       show some lines from current break (default: 3)
  mem, memory           show memory usage
  method?               check if the current context is a method
  m, mod                show current module name
  p, print <var>        prints an variable
  q, quit               exits debugging session in the code
  scope                 show the vars in the current scope
  u, unwatch <var>      unwatches a variable
  w, watch <var>        watches a variable
```

Lets try the `scope` command, to inspect the current scope context.

```
example.v:3 vdbg> scope
a = 1 (int)
```

Cool! We have the variable name, its value and its type name.

What about printing only a variable, not the whole scope?

Just type `p a`.

To watch a variable by its name, use:

`w a` (where `a` is the variable name)

To stop watching the variable (`unwatch` it), use `u a`.

Lets see more one example:

```
fn main() {
	for i := 0; i < 4; i++ {
		$dbg
	}
}
```

Running again, we'll get:
`Break on [main] main in example.v:3`

If we want to read the source code context, we can use the `l` or `list` command.

```
example.v:3 vdbg> l
0001  fn main() {
0002    for i := 0; i < 4; i++ {
0003>           $dbg
0004    }
0005  }
```

The default is read 3 lines before and 3 lines after, but you can
pass a parameter to the command to read more lines, like `l 5`.

Now, lets watch the variable changing on this loop.

```
example.v:3 vdbg> w i
i = 0 (int)
```

To continue to the next breakpoint, type `c` or `continue` command.

```
example.v:3 vdbg> c
Break on [main] main in example.v:3
i = 1 (int)
```

`i` and it's value is automatically printed, because it is in the watch list.

To repeat the last command issued, in this case the `c` command,
just hit the *enter* key.

```
example.v:3 vdbg>
Break on [main] main in example.v:3
i = 2 (int)
example.v:3 vdbg>
Break on [main] main in example.v:3
i = 3 (int)
example.v:3 vdbg>
```

You can also see memory usage with `mem` or `memory` command, and
check if the current context is an anon function (`anon?`), a method (`method?`)
or a generic method (`generic?`) and clear the terminal window (`clear`).

## Call stack

You can also show the current call stack with `v.debug`.

To enable this feature, add the `-d callstack` switch when building or running
your code:

```v
import v.debug

fn test(i int) {
	if i > 9 {
		debug.dump_callstack()
	}
}

fn do_something() {
	for i := 0; i <= 10; i++ {
		test(i)
	}
}

fn main() {
	do_something()
}
```

```
$ v -d callstack run example.v
Backtrace:
--------------------------------------------------
example.v:16   | > main.main
example.v:11   |  > main.do_something
example.v:5    |   > main.test
--------------------------------------------------
```

## Trace

Another feature of `v.debug` is the possibility to add hook functions
before and after each function call.

To enable this feature, add the `-d trace` switch when building or running
your code:

```v
import v.debug

fn main() {
	hook1 := debug.add_before_call(fn (fn_name string) {
		println('> before ${fn_name}')
	})
	hook2 := debug.add_after_call(fn (fn_name string) {
		println('> after ${fn_name}')
	})
	anon := fn () {
		println('call')
	}
	anon()

	// optionally you can remove the hooks:
	debug.remove_before_call(hook1)
	debug.remove_after_call(hook2)
	anon()
}
```

```
$ v -d trace run example.v
> before anon
call
> after anon
call
```

## Memory-unsafe code

Sometimes for efficiency you may want to write low-level code that can potentially
corrupt memory or be vulnerable to security exploits. V supports writing such code,
but not by default.

V requires that any potentially memory-unsafe operations are marked intentionally.
Marking them also indicates to anyone reading the code that there could be
memory-safety violations if there was a mistake.

Examples of potentially memory-unsafe operations are:

* Pointer arithmetic
* Pointer indexing
* Conversion to pointer from an incompatible type
* Calling certain C functions, e.g. `free`, `strlen` and `strncmp`.

To mark potentially memory-unsafe operations, enclose them in an `unsafe` block:

```v wip
// allocate 2 uninitialized bytes & return a reference to them
mut p := unsafe { malloc(2) }
p[0] = `h` // Error: pointer indexing is only allowed in `unsafe` blocks
unsafe {
    p[0] = `h` // OK
    p[1] = `i`
}
p++ // Error: pointer arithmetic is only allowed in `unsafe` blocks
unsafe {
    p++ // OK
}
assert *p == `i`
```

Best practice is to avoid putting memory-safe expressions inside an `unsafe` block,
so that the reason for using `unsafe` is as clear as possible. Generally any code
you think is memory-safe should not be inside an `unsafe` block, so the compiler
can verify it.

If you suspect your program does violate memory-safety, you have a head start on
finding the cause: look at the `unsafe` blocks (and how they interact with
surrounding code).

> [!NOTE]
> This is work in progress.

## Structs with reference fields

Structs with references require explicitly setting the initial value to a
reference value unless the struct already defines its own initial value.

Zero-value references, or nil pointers, will **NOT** be supported in the future,
for now data structures such as Linked Lists or Binary Trees that rely on reference
fields that can use the value `0`, understanding that it is unsafe, and that it can
cause a panic.

```v
struct Node {
	a &Node
	b &Node = unsafe { nil } // Auto-initialized to nil, use with caution!
}

// Reference fields must be initialized unless an initial value is declared.
// Nil is OK but use with caution, it's a nil pointer.
foo := Node{
	a: unsafe { nil }
}
bar := Node{
	a: &foo
}
baz := Node{
	a: unsafe { nil }
	b: unsafe { nil }
}
qux := Node{
	a: &foo
	b: &bar
}
println(baz)
println(qux)
```

## sizeof and __offsetof

* `sizeof(Type)` gives the size of a type in bytes.
* `__offsetof(Struct, field_name)` gives the offset in bytes of a struct field.

```v
struct Foo {
	a int
	b int
}

assert sizeof(Foo) == 8
assert __offsetof(Foo, a) == 0
assert __offsetof(Foo, b) == 4
```

## Limited operator overloading

Operator overloading defines the behavior of certain binary operators for certain types.

```v
struct Vec {
	x int
	y int
}

fn (a Vec) str() string {
	return '{${a.x}, ${a.y}}'
}

fn (a Vec) + (b Vec) Vec {
	return Vec{a.x + b.x, a.y + b.y}
}

fn (a Vec) - (b Vec) Vec {
	return Vec{a.x - b.x, a.y - b.y}
}

fn main() {
	a := Vec{2, 3}
	b := Vec{4, 5}
	mut c := Vec{1, 2}

	println(a + b) // "{6, 8}"
	println(a - b) // "{-2, -2}"
	c += a
	//^^ autogenerated from + overload
	println(c) // "{3, 5}"
}
```

> Operator overloading goes against V's philosophy of simplicity and predictability.
> But since scientific and graphical applications are among V's domains,
> operator overloading is an important feature to have in order to improve readability:
>
> `a.add(b).add(c.mul(d))` is a lot less readable than `a + b + c * d`.

Operator overloading is possible for the following binary operators: `+, -, *, /, %, <, ==`.

### Implicitly generated overloads

- `==` is automatically generated by the compiler, but can be overridden.

- `!=`, `>`, `<=` and `>=` are automatically generated when `==` and `<` are defined.
  They cannot be explicitly overridden.
- Assignment operators (`*=`, `+=`, `/=`, etc) are automatically generated when the corresponding
  operators are defined and the operands are of the same type.
  They cannot be explicitly overridden.

### Restriction

To improve safety and maintainability, operator overloading is limited.

#### Type restrictions

- When overriding `<` and `==`, the return type must be strictly `bool`.
- Both arguments must have the same type (just like with all operators in V).
- Overloaded operators have to return the same type as the argument
  (the exceptions are `<` and `==`).

#### Other restrictions

- Arguments cannot be changed inside overloads.
- Calling other functions inside operator functions is not allowed (**planned**).

## Performance tuning

When compiled with `-prod`, V's generated C code usually performs well. However, in specialized
scenarios, additional compiler flags and attributes can further optimize the executable for
performance, memory usage, or size.

> [!NOTE]
> These are *rarely* needed, and should not be used unless you
> *profile your code*, and then see that there are significant benefits for them.
> To cite GCC's documentation: "Programmers are notoriously bad at predicting
> how their programs actually perform".

| Tuning Operation         | Benefits                        | Drawbacks                                         |
|--------------------------|---------------------------------|---------------------------------------------------|
| `@[inline]`              | Performance                     | Increased executable size                         |
| `@[direct_array_access]` | Performance                     | Safety risks                                      |
| `@[packed]`              | Memory usage                    | Potential performance loss                        |
| `@[minify]`              | Performance, Memory usage       | May break binary serialization/reflection         |
| `_likely_/_unlikely_`    | Performance                     | Risk of negative performance impact               |
| `-fast-math`             | Performance                     | Risk of incorrect mathematical operations results |
| `-d no_segfault_handler` | Compile time, Size              | Loss of segfault trace                            |
| `-cflags -march=native`  | Performance                     | Risk of reduced CPU compatibility                 |
| `-compress`              | Size                            | Harder to debug, extra dependency `upx`           |
| `PGO`                    | Performance, Size               | Usage complexity                                  |

### Tuning operations details

#### `@[inline]`

You can tag functions with `@[inline]`, so the C compiler will try to inline them, which in some
cases, may be beneficial for performance, but may impact the size of your executable.

**When to Use**

- Functions that are called frequently in performance-critical loops.

**When to Avoid**

- Large functions, as it might cause code bloat and actually decrease performance.
- Large functions in `if` expressions - may have negative impact on instructions cache.

#### `@[direct_array_access]`

In functions tagged with `@[direct_array_access]` the compiler will translate array operations
directly into C array operations - omitting bounds checking. This may save a lot of time in a
function that iterates over an array but at the cost of making the function unsafe - unless the
boundaries will be checked by the user.

**When to Use**

- In tight loops that access array elements, where bounds have been manually verified or you are
sure that the access index will be valid.

**When to Avoid**

- Everywhere else.

#### `@[packed]`

The `@[packed]` attribute can be applied to a structure to create an unaligned memory layout,
which decreases the overall memory footprint of the structure. Using the `@[packed]` attribute
may negatively impact performance or even be prohibited on certain CPU architectures.

**When to Use**

- When memory usage is more critical than performance, e.g., in embedded systems.

**When to Avoid**

- On CPU architectures that do not support unaligned memory access or when high-speed memory access
is needed.

#### `@[aligned]`

The `@[aligned]` attribute can be applied to a structure or union to specify a minimum alignment
(in bytes) for variables of that type. Using the `@[aligned]` attribute you can only *increase*
the default alignment. Use `@[packed]` if you want to *decrease* it. The alignment of any struct
or union, should be at least a perfect multiple of the lowest common multiple of the alignments of
all of the members of the struct or union.

Example:
```v
// Each u16 in the `data` field below, takes 2 bytes, and we have 3 of them = 6 bytes.
// The smallest power of 2, bigger than 6 is 8, i.e. with `@[aligned]`, the alignment
// for the entire struct U16s, will be 8:
@[aligned]
struct U16s {
	data [3]u16
}
```
**When to Use**

- Only if the instances of your types, will be used in performance critical sections, or with
specialised machine instructions, that do require a specific alignment to work.

**When to Avoid**

- On CPU architectures, that do not support unaligned memory access. If you are not working on
performance critical algorithms, you do not really need it, since the proper minimum alignment
is CPU specific, and the compiler already usually will choose a good default for you.

> [!NOTE]
> You can leave out the alignment factor, i.e. use just `@[aligned]`, in which case the compiler
> will align a type to the maximum useful alignment for the target machine you are compiling for,
> i.e. the alignment will be the largest alignment which is ever used for any data type on the
> target machine. Doing this can often make copy operations more efficient, because the compiler
> can choose whatever instructions copy the biggest chunks of memory, when performing copies to or
> from the variables which have types that you have aligned this way.

See also ["What Every Programmer Should Know About Memory", by Ulrich Drepper](https://people.freebsd.org/~lstewart/articles/cpumemory.pdf) .

#### `@[minify]`

The `@[minify]` attribute can be added to a struct, allowing the compiler to reorder the fields in
a way that minimizes internal gaps while maintaining alignment. Using the `@[minify]` attribute may
cause issues with binary serialization or reflection. Be mindful of these potential side effects
when using this attribute.

**When to Use**

- When you want to minimize memory usage and you're not using binary serialization or reflection.

**When to Avoid**

- When using binary serialization or reflection, as it may cause unexpected behavior.

#### `_likely_/_unlikely_`

`if _likely_(bool expression) {` - hints to the C compiler, that the passed boolean expression is
very likely to be true, so it can generate assembly code, with less chance of branch misprediction.
In the JS backend, that does nothing.

`if _unlikely_(bool expression) {` is similar to `_likely_(x)`, but it hints that the boolean
expression is highly improbable. In the JS backend, that does nothing.

**When to Use**

- In conditional statements where one branch is clearly more frequently executed than the other.

**When to Avoid**

- When the prediction can be wrong, as it might cause a performance penalty due to branch
misprediction.

**When to Use**

- For production builds where you want to reduce the executable size and improve runtime
performance.

**When to Avoid**

- Where it doesn't work for you.

#### `-fast-math`

This flag enables optimizations that disregard strict compliance with the IEEE standard for
floating-point arithmetic. While this could lead to faster code, it may produce incorrect or
less accurate mathematical results.

The full specter of math operations that `-fast-math` affects can be found
[here](https://clang.llvm.org/docs/UsersManual.html#cmdoption-ffast-math).

**When to Use**

- In applications where performance is more critical than precision, like certain graphics
rendering tasks.

**When to Avoid**

- In applications requiring strict mathematical accuracy, such as scientific simulations or
financial calculations.

#### `-d no_segfault_handler`

Using this flag omits the segfault handler, reducing the executable size and potentially improving
compile time. However, in the case of a segmentation fault, the output will not contain stack trace
information, making debugging more challenging.

**When to Use**

- In small, well-tested utilities where a stack trace is not essential for debugging.

**When to Avoid**

- In large-scale, complex applications where robust debugging is required.

#### `-cflags -march=native`

This flag directs the C compiler to generate instructions optimized for the host CPU. This can
improve performance but will produce an executable incompatible with other/older CPUs.

**When to Use**

- When the software is intended to run only on the build machine or in a controlled environment
with identical hardware.

**When to Avoid**

- When distributing the software to users with potentially older CPUs.

#### `-compress`

This flag executes `upx` to compress the resultant executable, reducing its size by around 50%-70%.
The executable will be uncompressed at runtime, so it will take a bit more time to start.
It will also take extra RAM initially, as the compressed version of the app will be loaded into
memory, and then expanded to another chunk of memory.
Debugging such an application can be a bit harder, if you do not account for it.
Some antivirus programs also use heuristics, that trigger more often for compressed applications.

**When to Use**

- For really tiny environments, where the size of the executable on the file system,
or when deploying is important (docker containers, rescue disks etc).

**When to Avoid**

- When you need to debug the application
- When the app's startup time is extremely important (where 1-2ms can be meaningful for you)
- When you can not afford to allocate more memory during application startup
- When you are deploying an app to users with antivirus software that could misidentify your
app as malicious, just because it decompresses its code at runtime.

#### PGO (Profile-Guided Optimization)

PGO allows the compiler to optimize code based on its behavior during sample runs. This can improve
performance and reduce the size of the output executable, but it adds complexity to the build
process.

**When to Use**

- For performance-critical applications where the added build complexity is justifiable.

**When to Avoid**

- For small, short-lived, or rapidly-changing projects where the added build complexity isn't
justified.

**PGO with Clang**

This is an example bash script you can use to optimize your CLI V program without user interactions.
In most cases, you will need to change this script to make it suitable for your particular program.

```bash
#!/usr/bin/env bash

# Get the full path to the current directory
CUR_DIR=$(pwd)

# Remove existing PGO data
rm -f *.profraw
rm -f default.profdata

# Initial build with PGO instrumentation
v -cc clang -prod -cflags -fprofile-generate -o pgo_gen .

# Run the instrumented executable 10 times
for i in {1..10}; do
    ./pgo_gen
done

# Merge the collected data
llvm-profdata merge -o default.profdata *.profraw

# Compile the optimized version using the PGO data
v -cc clang -prod -cflags "-fprofile-use=${CUR_DIR}/default.profdata" -o optimized_program .

# Remove PGO data and instrumented executable
rm *.profraw
rm pgo_gen
```

## Atomics

V has no special support for atomics, yet, nevertheless it's possible to treat variables as atomics
by [calling C](#v-and-c) functions from V. The standard C11 atomic functions like `atomic_store()`
are usually defined with the help of macros and C compiler magic to provide a kind of
*overloaded C functions*.
Since V does not support overloading functions by intention there are wrapper functions defined in
C headers named `atomic.h` that are part of the V compiler infrastructure.

There are dedicated wrappers for all unsigned integer types and for pointers.
(`u8` is not fully supported on Windows) &ndash; the function names include the type name
as suffix. e.g. `C.atomic_load_ptr()` or `C.atomic_fetch_add_u64()`.

To use these functions the C header for the used OS has to be included and the functions
that are intended to be used have to be declared. Example:

```v globals
$if windows {
	#include "@VEXEROOT/thirdparty/stdatomic/win/atomic.h"
} $else {
	#include "@VEXEROOT/thirdparty/stdatomic/nix/atomic.h"
}

// declare functions we want to use - V does not parse the C header
fn C.atomic_store_u32(&u32, u32)
fn C.atomic_load_u32(&u32) u32
fn C.atomic_compare_exchange_weak_u32(&u32, &u32, u32) bool
fn C.atomic_compare_exchange_strong_u32(&u32, &u32, u32) bool

const num_iterations = 10000000

// see section "Global Variables" below
__global (
	atom u32 // ordinary variable but used as atomic
)

fn change() int {
	mut races_won_by_change := 0
	for {
		mut cmp := u32(17) // addressable value to compare with and to store the found value
		// atomic version of `if atom == 17 { atom = 23 races_won_by_change++ } else { cmp = atom }`
		if C.atomic_compare_exchange_strong_u32(&atom, &cmp, 23) {
			races_won_by_change++
		} else {
			if cmp == 31 {
				break
			}
			cmp = 17 // re-assign because overwritten with value of atom
		}
	}
	return races_won_by_change
}

fn main() {
	C.atomic_store_u32(&atom, 17)
	t := spawn change()
	mut races_won_by_main := 0
	mut cmp17 := u32(17)
	mut cmp23 := u32(23)
	for i in 0 .. num_iterations {
		// atomic version of `if atom == 17 { atom = 23 races_won_by_main++ }`
		if C.atomic_compare_exchange_strong_u32(&atom, &cmp17, 23) {
			races_won_by_main++
		} else {
			cmp17 = 17
		}
		desir := if i == num_iterations - 1 { u32(31) } else { u32(17) }
		// atomic version of `for atom != 23 {} atom = desir`
		for !C.atomic_compare_exchange_weak_u32(&atom, &cmp23, desir) {
			cmp23 = 23
		}
	}
	races_won_by_change := t.wait()
	atom_new := C.atomic_load_u32(&atom)
	println('atom: ${atom_new}, #exchanges: ${races_won_by_main + races_won_by_change}')
	// prints `atom: 31, #exchanges: 10000000`)
	println('races won by\n- `main()`: ${races_won_by_main}\n- `change()`: ${races_won_by_change}')
}
```

In this example both `main()` and the spawned thread `change()` try to replace a value of `17`
in the global `atom` with a value of `23`. The replacement in the opposite direction is
done exactly 10000000 times. The last replacement will be with `31` which makes the spawned
thread finish.

It is not predictable how many replacements occur in which thread, but the sum will always
be 10000000. (With the non-atomic commands from the comments the value will be higher or the program
will hang &ndash; dependent on the compiler optimization used.)

## Global Variables

By default V does not allow global variables. However, in low level applications they have their
place so their usage can be enabled with the compiler flag `-enable-globals`.
Declarations of global variables must be surrounded with a `__global ( ... )`
specification &ndash; as in the example [above](#atomics).

An initializer for global variables must be explicitly converted to the
desired target type. If no initializer is given a default initialization is done.
Some objects like semaphores and mutexes require an explicit initialization *in place*, i.e.
not with a value returned from a function call but with a method call by reference.
A separate `init()` function can be used for this purpose &ndash; it will be called before `main()`:

```v globals
import sync

__global (
	sem   sync.Semaphore // needs initialization in `init()`
	mtx   sync.RwMutex // needs initialization in `init()`
	f1    = f64(34.0625) // explicitly initialized
	shmap shared map[string]f64 // initialized as empty `shared` map
	f2    f64 // initialized to `0.0`
)

fn init() {
	sem.init(0)
	mtx.init()
}
```

Be aware that in multi threaded applications the access to global variables is subject
to race conditions. There are several approaches to deal with these:

- use `shared` types for the variable declarations and use `lock` blocks for access.
  This is most appropriate for larger objects like structs, arrays or maps.
- handle primitive data types as "atomics" using special C-functions (see [above](#atomics)).
- use explicit synchronization primitives like mutexes to control access. The compiler
  cannot really help in this case, so you have to know what you are doing.
- don't care &ndash; this approach is possible but makes only sense if the exact values
  of global variables do not really matter. An example can be found in the `rand` module
  where global variables are used to generate (non cryptographic) pseudo random numbers.
  In this case data races lead to random numbers in different threads becoming somewhat
  correlated, which is acceptable considering the performance penalty that using
  synchronization primitives would represent.

## Static Variables

V also supports *static variables*, which are like *global variables*, but
available only *inside* a single unsafe function (you can look at them as
namespaced globals).

Note: their use is discouraged too, for reasons similar to why globals
are discouraged. The feature is supported to enable translating existing
low level C code into V code, using `v translate`.

Note: the function in which you use a static variable, has to be marked
with @[unsafe]. Also unlike using globals, using static variables, do not
require you to pass the flag `-enable-globals`, because they can only be
read/changed inside a single function, which has full control over the
state stored in them.

Here is a small example of how static variables can be used:
```v
@[unsafe]
fn counter() int {
	mut static x := 42
	// Note: x is initialised to 42, just _once_.
	x++
	return x
}

fn f() int {
	return unsafe { counter() }
}

println(f()) // prints 43
println(f()) // prints 44
println(f()) // prints 45
```

## Cross compilation

Cross compilation is supported for Windows, Linux and FreeBSD.

To cross compile your project simply run:

```shell
v -os windows .
```

or

```shell
v -os linux .
```

or

```shell
v -os freebsd .
```

> [!NOTE]
> Cross-compiling a Windows binary on a Linux machine requires the GNU C compiler for
> MinGW-w64 (targeting Win64) to first be installed.

For Ubuntu/Debian based distributions:

```shell
sudo apt install gcc-mingw-w64-x86-64
```

For Arch based distributions:

```shell
sudo pacman -S mingw-w64-gcc
```

(Cross compiling for macOS is temporarily not possible.)

If you don't have any C dependencies, that's all you need to do. This works even
when compiling GUI apps using the `ui` module or graphical apps using `gg`.

You will need to install Clang, LLD linker, and download a zip file with
libraries and include files for Windows and Linux. V will provide you with a link.

## Debugging

### C Backend binaries (Default)

To debug issues in the generated binary (flag: `-b c`), you can pass these flags:

- `-g` - produces a less optimized executable with more debug information in it.
  V will enforce line numbers from the .v files in the stacktraces, that the
  executable will produce on panic. It is usually better to pass -g, unless
  you are writing low level code, in which case use the next option `-cg`.
- `-cg` - produces a less optimized executable with more debug information in it.
  The executable will use C source line numbers in this case. It is frequently
  used in combination with `-keepc`, so that you can inspect the generated
  C program in case of panic, or so that your debugger (`gdb`, `lldb` etc.)
  can show you the generated C source code.
- `-showcc` - prints the C command that is used to build the program.
- `-show-c-output` - prints the output, that your C compiler produced
  while compiling your program.
- `-keepc` - do not delete the generated C source code file after a successful
  compilation. Also keep using the same file path, so it is more stable,
  and easier to keep opened in an editor/IDE.

For best debugging experience if you are writing a low level wrapper for an existing
C library, you can pass several of these flags at the same time:
`v -keepc -cg -showcc yourprogram.v`, then just run your debugger (gdb/lldb) or IDE
on the produced executable `yourprogram`.

If you just want to inspect the generated C code,
without further compilation, you can also use the `-o` flag (e.g. `-o file.c`).
This will make V produce the `file.c` then stop.

If you want to see the generated C source code for *just* a single C function,
for example `main`, you can use: `-printfn main -o file.c`.

To debug the V executable itself you need to compile from src with `./v -g -o v cmd/v`.

You can debug tests with for example `v -g -keepc prog_test.v`. The `-keepc` flag is needed,
so that the executable is not deleted, after it was created and ran.

To see a detailed list of all flags that V supports,
use `v help`, `v help build` and `v help build-c`.

**Commandline Debugging**

1. compile your binary with debugging info `v -g hello.v`
2. debug with [lldb](https://lldb.llvm.org) or [GDB](https://www.gnu.org/software/gdb/)
   e.g. `lldb hello`

[Troubleshooting (debugging) executables created with V in GDB](https://github.com/vlang/v/wiki/Troubleshooting-(debugging)-executables-created-with-V-in-GDB)

**Visual debugging Setup:**

* [Visual Studio Code](vscode.md)

### Native Backend binaries

Currently there is no debugging support for binaries, created by the
native backend (flag: `-b native`).

### Javascript Backend

To debug the generated Javascript output you can activate source maps:
`v -b js -sourcemap hello.v -o hello.js`

For all supported options check the latest help:
`v help build-js`

## V and C

The basic mapping between C and V types is described in
[C and V Type Interoperability](https://github.com/vlang/v/blob/master/doc/c_and_v_type_interoperability.md).

### Calling C from V

V currently does not have a parser for C code. That means that even
though it allows you to `#include` existing C header and source files,
it will not know anything about the declarations in them. The `#include`
statement will only appear in the generated C code, to be used by the
C compiler backend itself.

**Example of #include**
```v oksyntax
#include <stdio.h>
```
After this statement, V will *not* know anything about the functions and
structs declared in `stdio.h`, but if you try to compile the .v file,
it will add the include in the generated C code, so that if that header file
is missing, you will get a C error (you will not in this specific case, if you
have a proper C compiler setup, since `<stdio.h>` is part of the
standard C library).

To overcome that limitation (that V does not have a C parser), V needs you to
redeclare the C functions and structs, on the V side, in your `.c.v` files.
Note that such redeclarations only need to have enough details about the
functions/structs that you want to use.
Note also that they *do not have* to be complete, unlike the ones in the .h files.

**C. struct redeclarations**
For example, if a struct has 3 fields on the C side, but you want to only
refer to 1 of them, you can declare it like this:

**Example of C struct redeclaration**
```v oksyntax
struct C.NameOfTheStruct {
	a_field int
}
```
Another feature, that is very frequently needed for C interoperability,
is the `@[typedef]` attribute. It is used for marking `C.` structs,
that are defined with `typedef struct SomeName { ..... } TypeName;` in the C headers.

For that case, you will have to write something like this in your .c.v file:
```v oksyntax
@[typedef]
pub struct C.TypeName {
}
```
Note that the name of the `C.` struct in V, is the one *after* the `struct SomeName {...}`.

**C. function redeclarations**
The situation is similar for `C.` functions. If you are going to call just 1 function in a
library, but its .h header declares dozens of them, you will only need to declare that single
function, for example:

**Example of C function redeclaration**
```v oksyntax
fn C.name_of_the_C_function(param1 int, const_param2 &char, param3 f32) f64
```
... and then later, you will be able to call the same way you would V function:
```v oksyntax
f := C.name_of_the_C_function(123, c'here is some C style string', 1.23)
dump(f)
```

**Example of using a C function from stdio, by redeclaring it on the V side**
```v
#include <stdio.h>

// int dprintf(int fd, const char *format, ...)
fn C.dprintf(fd int, const_format &char, ...voidptr) int

value := 12345
x := C.dprintf(0, c'Hello world, value: %d\n', value)
dump(x)
```

If your C backend compiler is properly setup, you should see something like this, when you try
to run it:
```console
#0 10:42:32 /v/examples> v run a.v
Hello world, value: 12345
[a.v:8] x: 26
#0 10:42:33 /v/examples>
```

Note, that the C function redeclarations look very similar to the V ones, with some differences:
1) They lack a body (they are defined on the C side) .
2) Their names start with `C.` .
3) Their names can have capital letters (unlike V ones, that are required to use snake_case) .

Note also the second parameter `const char *format`, which was redeclared as `const_format &char` .
The `const_` prefix in that redeclaration may seem arbitrary, but it is important, if you want
to compile your code with `-cstrict` or thirdparty C static analysis tools. V currently does not
have another way to express that this parameter is a const (this will probably change in V 1.0).

For some C functions, that use variadics (`...`) as parameters, V supports a special syntax for
the parameters - `...voidptr`, that is not available for ordinary V functions (V's variadics are
*required* to have the same exact type). Usually those are functions of the printf/scanf family
i.e for `printf`, `fprintf`, `scanf`, `sscanf`, etc, and other formatting/parsing/logging
functions.

**Example**

```v
#flag freebsd -I/usr/local/include -L/usr/local/lib
#flag -lsqlite3
#include "sqlite3.h"
// See also the example from https://www.sqlite.org/quickstart.html
pub struct C.sqlite3 {
}

pub struct C.sqlite3_stmt {
}

type FnSqlite3Callback = fn (voidptr, int, &&char, &&char) int

fn C.sqlite3_open(&char, &&C.sqlite3) int

fn C.sqlite3_close(&C.sqlite3) int

fn C.sqlite3_column_int(stmt &C.sqlite3_stmt, n int) int

// ... you can also just define the type of parameter and leave out the C. prefix

fn C.sqlite3_prepare_v2(&C.sqlite3, &char, int, &&C.sqlite3_stmt, &&char) int

fn C.sqlite3_step(&C.sqlite3_stmt)

fn C.sqlite3_finalize(&C.sqlite3_stmt)

fn C.sqlite3_exec(db &C.sqlite3, sql &char, cb FnSqlite3Callback, cb_arg voidptr, emsg &&char) int

fn C.sqlite3_free(voidptr)

fn my_callback(arg voidptr, howmany int, cvalues &&char, cnames &&char) int {
	unsafe {
		for i in 0 .. howmany {
			print('| ${cstring_to_vstring(cnames[i])}: ${cstring_to_vstring(cvalues[i]):20} ')
		}
	}
	println('|')
	return 0
}

fn main() {
	db := &C.sqlite3(unsafe { nil }) // this means `sqlite3* db = 0`
	// passing a string literal to a C function call results in a C string, not a V string
	C.sqlite3_open(c'users.db', &db)
	// C.sqlite3_open(db_path.str, &db)
	query := 'select count(*) from users'
	stmt := &C.sqlite3_stmt(unsafe { nil })
	// Note: You can also use the `.str` field of a V string,
	// to get its C style zero terminated representation
	C.sqlite3_prepare_v2(db, &char(query.str), -1, &stmt, 0)
	C.sqlite3_step(stmt)
	nr_users := C.sqlite3_column_int(stmt, 0)
	C.sqlite3_finalize(stmt)
	println('There are ${nr_users} users in the database.')

	error_msg := &char(unsafe { nil })
	query_all_users := 'select * from users'
	rc := C.sqlite3_exec(db, &char(query_all_users.str), my_callback, voidptr(7), &error_msg)
	if rc != C.SQLITE_OK {
		eprintln(unsafe { cstring_to_vstring(error_msg) })
		C.sqlite3_free(error_msg)
	}
	C.sqlite3_close(db)
}
```

### Calling V from C

Since V can compile to C, calling V code from C is very easy, once you know how.

Use `v -o file.c your_file.v` to generate a C file, corresponding to the V code.

More details in [call_v_from_c example](../examples/call_v_from_c).

### Passing C compilation flags

Add `#flag` directives to the top of your V files to provide C compilation flags like:

- `-I` for adding C include files search paths
- `-l` for adding C library names that you want to get linked
- `-L` for adding C library files search paths
- `-D` for setting compile time variables

You can (optionally) use different flags for different targets.
Currently the `linux`, `darwin` , `freebsd`, and `windows` flags are supported.

> [!NOTE]
> Each flag must go on its own line (for now)

```v oksyntax
#flag linux -lsdl2
#flag linux -Ivig
#flag linux -DCIMGUI_DEFINE_ENUMS_AND_STRUCTS=1
#flag linux -DIMGUI_DISABLE_OBSOLETE_FUNCTIONS=1
#flag linux -DIMGUI_IMPL_API=
```

In the console build command, you can use:

* `-cc` to change the default C backend compiler.
* `-cflags` to pass custom flags to the backend C compiler (passed before other C options).
* `-ldflags` to pass custom flags to the backend C linker (passed after every other C option).
* For example: `-cc gcc-9 -cflags -fsanitize=thread`.

You can define a `VFLAGS` environment variable in your terminal to store your `-cc`
and `-cflags` settings, rather than including them in the build command each time.

### #pkgconfig

Add `#pkgconfig` directives to tell the compiler which modules should be used for compiling
and linking using the pkg-config files provided by the respective dependencies.

As long as backticks can't be used in `#flag` and spawning processes is not desirable for security
and portability reasons, V uses its own pkgconfig library that is compatible with the standard
freedesktop one.

If no flags are passed it will add `--cflags` and `--libs` to pkgconfig (not to V).
In other words, both lines below do the same:

```v oksyntax
#pkgconfig r_core
#pkgconfig --cflags --libs r_core
```

The `.pc` files are looked up into a hardcoded list of default pkg-config paths, the user can add
extra paths by using the `PKG_CONFIG_PATH` environment variable. Multiple modules can be passed.

To check the existence of a pkg-config use `$pkgconfig('pkg')` as a compile time "if" condition to
check if a pkg-config exists. If it exists the branch will be created. Use `$else` or `$else $if`
to handle other cases.

```v ignore
$if $pkgconfig('mysqlclient') {
	#pkgconfig mysqlclient
} $else $if $pkgconfig('mariadb') {
	#pkgconfig mariadb
}
```

### Including C code

You can also include C code directly in your V module.
For example, let's say that your C code is located in a folder named 'c' inside your module folder.
Then:

* Put a v.mod file inside the toplevel folder of your module (if you
  created your module with `v new` you already have v.mod file). For example:

```v ignore
Module {
	name: 'mymodule',
	description: 'My nice module wraps a simple C library.',
	version: '0.0.1'
	dependencies: []
}
```

* Add these lines to the top of your module:

```v oksyntax
#flag -I @VMODROOT/c
#flag @VMODROOT/c/implementation.o
#include "header.h"
```

> [!NOTE]
> @VMODROOT will be replaced by V with the *nearest parent folder,
> where there is a v.mod file*.
> Any .v file beside or below the folder where the v.mod file is,
> can use `#flag @VMODROOT/abc` to refer to this folder.
> The @VMODROOT folder is also *prepended* to the module lookup path,
> so you can *import* other modules under your @VMODROOT, by just naming them.

The instructions above will make V look for an compiled .o file in
your module `folder/c/implementation.o`.
If V finds it, the .o file will get linked to the main executable, that used the module.
If it does not find it, V assumes that there is a `@VMODROOT/c/implementation.c` file,
and tries to compile it to a .o file, then will use that.

This allows you to have C code, that is contained in a V module, so that its distribution is easier.
You can see a complete minimal example for using C code in a V wrapper module here:
[project_with_c_code](https://github.com/vlang/v/tree/master/vlib/v/tests/project_with_c_code).
Another example, demonstrating passing structs from C to V and back again:
[interoperate between C to V to C](https://github.com/vlang/v/tree/master/vlib/v/tests/project_with_c_code_2).

### C types

Ordinary zero terminated C strings can be converted to V strings with
`unsafe { &char(cstring).vstring() }` or if you know their length already with
`unsafe { &char(cstring).vstring_with_len(len) }`.

> [!NOTE]
> The `.vstring()` and `.vstring_with_len()` methods do NOT create a copy of the `cstring`,
> so you should NOT free it after calling the method `.vstring()`.
> If you need to make a copy of the C string (some libc APIs like `getenv` pretty much require that,
> since they return pointers to internal libc memory), you can use `cstring_to_vstring(cstring)`.

On Windows, C APIs often return so called `wide` strings (UTF-16 encoding).
These can be converted to V strings with `string_from_wide(&u16(cwidestring))` .

V has these types for easier interoperability with C:

- `voidptr` for C's `void*`,
- `&u8` for C's `byte*` and
- `&char` for C's `char*`.
- `&&char` for C's `char**`

To cast a `voidptr` to a V reference, use `user := &User(user_void_ptr)`.

`voidptr` can also be dereferenced into a V struct through casting: `user := User(user_void_ptr)`.

[an example of a module that calls C code from V](https://github.com/vlang/v/blob/master/vlib/v/tests/project_with_c_code/mod1/wrapper.c.v)

### C Declarations

C identifiers are accessed with the `C` prefix similarly to how module-specific
identifiers are accessed. Functions must be redeclared in V before they can be used.
Any C types may be used behind the `C` prefix, but types must be redeclared in V in
order to access type members.

To redeclare complex types, such as in the following C code:

```c
struct SomeCStruct {
	uint8_t implTraits;
	uint16_t memPoolData;
	union {
		struct {
			void* data;
			size_t size;
		};

		DataView view;
	};
};
```

members of sub-data-structures may be directly declared in the containing struct as below:

```v
pub struct C.SomeCStruct {
	implTraits  u8
	memPoolData u16
	// These members are part of sub data structures that can't currently be represented in V.
	// Declaring them directly like this is sufficient for access.
	// union {
	// struct {
	data voidptr
	size usize
	// }
	view C.DataView
	// }
}
```

The existence of the data members is made known to V, and they may be used without
re-creating the original structure exactly.

Alternatively, you may [embed](#embedded-structs) the sub-data-structures to maintain
a parallel code structure.

### Export to shared library

By default all V functions have the following naming scheme in C: `[module name]__[fn_name]`.

For example, `fn foo() {}` in module `bar` will result in `bar__foo()`.

To use a custom export name, use the `@[export]` attribute:

```
@[export: 'my_custom_c_name']
fn foo() {
}
```

### Translating C to V

V can translate your C code to human readable V code, and generating V wrappers
on top of C libraries.

C2V currently uses Clang's AST to generate V, so to translate a C file to V
you need to have Clang installed on your machine.

Let's create a simple program `test.c` first:

```c
#include "stdio.h"

int main() {
	for (int i = 0; i < 10; i++) {
		printf("hello world\n");
	}
        return 0;
}
```

Run `v translate test.c`, and V will generate `test.v`:

```v
fn main() {
	for i := 0; i < 10; i++ {
		println('hello world')
	}
}
```

To generate a wrapper on top of a C library use this command:

```bash
v translate wrapper c_code/libsodium/src/libsodium
```

This will generate a directory `libsodium` with a V module.

Example of a C2V generated libsodium wrapper:

https://github.com/vlang/libsodium

<br>

When should you translate C code and when should you simply call C code from V?

If you have well-written, well-tested C code,
then of course you can always simply call this C code from V.

Translating it to V gives you several advantages:

- If you plan to develop that code base, you now have everything in one language,
  which is much safer and easier to develop in than C.
- Cross-compilation becomes a lot easier. You don't have to worry about it at all.
- No more build flags and include files either.

### Working around C issues

In some cases, C interop can be extremely difficult.
One of these such cases is when headers conflict with each other.
For example, V needs to include the Windows header libraries in order for your V binaries to work
seamlessly across all platforms.

However, since the Windows header libraries use extremely generic names such as `Rectangle`,
this will cause a conflict if you wish to use C code that also has a name defined as `Rectangle`.

For very specific cases like this, V has `#preinclude` and `#postinclude` directives.

These directives allow things to be configured *before* V adds in its built in libraries,
and *after* all of the V code generation has completed (and thus all of the prototypes,
declarations and definitions are already present).

Example usage:
```v ignore
// This will include before built in libraries are used.
#preinclude "pre_include.h"

// This will include after built in libraries are used.
#include "include.h"

// This will include after all of the V code generation is complete,
// including the one for the main function of the project
#postinclude "post_include.h"
```

An example of what might be included in `pre_include.h`
can be [found here](https://github.com/irishgreencitrus/raylib.v/blob/main/include/pre.h)

The `#postinclude` directive on the other hand is useful for allowing the integration
of frameworks like SDL3 or Sokol, that insist on having callbacks in your code, instead
of behaving like ordinary libraries, and allowing you to decide when to call them.

NOTE: these are advanced features, and will not be necessary outside of very specific cases
with C interop. Other than those, using them could cause more issues than it solves.

Consider using them as a last resort!

## Other V Features

### Inline assembly

<!-- ignore because it doesn't pass fmt test (why?) -->

```v ignore
a := 100
b := 20
mut c := 0
asm amd64 {
    mov eax, a
    add eax, b
    mov c, eax
    ; =r (c) as c // output
    ; r (a) as a // input
      r (b) as b
}
println('a: ${a}') // 100
println('b: ${b}') // 20
println('c: ${c}') // 120
```

For more examples, see
[vlib/v/slow_tests/assembly/asm_test.amd64.v](https://github.com/vlang/v/tree/master/vlib/v/slow_tests/assembly/asm_test.amd64.v)

### Hot code reloading

```v live
module main

import time

@[live]
fn print_message() {
	println('Hello! Modify this message while the program is running.')
}

fn main() {
	for {
		print_message()
		time.sleep(500 * time.millisecond)
	}
}
```

Build this example with `v -live message.v`.

You can also run this example with `v -live run message.v`.
Make sure that in command you use a path to a V's file,
**not** a path to a folder (like `v -live run .`) -
in that case you need to modify content of a folder (add new file, for example),
because changes in *message.v* will have no effect.

Functions that you want to be reloaded must have `@[live]` attribute
before their definition.

Right now it's not possible to modify types while the program is running.

More examples, including a graphical application:
[github.com/vlang/v/tree/master/examples/hot_reload](https://github.com/vlang/v/tree/master/examples/hot_reload).

#### About keeping states in hot reloading functions with v -live run
V's hot code reloading relies on marking the functions that you want to reload with `@[live]`,
then compiling a shared library of these `@[live]` functions, and then
your v program loads that shared library at runtime.

V (with the -live option) starts a new thread, that monitors the source files for changes,
and when it detects modifications, it recompiles the shared library, and reloads it at runtime,
so that new calls to those @[live] functions will be made to the newly loaded library.

It keeps all the accumulated state (from locals outside the @[live] functions,
from heap variables and from globals), allowing to tweak the code in the merged functions quickly.

When there are more substantial changes (to data structures, or to functions that were not marked),
you will have to restart the running app manually.

### Cross-platform shell scripts in V

V can be used as an alternative to Bash to write deployment scripts, build scripts, etc.

The advantage of using V for this, is the simplicity and predictability of the language, and
cross-platform support. "V scripts" run on Unix-like systems, as well as on Windows.

To use V's script mode, save your source file with the `.vsh` file extension.
It will make all functions in the `os` module global (so that you can use `mkdir()` instead
of `os.mkdir()`, for example).

V also knows to compile & run `.vsh` files immediately, so you do not need a separate
step to compile them. V will also recompile an executable, produced by a `.vsh` file,
*only when it is older than the .vsh source file*, i.e. runs after the first one, will
be faster, since there is no need for a re-compilation of a script, that has not been changed.

An example `deploy.vsh`:

```v oksyntax
#!/usr/bin/env -S v

// Note: The shebang line above, associates the .vsh file to V on Unix-like systems,
// so it can be run just by specifying the path to the .vsh file, once it's made
// executable, using `chmod +x deploy.vsh`, i.e. after that chmod command, you can
// run the .vsh script, by just typing its name/path like this: `./deploy.vsh`

// print command then execute it
fn sh(cmd string) {
	println('❯ ${cmd}')
	print(execute_or_exit(cmd).output)
}

// Remove if build/ exits, ignore any errors if it doesn't
rmdir_all('build') or {}

// Create build/, never fails as build/ does not exist
mkdir('build')!

// Move *.v files to build/
result := execute('mv *.v build/')
if result.exit_code != 0 {
	println(result.output)
}

sh('ls')

// Similar to:
// files := ls('.')!
// mut count := 0
// if files.len > 0 {
//     for file in files {
//         if file.ends_with('.v') {
//              mv(file, 'build/') or {
//                  println('err: ${err}')
//                  return
//              }
//         }
//         count++
//     }
// }
// if count == 0 {
//     println('No files')
// }
```

Now you can either compile this like a normal V program and get an executable you can deploy and run
anywhere:
`v -skip-running deploy.vsh && ./deploy`

Or run it like a traditional Bash script:
`v run deploy.vsh` (or simply just `v deploy.vsh`)

On Unix-like platforms, the file can be run directly after making it executable using `chmod +x`:
`./deploy.vsh`

### Vsh scripts with no extension

Whilst V does normally not allow vsh scripts without the designated file extension, there is a way
to circumvent this rule and have a file with a fully custom name and shebang. Whilst this feature
exists it is only recommended for specific usecases like scripts that will be put in the path and
should **not** be used for things like build or deploy scripts. To access this feature start the
file with `#!/usr/bin/env -S v -raw-vsh-tmp-prefix tmp` where `tmp` is the prefix for
the built executable. This will run in crun mode so it will only rebuild if changes to the script
were made and keep the binary as `tmp.<scriptfilename>`. **Caution**: if this filename already
exists the file will be overridden. If you want to rebuild each time and not keep this binary
instead use `#!/usr/bin/env -S v -raw-vsh-tmp-prefix tmp run`.

Note: there is a small shell script `cmd/tools/vrun`, that can be useful for systems, that have an
env program (`/usr/bin/env`), that still does not support an `-S` option (like BusyBox).
See https://github.com/vlang/v/blob/master/cmd/tools/vrun for more details.

# Appendices

## Appendix I: Keywords

V has 45 reserved keywords (3 are literals):

```v ignore
as
asm
assert
atomic
break
const
continue
defer
else
enum
false
fn
for
go
goto
if
implements
import
in
interface
is
isreftype
lock
match
module
mut
none
or
pub
return
rlock
select
shared
sizeof
spawn
static
struct
true
type
typeof
union
unsafe
volatile
__global
__offsetof
```

See also [V Types](#v-types).

## Appendix II: Operators

This lists operators for [primitive types](#primitive-types) only.

```v ignore
+    sum                    integers, floats, strings
-    difference             integers, floats
*    product                integers, floats
/    quotient               integers, floats
%    remainder              integers

~    bitwise NOT            integers
&    bitwise AND            integers
|    bitwise OR             integers
^    bitwise XOR            integers

!    logical NOT            bools
&&   logical AND            bools
||   logical OR             bools
!=   logical XOR            bools

<<   left shift             integer << unsigned integer
>>   right shift            integer >> unsigned integer
>>>  unsigned right shift   integer >> unsigned integer

Precedence    Operator
    5            *  /  %  <<  >> >>> &
    4            +  -  |  ^
    3            ==  !=  <  <=  >  >=
    2            &&
    1            ||

Assignment Operators
+=   -=   *=   /=   %=
&=   |=   ^=
>>=  <<=  >>>=
&&= ||=
```

Note: in V, `assert -10 % 7 == -3` passes. In programming, the sign of the remainder
depends upon the signs of divisor and dividend.

## Appendix III: Practical Code Recipes (Copy‑Paste Friendly)

This appendix collects focused, real-world examples you can drop into projects. Each snippet is self-contained with imports and shows basic error handling.

### 1) CLI flags and arguments

```v
import os
import flag

struct Config {
    name    string
    count   int
    verbose bool
}

fn parse_args() Config {
    mut fp := flag.new_flag_parser(os.args)
    fp.application('greeter')
    fp.description('Say hello a few times')
    fp.skip_executable()
    name := fp.string('name', `n`, 'world', 'Name to greet')
    count := fp.int('count', `c`, 1, 'Repeat count')
    verbose := fp.bool('verbose', `v`, false, 'Verbose output')
    fp.finalize() or {
        eprintln(err.msg())
        exit(1)
    }
    return Config{ name, count, verbose }
}

fn main() {
    cfg := parse_args()
    for _ in 0 .. cfg.count {
        println('Hello, ${cfg.name}!')
    }
    if cfg.verbose {
        println('Done.')
    }
}
```

### 2) Files: read, write, append, and walk a directory

```v
import os

fn main() ! {
    // write
    os.write_file('example.txt', 'line 1')!
    // append
    os.append_file('example.txt', '\nline 2')!
    // read
    content := os.read_file('example.txt')!
    println('Content:\n${content}')

    // iterate files in current dir
    for entry in os.ls('.')! {
        path := os.join_path('.', entry)
        if os.is_file(path) && path.ends_with('.txt') {
            println('txt file: ${path}')
        }
    }
}
```

### 3) HTTP GET + JSON decode

```v
import net.http
import json

struct Repo {
    name               string
    stars              int    [json: 'stargazers_count']
    forks              int
    is_archived        bool   [json: 'archived']
}

fn main() ! {
    resp := http.get('https://api.github.com/repos/vlang/v')!
    if resp.status_code != 200 {
        return error('unexpected status: ${resp.status_code}')
    }
    repo := json.decode(Repo, resp.body)!
    println('Repo ${repo.name}: ${repo.stars}★, forks: ${repo.forks}, archived: ${repo.is_archived}')
}
```

### 4) HTTP POST JSON

```v
import net.http
import json

struct Payload {
    msg string
}

fn main() ! {
    body := json.encode(Payload{ msg: 'hello' })
    req := http.Request{
        method: .post
        url: 'https://httpbin.org/post'
        headers: {'Content-Type': 'application/json'}
        data: body
    }
    resp := req.do()!
    println(resp.status_code)
    println(resp.body)
}
```

### 5) Concurrency: fetch many URLs in parallel

```v
import net.http

fn fetch(url string, ch chan string) {
    resp := http.get(url) or { ch <- 'ERR ${url}: ${err.msg()}'; return }
    ch <- '${url} -> ${resp.status_code}'
}

fn main() {
    urls := [
        'https://vlang.io',
        'https://example.com',
        'https://api.github.com',
    ]
    ch := chan string{cap: urls.len}
    mut threads := []thread{}
    for url in urls {
        threads << spawn fetch(url, ch)
    }
    for _ in 0 .. urls.len {
        println(<-ch)
    }
    for t in threads { t.wait() }
}
```

### 6) Options/Results: safe error handling

```v
import os

// Result/! return type propagates errors to caller
fn load_text(path string) !string {
    content := os.read_file(path)!
    return content
}

fn main() {
    txt := load_text('missing.txt') or {
        eprintln('failed: ${err.msg()}')
        return
    }
    println(txt)
}
```

### 7) Unit test layout (files and asserts)

`calc.v`:

```v
module main

pub fn add(a int, b int) int { return a + b }
```

`calc_test.v`:

```v
import main

fn test_add() {
    assert main.add(2, 2) == 4
}
```

Run tests: `v test .`

### 8) Generics: a tiny stack

```v
struct Stack[T] {
    mut: items []T
}

fn (mut s Stack[T]) push(x T) { s.items << x }

fn (mut s Stack[T]) pop() ?T {
    if s.items.len == 0 { return none }
    val := s.items.last()
    s.items = s.items[..s.items.len - 1]
    return val
}

fn main() {
    mut si := Stack[int]{}
    si.push(1)
    si.push(2)
    println(si.pop() or { -1 }) // 2

    mut ss := Stack[string]{}
    ss.push('a')
    println(ss.pop() or { 'none' }) // a
}
```

### 9) Interfaces and sum types

```v
interface Shape {
    area() f64
}

struct Circle { r f64 }
struct Square { s f64 }

fn (c Circle) area() f64 { return 3.14159 * c.r * c.r }
fn (q Square) area() f64 { return q.s * q.s }

type AnyShape = Circle | Square

fn describe(s AnyShape) {
    match s {
        Circle { println('circle area: ${s.area()}') }
        Square { println('square area: ${s.area()}') }
    }
}

fn main() {
    describe(Circle{ r: 2 })
    describe(Square{ s: 3 })
}
```

### 10) Simple CSV parse (no quotes/escapes)

```v
import os

struct Row {
    name string
    age  int
}

fn main() ! {
    data := os.read_file('people.csv')!
    mut rows := []Row{}
    for i, line in data.split_into_lines() {
        if i == 0 && line.starts_with('name,') { // skip header
            continue
        }
        if line.len == 0 { continue }
        parts := line.split(',')
        if parts.len >= 2 {
            rows << Row{ name: parts[0], age: parts[1].int() }
        }
    }
    for r in rows { println(r) }
}
```

For quoted CSV, prefer the `encoding.csv` module.

### 11) Regex quick check

```v
import regex

fn main() {
    pattern := r'^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$'
    mut re := regex.regex_opt(pattern) or { panic(err) }
    println(re.matches_string('test@example.com')) // true
    println(re.matches_string('not-an-email'))     // false
}
```

### 12) SQLite with V ORM

```v
import db.sqlite

struct User {
    id   int    [primary; sql: serial]
    name string
    age  int
}

fn main() ! {
    mut db := sqlite.connect('users.db')!
    defer { db.close() or {} }

    sql db { create table User }!

    new_user := User{ name: 'Alice', age: 30 }
    sql db { insert new_user into User }!

    users := sql db { select from User where age > 20 }!
    for u in users { println(u) }
}
```

### 13) Minimal web server (vweb)

```v
module main

import vweb

struct App {
    vweb.Context
}

['/']
pub fn (mut app App) index() vweb.Result {
    return app.text('Hello from vweb!')
}

fn main() {
    vweb.run(&App{}, 8080)
}
```

Open <http://localhost:8080>

## Other online resources

### [V contributing guide](https://github.com/vlang/v/blob/master/CONTRIBUTING.md)

V would be much less, than what it is today, without the help of all
its contributors. If you like and want to help the V project succeed,
please read that document, choose a task, and dive in!

### [V language documentation](https://docs.vlang.io/introduction.html)

The site has the same information as this document, but split to pages,
for easier reading on mobile devices. Updated automatically on each
commit to the main repository.

### [V standard module documentation](https://modules.vlang.io/)

The site has the documentation of all the modules in V's standard
library (vlib). Updated automatically on each commit to the main
repository.

### [V online playground](https://play.vlang.io/)

The site allows you to enter and edit small V programs, then compile
and run them. Updated automatically on each commit to the main
repository. Use it, to test your ideas, when you do not have access
to a computer or an Android phone, where V has been already installed.

### [Awesome V](https://github.com/vlang/awesome-v)

When you make a cool new project or a library, you can submit it to that
list too. You can also use the list, for ideas about new projects to do
with V.

### [The V language Discord](https://discord.gg/vlang)

This is the place to be, to discuss the V language, learn about latest
developments, quickly get help with issues, witness/participate in
~~epic flame wars~~ constructive criticism exchanges and design decisions.
Join it, and learn more about languages, games, editors, people, Klingons,
Conway's law and the universe.
