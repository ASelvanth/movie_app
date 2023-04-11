import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {

  //hooks 
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  //onclick function given here
  const incrementLike = () => setLike(like + 1);
  const incrementDislike = () => setDislike(dislike + 1);
  
  //to check 
  // useEffect(() =>{
  //   console.log("this 👍 value is updated",like);
  // },[like]);

  // useEffect(() =>{
  //   console.log("this 👎 value is updated",dislike);
  // },[ dislike]);

  return (
    <div className="counter-container">
      <IconButton
        color="primary"
        onClick={incrementLike}
        aria-label="like">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>

      </IconButton>

      <IconButton
        color="error"
        onClick={incrementDislike}
        aria-label="dislike">
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>

      </IconButton>

      {/* <button onClick= {incrementDislike}>👎{dislike}</button> */}
      {/* <button onClick={() => setDislike(dislike+1)}>👎{dislike}</button> */}

    </div>
  );
}
