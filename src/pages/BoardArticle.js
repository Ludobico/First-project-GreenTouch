import axios from "axios";
import Button from "react-bootstrap/Button";

// import "./BoardArticle.css";

const BoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform,
}) => {
  const handleDelete = (e) => {
    if (article.BOARD_WRITER === window.sessionStorage.getItem("id")) {
      console.log("handleDelete(board_num) => ", e.target.id);
      axios
        .post("http://localhost:8008/delete", {
          num: e.target.id,
        })
        .then(() => {
          handlelist();
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      alert("작성자가 일치하지 않습니다.");
      return false;
    }
  };

  console.log("BoardArticle =>", article);
  return (
    <tr className="Tbl_list">
      <td>{article.BOARD_NUM}</td>
      <td>
        <a
          href="#"
          id={article.BOARD_NUM}
          onClick={handledetail}
          style={{ color: "black" }}
        >
          {article.BOARD_TITLE}
        </a>
      </td>
      <td>{article.BOARD_WRITER}</td>
      <td>{article.BOARD_DATE}</td>
      <td align="center">
        <button
          variant="info"
          id={article.BOARD_NUM}
          value={article.BOARD_WRITER}
          onClick={handleupdateform}
          className="article_button1"
        >
          수정
        </button>
        &nbsp;
        <button
          variant="danger"
          id={article.BOARD_NUM}
          onClick={handleDelete}
          className="article_button2"
        >
          삭제
        </button>
      </td>
    </tr>
  );
};

export default BoardArticle;
