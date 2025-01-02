// const blogPost = {
//     title: "Sun and moon",
//     body: "The sun and the moon are two different things.",
//     author: "Mosh",
//     views: 50,
//     comments: [
//       { author: "John", body: "I like the Sun." },
//       { author: "Paul", body: "I like the Moon." },
//     ],
//     isLive: true,
//   };

function BlogPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const blogPost = new BlogPost(
  "Sun and moon",
  "The sun and the moon are two different things.",
  "Mosh"
);

console.log(blogPost);
