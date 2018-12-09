import { database, firestore } from '../../../../config/firebase';

export function calReactionRate(number, timestamp) {
  const nowDate = Date.now();
  console.log(" Now data: " + nowDate + " and timestamp " + timestamp + " and number:  " + number);
  const reactionRate = (nowDate - timestamp) / number;
  console.log("reaction rate: " + reactionRate);
  return reactionRate;
}
// export function getReactionRate(post) {
//   const docRef = firestore.collection('posts').doc(post).get().then((resp) => {
//     console.log("GET REACTION RATE");
//     console.log(resp);
//     return resp.reactionRate;
//   });
//   return docRef;
// }
function getPost(postID) {
  return firestore.collection('posts').doc(postID);
}

export function upvote(uid, idx, postID, timestamp) {
  const dataRef = getPost(postID);

  firestore.runTransaction(async transaction => {
    const dataDoc = await transaction.get(dataRef);
    const { likes } = dataDoc.data();
    const newLikes = likes;
    const { reactionRate } = dataDoc.data();
    let newReactionRate = reactionRate;
    if (idx === -1) {
      newLikes.push(uid);
      newReactionRate = calReactionRate(newLikes.length, timestamp);
    } else {
      newLikes.splice(uid, 1);
    }
    transaction.update(dataRef, { likes: newLikes });
    transaction.update(dataRef, { reactionRate: newReactionRate });
  })
    .catch((err) => {
      console.log('Transaction failed: ', err);
    });
}
