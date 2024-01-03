import { memo } from "react";
import { Twit } from "./Twit";

const MemoizedTwit = memo(Twit);

export function TwitList({ twits, like, disLike, edit, deleteTwit }) {
  return (
    <div className="twit-list">
      {twits.map((twit) => {
        return (
          <MemoizedTwit
            key={twit.id}
            twit={twit}
            like={like}
            disLike={disLike}
            edit={edit}
            deleteTwit={deleteTwit}
          />
        );
      })}
    </div>
  );
}
