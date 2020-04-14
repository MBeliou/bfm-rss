import Parser from "rss-parser";
declare enum Topic {
    Politique = "politique",
    International = "international",
    Societe = "societe",
    Planete = "planete",
    Culture = "culture",
    Diaporama = "diaporama",
    Videos = "mediaplayer/actualite",
    Economie = "economie/actualite",
    FAI = "fai",
    Internet = "internet",
    Produit = "produit",
    Smartphone = "smartphone",
    Application = "application",
    JeuxVideos = "jeux-videos",
    Logiciel = "logiciel",
    ActuPeople = "actualite-people",
    Series = "series",
    Cinema = "cinema",
    Cuisine = "cuisine",
    PsychoSexo = "psycho-sexo",
    ActuTele = "actu-tele",
    Jardin = "jardin"
}
declare class BFMParser {
    private parser;
    private BASE_URL;
    /**
     *
     */
    constructor();
    parseTopic(topic: Topic): Promise<Parser.Output>;
    private makeURL;
}
export { BFMParser, Topic };
