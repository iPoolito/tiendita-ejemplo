
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore'

const PRODUCTS_PATH = 'productos'
export const getAllProducts = (db) => {
    //Consult without filters
    let products = []
    const itemsCollection = collection(db, PRODUCTS_PATH)
    getDocs(itemsCollection).then(snapshot => {
        snapshot.docs.map((doc) => {
            products.push({ id: doc.id, ...doc.data() })
            return { id: doc.id, ...doc.data() }
        })

    })
    return products
}