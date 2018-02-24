/**
 * Versement (paiement)
 */
export default class Versement {
  id: number;
  etat: string;
  client: string;
  montant: number;
  commentaire: string;

  constructor(input: any) {
    this.id = input.id;
    this.etat = input.etat;
    this.client = input.client;
    this.montant = input.montant;
    this.commentaire = input.commentaire;
  }

  getId(): number {
    return this.id;
  }
  setId(newId: number) {
    this.id = newId;
  }

  getEtat(): string {
      return this.etat;
  }
  setEtat(newEtat: string) {
      this.etat = newEtat;
  }

  getClient(): string {
      return this.client;
  }
  setClient(newClient: string) {
      this.client = newClient;
  }

  getMontant(): number {
      return this.montant;
  }
  setMontant(newMontant: number) {
      this.montant = newMontant;
  }

  getCommentaire(): string {
      return this.commentaire;
  }
  setCommentaire(newCommentaire: string) {
      this.commentaire = newCommentaire;
  }

}
