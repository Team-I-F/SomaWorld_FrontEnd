import { useEffect, useState } from "react";
import { getboard } from "../../utils/api/board";
import { Link, useParams } from "react-router-dom";

const Board = () => {
  const { boardID } = useParams();

  const [board, setBoard] = useState([])

  function initialBoard() {
  
   const response = getboard(boardID);

   response
   .then(function (data) {
     setBoard(data.data);
     console.log(board);
   })
   .catch((error) => {
     console.log(error);
   });

  
  }

  useEffect(() => {
    initialBoard();
  }, []);

  return (
    <div>
      <h1>갤러리</h1>


      {board &&
        board.map((board) => (
          <Link to={`/gallery/${boardID}/${board.tableID}`}>
            <div>
              <h1>{board.tableID}</h1>
              <h1>{board.title}</h1>
              <span>{board.views}</span>
              <p>{board.created}</p>
              <p>{board.userNickname}</p>
            </div>
          </Link>
        ))}


    </div>
  );
};

export default Board;



