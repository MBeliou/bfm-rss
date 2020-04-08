import { BFMParser, Topic } from "../lib/index";

describe("Tests if the topics are valid", () => {
  const parser = new BFMParser();

  it("tries to parse jardin", () => {
    //const parser = new BFMParser();
    expect.assertions(1);

    return parser
      .parseTopic(Topic.Jardin)
      .then((data) => expect(data.title).not.toEqual(""));
  });

  it("tries to parse actualités people", () => {
    //const parser = new BFMParser();
    expect.assertions(1);

    return parser
      .parseTopic(Topic.ActuPeople)
      .then((data) => expect(data.title).not.toEqual(""));
  });

  it("Tries to parse actualités economiques them", () => {
    expect.assertions(1);

    return parser
      .parseTopic(Topic.Economie)
      .then((data) => expect(data.title).toEqual("Actualité - actualites"));
  });
});
