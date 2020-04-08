"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rss_parser_1 = __importDefault(require("rss-parser"));
const actualiteURL = "https://www.bfmtv.com/rss/economie/actualite/";
var Topic;
(function (Topic) {
    Topic["Politique"] = "politique";
    Topic["International"] = "international";
    Topic["Societe"] = "societe";
    Topic["Planete"] = "planete";
    Topic["Culture"] = "culture";
    Topic["Diaporama"] = "diaporama";
    Topic["Videos"] = "mediaplayer/actualite";
    // ECO
    Topic["Economie"] = "economie/actualite";
    // HIGH TECH
    Topic["FAI"] = "fai";
    Topic["Internet"] = "internet";
    Topic["Produit"] = "produit";
    Topic["Smartphone"] = "smartphone";
    Topic["Application"] = "application";
    Topic["JeuxVideos"] = "jeux-videos";
    Topic["Logiciel"] = "logiciel";
    // Diaporama = "diaporama" Doublon
    // PEOPLE
    Topic["ActuPeople"] = "actualite-people";
    Topic["Series"] = "series";
    Topic["Cinema"] = "cinema";
    // VOUS
    Topic["Cuisine"] = "cuisine";
    Topic["PsychoSexo"] = "psycho-sexo";
    Topic["ActuTele"] = "actu-tele";
    Topic["Jardin"] = "jardin";
})(Topic || (Topic = {}));
function parseActus() {
    return __awaiter(this, void 0, void 0, function* () {
        let rssParser = new rss_parser_1.default();
        let output = yield rssParser.parseURL(actualiteURL);
        return output;
    });
}
exports.parseActus = parseActus;
class BFMParser {
    /**
     *
     */
    constructor() {
        this.BASE_URL = "https://www.bfmtv.com/rss/";
        this.parser = new rss_parser_1.default();
    }
    parseActus() {
        return __awaiter(this, void 0, void 0, function* () {
            let output = yield this.parseTopic(Topic.Economie);
            return output;
        });
    }
    parseTopic(topic) {
        return __awaiter(this, void 0, void 0, function* () {
            let output = yield this.parser.parseURL(this.makeURL(topic));
            return output;
        });
    }
    makeURL(topic) {
        return `${this.BASE_URL}${topic}`;
    }
}
