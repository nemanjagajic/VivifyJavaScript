var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* ---------- Osobe ---------- */
var Osoba = /** @class */ (function () {
    function Osoba(ime, prezime) {
        this.ime = ime;
        this.prezime = prezime;
    }
    return Osoba;
}());
var Doktor = /** @class */ (function (_super) {
    __extends(Doktor, _super);
    function Doktor(ime, prezime, specijalnost) {
        var _this = _super.call(this, ime, prezime) || this;
        _this.specijalnost = specijalnost;
        _this.pacijenti = new Array();
        return _this;
    }
    Doktor.prototype.dodajPacijenta = function (pacijent) {
        this.pacijenti.push(pacijent);
    };
    return Doktor;
}(Osoba));
var Pacijent = /** @class */ (function (_super) {
    __extends(Pacijent, _super);
    function Pacijent(ime, prezime, jmbg, brojKartona) {
        var _this = _super.call(this, ime, prezime) || this;
        _this.jmbg = jmbg;
        _this.brojKartona = brojKartona;
        return _this;
    }
    Pacijent.prototype.izaberiDoktora = function (doktor) {
        this.doktor = doktor;
        doktor.dodajPacijenta(this);
    };
    return Pacijent;
}(Osoba));
/* ---------- Pregledi ---------- */
var LaboratorijskiPregled = /** @class */ (function () {
    function LaboratorijskiPregled(datum, vreme) {
        this.datum = datum;
        this.vreme = vreme;
    }
    LaboratorijskiPregled.prototype.zakaziPregled = function (doktor, pacijent) {
        this.zakazao = doktor;
        this.pacijent = pacijent;
    };
    return LaboratorijskiPregled;
}());
var KrvniPritisak = /** @class */ (function (_super) {
    __extends(KrvniPritisak, _super);
    function KrvniPritisak(datum, vreme) {
        return _super.call(this, datum, vreme) || this;
    }
    KrvniPritisak.prototype.obaviPregled = function () {
        var gornjaVrednost = Math.floor(Math.random() * 70) + 80;
        var donjaVrednost = Math.floor(Math.random() * 50) + 50;
        var puls = Math.floor(Math.random() * 70) + 50;
        return "Gornja vrednost: " + gornjaVrednost + ", donja vrednost: " + donjaVrednost + ", puls: " + puls;
    };
    return KrvniPritisak;
}(LaboratorijskiPregled));
var NivoSecera = /** @class */ (function (_super) {
    __extends(NivoSecera, _super);
    function NivoSecera(datum, vreme) {
        return _super.call(this, datum, vreme) || this;
    }
    NivoSecera.prototype.obaviPregled = function () {
        var vrednost = Math.floor(Math.random() * 4) + 3;
        var vremePoslednjegPregleda = new Date().getHours() - Math.floor(Math.random() * 9) + 1;
        return "Vrednost: " + vrednost + ", vreme poslednjeg pregleda: " + vremePoslednjegPregleda + "h";
    };
    return NivoSecera;
}(LaboratorijskiPregled));
var NivoHolesterola = /** @class */ (function (_super) {
    __extends(NivoHolesterola, _super);
    function NivoHolesterola(datum, vreme) {
        return _super.call(this, datum, vreme) || this;
    }
    NivoHolesterola.prototype.obaviPregled = function () {
        var vrednost = Math.floor(Math.random() * 100) + 100;
        var vremePoslednjegPregleda = new Date().getHours() - Math.floor(Math.random() * 9) + 1;
        return "Vrednost: " + vrednost + ", vreme poslednjeg pregleda: " + vremePoslednjegPregleda + "h";
    };
    return NivoHolesterola;
}(LaboratorijskiPregled));
/* ---------- Program ---------- */
var danas = new Date();
// Kreiranje doktora i pacijenta, odabir doktora
var drMilan = new Doktor('Milan', 'Milanovic', 'opste prakse');
var pacDragan = new Pacijent('Dragan', 'Dragic', '14231242151', 42);
pacDragan.izaberiDoktora(drMilan);
console.log("[" + danas.getDate() + "." + danas.getMonth() + "." + danas.getFullYear() + " " + danas.getHours() + ":" + danas.getMinutes() + "] Kreiran doktor " + drMilan.ime);
console.log(drMilan);
console.log("[" + danas.getDate() + "." + danas.getMonth() + "." + danas.getFullYear() + " " + danas.getHours() + ":" + danas.getMinutes() + "] Kreiran pacijent " + pacDragan.ime);
console.log(pacDragan);
console.log('--------------------');
// Zakazivanje pregleda
var merenjeSeceraPregled = new NivoSecera(danas, danas.getHours() + ":" + danas.getMinutes());
merenjeSeceraPregled.zakaziPregled(drMilan, pacDragan);
var merenjeKrvnogPritiskaPregled = new KrvniPritisak(danas, danas.getHours() + ":" + danas.getMinutes());
merenjeKrvnogPritiskaPregled.zakaziPregled(drMilan, pacDragan);
console.log("[" + danas.getDate() + "." + danas.getMonth() + "." + danas.getFullYear() + " " + danas.getHours() + ":" + danas.getMinutes() + "] Zakazan pregled secera");
console.log(merenjeSeceraPregled);
console.log("[" + danas.getDate() + "." + danas.getMonth() + "." + danas.getFullYear() + " " + danas.getHours() + ":" + danas.getMinutes() + "] Zakazan pregled krvnog pritiska");
console.log(merenjeKrvnogPritiskaPregled);
console.log('--------------------');
// Obavljanje pregleda
console.log("Nivo secera rezultati: " + merenjeSeceraPregled.obaviPregled());
console.log("Krvni pritisak rezultati: " + merenjeKrvnogPritiskaPregled.obaviPregled());
