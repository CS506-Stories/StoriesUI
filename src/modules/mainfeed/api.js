import { database, firestore } from '../../config/firebase';

export function getPostCollection() {
    var prom = firestore.collection('posts').orderBy("reactionRate", "desc").get().then((querySnapshot) => {
        let postArr = [];
        querySnapshot.forEach(function(doc) {
            postArr.push(doc.data());
        });
        return postArr;
    })
    .catch(function(error) {
      console.log(error);
    });

    return prom;
}
