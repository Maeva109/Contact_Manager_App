// src/app.ts
import { ContactService } from './services/ContactService';
import { Contact } from './models/Contact';

export class App {
  private contactService: ContactService;
  private selectedContactId: string | null = null;
  private currentFilter: string = 'all';
  private contactDeleteCallback: ((id: string) => void) | null = null;

  // DOM Elements
  private contactsList: HTMLElement;
  private contactDetails: HTMLElement;
  private categoriesList: HTMLElement;
  private searchInput: HTMLInputElement;
  private contactModal: HTMLElement;
  private confirmModal: HTMLElement;
  private contactForm: HTMLFormElement;
  private contactCountElement: HTMLElement;

  constructor() {
    this.contactService = new ContactService();

    // Initialize DOM elements
    this.contactsList = document.getElementById('contacts-list') as HTMLElement;
    this.contactDetails = document.getElementById('contact-details') as HTMLElement;
    this.categoriesList = document.getElementById('categories-list') as HTMLElement;
    this.searchInput = document.getElementById('search-input') as HTMLInputElement;
    this.contactModal = document.getElementById('contact-modal') as HTMLElement;
    this.confirmModal = document.getElementById('confirm-modal') as HTMLElement;
    this.contactForm = document.getElementById('contact-form') as HTMLFormElement;
    this.contactCountElement = document.getElementById('contact-count') as HTMLElement;

    this.initEventListeners();
    this.renderContactsList();
    this.renderCategoriesList();
  }

  private initEventListeners(): void {
    // Search
    document.getElementById('search-button')?.addEventListener('click', () => {
      this.renderContactsList(this.searchInput.value);
    });

    this.searchInput.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        this.renderContactsList(this.searchInput.value);
      }
    });

    // Add contact
    document.getElementById('add-contact-button')?.addEventListener('click', () => {
      this.openAddContactModal();
    });

    // Modal events
    document.querySelector('.close-modal')?.addEventListener('click', () => {
      this.closeModal(this.contactModal);
    });

    document.querySelector('.close-confirm-modal')?.addEventListener('click', () => {
      this.closeModal(this.confirmModal);
    });

    document.getElementById('cancel-button')?.addEventListener('click', () => {
      this.closeModal(this.contactModal);
    });

    document.getElementById('confirm-cancel')?.addEventListener('click', () => {
      this.closeModal(this.confirmModal);
    });

    document.getElementById('confirm-yes')?.addEventListener('click', () => {
      if (this.contactDeleteCallback) {
        this.contactDeleteCallback(this.selectedContactId!);
        this.contactDeleteCallback = null;
      }
      this.closeModal(this.confirmModal);
    });

    // Form submission
    this.contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this.handleFormSubmit();
    });

    document.querySelector('.btn-annuler')?.addEventListener('click', () => {
      const contactModal = document.getElementById('contact-modal');
      if (contactModal) {
        contactModal.classList.remove('show'); // Assuming "show" class makes the modal visible
        contactModal.style.display = 'none'; // Alternatively, hide the modal with CSS
      }
    });

    // Open "Ajouter un Contact" modal
    document.getElementById('add-contact-button')?.addEventListener('click', () => {
      const contactModal = document.getElementById('contact-modal');
      if (contactModal) {
        contactModal.classList.add('show'); // Add the "show" class to display the modal
        contactModal.style.display = 'flex'; // Ensure the modal is visible
      }
    });

    // Close "Ajouter un Contact" modal when clicking "Annuler"
    document.querySelector('.btn-annuler')?.addEventListener('click', () => {
      const contactModal = document.getElementById('contact-modal');
      if (contactModal) {
        contactModal.classList.remove('show'); // Remove the "show" class
        contactModal.style.display = 'none'; // Hide the modal
      }
    });
  }

  private renderContactsList(searchTerm: string = ''): void {
    let contacts: Contact[];

    if (searchTerm) {
      contacts = this.contactService.rechercherContacts(searchTerm);
    } else if (this.currentFilter !== 'all') {
      contacts = this.contactService.filtrerParCategorie(this.currentFilter);
    } else {
      contacts = this.contactService.obtenirTousContacts();
    }

    this.contactsList.innerHTML = '';
    this.contactCountElement.textContent = `(${contacts.length})`;

    if (contacts.length === 0) {
      this.contactsList.innerHTML = `
        <div class="empty-state">
          <p>Aucun contact trouvé</p>
        </div>
      `;
      return;
    }

    contacts.forEach(contact => {
      const contactElement = document.createElement('div');
      contactElement.className = `contact-item ${contact.id === this.selectedContactId ? 'active' : ''}`;
      contactElement.dataset.id = contact.id;

      const initials = contact.prenom.charAt(0) + contact.nom.charAt(0);

      // Corrected innerHTML
      contactElement.innerHTML = `
        <div class="contact-avatar">${initials.toUpperCase()}</div>
        <div class="contact-info">
          <div class="contact-name">${contact.prenom} ${contact.nom}</div>
          <div class="contact-email">${contact.email}</div>
        </div>
        <div class="contact-category">${contact.categorie}</div>
      `;

      contactElement.addEventListener('click', () => {
        this.selectContact(contact.id);
      });

      this.contactsList.appendChild(contactElement);
    });
  }

  private renderCategoriesList(): void {
    const categories = this.contactService.obtenirCategories();

    // Clear existing categories except "All"
    const allCategory = this.categoriesList.querySelector('[data-category="all"]');
    this.categoriesList.innerHTML = '';
    if (allCategory) {
      this.categoriesList.appendChild(allCategory);
    }

    categories.forEach(category => {
      const categoryElement = document.createElement('li');
      categoryElement.textContent = category;
      categoryElement.dataset.category = category;
      if (this.currentFilter === category) {
        categoryElement.classList.add('active');
      }

      categoryElement.addEventListener('click', () => {
        this.filterByCategory(category);
      });

      this.categoriesList.appendChild(categoryElement);
    });

    // Add event listener to "All" category if it exists
    this.categoriesList.querySelector('[data-category="all"]')?.addEventListener('click', () => {
      this.filterByCategory('all');
    });
  }

  private filterByCategory(category: string): void {
    this.currentFilter = category;

    // Update active category
    const categories = this.categoriesList.querySelectorAll('li');
    categories.forEach(item => {
      item.classList.remove('active');
      if (item.dataset.category === category) {
        item.classList.add('active');
      }
    });

    this.renderContactsList();
  }

  private selectContact(contactId: string): void {
    this.selectedContactId = contactId;

    // Update active contact in list
    const contactItems = this.contactsList.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
      item.classList.remove('active');
      if ((item as HTMLElement).dataset.id === contactId) {
        item.classList.add('active');
      }
    });

    this.renderContactDetails();
  }

  private renderContactDetails(): void {
    if (!this.selectedContactId) {
      this.contactDetails.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-user-circle"></i>
          <p>Sélectionnez un contact pour voir les détails</p>
        </div>
      `;
      return;
    }

    const contact = this.contactService.obtenirContactParId(this.selectedContactId);
    if (!contact) {
      return;
    }

    const initials = contact.prenom.charAt(0) + contact.nom.charAt(0);

    this.contactDetails.innerHTML = `
      <div class="contact-details-header">
        <h2>${contact.prenom} ${contact.nom}</h2>
        <div class="contact-details-actions">
          <button class="edit-btn" title="Modifier"><i class="fas fa-edit"></i></button>
          <button class="delete-btn" title="Supprimer"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>

      <div class="contact-large-avatar">${initials.toUpperCase()}</div>

      <div class="contact-details-content">
        <div class="contact-field">
          <div class="contact-field-label">Email</div>
          <div class="contact-field-value">${contact.email}</div>
        </div>

        <div class="contact-field">
          <div class="contact-field-label">Téléphone</div>
          <div class="contact-field-value">${contact.telephone}</div>
        </div>

        ${contact.adresse ? `
        <div class="contact-field">
          <div class="contact-field-label">Adresse</div>
          <div class="contact-field-value">${contact.adresse}</div>
        </div>
        ` : ''}

        <div class="contact-field">
          <div class="contact-field-label">Catégorie</div>
          <div class="contact-field-value">${contact.categorie}</div>
        </div>

        ${contact.notes ? `
        <div class="contact-field">
          <div class="contact-field-label">Notes</div>
          <div class="contact-field-value">${contact.notes}</div>
        </div>
        ` : ''}
      </div>
    `;

    // Add event listeners to action buttons
    this.contactDetails.querySelector('.edit-btn')?.addEventListener('click', () => {
      this.openEditContactModal(contact);
    });

    this.contactDetails.querySelector('.delete-btn')?.addEventListener('click', () => {
      this.openDeleteConfirmation(contact);
    });
  }

  private openAddContactModal(): void {
    // Reset form
    this.contactForm.reset();
    document.getElementById('contact-id')?.setAttribute('value', '');
    document.getElementById('modal-title')!.textContent = 'Ajouter un Contact';
    document.getElementById('form-errors')!.innerHTML = '';

    // Show modal
    this.openModal(this.contactModal);
  }

  private openEditContactModal(contact: Contact): void {
    // Fill form with contact data
    document.getElementById('contact-id')?.setAttribute('value', contact.id);
    (document.getElementById('prenom') as HTMLInputElement).value = contact.prenom;
    (document.getElementById('nom') as HTMLInputElement).value = contact.nom;
    (document.getElementById('email') as HTMLInputElement).value = contact.email;
    (document.getElementById('telephone') as HTMLInputElement).value = contact.telephone;
    (document.getElementById('adresse') as HTMLInputElement).value = contact.adresse || '';
    (document.getElementById('categorie') as HTMLSelectElement).value = contact.categorie;
    (document.getElementById('notes') as HTMLTextAreaElement).value = contact.notes || '';

    document.getElementById('modal-title')!.textContent = 'Modifier le Contact';
    document.getElementById('form-errors')!.innerHTML = '';

    // Show modal
    this.openModal(this.contactModal);
  }

  private openDeleteConfirmation(contact: Contact): void {
    document.getElementById('confirm-message')!.textContent =
      `Êtes-vous sûr de vouloir supprimer le contact ${contact.prenom} ${contact.nom}?`;

    this.contactDeleteCallback = (id: string) => {
      if (this.contactService.supprimerContact(id)) {
        this.showToast('Contact supprimé avec succès!', 'success');
        this.selectedContactId = null;
        this.renderContactsList();
        this.renderCategoriesList();
        this.renderContactDetails();
      } else {
        this.showToast('Erreur lors de la suppression du contact', 'error');
      }
    };

    this.openModal(this.confirmModal);
  }

  private handleFormSubmit(): void {
    const contactId = (document.getElementById('contact-id') as HTMLInputElement).value;

    const countryCode = (document.getElementById('country-code') as HTMLSelectElement).value;
    const phoneNumber = (document.getElementById('telephone') as HTMLInputElement).value.trim();
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;

    const contact: Contact = {
      id: contactId || '', // Ensure id is always a string
      nom: (document.getElementById('nom') as HTMLInputElement).value,
      prenom: (document.getElementById('prenom') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      telephone: fullPhoneNumber,
      adresse: (document.getElementById('adresse') as HTMLInputElement).value || undefined,
      categorie: (document.getElementById('categorie') as HTMLSelectElement).value,
      notes: (document.getElementById('notes') as HTMLTextAreaElement).value || undefined,
    };

    let result;

    if (contactId) {
      // Update existing contact
      result = this.contactService.mettreAJourContact(contactId, contact);
    } else {
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
    } else {
      const errorsElement = document.getElementById('form-errors')!;
      errorsElement.innerHTML = '';

      result.errors?.forEach((error) => {
        const errorElement = document.createElement('div');
        errorElement.textContent = error;
        errorsElement.appendChild(errorElement);
      });
    }
  }

  private ajouterContact(contact: Contact): void {
    // Check if the phone number already exists
    const existingContact = this.contactService.obtenirTousContacts().find(c => c.telephone === contact.telephone);

    if (existingContact) {
      // Show an error message
      const formErrors = document.getElementById('form-errors');
      if (formErrors) {
        formErrors.textContent = 'Un contact avec ce numéro de téléphone existe déjà.';
      }
      return; // Stop further execution
    }

    // If no duplicate is found, proceed to add the contact
    this.contactService.ajouterContact(contact);

    // Clear the form and close the modal
    this.contactForm.reset();
    const contactModal = document.getElementById('contact-modal');
    if (contactModal) {
      contactModal.classList.remove('show');
      contactModal.style.display = 'none';
    }

    // Re-render the contact list
    this.renderContactsList();
  }

  private openModal(modal: HTMLElement): void {
    modal.classList.add('show');
  }

  private closeModal(modal: HTMLElement): void {
    modal.classList.remove('show');
  }

  private showToast(message: string, type: 'success' | 'error' | 'warning'): void {
    const toastContainer = document.getElementById('toast-container')!;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    toastContainer.appendChild(toast);

    // Remove the toast after 3 seconds
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
}