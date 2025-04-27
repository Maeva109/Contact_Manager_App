"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
var uuid_1 = require("uuid");
var Validator_1 = require("../utils/Validator");
var ContactService = /** @class */ (function () {
    function ContactService() {
        this.storageKey = 'contacts';
        this.contacts = this.loadContacts();
        // If no contacts exist, add some examples
        if (this.contacts.length === 0) {
            this.ajouterContact({
                nom: 'Dupont',
                prenom: 'Jean',
                email: 'jean.dupont@email.com',
                telephone: '0612345678',
                categorie: 'Famille'
            });
            this.ajouterContact({
                nom: 'Martin',
                prenom: 'Sophie',
                email: 'sophie.martin@email.com',
                telephone: '0687654321',
                categorie: 'Travail'
            });
        }
    }
    ContactService.prototype.loadContacts = function () {
        var data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    };
    ContactService.prototype.saveContacts = function () {
        localStorage.setItem(this.storageKey, JSON.stringify(this.contacts));
    };
    ContactService.prototype.ajouterContact = function (contact) {
        var validation = Validator_1.Validator.validateContact(contact);
        if (!validation.isValid) {
            return { success: false, errors: validation.errors };
        }
        var nouveauContact = __assign(__assign({}, contact), { id: (0, uuid_1.v4)() });
        this.contacts.push(nouveauContact);
        this.saveContacts();
        return { success: true, data: nouveauContact };
    };
    ContactService.prototype.obtenirTousContacts = function () {
        return __spreadArray([], this.contacts, true);
    };
    ContactService.prototype.obtenirContactParId = function (id) {
        return this.contacts.find(function (contact) { return contact.id === id; });
    };
    ContactService.prototype.mettreAJourContact = function (id, contactMisAJour) {
        var index = this.contacts.findIndex(function (contact) { return contact.id === id; });
        if (index === -1) {
            return { success: false, errors: ["Contact non trouvé"] };
        }
        var contactComplet = __assign(__assign({}, this.contacts[index]), contactMisAJour);
        var validation = Validator_1.Validator.validateContact(contactComplet);
        if (!validation.isValid) {
            return { success: false, errors: validation.errors };
        }
        this.contacts[index] = contactComplet;
        this.saveContacts();
        return { success: true, data: this.contacts[index] };
    };
    ContactService.prototype.supprimerContact = function (id) {
        var longueurInitiale = this.contacts.length;
        this.contacts = this.contacts.filter(function (contact) { return contact.id !== id; });
        if (this.contacts.length !== longueurInitiale) {
            this.saveContacts();
            return true;
        }
        return false;
    };
    ContactService.prototype.rechercherContacts = function (terme) {
        if (!terme)
            return this.obtenirTousContacts();
        var termeRecherche = terme.toLowerCase();
        return this.contacts.filter(function (contact) {
            return contact.nom.toLowerCase().includes(termeRecherche) ||
                contact.prenom.toLowerCase().includes(termeRecherche) ||
                contact.email.toLowerCase().includes(termeRecherche) ||
                contact.telephone.includes(termeRecherche) ||
                (contact.notes && contact.notes.toLowerCase().includes(termeRecherche));
        });
    };
    ContactService.prototype.filtrerParCategorie = function (categorie) {
        if (!categorie)
            return this.obtenirTousContacts();
        return this.contacts.filter(function (contact) {
            return contact.categorie.toLowerCase() === categorie.toLowerCase();
        });
    };
    ContactService.prototype.obtenirCategories = function () {
        var categories = new Set();
        this.contacts.forEach(function (contact) {
            if (contact.categorie) {
                categories.add(contact.categorie);
            }
        });
        return Array.from(categories);
    };
    return ContactService;
}());
exports.ContactService = ContactService;
