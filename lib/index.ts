import Parser from "rss-parser";

enum Topic {
  Politique = "politique",
  International = "international",
  Societe = "societe",
  Planete = "planete",
  Culture = "culture",
  Diaporama = "diaporama",
  Videos = "mediaplayer/actualite",

  // ECO
  Economie = "economie/actualite",

  // HIGH TECH
  FAI = "fai",
  Internet = "internet",
  Produit = "produit",
  Smartphone = "smartphone",
  Application = "application",
  JeuxVideos = "jeux-videos",
  Logiciel = "logiciel",

  // PEOPLE
  ActuPeople = "actualite-people",
  Series = "series",
  Cinema = "cinema",

  // VOUS
  Cuisine = "cuisine",
  PsychoSexo = "psycho-sexo",
  ActuTele = "actu-tele",
  Jardin = "jardin",
}

enum PreDomain {
  HighTech = "hightech",
  Vous = "vous",
  People = "people",
  None = "",
}

function getPreDomain(topic: Topic): PreDomain {
  if (
    topic == Topic.FAI ||
    topic == Topic.Internet ||
    topic == Topic.Produit ||
    topic == Topic.Smartphone ||
    topic == Topic.Application ||
    topic == Topic.JeuxVideos ||
    topic == Topic.Logiciel
  ) {
    return PreDomain.HighTech;
  }

  if (
    topic == Topic.ActuPeople ||
    topic == Topic.Series ||
    topic == Topic.Cinema
  ) {
    return PreDomain.People;
  }

  if (
    topic == Topic.Cuisine ||
    topic == Topic.PsychoSexo ||
    topic == Topic.Jardin ||
    topic == Topic.ActuTele
  ) {
    return PreDomain.Vous;
  }

  return PreDomain.None;
}

class BFMParser {
  private parser: Parser;
  private BASE_URL = "bfmtv.com/rss/";

  /**
   *
   */
  constructor() {
    this.parser = new Parser();
  }

  async parseTopic(topic: Topic): Promise<Parser.Output> {
    const url = this.makeURL(topic);

    try {
      let output = await this.parser.parseURL(url);
      return output;
    } catch (error) {
      throw error;
    }
  }

  private makeURL(topic: Topic): string {
    const predomain = getPreDomain(topic);
    if (predomain == PreDomain.None) {
      return `https://www.${this.BASE_URL}${topic}/`;
    } else {
      return `https://${predomain}.${this.BASE_URL}${topic}/`;
    }
  }
}

export { BFMParser, Topic };
