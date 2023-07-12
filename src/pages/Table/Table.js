import { useEffect, useState } from "react";
import { getTable } from "../../utils/api/board";
import { useParams } from "react-router-dom";
import Post from "../../components/Post/Post";

const Board = () => {
  const { boardID, tableID } = useParams();

  const [table, setTable] = useState([]);

  function initialBoards() {
    const response = getTable(boardID, tableID);

    response
    .then(function (data) {
      setTable(data.data[0]);
    })
    .catch((error) => {
      console.log(error);
    });
    
  }

  useEffect(() => {
    initialBoards();
    console.log(table);
  }, []);

  return (
    <div>
      <h1>테이블</h1>
      {table && (
        <div>
          <Post table={table} />
        </div>
      )}
    </div>
  );
};

export default Board;
