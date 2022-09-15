import BoardList from "./BoardList";
import BoardWrite from "./BoardWrite";
import BoardDetail from "./BoardDetail";
import BoardUpdateForm from "./BoardUpdateForm";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Main() {
  const [boardlist, setBoardlist] = useState({ boardList: [] }); //게시판 글 정보 저장
  const [searchword, setSearchword] = useState("");

  const navigate = useNavigate();

  const [article, setArticle] = useState({
    //상세보기 or 수정할때 불러올 데이터들
    board_num: 0,
    board_writer: "",
    board_title: "",
    board_content: "",
    board_date: "",
  });

  // 0:글쓰기 1:상세보기 2:글수정
  const [actionMode, setActionMode] = useState({ mode: 0 });

  const [pageLink, setPageLink] = useState([]);

  var page_num = 1;
  const page_size = 5;
  var page_count = 1;
  var article_count = 0;

  useEffect(() => {
    const login_id = window.sessionStorage.getItem("id");
    console.log("window.sessionStorage(login_id) => ", login_id);
    if (login_id === null) {
      alert("로그인후 사용가능");
      navigate("/");
    }
  }, []);

  const handlepage = (e) => {
    console.log("handlepage(e.target.id) =>", e.target.id);
    page_num = e.target.id;
    getList();
  };
  //글목록
  async function getList() {
    await axios
      .get("https://greentouch.herokuapp.com/count", {}) //axios.get(url,data)
      .then((res) => {
        //매개변수 res는 index.js에 있는 result를 받음
        const { data } = res; //비구조화 할당
        article_count = data[0].COUNT;
        page_count = Math.ceil(article_count / page_size); //ceil : 올림
        var page_link = [];
        for (let i = 1; i <= page_count; i++) page_link.push(i);
        console.log("getArticleCount(page_link) =>", page_link);
        setPageLink(page_link);
      })
      //     console.log("data =>", data);
      //     setBoardlist({
      //       boardList: data,
      //     });
      //     setActionMode({
      //       ...actionMode,
      //       mode: 0, //상세보기
      //     });
      //   })
      .catch((e) => {
        console.error(e);
      });
    await axios
      .post("https://greentouch.herokuapp.com/list", {
        page_num: page_num,
        page_size: page_size,
        article_count: article_count,
      })
      .then((res) => {
        const { data } = res;
        console.log("data =>", data);
        setBoardlist({
          boardList: data,
        });
        setActionMode({
          ...actionMode,
          mode: 0,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  //상세보기
  const handleDetail = (e) => {
    axios
      .post("https://greentouch.herokuapp.com/detail", { num: e.target.id })
      .then((res) => {
        const { data } = res;
        console.log("detail =>", data);
        if (res.data.length > 0) {
          setArticle({
            ...article,
            board_num: data[0].BOARD_NUM,
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE,
          });

          setActionMode({
            ...actionMode,
            mode: 1, //상세보기
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //수정폼 보기
  const handleUpdateForm = (e) => {
    console.log(e);
    console.log(window.sessionStorage.getItem("id"));
    if (e.target.value === window.sessionStorage.getItem("id")) {
      axios
        .post("https://greentouch.herokuapp.com/detail", { num: e.target.id }) //axios(url,data)
        //num: e.target.id 는 a태그의 id를 가르킴
        .then((res) => {
          const { data } = res;
          console.log("handleUpdateForm =>", data);
          if (res.data.length > 0) {
            setArticle({
              ...article,
              board_num: data[0].BOARD_NUM,
              board_writer: data[0].BOARD_WRITER,
              board_title: data[0].BOARD_TITLE,
              board_content: data[0].BOARD_CONTENT,
              board_date: data[0].BOARD_DATE,
            });
            setActionMode({
              ...actionMode,
              mode: 2, //글 수정
            });
          }
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      alert("작성자가 일치하지 않습니다.");
    }
  };

  const handleUpdate = () => {
    console.log("handleUpdate =>", article);
    axios
      .post("https://greentouch.herokuapp.com/update", {
        article: article,
      })
      .then(() => {
        getList();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //검색
  async function handleSearch(e) {
    if (searchword.length <= 1 || searchword === undefined) {
      alert("정확한 검색을 위해 두 글자 이상 입력해 주세요");
      return false;
    }

    await axios
      .post("https://greentouch.herokuapp.com/searchcount", {
        searchword: searchword,
      })
      .then((res) => {
        const { data } = res;
        console.log("searchcount/data => ", data);
        article_count = data[0].COUNT;
        page_count = Math.ceil(article_count / page_size);
        var page_link = [];
        for (let i = 1; i <= page_count; i++) {
          page_link.push(i);
        }
        setPageLink(page_link);
      })
      .catch((e) => {
        console.error(e);
      });
    await axios
      .post("https://greentouch.herokuapp.com/search", {
        searchWord: searchword,
      })
      // .then((res) => {
      //   alert("검색 성공");
      //   const { data } = res;
      //   console.log("searchResult => ", data);
      //   if (data.length > 0) {
      //     setBoardlist({ boardList: data });
      //     setActionMode({
      //       ...actionMode,
      //       mode: 0,
      //     });
      //   } else {
      //     alert("검색 결과가 없습니다");
      //   }
      // })
      .then((data) => {
        alert("검색 성공");
        console.log("searchResult => ", data);
        if (data.length > 0) {
          setBoardlist(data);
          setActionMode({
            ...actionMode,
            mode: 0,
          });
        }
      })
      .catch((e) => {
        alert("검색 실패");
        console.error(e);
      });
  }

  // //검색결과에 따른 페이지 -> 실패
  // async function searchList() {
  //   await axios
  //     .post("http://localhost:8008/searchcount", {
  //       searchword: searchword,
  //     })
  //     .then((res) => {
  //       const { data } = res;
  //       console.log("searchcount/data => ", data);
  //       article_count = data[0].COUNT;
  //       page_count = Math.ceil(article_count / page_size);
  //       var page_link = [];
  //       for (let i = 1; i <= page_count; i++) {
  //         page_link.push(i);
  //       }
  //       setPageLink(page_link);
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //     });
  //   await axios
  //     .post("http://localhost:8008/searchlist", {
  //       page_num: page_num,
  //       page_size: page_size,
  //       article_count: article_count,
  //       searchword: searchword,
  //     })
  //     .then((res) => {
  //       const { data } = res;
  //       setBoardlist({ boardList: data });
  //       setActionMode({
  //         ...actionMode,
  //         mode: 0,
  //       });
  //     });
  // }

  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };

  if (actionMode.mode === 0) {
    // alert('글쓰기')
    // 글쓰기
    if (toggle) {
      return (
        <div>
          <BoardWrite
            handlelist={getList}
            setSearchword={setSearchword}
            handleSearch={handleSearch}
            toggle={toggle}
            onToggle={onToggle}
          ></BoardWrite>
        </div>
      );
    } else {
      return (
        <div>
          <BoardWrite
            handlelist={getList}
            setSearchword={setSearchword}
            handleSearch={handleSearch}
            toggle={toggle}
            onToggle={onToggle}
          ></BoardWrite>
          <br />
          <BoardList
            boardlist={boardlist}
            actionMode={actionMode}
            handlelist={getList}
            handledetail={handleDetail}
            handleupdateform={handleUpdateForm}
            handlepage={handlepage}
            pagelink={pageLink}
          ></BoardList>
        </div>
      );
    }
  } else if (actionMode.mode === 1) {
    // alert('상세정보')
    // 상세보기
    return (
      <div>
        <BoardDetail article={article} handlelist={getList}></BoardDetail>
        <br />
        <BoardList
          boardlist={boardlist}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={handleUpdateForm}
          handlepage={handlepage}
          pagelink={pageLink}
        ></BoardList>
      </div>
    );
  } else if (actionMode.mode === 2) {
    // alert('글수정')
    //글수정
    return (
      <div>
        <BoardUpdateForm
          article={article}
          setArticle={setArticle}
          handleupdate={handleUpdate}
        ></BoardUpdateForm>
        <br />
        <BoardList
          boardlist={boardlist}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={handleUpdateForm}
          handlepage={handlepage}
          pagelink={pageLink}
        ></BoardList>
      </div>
    );
  }
}

export default Main;
