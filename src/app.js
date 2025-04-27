"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
// src/app.ts
var ContactService_1 = require("./services/ContactService");
var App = /** @class */ (function () {
    function App() {
        this.selectedContactId = null;
        this.currentFilter = 'all';
        this.contactDeleteCallback = null;
        this.contactService = new ContactService_1.ContactService();
        // Initialize DOM elements
        this.contactsList = document.getElementById('contacts-list');
        this.contactDetails = document.getElementById('contact-details');
        this.categoriesList = document.getElementById('categories-list');
        this.searchInput = document.getElementById('search-input');
        this.contactModal = document.getElementById('contact-modal');
        this.confirmModal = document.getElementById('confirm-modal');
        this.contactForm = document.getElementById('contact-form');
        this.contactCountElement = document.getElementById('contact-count');
        this.initEventListeners();
        this.renderContactsList();
        this.renderCategoriesList();
    }
    App.prototype.initEventListeners = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        // Search
        (_a = document.getElementById('search-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.renderContactsList(_this.searchInput.value);
        });
        this.searchInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                _this.renderContactsList(_this.searchInput.value);
            }
        });
        // Add contact
        (_b = document.getElementById('add-contact-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
            _this.openAddContactModal();
        });
        // Modal events
        (_c = document.querySelector('.close-modal')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
            _this.closeModal(_this.contactModal);
        });
        (_d = document.querySelector('.close-confirm-modal')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
            _this.closeModal(_this.confirmModal);
        });
        (_e = document.getElementById('cancel-button')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
            _this.closeModal(_this.contactModal);
        });
        (_f = document.getElementById('confirm-cancel')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
            _this.closeModal(_this.confirmModal);
        });
        (_g = document.getElementById('confirm-yes')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', function () {
            if (_this.contactDeleteCallback) {
                _this.contactDeleteCallback(_this.selectedContactId);
                _this.contactDeleteCallback = null;
            }
            _this.closeModal(_this.confirmModal);
        });
        // Form submission
        this.contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            _this.handleFormSubmit();
        });
        (_h = document.querySelector('.btn-annuler')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', function () {
            var contactModal = document.getElementById('contact-modal');
            if (contactModal) {
                contactModal.classList.remove('show'); // Assuming "show" class makes the modal visible
                contactModal.style.display = 'none'; // Alternatively, hide the modal with CSS
            }
        });
        // Open "Ajouter un Contact" modal
        (_j = document.getElementById('add-contact-button')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', function () {
            var contactModal = document.getElementById('contact-modal');
            if (contactModal) {
                contactModal.classList.add('show'); // Add the "show" class to display the modal
                contactModal.style.display = 'flex'; // Ensure the modal is visible
            }
        });
        // Close "Ajouter un Contact" modal when clicking "Annuler"
        (_k = document.querySelector('.btn-annuler')) === null || _k === void 0 ? void 0 : _k.addEventListener('click', function () {
            var contactModal = document.getElementById('contact-modal');
            if (contactModal) {
                contactModal.classList.remove('show'); // Remove the "show" class
                contactModal.style.display = 'none'; // Hide the modal
            }
        });
    };
    App.prototype.renderContactsList = function (searchTerm) {
        var _this = this;
        if (searchTerm === void 0) { searchTerm = ''; }
        var contacts;
        if (searchTerm) {
            contacts = this.contactService.rechercherContacts(searchTerm);
        }
        else if (this.currentFilter !== 'all') {
            contacts = this.contactService.filtrerParCategorie(this.currentFilter);
        }
        else {
            contacts = this.contactService.obtenirTousContacts();
        }
        this.contactsList.innerHTML = '';
        this.contactCountElement.textContent = "(".concat(contacts.length, ")");
        if (contacts.length === 0) {
            this.contactsList.innerHTML = "\n        <div class=\"empty-state\">\n          <p>Aucun contact trouv\u00E9</p>\n        </div>\n      ";
            return;
        }
        contacts.forEach(function (contact) {
            var contactElement = document.createElement('div');
            contactElement.className = "contact-item ".concat(contact.id === _this.selectedContactId ? 'active' : '');
            contactElement.dataset.id = contact.id;
            var initials = contact.prenom.charAt(0) + contact.nom.charAt(0);
            // Corrected innerHTML
            contactElement.innerHTML = "\n        <div class=\"contact-avatar\">".concat(initials.toUpperCase(), "</div>\n        <div class=\"contact-info\">\n          <div class=\"contact-name\">").concat(contact.prenom, " ").concat(contact.nom, "</div>\n          <div class=\"contact-email\">").concat(contact.email, "</div>\n        </div>\n        <div class=\"contact-category\">").concat(contact.categorie, "</div>\n      ");
            contactElement.addEventListener('click', function () {
                _this.selectContact(contact.id);
            });
            _this.contactsList.appendChild(contactElement);
        });
    };
    App.prototype.renderCategoriesList = function () {
        var _this = this;
        var _a;
        var categories = this.contactService.obtenirCategories();
        // Clear existing categories except "All"
        var allCategory = this.categoriesList.querySelector('[data-category="all"]');
        this.categoriesList.innerHTML = '';
        if (allCategory) {
            this.categoriesList.appendChild(allCategory);
        }
        categories.forEach(function (category) {
            var categoryElement = document.createElement('li');
            categoryElement.textContent = category;
            categoryElement.dataset.category = category;
            if (_this.currentFilter === category) {
                categoryElement.classList.add('active');
            }
            categoryElement.addEventListener('click', function () {
                _this.filterByCategory(category);
            });
            _this.categoriesList.appendChild(categoryElement);
        });
        // Add event listener to "All" category if it exists
        (_a = this.categoriesList.querySelector('[data-category="all"]')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.filterByCategory('all');
        });
    };
    App.prototype.filterByCategory = function (category) {
        this.currentFilter = category;
        // Update active category
        var categories = this.categoriesList.querySelectorAll('li');
        categories.forEach(function (item) {
            item.classList.remove('active');
            if (item.dataset.category === category) {
                item.classList.add('active');
            }
        });
        this.renderContactsList();
    };
    App.prototype.selectContact = function (contactId) {
        this.selectedContactId = contactId;
        // Update active contact in list
        var contactItems = this.contactsList.querySelectorAll('.contact-item');
        contactItems.forEach(function (item) {
            item.classList.remove('active');
            if (item.dataset.id === contactId) {
                item.classList.add('active');
            }
        });
        this.renderContactDetails();
    };
    App.prototype.renderContactDetails = function () {
        var _this = this;
        var _a, _b;
        if (!this.selectedContactId) {
            this.contactDetails.innerHTML = "\n        <div class=\"empty-state\">\n          <i class=\"fas fa-user-circle\"></i>\n          <p>S\u00E9lectionnez un contact pour voir les d\u00E9tails</p>\n        </div>\n      ";
            return;
        }
        var contact = this.contactService.obtenirContactParId(this.selectedContactId);
        if (!contact) {
            return;
        }
        var initials = contact.prenom.charAt(0) + contact.nom.charAt(0);
        this.contactDetails.innerHTML = "\n      <div class=\"contact-details-header\">\n        <h2>".concat(contact.prenom, " ").concat(contact.nom, "</h2>\n        <div class=\"contact-details-actions\">\n          <button class=\"edit-btn\" title=\"Modifier\"><i class=\"fas fa-edit\"></i></button>\n          <button class=\"delete-btn\" title=\"Supprimer\"><i class=\"fas fa-trash-alt\"></i></button>\n        </div>\n      </div>\n\n      <div class=\"contact-large-avatar\">").concat(initials.toUpperCase(), "</div>\n\n      <div class=\"contact-details-content\">\n        <div class=\"contact-field\">\n          <div class=\"contact-field-label\">Email</div>\n          <div class=\"contact-field-value\">").concat(contact.email, "</div>\n        </div>\n\n        <div class=\"contact-field\">\n          <div class=\"contact-field-label\">T\u00E9l\u00E9phone</div>\n          <div class=\"contact-field-value\">").concat(contact.telephone, "</div>\n        </div>\n\n        ").concat(contact.adresse ? "\n        <div class=\"contact-field\">\n          <div class=\"contact-field-label\">Adresse</div>\n          <div class=\"contact-field-value\">".concat(contact.adresse, "</div>\n        </div>\n        ") : '', "\n\n        <div class=\"contact-field\">\n          <div class=\"contact-field-label\">Cat\u00E9gorie</div>\n          <div class=\"contact-field-value\">").concat(contact.categorie, "</div>\n        </div>\n\n        ").concat(contact.notes ? "\n        <div class=\"contact-field\">\n          <div class=\"contact-field-label\">Notes</div>\n          <div class=\"contact-field-value\">".concat(contact.notes, "</div>\n        </div>\n        ") : '', "\n      </div>\n    ");
        // Add event listeners to action buttons
        (_a = this.contactDetails.querySelector('.edit-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.openEditContactModal(contact);
        });
        (_b = this.contactDetails.querySelector('.delete-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
            _this.openDeleteConfirmation(contact);
        });
    };
    App.prototype.openAddContactModal = function () {
        var _a;
        // Reset form
        this.contactForm.reset();
        (_a = document.getElementById('contact-id')) === null || _a === void 0 ? void 0 : _a.setAttribute('value', '');
        document.getElementById('modal-title').textContent = 'Ajouter un Contact';
        document.getElementById('form-errors').innerHTML = '';
        // Show modal
        this.openModal(this.contactModal);
    };
    App.prototype.openEditContactModal = function (contact) {
        var _a;
        // Fill form with contact data
        (_a = document.getElementById('contact-id')) === null || _a === void 0 ? void 0 : _a.setAttribute('value', contact.id);
        document.getElementById('prenom').value = contact.prenom;
        document.getElementById('nom').value = contact.nom;
        document.getElementById('email').value = contact.email;
        document.getElementById('telephone').value = contact.telephone;
        document.getElementById('adresse').value = contact.adresse || '';
        document.getElementById('categorie').value = contact.categorie;
        document.getElementById('notes').value = contact.notes || '';
        document.getElementById('modal-title').textContent = 'Modifier le Contact';
        document.getElementById('form-errors').innerHTML = '';
        // Show modal
        this.openModal(this.contactModal);
    };
    App.prototype.openDeleteConfirmation = function (contact) {
        var _this = this;
        document.getElementById('confirm-message').textContent =
            "\u00CAtes-vous s\u00FBr de vouloir supprimer le contact ".concat(contact.prenom, " ").concat(contact.nom, "?");
        this.contactDeleteCallback = function (id) {
            if (_this.contactService.supprimerContact(id)) {
                _this.showToast('Contact supprimé avec succès!', 'success');
                _this.selectedContactId = null;
                _this.renderContactsList();
                _this.renderCategoriesList();
                _this.renderContactDetails();
            }
            else {
                _this.showToast('Erreur lors de la suppression du contact', 'error');
            }
        };
        this.openModal(this.confirmModal);
    };
    App.prototype.handleFormSubmit = function () {
        var _a;
        var contactId = document.getElementById('contact-id').value;
        var countryCode = document.getElementById('country-code').value;
        var phoneNumber = document.getElementById('telephone').value.trim();
        var fullPhoneNumber = "".concat(countryCode).concat(phoneNumber);
        var contact = {
            id: contactId || '', // Ensure id is always a string
            nom: document.getElementById('nom').value,
            prenom: document.getElementById('prenom').value,
            email: document.getElementById('email').value,
            telephone: fullPhoneNumber,
            adresse: document.getElementById('adresse').value || undefined,
            categorie: document.getElementById('categorie').value,
            notes: document.getElementById('notes').value || undefined,
        };
        var result;
        if (contactId) {
            // Update existing contact
            result = this.contactService.mettreAJourContact(contactId, contact);
        }
        else {
            // Add new contact
            result = this.contactService.ajouterContact(contact);
        }
        if (result.success) {
            this.showToast(contactId ? 'Contact modifié avec succès!' : 'Contact ajouté avec succès!', 'success');
            this.closeModal(this.contactModal);
            if (result.data) {
                this.selectedContactId = result.data.id;
            }
            this.renderContactsList();
            this.renderCategoriesList();
            this.renderContactDetails();
        }
        else {
            var errorsElement_1 = document.getElementById('form-errors');
            errorsElement_1.innerHTML = '';
            (_a = result.errors) === null || _a === void 0 ? void 0 : _a.forEach(function (error) {
                var errorElement = document.createElement('div');
                errorElement.textContent = error;
                errorsElement_1.appendChild(errorElement);
            });
        }
    };
    App.prototype.ajouterContact = function (contact) {
        // Check if the phone number already exists
        var existingContact = this.contactService.obtenirTousContacts().find(function (c) { return c.telephone === contact.telephone; });
        if (existingContact) {
            // Show an error message
            var formErrors = document.getElementById('form-errors');
            if (formErrors) {
                formErrors.textContent = 'Un contact avec ce numéro de téléphone existe déjà.';
            }
            return; // Stop further execution
        }
        // If no duplicate is found, proceed to add the contact
        this.contactService.ajouterContact(contact);
        // Clear the form and close the modal
        this.contactForm.reset();
        var contactModal = document.getElementById('contact-modal');
        if (contactModal) {
            contactModal.classList.remove('show');
            contactModal.style.display = 'none';
        }
        // Re-render the contact list
        this.renderContactsList();
    };
    App.prototype.openModal = function (modal) {
        modal.classList.add('show');
    };
    App.prototype.closeModal = function (modal) {
        modal.classList.remove('show');
    };
    App.prototype.showToast = function (message, type) {
        var toastContainer = document.getElementById('toast-container');
        var toast = document.createElement('div');
        toast.className = "toast ".concat(type);
        toast.textContent = message;
        toastContainer.appendChild(toast);
        // Remove the toast after 3 seconds
        setTimeout(function () {
            toast.remove();
        }, 3000);
    };
    return App;
}());
exports.App = App;
