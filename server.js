const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors"); //api 불러올때 cors 정책 뚫어줌
const app = express();
require("dotenv").config();
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOption = {
  origin: "*", //출처 허용 옵션
  Credential: true, //사용자 인증이 필요한 리소스(쿠기 등) 접근
}; //api 불러올때 cors 정책 뚫어줌

app.use(cors(corsOption)); //api 불러올때 cors 정책 뚫어줌

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

app.post("/login", (req, res) => {
  console.log("/login", req.body, res.body);
  var id = req.body.id;
  var pw = req.body.pw;

  const sqlQuery = "SELECT *, COUNT(*) AS cnt FROM MEMBER WHERE ID=? AND PW=?;";
  db.query(sqlQuery, [id, pw], (err, result) => {
    console.log(result);
    res.send(result);
    // if (result[0].cnt === 1) {
    //   res.send({ message: "success" });
    // } else {
    //   res.send({ message: "fail" });
    // }
  });
});

app.post("/member", (req, res) => {
  console.log("/member", req.body);
  var id = req.body.id;
  var pw = req.body.pw;
  var email = req.body.email;
  var adress = req.body.adress;

  const sqlQuery = "INSERT INTO MEMBER (ID,PW,EMAIL,ADRESS) VALUES (?,?,?,?);";
  const resultQuery = "INSERT INTO RESULT (ID,ITEM) VALUES (?,?);";
  const resultQuery2 = "INSERT INTO RESULT (ID,ITEM) VALUES (?,?);";
  const resultQuery3 = "INSERT INTO RESULT (ID,ITEM) VALUES (?,?);";
  const contentQuery = "INSERT INTO CONTENT (ID,ITEM) VALUES (?,?);";
  const contentQuery2 = "INSERT INTO CONTENT (ID,ITEM) VALUES (?,?);";
  const contentQuery3 = "INSERT INTO CONTENT (ID,ITEM) VALUES (?,?);";
  db.query(sqlQuery, [id, pw, email, adress], (err, result) => {
    res.send(result);
    console.log("result", result);
  });
  db.query(resultQuery, [id, 1], (err, result) => {
    console.log("결과테이블", result);
  });
  db.query(resultQuery2, [id, 2], (err, result) => {
    console.log("결과테이블", result);
  });
  db.query(resultQuery3, [id, 3], (err, result) => {
    console.log("결과테이블", result);
  });
  db.query(contentQuery, [id, 1], (err, result) => {
    console.log("내용테이블", result);
  });
  db.query(contentQuery2, [id, 2], (err, result) => {
    console.log("내용테이블", result);
  });
  db.query(contentQuery3, [id, 3], (err, result) => {
    console.log("내용테이블", result);
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running on port 3000`);
});

app.post("/list", (req, res) => {
  console.log("list");
  var page_num = parseInt(req.body.page_num);
  var page_size = parseInt(req.body.page_size);
  var article_count = req.body.article_count;
  console.log(page_num, page_size, article_count);

  const start_limit = (page_num - 1) * page_size;
  const sqlQuery =
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT , DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL ORDER BY BOARD_NUM DESC LIMIT ?,?;";
  db.query(sqlQuery, [start_limit, page_size], (err, result) => {
    res.send(result);
  });
});

app.get("/count", (req, res) => {
  console.log("count");
  const sqlQuery = "SELECT COUNT(*) AS COUNT FROM BOARD_TBL;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});
app.post("/insert", (req, res) => {
  console.log("/insert", req.body);
  var writer = req.body.writer;
  var title = req.body.title;
  var content = req.body.content;

  const sqlQuery =
    "INSERT INTO BOARD_TBL (BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT) VALUES (?,?,?);";
  db.query(sqlQuery, [writer, title, content], (err, result) => {
    res.send(result);
  });
});

app.post("/detail", (req, res) => {
  console.log("/detail", req.body);
  var num = parseInt(req.body.num);

  const sqlQuery =
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%M-%D') AS BOARD_DATE FROM BOARD_TBL WHERE BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    res.send(result);
  });
});

app.post("/update", (req, res) => {
  console.log("/update", req.body);
  var title = req.body.article.board_title;
  var content = req.body.article.board_content;
  var num = req.body.article.board_num;

  const sqlQuery =
    "UPDATE BOARD_TBL SET BOARD_TITLE=?, BOARD_CONTENT=?, BOARD_DATE=NOW() WHERE BOARD_NUM=?;";
  db.query(sqlQuery, [title, content, num], (err, result) => {
    res.send(result);
    console.log("/result=", result);
  });
});

app.post("/delete", (req, res) => {
  const num = req.body.num;
  console.log("/delete(id) =>", num);

  const sqlQuery = "DELETE FROM BOARD_TBL WHERE BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    console.log(err);
    res.send(result);
  });
});

//검색
app.post("/searchcount", (req, res) => {
  const searchword = req.body.searchword;

  const sqlQuery =
    "SELECT COUNT(*) AS COUNT FROM BOARD_TBL WHERE BOARD_TITLE LIKE ?;";
  db.query(sqlQuery, ["%" + searchword + "%"], (err, result) => {
    res.send(result);
    console.log("searchCount/result => ", result);
  });
});

app.post("/search", (req, res) => {
  const searchWord = "%" + req.body.searchWord + "%";
  console.log("search/req => ", req.body);

  const sqlQuery =
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%M-%D') AS BOARD_DATE FROM BOARD_TBL WHERE BOARD_TITLE LIKE ? ORDER BY BOARD_NUM DESC;";
  db.query(sqlQuery, [searchWord], (err, result) => {
    // res.send(result);
    console.log("search/result => ", result);

    // //RowDataPacket으로 받아와져서(result) 먼저 문자열로 바꾸고(stringify) 객체로 변환(parse)
    const datalist = [];
    const data = JSON.parse(JSON.stringify(result));
    datalist.push(data);
    console.log("search/datalist => ", datalist);
    res.send(result);
  });
});

//우울증 질문 출력
app.post("/self1", (req, res) => {
  const sqlQuery = "SELECT QUESTION FROM SELF_TEST WHERE ITEM = 1";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

//ADHD 질문 출력
app.post("/self2", (req, res) => {
  const sqlQuery = "SELECT QUESTION FROM SELF_TEST WHERE ITEM = 2";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

//공황장애 질문 출력
app.post("/self3", (req, res) => {
  const sqlQuery = "SELECT QUESTION FROM SELF_TEST WHERE ITEM = 3;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

//우울증 결과를 id에 따라 점수,등급,날짜,백분율 매김
app.post("/self1Score", (req, res) => {
  var id = req.body.id;
  var score = req.body.score;
  var grade = req.body.grade;
  var date = req.body.date;
  var percentage = req.body.percentage;

  const sqlQuery =
    "UPDATE RESULT SET GRADE = ?, SCORE = ? WHERE ITEM=1 AND ID = ?;";
  db.query(sqlQuery, [grade, score, id]);
  const contentQuery =
    "UPDATE CONTENT SET GRADE =?,DATE=?,PERCENTAGE=? WHERE ITEM=1 AND ID = ?;";
  db.query(contentQuery, [grade, date, percentage, id]);
});

//ADHD 결과를 id에 따라 점수,등급,날짜,백분율 매김
app.post("/self2Score", (req, res) => {
  var id = req.body.id;
  var score = req.body.score;
  var grade = req.body.grade;
  var date = req.body.date;
  var percentage = req.body.percentage;

  const sqlQuery =
    "UPDATE RESULT SET GRADE = ?, SCORE = ? WHERE ITEM=2 AND ID = ?;";
  db.query(sqlQuery, [grade, score, id]);
  const contentQuery =
    "UPDATE CONTENT SET GRADE =?, DATE=?,PERCENTAGE=? WHERE ITEM=2 AND ID = ?;";
  db.query(contentQuery, [grade, date, percentage, id]);
});

//공황장애 결과를 id에 따라 점수,등급,날짜,백분율 매김
app.post("/self3Score", (req, res) => {
  var id = req.body.id;
  var score = req.body.score;
  var grade = req.body.grade;
  var date = req.body.date;
  var percentage = req.body.percentage;

  const sqlQuery =
    "UPDATE RESULT SET GRADE = ?, SCORE = ? WHERE ITEM=3 AND ID = ?;";
  db.query(sqlQuery, [grade, score, id]);
  const contentQuery =
    "UPDATE CONTENT SET GRADE =?,DATE=?,PERCENTAGE=? WHERE ITEM=3 AND ID = ?;";
  db.query(contentQuery, [grade, date, percentage, id]);
});

//우울증 모든회원 백분율 평균
app.post("/self1percentage", (req, res) => {
  const sqlQuery =
    "SELECT ROUND(AVG(PERCENTAGE)) AS SELF1 FROM CONTENT WHERE ITEM=1;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

//ADHD 모든회원 백분율 평균
app.post("/self2percentage", (req, res) => {
  const sqlQuery =
    "SELECT ROUND(AVG(PERCENTAGE)) AS SELF2 FROM CONTENT WHERE ITEM=2;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

//공황장애 모든회원 백분율 평균
app.post("/self3percentage", (req, res) => {
  const sqlQuery =
    "SELECT ROUND(AVG(PERCENTAGE)) AS SELF3 FROM CONTENT WHERE ITEM=3;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

//마이페이지 정보들 중 회원정보 가져옴
app.post("/mypage", (req, res) => {
  var id = req.body.id;
  const sqlQuery = "SELECT * FROM MEMBER WHERE ID=?";
  db.query(sqlQuery, [id], (err, result) => {
    res.send(result);
  });
});

//마이페이지 정보들 중 우울증 검사결과 가져옴
app.post("/mypage2", (req, res) => {
  var id = req.body.id;
  const sqlQuery2 = "SELECT * FROM CONTENT WHERE ID = ? AND ITEM=1";
  db.query(sqlQuery2, [id], (err, result) => {
    res.send(result);
  });
});

//마이페이지 정보들 중 ADHD 검사결과 가져옴
app.post("/mypage3", (req, res) => {
  var id = req.body.id;
  const sqlQuery2 = "SELECT * FROM CONTENT WHERE ID = ? AND ITEM=2";
  db.query(sqlQuery2, [id], (err, result) => {
    res.send(result);
  });
});

//마이페이지 정보들 중 공황장애 검사결과 가져옴
app.post("/mypage4", (req, res) => {
  var id = req.body.id;
  const sqlQuery2 = "SELECT * FROM CONTENT WHERE ID = ? AND ITEM=3";
  db.query(sqlQuery2, [id], (err, result) => {
    res.send(result);
  });
});

app.post("/delete_user", (req, res) => {
  var id = req.body.id;
  const sql1 = "DELETE FROM MEMBER WHERE ID = ?";
  const sql2 = "DELETE FROM RESULT WHERE ID = ?";
  const sql3 = "DELETE FROM CONTENT WHRER ID =?";
  db.query(sql1, [id], (err, result) => {
    console.log("member 제거완료");
  });
  db.query(sql2, [id], (err, result) => {
    console.log("result 제거완료");
  });
  db.query(sql3, [id], (err, result) => {
    console.log("content 제거완료");
  });
});
