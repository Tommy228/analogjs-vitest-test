# Minimal reproduction

* Install dependencies (`npm install`)
* Run the tests
```bash
cd libs/test-analogjs-vitest
npx vitest --run
```

This gives the following result:
```
 RUN  v2.1.4 C:/dev/analogjs-vitest-test/libs/test-analogjs-vitest

stderr | src/lib/test-component/test.component.spec.ts > TestComponent > test #1
Error: Need to call TestBed.initTestEnvironment() first
    at TestBedImpl.get compiler [as compiler] (file:///C:/packages/core/testing/src/test_bed.ts:724:13)
    at TestBedImpl.configureTestingModule (file:///C:/packages/core/testing/src/test_bed.ts:569:10)
    at Function.configureTestingModule (file:///C:/packages/core/testing/src/test_bed.ts:298:33)
    at file:///C:/dev/analogjs-vitest-test/node_modules/projects/spectator/src/lib/spectator/create-factory.ts:129:13
    at _ZoneDelegate.invoke (C:\dev\analogjs-vitest-test\node_modules\zone.js\bundles\zone.umd.js:411:30)
    at AsyncTestZoneSpec.onInvoke (C:\dev\analogjs-vitest-test\node_modules\zone.js\bundles\zone-testing.umd.js:1261:47)
    at ProxyZoneSpec.onInvoke (C:\dev\analogjs-vitest-test\node_modules\zone.js\bundles\zone-testing.umd.js:297:43)
    at _ZoneDelegate.invoke (C:\dev\analogjs-vitest-test\node_modules\zone.js\bundles\zone.umd.js:410:56)
    at Zone.runGuarded (C:\dev\analogjs-vitest-test\node_modules\zone.js\bundles\zone.umd.js:176:51)
    at runInTestZone (C:\dev\analogjs-vitest-test\node_modules\zone.js\bundles\zone-testing.umd.js:1409:33)

 ❯ src/lib/test-component/test.component.spec.ts (1)
   ❯ TestComponent (1)
     × test #1
       | [ beforeEach ]

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/lib/test-component/test.component.spec.ts > TestComponent > test #1
Error: Need to call TestBed.initTestEnvironment() first
 ❯ TestBedImpl.get compiler [as compiler] ../../../../packages/core/testing/src/test_bed.ts:724:13
 ❯ TestBedImpl.configureTestingModule ../../../../packages/core/testing/src/test_bed.ts:569:10
 ❯ Function.configureTestingModule ../../../../packages/core/testing/src/test_bed.ts:298:33
 ❯ ../../node_modules/projects/spectator/src/lib/spectator/create-factory.ts:129:13
 ❯ _ZoneDelegate.invoke ../../node_modules/zone.js/bundles/zone.umd.js:411:30
 ❯ AsyncTestZoneSpec.onInvoke ../../node_modules/zone.js/bundles/zone-testing.umd.js:1261:47
 ❯ ProxyZoneSpec.onInvoke ../../node_modules/zone.js/bundles/zone-testing.umd.js:297:43
 ❯ _ZoneDelegate.invoke ../../node_modules/zone.js/bundles/zone.umd.js:410:56
 ❯ Zone.runGuarded ../../node_modules/zone.js/bundles/zone.umd.js:176:51
 ❯ runInTestZone ../../node_modules/zone.js/bundles/zone-testing.umd.js:1409:33

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  1 failed (1)
   Start at  21:57:26
   Duration  2.96s (transform 1.56s, setup 1.44s, collect 312ms, tests 15ms, environment 357ms, prepare 1.02s)
```
