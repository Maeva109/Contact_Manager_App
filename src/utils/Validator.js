"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
// src/utils/Validator.ts
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.isValidEmail = function (email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    Validator.isValidPhone = function (phone) {
        // Format for international numbers
        var phoneRegex = /^(?:(?:\+|00)(?:\d{1,3})[\s.-]?)?(?:\d{1,4}[\s.-]?)??(?:[\s.-]?\d{1,4}){1,4}$/;
        return phoneRegex.test(phone);
    };
    Validator.validateContact = function (contact) {
        var errors = [];
        if (!contact.nom)
            errors.push("Le nom est requis");
        if (!contact.prenom)
            errors.push("Le prénom est requis");
        if (!contact.email) {
            errors.push("L'email est requis");
        }
        else if (!this.isValidEmail(contact.email)) {
            errors.push("Format d'email invalide");
        }
        if (!contact.telephone) {
            errors.push("Le numéro de téléphone est requis");
        }
        else if (!this.isValidPhone(contact.telephone)) {
            errors.push("Format de téléphone invalide");
        }
        if (!contact.categorie)
            errors.push("La catégorie est requise");
        return {
            isValid: errors.length === 0,
            errors: errors
        };
    };
    return Validator;
}());
exports.Validator = Validator;
