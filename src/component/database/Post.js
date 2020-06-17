/* eslint-disable prettier/prettier */
const {dbPost, storagePost} = require('./Firebase');
export const addPost = (post, path) => {
  const key = dbPost.push().key;
  const ref = storagePost.child(key);
  post.key = key;
  post.pubDate = currentDay();
  post.timeStamp = Date.now();
  ref
    .putFile(path, {contentType: 'image/png'})
    .then(() => {
      return ref.getDownloadURL();
    })
    .then((url) => {
      post.url = url;
      dbPost
        .child(post.category)
        .child(key)
        .set(post)
        .then(() => console.log('Post Added'))
        .catch((err) => console.log(err));
    });
};
export const deletePost = (category, key) => {
  storagePost
    .child(key)
    .delete()
    .then(() => {
      dbPost
        .child(category)
        .child(key)
        .remove()
        .then(() => console.log('Post Deleted'));
    });
};

export const updatePost = (post, path) => {
  const key = post.key;
  const ref = storagePost.child(key);

  if (path === null) {
    dbPost
      .child(post.category)
      .child(key)
      .update(post)
      .then(() => console.log('Post Updated'))
      .catch((err) => console.log(err));
  } else {
    ref
      .putFile(path, {contentType: 'image/png'})
      .then(() => {
        return ref.getDownloadURL();
      })
      .then((url) => {
        post.url = url;
        dbPost
          .child(post.category)
          .child(key)
          .update(post)
          .then(() => console.log('Post Updated'))
          .catch((err) => console.log(err));
      });
  }
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
