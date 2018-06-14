
//게임시작을 누르면 버튼을 숨기고 타이머가 가도록 한다. 그리고 동시에 게임을 진행하고 클릭 횟수를 변수로 잡아준다.
//클릭 횟수에 대한 변수. 클릭하면 남은 갯수가 줄도록 하고 다른 이미지를 출력하도록 한다. 틀린갯수 다섯개를 초과하면 정답 출력 후 리셋한다.
var MAXTRY=5;				// 허용되는 실패 개수
var FINDINGSECONDS=20;		// 정답을 찾는데 허용된 시간(20초)
var THINKSECONDS=10;		// 기억하도록 허용된 시간(10초)
var restNum=8;              //병아리 마릿 수
var failNum=0;              // 틀린 횟수

var total = 24;//문제갯수
var a = 8;//정답갯수
var q = new Array();//정답 배열 생성
var tmp_a = 0;//정답 분류용
var tmp_i;//정답 분류용
var randomChords = "";
var length = 0;//
var count = 0;//클릭 횟수
var ExtraChance = 0;//남은 기회
var status=true;

function StartGame(){//게임시작 버튼 전체적인 흐름 제어
    alert("게임 시작!");//게임을 시작함을 알림
    disappear();//버튼을 사라지게 함
    Timer(10,20);//5초 기다려!(예시..)
    outputanswer();//병아리가 있는 곳을 보여줌
    CorrectAnswer();//답을 보여주는거야...
    Out_put_message(); // 메시지 출력
}

function appear(){
    document.getElementById("button").innerHTML="게임시작";//메세지박스 없애줌
}

function disappear(){
    document.getElementById("button").innerHTML=null;//메세지박스 없애줌
}

function Out_put_message(){ // 계란을 보라는 메시지를 출력해줄 것임
    document.getElementById("MessageBox").innerHTML="계란을 보세요";
}
//게임이 돌아가는 함수
    //배열변수 초기화
    for (var i = 0; i < total; i++) {   
        q[i] = 0;
        }
        //정답 생성
        while (tmp_a < a) { 
            tmp_i = Math.floor(Math.random() * total);//랜덤함수로 난수 발생
            if (q[tmp_i] == 0) {
                q[tmp_i] = 1;  
                tmp_a++;
            }
        }
    var str = "";//출력용
    //문제 그리기
    for (var i = 0; i < total; i++) {
        str = str + "<a href='javascript:check( " + i + " );'>" + i + "</a><br>";
        }
  console.log(q);
    
    function outputanswer(){//병아리 위치 미리 보여주기
        for(i=0; i<24; i++){
            if(q[i]==0){
                var image = document.getElementById(i);
                image.src = "boiled-egg.png"; // 계란후라이 보여줄 것
            }
            else{
                
                var image = document.getElementById(i);
                image.src = "chick.png";//병아리 출력
            }
        }
    }
    
    function check(no) {//답을 골랐을 경우 메세지를 출력함 q 는 정답을 담는 배열 변수임
        if (q[no] == 0) 
        {
            inCorrectAnswer(); // 틀린 횟 수 증가
            if(MAXTRY!=0){//남은 기회가 0이 아닐때는
            var image = document.getElementById(no);
            image.src = "boiled-egg.png"; // 계란후라이 보여줄 것
            MAXTRY--;//허용되는 실패 갯수 감소
            sound(no);// 오디오 넣고 나서 주석 풀어줘
            }
            else{ // 다 틀렸을경우
                status = false;
                //ClearInterval 이용해서 타이머를 정지시켜 준다.
                outputanswer();//정답화면 보여주기
                //게임종료 메세지 띄우기
                //게임 초기화
            }
        }
            //sound(no); 오디오 넣고 나서 주석 풀어줘
        else {
            CorrectAnswer();// 남은 수를 줄여줄 곳
            var image = document.getElementById(no);
            image.src = "chick.png"; // 병아리 보여줄 것
            restNum--;//남은 병아리 수를 감소시켜줌
            sound(no);// 오디오 넣고 나서 주석 풀어줘
        }
    }

    function see_egg(){
        for(i=0; i<24; i++){        
                var image = document.getElementById(i);
                image.src = "egg.png";
            
        }
    }

function Reset_variable(){//게임을 초기화할때 사용
    //<form><input type="button" value="페이지 새로 고침" onClick="history.go(0)"></form>
    total = 24;//문제갯수
    a = 8;//정답갯수
    q = new Array();//정답 배열 생성
    tmp_a = 0;//정답 분류용
    tmp_i;//정답 분류용
    randomChords = "";
    length = 0;//
    count = 0;
    ExtraChance = 0;
    //<form><input type="button" value="페이지 새로 고침" onClick="history.go(0)"></form>
}

function Timer(n, N){ // 타이머 n == 기억하는시간 N == 맞추는시간
    
    let stop = setInterval(Out_put_time, 1000); // 1초마다 실행 let은 var랑 비슷한데 더 변수에 가까움
    function Out_put_time(){ // 남은 시간 계속해서 출력
        n--;
        if(n <= 0 ){ // 남은시간 0초
           document.getElementById("ExtraTime").innerHTML="남은 시간 : 0";
            clearInterval(stop); // 반복문 종료
            Timer(N, null);//재귀함수
            see_egg();//계란을 다 뒤집음
        }
        else if(MAXTRY==0){
            document.getElementById("ExtraTime").innerHTML="남은 시간 : 0";//실패횟수가 0
            clearInterval(stop); // 반복문 종료
            outputanswer();
            Gameover();
        }
        else{ // 나머지는 1초마다 계속해서 함수 실행
            document.getElementById("ExtraTime").innerHTML="남은 시간 : " + n +" ";
        }
    }
}

function Gameover(){
    document.getElementById("GameOver").innerHTML="<h5>Game Over</h5>";
}

function sound(no){//소리 출력
    if(q[no]==0){ // 오답 클릭시
        var audio = new Audio('Metalgieosolrid_gyeonggoeum.mp3'); //오디오 재생 코드 + 사용법 : '' 안에 경로 및 파일 이름 설정해주면 됨.
        audio.play();
    }
    else{ // 정답 클릭시
        var audio = new Audio('박수소리_딩동댕효과음.mp3'); //오디오 재생 코드
        audio.play();
    }
}

function CorrectAnswer(){//정답을 맞췄을때
    --a; // 맞춰야하는 정답 개수를 줄임
    document.getElementById("ExtraAnswer").innerHTML="남은 수 : " + a +"";
}

function inCorrectAnswer(){//정답을 못맞췄을때(여섯번부터 답을 출력해줌)
    if(failNum>5){
     failNum == 5;//실패 횟수를 더 이상 증가시켜주지 않음
     document.getElementById("FailNumber").innerHTML="실패 수 : " + failNum +"";
    }
    else{
    ++failNum;
    document.getElementById("FailNumber").innerHTML="실패 수 : " + failNum +"";
}
}