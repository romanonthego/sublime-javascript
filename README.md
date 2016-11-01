# Sublime JavaScript
JavaScript syntax highlighting for [SublimeText 3](https://www.sublimetext.com/) with support for es201x, [jsx](https://jsx.github.io/) and [flow](https://flowtype.org/) (tested only in [dev](https://www.sublimetext.com/3dev) builds, but should work starting from [Build 3103](https://www.sublimetext.com/blog/articles/sublime-text-3-build-3103), with introduction of [.sublime-syntax](https://www.sublimetext.com/docs/3/syntax.html))

## Screenshots

**NOTE** In current version, syntax highlighting might differ slightly,
This is a work-in-progress and is not officially released yet.

### Babel Sublime
![Babel Sublime](/screenshots/babel-sublime.png)

### Sublime Javascript
![Sublime JavaScript](/screenshots/sublime-javascript.png)

## Installation

There's only one way to install this package for now, Package Control support will come later, when it matures a bit.

1. First, you need to [Set Up Git](https://help.github.com/articles/set-up-git/)
2. Then [clone the repository](https://help.github.com/articles/cloning-a-repository/) into packages folder, which you can locate using sublime menu (`Preferences` -> `Browse Packages...`)
3. Set `JavaScript (Liberal)` as a syntax for open file (by clicking on the lower right corner of sublime window)

## Setting as a default syntax
**(NOT RECOMMENDED YET)**

Open some file with `.js` file extension or actually any other (at your own risk) and select `View` -> `Syntax` -> `Open all with current extension as...` -> `JavaScript (Liberal)` from sublime menu.

## Contributing
If you want to contribute, just clone this repo to your packages folder (Preferences -> Browser Packages... in sublime menu) and start hacking.

Even if you don't understand what's going on here, you could help writing tests (they just describe what should be highlighted and how, see tests folder).

Here are the links to sublime docs:
* https://www.sublimetext.com/docs/3/syntax.html
* https://www.sublimetext.com/docs/3/scope_naming.html

## License
Copyright (C) 2016  Sergey Slipchenko

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
