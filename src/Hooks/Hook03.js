import React, { useState, useEffect } from "react";
import ChatAPI from "./ChatAPI";

// Old way
class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }

  handleStatusChange = status => {
    this.setState({
      isOnline: status.isOnline
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return "Loading...";
    }
    return this.state.isOnline ? "Online" : "Offline";
  }

}

// New way
function FriendStatusHooks(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    const handleStatusChange = status => setIsOnline(status.isOnline);
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    // Specify how to clean up after this effect:
    return () =>
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  }, [props.friend.id]);

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}

// New way with custom hook
function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    const handleStatusChange = status => setIsOnline(status.isOnline);
    ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange);

    // Specify how to clean up after this effect:
    return () =>
      ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange);
  }, [friendId]);
  return isOnline;
}

function FriendStatusCustomHook(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}

export default function(props) {
  const changingId = useChangingId();
  return (
    <>
      <div>
        <FriendStatus friend={{ id: 42 }} />
      </div>
      <div>
        <FriendStatus friend={{ id: 43 }} />
      </div>
      <div>
        <FriendStatusHooks friend={{ id: 123 }} />
      </div>
      <div>
        <FriendStatusCustomHook friend={{ id: changingId }} />
      </div>
    </>
  );
}

function useChangingId() {
  const [id, setId] = useState(1);
  useEffect(() => {
    setTimeout(() => setId(id + 1), 5000);
  });
  return id;
}
