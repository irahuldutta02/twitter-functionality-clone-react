import { Twit } from "./Twit";

export function TwitList({ twits, like, disLike, edit, deleteTwit }) {
  return (
    <div className="twit-list">
      {twits.map((twit) => {
        return (
          <Twit
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
