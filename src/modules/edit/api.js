import { storage, auth, database, firestore } from '../../config/firebase';
// import { Buffer } from 'buffer';
import base64 from 'react-native-base64';
// I feel like profile picture, and username dont need to be in post

function uploadToStorage(postID, imageURI) {
  const storageRef = storage.ref();
  const imageString = 'images/' + postID + '.jpg';
  const imageRef = storageRef.child(imageString);
  // decodes the base64 string and stores in the buffer
  // const buff = Buffer.from(imageURI.base64, 'base64');
  // var bytes = base64.decode(imageURI.base64);
  // returns the utf8
  // const text = buff.toString('utf8');
  const base64OnlyValidChars = (imageURI.base64).substring(0, ((imageURI.base64).length -2));
  const prom =
  imageRef.putString(base64OnlyValidChars, 'base64')
    .then((snapshot) => {
      console.log('Uploaded a blob or file!');
      console.log(snapshot);
      // TODO: dont know if this is the correct name
      return snapshot.name;
    })
   .catch((error) => {
      console.error("Error uploading file to storage: ", error);
   });
   return prom;
}

export function sendPicToFirebase(picURI) {
  const thisUID = auth.currentUser.uid;
  const data = {
    uid: thisUID,
    reactionRate: 1,
    timestamp: (Date.now()),
    likes: [],
  };
  uploadToStorage('rando', picURI)
  .then((name) => {
    console.log("sucessfully uploaded blob");
  })
  .catch((error) => {
    console.error(" error uploading blob ", error)
  });
  //firestore.collection('posts').add(data)
  //  .then((docRef) => {
  //    // Update with docRef ID and image
  //    const postIDn = docRef.id;
  //    uploadToStorage(postIDn, picURI).then((imageStor) => {
  //      console.log("Image Stor below");
  //      console.log(imageStor);
  //      firestore.collection('posts').doc(docRef).update({
  //        url: imageStor,
  //        postID: postIDn,
  //      })
  //        .then(() => {
  //          console.log('Document successfully updated!');
  //        })
  //        .catch((error) => {
  //          // The document probably doesn't exist.
  //          console.error('Error updating document: ', error);
  //        });
  //      console.log('Document written with ID: ', docRef.id);
  //    })
  //  })
  //  .catch((error) => {
  //    console.error('Error adding document: ', error);
  //  });
}
