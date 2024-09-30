import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'
import { db } from '../config/firebaseConfig.ts'
import { Word } from '../types/word/WordTypes.ts'

export const fireStoreWordService = {
  async createWord(targetWord: Word) {
    try {
      const wordsCollectionRef = collection(db, 'words')
      const docRef = await addDoc(wordsCollectionRef, targetWord)
      console.log(docRef)
    } catch (e) {
      console.error('createWord', e)
    }
  },

  // onSnapshot으로 대체
  // async getWordsCollection() {
  //   try {
  //     const wordsCollectionRef = collection(db, 'words')
  //     const wordsSnapshot = await getDocs(wordsCollectionRef)
  //     const data = wordsSnapshot.docs.map((doc) => ({
  //       ...(doc.data() as Word),
  //       docId: doc.id,
  //     }))
  //     console.log(data)
  //     return data
  //   } catch (e) {
  //     console.error('getWordsCollection', e)
  //   }
  // },

  async updateWordById(value: string, docId: string) {
    try {
      const docRef = doc(db, 'words', docId)
      await updateDoc(docRef, {
        value,
      })
    } catch (e) {
      console.error('updateWordById', e)
    }
  },

  async deleteWordById(docId: string) {
    try {
      const docRef = doc(db, 'words', docId)
      console.log(docRef)
      await deleteDoc(docRef)
    } catch (e) {
      console.error('deleteWordById', e)
    }
  },
}
