// src/utils/Validator.ts
export class Validator {
    static isValidEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    static isValidPhone(phone: string): boolean {
      // Format for international numbers
      const phoneRegex = /^(?:(?:\+|00)(?:\d{1,3})[\s.-]?)?(?:\d{1,4}[\s.-]?)??(?:[\s.-]?\d{1,4}){1,4}$/;
      return phoneRegex.test(phone);
    }
  
    static validateContact(contact: any): { isValid: boolean; errors: string[] } {
      const errors: string[] = [];
  
      if (!contact.nom) errors.push("Le nom est requis");
      if (!contact.prenom) errors.push("Le prénom est requis");
      
      if (!contact.email) {
        errors.push("L'email est requis");
      } else if (!this.isValidEmail(contact.email)) {
        errors.push("Format d'email invalide");
      }
      
      if (!contact.telephone) {
        errors.push("Le numéro de téléphone est requis");
      } else if (!this.isValidPhone(contact.telephone)) {
        errors.push("Format de téléphone invalide");
      }
  
      if (!contact.categorie) errors.push("La catégorie est requise");
  
      return {
        isValid: errors.length === 0,
        errors
      };
    }
  }