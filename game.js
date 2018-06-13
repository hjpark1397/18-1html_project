
//게임시작을 누르면 버튼을 숨기고 타이머가 가도록 한다. 그리고 동시에 게임을 진행하고 클릭 횟수를 변수로 잡아준다.
//클릭 횟수에 대한 변수. 클릭하면 남은 갯수가 줄도록 하고 다른 이미지를 출력하도록 한다. 틀린갯수 다섯개를 초과하면 정답 출력 후 리셋한다.
var MAXTRY=5;				// 허용되는 실패 개수
var FINDINGSECONDS=20;		// 정답을 찾는데 허용된 시간(20초)
var THINKSECONDS=10;		// 기억하도록 허용된 시간(10초)
var restNum=8;              //병아리 마릿 수
var failNum=0;              // 틀린 횟수
//var watingSeconds; 			// 기억하도록 허용된 시간(10초)
//var timeObj=null;			// 시간을 출력하는 태그 영역
//var restObj=null;			// 남은 개수를 출력하는 태그 영역
//var failObj=null;			// 틀린 개수를 출력하는 태그 영역
//var resultObj=null;			// 게임 진행 상태를 보려주는 태그 영역
//var gameoverObj=null;	    // 게임 진행 상태를 보려주는 태그 영역

var total = 24;//문제갯수
var a = 8;//정답갯수
var q = new Array();//정답 배열 생성
var tmp_a = 0;//정답 분류용
var tmp_i;//정답 분류용
var randomChords = "";
var length = 0;//
var count = 0;//클릭 횟수
var ExtraChance = 0;//남은 기회

function StartGame(){//게임시작 버튼 전체적인 흐름 제어
    alert("게임스타트");
    Timer(5);//5초 기다려!(예시..)
    //게임이 작동하게 넣고싶음
    //타이머도 당연히 넣어야하고
    //게임 종료 후 메세지(게임오버거나 게임 다 깨거나)
    //게임 초기화
    alert("게임스타트 종료");
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
   // document.getElementById("All").innerHTML = str;//HTML에 집어넣는다.
    console.log(q);
    
    
    function check(no) {//답을 골랐을 경우 메세지를 출력함 // q 는 정답을 담는 배열 변수임
        if (q[no] == 0) 
        {
            alert("꽝");
            if(MAXTRY!=0){//남은 기회가 0이 아닐때는
            var image = document.getElementById(no);
            image.src = "boiled-egg.png"; // 계란후라이 보여줄 것
            failNum++;//실패 카운트를 증가시켜줌
            MAXTRY--;//허용되는 실패 갯수 감소
            }
            else{
                //정답 화면 보여주고
                //게임종료 메세지 띄우기
                //게임 초기화
            }
        }
            //sound(no); 오디오 넣고 나서 주석 풀어줘
        else {
            alert("GOOD!");//이 자리에 이미지를 띄워주고 싶음...
            var image = document.getElementById(no);
            image.src = "chick.png"; // 살아있는 병아리 보여줄 것
            restNum--;//남은 병아리 수를 감소시켜줌
            //sound(no); 오디오 넣고 나서 주석 풀어줘
        }
    }
function Reset_variable(){//게임을 초기화할때 사용
    total = 24;//문제갯수
    a = 8;//정답갯수
    q = new Array();//정답 배열 생성
    tmp_a = 0;//정답 분류용
    tmp_i;//정답 분류용
    randomChords = "";
    length = 0;//
    count = 0;
    ExtraChance = 0;
}

function Timer(n){ // 타이머 만들어야함
    let stop = setInterval(time, 1000); // 1초마다 실행
   // function Out_put_time(){ // 남은 시간 계속해서 출력
        time--;
        if(time <= 0){ // 남은시간 0초이면 동작
           // document.getElementById("Left_time_box").innerHTML="<h5>남은 시간 : 0 초 </h5>";
            clearInterval(stop); // 반복문 종료
        }
        else{ // 나머지는 1초마다 계속해서 함수 실행
            //document.getElementById("Left_time_box").innerHTML="<h5>남은 시간 : " + n+ " 초 </h5>";
        }
  //  }
}

function sound(no){//소리 출력
    if(q[no]==0){
        var audio = new Audio('audio/clearsound.mp3'); //오디오 재생 코드 + 사용법 : '' 안에 경로 및 파일 이름 설정해주면 됨.
        audio.play();
    }
    else{
        var audio = new Audio('audio/clearsound.mp3'); //오디오 재생 코드
        audio.play();
    }
}

function Message(){//메세지를 띄워줄 함수
//<form><input type="button" value="페이지 새로 고침" onClick="history.go(0)"></form>
}

function ShowAnswer(){//병아리를 보여주는 함수(처음 시작때, 정답을 다 못맞췄을때, 힌트 줄때)

}

function GameShow(){//게임을 함수로 빼고 싶음 해도해도 오류가 나서 일단 보류

}