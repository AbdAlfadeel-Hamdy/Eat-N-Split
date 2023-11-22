import Button from './Button';
import { FriendType } from '../types/FriendType';
interface FriendProps {
  friend: FriendType;
  onSelection: (friend: FriendType) => void;
  selectedFriend: FriendType | null;
}

const Friend: React.FC<FriendProps> = ({
  friend,
  onSelection,
  selectedFriend,
}) => {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={`${isSelected ? 'selected' : ''}`}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance > 0 ? 'red' : friend.balance < 0 ? 'green' : ''
        }
      >
        {friend.balance === 0
          ? `You and ${friend.name} are even`
          : friend.balance > 0
          ? `You owe ${friend.name} ${friend.balance}€`
          : `${friend.name} owes you ${-friend.balance}€`}
      </p>
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
};

export default Friend;
