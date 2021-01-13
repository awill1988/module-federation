import {clientSiteId, deepCopy, difference} from "@/utils";
import {Route} from "vue-router";

const assignMock = jest.fn();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
delete window.location;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.location = {assign: assignMock};

afterEach(() => {
  assignMock.mockClear();
});

describe("utils.deepCopy", () => {
  it("deepCopy copies primitives and shallow objects", () => {
    const shallowObj = {};
    expect(deepCopy(shallowObj)).toStrictEqual(shallowObj);
    const num = 1;
    expect(deepCopy(num)).toStrictEqual(num);
    const str = "1";
    expect(deepCopy(str)).toStrictEqual(str);
    const nullVal = null;
    expect(deepCopy(nullVal)).toStrictEqual(nullVal);
    const shallowArr: unknown[] = [];
    expect(deepCopy(shallowArr)).toStrictEqual(shallowArr);
  });
  it("deepCopy copies deeply", () => {
    const obj = {
      inner: {
        id: 0,
      },
      elements: [
        {
          id: 10,
        },
      ],
    };
    const copied = deepCopy<{inner: {id: number}; elements: unknown[]}>(obj);
    expect(copied).toStrictEqual(obj);
    obj.inner.id = 2;
    obj.elements.push({id: 110});
    expect(copied.inner.id).toEqual(0);
    expect(copied.elements.length).toEqual(1);
  });
});

describe("utils.clientSiteId", () => {
  it("gets client site id", () => {
    const to = {
      query: {},
    } as Route;
    expect(() => clientSiteId(to)).not.toThrow();
  });
});

describe("utils.difference", () => {
  it("calculates the difference between two objects when first object is empty", () => {
    const obj1 = {};
    const obj2 = {
      test: "1",
    };
    const expected = {
      ...obj2,
    };
    expect(difference(obj1, obj2)).toStrictEqual(expected);
  });
  it("calculates the difference between two objects when second object is empty", () => {
    const obj1 = {
      test: "1",
    };
    const obj2 = {};
    const expected = {
      ...obj1,
    };
    expect(difference(obj1, obj2)).toStrictEqual(expected);
  });
  it("expects zero fields when values are equal", () => {
    const obj1 = {
      test: "1",
    };
    const obj2 = {
      test: "1",
    };
    const expected = {};
    expect(difference(obj1, obj2)).toStrictEqual(expected);
  });
  it("expects 1 field when they are primitively different", () => {
    const obj1 = {
      test: "1",
    };
    const obj2 = {
      test: "",
    };
    const expected = {
      ...obj2,
    };
    expect(difference(obj1, obj2)).toStrictEqual(expected);
  });
  it("ok for arrays", () => {
    const obj1 = {
      test: null,
    };
    const obj2 = {
      test: ["1", "2"],
    };
    expect(difference(obj1, obj2)).toStrictEqual({
      ...obj2,
    });
    expect(difference(obj2, obj1)).toStrictEqual({
      ...obj1,
    });
    expect(difference(obj2, obj2)).toStrictEqual({});
  });
  it("recurses into objects", () => {
    const obj1 = {
      inner: {
        test: null,
      },
    };
    const obj2 = {
      inner: {
        test: ["1", "2"],
      },
    };
    expect(difference(obj1, obj2)).toStrictEqual({
      ...obj2,
    });
    expect(difference(obj2, obj1)).toStrictEqual({
      ...obj1,
    });
  });
  it("recurses into objects and handles new formats", () => {
    const obj1 = {
      inner: {
        test: {
          test: [],
        },
      },
    };
    const obj2 = {
      inner: {
        test: ["1", "2"],
      },
    };
    expect(difference(obj1, obj2)).toStrictEqual({
      ...obj2,
    });
    expect(difference(obj2, obj1)).toStrictEqual({
      ...obj1,
    });
  });
});
