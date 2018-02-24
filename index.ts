
/**
 * Versement (paiement)
 */
export default interface Versement {
    id:number
    etat:string
    client:string
    montant:number
    commentaire:string
}