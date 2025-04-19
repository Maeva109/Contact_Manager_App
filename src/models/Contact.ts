// src/models/Contact.ts
export interface Contact {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    adresse?: string;
    categorie: string;
    notes?: string;
  }