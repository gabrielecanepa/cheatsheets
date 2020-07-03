# SCSS
- Website: http://sass-lang.com
- Docs: http://sass-lang.com/guide
- Tutorial: https://www.codecademy.com/learn/learn-sass

## Global Setup
Install on OS X: `sudo gem install sass`

## CLI Usage

Version info: `sass -v`

Compile: `sass styles.scss styles.css`

Auto-compile for single files: `sass --watch styles.scss:styles.css`

Auto-compile for folders: `sass --watch .`

## Usage in a project

Install it depending on the project.

Rails and other frameworks already have it integrated (with a gem or module):

- [`sassc-rails`](https://rubygems.org/gems/sassc-rails) on RubyGems.org
- [`sass`](https://www.npmjs.com/package/sass) on npm


### Notes
- There is no difference between underscores and dashes in variables: `$my_var === $my-var`
- Skip default spaces with a leading ampersand: `&:hover`
- Skip default nesting with an ending ampersand `body.blog &`
- Prevent compiling for `@import` with a leading underscore: `_normalize.scss`

### Functions
Docs: http://sass-lang.com/documentation/Sass/Script/Functions.html
