class DataSource {

  blogPost = "Some Blog Post"

  comments = [
    {
      id: 1,
      text: "Comment 01",
    }, {
      id: 2,
      text: "Comment 02",
    },
  ]

  changeListeners = []

  constructor() {
    setInterval(this.updateData, 1000);
  }

  updateData = () => {
    const today = new Date();

    const hours = ('0' + today.getHours()).slice(-2);
    const minutes = ('0' + today.getMinutes()).slice(-2);
    const seconds = ('0' + today.getSeconds()).slice(-2);

    const time = hours + ":" + minutes + ":" + seconds;
    this.comments[1].text = `Time: ${time}`;

    this.blogPost = `Blog post at: ${today.toLocaleTimeString()}`;
    
    this.changeListeners.forEach(listener => listener());
  }

  getComments() {
    return this.comments;
  }

  getBlogPost(id) {
    return this.blogPost + ` [id = ${id}]`;
  }

  addChangeListener(listener) {
    this.changeListeners.push(listener);
    console.log("Added a listener");
  }

  removeChangeListener(listener) {
    const i = this.changeListeners.findIndex(l => l === listener);
    if (i >= 0) {
      this.changeListeners.splice(i, 1);
      console.log("Removed a listener");
    }
  }
}

export default new DataSource();
