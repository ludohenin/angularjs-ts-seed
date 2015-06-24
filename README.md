# Introduction

A seed project for AngularJS apps written in TypeScript.

_This project is heavily inspired by [angular2-seed](https://github.com/mgechev/angular2-seed)_

# Features
* AngularJS 1.4.x
* Angular New Router _(out-of-date, awaiting angularjs 1.5.x with the new router to update)_
* SystemJS

# Unit tests
* mocha
* chai
* sinon

# How to start

```bash
git clone https://github.com/ludohenin/angularjs-ts-seed
cd angularjs-ts-seed
npm install
# If you don't have gulp already installed
npm install -g gulp
# dev
gulp serve.dev
# prod
gulp serve.prod
# test
gulp test
```

# Note

There are some TypeScript errors related to `chai.d.ts` (expect not found) and `node.d.ts` dependency of `mocha.d.ts`.


# License

MIT
