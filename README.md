# Minimal reproduction

Running tests on the repository with Nx gives the following result:

```
nx run test-analogjs-vitest:test          

> nx run test-analogjs-vitest:test

 RUN  v2.1.4 C:/dev/analogjs-vitest-test/libs/test-analogjs-vitest
 ❯ src/lib/test-component/test.component.spec.ts  (0 test)
⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯
 FAIL  src/lib/test-component/test.component.spec.ts [ src/lib/test-component/test.component.spec.ts ]
SyntaxError: Cannot use import statement outside a module
 ❯ src/test-setup.ts:4:19
      2| 
      3| import { getTestBed } from "@angular/core/testing";
      4| import {
       |                   ^
      5|   BrowserDynamicTestingModule,
      6|   platformBrowserDynamicTesting,
 Test Files  1 failed (1)
      Tests  no tests
   Start at  22:12:50
   Duration  818ms (transform 91ms, setup 0ms, collect 0ms, tests 0ms, environment 383ms, prepare 543ms)
Module C:/dev/analogjs-vitest-test/node_modules/@angular/core/fesm2022/testing.mjs:7 seems to be an ES Module but shipped in a CommonJS package. You might want to create an issue to the package "@angular/core" asking them to ship the file in .mjs extension or add "type": "module" in their package.json.
As a temporary workaround you can try to inline the package by updating your config:
// vitest.config.js
export default {
  test: {
    server: {
      deps: {
        inline: [
          "@angular/core"
        ]
      }
    }
  }
}

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— 

 NX   Ran target test for project test-analogjs-vitest (4s)

   ×  1/1 failed
   √  0/1 succeeded [0 read from cache]
```
