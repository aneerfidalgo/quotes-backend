import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import myCredentials from "../credentials.js";
// in line 6 is asking if im connected, if its not already connected
export default function connectDb() {
  if (getApps().length === 0) {
    initializeApp({
      credential: cert(myCredentials),
    });
  }
  return getFirestore();
}
