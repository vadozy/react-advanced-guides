class DataSource {

  blogPost = `Blog post [ ${new Date().toLocaleString()} ]`;

  id = 0;

  comments = [];

  changeListeners = []

  constructor() {
    setInterval(this._updateComments, 20000);
    setInterval(this._updateBlogPost, 13000);
    setTimeout(this._updateComments, 3000);
  }

  _updateBlogPost = () => {
    this.blogPost = `UPDATED Blog post [ ${new Date().toLocaleString()} ]`;
    this.changeListeners.forEach(listener => listener());
  }

  _updateComments = () => {
    this.comments.push(
      {
        id: ++this.id,
        text: `Comment ${('0' + this.id).slice(-2)} [ ${new Date().toLocaleTimeString()} ]`,
      },
    );
    
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
