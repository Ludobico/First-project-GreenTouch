import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import "./BoardUpdateForm.css";
import { MdCreate } from "react-icons/md";
import { useNavigate } from "../../node_modules/react-router-dom/index";

import "./font.css";

const BoardUpdateForm = ({ article, setArticle, handleupdate, handleList }) => {
  console.log("BoardUpdateForm =>", article);

  const onChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const onClick = () => {
    navigate("/main");
  };

  return (
    <div>
      <Header />
      <form className="updateform">
        {/* <button onClick={onClick}>
          <h1>게시판</h1>
        </button>
        <p>서로 의견을 나누는 게시판입니다.</p> */}
        <div className="Main_top_title">
          <div className="Main_top_title_top">
            <button onClick={onClick}>
              <h1>게시판</h1>
            </button>
          </div>
        </div>

        <table width="700px" align="center">
          <tbody>
            <tr className="tr">
              <td width="70px" className="td board_font">
                제목
              </td>
              <td align="left" width="600px">
                <input
                  type="text"
                  name="board_title"
                  defaultValue={article.board_title}
                  onChange={onChange}
                ></input>
              </td>
            </tr>
            <tr className="tr">
              <td width="70px" className="td board_font">
                작성자
              </td>
              <td align="left" width="600px">
                {article.board_writer}
              </td>
            </tr>
            <tr className="tr">
              <td colSpan="2" align="left" width="600px">
                {/* <input
                  type="text"
                  name="board_content"
                  defaultValue={article.board_content}
                  onChange={onChange}
                ></input> */}
                <textarea
                  // rows="5"
                  rows="10"
                  cols="50"
                  name="board_content"
                  defaultValue={article.board_content}
                  onChange={onChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                {/* <input
                  type="button"
                  value="글수정"
                  onClick={handleupdate}
                ></input> */}
                <div className="Update_in_button1">
                  <button
                    className="Update_button1 board_font"
                    onClick={handleupdate}
                  >
                    <MdCreate />
                    글수정
                  </button>
                </div>
                <div className="Update_in_button2">
                  <button
                    className="Update_button2 board_font"
                    onClick={handleList}
                  >
                    취소
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default BoardUpdateForm;
