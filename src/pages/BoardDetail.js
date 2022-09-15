import Header from "./Header";
import "./BoardDetail.css";
import { MdList } from "react-icons/md";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import { useNavigate } from "../../node_modules/react-router-dom/index";

import "./font.css";

const BoardDetail = ({ article, handlelist }) => {
  console.log("BoardDetail => ", article);

  const navigate = useNavigate();
  const onClick = () => {
    navigate("/main");
  };

  return (
    <div>
      <Header />
      <form className="detail">
        <div className="Main_top_title">
          <div className="Main_top_title_top">
            <button onClick={onClick}>
              <h1>게시판</h1>
            </button>
          </div>
        </div>

        <table width="900px" align="center">
          <tbody>
            <tr className="tr">
              <td width="70px" className="td board_font">
                글번호
              </td>
              <td align="left" width="600px">
                {article.board_num}
              </td>
            </tr>
            <tr className="tr">
              <td width="70px" className="td board_font">
                제목
              </td>
              <td align="left" width="600px">
                {article.board_title}
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
              <td width="70px" className="td board_font">
                글쓴날짜
              </td>
              <td align="left" width="600px">
                {article.board_date}
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="left" width="600px">
                <div className="detail_content">{article.board_content}</div>
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                {/* <input
                  type="button"
                  value="글목록"
                  onClick={handlelist}
                ></input> */}
                <button
                  variant="secondary"
                  onClick={handlelist}
                  className="list_button board_font"
                >
                  <MdList />
                  글목록
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default BoardDetail;
