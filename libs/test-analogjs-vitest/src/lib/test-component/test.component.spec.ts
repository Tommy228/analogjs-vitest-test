import { TestBed } from "@angular/core/testing";
import { beforeEach, describe, expect, it } from "vitest";
import { TestComponent } from "./test.component";

describe("TestComponent", () => {
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
    });
    component = TestBed.inject(TestComponent);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
