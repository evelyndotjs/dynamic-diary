let entryPosts = [];

module.exports.newEntry = function () {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  };
  entryPosts.push(post);
  res.redirect("/");
};

console.log(entryPosts);
