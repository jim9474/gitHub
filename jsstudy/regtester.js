// 1. 입력한 문자열 받아오기


// 2. 입력한 패턴 받아오기

// 3. 체크한 플래그 받아오기

// 4. 버튼을 누르면 결과확인

$(function () {
    $("#pattern").on("keydown", function () {
        let flagStr = '';//g클릭,i클릭하면 그것들을 담기 위한 변수 ,// 플래그문자들을저장할 변수
        $("input.flag:checked").toArray().forEach(inEle => {//체크된 박스들을 배열로만들어서 하나씩 꺼내서(forEach) 플래그 문자열을 생성
            //input중에 체크된것들 /=> html element list로 나와서 배열로 바꿔야함
            //toArray로 앞에 체크된 애들을 배열로 바꾸고 forEach로 한개한개 input들이 들어옴
            //그래서 inEle에 담고 그것들의 속성값이 value를 담아버림
            //그리고 flagStr에다가 다 붙임 => g를체크하면 g / g,i를 체크하면 gi로 담김 +=
            const eleVal = $(inEle).attr('value');
            
            
            if (eleVal != 'test' && eleVal != 'match') {
                flagStr += $(inEle).attr('value');
            }
        });
        $("input.method:checked").toArray().forEach(inEle => {
            const eleVal = $(inEle).attr('value');
                if (eleVal == 'test') printTest(flagStr);
                if (eleVal =='match') printMatch(flagStr);
        });
    });
});

function printTest(flagStr) {
    $("#result").text(//결과를 출력, 정규표현식 객체를 생성해서 사용자가 텍스트에어리어에
        //입력한 문자열을 테스트
            new RegExp($("#pattern").val(), flagStr).test($("#str").val()));    // 패턴.test(문자열)
            //정규표현식을 만들어낸거 new ReExp(패턴문자열, 우리가만든 g나 i같은애들)
            //패턴문자열은 패턴 input저기에다가 우리가 적은값들을 말함
            //result에 담으면 true,false로 스팬에서 알려줌
}

function printMatch(flagStr) {
    $("#result2").text(//결과를 출력, 정규표현식 객체를 생성해서 사용자가 텍스트에어리어에
        //입력한 문자열을 테스트
        $("#str").val().match(
            new RegExp($("#pattern").val(), flagStr)    // 문자열.match(패턴)
        )
    );
            //정규표현식을 만들어낸거 new ReExp(패턴문자열, 우리가만든 g나 i같은애들)
            //패턴문자열은 패턴 input저기에다가 우리가 적은값들을 말함
            //result2에 담으면 값으로 스팬에서 알려줌
}