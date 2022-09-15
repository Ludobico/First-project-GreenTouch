import { useEffect } from "react";
import BoardArticle from "./BoardArticle";
import { useNavigate } from "react-router-dom";
import PageLink from "./PageLink";
import Table from "react-bootstrap/Table";
import "./BoardList.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "./font.css";

const BoardList = ({
  boardlist,
  actionmode,
  handlelist,
  handledetail,
  handleupdateform,
  handlepage,
  pagelink,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    handlelist();
  }, []);

  const handleLogout = () => {
    console.log("handleLogout");
    window.sessionStorage.clear();
    navigate("/"); //로그인페이지로 이동
  };
  if (boardlist.boardList.length === 0) {
    return (
      <div className="tablelist">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th width="60">번호</th>
              <th width="240">제목</th>
              <th width="100">작성자</th>
              <th width="100>">작성일</th>
              <th width="200">
                수정/삭제
                <input
                  type="button"
                  value="로그아웃"
                  onClick={handleLogout}
                ></input>
              </th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  } else {
    return (
      <div className="tablelist">
        <Table table hover>
          <thead>
            <tr>
              <th width="60">번호</th>
              <th width="240">제목</th>
              <th width="100">작성자</th>
              <th width="100>">작성일</th>
              <th width="200">
                수정/삭제
                {/* <input
                  type="button"
                  value="로그아웃"
                  onClick={handleLogout}
                ></input> */}
              </th>
            </tr>
          </thead>
          <tbody>
            {boardlist.boardList.map((article) => {
              return (
                <BoardArticle
                  actionmode={actionmode}
                  article={article}
                  key={article.BOARD_NUM}
                  handlelist={handlelist}
                  handledetail={handledetail}
                  handleupdateform={handleupdateform}
                />
              );
            })}
          </tbody>
        </Table>
        <table align="center" id="pagetbl">
          <tr>
            <td>
              <button>
                <MdKeyboardArrowLeft />
              </button>
              {pagelink.map((page) => {
                return (
                  <PageLink page={page} key={page} handlepage={handlepage} />
                );
              })}
              <button>
                <MdKeyboardArrowRight />
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
};

export default BoardList;
