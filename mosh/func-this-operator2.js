const video = {
  title: "a",
  tags: ["a", "b", "c"],
  // showTags() {
  //   this.tags.forEach(function (tag) {
  //     console.log(this.title, tag);
  //   }, this);
  // },

  // use bind (old style)
  // showTags() {
  //   // const self = this;
  //   this.tags.forEach(
  //     function (tag) {
  //       console.log(this.title, tag);
  //     }.bind(this)
  //   );
  // },

  //starting with ES6 - or use arrow functions, arrow functions dont' have own contenxt and inherits the 'this' from its parent.
  // showTags() {
  //   this.tags.forEach((tag) => {
  //     console.log(this.title, tag);
  //   });
  // },
};

video.showTags();
