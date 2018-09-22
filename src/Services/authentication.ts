import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class Authentication{
    constructor(private AngularAuth : AngularFireAuth){ }

    createUserWithEmailAndPassword(email,password){
        this.AngularAuth.auth.createUserWithEmailAndPassword(email,password)
    }

    createUserWithGoogle(){
        let provider = new firebase.auth.GoogleAuthProvider()
        return this.AngularAuth.auth.signInWithRedirect(provider)
        .then(result=>{
            return firebase.auth().getRedirectResult
        });
        
      }
      createUserWithFacebook(){
        let provider = new firebase.auth.FacebookAuthProvider()
        return this.AngularAuth.auth.signInWithRedirect(provider)
        .then(result=>{
            return firebase.auth().getRedirectResult
        });
      }
}

