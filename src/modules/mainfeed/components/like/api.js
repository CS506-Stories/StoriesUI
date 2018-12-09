import { database, firestore } from '../../../../config/firebase';

export function calReactionRate(number, timestamp) {
  const nowDate = new Date();
  return (nowDate - timestamp) / number;
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
    let { reactionRate } = dataDoc.data();
    if (idx === -1) {
      likes.push(uid);
      reactionRate = calReactionRate(likes.length, timestamp);
    } else {
      likes.splice(uid, 1);
    }
    transaction.update(dataRef, { likes, reactionRate });
  });
}

// export function getTimeStamp(post) {
//
// }
