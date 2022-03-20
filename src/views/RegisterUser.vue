<template>
  <v-contannier>
    <v-row justify="center">
      <v-col cols="16" sm="10" md="8" lg="2">
        <h1>Register</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="name"
              v-model="nameC"
              :rules="[() => !!nameC || 'This field is required']"
              :error-messages="errorMessages"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="lastnameC"
              :rules="[() => !!LastnameT || 'This field is required']"
              label="Lastname"
              required
            ></v-text-field>
            <v-text-field
              v-model="checkedNames"
              counter="10"
              label="StudentID"
              required
            ></v-text-field>
            <v-text-field
              v-model="mails"
              :rules="[() => !!state || 'This field is required']"
              label="E-mail"
              required
              placeholder="Email"
            ></v-text-field>
            <v-text-field
              v-model="password2"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="password"
              hint="At least 8 characters"
              counter
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn text @click="addData()"> Save </v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="resetForm"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="primary" text @click="loginuser()"> Submit </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-contannier>
</template>

<script>
import { db } from "../plugins/firebaseInit";
import { auth } from "../plugins/firebaseInit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      dbData: "",
      nameC: " ",
      lastnameC: "",
      checkedNames: "",
      mails: "",
      password2: "",
      table: [],
    };
  },

  methods: {
    async addData() {
      try {
        const docRef = await addDoc(collection(db, "note"), {
          name: this.nameC,
          lastname: this.lastnameC,
          atk: this.checkedNames,
          mail: this.mails,
          number: this.password2,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      alert("Savedata");
    },
    async readData() {
      const querySnapshot = await getDocs(collection(db, "note"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.table.push({ id: doc.id, data: doc.data() });
      });
    },
    loginuser() {
      //const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.mails, this.password2)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User=" + user);
          this.$router.replace("/Login");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);

          // ..
        });
      /*.then(() => {
          alert("Checkpassword");
          // Sign-out successful.
        });*/
    },
    checklogin() {
      //const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(uid);
          // ...แสดงผลuser:Email,uidในหน้าจอ
          this.uid = user.uid;
          this.emails = user.emails;
        } else {
          // User is signed out
          // ...กรณีไม่ได้login ให้เปลี่ยนไปหน้าlogin ก่อน
          alert("Plses Login");
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>

<style>
.mt-9 {
  text-align: center;
}
</style>
