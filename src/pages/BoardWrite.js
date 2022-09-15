import { useRef, useState } from "react";
import axios from "axios";
import "./BoardList.css";
import "./BoardWrite.css";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import { MdCreate, MdSearch } from "react-icons/md";
import cn from "classnames";
import useStore from "../store/Store";
import "./font.css";

const BoardWrite = ({
  handlelist,
  setSearchword,
  handleSearch,
  toggle,
  onToggle,
}) => {
  const titleRef = useRef();
  const writerRef = useRef();
  const contentRef = useRef();
  const { setloginfalse, setlogoutfalse } = useStore((state) => state);

  const [pageLink, setPageLink] = useState([]);

  async function handleInsert() {
    console.log("handleInsert =>", titleRef.current.value);
    if (titleRef.current.value === "" || titleRef.current.value === undefined) {
      alert("제목을 입력하세요.");
      titleRef.current.focus();
      return false;
    }
    // if (
    //   writerRef.current.value === "" ||
    //   writerRef.current.value === undefined
    // ) {
    //   alert("작성자를 입력해라");
    //   writerRef.current.focus();
    //   return false;
    // }
    if (
      contentRef.current.value === "" ||
      contentRef.current.value === undefined
    ) {
      alert("내용을 입력하세요.");
      contentRef.current.focus();
      return false;
    }

    // axios
    //   .post("http://localhost:8008/insert", {
    //     title: titleRef.current.value,
    //     writer: window.sessionStorage.getItem("id"),
    //     content: contentRef.current.value,
    //   })
    //   .then((res) => {
    //     console.log("handleInsert =>", res);
    //     handlelist();
    //     titleRef.current.value = "";
    //     writerRef.current.value = "";
    //     contentRef.current.value = "";
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });

    //board_tbl의 자동생성되는 board_num을 쓰는 게 아니라 전체 글의 개수(article_count) 사용
    //전체 글의 개수를 불러와 insert에 사용하기 위해 getList()처럼 /count하고 /insert
    var article_count = 0;
    var page_count = 1;
    var page_size = 3;
    await axios
      .get("http://localhost:8008/count", {})
      .then((res) => {
        console.log("handleInsert(res) => ", res);
        const { data } = res;
        article_count = data[0].COUNT;
        page_count = Math.ceil(article_count / page_size);
        var page_link = [];
        for (let i = 1; i <= page_count; i++) page_link.push(i);
        console.log("getArticleCount(page_link) =>", page_link);
        setPageLink(page_link);
      })
      .catch((e) => {
        console.error(e);
      });
    await axios
      .post("http://localhost:8008/insert", {
        title: titleRef.current.value,
        writer: window.sessionStorage.getItem("id"),
        content: contentRef.current.value,
        article_count: article_count + 1, //전체 글 개수 + 1이 새로 만들어질 글의 board_num
      })
      .then((res) => {
        console.log("handleInsert =>", res);
        handlelist();
        titleRef.current.value = "";
        writerRef.current.value = "";
        contentRef.current.value = "";
      })
      .catch((e) => {
        console.error(e);
      });
  }

  // const [toggle, setToggle] = useState(false);
  // const onToggle = () => {
  //   setToggle(!toggle);
  // };

  const onChange = (e) => {
    setSearchword(e.target.value);
  };

  return (
    <div className="boardWriteDiv">
      <Header></Header>
      <form className="boardWriteForm">
        <div className="Main_top_title">
          <div className="Main_top_title_top">
            <button>
              <h1 className="board_title">게시판</h1>
            </button>
          </div>
        </div>
        <div className="container">
          <div className="Main_write">
            <button onClick={onToggle}>
              <MdCreate style={{ fontSize: "25px", marginBottom: "8px" }} />
              <label className="board_font">글쓰기</label>
            </button>
          </div>
          <div id="searchdiv">
            <input type="text" placeholder="Search" onChange={onChange} />
            <button value="검색" onClick={handleSearch}>
              <MdSearch />
            </button>
          </div>
        </div>
        <table className={cn("tablewrite", { toggle })} align="center">
          <tbody>
            <tr className="tr">
              <td width="150px" className="board_font">
                제목
              </td>
              <td align="left" width="550px">
                <input
                  type="text"
                  name="title"
                  size="68"
                  placeholder="제목을 입력하세요"
                  ref={titleRef}
                  className="input"
                ></input>
              </td>
            </tr>
            <tr className="tr">
              <td width="150px" className="board_font">
                작성자
              </td>
              <td align="left" width="300px">
                {/* <input
                  type="text"
                  name="writer"
                  size="68"
                  placeholder="누가 작성했냐"
                  ref={writerRef}
                ></input> */}
                <div ref={writerRef}>{window.sessionStorage.getItem("id")}</div>
              </td>
            </tr>
            <tr className="tr">
              <td colSpan="2" align="left">
                <button type="reset" className="tb_button2 board_font">
                  다시쓰기
                </button>
                <textarea
                  rows="30"
                  cols="50"
                  //css파일에서 width:100%가 안 먹혀서 직접 늘릴 때 아래 값 사용
                  // rows="10"
                  // cols="150"
                  name="content"
                  placeholder="내용을 입력하세요."
                  ref={contentRef}
                ></textarea>
              </td>
            </tr>
            <tr className="table_write_button">
              <td colSpan="2" align="center">
                <button
                  variant="secondary"
                  onClick={handleInsert}
                  className="tb_button1 board_font"
                >
                  작성
                </button>
                &nbsp;
                {/* <button type="reset" variant="secondary" className="tb_button2">
                  다시쓰기
                </button>
                &nbsp; */}
                <button
                  variant="secondary"
                  onClick={onToggle}
                  className="tb_button3 board_font"
                >
                  작성취소
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default BoardWrite;
