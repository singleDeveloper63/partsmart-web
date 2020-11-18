import * as firebase from 'firebase';

const handleForm = (e,email,password) => {
    e.preventDefault();

    firebase.default.auth()
        .createUserWithEmailAndPassword(email,password)
            .then( res =>{
                console.log(res)
            })
            .catch( err =>{
                console.log(err)
            })
}


export default handleForm;