import { firestore } from '../../../../config/firebase';

export function getReactionRate(number, timestamp) {
  return (firestore.Timestamp().toMillis() - timestamp) / number;
}
