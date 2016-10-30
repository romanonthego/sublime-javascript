// SYNTAX TEST "Packages/sublime-javascript/JavaScript (Liberal).sublime-syntax"

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
//          ^^^^^^ string.interpolated.js
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

  5, 4, 3
//^ constant.numeric.js
// ^ keyword.operator.js
//   ^ constant.numeric.js
//    ^ keyword.operator.js
//      ^ constant.numeric.js

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
// <- keyword.other.js
//^^^^ keyword.other.js

void 0
// <- keyword.other.js
//^^ keyword.other.js
//   ^ constant.numeric.js

typeof 'string' === "string"
// <- keyword.other.js
//^^^^ keyword.other.js
//     ^ punctuation.definition.string.js
//      ^^^^^^ string.quoted.single.js
//            ^ punctuation.definition.string.js
//                  ^ punctuation.definition.string.js
//                   ^^^^^^ string.quoted.double.js
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
    gender = ('male', "female"),
//  ^^^^^^ variable.other.readwrite.js
//         ^ keyword.operator.assignment
//           ^ punctuation.section.parens.begin.js
//            ^^^^^^^^^^^^^^^^ meta.parens.js
//            ^ punctuation.definition.string.js
//             ^^^^ string.quoted.single.js
//                 ^ punctuation.definition.string.js
//                  ^ keyword.operator.js
//                    ^ punctuation.definition.string.js
//                     ^^^^^^ string.quoted.double.js
//                           ^ punctuation.definition.string.js
//                            ^ punctuation.section.parens.end.js
//                             ^ punctuation.separator.js
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

let test = "Hello, variables"
// <- storage.type.js
//^ storage.type.js
//  ^^^^ variable.other.readwrite.js
//       ^ keyword.operator.assignment
//         ^ punctuation.definition.string.js
//          ^^^^^^^^^^^^^^^^ string.quoted.double.js
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
      test4 = 'string' + "number"
//          ^ keyword.operator.assignment.js
//             ^^^^^^ string.quoted.single.js
//                     ^ keyword.operator.arithmetic.js
//                        ^^^^^^ string.quoted.double.js
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

const s = {
// <- storage.type.js
//^^^ storage.type.js
//    ^ variable.other.constant.js
//      ^ keyword.operator.assignment.js
//        ^ punctuation.section.braces.begin.js
  first_name: 'John',
// <- meta.braces.js
//^^^^^^^^^^ variable.other.member.js
//^^^^^^^^^^ string.unquoted.js
//          ^ punctuation.separator.js
//            ^ punctuation.definition.string.js
//             ^^^^ string.quoted.single.js
//                 ^ punctuation.definition.string.js
//                  ^ punctuation.separator.js
  last_name: 'Doe',
// <- meta.braces.js
//^^^^^^^^^ variable.other.member.js
//^^^^^^^^^ string.unquoted.js
//         ^ punctuation.separator.js
//           ^ punctuation.definition.string.js
//            ^^^ string.quoted.single.js
//               ^ punctuation.definition.string.js
//                ^ punctuation.separator.js
  age: 15,
// <- meta.braces.js
//^^^ variable.other.member.js
//^^^ string.unquoted.js
//   ^ punctuation.separator.js
//     ^^ constant.numeric.js
//       ^ punctuation.separator.js
  gender,
// <- meta.braces.js
//^^^^^^ variable.other.member.js
//^^^^^^ string.unquoted.js
//      ^ punctuation.separator.js
  extra: {
// <- meta.braces.js
//^^^^^ variable.other.member.js
//^^^^^ string.unquoted.js
//     ^ punctuation.separator.js
//       ^ punctuation.section.braces.begin.js
    smokes: true,
// <- meta.braces.js meta.braces.js
//  ^^^^^^ variable.other.member.js
//  ^^^^^^ string.unquoted.js
//        ^ punctuation.separator.js
//          ^^^^ constant.language.js
    'smokes-too-much': true,
// <- meta.braces.js meta.braces.js
//  ^ punctuation.definition.string.js
//  ^^^^^^^^^^^^^^^^^ variable.other.member.js
//   ^^^^^^^^^^^^^^^ string.quoted.single.js
//                  ^ punctuation.definition.string.js
//                   ^ punctuation.separator.js
//                     ^^^^ constant.language.js
    "smokes-too-much": true,
// <- meta.braces.js meta.braces.js
//  ^ punctuation.definition.string.js
//  ^^^^^^^^^^^^^^^^^ variable.other.member.js
//   ^^^^^^^^^^^^^^^ string.quoted.double.js
//                  ^ punctuation.definition.string.js
//                   ^ punctuation.separator.js
//                     ^^^^ constant.language.js
    [someexpression]: true,
// <- meta.braces.js meta.braces.js
//  ^ punctuation.section.brackets.begin.js
//  ^^^^^^^^^^^^^^^^ variable.other.member.js
//   ^^^^^^^^^^^^^^ meta.brackets.js
//   ^^^^^^^^^^^^^^ variable.other.readwrite.js
//                 ^ punctuation.section.brackets.end.js
//                  ^ punctuation.separator.js
//                    ^^^^ constant.language.js
    [5 + 5]: true
// <- meta.braces.js meta.braces.js
//  ^ punctuation.section.brackets.begin.js
//  ^^^^^^^ variable.other.member.js
//   ^ constant.numeric.js
//     ^ keyword.operator.arithmetic.js
//       ^ constant.numeric.js
//   ^^^^^ meta.brackets.js
//        ^ punctuation.section.brackets.end.js
//         ^ punctuation.separator.js
//           ^^^^ constant.language.js
  }
// <- meta.braces.js
//^ punctuation.section.braces.end.js
}
// <- punctuation.section.braces.end.js

dog = {
// <- variable.other.readwrite.js
//^ variable.other.readwrite.js
//  ^ keyword.operator.assignment.js
//    ^ punctuation.section.braces.begin.js
  age: 15,
// <- meta.braces.js
//^^^ variable.other.member.js
//^^^ string.unquoted.js
//   ^ punctuation.separator.js
//     ^^ constant.numeric.js
//       ^ punctuation.separator.js
}
// <- punctuation.section.braces.end.js

function Dog(name) {
//^^^^^^ storage.type.js
//       ^^^ entity.name.function.constructor.js
//       ^^^ entity.name.class.js
//          ^ punctuation.section.parens.begin.js
//           ^^^^ variable.parameter.js
//               ^ punctuation.section.parens.end.js
//                 ^ punctuation.section.block.begin.js
    this.name = name
//  ^^^^ variable.language.js
//      ^ punctuation.accessor.js
//       ^^^^ variable.other.member.js
//            ^ keyword.operator.assignment.js
//              ^^^^ variable.other.readwrite.js
// <- meta.block.js
// <- meta.function.js
}
// <- punctuation.section.block.end.js

Dog.prototype = {
//<- entity.name.class.js
//^ entity.name.class.js
// ^ punctuation.accessor.js
//  ^^^^^^^^^ variable.other.member.js
//  ^^^^^^^^^ variable.language.js
//            ^ keyword.operator.assignment.js
//              ^ punctuation.section.braces.begin.js
  walk: function(howMuch) {
// <- meta.braces.js
//^^^^ entity.name.function.js
//    ^ punctuation.separator.js
//      ^^^^^^^^ storage.type.js
//              ^ punctuation.section.parens.begin.js
//               ^^^^^^^ meta.function.parameters.js
//               ^^^^^^^ meta.parens.js
//               ^^^^^^^ variable.parameter.js
//                      ^ punctuation.section.parens.end.js
//                        ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.function.js
  },
// <- meta.block.js
//^ punctuation.section.block.end.js
// ^ punctuation.separator.js
  walk: howMuch => {
// <- meta.braces.js
//^^^^ entity.name.function.js
//    ^ punctuation.separator.js
//              ^^ storage.type.js
//      ^^^^^^^ meta.function.parameters.js
//      ^^^^^^^ variable.parameter.js
//                 ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.function.js
  },
// <- meta.block.js
//^ punctuation.section.block.end.js
// ^ punctuation.separator.js
  walk(howMuch) {
// <- meta.braces.js
//^^^^ entity.name.function.js
//    ^ punctuation.section.parens.begin.js
//     ^^^^^^^ meta.function.parameters.js
//     ^^^^^^^ meta.parens.js
//     ^^^^^^^ variable.parameter.js
//            ^ punctuation.section.parens.end.js
//              ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.function.js
  },
// <- meta.braces.js
//^ punctuation.section.block.end.js
// ^ punctuation.separator.js
  'walk'(howMuch) {
// <- meta.braces.js
//^ punctuation.definition.string.js
// ^^^^ entity.name.function.js
// ^^^^ string.quoted.single.js
//     ^ punctuation.definition.string.js
//      ^ punctuation.section.parens.begin.js
//       ^^^^^^^ meta.function.parameters.js
//       ^^^^^^^ meta.parens.js
//       ^^^^^^^ variable.parameter.js
//              ^ punctuation.section.parens.end.js
//                ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.function.js
  },
// <- meta.braces.js
//^ punctuation.section.block.end.js
// ^ punctuation.separator.js
  "walk"(howMuch) {
// <- meta.braces.js
//^ punctuation.definition.string.js
// ^^^^ entity.name.function.js
// ^^^^ string.quoted.double.js
//     ^ punctuation.definition.string.js
//      ^ punctuation.section.parens.begin.js
//       ^^^^^^^ meta.function.parameters.js
//       ^^^^^^^ meta.parens.js
//       ^^^^^^^ variable.parameter.js
//              ^ punctuation.section.parens.end.js
//                ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.function.js
  },
// <- meta.braces.js
//^ punctuation.section.block.end.js
// ^ punctuation.separator.js
  [5 + 5](howMuch) {
// <- meta.braces.js
//^ punctuation.section.brackets.begin.js
// ^ constant.numeric.js
//   ^ keyword.operator.arithmetic.js
//     ^ constant.numeric.js
//      ^ punctuation.section.brackets.end.js
//       ^ punctuation.section.parens.begin.js
//        ^^^^^^^ meta.function.parameters.js
//        ^^^^^^^ meta.parens.js
//        ^^^^^^^ variable.parameter.js
//               ^ punctuation.section.parens.end.js
//                 ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.function.js
  }
// <- meta.braces.js
//^ punctuation.section.block.end.js
}
// <- punctuation.section.braces.end.js

class Dog extends Object.prototype {
// <- storage.type.js
//^^^ storage.type.js
//    ^^^ entity.name.class.js
//        ^^^^^^^ storage.modifier.js
//                ^^^^^^^^^^^^^^^^ entity.other.inherited-class.js
//                ^^^^^^ support.class.js
//                      ^ punctuation.accessor.js
//                       ^^^^^^^^^ variable.other.member.js
//                       ^^^^^^^^^ variable.language.js
//                                 ^ punctuation.section.braces.begin.js
  constructor(name) {
//^^^^^^^^^^^ entity.name.function.constructor.js
//           ^ punctuation.section.parens.begin.js
//            ^^^^ variable.parameter.js
//                ^ punctuation.section.parens.end.js
//                  ^ punctuation.section.block.begin.js
    this.name = name
//  ^^^^ variable.language.js
//      ^ punctuation.accessor.js
//       ^^^^ variable.other.member.js
//            ^ keyword.operator.assignment.js
//              ^^^^ variable.other.readwrite.js
// <- meta.braces.js meta.block.js
// <- meta.class.js meta.function.js
  }
//^ punctuation.section.block.end.js
// <- meta.braces.js
// <- meta.class.js
  walk(howMuch) {
//^^^^ entity.name.function.js
//    ^ punctuation.section.parens.begin.js
//     ^^^^^^^ variable.parameter.js
//            ^ punctuation.section.parens.end.js
//              ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.class.js meta.function.js
  }
//^ punctuation.section.block.end.js
// <- meta.braces.js
// <- meta.class.js
  "walk"(howMuch) {
//^ punctuation.definition.string.js
// ^^^^ entity.name.function.js
// ^^^^ string.quoted.double.js
//     ^ punctuation.definition.string.js
//      ^ punctuation.section.parens.begin.js
//       ^^^^^^^ variable.parameter.js
//              ^ punctuation.section.parens.end.js
//                ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.class.js meta.function.js
  }
//^ punctuation.section.block.end.js
// <- meta.braces.js
// <- meta.class.js
  'walk'(howMuch) {
//^ punctuation.definition.string.js
// ^^^^ entity.name.function.js
// ^^^^ string.quoted.single.js
//     ^ punctuation.definition.string.js
//      ^ punctuation.section.parens.begin.js
//              ^ punctuation.section.parens.end.js
//                ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.class.js meta.function.js
  }
//^ punctuation.section.block.end.js
// <- meta.braces.js
// <- meta.class.js
  member = 'value'
//^^^^^^ variable.other.member.js
//       ^ keyword.operator.assignment.js
//         ^ punctuation.definition.string.js
//          ^^^^^ string.quoted.single.js
//               ^ punctuation.definition.string.js
// <- meta.braces.js
// <- meta.class.js
  walk = function(howMuch) {
//^^^^ entity.name.function.js
//     ^ keyword.operator.assignment.js
//       ^^^^^^^^ storage.type.js
//               ^ punctuation.section.parens.begin.js
//                ^^^^^^^ variable.parameter.js
//                       ^ punctuation.section.parens.end.js
//                         ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.class.js meta.function.js
  }
//^ punctuation.section.block.end.js
// <- meta.braces.js
// <- meta.class.js
  walk = howMuch => {
//^^^^ entity.name.function.js
//     ^ keyword.operator.assignment.js
//       ^^^^^^^ meta.function.parameters.js
//       ^^^^^^^ variable.parameter.js
//               ^^ storage.type.js
//                  ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.class.js meta.function.js
  }
//^ punctuation.section.block.end.js
// <- meta.braces.js
// <- meta.class.js
  [5 + 5](howMuch) {
// <- meta.braces.js
//^ punctuation.section.brackets.begin.js
// ^ constant.numeric.js
//   ^ keyword.operator.arithmetic.js
//     ^ constant.numeric.js
//      ^ punctuation.section.brackets.end.js
//       ^ punctuation.section.parens.begin.js
//        ^^^^^^^ meta.function.parameters.js
//        ^^^^^^^ meta.parens.js
//        ^^^^^^^ variable.parameter.js
//               ^ punctuation.section.parens.end.js
//                 ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.function.js
  }
// <- meta.braces.js
// <- meta.class.js
//^ punctuation.section.block.end.js
}
// <- punctuation.section.braces.end.js

class Dog {
// <- storage.type.js
//^^^ storage.type.js
//    ^^^ entity.name.class.js
//        ^ punctuation.section.braces.begin.js
  constructor(name) {
//^^^^^^^^^^^ entity.name.function.constructor.js
//           ^ punctuation.section.parens.begin.js
//            ^^^^ variable.parameter.js
//                ^ punctuation.section.parens.end.js
//                  ^ punctuation.section.block.begin.js
    this.name = name
//  ^^^^ variable.language.js
//      ^ punctuation.accessor.js
//       ^^^^ variable.other.member.js
//            ^ keyword.operator.assignment.js
//              ^^^^ variable.other.readwrite.js
// <- meta.braces.js meta.block.js
// <- meta.class.js meta.function.js
  }
//^ punctuation.section.block.end.js
// <- meta.braces.js
// <- meta.class.js
  walk(howMuch) {
//^^^^ entity.name.function.js
//    ^ punctuation.section.parens.begin.js
//     ^^^^^^^ variable.parameter.js
//            ^ punctuation.section.parens.end.js
//              ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.class.js meta.function.js
  }
//^ punctuation.section.block.end.js
// <- meta.braces.js
// <- meta.class.js
  "walk"(howMuch) {
//^ punctuation.definition.string.js
// ^^^^ entity.name.function.js
// ^^^^ string.quoted.double.js
//     ^ punctuation.definition.string.js
//      ^ punctuation.section.parens.begin.js
//       ^^^^^^^ variable.parameter.js
//              ^ punctuation.section.parens.end.js
//                ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.class.js meta.function.js
  }
//^ punctuation.section.block.end.js
// <- meta.braces.js
// <- meta.class.js
  'walk'(howMuch) {
//^ punctuation.definition.string.js
// ^^^^ entity.name.function.js
// ^^^^ string.quoted.single.js
//     ^ punctuation.definition.string.js
//      ^ punctuation.section.parens.begin.js
//              ^ punctuation.section.parens.end.js
//                ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.class.js meta.function.js
  }
//^ punctuation.section.block.end.js
// <- meta.braces.js
// <- meta.class.js
  member = 'value'
//^^^^^^ variable.other.member.js
//       ^ keyword.operator.assignment.js
//         ^ punctuation.definition.string.js
//          ^^^^^ string.quoted.single.js
//               ^ punctuation.definition.string.js
// <- meta.braces.js
// <- meta.class.js
  walk = function(howMuch) {
//^^^^ entity.name.function.js
//     ^ keyword.operator.assignment.js
//       ^^^^^^^^ storage.type.js
//               ^ punctuation.section.parens.begin.js
//                ^^^^^^^ variable.parameter.js
//                       ^ punctuation.section.parens.end.js
//                         ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.class.js meta.function.js
  }
//^ punctuation.section.block.end.js
// <- meta.braces.js
// <- meta.class.js
  walk = howMuch => {
//^^^^ entity.name.function.js
//     ^ keyword.operator.assignment.js
//       ^^^^^^^ meta.function.parameters.js
//       ^^^^^^^ variable.parameter.js
//               ^^ storage.type.js
//                  ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.class.js meta.function.js
  }
//^ punctuation.section.block.end.js
// <- meta.braces.js
// <- meta.class.js
  [5 + 5](howMuch) {
// <- meta.braces.js
//^ punctuation.section.brackets.begin.js
// ^ constant.numeric.js
//   ^ keyword.operator.arithmetic.js
//     ^ constant.numeric.js
//      ^ punctuation.section.brackets.end.js
//       ^ punctuation.section.parens.begin.js
//        ^^^^^^^ meta.function.parameters.js
//        ^^^^^^^ meta.parens.js
//        ^^^^^^^ variable.parameter.js
//               ^ punctuation.section.parens.end.js
//                 ^ punctuation.section.block.begin.js
    console.log('I am dog and I am walking...')
// <- meta.braces.js meta.block.js
// <- meta.function.js
  }
// <- meta.braces.js
// <- meta.class.js
//^ punctuation.section.block.end.js
}
// <- punctuation.section.braces.end.js

const dog = new Dog()
// <- storage.type.js
//^^^ storage.type.js
//    ^^^ variable.other.constant.js
//        ^ keyword.operator.assignment.js
//          ^^^ keyword.other.js
//              ^^^ entity.name.class.js
//                 ^ punctuation.section.parens.begin.js
//                  ^ punctuation.section.parens.end.js
//              ^^^^^ meta.function-call.js

const dog = new Dog
// <- storage.type.js
//^^^ storage.type.js
//    ^^^ variable.other.constant.js
//        ^ keyword.operator.assignment.js
//          ^^^ keyword.other.js
//              ^^^ entity.name.class.js

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

  3<something
//^ constant.numeric.js
// ^ keyword.operator.logical.js
//  ^^^^^^^^^ variable.other.readwrite.js

const s = <div className={css.something}>
// <- storage.type.js
//^^^ storage.type.js
//    ^ variable.other.constant.js
//      ^ keyword.operator.assignment.js
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.tag.js
//        ^ punctuation.definition.generic.begin.js
//         ^^^ entity.name.tag.js
//             ^^^^^^^^^ entity.other.attribute-name.js
//                      ^ punctuation.separator.js
//                       ^ punctuation.definition.generic.begin.js
//                        ^^^ variable.other.readwrite.js
//                           ^ punctuation.accessor.js
//                            ^^^^^^^^^ variable.other.member.js
//                                     ^ punctuation.definition.generic.end.js
//                                      ^ punctuation.definition.generic.end.js
  some text here and {'value'}
//^^^^^^^^^^^^^^^^^^^ text.xml.js
//                   ^ punctuation.definition.generic.begin.js
//                    ^ punctuation.definition.string.js
//                     ^^^^^ string.quoted.single.js
//                          ^ punctuation.definition.string.js
//                           ^ punctuation.definition.generic.end.js
  // this is some text that looks like single-line comment
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ text.xml.js
  /* this is some text that looks like multi-line comment */
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ text.xml.js
  &copy;
//^ punctuation.definition.keyword.js
// ^^^^ constant.character.js
//     ^ punctuation.definition.keyword.js
  &#x00022;
//^ punctuation.definition.keyword.js
// ^^^^^^^ constant.character.js
//        ^ punctuation.definition.keyword.js
  &#x0002C;
//^ punctuation.definition.keyword.js
// ^^^^^^^ constant.character.js
//        ^ punctuation.definition.keyword.js
  &#34;
//^ punctuation.definition.keyword.js
// ^^^ constant.character.js
//    ^ punctuation.definition.keyword.js
 </div>
 // <- meta.tag.js
//^^^^^ meta.tag.js
// ^^^ entity.name.tag.js
 // <- punctuation.definition.generic.begin.js
//^ punctuation.definition.generic.begin.js
//    ^ punctuation.definition.generic.end.js

const s = (
// <- storage.type.js
//^^^ storage.type.js
//    ^ variable.other.constant.js
//      ^ keyword.operator.assignment.js
//        ^ punctuation.section.parens.begin.js
  <div className="something">
//^ punctuation.definition.generic.begin.js
// ^^^ entity.name.tag.js
//     ^^^^^^^^^ entity.other.attribute-name.js
//              ^ punctuation.separator.js
//               ^ punctuation.definition.string.js
//                ^^^^^^^^^ string.quoted.double.js
//                         ^ punctuation.definition.string.js
//                          ^ punctuation.definition.generic.end.js
// ^^^ entity.name.tag.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.tag.js
  </div>
//^^^^^^ meta.tag.js
//^^ punctuation.definition.generic.begin.js
//  ^^^ entity.name.tag.js
//     ^ punctuation.definition.generic.end.js
)
// <- punctuation.section.parens.end.js

const s = <d.v />
// <- storage.type.js
//^^^ storage.type.js
//    ^ variable.other.constant.js
//      ^ keyword.operator.assignment.js
//        ^^^^^^^ meta.tag.js
//        ^ punctuation.definition.generic.begin.js
//         ^^^ entity.name.tag.js
//             ^^ punctuation.definition.generic.end.js

const s = <div
  // this is a real comment
//^^^^^^^^^^^^^^^^^^^^^^^^^ comment.line.js
  id="my-id"
//^^ entity.other.attribute-name.js
//  ^ punctuation.separator.js
//   ^ punctuation.definition.string.js
//    ^^^^^ string.quoted.double.js
//         ^ punctuation.definition.string.js
>
</div>

const s = <div disabled />
//        ^ punctuation.definition.generic.begin.js
//         ^^^ entity.name.tag.js
//             ^^^^^^^^ entity.other.attribute-name.js
//                      ^^ punctuation.definition.generic.end.js

const s = (
  <div
//^ punctuation.definition.generic.begin.js
// ^^^ entity.name.tag.js
    className="wrapper"
//  ^^^^^^^^^ entity.other.attribute-name.js
//           ^ punctuation.separator.js
//            ^ punctuation.definition.string.js
//             ^^^^^^^ string.quoted.double.js
//                    ^ punctuation.definition.string.js
    style={{
//  ^^^^^ entity.other.attribute-name.js
//       ^ punctuation.separator.js
//        ^ punctuation.definition.generic.begin.js
//         ^ punctuation.section.braces.begin.js
      width: '500px'
// <- meta.braces.js
//    ^^^^^ variable.other.member.js
//    ^^^^^ string.unquoted.js
//         ^ punctuation.separator.js
//           ^ punctuation.definition.string.js
//            ^^^^^ string.quoted.single.js
//                 ^ punctuation.definition.string.js
    }}
//  ^ punctuation.section.braces.end.js
//   ^ punctuation.definition.generic.end.js
  >
//^ punctuation.definition.generic.end.js
    <span className="innerText">some text</span>
//  ^ punctuation.definition.generic.begin.js
//   ^^^^ entity.name.tag.js
//        ^^^^^^^^^ entity.other.attribute-name.js
//                 ^ punctuation.separator.js
//                  ^ punctuation.definition.string.js
//                   ^^^^^^^^^ string.quoted.double.js
//                            ^ punctuation.definition.string.js
//                             ^ punctuation.definition.generic.end.js
//                              ^^^^^^^^^ text.xml.js
//                                       ^^ punctuation.definition.generic.begin.js
//                                         ^^^^ entity.name.tag.js
//                                             ^ punctuation.definition.generic.end.js
  </div>
//^^ punctuation.definition.generic.begin.js
//  ^^^ entity.name.tag.js
//     ^ punctuation.definition.generic.end.js
)

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

const simpleFn = x => x * 2
// <- storage.type.js
//^^^ storage.type.js
//^^^^^^^^^^^^^^^ meta.function.js
//    ^^^^^^^^ entity.name.function.js
//             ^ keyword.operator.assignment.js
//               ^ variable.parameter.js
//               ^ meta.function.parameters.js
//                 ^^ storage.type.js
//                    ^ variable.other.readwrite.js
//                      ^ keyword.operator.arithmetic.js
//                        ^ constant.numeric.js
//                 ^^^^^^^^ meta.function.js

const arrowFun = (value1, value2) => {
// <- storage.type.js
//^^^ storage.type.js
//^^^^^^^^^^^^^^^ meta.function.js
//    ^^^^^^^^ entity.name.function.js
//             ^ keyword.operator.assignment.js
//               ^ punctuation.section.parens.begin.js
//                ^^^^^^^^^^^^^^ meta.function.parameters.js meta.parens.js
//                ^^^^^^ variable.parameter.js
//                      ^ punctuation.separator.js
//                        ^^^^^^ variable.parameter.js
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

const arrowFun = async value => {
// <- storage.type.js
//^^^ storage.type.js
//               ^^^^^ storage.modifier.js
//    ^^^^^^^^ entity.name.function.js
//    ^^^^^^^^^^^^^^^^^ meta.function.js
//                     ^^^^^ meta.function.parameters.js
//                     ^^^^^ variable.parameter.js
//                          ^^^^^ meta.function.js
  return isFinite(Infinity)
// <- meta.function.js
//^^^^^^ keyword.control.js
//       ^^^^^^^^^^^^^^^^^^ meta.function-call.js
}

  (() => {
//^ punctuation.section.parens.begin.js
// ^ punctuation.section.parens.begin.js
//  ^ punctuation.section.parens.end.js
//    ^^ storage.type.js
//       ^ punctuation.section.block.begin.js
  console.log('I am an immediately invoked arrow function')
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function-call.js
// <- meta.function.js
// <- meta.block.js
})()
// <- punctuation.section.block.end.js
//^ punctuation.section.parens.begin.js
// ^ punctuation.section.parens.end.js

  (arg => {
//^ punctuation.section.parens.begin.js
// ^^^ meta.function.parameters.js
// ^^^ variable.parameter.js
//     ^^ storage.type.js
//        ^ punctuation.section.block.begin.js
  console.log('I am an immediately invoked arrow function with argument')
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function-call.js
// <- meta.function.js
// <- meta.block.js
})()
// <- punctuation.section.block.end.js
//^ punctuation.section.parens.begin.js
// ^ punctuation.section.parens.end.js

  (async () => {
//^ punctuation.section.parens.begin.js
// ^^^^^ storage.modifier.js
//       ^ punctuation.section.parens.begin.js
//        ^ punctuation.section.parens.end.js
//          ^^ storage.type.js
//             ^ punctuation.section.block.begin.js
  console.log('I am an immediately invoked async arrow function')
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function-call.js
// <- meta.function.js
// <- meta.block.js
})()
// <- punctuation.section.block.end.js
//^ punctuation.section.parens.begin.js
// ^ punctuation.section.parens.end.js

  (async arg => {
//^ punctuation.section.parens.begin.js
// ^^^^^ storage.modifier.js
//       ^^^ meta.function.parameters.js
//       ^^^ variable.parameter.js
//           ^^ storage.type.js
//              ^ punctuation.section.block.begin.js
  console.log('I am an immediately invoked async arrow function with argument')
//        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function-call.js
// <- meta.function.js
// <- meta.block.js
})()
// <- punctuation.section.block.end.js
//^ punctuation.section.parens.begin.js
// ^ punctuation.section.parens.end.js

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

isFinite
// <- support.function.js
//^^^^^^ support.function.js

if (isFinite(NaN)) console.log('something')
// <- keyword.control.conditional.js
//  ^^^^^^^^^^^^^  meta.function-call.js
// ^ punctuation.section.parens.begin.js
//  ^^^^^^^^^^^^^ meta.parens.js
//          ^ meta.parens.js meta.function-call.js punctuation.section.parens.begin.js
//           ^^^ meta.parens.js meta.parens.js
//              ^ meta.parens.js meta.function-call.js punctuation.section.parens.end.js
//                 ^^^^^^^ support.type.js
//                        ^ punctuation.accessor.js
//                         ^^^^^^^^^^^^^^^^ meta.function-call.js

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

switch (someVar + 5) {
// <- keyword.control.conditional.js
//^^^^ keyword.control.conditional.js
//     ^ punctuation.section.parens.begin.js
//      ^^^^^^^^^^^ meta.parens.js
//      ^^^^^^^ variable.other.readwrite.js
//              ^ keyword.operator.arithmetic.js
//                ^ constant.numeric.js
//                 ^ punctuation.section.parens.end.js
//                   ^ punctuation.section.block.begin.js
  case 5 +5:
//^^^^ keyword.control.conditional.js
//     ^ constant.numeric.js
//       ^ keyword.operator.arithmetic.js
//        ^ constant.numeric.js
//         ^ punctuation.terminator.js
    console.log('someVar equals', 5 +5)
//  ^^^^^^^ support.type.js
//         ^ punctuation.accessor.js
//          ^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function-call.js
//             ^ punctuation.section.parens.begin.js
//              ^ punctuation.definition.string.js
//               ^^^^^^^^^^^^^^ string.quoted.single.js
//                             ^ punctuation.definition.string.js
//                              ^ punctuation.separator.js
//                                ^ constant.numeric.js
//                                  ^ keyword.operator.arithmetic.js
//                                   ^ constant.numeric.js
//                                    ^ punctuation.section.parens.end.js
    break
//  ^^^^^ keyword.control.js
  case 4 * 2:
//^^^^ keyword.control.conditional.js
//     ^ constant.numeric.js
//       ^ keyword.operator.arithmetic.js
//         ^ constant.numeric.js
//          ^ punctuation.terminator.js
  case 5 - 3:
//^^^^ keyword.control.conditional.js
//     ^ constant.numeric.js
//       ^ keyword.operator.arithmetic.js
//         ^ constant.numeric.js
//          ^ punctuation.terminator.js
    break
// <- meta.block.js
  case 5..toString():
//^^^^ keyword.control.conditional.js
//     ^^ constant.numeric.js
//       ^ punctuation.accessor.js
//        ^^^^^^^^^^ meta.function-call.js
//                ^ punctuation.section.parens.begin.js
//                 ^ punctuation.section.parens.end.js
//                  ^ punctuation.terminator.js
    console.log('someVar equals', 5..toString())
    break
//  ^^^^^ keyword.control.js
// <- meta.block.js
  default:
//^^^^^^^ keyword.control.conditional.js
//       ^ punctuation.terminator.js
// <- meta.block.js
}
// <- punctuation.section.block.end.js

const f = (5 + 8, 10)
// <- storage.type.js
//^^^ storage.type.js
//    ^ variable.other.constant.js
//      ^ keyword.operator.assignment.js
//        ^ punctuation.section.parens.begin.js
//         ^ constant.numeric.js
//           ^ keyword.operator.arithmetic.js
//             ^ constant.numeric.js
//              ^ keyword.operator.js
//                ^^ constant.numeric.js
//         ^^^^^^^^^ meta.parens.js
//                  ^ punctuation.section.parens.end.js

for (let i = 0, j = 0; i < 10, j < 10; i++, j++) {
// <- keyword.control.js
//^ keyword.control.js
//  ^ punctuation.section.parens.begin.js
//   ^^^ storage.type.js
//       ^ variable.other.readwrite.js
//         ^ keyword.operator.assignment.js
//           ^ constant.numeric.js
//            ^ punctuation.separator.js
//              ^ variable.other.readwrite.js
//                ^ keyword.operator.assignment.js
//                  ^ constant.numeric.js
//                   ^ punctuation.terminator.js
//                     ^ variable.other.readwrite.js
//                       ^ keyword.operator.logical.js
//                         ^^ constant.numeric.js
//                           ^ keyword.operator.js
//                             ^ variable.other.readwrite.js
//                               ^ keyword.operator.logical.js
//                                 ^^ constant.numeric.js
//                                   ^ punctuation.terminator.js
//                                     ^ variable.other.readwrite.js
//                                      ^^ keyword.operator.arithmetic.js
//                                        ^ keyword.operator.js
//                                          ^ variable.other.readwrite.js
//                                           ^^ keyword.operator.arithmetic.js
//   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.parens.js
//                                             ^ punctuation.section.parens.end.js
//                                               ^ punctuation.section.block.begin.js
  console.log('iteration:', i)
// <- meta.block.js
//^^^^^^^ support.type.js
//       ^ punctuation.accessor.js
//           ^ punctuation.section.parens.begin.js
//            ^ punctuation.definition.string.js
//             ^^^^^^^^^^ string.quoted.single.js
//                       ^ punctuation.definition.string.js
//                        ^ punctuation.separator.js
//                          ^ variable.other.readwrite.js
//            ^^^^^^^^^^^^^^^ meta.parens.js
//                           ^ punctuation.section.parens.end.js
//        ^^^^^^^^^^^^^^^^^^^^ meta.function-call.js
}
// <- punctuation.section.block.end.js

for (let i = 0, j = 0; i < 10, j < 10; i++, j++)
// <- keyword.control.js
//^ keyword.control.js
//  ^ punctuation.section.parens.begin.js
//   ^^^ storage.type.js
//       ^ variable.other.readwrite.js
//         ^ keyword.operator.assignment.js
//           ^ constant.numeric.js
//            ^ punctuation.separator.js
//              ^ variable.other.readwrite.js
//                ^ keyword.operator.assignment.js
//                  ^ constant.numeric.js
//                   ^ punctuation.terminator.js
//                     ^ variable.other.readwrite.js
//                       ^ keyword.operator.logical.js
//                         ^^ constant.numeric.js
//                           ^ keyword.operator.js
//                             ^ variable.other.readwrite.js
//                               ^ keyword.operator.logical.js
//                                 ^^ constant.numeric.js
//                                   ^ punctuation.terminator.js
//                                     ^ variable.other.readwrite.js
//                                      ^^ keyword.operator.arithmetic.js
//                                        ^ keyword.operator.js
//                                          ^ variable.other.readwrite.js
//                                           ^^ keyword.operator.arithmetic.js
//   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.parens.js
//                                             ^ punctuation.section.parens.end.js
  console.log("iteration:", i)
//^^^^^^^ support.type.js
//       ^ punctuation.accessor.js
//           ^ punctuation.section.parens.begin.js
//            ^ punctuation.definition.string.js
//             ^^^^^^^^^^ string.quoted.double.js
//                       ^ punctuation.definition.string.js
//                        ^ punctuation.separator.js
//                          ^ variable.other.readwrite.js
//            ^^^^^^^^^^^^^^^ meta.parens.js
//                           ^ punctuation.section.parens.end.js
//        ^^^^^^^^^^^^^^^^^^^^ meta.function-call.js

for (let i of [1, 2,,3]) {
// <- keyword.control.js
//^ keyword.control.js
//  ^ punctuation.section.parens.begin.js
//   ^^^ storage.type.js
//       ^ variable.other.readwrite.js
//         ^^ keyword.control.js
//            ^ punctuation.section.brackets.begin.js
//             ^^^^^^^ meta.brackets.js
//             ^ constant.numeric.js
//              ^ punctuation.separator.js
//                ^ constant.numeric.js
//                 ^ punctuation.separator.js
//                  ^ punctuation.separator.js
//                   ^ constant.numeric.js
//                    ^ punctuation.section.brackets.end.js
//                     ^ punctuation.section.parens.end.js
//                       ^ punctuation.section.block.begin.js
  console.log('iteration:', i)
// <- meta.block.js
//^^^^^^^ support.type.js
//       ^ punctuation.accessor.js
//           ^ punctuation.section.parens.begin.js
//            ^ punctuation.definition.string.js
//             ^^^^^^^^^^ string.quoted.single.js
//                       ^ punctuation.definition.string.js
//                        ^ punctuation.separator.js
//                          ^ variable.other.readwrite.js
//            ^^^^^^^^^^^^^^^ meta.parens.js
//                           ^ punctuation.section.parens.end.js
//        ^^^^^^^^^^^^^^^^^^^^ meta.function-call.js
}
// <- punctuation.section.block.end.js

for (let i of [1, 2,,3])
// <- keyword.control.js
//^ keyword.control.js
//  ^ punctuation.section.parens.begin.js
//   ^^^ storage.type.js
//       ^ variable.other.readwrite.js
//         ^^ keyword.control.js
//            ^ punctuation.section.brackets.begin.js
//             ^^^^^^^ meta.brackets.js
//             ^ constant.numeric.js
//              ^ punctuation.separator.js
//                ^ constant.numeric.js
//                 ^ punctuation.separator.js
//                  ^ punctuation.separator.js
//                   ^ constant.numeric.js
//                    ^ punctuation.section.brackets.end.js
//                     ^ punctuation.section.parens.end.js
  console.log("iteration:", i)
//^^^^^^^ support.type.js
//       ^ punctuation.accessor.js
//           ^ punctuation.section.parens.begin.js
//            ^ punctuation.definition.string.js
//             ^^^^^^^^^^ string.quoted.double.js
//                       ^ punctuation.definition.string.js
//                        ^ punctuation.separator.js
//                          ^ variable.other.readwrite.js
//            ^^^^^^^^^^^^^^^ meta.parens.js
//                           ^ punctuation.section.parens.end.js
//        ^^^^^^^^^^^^^^^^^^^^ meta.function-call.js

while (i < 5) {
// <- keyword.control.js
//^^^ keyword.control.js
//    ^ punctuation.section.parens.begin.js
//     ^ variable.other.readwrite.js
//       ^ keyword.operator.logical.js
//         ^ constant.numeric.js
//          ^ punctuation.section.parens.end.js
//            ^ punctuation.section.block.begin.js
  console.log('iteration:', i)
// <- meta.block.js
//^^^^^^^ support.type.js
//       ^ punctuation.accessor.js
//           ^ punctuation.section.parens.begin.js
//            ^ punctuation.definition.string.js
//             ^^^^^^^^^^ string.quoted.single.js
//                       ^ punctuation.definition.string.js
//                        ^ punctuation.separator.js
//                          ^ variable.other.readwrite.js
//            ^^^^^^^^^^^^^^^ meta.parens.js
//                           ^ punctuation.section.parens.end.js
//        ^^^^^^^^^^^^^^^^^^^^ meta.function-call.js
}
// <- punctuation.section.block.end.js

while (i < 5)
// <- keyword.control.js
//^^^ keyword.control.js
//    ^ punctuation.section.parens.begin.js
//     ^ variable.other.readwrite.js
//       ^ keyword.operator.logical.js
//         ^ constant.numeric.js
//          ^ punctuation.section.parens.end.js
  console.log("iteration:", i)
//^^^^^^^ support.type.js
//       ^ punctuation.accessor.js
//           ^ punctuation.section.parens.begin.js
//            ^ punctuation.definition.string.js
//             ^^^^^^^^^^ string.quoted.double.js
//                       ^ punctuation.definition.string.js
//                        ^ punctuation.separator.js
//                          ^ variable.other.readwrite.js
//            ^^^^^^^^^^^^^^^ meta.parens.js
//                           ^ punctuation.section.parens.end.js
//        ^^^^^^^^^^^^^^^^^^^^ meta.function-call.js

while (true) {
// <- keyword.control.js
//^^^ keyword.control.js
//    ^ punctuation.section.parens.begin.js
//     ^^^^ constant.language.js
//         ^ punctuation.section.parens.end.js
//           ^ punctuation.section.block.begin.js
  if (Math.random() > 0.5) {
    continue
//  ^^^^^^^^ keyword.control.js
  } else {
    break
//  ^^^^^ keyword.control.js
  }
}
// <- punctuation.section.block.end.js

try {
// <- keyword.control.js
//^ keyword.control.js
//  ^ punctuation.section.block.begin.js
  localStorage.setItem('itemName', 'itemValue')
// <- meta.block.js
//             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function-call.js
} catch (err) {
// <- punctuation.section.block.end.js
//^^^^^ keyword.control.js
//      ^ punctuation.section.parens.begin.js
//       ^^^ variable.other.readwrite.js
//          ^ punctuation.section.parens.end.js
//            ^ punctuation.section.block.begin.js
  alert('localStorage usage is not allowed')
// <- meta.block.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function-call.js
}
// <- punctuation.section.block.end.js

try {
// <- keyword.control.js
//^ keyword.control.js
//  ^ punctuation.section.block.begin.js
  localStorage.setItem('itemName', 'itemValue')
// <- meta.block.js
//             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function-call.js
} catch (err) {
// <- punctuation.section.block.end.js
//^^^^^ keyword.control.js
//      ^ punctuation.section.parens.begin.js
//       ^^^ variable.other.readwrite.js
//          ^ punctuation.section.parens.end.js
//            ^ punctuation.section.block.begin.js
  alert('localStorage usage is not allowed')
// <- meta.block.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function-call.js
} finally {
// <- punctuation.section.block.end.js
//^^^^^^^ keyword.control.js
  freeResources()
//^^^^^^^^^^^^^^^ meta.function-call.js
}
// <- punctuation.section.block.end.js

try {
// <- keyword.control.js
//^ keyword.control.js
//  ^ punctuation.section.block.begin.js
  localStorage.setItem('itemName', 'itemValue')
// <- meta.block.js
//             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.function-call.js
} finally {
// <- punctuation.section.block.end.js
//^^^^^^^ keyword.control.js
  freeResources()
//^^^^^^^^^^^^^^^ meta.function-call.js
}
// <- punctuation.section.block.end.js

import 'react'
// <- keyword.control.import.js
//^^^^ keyword.control.import.js
//     ^ punctuation.definition.string.js
//      ^^^^^ string.quoted.single.js
//           ^ punctuation.definition.string.js

import React from "react"
// <- keyword.control.import.js
//^^^^ keyword.control.import.js
//     ^^^^^ variable.other.constant.js
//           ^^^^ keyword.control.import.js
//                ^ punctuation.definition.string.js
//                 ^^^^^ string.quoted.double.js
//                      ^ punctuation.definition.string.js

import {PropTypes} from 'react'
// <- keyword.control.import.js
//^^^^ keyword.control.import.js
//     ^ punctuation.section.braces.begin.js
//      ^^^^^^^^^ meta.braces.js
//      ^^^^^^^^^ variable.other.constant.js
//               ^ punctuation.section.braces.end.js
//                 ^^^^ keyword.control.import.js
//                      ^ punctuation.definition.string.js
//                       ^^^^^ string.quoted.single.js
//                            ^ punctuation.definition.string.js

import {PropTypes as T} from "react"
// <- keyword.control.import.js
//^^^^ keyword.control.import.js
//      ^^^^^^^^^^^^^^ meta.braces.js
//     ^ punctuation.section.braces.begin.js
//      ^^^^^^^^^ variable.other.constant.js
//                ^^ keyword.control.import.js
//                   ^ variable.other.constant.js
//                    ^ punctuation.section.braces.end.js
//                      ^^^^ keyword.control.import.js
//                           ^ punctuation.definition.string.js
//                            ^^^^^ string.quoted.double.js
//                                 ^ punctuation.definition.string.js

import React, {PropTypes as T} from 'react'
// <- keyword.control.import.js
//^^^^ keyword.control.import.js
//     ^^^^^ variable.other.constant.js
//          ^ punctuation.separator.js
//            ^ punctuation.section.braces.begin.js
//             ^^^^^^^^^ variable.other.constant.js
//             ^^^^^^^^^^^^^^ meta.braces.js
//                       ^^ keyword.control.import.js
//                          ^ variable.other.constant.js
//                           ^ punctuation.section.braces.end.js
//                             ^^^^ keyword.control.import.js
//                                  ^ punctuation.definition.string.js
//                                   ^^^^^ string.quoted.single.js
//                                        ^ punctuation.definition.string.js

import * as all from 'react'
// <- keyword.control.import.js
//^^^^ keyword.control.import.js
//     ^ keyword.control.import.js
//       ^^ keyword.control.import.js
//          ^^^ variable.other.constant.js
//              ^^^^ keyword.control.import.js
//                   ^ punctuation.definition.string.js
//                    ^^^^^ string.quoted.single.js
//                         ^ punctuation.definition.string.js

export function() {
// <- keyword.control.import.js
//^^^^ keyword.control.import.js
//     ^^^^^^^^^^^^ meta.function.js
//     ^^^^^^^^ storage.type.js
//             ^ punctuation.section.parens.begin.js
//              ^ punctuation.section.parens.end.js
//                ^ punctuation.section.block.begin.js
}
// <- punctuation.section.block.end.js

export default function() {
// <- keyword.control.import.js
//^^^^ keyword.control.import.js
//     ^^^^^^^ keyword.control.import.js
//             ^^^^^^^^^^^^ meta.function.js
//             ^^^^^^^^ storage.type.js
//                     ^ punctuation.section.parens.begin.js
//                      ^ punctuation.section.parens.end.js
//                        ^ punctuation.section.block.begin.js
}
// <- punctuation.section.block.end.js

type Props = {
// <- storage.type.js
//^^ storage.type.js
//^^^^^^^^^^^^ meta.type.js
//   ^^^^^ entity.name.type.js
//         ^ keyword.operator.assignment.js
//           ^ punctuation.section.braces.begin.js
  disabled?: ?boolean,
//^^^^^^^^ variable.other.member.js
//^^^^^^^^ string.unquoted.js
//        ^ storage.modifier.js
//         ^ punctuation.separator.js
//           ^ storage.modifier.js
//            ^^^^^^^ storage.type.js
//            ^^^^^^^ support.type.js
//                   ^ punctuation.separator.js
// <- meta.braces.js
  disabled2: ?boolean,
//^^^^^^^^^ variable.other.member.js
//^^^^^^^^^ string.unquoted.js
//         ^ punctuation.separator.js
//           ^ storage.modifier.js
//            ^^^^^^^ support.type.js
//                   ^ punctuation.separator.js
// <- meta.braces.js
  disabled3: boolean
//^^^^^^^^^ variable.other.member.js
//^^^^^^^^^ string.unquoted.js
//         ^ punctuation.separator.js
//           ^^^^^^^ support.type.js
// <- meta.braces.js
}
// <- punctuation.section.braces.end.js

x = 5
// <- variable.other.readwrite.js
//^ keyword.operator.assignment.js
//  ^ constant.numeric.js

type Callback = () => void
// <- storage.type.js
//^^ storage.type.js
//   ^^^^^^^^ entity.name.type.js
//            ^ keyword.operator.assignment.js
//              ^ punctuation.section.parens.begin.js
//               ^ punctuation.section.parens.end.js
//                 ^^ storage.type.js
//                    ^^^^ support.type.js
//^^^^^^^^^^^^^^^^^^^^^^^^ meta.type.js

type AnotherCallback = (arg1: string, arg2: number) => void
// <- storage.type.js
//^^ storage.type.js
//   ^^^^^^^^^^^^^^^ entity.name.type.js
//                   ^ keyword.operator.assignment.js
//                     ^ punctuation.section.parens.begin.js
//                      ^^^^ variable.parameter.js
//                          ^ punctuation.separator.js
//                            ^^^^^^ support.type.js
//                                  ^ punctuation.separator.js
//                                    ^^^^ variable.parameter.js
//                                        ^ punctuation.separator.js
//                                          ^^^^^^ support.type.js
//                                                ^ punctuation.section.parens.end.js
//                                                  ^^ storage.type.js
//                                                     ^^^^ support.type.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.type.js

type Dispatch = (a: Thunk<A, R>) => R
// <- storage.type.js
//^^ storage.type.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.type.js
//   ^^^^^^^^ entity.name.type.js
//            ^ keyword.operator.assignment.js
//              ^ punctuation.section.parens.begin.js
//               ^ variable.parameter.js
//                ^ punctuation.separator.js
//                       ^ punctuation.definition.generic.begin.js
//                        ^ variable.parameter.js
//                         ^ punctuation.separator.js
//                           ^ variable.parameter.js
//                             ^ punctuation.section.parens.end.js
//                              ^^ storage.type.js

type Dispatch<A> = <R>(a: Thunk<A, R>) => R
// <- storage.type.js
//^^ storage.type.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.type.js
//   ^^^^^^^^ entity.name.type.js
//           ^ punctuation.definition.generic.begin.js
//            ^ variable.parameter.js
//             ^ punctuation.definition.generic.end.js
//               ^ keyword.operator.assignment.js
//                 ^ punctuation.definition.generic.begin.js
//                  ^ variable.parameter.js
//                   ^ punctuation.definition.generic.end.js
//                    ^ punctuation.section.parens.begin.js
//                     ^ variable.parameter.js
//                      ^ punctuation.separator.js
//                             ^ punctuation.definition.generic.begin.js
//                              ^ variable.parameter.js
//                               ^ punctuation.separator.js
//                                 ^ variable.parameter.js
//                                   ^ punctuation.section.parens.end.js
//                                     ^^ storage.type.js

type Dispatch<A> = (a: A) => void
// <- storage.type.js
//^^ storage.type.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.type.js
//   ^^^^^^^^ entity.name.type.js
//           ^ punctuation.definition.generic.begin.js
//            ^ variable.parameter.js
//             ^ punctuation.definition.generic.end.js
//               ^ keyword.operator.assignment.js
//                 ^ punctuation.section.parens.begin.js
//                  ^ variable.parameter.js
//                   ^ punctuation.separator.js
//                      ^ punctuation.section.parens.end.js
//                           ^^^^ support.type.js

type Dispatch<A> = (<R>(a: Thunk<A, R>) => R) & ((a: A) => void)
// <- storage.type.js
//^^ storage.type.js
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.type.js
//   ^^^^^^^^ entity.name.type.js
//           ^ punctuation.definition.generic.begin.js
//            ^ variable.parameter.js
//             ^ punctuation.definition.generic.end.js
//               ^ keyword.operator.assignment.js
//                 ^ punctuation.section.parens.begin.js
//                  ^ punctuation.definition.generic.begin.js
//                   ^ variable.parameter.js
//                    ^ punctuation.definition.generic.end.js
//                     ^ punctuation.section.parens.begin.js
//                      ^ variable.parameter.js
//                       ^ punctuation.separator.js
//                         ^^^^^^^^^^^ storage.type.js
//                              ^ punctuation.definition.generic.begin.js
//                               ^ variable.parameter.js
//                                ^ punctuation.separator.js
//                                  ^ variable.parameter.js
//                                    ^ punctuation.section.parens.end.js
//                                      ^^ storage.type.js
//                                         ^ storage.type.js
//                                          ^ punctuation.section.parens.end.js
//                                            ^ keyword.operator.js
//                                              ^ punctuation.section.parens.begin.js
//                                               ^ punctuation.section.parens.begin.js
//                                                ^ variable.parameter.js
//                                                 ^ punctuation.separator.js
//                                                   ^ storage.type.js
//                                                    ^ punctuation.section.parens.end.js
//                                                      ^ storage.type.js
//                                                         ^^^^ storage.type.js support.type.js
//                                                             ^ punctuation.section.parens.end.js

type UnionType =
// <- storage.type.js
//^^ storage.type.js
//   ^^^^^^^^^ entity.name.type.js
//             ^ keyword.operator.assignment.js
  | Some
//^ keyword.operator.js
//  ^^^^ storage.type.js
  | None
//^ keyword.operator.js
//  ^^^^ storage.type.js

type StringOrBoolean =
// <- storage.type.js
//^^ storage.type.js
//   ^^^^^^^^^^^^^^^ entity.name.type.js
//                   ^ keyword.operator.assignment.js
  | string
//^ keyword.operator.js
//  ^^^^^^ storage.type.js
//  ^^^^^^ support.type.js
  | boolean
//^ keyword.operator.js
//  ^^^^^^^ storage.type.js
//  ^^^^^^^ support.type.js
