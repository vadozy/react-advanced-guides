class ChatAPI {

  _listeners = new Map(); // key: id, value: array of listeners
  _friendsStatus = new Map(); // key: id, value: status bool

  constructor() {
    setInterval(this._changeFriendsStatus, 5000);
  }

  _changeFriendsStatus = () => {
    this._friendsStatus.forEach((v, k, m) => {
      if (Math.random() < 0.5) {
        console.log(`Changing friend [ id = ${k} ] status from ${m.get(k)} to ${!m.get(k)}`)
        m.set(k, !m.get(k));
        this._listeners.get(k).forEach(l => l({isOnline: m.get(k)}));
      }
    });
  }

  subscribeToFriendStatus(id, statusChange) {
    console.log(`somebody subscribed for id: ${id}`);
    if (!this._friendsStatus.has(id)) {
      this._friendsStatus.set(id, false);
      this._listeners.set(id, []);
    }
    this._listeners.get(id).push(statusChange);
    statusChange({isOnline: this._friendsStatus.get(id)})
  }
  
  unsubscribeFromFriendStatus(id, statusChange) {
    console.log(`somebody unsubscribed from id: ${id}`);
    const listeners = this._listeners.get(id);
    const index = listeners.findIndex(statusChange);
    if (index >= 0) {
      listeners.splice(index, 1);
    }
    if (listeners.length === 0) {
      this._listeners.delete(id);
      this._friendsStatus.delete(id);
    }

  }
}

export default new ChatAPI();
