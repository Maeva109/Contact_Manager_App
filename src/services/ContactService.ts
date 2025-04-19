// src/services/ContactService.ts
import { Contact } from '../models/Contact';
import { v4 as uuidv4 } from 'uuid';
import { Validator } from '../utils/Validator';

export class ContactService {
  private contacts: Contact[];
  private readonly storageKey = 'contacts';

  constructor() {
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

  private loadContacts(): Contact[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveContacts(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.contacts));
  }

  ajouterContact(contact: Omit<Contact, 'id'>): { success: boolean; data?: Contact; errors?: string[] } {
    const validation = Validator.validateContact(contact);
    
    if (!validation.isValid) {
      return { success: false, errors: validation.errors };
    }
    
    const nouveauContact: Contact = {
      ...contact as any,
      id: uuidv4()
    };
    
    this.contacts.push(nouveauContact);
    this.saveContacts();
    
    return { success: true, data: nouveauContact };
  }

  obtenirTousContacts(): Contact[] {
    return [...this.contacts];
  }

  obtenirContactParId(id: string): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  mettreAJourContact(id: string, contactMisAJour: Partial<Contact>): { success: boolean; data?: Contact; errors?: string[] } {
    const index = this.contacts.findIndex(contact => contact.id === id);
    if (index === -1) {
      return { success: false, errors: ["Contact non trouvé"] };
    }
    
    const contactComplet = { ...this.contacts[index], ...contactMisAJour };
    const validation = Validator.validateContact(contactComplet);
    
    if (!validation.isValid) {
      return { success: false, errors: validation.errors };
    }
    
    this.contacts[index] = contactComplet;
    this.saveContacts();
    
    return { success: true, data: this.contacts[index] };
  }

  supprimerContact(id: string): boolean {
    const longueurInitiale = this.contacts.length;
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    
    if (this.contacts.length !== longueurInitiale) {
      this.saveContacts();
      return true;
    }
    
    return false;
  }

  rechercherContacts(terme: string): Contact[] {
    if (!terme) return this.obtenirTousContacts();
    
    const termeRecherche = terme.toLowerCase();
    return this.contacts.filter(contact => 
      contact.nom.toLowerCase().includes(termeRecherche) ||
      contact.prenom.toLowerCase().includes(termeRecherche) ||
      contact.email.toLowerCase().includes(termeRecherche) ||
      contact.telephone.includes(termeRecherche) ||
      (contact.notes && contact.notes.toLowerCase().includes(termeRecherche))
    );
  }

  filtrerParCategorie(categorie?: string): Contact[] {
    if (!categorie) return this.obtenirTousContacts();
    
    return this.contacts.filter(contact => 
      contact.categorie.toLowerCase() === categorie.toLowerCase()
    );
  }

  obtenirCategories(): string[] {
    const categories = new Set<string>();
    this.contacts.forEach(contact => {
      if (contact.categorie) {
        categories.add(contact.categorie);
      }
    });
    return Array.from(categories);
  }
}