/* ---------- Osobe ---------- */
abstract class Osoba {
    constructor(public ime: string, public prezime: string) {

    }
}

class Doktor extends Osoba {
    pacijenti: Array<Pacijent>;

    constructor(ime: string, prezime: string, public specijalnost: string) {
        super(ime, prezime);
        this.pacijenti = new Array<Pacijent>();
    }

    dodajPacijenta(pacijent: Pacijent) {
        this.pacijenti.push(pacijent);
    }
}

class Pacijent extends Osoba {
    doktor: Doktor;

    constructor(ime: string, prezime: string, public jmbg: string, public brojKartona: number) {
        super(ime, prezime);
    }

    izaberiDoktora(doktor: Doktor) {
        this.doktor = doktor;
        doktor.dodajPacijenta(this);
    }
}

/* ---------- Pregledi ---------- */
abstract class LaboratorijskiPregled {
    zakazao: Doktor;
    pacijent: Pacijent;

    constructor(public datum: Date, public vreme: string) {

    }

    zakaziPregled(doktor: Doktor, pacijent: Pacijent) {
        this.zakazao = doktor;
        this.pacijent = pacijent;
    }
}

class KrvniPritisak extends LaboratorijskiPregled {
    constructor(datum: Date, vreme: string) {
        super(datum, vreme);
    }

    obaviPregled() {
        const gornjaVrednost = Math.floor(Math.random() * 70) + 80;
        const donjaVrednost = Math.floor(Math.random() * 50) + 50 
        const puls = Math.floor(Math.random() * 70) + 50;

        return `Gornja vrednost: ${gornjaVrednost}, donja vrednost: ${donjaVrednost}, puls: ${puls}`;
    }
}

class NivoSecera extends LaboratorijskiPregled {
    constructor(datum: Date, vreme: string) {
        super(datum, vreme);
    }

    obaviPregled() {
        const vrednost = Math.floor(Math.random() * 4) + 3;
        const vremePoslednjegPregleda = new Date().getHours() - Math.floor(Math.random() * 9) + 1;

        return `Vrednost: ${vrednost}, vreme poslednjeg pregleda: ${vremePoslednjegPregleda}h`;
    }
}

class NivoHolesterola extends LaboratorijskiPregled {
    constructor(datum: Date, vreme: string) {
        super(datum, vreme);
    }

    obaviPregled() {
        const vrednost = Math.floor(Math.random() * 100) + 100;
        const vremePoslednjegPregleda = new Date().getHours() - Math.floor(Math.random() * 9) + 1;

        return `Vrednost: ${vrednost}, vreme poslednjeg pregleda: ${vremePoslednjegPregleda}h`;
    }
}

/* ---------- Program ---------- */
const danas = new Date();

// Kreiranje doktora i pacijenta, odabir doktora
const drMilan = new Doktor('Milan', 'Milanovic', 'opste prakse');
const pacDragan = new Pacijent('Dragan', 'Dragic', '14231242151', 42);
pacDragan.izaberiDoktora(drMilan);
console.log(`[${danas.getDate()}.${danas.getMonth()}.${danas.getFullYear()} ${danas.getHours()}:${danas.getMinutes()}] Kreiran doktor ${drMilan.ime}`);
console.log(drMilan);
console.log(`[${danas.getDate()}.${danas.getMonth()}.${danas.getFullYear()} ${danas.getHours()}:${danas.getMinutes()}] Kreiran pacijent ${pacDragan.ime}`);
console.log(pacDragan);
console.log('--------------------');

// Zakazivanje pregleda
const merenjeSeceraPregled = new NivoSecera(danas, `${danas.getHours()}:${danas.getMinutes()}`);
merenjeSeceraPregled.zakaziPregled(drMilan, pacDragan);
const merenjeKrvnogPritiskaPregled = new KrvniPritisak(danas, `${danas.getHours()}:${danas.getMinutes()}`);
merenjeKrvnogPritiskaPregled.zakaziPregled(drMilan, pacDragan);

console.log(`[${danas.getDate()}.${danas.getMonth()}.${danas.getFullYear()} ${danas.getHours()}:${danas.getMinutes()}] Zakazan pregled secera`);
console.log(merenjeSeceraPregled);

console.log(`[${danas.getDate()}.${danas.getMonth()}.${danas.getFullYear()} ${danas.getHours()}:${danas.getMinutes()}] Zakazan pregled krvnog pritiska`);
console.log(merenjeKrvnogPritiskaPregled);
console.log('--------------------');

// Obavljanje pregleda
console.log(`Nivo secera rezultati: ${merenjeSeceraPregled.obaviPregled()}`);
console.log(`Krvni pritisak rezultati: ${merenjeKrvnogPritiskaPregled.obaviPregled()}`);



