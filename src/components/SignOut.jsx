import React from 'react';
import { auth } from '../firebase';

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>
      Chiqish
    </button>
  );
}

export default SignOut;