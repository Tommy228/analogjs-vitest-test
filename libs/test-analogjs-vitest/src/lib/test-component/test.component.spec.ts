import { createComponentFactory } from '@ngneat/spectator';
import { TestComponent } from '@workspace/test-analogjs-vitest';

describe('TestComponent', () => {
  // Uses beforeEach.
  const createComponent = createComponentFactory(TestComponent);

  it('test #1', () => {
    expect(createComponent().component).toBeTruthy();
  });
});
