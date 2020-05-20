class ChatAPI {

  _listeners = new Map(); // key: id, value: array of listeners
  _friendsStatus = new Map(); // key: id, value: status bool

  constructor() {
    setInterval(this._changeFriendsStatus, 1000);
  }

  _changeFriendsStatus = () => {
    this._friendsStatus.forEach((v, k, m) => {
      if (Math.random() < 0.2) {
        console.log(`Changing friend [ id = ${k} ] status from ${v} to ${!v}`)
        m.set(k, !v);
        this._listeners.get(k).forEach(l => l({isOnline: m.get(k)}));
      }
    });
  }

  subscribeToFriendStatus(id, statusChange) {
    console.log(`somebody subscribed for id: ${id}`);
    if (!this._friendsStatus.has(id)) {
      this._friendsStatus.set(id, null);
      this._listeners.set(id, []);
    }
    this._listeners.get(id).push(statusChange);
    statusChange({isOnline: this._friendsStatus.get(id)})
  }
  
  unsubscribeFromFriendStatus(id, statusChange) {
    console.log(`somebody unsubscribed from id: ${id}`);
    const listeners = this._listeners.get(id);
    const index = listeners.findIndex(el => el === statusChange);
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
