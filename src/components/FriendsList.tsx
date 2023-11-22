import Friend from './Friend';
import { FriendType } from '../types/FriendType';

interface FriendsListProps {
  friends: FriendType[];
  onSelection: (friend: FriendType) => void;
  selectedFriend: FriendType | null;
}

const FriendsList: React.FC<FriendsListProps> = ({
  friends,
  onSelection,
  selectedFriend,
}) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.name}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
