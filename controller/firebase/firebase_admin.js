const admin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestoreDatabase = admin.firestore();

const fieldValue = admin.firestore.FieldValue;
const userCollectionRef = firestoreDatabase.collection("users");

module.exports = {
  fieldValue,
  userCollectionRef,
};
