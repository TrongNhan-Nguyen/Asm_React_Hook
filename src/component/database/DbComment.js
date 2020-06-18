/* eslint-disable prettier/prettier */
import {dbComment} from './Firebase';

export const addComment = (comment) => {
  const key = dbComment.push().key;
  comment.pubDate = currentDay();
  comment.timeStamp = Date.now();
  comment.key = key;
  dbComment
    .child(comment.keyPost)
    .child(key)
    .set(comment)
    .then(() => console.log('comment added'))
    .catch((err) => console.log(err));
};
function currentDay() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  var date = day + '/' + month + '/' + year;

  return date;
}
