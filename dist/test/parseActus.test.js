"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../lib/index");
it("parses the actualités and print them", () => {
    expect.assertions(1);
    return index_1.parseActus().then((data) => expect(data.title).toEqual("Actualité - actualites"));
});
