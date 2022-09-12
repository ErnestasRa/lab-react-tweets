import Actions from './Actions';
import Message from './Message';
import ProfileImage from './ProfileImage';
import Timestamp from './Timestamp';
import User from './User'

function Tweet() {
  return (
    <div className="tweet">
      <ProfileImage />
      <div className="body">
        <div className="top">
         <User />
          <Timestamp />
        </div>
        <Message />
       <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
