const blogPost = {
  title: "Sun and moon",
  body: "The sun and the moon are two different things.",
  author: "Mosh",
  views: 50,
  comments: [
    { author: "John", body: "I like the Sun." },
    { author: "Paul", body: "I like the Moon." },
  ],
  isLive: true,
};

console.log(blogPost);

console.log(
  blogPost.title +
    " by " +
    blogPost.author +
    " has " +
    blogPost.views +
    " views and " +
    " is " +
    (blogPost.isLive ? "live" : "not live") +
    "."
);
