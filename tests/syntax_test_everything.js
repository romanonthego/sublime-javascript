// SYNTAX TEST "Packages/js-modern/JavaScript (Modern).sublime-syntax"

/* single-line block comment */
// <- comment.block.js punctuation.definition.comment.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^ comment.block.js
//                           ^^ comment.block.js punctuation.definition.comment.js

/*
// <- comment.block.js punctuation.definition.comment.js
  This is some block comment
// <- comment.block.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^ comment.block.js
 */
 // <- comment.block.js punctuation.definition.comment.js
//^ comment.block.js punctuation.definition.comment.js

// single-line comment
// <- comment.line.js punctuation.definition.comment.js
// ^^^^^^^^^^^^^^^ comment.line.js

'use strict'
// <- punctuation.definition.string.js
//^^^^^^^^^ string.quoted.single.js

"use strict"
// <- punctuation.definition.string.js
//^^^^^^^^^ string.quoted.double.js

`use strict`
// <- punctuation.definition.string.js
//^^^^^^^^^ string.interpolated.js

`This is ${`sparta` + 5 + 5}`
// <- punctuation.definition.string.js
//^^^^^^^ string.interpolated.js
//       ^^ punctuation.section.embedded.js
//         ^ punctuation.definition.string.js
//           ^^^^^ string.interpolated.js
//                ^ punctuation.definition.string.js
//                  ^ keyword.operator.arithmetic.js
//                    ^ constant.numeric.js
//                      ^ keyword.operator.arithmetic.js
//                        ^ constant.numeric.js
//                         ^ punctuation.section.embedded.js
//                          ^ punctuation.definition.string.js

"use \t \n strict"
// <- punctuation.definition.string.js
//^^^^^^^^^^^^^^^ string.quoted.double.js
//   ^^ constant.character.escape.js
//      ^^ constant.character.escape.js

"use \u00f0 \u00A0 strict"
// <- punctuation.definition.string.js
//^^^^^^^^^^^^^^^^^^^^^^^ string.quoted.double.js
//   ^^^^^^ constant.character.escape.js
//          ^^^^^^ constant.character.escape.js

'This
//   ^ invalid.illegal.js
is
//^ invalid.illegal.js
illegal'

"This
//   ^ invalid.illegal.js
is
//^ invalid.illegal.js
illegal too"

`This
is
okay`
// <- string.interpolated.js

(5 + 5)
// <- punctuation.section.parens.begin.js
// ^ keyword.operator.arithmetic.js
//   ^ constant.numeric.js
//    ^ punctuation.section.parens.end.js

0.
// <- constant.numeric.js

.0
// <- constant.numeric.js

0.0
// <- constant.numeric.js

-5.3
//^^ constant.numeric.js

+5.
// <- keyword.operator.arithmetic.js

599
// <- constant.numeric.js

59.3
// <- constant.numeric.js
//^^ constant.numeric.js

-59.3e-50
// <- keyword.operator.arithmetic.js
//^^^^^^^ constant.numeric.js

-59.3e+50
// <- keyword.operator.arithmetic.js
//^^^^^^^ constant.numeric.js

0x2f3B8FA
// <- constant.numeric.hex.js
//^^^^^^^ constant.numeric.hex.js

((2 + 2) * 2)
//^ constant.numeric.js
//  ^ keyword.operator.arithmetic.js
//    ^ constant.numeric.js
//       ^ keyword.operator.arithmetic.js
//         ^ constant.numeric.js

2 + 2 * 2
//<- constant.numeric.js
//^ keyword.operator.arithmetic.js
//  ^ constant.numeric.js
//    ^ keyword.operator.arithmetic.js
//      ^ constant.numeric.js

0238
// <- constant.numeric.octal.js
//^^ constant.numeric.octal.js

true
// <- constant.language.js

false
// <- constant.language.js

true || false
// <- constant.language.js
//   ^^ keyword.operator.logical.js
//      ^^^^^ constant.language.js

delete name
// <- keyword.operator.word.js
//^^^^ keyword.operator.word.js

void 0
// <- keyword.operator.word.js
//^^ keyword.operator.word.js
//   ^ constant.numeric.js

typeof 'string' === 'string'
// <- keyword.operator.word.js
//^^^^ keyword.operator.word.js
//     ^ punctuation.definition.string.js
//      ^^^^^^ string.quoted.single.js
//            ^ punctuation.definition.string.js
//                  ^ punctuation.definition.string.js
//                   ^^^^^^ string.quoted.single.js
//                         ^ punctuation.definition.string.js

this
// <- variable.language.js
//^^ variable.language.js

Buffer
// <- support.class.js
//^^ support.class.js

var x, y, z
// <- storage.type.js
//^ storage.type.js
//  ^ variable.other.readwrite.js
//   ^ punctuation.separator.js
//     ^ variable.other.readwrite.js
//      ^ punctuation.separator.js
//        ^ variable.other.readwrite.js

var name = 234234,
// <- storage.type.js
//^ storage.type.js
//  ^^^^ variable.other.readwrite.js
//       ^ keyword.operator.assignment
//         ^^^^^^ constant.numeric.js
//               ^ punctuation.separator.js
    age = 10
//  ^^^ variable.other.readwrite.js
//      ^ keyword.operator.assignment
//        ^^ constant.numeric.js

let test = 'Hello, variables'
// <- storage.type.js
//^ storage.type.js
//  ^^^^ variable.other.readwrite.js
//       ^ keyword.operator.assignment
//         ^ punctuation.definition.string.js
//          ^^^^^^^^^^^^^^^^ string.quoted.single.js
//                          ^ punctuation.definition.string.js

let test = 'Hello, variables'
// <- storage.type.js
//^ storage.type.js
//  ^^^^ variable.other.readwrite.js
//       ^ keyword.operator.assignment
//         ^ punctuation.definition.string.js
//          ^^^^^^^^^^^^^^^^ string.quoted.single.js
//                          ^ punctuation.definition.string.js

let s = 10
// <- storage.type.js
//^ storage.type.js
//    ^ keyword.operator.assignment.js
//  ^ variable.other.readwrite.js

const x = 153.3
// <- storage.type.js
//^^^ storage.type.js
//      ^ keyword.operator.assignment.js
//    ^ variable.other.constant.js

const test1 = 152,
// <- storage.type.js
//^^^ storage.type.js
//    ^^^^^ variable.other.constant.js
//          ^ keyword.operator.assignment.js
//            ^^^ constant.numeric.js
//               ^ punctuation.separator.js
      test2 = 342,
//          ^ keyword.operator.assignment.js
//            ^^^ constant.numeric.js
//    ^^^^^ variable.other.constant.js
      test3 = 5 + 5,
//          ^ keyword.operator.assignment.js
//            ^ constant.numeric.js
//              ^ keyword.operator.arithmetic.js
//                ^ constant.numeric.js
//    ^^^^^ variable.other.constant.js
      test4 = 'string' + 'number'
//          ^ keyword.operator.assignment.js
//             ^^^^^^ string.quoted.single.js
//                     ^ keyword.operator.arithmetic.js
//                        ^^^^^^ string.quoted.single.js
//    ^^^^^ variable.other.constant.js

let test1 = 152,
// <- storage.type.js
//^ storage.type.js
//  ^^^^^ variable.other.readwrite.js
//        ^ keyword.operator.assignment.js
//          ^^^ constant.numeric.js
//             ^ punctuation.separator
    test2 = 342
//        ^ keyword.operator.assignment.js
//          ^^^ constant.numeric.js
//  ^^^^^ variable.other.readwrite.js

let s = 5 + 5 * 10 - 8 / 53
//      ^ constant.numeric.js
//        ^ keyword.operator.arithmetic.js
//          ^ constant.numeric.js
//            ^ keyword.operator.arithmetic.js
//              ^^ constant.numeric.js
//                 ^ keyword.operator.arithmetic.js
//                   ^ constant.numeric.js
//                     ^ keyword.operator.arithmetic.js
//                       ^^ constant.numeric.js

5 > 10
// <- constant.numeric.js
//^ keyword.operator.logical.js
//  ^^ constant.numeric.js

5 >= 10
// <- constant.numeric.js
//^^ keyword.operator.logical.js
//   ^^ constant.numeric.js

5 <= 10
// <- constant.numeric.js
//^^ keyword.operator.logical.js
//   ^^ constant.numeric.js

5 == 10
// <- constant.numeric.js
//^^ keyword.operator.logical.js
//   ^^ constant.numeric.js

5 === 10
// <- constant.numeric.js
//^^^ keyword.operator.logical.js
//    ^^ constant.numeric.js

5 != 10
// <- constant.numeric.js
//^^ keyword.operator.logical.js
//   ^^ constant.numeric.js

5 !== 10
// <- constant.numeric.js
//^^^ keyword.operator.logical.js
//    ^^ constant.numeric.js

5 !== 10 || 10 === 5
// <- constant.numeric.js
//^^^ keyword.operator.logical.js
//    ^^ constant.numeric.js
//       ^^ keyword.operator.logical.js
//          ^^ constant.numeric.js
//             ^^^ keyword.operator.logical.js
//                 ^ constant.numeric.js

5 !== 10 && 10 === 5
// <- constant.numeric.js
//^^^ keyword.operator.logical.js
//    ^^ constant.numeric.js
//       ^^ keyword.operator.logical.js
//          ^^ constant.numeric.js
//             ^^^ keyword.operator.logical.js
//                 ^ constant.numeric.js

s = !5
//  ^ keyword.operator.logical.js

s = 10 | 5
//^ keyword.operator.assignment.js
//  ^^ constant.numeric.js
//     ^ keyword.operator.bitwise.js
//       ^ constant.numeric.js

s = 10 & 5
//^ keyword.operator.assignment.js
//  ^^ constant.numeric.js
//     ^ keyword.operator.bitwise.js
//       ^ constant.numeric.js

s = ~10
//^ keyword.operator.assignment.js
//  ^ keyword.operator.bitwise.js
//   ^^ constant.numeric.js

s += 10
//^^ keyword.operator.assignment.js
//   ^^ constant.numeric.js

s -= 10
//^^ keyword.operator.assignment.js
//   ^^ constant.numeric.js

s *= 10
//^^ keyword.operator.assignment.js
//   ^^ constant.numeric.js

s /= 10
//^^ keyword.operator.assignment.js
//   ^^ constant.numeric.js

s %= 10
//^^ keyword.operator.assignment.js
//   ^^ constant.numeric.js

s &= 10
//^^ keyword.operator.assignment.js
//   ^^ constant.numeric.js

s |= 10
//^^ keyword.operator.assignment.js
//   ^^ constant.numeric.js

;;;{ 'something' }
// <- punctuation.terminator.js
//^ punctuation.terminator.js
// ^ punctuation.section.block.begin.js
//  ^^^^^^^^^^^^^ meta.block.js
//   ^ punctuation.definition.string.js
//    ^^^^^^^^^ string.quoted.single.js
//             ^ punctuation.definition.string.js

function syncFunc(value, secondValue) {
// <- storage.type.js
//^^^^^^ storage.type.js
//^^^^^^^^^^^^^^^^ meta.function.js
//       ^^^^^^^^ entity.name.function.js
//                ^^^^^^^^^^^^^^^^^^ meta.function.parameters.js meta.parens.js
//                ^^^^^ variable.parameter.js
//                     ^ punctuation.separator.js
//                       ^^^^^^^^^^^ variable.parameter.js
//                                  ^^^ meta.function.js
  return isFinite(Infinity)
// <- meta.function.js
//^^^^^^ keyword.control.js
//       ^^^^^^^^^^^^^^^^^^ meta.function-call.js
}

function *syncFunc(value, secondValue) {
// <- storage.type.js
//^^^^^^ storage.type.js
//       ^ storage.modifier.js
//^^^^^^^^^^^^^^^^^ meta.function.js
//        ^^^^^^^^ entity.name.function.js
//                 ^^^^^^^^^^^^^^^^^^ meta.function.parameters.js meta.parens.js
//                 ^^^^^ variable.parameter.js
//                      ^ punctuation.separator.js
//                        ^^^^^^^^^^^ variable.parameter.js
//                                   ^^^ meta.function.js
  return isFinite(Infinity)
// <- meta.function.js
//^^^^^^ keyword.control.js
//       ^^^^^^^^^^^^^^^^^^ meta.function-call.js
}

function* syncFunc(value, secondValue) {
// <- storage.type.js
//^^^^^^ storage.type.js
//      ^ storage.modifier.js
//^^^^^^^^^^^^^^^^^ meta.function.js
//        ^^^^^^^^ entity.name.function.js
//                ^ punctuation.section.parens.begin.js
//                 ^^^^^^^^^^^^^^^^^^ meta.function.parameters.js meta.parens.js
//                 ^^^^^ variable.parameter.js
//                      ^ punctuation.separator.js
//                        ^^^^^^^^^^^ variable.parameter.js
//                                   ^ punctuation.section.parens.end.js
//                                   ^^^ meta.function.js
  return isFinite(Infinity)
// <- meta.function.js
//^^^^^^ keyword.control.js
//       ^^^^^^^^^^^^^^^^^^ meta.function-call.js
}

async function asyncFun(value) {
// <- storage.modifier.js
//^^^ storage.modifier.js
//    ^^^^^^^^ storage.type.js
//    ^^^^^^^^^^^^^^^^^^ meta.function.js
//             ^^^^^^^^ entity.name.function.js
//                     ^ punctuation.section.parens.begin.js
//                      ^^^^^ meta.function.parameters.js meta.parens.js
//                      ^^^^^ variable.parameter.js
//                           ^ punctuation.section.parens.end.js
//                           ^^^ meta.function.js
  return isFinite(Infinity)
// <- meta.function.js
//^^^^^^ keyword.control.js
//       ^^^^^^^^^^^^^^^^^^ meta.function-call.js
}

const arrowFun = (value1, value2) => {
// <- storage.type.js
//^^^ storage.type.js
//    ^^^^^^^^ entity.name.function.js
//               ^ punctuation.section.parens.begin.js
//                ^^^^^^^^^^^^^^ meta.function.parameters.js meta.parens.js
//                ^^^^^ variable.parameter.js
//                     ^ punctuation.separator.js
//                              ^^^^^^ meta.function.js
//                              ^ punctuation.section.parens.end.js
//                                ^^ storage.type.js
  return isFinite(Infinity)
// <- meta.function.js
//^^^^^^ keyword.control.js
//       ^^^^^^^^^^^^^^^^^^ meta.function-call.js
}

const arrowFun = value => {
// <- storage.type.js
//^^^ storage.type.js
//    ^^^^^^^^ entity.name.function.js
//^^^^^^^^^^^^^^^ meta.function.js
//               ^^^^^ meta.function.parameters.js
//               ^^^^^ variable.parameter.js
//                    ^^^^^ meta.function.js
//                     ^^ storage.type.js
  return isFinite(Infinity)
// <- meta.function.js
//^^^^^^ keyword.control.js
//       ^^^^^^^^^^^^^^^^^^ meta.function-call.js
}

async const arrowFun = value => {
// <- storage.type.js
//    ^^^^^ storage.type.js
//          ^^^^^^^^ entity.name.function.js
//    ^^^^^^^^^^^^^^^ meta.function.js
//                     ^^^^^ meta.function.parameters.js
//                     ^^^^^ variable.parameter.js
//                          ^^^^^ meta.function.js
  return isFinite(Infinity)
// <- meta.function.js
//^^^^^^ keyword.control.js
//       ^^^^^^^^^^^^^^^^^^ meta.function-call.js
}

isFinite(Infinity) === true
// <- meta.function-call.js support.function.js
//^^^^^^^^^^^^^^^^ meta.function-call.js
//      ^ meta.function-call.js punctuation.section.parens.begin.js
//       ^^^^^^^^ meta.function-call.js meta.parens.js
//               ^ meta.function-call.js punctuation.section.parens.end.js
//                 ^^^ keyword.operator.logical.js
//                     ^^^^ constant.language.js

callSome(Infinity) === true
// <- meta.function-call.js variable.function.js
//^^^^^^^^^^^^^^^^ meta.function-call.js
//      ^ meta.function-call.js punctuation.section.parens.begin.js
//       ^^^^^^^^ meta.function-call.js meta.parens.js support.constant.js
//               ^ meta.function-call.js punctuation.section.parens.end.js
//                 ^^^ keyword.operator.logical.js
//                     ^^^^ constant.language.js

if (isFinite(NaN)) console.log('something')
// <- keyword.control.conditional.js
//  ^^^^^^^^^^^^^  meta.function-call.js
// ^ punctuation.section.parens.begin.js
//  ^^^^^^^^^^^^^ meta.parens.js
//          ^ meta.parens.js meta.function-call.js punctuation.section.parens.begin.js
//           ^^^ meta.parens.js meta.parens.js
//              ^ meta.parens.js meta.function-call.js punctuation.section.parens.end.js

if (false || true || 5 > 10) {
// <- keyword.control.conditional.js
//  ^^^^^^^^^^^^^^^^^^^^^^^ meta.parens.js
// ^ punctuation.section.parens.begin.js
//  ^^^^^ constant.language.js
//        ^^ keyword.operator.logical.js
//           ^^^^ constant.language.js
//                ^^ keyword.operator.logical.js
//                   ^ constant.numeric.js
//                     ^ keyword.operator.logical.js
//                       ^^ constant.numeric.js
//                         ^ punctuation.section.parens.end.js
//                           ^ punctuation.section.block.begin.js
  'something here'
// <- meta.block.js
// ^^^^^^^^^^^^^^ meta.block.js string.quoted.single.js
} else if (true != NaN) {
// <- punctuation.section.block.end.js
//^^^^ keyword.control.conditional.js
//     ^^ keyword.control.conditional.js
//        ^ punctuation.section.parens.begin.js
//         ^^^^^^^^^^^ meta.parens.js
//                    ^ punctuation.section.parens.end.js
//                      ^ punctuation.section.block.begin.js
} else {
// <- punctuation.section.block.end.js
//^^^^ keyword.control.conditional.js
//     ^ punctuation.section.block.begin.js
}
// <- punctuation.section.block.end.js
