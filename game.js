
//게임시작을 누르면 버튼을 숨기고 타이머가 가도록 한다. 그리고 동시에 게임을 진행하고 클릭 횟수를 변수로 잡아준다.
//클릭 횟수에 대한 변수. 클릭하면 남은 갯수가 줄도록 하고 다른 이미지를 출력하도록 한다. 틀린갯수 다섯개를 초과하면 정답 출력 후 리셋한다.
var total = 24;//문제갯수
var a = 8;//정답갯수
var q = new Array();//정답 배열 생성
var tmp_a = 0;//정답 분류용
var tmp_i;//정답 분류용
var randomChords = "";
var length = 0;//
var count = 0;
var ExtraChance = 0;

function StartGame(){//게임시작 버튼 전체적인 흐름 제어
    alert("게임스타트");
    
    Timer(5);//5초 기다려!

    alert("게임스타트 종료");
}

function Reset_variable(){
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

function Timer(n){ // 타이머
    let stop = setInterval(Out_put_time, 1000); // 1초마다 실행
    function Out_put_time(){ // 남은 시간 계속해서 출력
        time--;
        if(time <= 0){ // 남은시간 0초이면 동작
           // document.getElementById("Left_time_box").innerHTML="<h5>남은 시간 : 0 초 </h5>";
            clearInterval(stop); // 반복문 종료
        }
        else{ // 나머지는 1초마다 계속해서 함수 실행
            //document.getElementById("Left_time_box").innerHTML="<h5>남은 시간 : " + n+ " 초 </h5>";
        }
    }
}
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

var str = "asd";//출력용
//문제 그리기
for (var i = 0; i < total; i++) {
	str = str + "<a href='javascript:check( " + i + " );'>" + i + "</a><br>";
	}
document.getElementById("div_q").innerHTML = str;//HTML에 집어넣는다.
console.log(q);

function check(no) {//답을 골랐을 경우 메세지를 출력함
    if (q[no] == 0) {
        alert("꽝");
    }
    else {
        alert("GOOD!");//이 자리에 이미지를 띄워주고 싶음...
    }
}

function sound(no){//소리를 출력해줄 함수
    if(q[no]==0){
        
    }
    else{

    }

}