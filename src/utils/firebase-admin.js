// var admin = require("firebase-admin");
import * as admin from 'firebase-admin'

// var serviceAccount = require("../serviceAccount.json");
import * as serviceAccount from '../serviceAccount.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
