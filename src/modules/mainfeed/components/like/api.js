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
export function getPosts(post_id) {
  return firebase.collection("posts").doc(post_id);
}
// export function getTimeStamp(post) {
//
// }
