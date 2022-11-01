## 정신질환을 앓고있는 사람들을 위한 자가테스트 및 극복 방안 제공 사이트
**팀원**
<div><img src="https://img.shields.io/badge/김찬진-3A3A42?style=for-the-badge&logo=MySQL&logoColor=white">
프로젝트 총괄, 백엔드 및 웹 인터렉티브
</div>
<div><img src="https://img.shields.io/badge/양세영-03EF62?style=for-the-badge&logo=React&logoColor=white">
UI/UX총괄, 메인페이지
</div>
<div><img src="https://img.shields.io/badge/장민선-FF3621?style=for-the-badge&logo=React&logoColor=white">
공황장애 페이지
</div>
<div><img src="https://img.shields.io/badge/류도경-945DD6?style=for-the-badge&logo=React&logoColor=white">
ADHD페이지
</div>
<div><img src="https://img.shields.io/badge/이진주-3D03A7?style=for-the-badge&logo=MySQL&logoColor=white">
백엔드 보조 및 게시판
</div>
<p>프로젝트 제작 기간: 4주</p>

### 서비스 흐름도
![image](https://user-images.githubusercontent.com/89598307/199146113-0f5fd233-f098-4ec5-b72c-d23dcdcc2b46.png)

### 화면 설계도
![image](https://user-images.githubusercontent.com/89598307/199166454-dc582d29-203b-4e93-beee-9fe9c82eddc0.png)
* 사이트에 대한 기능이 슬라이드 형식으로 설명
* 슬라이드 하단에 퀵버튼 배치
* 각 정신질환 사진 클릭시 상세페이지로 이동

![image](https://user-images.githubusercontent.com/89598307/199166611-a90bfcdc-3e35-4285-8708-c49ac227dbfa.png)
* 아이디와 비밀번호 입력
* 로그인 성공시 메인페이지로 이동

![image](https://user-images.githubusercontent.com/89598307/199166660-b46df496-cd93-4a81-9183-bbe3a703b4d0.png)
* 아이디와 비밀번호, 이메일, 주소 입력
* 회원가입 성공시 메인페이지 이동
* 회원가입 성공시 데이터베이스에 정보 저장

![image](https://user-images.githubusercontent.com/89598307/199166748-0dd32c49-debb-4d08-8778-5757c72b023b.png)
* 마이페이지 접속시 ID,비밀번호,주소 확인 가능
* 자가진단 테스트 진행시 정신질환별 검사일시, 결과 및 다른회원과의 비교 가능
* 회원탈퇴시 데이터베이스에서 정보 삭제

![image](https://user-images.githubusercontent.com/89598307/199166839-504f3779-f5b7-4baa-a939-bc4ce1513742.png)
* 상세페이지 접속시 정신질환별 설명,원인,치료방안,셀프케어 및 자가테스트, 병원 위치 안내 등을 설명
* 자가테스트 시 검사일시,결과 및 다른회원과의 결과 비교 가능

![image](https://user-images.githubusercontent.com/89598307/199166939-80562852-9b5a-44a9-bd35-9ebd56b5509e.png)
* 정신질환 질문 리스트를 13개~20개 출력
* 각 버튼에 체크시 값을 데이터베이스에 저장
* 자가테스트 후 결과제출을 누를시 값에 따라 다른 모달창 출력
* 자가테스트 점수,등급,검사날짜,백분율을 데이터베이스에 저장

![image](https://user-images.githubusercontent.com/89598307/199167172-67a066c1-21bb-4c49-9830-191f3973a54a.png)
![image](https://user-images.githubusercontent.com/89598307/199167183-fd202eeb-84f9-4e03-ba75-5859208d0968.png)
![image](https://user-images.githubusercontent.com/89598307/199167189-c68956fb-f592-4f62-a000-6b7356952778.png)

* 데이터베이스에 저장된 값에 따라 각기 다른 모달창 출력
* 마지막엔 나와 다른회원과의 비교한 값을 차트로 표시
* 결과값에 따른 각기 다른 실천방안 출력
