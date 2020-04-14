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
exports.Topic = Topic;
var PreDomain;
(function (PreDomain) {
    PreDomain["HighTech"] = "hightech";
    PreDomain["Vous"] = "vous";
    PreDomain["People"] = "people";
    PreDomain["None"] = "";
})(PreDomain || (PreDomain = {}));
function getPreDomain(topic) {
    if (topic == Topic.FAI ||
        topic == Topic.Internet ||
        topic == Topic.Produit ||
        topic == Topic.Smartphone ||
        topic == Topic.Application ||
        topic == Topic.JeuxVideos ||
        topic == Topic.Logiciel) {
        return PreDomain.HighTech;
    }
    if (topic == Topic.ActuPeople ||
        topic == Topic.Series ||
        topic == Topic.Cinema) {
        return PreDomain.People;
    }
    if (topic == Topic.Cuisine ||
        topic == Topic.PsychoSexo ||
        topic == Topic.Jardin ||
        topic == Topic.ActuTele) {
        return PreDomain.Vous;
    }
    return PreDomain.None;
}
class BFMParser {
    /**
     *
     */
    constructor() {
        this.BASE_URL = "bfmtv.com/rss/";
        this.parser = new rss_parser_1.default();
    }
    parseTopic(topic) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.makeURL(topic);
            try {
                let output = yield this.parser.parseURL(url);
                return output;
            }
            catch (error) {
                throw error;
            }
        });
    }
    makeURL(topic) {
        const predomain = getPreDomain(topic);
        if (predomain == PreDomain.None) {
            return `https://www.${this.BASE_URL}${topic}/`;
        }
        else {
            return `https://${predomain}.${this.BASE_URL}${topic}/`;
        }
    }
}
exports.BFMParser = BFMParser;
