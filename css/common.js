/**
 * 입력값이 NULL인지 체크
 */
function isNull2(input) {
    if (input.value == null || input.value == "") {
        return true;
    }
    return false;
}
/**
 * 입력값에 스페이스 이외의 의미있는 값이 있는지 체크
 */
function isEmpty(input) {
    if (input.value == null || input.value.replace(/ /gi,"") == "") {
		input.focus();
        return true;
    }
    return false;
}
/**
 * 입력값에 특정 문자(chars)가 있는지 체크
 * 특정 문자를 허용하지 않으려 할 때 사용
 * ex) if (containsChars(form.name,"!,*&^%$#@~;")) {
 *         alert("이름 필드에는 특수 문자를 사용할 수 없습니다.");
 *     }
 */
function containsChars(input,chars) {
    for (var inx = 0; inx < input.value.length; inx++) {
       if (chars.indexOf(input.value.charAt(inx)) != -1)
           return true;
    }
    return false;
}
/**
 * 입력값이 특정 문자(chars)만으로 되어있는지 체크
 * 특정 문자만 허용하려 할 때 사용
 * ex) if (!containsCharsOnly(form.blood,"ABO")) {
 *         alert("혈액형 필드에는 A,B,O 문자만 사용할 수 있습니다.");
 *     }
 */

function containsCharsOnly(input,chars) {
    
	for (var inx = 0; inx < input.value.length; inx++) {
       if (chars.indexOf(input.value.charAt(inx)) == -1)
           return false;
    }
	
    return true;

}
/**
 * 입력값이 특정 문자(chars)만으로 되어있는지 체크("1111")
 * 로그인시 아이디, 비밀번호체크시 사용
 */

function OneCharsCheck(input) {
	var inputValue = input.value;
	var first = inputValue.substr(0,1);
	var chk = 0;
	for(i=0; i<inputValue.length; i++){
		if (inputValue.charAt(i) == first){
			chk++;
		}
	}	
	if(chk == inputValue.length)
	{
		return false;	
	}
	
	return true;
}

/**
 * 입력값의 첫번째 문자가 특정문자(chars)로 입력되었는지 체크("1111")
 * 로그인시 아이디, 비밀번호체크시 사용
 */

function FirstCharsCheck(input, chars) {
	var first = input.value.charAt(0);
	var chk = 0;
	for(i=0; i<chars.length; i++){
		if (chars.charAt(i) == first){
			chk++;
		}
	}	
	if(chk > 0)
	{
		return true;	
	}
	
	return false;
}
/**
 * 입력값이 알파벳인지 체크
 * 아래 isAlphabet() 부터 isNumComma()까지의 메소드가
 * 자주 쓰이는 경우에는 var chars 변수를 
 * global 변수로 선언하고 사용하도록 한다.
 * ex) var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 *     var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
 *     var number    = "0123456789";
 *     function isAlphaNum(input) {
 *         var chars = uppercase + lowercase + number;
 *         return containsCharsOnly(input,chars);
 *     }
 */
function isAlphabet(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(input,chars);
}
function isFirstAlphabet(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return FirstCharsCheck(input,chars);
}
function isAlphabetSpace(input) {
    var chars = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(input,chars);
}
/**
 * 입력값이 알파벳 대문자인지 체크
 */
function isUpperCase(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳 소문자인지 체크
 */
function isLowerCase(input) {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값에 숫자만 있는지 체크
 */
function isNumber(input) {
    var chars = "0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳,숫자로 되어있는지 체크
 */
function isAlphaNum(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 숫자,대시(-)로 되어있는지 체크
 */
function isNumDash(input) {
    var chars = "-0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 숫자,콤마(,)로 되어있는지 체크
 */
function isNumComma(input) {
    var chars = ",0123456789";
    return containsCharsOnly(input,chars);
}
/**
 * 입력값이 숫자,콤마(,),대시(-)로 되어있는지 체크
 */
function isNumCommaDash(input) {
    var chars = "-,0123456789";
    return containsCharsOnly(input,chars);
}
/**
 * 입력값이 숫자,콤마(,),대시(-),도트(.)로 되어있는지 체크
 */
function isNumCommaDashDot(input) {
    var chars = "-,.0123456789";
    return containsCharsOnly(input,chars);
}
/**
 * 입력값이 사용자가 정의한 포맷 형식인지 체크
 * 자세한 format 형식은 자바스크립트의 'regular expression'을 참조
 */
function isValidFormat(input,format) {
    if (input.search(format) != -1) {
        return true; //올바른 포맷 형식
    }
    return false;
}

/**
 * 입력값이 이메일 형식인지 체크
 */
function isValidEmail(input) {
//    var format = /^(\S+)@(\S+)\.([A-Za-z]+)$/;
    var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
    return isValidFormat(input,format);
}

// 이메일 형식 체크......
function checkEmailAddress(field) 
{
   var goodEmail = field.match(/\b(^(\S+@).+((\.com)|(\.net)|(\.pe.kr)|(\.re.kr)|(\.co.kr)|(\.org)|(\..{2,2}))$)\b/gi);

   if (goodEmail){ // 도메인 추가시는 (\.도메인)만 추가하시면 됩니다. ^^ (↑)
      return true
   } else {
      return false
   }
}

/**
 * 입력값이 전화번호 형식(숫자-숫자-숫자)인지 체크
 */
function isValidPhone(input) {
    var format = /^(\d+)-(\d+)-(\d+)$/;
    return isValidFormat(input,format);
}
/**
 * 선택된 라디오버튼이 있는지 체크
 */
function hasCheckedRadio(input) {
    if (input.length > 1) {
        for (var inx = 0; inx < input.length; inx++) {
            if (input[inx].checked) return true;
        }
    } else {
        if (input.checked) return true;
    }
    return false;
}

/**
 * 선택된 체크박스가 있는지 체크
 */
function hasCheckedBox(input) {
    return hasCheckedRadio(input);
}

/**
 * 입력값의 바이트 길이를 리턴
 * Author : Wonyoung Lee
 */
function getByteLength(input) {
    var byteLength = 0;
    for (var inx = 0; inx < input.value.length; inx++) {
        var oneChar = escape(input.value.charAt(inx));
        if ( oneChar.length == 1 ) {
            byteLength ++;
        } else if (oneChar.indexOf("%u") != -1) {
            byteLength += 2;
        } else if (oneChar.indexOf("%") != -1) {
            byteLength += oneChar.length/3;
        }
    }
    return byteLength;
}
//== $1 =======================================================================================================
// 기   능 : 전달받은 mode 값과 action값 지정해 주고 form을 submit()한다.
// 사용 예 : send("deleteMulti", "IGEDAA4E.jsp") # 작성자 : 이재훈 T.011-9972-5423
//-------------------------------------------------------------------------------------------------------------
function send(mode, action, form, target ){
	var flag = false;
	if(isNullValue(form)) {
		form = document.form1;
	}
	form.mode.value = mode;
	if(isNullValue(target)) {
		form.target = "_self";
	} else {
		form.target = target;
	}
	if(mode == 'insert'){
		flag = confirm('등록하시겠습니까?');	
	}else if(mode == 'update'){
		flag = confirm('수정하시겠습니까?');	
	}else if(mode == 'delete'){
		flag = confirm('삭제하시겠습니까?');		
	}else if( mode == 'search' || mode == 'deleteM'){
		flag = true;
	}
	if( flag == true ){
		form.action = action;
		form.submit();
	}
}	

function deleteMulti(Obj,action,form){
	var i,cnt, tot = 0;
	
	if(typeof(Obj) == "undefined") return;
	cnt = (typeof(Obj[0]) != "object") ? 1 : Obj.length;

	if(isNullValue(form)) {
		form = document.form1;
	}
	
	form.mode.value = "deleteM";
	
	for(i=0 ; i<cnt ; i++){
			if(cnt > 1){
				if(Obj[i].checked) tot++;
			}
			else{
				if(Obj.checked) tot++;
			}
		}  
	if(tot > 0){
			if(confirm('선택된 ' + tot + '개의 목록을 삭제하시겠습니까?')){
				form.action = action;
				form.submit();
			}
	}
	else
			alert('삭제할 목록을 선택해주세요!!');

}

function send2(mode, action, target, form){
	if(isNullValue(form)) {
		form = document.form1;
	}
	form.mode.value = mode;
	if(isNullValue(target)) {
		form.target = "_self";
	} else {
		form.target = target;
	}
	form.action = action;
	form.submit();
}	
//== $2 =======================================================================================================
// 기   능 : 목록 화면에서 체크박스를 다중 선택하여 삭제할 때 선택여부를 점검하고, 선택되지 않은 key의 값은 "" 처리한다.
// 
//
//-------------------------------------------------------------------------------------------------------------
function deleteM(inputElement1, inputElement2, inputElement3, action, form){
    if(isNullValue(form)) {
		form = document.form1;
	}
    // 체크박스가 하나 이상 선택되어 있는지를 알아본다.
    for(i=0, j=0; i<form.elements.length; i++){
   		var e1 = form.elements[i];
   		if(e1.name == "chkOne" && e1.checked == true) {
   		     j++; break;
   		}
   	}
   	// 하나도 선택되어 있지 않다면 선택 메세지를 보여준다.
   	if (j == 0) {
   	   alert("삭제할 자료를 선택하십시오!!");
   	   return;

   	// 하나이상 선택되어 있다면 선택되어 있지 않은 Key Element의 값을 ""로 처리한다.
   	} else if (j > 0){
   	    ans = confirm("삭제하시겠습니까?");
   	    if (ans == false) return;
        for(i=0; i<form.chkOne.length; i++){
       		if(form.chkOne[i].checked == false) {
				if(inputElement1 != null && inputElement1 != ""){
				inputElement1[i].value = ""; //화면마다 dependant한 Key Element값1.
				}
				if(inputElement2 != null && inputElement2 != ""){
					inputElement2[i].value = ""; //화면마다 dependant한 Key Element값2.
				}
				if(inputElement3 != null && inputElement3 != ""){
					inputElement3[i].value = ""; //화면마다 dependant한 Key Element값3.
				}
			}
		}
		send2("deleteM", action);
    }
}


function deleteM2(input, action, form){
    if(isNullValue(form)) {
		form = document.form1;
	}
    // 체크박스가 하나 이상 선택되어 있는지를 알아본다.
    for(i=0, j=0; i<form.elements.length; i++){
   		var e1 = form.elements[i];
   		if(e1.name == "chkOne" && e1.checked == true) {
   		     j++; break;
   		}
   	}
   	// 하나도 선택되어 있지 않다면 선택 메세지를 보여준다.
   	if (j == 0) {
   	   alert("삭제할 자료를 선택하십시오!!");
   	   return;

   	// 하나이상 선택되어 있다면 선택되어 있지 않은 Key Element의 값을 ""로 처리한다.
   	} else if (j > 0){
   	    ans = confirm(j+"개의 자료를 삭제하시겠습니까?");
   	    if (ans == false) return;
        
		send("deleteM", action , form);
    }
}
//== $3 =======================================================================================================
// 기   능 : 목록 화면에서 체크박스 전체를 선택할 수 있고 toggle이 가능하다.
// 사용 예 : toggleCheck();    
//-------------------------------------------------------------------------------------------------------------
/*
function toggleCheck(form){
	if(isNullValue(form)) {
		form = document.form;
	}
	for(i=0; i<form.elements.length; i++){
		var e = form.elements[i];

		if(e.name == "chkAll" && e.checked == false) {
			for(j=0; j<form.elements.length; j++){
				var e1 = form.elements[j];
				if(e1.name == "chkOne" && e1.disabled == false) {
					e1.checked = false;
				}
			}
		} else if(e.name == "chkAll" && e.checked == true) {
			for(j=0; j<form.elements.length; j++){
				var e1 = form.elements[j];
				if(e1.name == "chkOne" && e1.disabled == false) {
					e1.checked = true;
				}
			}
		}
	}
}
*/
function toggleCheck(form){
	if(isNullValue(form)) {
		form = document.form;
	}

	if(form.chkAll.checked==true) {
		//전체선택
		for(i=0; i<form.elements.length; i++){
			var e = form.elements[i];
			var objectType = e.type;

			if(objectType=='checkbox') {	
				e.checked=true;

			}
		}

	}else{
		//전체선택 해제

		for(i=0; i<form.elements.length; i++){
			var e = form.elements[i];
			var objectType = e.type;
			if(objectType=='checkbox') {	
				e.checked=false;

			}
		}

	}

}


//== $4 =======================================================================================================
// 기   능 : null 체크
// 사용 예 : isNull(Element이름, "명칭")
//-------------------------------------------------------------------------------------------------------------
function isNull(inputElement, title){
	if (((inputElement.value == null)||(inputElement.value.length == 0)) && (inputElement.type != "hidden")){
		if(!isNullValue(title)){
			alert("\"" + title + "\" 에 값을 입력하여 주십시요!")		
		} else {
			alert("값을 입력하여 주십시요!");
		}
		inputElement.focus();
		return true;
	}else{
		return false;
	}
}

/*function isNull(inputElement, title){
	if ((inputElement.value == null)||(inputElement.value.length == 0)){
		if(!isNullValue(title)){
			alert("\"" + title + "\"  을(를) 입력하여 주십시요!")
			inputElement.focus();
			return true;		
		} else {
			return true;
		}
	}else{
		return false;
	}
}*/

//== $4-1 =======================================================================================================
// 기   능 : null 체크
// 사용 예 : isNullValue(inputValue)
//-------------------------------------------------------------------------------------------------------------
function isNullValue(inputValue){
	
	if (inputValue == null || inputValue.length == 0 || inputValue == ""){
		return true;
	}else{
		return false;
	}
}

//== $5 =======================================================================================================
// 기   능 : ComboBox의 null 체크
// 사용 예 : isNullCombo(Combo Element이름)
//-------------------------------------------------------------------------------------------------------------

function isNullCombo(inputElement, title){
	if((inputElement.options[inputElement.selectedIndex].value == "")||(inputElement.options[inputElement.selectedIndex].value.length == 0)){
		if(!isNullValue(title)){
			alert("\"" + title + "\" 의 값을 선택하여 주십시요!");
		} else {
			alert("값을 선택하여 주십시요!");
		}
			inputElement.focus();
			return true;
	}else{
		return false;
	}
}


//** $8 *******************************************************************************************************
// 기   능 : 지정한 Text Element의 Value에서 ',' '/'와 같은 지정된 Mark를 찾아서 삭제하고,
//           그 삭제된 값을 return 한다.
// 사용 예 : removeMark(form1.purchaseAmount, ',')
//-------------------------------------------------------------------------------------------------------------
function removeMark(inputElement, mark){
	var returnValue = "";
	var inputValue = inputElement.value;
	for(i=0; i<inputValue.length; i++){
		if (inputValue.substr(i,1) != mark){
			returnValue += inputValue.substr(i,1);
		}
	}	
	return returnValue;
}

//** $8-1 *******************************************************************************************************
// 기   능 : 지정한 Value에서 ',' '/'와 같은 지정된 Mark를 찾아서 삭제하고,
//           그 삭제된 값을 return 한다.
// 사용 예 : removeMarkValue('9,876', ',');
//-------------------------------------------------------------------------------------------------------------
function removeMarkValue(inputValue, mark){
	var returnValue = "";
	for(i=0; i<inputValue.length; i++){
		if (inputValue.substr(i,1) != mark){
			returnValue += inputValue.substr(i,1);
		}
	}	
	return returnValue;
}
//== $8-2 ======================================================================================================
// 기   능 : 지정한 Text Element의 Value에서 ',' '/'와 같은 지정된 Mark를 찾아서 삭제해준다.
// 사용 예 : deleteMark(form1.purchaseAmount, ',')
//-------------------------------------------------------------------------------------------------------------
function deleteMark(inputElement, mark) {
	var inputValueWithoutMark = "";
	var inputValue = inputElement.value;
	for(i=0; i<inputValue.length; i++){
		if (inputValue.substr(i,1) != mark ){
			inputValueWithoutMark += inputValue.substr(i,1);
		}
	}
	inputElement.value = inputValueWithoutMark;
}
//== $15 ======================================================================================================
// 기   능 : 정해진 길이와 일치하는지 자리수 확인하기
// 사용 예 : if( isFixedLength(document.form1.bizNo) ) send('insert', 'IGEDAA_end.jsp'); 
//-------------------------------------------------------------------------------------------------------------
function isFixedLength(inputElement, fixedLength, title) {
	imputValue = inputElement.value;
	if(imputValue.length != fixedLength){
			if(isNullValue(title)){
				alert("입력 값 : \"" + imputValue + "\"  <- \"" + fixedLength + "\"자리 길이로 입력하십시요.");
				inputElement.focus();
				return false;
			}else{
				alert("\"" + title + "\" 입력 값 : \"" + imputValue + "\"  <- \"" + fixedLength + "\"자리 길이로 입력하십시요.");
				inputElement.focus();
				return false;
			}
	}
	return true;
}

//== $17 ======================================================================================================
// 기   능 : PopUp 창 생성하기
// 사용 예 : <a href="javascript: openWindow('../../com/SearchAccntUnitCode.jsp?codeId=accntCode&nameId=accntName' , '회계단위코드', '', '');">
//-------------------------------------------------------------------------------------------------------------
function openWindow(url, name, inputWidth, inputHeight, scrollbarsYN) {
	var defaultWidth = 550; 
	var defaultHeight = 450;
	var fixedWidth = 0;
	var fixedHeight = 0;
	if(isNullValue(scrollbarsYN)) {
		scrollbarsYN = "no";
	} else {
		scrollbarsYN = "yes";
	}
	
	if(inputWidth == null || inputWidth == "") {
		fixedWidth = defaultWidth;
	} else {
		fixedWidth = inputWidth;
	}
	if(inputHeight == null || inputHeight == "") {
		fixedHeight = defaultHeight;
	} else {
		fixedHeight = inputHeight;
	}
	x = (screen.width/2)-(fixedWidth/2);
	y = (screen.height/2)-(fixedHeight/2);
	popUpWin = window.open(url , name , "width=" + fixedWidth + ", height=" + fixedHeight + ", left=" + x + ", top=" + y + "toolbar=0, location=no, directories=no, status=0, menubar=0, scrollbars=" + scrollbarsYN + ", resizable=yes, copyhistory=no");
	
}
//== $20 ======================================================================================================
// 기   능 : 매개변수로 전달된 Element 의 value를 ""로 만들어 준다.(Code popUp 창 구현시 사용)
// 사용 예 : <input type="text" name="iAccntCode" id="accntCodeId" value="" 
//			onChange="javascript: toVacant(form1.bizCode[<%= i%>]); toVacant(form1.bizName[<%= i%>]); toVacant(form1.bdgtCtrler[<%= i%>]);">
//-------------------------------------------------------------------------------------------------------------
function toVacant(inputElement) {    
	inputElement.value = "";	
}

//== $20-1 ======================================================================================================
// 기   능 : 매개변수로 전달된 id 값에 해당하는 Element 의 value를 ""로 만들어 준다.(Code popUp 창 구현시 사용)
// 사용 예 : <input type="text" name="iAccntCode" id="accntCodeId" value="" onChange="javascript: toEmpty('accntNameId');">
//          <input type="text" name="iAccntName" id="accntNameId" value="" onChange="javascript: toEmpty('accntCodeId');">
//-------------------------------------------------------------------------------------------------------------
function toEmptyId(id, form) {    
	if(isNullValue(form)) {
		form = document.form1;
	}
	for(i=0; i<form.elements.length; i++){
		var e = form.elements[i];
		if(e.id == id) e.value = "";			
	}
}

//== $20-2 ======================================================================================================
// 기   능 : 매개변수로 전달된 name 값에 해당하는 Element 의 value를 ""로 만들어 준다.(Code popUp 창 구현시 사용)
// 사용 예 : <input type="text" name="iAccntCode"  value="" onChange="javascript: toEmpty('accntName');">
//          <input type="text" name="iAccntName"  value="" onChange="javascript: toEmpty('accntCode');">
//-------------------------------------------------------------------------------------------------------------
function toEmpty(name, form) {    
	if(isNullValue(form)) {
		form = document.form1;
	}
	for(i=0; i<form.elements.length; i++){
		var e = form.elements[i];
		if(e.name == name) e.value = "";			
	}
/*	for(i=0; i<document.all.length; i++){
		if(document.all[i].name == name) document.all[i].value = "";			
	} */	
}

//== $21 ======================================================================================================
// 기   능 : 입력받은 값에서 양쪽 공백 지워주기
// 사용 예 : <input type="text" name="test" onClick="javascript: alert(trim(this.value));">
//-------------------------------------------------------------------------------------------------------------
function trim(inputValue){
	var sLeftTrimed = inputValue.replace(/^\s+/,"");
	var sBothTrimed = sLeftTrimed.replace(/\s+$/,"");
	return(sBothTrimed);
}
//== $22 ======================================================================================================
// 기   능 : value의 정해진 총길이 만큼 숫자 앞에 "0"을 채워준다. ex.) 입력값이 "1"인 경우 총길이 "cnt"가 3 이면 "001"
// 사용 예 : <input type="text" name="test" onChange="javascript: addZero(this, 3);">
// 작 성 일: 2001.06.19
//-------------------------------------------------------------------------------------------------------------
function addZero(inputElement, cnt) {
	inputElement.value = trim(inputElement.value);
	for(i=0; i<cnt; i++){
		if (inputElement.value.length < cnt) {
			inputElement.value = "0" + inputElement.value;
		}
	}
}	
//== $24 ======================================================================================================
// 기   능 : 특정 콤보의 해당 값이 선택되도록 하기.
// 사용 예 : <input type="text" name="test" onChange="javascript: setComboSelected(document.form1.accntUnitCodeCombo, this.value);">
//-------------------------------------------------------------------------------------------------------------
function setComboSelected(combo, value){     
	for(i=0; i<combo.length; i++){
		if(combo.options[i].value == value){
			combo.options[i].selected = true;
		}
	}
}

//== $25 ======================================================================================================
// 기   능 : 전달되는 값에 한글이 포함되어 있는지를 검사하여 있으면 true, 없으면 false를 return하기.
// 사용 예 : if( isKorCharValue(document.form1.startDate.value) ) {  } 
//-------------------------------------------------------------------------------------------------------------
function isKorCharValue(inputValue){
	var ch;
	for(var i=0; i<inputValue.length; i++){
		ch = inputValue.charAt(i);
		if (escape(ch).length > 4){ // 한글이면
			return true;
		}else {	
			return false;
		}
	}
}

//== $25-1 ======================================================================================================
// 기   능 : 전달되는 Element에 한글이 포함되어 있는지를 검사하여 없는 경우에는 계속 진행, 
//			 있는 경우에는 메세지 보여주고, 해당 Element에 focus 주기.			 
// 사용 예 : if( isKorChar(form1.startDate, title) ) {  } 
//-------------------------------------------------------------------------------------------------------------
function isKorChar(inputElement, title){
	var inputValue = inputElement.value;
	if(isKorCharValue(inputValue)) {
		if(isNullValue(title)){		
			alert("입력 값 : \"" + inputValue + "\"   <- 금액 입력에는 문자를 사용하실 수 없습니다.");
		} else {
			alert("\"" + title + "\" 입력 값 : \"" + inputValue + "\"   <- 금액 입력에는 문자를 사용하실 수 없습니다.");
		}
		inputElement.focus();
		return;
	}
}


/*
function checkCalendarFromTo(date1, date2, fieldName1, fieldName2)
- 기간을 체크
date1 :  첫번째 일자값
date2 :  두번째 일자값
fieldName1 : 첫번째 일자값의 이름
fieldName2 : 두번째 일자값의 이름
*/
function checkCalendarFromTo(date1, date2, fieldName1, fieldName2)
{
   if(date1== false || date2 == false )
   {
      return false;
   }

   var gap = eval(date2) - eval(date1);  // 받아온 날짜값을 숫자로 바꾼후 계산한다

   // 종료일자에서 시작일자를 뺀값이 0보다 적다면(시작일자가 크다면)
   if(gap < 0 )
   {
      alert(fieldName1+"의 날짜는 " +fieldName2 + "의 날짜보다 이전이거나 동일하여야 합니다");
      return false;
   }

   return true;
}

/* 년월일을 합해주는 함수
월,일이 두자리가 아닐경우 0을붙혀 두자리로 만듬
*/
function sumCalendar(year, month, day)
{
   //월이 두자리가 아닐경우 앞에 "0"을 붙여서 두자리로  만듬"
   if(month.length != 0 &&  month < 10 && month.indexOf(0) == -1 )
   {
      month = "0" + month;
   }

   //일이 두자리가 아닐경우 앞에 "0"을 붙여서 두자리로 만듬"
   if(day.length != 0 &&  day < 10 && day.indexOf(0) == -1 )
   {
      day = "0" + day;
   }

   return year+month+day;
}

/*//////////////////////////////////////////////////////
------------          form.js           ---------------
//////////////////////////////////////////////////////*/

//== $13 ======================================================================================================
// 기   능 : 주민등록번호 맞는지 확인하기
// 사용 예 : if( checkResidentNo(document.form1.residentNo1, document.form1.residentNo2) == true ) send('insert', 'IGEDAA_end.jsp'); 
//-------------------------------------------------------------------------------------------------------------
function checkResidentNo (inputElement1, inputElement2) {
// 주민등록번호를 입력하였는지  체크 
	if(inputElement1.value.length == 0 || form. joo1.value.length != 6) {
        alert("주민등록번호 앞자리에 6자리 숫자를 입력하여 주십시요 ");
        inputElement1.focus();
        return false;
	}

	// 주민등록번호 앞  부분에서 생년월일을 알아냄 
	var year = inputElement1.value.substring(0,2);
	var month = inputElement1.value.substring(2,4); 
	var day = inputElement1.value.substring(4,6);
	// 주민등록번호 뒷  부분에서 남녀 성별  정보 찾아냄 
	var sex = inputElement2.value.substring(0,1);

	// 주민등록번호 앞  부분 체크하기 
	if ((year <25 || month<1 || month>12 ||day<1) ) {
	  	    alert ("잘못된 주민등록번호 입니다.") 
	  	    inputElement1.focus() 
	  	    return false 
	}
	
	// 주빈등록번호 뒷  부분 체크하기 
	if ( (sex != 1 && sex != 2 ) || (inputElement2.value.length != 7 ) ) {
	 	    alert("주민등록번호 뒷자리 숫자가 정확한지 확인하여 주십시요 ");
	 	    inputElement2.focus() 
	 	    return false 
	}
	
	// 주민등록번호 알고리즘  체크 
	var val = 0 
	for (var i = 0; i <=5;  i++) {
	  	    val = val + ((i%8+2) * parseInt(inputElement1.value.substring(i,i+1))) 
	}
	
	for (var i = 6; i <=11;  i++) {
	   	  val = val + ((i%8+2) * parseInt(inputElement2.value.substring(i-6,i-5))) 
	}
	
	val = 11 - (val %11) 
	val = val % 10 
	
	if (val != inputElement2.value.substring(6,7)) {
	   	    alert ("잘못된 주민등록번호 입니다.") 
	   	    inputElement2.focus() 
	   	    return false; 
	}
	return true 
}

//== $14 ======================================================================================================
// 기   능 : 신용카드번호 맞는지 확인하기
// 사용 예 : if( checkCreditNo(document.form1.checkCreditNo) == true ) send('insert', 'IGEDAA_end.jsp'); 
//-------------------------------------------------------------------------------------------------------------
function checkCreditNo(inputElement) {
	creditNo = inputElement.value;	
	if (creditNo.length > 19)	// Encoding only works on cards with less than 19 digits
	   alert("신용카드 숫자는 19자리 이내로 입력하여 주십시요!");
	   return false;
	
	sum = 0; mul = 1; l = creditNo.length;
	for (i = 0; i < l; i++) {
	   digit = creditNo.substring(l-i-1,l-i);
	   tproduct = parseInt(digit ,10)*mul;
	   if (tproduct >= 10)
	      sum += (tproduct % 10) + 1;
	   else
	      sum += tproduct;
	   if (mul == 1)
	      mul++;
	   else
	      mul--;
	}
						  		// Uncomment the following line to help create credit card numbers
	if ((sum % 10) == 0){	  	// 1. Create a dummy number with a 0 as the last digit                                                                                      
	   return true;		  		// 2. Examine the sum written out
	} else {					  	// 3. Replace the last digit with the difference between the sum and
	   alert("입력하신 \"" + creditNo + "\" 는 잘못된 신용카드번호 입니다.");
	   inputElement.focus();	   
	   return false;	  		//    the next multiple of 10.
	}
} 
//사업자 등록번호 체크
function        chkWorkNumb(strNumb) 
{ 

        strNumb        =        removeMarkValue(strNumb,"-"); 
        if        (strNumb.length        !=        10) 
        { 
                alert("사업자등록번호가 잘못되었습니다."); 
                return false; 
        } 
         
        sumMod        =        0; 
        sumMod        +=        parseInt(strNumb.substring(0,1)); 
        sumMod        +=        parseInt(strNumb.substring(1,2)) * 3 % 10; 
        sumMod        +=        parseInt(strNumb.substring(2,3)) * 7 % 10; 
        sumMod        +=        parseInt(strNumb.substring(3,4)) * 1 % 10; 
        sumMod        +=        parseInt(strNumb.substring(4,5)) * 3 % 10; 
        sumMod        +=        parseInt(strNumb.substring(5,6)) * 7 % 10; 
        sumMod        +=        parseInt(strNumb.substring(6,7)) * 1 % 10; 
        sumMod        +=        parseInt(strNumb.substring(7,8)) * 3 % 10; 
        sumMod        +=        Math.floor(parseInt(strNumb.substring(8,9)) * 5 / 10); 
        sumMod        +=        parseInt(strNumb.substring(8,9)) * 5 % 10; 
        sumMod        +=        parseInt(strNumb.substring(9,10)); 
         
        if        (sumMod % 10        !=        0) 
        { 
                alert("사업자등록번호가 잘못되었습니다."); 
                return false; 
        } 
        return        true; 
} 
// 외국인 주민번호 체크

function fgn_no_chksum(reg_no) {

    var sum = 0;
    var odd = 0;

    buf = new Array(13);
    for (i = 0; i < 13; i++) buf[i] = parseInt(reg_no.charAt(i));

    odd = buf[7]*10 + buf[8];

    if (odd%2 != 0) {
      return false;
    }

    if ((buf[11] != 6)&&(buf[11] != 7)&&(buf[11] != 8)&&(buf[11] != 9)) {
      return false;
    }

    multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
    for (i = 0, sum = 0; i < 12; i++) sum += (buf[i] *= multipliers[i]);


    sum=11-(sum%11);

    if (sum>=10) sum-=10;

    sum += 2;

    if (sum>=10) sum-=10;

    if ( sum != buf[12]) {
        return false;
    }
    else {
        return true;
    }
}

//법인등록번호 체크 
	function vndr_reg_no_chk(vndr_reg_no1,vndr_reg_no2,vndr_reg_no3){ 
		var  v_vndr_reg_no1 = 0; 
		var  v_vndr_reg_no2 = 0; 
		var  v_vndr_reg_no3 = 0; 
		var  v_vndr_reg_no4; 
		var  vndr_reg_chk; 
	 	var str= vndr_reg_no1 + vndr_reg_no2 + vndr_reg_no3; 
		var j = 0; 
		object =  new Array(13) 
		for(var i=0;i < 12;i++) { 
			++j; 
       		object[i] = str.substring(i,i+1) 
       		if ( j % 2 == 0 ) 
   				v_vndr_reg_no1 = v_vndr_reg_no1 + parseInt(object[i]) * 2; 
   			else 
   				v_vndr_reg_no1 = v_vndr_reg_no1 + parseInt(object[i]) * 1; 
	    } 
		v_vndr_reg_no2 = Math.floor(v_vndr_reg_no1 / 10);	//몫 
   		v_vndr_reg_no3 = parseInt(v_vndr_reg_no1 % 10);		//나머지 
		var chkdigit = str.substring(12, 13);	//오류검색번호     
	   	vndr_reg_chk = 10 - v_vndr_reg_no3; 
	   	if ( vndr_reg_chk == 10 )	vndr_reg_chk = 0; 
	    if ( chkdigit == vndr_reg_chk ) { 
	    	return 'Y'; 
   		} 
   		else { 
   			return 'N'; 
   		} 
   	} 

// 주민(J), 법인(L), 사업자등록번호(B) 체크......
function checktotal(str,gubun){

if ( gubun == null )
{	
	gubun = '';
}

len = str.length; 
if( len != 12 && len !=14 ){
	return false;
}
no_ck = 0;

no_1 = str.substr(0,1); 
no_2 = str.substr(1,1); 
no_3 = str.substr(2,1); 
no_4 = str.substr(3,1); 
no_5 = str.substr(4,1); 
no_6 = str.substr(5,1); 
no_7 = str.substr(6,1); 
no_8 = str.substr(7,1); 
no_9 = str.substr(8,1); 
no_10 = str.substr(9,1); 
no_11 = str.substr(10,1); 
no_12 = str.substr(11,1); 


if(len == 14) // 주민, 법인 등록번호 
{ 

no_13 = str.substr(12,1);
no_14 = str.substr(13,1); 
//no_13 = substr(str, 12,1); 
//no_14 = substr(str, 13,1); 

if(no_7 != "-") 
{ return 0; } 
if((no_8 > 0) && (no_8 < 5) && (gubun=="J") ) //주민등록번호(2000년 이후 출생자는 
{ 
no_ck += no_1 * 2; //뒷자리 첫번째 숫자자 남성의 경우 3, 
no_ck += no_2 * 3; // 여성의 경우 4로 부여된다.) 
no_ck += no_3 * 4; 

no_ck += no_4 * 5; 
no_ck += no_5 * 6; 
no_ck += no_6 * 7; 
no_ck += no_8 * 8; 
no_ck += no_9 * 9; 
no_ck += no_10 * 2; 
no_ck += no_11 * 3; 
no_ck += no_12 * 4; 
no_ck += no_13 * 5; 
no_ck = no_ck % 11; 
no_ck = 11 - no_ck; 

if(no_ck > 9) {no_ck = no_ck - 10 ;} 

//no_ck = abs(no_ck); 
if(no_ck == no_14){ return 1; } 
else { return 0; } 

} else if( (no_8 > 4) && (no_8 < 7) && (gubun=="J") ) //  외국인 법인등록번호
{
	if (fgn_no_chksum( removeMarkValue(str,"-") ) == true){
      return 1;
    } else {
      return 0;
  	}
} else if( no_8 >= 0 && (gubun=="L") ) // 법인등록번호 
{ 
no_ck += no_1 * 1; 
no_ck += no_2 * 2; 
no_ck += no_3 * 1; 
no_ck += no_4 * 2; 
no_ck += no_5 * 1; 
no_ck += no_6 * 2; 
no_ck += no_8 * 1; 
no_ck += no_9 * 2; 
no_ck += no_10 * 1; 
no_ck += no_11 * 2; 
no_ck += no_12 * 1; 
no_ck += no_13 * 2; 
no_ck = no_ck % 10; 
no_ck = 10 - no_ck; 

if(no_ck > 9) {no_ck = no_ck - 10 ;} 
//no_ck = abs(no_ck); 
if(no_ck == no_14) 
{ return 1; } 
else { return 0; } 

}else { return 0; } 

} 


if(len == 12) // 사업자등록번호 
{ 
if((no_4 != "-") || (no_7 != "-")) 
{ return 0; } 

        strNumb        =        removeMarkValue(str,"-"); 
        if        (strNumb.length        !=        10) 
        { 
                //alert("사업자등록번호가 잘못되었습니다."); 
                return false; 
        } 
         
        sumMod        =        0; 
        sumMod        +=        parseInt(strNumb.substring(0,1)); 
        sumMod        +=        parseInt(strNumb.substring(1,2)) * 3 % 10; 
        sumMod        +=        parseInt(strNumb.substring(2,3)) * 7 % 10; 
        sumMod        +=        parseInt(strNumb.substring(3,4)) * 1 % 10; 
        sumMod        +=        parseInt(strNumb.substring(4,5)) * 3 % 10; 
        sumMod        +=        parseInt(strNumb.substring(5,6)) * 7 % 10; 
        sumMod        +=        parseInt(strNumb.substring(6,7)) * 1 % 10; 
        sumMod        +=        parseInt(strNumb.substring(7,8)) * 3 % 10; 
        sumMod        +=        Math.floor(parseInt(strNumb.substring(8,9)) * 5 / 10); 
        sumMod        +=        parseInt(strNumb.substring(8,9)) * 5 % 10; 
        sumMod        +=        parseInt(strNumb.substring(9,10)); 
         
        if        (sumMod % 10        !=        0) 
        { 
                //alert("사업자등록번호가 잘못되었습니다."); 
                return false; 
        } 
        return        true; 
}

}

function check(s1,s2,s3,gubun)
{

	var str = (s3 == null || s3 =="") ? s1+"-"+s2 : s1+"-"+s2+"-"+s3;
	return  checktotal(str,gubun);

}
// 주민, 법인, 사업자등록번호 체크  끝.........

// 폼로드시 포커스 이동
function frmFocus(obj)
{
	   obj.focus();
	   return false;
} 

//폼 리셋
function frmReset(frmObj)
{
	if(frmObj == null){
		frmObj = document.form1;
	}
	frmObj.reset();
	frmFocus(frmObj);
}

// 단일 삭제시
function frmDelete(url,form)
{
	if(form == null){
		form = document.form1;
	}
	if(confirm('삭제하시겠습니까?'))
	{
	 form.action=url;
	 form.submit();
	}
}
// 단일 수정시
function frmUpdate(url)
{
	form = document.form1;
	if(confirm('수정하시겠습니까?'))
	{
	 form.action=url;
	 form.submit();
	}
}
// 단일 등록시
function frmInsert(url)
{
	form = document.form1;
	if(confirm('등록하시겠습니까?'))
	{
	 form.action=url;
	 form.submit();
	}
}
/* 전화번호와 팩스번호 등의 입력시 숫자 체크*/
function js_numberCheck(str) {
    var src = new String(str);
    var tar = true;
    var i, len=src.length;
    for (i=0; i < len; i++) {
        if ((src.charAt(i) < '0') | (src.charAt(i) > '9'))
            return false;
    }
    return true;
}

// input type 개체에 숫자만 입력되록
// usage : <input type=text name="" onKeyDown="objIsNumber()">
function objIsNumber()
{
	var sNum = "0123456789";
	var i;
	var iKey;
	var cKey;

	iKey		= event.keyCode;	//window.event.keyCode;
	//status	= "key : " + iKey;
	if(	(iKey >= 48 && iKey <= 57 ) ||
			(iKey >= 96 && iKey <= 105) ||
			iKey == 8 || iKey == 9 ||
			iKey == 37 || iKey == 39  || iKey == 46) // 8 : backspace, 9 : Tab, 37 : left, 39 : right , 46 : delete
	{
		return;
	}
	else
	{
		//alert("code : " + iKey);
		event.returnValue = false;
	}
} // objIsNumber method end..

/*
입력창 자동이동 스크립트
*/
function moveNext(varControl, varNext)
{
	
	//status	= "code : " + event.keyCode;
	
	if(event.keyCode == 9 || event.keyCode == 16  || event.keyCode == 46 ) 
	{
		return;
	}
	else
	{
	
	if(varControl.value.length == varControl.maxLength)
	{
		varNext.focus();
	}
   }
}
/*
tab키를 눌렀을때 원하는곳에 focus를 가게 한다
*/
function checkTab(xx)
{
	if(event.keyCode == 0)
	{
		xx.focus();
	}
}
//파일크기 제한
function calc_length(value, size) { 
		var temp; 
		var count = 0; 
		var str   = new String(value);

		for (i=0 ; i<str.length ; i++){ 
			temp = str.charAt(i) ; 
			if (escape(temp).length > 4) { count += 2; } 
			else if (temp == '\r' && str.charAt(i+1) == '\n') { count += 2; } // \r\n일 경우
			else if (temp != '\n') { count++; } 
		}
		if(parseInt(count)>parseInt(size)){
			alert(count + " byte 입니다 : "+ size + " byte까지 입력가능");			
			return false;	
		}
		else return true;

	} 
// 검색조건 검사 --------------------------------
function searchchk(){
	var len, i, cnt = 0;
	if(search.fStr.value == ''){
		alert('검색할 문자열을 입력하세요!!');
		search.fStr.focus();
		return;
	}
	len = search.fStr.value.length;
	// 공백이 들어왔을 경우 제어를 위한 부분,
	for(i=0 ; i< len ; i++){
		if(search.fStr.value.charAt(i) == " ") cnt++;
	}
	// 스페이스만이 있을 경우 return 시킨다.
	if(cnt == len){
		alert('검색할 문자열을 입력하세요!!');
		search.fStr.select();
		return;
	}
	search.fStr.value = search.fStr.value.replace(/\'/,"");
	search.submit();
}

// 마우스 오버시 효과 주기 ---------------------
function oVerRow(Me, flag,Clr){
	var bgcolor = Clr;
	if( Clr == null ){
		bgcolor = '#FEFEEB';
	}
	if(flag){
		Me.style.backgroundColor= bgcolor;
	}
	else{
		Me.style.backgroundColor = '';
	}
	//return true;
}

// 한번에 전체를 모두 선택하게 하는 함수
function All(Obj){
	var i, cnt;
		
	if(typeof(Obj) == "undefined") return;
	//status = typeof(form.chk[0]) ;
	cnt = (typeof(Obj[0]) != "object") ? 1 : Obj.length;

	for(i=0 ; i<cnt ; i++){
			if(cnt > 1){
				Obj[i].checked = true;
			}
			else{
				Obj.checked = true;
			}
		}  		
}
// 한번에 전체를 모두 해제시키는 함수
function Undo(Obj){
	var i, cnt;

	if(typeof(Obj) == "undefined") return;
	//status = typeof(form.chk[0]) ;
	cnt = (typeof(Obj[0]) != "object") ? 1 : Obj.length;

	for(i=0 ; i<cnt ; i++){
			if(cnt > 1){
				Obj[i].checked = false;
			}
			else{
				Obj.checked = false;
			}
		}  		
}
// 전체 선택 및 해제 토글 함수 
function toggle(Obj){
	
	var i, cnt,flag;
	flag = false;	
	if(typeof(Obj) == "undefined") return;
	//status = typeof(form.chk[0]) ;
	cnt = (typeof(Obj[0]) != "object") ? 1 : Obj.length;
	
	if( cnt > 1 ){
	for(i=0 ; i<cnt ; i++){
		if( Obj[i].checked == true ){
			flag = true;	
		}
	}	
	for(i=0 ; i<cnt ; i++){
		Obj[i].checked = (flag == true ? false : true) ;		
	}
	}else{
		if( Obj.checked == true ){
			flag = true;	
		}
		Obj.checked = (flag == true ? false : true) ;		
	}
}
/*
체크박스에서 Enter값이 들어오면 체크상태를 반전시켜줌
*/
function checkEnterCheckBox(xx)
{
	var yy =	chkEnter();
	if(yy)
	{
		if(xx.checked)
		{
			xx.checked = false;
		}
		else if(! xx.checked)
		{
			xx.checked = true;
		}
	}
}

/*
Enter를 체크하여 Enter 이면 true 아니면 false를 반환
*/
function chkEnter()
{
	var ok = true;
	var no = false;
  	if(event.keyCode == 13)
  	{
		return ok;
  	}
  	else
  	{
  		return no;
  	}
}
/*
문자열 앞뒤에있는 공백없에기
작성자 : 이재균
*/
function trim2( arg )
{
   var st = 0;
   var len = arg.length;

   //문자열앞에 공백문자가 들어 있는 Index 추출
   while( (st < len) && (arg.charCodeAt(st) == 32) )
   {
      st++;
   }
   //문자열뒤에 공백문자가 들어 있는 Index 추출
   while( (st < len) && (arg.charCodeAt(len-1) == 32) )
   {
      len--;
   }
   return ((st > 0) || (len < arg.length)) ? arg.substring(st, len) : arg;
}


/* 해당하는 부분의 최대길이 체크*/
function frmCom(obj)
{
	var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`0123456789-=\~!@#$%^&*()_+|,./<>?";
	var rleng=0;   //입력된 길이
	var cleng=0;  // 입력 최대길이
	var flag=false;

	for(i=0; i<obj.value.length; i++)
	{
		for(j=0; j<str.length; j++)
		{
			if(obj.value.charAt(i) == str.charAt(j))
			{
				flag = true;
				break;
			}
		}
		if(flag) rleng++;
		else rleng +=2;
		flag = false;
	}
	cleng = obj.maxLength;
	if(cleng < rleng) 
	{ 
		alert("[" + obj.id + "]는 한글 " + parseInt(cleng/2) + "자, 또는 영문 " + cleng + "자 까지만 입력해 주십시요.");  
		return false; 
	}
	else return true;
}
/*Disabled 된 컨트롤 활성화*/
function changectl_stat(frmObj)
{
	var i;
	var elm;
	
	for(i=0 ; i<frmObj.elements.length ; i++)
	{
		elm = frmObj.elements[i];		
		elm.disabled = false;
		
	}
	return;
}

/*폼체크와 폼 submit*/
function confirm_form(frmObj,min)
{  
	var i;
	var elm;
	var trimVal;
	for(i=0 ; i<frmObj.elements.length ; i++)
	{
		elm = frmObj.elements[i];		
		trimVal = trim(elm.value);

		//"0"을 포함할때 => 필수 입력사항일때
		if((elm.className).indexOf("0") != -1)
		{
			if(trimVal == "")   //값이 없을때
			{
				alert("[" + elm.id + "]을 입력해 주십시요.");				
				return frmFocus(elm);
			}
			if(frmCom(elm) == false)  return frmFocus(elm);  //길이체크
		}
		//"1"을 포함할때 => 숫자만 입력해야 할때
		if((elm.className).indexOf("1") != -1)
		{  
			if(trimVal != "")  //값이 있을때
			{
				if(js_numberCheck(trimVal) == false)  //값이 숫자가 아닐때
				{ 
					alert("[" + elm.id + "]을 숫자로 입력해 주십시요.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm); //길이 체크
			}
		}		
		//"2"을 포함할때 => 알파벳만 입력해야 할때
		if((elm.className).indexOf("2") != -1)
		{  
			if(trimVal != "") //값이 있을때
			{
				if(isAlphabet(elm) == false)  //값이 알파벳이 아닐때
				{ 
					alert("[" + elm.id + "]을 알파벳으로 입력해 주십시요.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		//"3"을 포함할때 => 알파벳과 숫자만 입력해야 할때
		if((elm.className).indexOf("3") != -1)
		{  
			if(trimVal != "") //값이 있을때
			{
				if(isAlphaNum(elm) == false)  //값이 알파벳,숫자가 아닐때
				{ 
					alert("[" + elm.id + "]을 알파벳과 숫자로 입력해 주십시요.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		//"4"을 포함할때 => 한글허용하지 않을때
		if((elm.className).indexOf("4") != -1)
		{  
			if(trimVal != "") //값이 있을때
			{
				if(isKorCharValue(trimVal) == false)  //값이 한글일때
				{ 
					alert("[" + elm.id + "]에는 한글을 입력할 수 없습니다.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		//"5"을 포함할때 => 특수문자허용하지 않음
		if((elm.className).indexOf("5") != -1)
		{  
			if(trimVal != "") //값이 있을때
			{
				if(containsChars(elm,"!,&^%$#@~;") == true)  //특수문자일때
				{ 
					alert("[" + elm.id + "]에는 특수 문자를 사용할 수 없습니다.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}	
		//"6"을 포함할때 => 최대자리수 체크,자리수 고정시킴
		if((elm.className).indexOf("6") != -1)
		{  
			if(trimVal != "") //값이 있을때
			{
				if(elm.maxLength != trimVal.length)  //최대자리수가 아닐 때일때
				{ 
					alert("[" + elm.id + "]을 "+ elm.maxLength + "자리로 입력하세요.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		//"7"을 포함할때 => 최소입력수 체크(아디 체크시)
		if((elm.className).indexOf("7") != -1)
		{  
			var m = 6;
			if (min != null){
				m = min;
			}
			if(trimVal != "") //값이 있을때
			{
				if( trimVal.length < m)  //
				{ 
					alert("[" + elm.id + "]을 "+m+"~"+elm.maxLength+" 자리로 입력하세요.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		//"8"을 포함할때 => 이메일 체크
		if((elm.className).indexOf("8") != -1)
		{  
			if(trimVal != "") //값이 있을때
			{
				//if(isValidEmail(elm) == false )  //
				if(checkEmailAddress(trimVal) == false ) 
				{ 
					alert("[" + elm.id + "]을  형식에 맞게 입력하세요");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		//"9"을 포함할때 => password 체크
		if((elm.className).indexOf("9") != -1)
		{  
			if(trimVal != "") //값이 있을때
			{
				if(trimVal != trim(frmObj.elements[i-1].value) )  //
				{ 
					alert("[" + frmObj.elements[i-1].id + "]가 일치하지 않습니다.  다시 입력하세요");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		//"L"을 포함할때 => 법인번호  체크
		if((elm.className).indexOf("L") != -1)
		{  
			if(trimVal != "") //값이 있을때
			{
				if( check(trim(frmObj.elements[i-1].value),trimVal,'','L') == false )  //
				{ 
					alert("잘못된 " + elm.id + " 입니다. 다시 입력하세요");
					return frmFocus(frmObj.elements[i-1]);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		//"J"을 포함할때 => 주민등록번호  체크
		if((elm.className).indexOf("J") != -1)
		{  
			if(trimVal != "") //값이 있을때
			{
				if( check(trim(frmObj.elements[i-1].value),trimVal,'','J') == false )  //
				{ 
					alert("잘못된 " + elm.id + " 입니다. 다시 입력하세요");
					return frmFocus(frmObj.elements[i-1]);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		//"l"을 포함할때 => 법인번호  체크2
		if((elm.className).indexOf("l") != -1)
		{  
			if(trimVal != "") //값이 있을때
			{
				if( !isNumDash(elm) )  //
				{ 
					alert("[" + elm.id + "]을  숫자 또는 '-'만 입력하세요.");
					return frmFocus(elm);
				}
				if( checktotal(trimVal,'L') == false )  //
				{ 
					alert("잘못된 " + elm.id + " 입니다. 다시 입력하세요");
					return frmFocus(elm);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		//"j"을 포함할때 => 주민등록번호  체크2
		if((elm.className).indexOf("j") != -1)
		{  
			if(trimVal != "") //값이 있을때
			{
				if( !isNumDash(elm) )  //
				{ 
					alert("[" + elm.id + "]을  숫자 또는 '-'만 입력하세요.");
					return frmFocus(elm);
				}
				if( checktotal(trimVal,'J') == false )  //
				{ 
					alert("잘못된 " + elm.id + " 입니다. 다시 입력하세요");
					return frmFocus(elm);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		//"B"을 포함할때 => 사업자 등록 번호 체크
		if((elm.className).indexOf("B") != -1)
		{  
			if(trimVal != "") //값이 있을때
			{
				if( check(trim(frmObj.elements[i-2].value),trim(frmObj.elements[i-1].value),trimVal) == false )  //
				{ 
					alert("잘못된 " + elm.id + " 입니다. 다시 입력하세요");
					return frmFocus(frmObj.elements[i-2]);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		//"b"을 포함할때 => 사업자 등록 번호 체크2
		if((elm.className).indexOf("b") != -1)
		{  
			if(trimVal != "") //값이 있을때
			{
				if( !isNumDash(elm) )  //
				{ 
					alert("[" + elm.id + "]을  숫자 또는 '-'만 입력하세요.");
					return frmFocus(elm);
				}
				if( checktotal(trimVal) == false )  //
				{ 
					alert("잘못된 " + elm.id + " 입니다. 다시 입력하세요");
					return frmFocus(elm);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		//"C"을 포함할때 => -.,숫자  체크
		if((elm.className).indexOf("C") != -1  || (elm.className).indexOf("F") != -1 )
		{  
			if(trimVal != "") //값이 있을때
			{
				if( !isNumCommaDashDot(elm) )  //
				{ 
					alert("[" + elm.id + "]을  숫자로 입력하세요");
					return frmFocus(elm);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		//"D"을 포함할때 => '-',숫자  체크
		if((elm.className).indexOf("D") != -1  )
		{  
			if(trimVal != "") //값이 있을때
			{
				if( !isNumDash(elm) )  //
				{ 
					alert("[" + elm.id + "]을  숫자 또는 '-'만 입력하세요.");
					return frmFocus(elm);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		//"s"을 포함할때 => 알파벳,공백만  입력해야 할때
		if((elm.className).indexOf("s") != -1)
		{  
			if(trimVal != "") //값이 있을때
			{
				if(isAlphabetSpace(elm) == false)  //값이 알파벳,공백이 아닐때
				{ 
					alert("[" + elm.id + "]을 알파벳과 공백으로 입력해 주십시요.");
					return frmFocus(elm);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
		
		//"K"을 포함할때 => 같은 문자로만 입력했을 때
		if((elm.className).indexOf("K") != -1)
		{
			if(trimVal != "") //값이 있을때
			{
				if(OneCharsCheck(elm) == false)  //값이 알파벳,공백이 아닐때
				{ 
					alert("[" + elm.id + "]를 같은 문자로만 입력하셨습니다. 다시 입력해 주십시요.");
					return frmFocus(elm);
				}
			}
			
		}
		//"X"을 포함할때 => 첫번째 문자가 알파벳만 입력해야 할때
		if((elm.className).indexOf("X") != -1)
		{  
			if(trimVal != "") //값이 있을때
			{
				if(isFirstAlphabet(elm) == false)  //값이 알파벳이 아닐때
				{ 
					alert("[" + elm.id + "]의 첫번째 문자는 영문자로 입력해 주십시요.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //길이 체크
			}
		}
	}// end for
	return true;
} 


////추가 ////

// 로드시 콤마를 추가하여 보여준다
function onLoadCommaCheck(obj){

	var msg = obj.value;
	var inputValueWithoutMark = "";
	var head = "";
	if(msg.substr(0,1) == '-'){
		head ="-";	
	}
	for(i=0; i<msg.length; i++){
		if (msg.substr(i,1) != ',' && msg.substr(i,1)  != '-' ){
			inputValueWithoutMark += msg.substr(i,1);
		}
	}
	msg = inputValueWithoutMark;
	if(isNaN(msg) == true){
		alert("숫자만 입력 가능합니다.");
		obj.value = "";
		obj.focus();
		return;
	}
	var end = "";
	var ch = msg.indexOf('.');
	if(ch != -1){
		end = msg.substring(ch);
		msg = msg.substring(0,ch);
	}
	if( msg.length > 3  ){
		var msg2 ="";
		var l = msg.length;
		var p = msg.length%3;
		msg2 += msg.substr(0,p);
		l -= p;
		msg = msg.substring(p);
		
		while(l !=0)
		{
			msg2 += ',';
			msg2 += msg.substr(0,3);
			msg = msg.substring(3);
			l -= 3;			
		}
		msg = msg2;
		if(p == 0){
			msg = msg2.substring(1);
		}
	}
	msg += end;
	//alert("최종:"+msg);
	msg = head + msg
	obj.value = msg;
	return msg;
}


// onload='onLoadCommaAdd(frmObj)' 
function onLoadCommaAdd(frmObj){

	var i;	
	var elm;
	for(i=0 ; i<frmObj.elements.length ; i++)
	{
		elm = frmObj.elements[i];
		//if(frmObj.elements[i].className == "c")
		if( elm.className.indexOf("C") != -1 || elm.className.indexOf("F") != -1 )	
		{
			//frmObj.elements[i].value = test2(frmObj.elements[i]);
			onLoadCommaCheck(elm);
		}	
			
	}
	
}

//키업시 클래스네임에서 체크할 항목을 찾아내어 이벤트 발생시킨다.
function onKeyupCheck(obj){


		if((obj.className).indexOf("C") != -1)	// integer
		{
			toNumberFormat2(obj);
		}	
		if((obj.className).indexOf("F") != -1)	// float
		{
			toNumberFormat(obj);
		}
		if((obj.className).indexOf("P") != -1)	 // 퍼센트 형 
		{
			toNumberFormat3(obj);
		}			
}

function toNumberFormat2(inputElement, title){
	var iKey = window.event.keyCode;
	if ( iKey == 190 || iKey == 110 ){
		inputElement.value = inputElement.value.substring(0,inputElement.value.length-1);
		return;
	}
	toNumberFormat(inputElement);
}
function toNumberFormat3(inputElement, title){
	var iKey = window.event.keyCode;	
	var removedValue;
	toNumberFormat(inputElement);
	removedValue = removeMark(inputElement,',');
	
	if ( eval( removeMark(inputElement,',') ) >100 ){
		alert(" 잘못된 형식입니다 ");
		removedValue = removeMark(inputElement,',');				
		inputElement.value = removedValue.substring(0,2);		
		return;
	}
}
//== $9 =======================================================================================================
// 기   능 : 숫자입력받을때 3자리마다 쉼표 삽입하기
// 사용 예 : <input type="text" onKeyUp="javascript: toNumberFormat(this);">
//			<input type="text" onKeyUp="javascript: toNumberFormat(this, '합계금액');">
//-------------------------------------------------------------------------------------------------------------
function toNumberFormat(inputElement, title){
	// 36 Home   37 <-   39 ->   27 Esc
	
	//if(Event.keyCode == '36' || event.keyCode == '37' || event.keyCode == '39' || event.keyCode == '27') return;
	if(event.keyCode == '16' || event.keyCode == '9' || event.keyCode == '36' || event.keyCode == '37' || event.keyCode == '39' || event.keyCode == '27') return;
	var inputNo = inputElement.value; // 입력받은 값
	var inputNoWithoutMark = ""; // 입력받은 값에서 "," 를 제거한 값
	var value1 = "";			// inputElement.value = value1(87,) + value2(654,) + value3(321)
	var value2 = "";
	var value3 = "";
	var remainder = "";	 // 나머지
	var dot = true;
	if(isNullValue(inputNo)) return;
	if(inputNo.length == 1 && inputNo == "-") return;  // 제일 앞의 음수기호 처리 2001.06.16 추가
	// ','를 제거하는 루프문
	for(i=0; i<inputNo.length; i++){
		//if (inputNo.substr(i,1) != "," && inputNo.substr(i,1) != " " && inputNo.substr(i,1) != "-"){
		//if (  ( '0'<=inputNo.substr(i,1) && '9'>=inputNo.substr(i,1) ) || '.'==inputNo.substr(i,1)){
		if (  ( '0'<=inputNo.substr(i,1) && '9'>=inputNo.substr(i,1) ) ){
			inputNoWithoutMark += inputNo.substr(i,1);
		}else if( '.'==inputNo.substr(i,1) && dot){
			dot = false;
			inputNoWithoutMark += inputNo.substr(i,1);						
		}
	}
	
	// 숫자체크 : 문자가 입력되었으면 함수 종료하고 input에 포커스
	if (isNaN(inputNoWithoutMark) == true && inputNoWithoutMark != "-"){ // 숫자가 아니면
		if(isNullValue(title)){
			alert("숫자만 입력 가능합니다.");
		} else {
			alert("\"" + title + "\" 에는 숫자만 입력 가능합니다.");
		}
		lenn = inputNo.length;
		inputElement.value = inputNo.substring(0,lenn-1);
		inputElement.focus();
		return;
	}
	//   맨앞 0 인 경우문제 보완
	if(inputNoWithoutMark.length>=2 && inputNoWithoutMark.substr(0,1) == '0' && inputNoWithoutMark.substr(1,1) != "."){
		while(inputNoWithoutMark.substr(0,1)=='0' || inputNoWithoutMark.substr(0,1)=='.'){
			inputNoWithoutMark	= inputNoWithoutMark.substring(1,inputNoWithoutMark.length);
		}
		//inputNoWithoutMark = inputNoWithoutMark.substring(1,inputNoWithoutMark.length);
	}
// %%%% 2001/07/29 소수점 처리문제 보완
	var vDotIndex = inputNoWithoutMark.indexOf(".");	
	if (vDotIndex != -1){
		vTail = inputNoWithoutMark.substring(vDotIndex);
		inputNoWithoutMark = inputNoWithoutMark.substring(0, vDotIndex);				
	}
// %%%% End

	if (inputNoWithoutMark.length > 3) {
		remainder = inputNoWithoutMark.length % 3;
		if(remainder > 0){
			value1 = inputNoWithoutMark.substring(0, remainder) + ",";			
			inputNoWithoutMark = inputNoWithoutMark.substring(remainder);
		}
		if(inputNo.substring(0, 1) == "-"){		// 제일 앞의 음수기호 처리 2001.06.16 추가
			value1 = "-" + value1;
		}
		for(i=0; i<(inputNoWithoutMark.length / 3) -1; i++) {
			value2 += inputNoWithoutMark.substring(i*3, i*3 + 3) + ",";
		
		}
		value3 = inputNoWithoutMark.substring(inputNoWithoutMark.length -3);
		if (vDotIndex == -1){
			inputElement.value = value1 + value2 + value3;
		} else {
			inputElement.value = value1 + value2 + value3 + vTail;
		}
	} else {
		if(inputNo.substring(0, 1) == "-"){		// 제일 앞의 음수기호 처리 2001.06.16 추가
			if (vDotIndex == -1){
				inputElement.value = "-" + inputNoWithoutMark;
			} else {
				inputElement.value = "-" + inputNoWithoutMark + vTail;
			}
		} else {
			if (vDotIndex == -1){
				inputElement.value = inputNoWithoutMark;
			} else {
				inputElement.value = inputNoWithoutMark + vTail;
			}
		}
	}
}

// document.onkeyup = controlKeyup;	
function controlKeyup(){

	var SE = window.event.srcElement;
	//var el = window.event.fromElement;
	if(typeof(SE) == "undefined") return ;
	onKeyupCheck(SE);
	
}

//== $11 ======================================================================================================
// 기   능 : 날자 입력받을때 '/' 삽입하기
// 사용 예 : <input type="text" onKeyUp="javascript: toDateFormat(this, '시작일자');">
//			<input type="text" onKeyUp="javascript: toDateFormat(this);">
//-------------------------------------------------------------------------------------------------------------
function toDateFormat(inputElement, title){

	var inputDate = inputElement.value;
	var inputDateWithoutMark = "";
	var returnValue = "";

	if( event != null && (event.keyCode == '37' || event.keyCode == '39' || event.keyCode == '27' || event.keyCode == '8' || event.keyCode == '46') ) return;
	if(isNullValue(inputDate)) return;
// '/'를 제거하는 루프문
	for(i=0; i<inputDate.length; i++){
		if (inputDate.substr(i,1) != "/" && inputDate.substr(i,1) != " "){
			inputDateWithoutMark += inputDate.substr(i,1);
		}
	}

	// 숫자체크 : 문자가 입력되었으면 함수 종료하고 input에 포커스
	if (isNaN(inputDateWithoutMark) == true){ // 숫자가 아니면
		if(isNullValue(title)){
			alert("날자 입력에는 숫자만 입력 가능합니다.");
		} else {
			alert("\"" + title + "\" 에는 숫자만 입력 가능합니다.");
		}
		inputElement.value = "";
		inputElement.focus();
		return;
	}

//	if(event.keyCode == '8' || event.keyCode == '46') {
//		if (inputDateWithoutMark.length >= 8) {
//		alert("8 자리 숫자로 입력하세요.");
//		inputElement.value = inputDateWithoutMark.substring(0, 4) + "/" + inputDateWithoutMark.substring(4, 6) + "/" + inputDateWithoutMark.substring(6, 8);
//		}
/*		var flag = true;
		for(i=0; i<inputDate.length; i++){
			if ( (i != 4 && i != 7 && inputDate.substr(i,1) == "/")
			  || (inputDate.length > 4 && inputDate.substr(4,1) != "/" ) ){
				flag = false;
			}
		}
		if(flag) */			//return;
//	}
	if( event != null && (event.keyCode == '32') ){
		spaceIndex = inputDate.indexOf(" ");
		inputElement.value = inputDate.substring(0, spaceIndex) + inputDate.substring(spaceIndex +1);
		inputElement.focus();
		return;
	}
/*
	if(inputDate.indexOf("/") != -1 && inputDate.indexOf("/") < 4){
		alert(inputDate.substring(0, inputDate.indexOf("/")) + "는 잘못된 년도 입니다.");
		inputElement.focus();
		return;
	}
*/
	if(inputDateWithoutMark.length > 4 && inputDateWithoutMark.length < 8) {
		firstMonthNo = inputDateWithoutMark.substr(4,1);
		// "월"의 첫자리 숫자가 "1" 이하일 때
		if( inputDate.length > 4 && inputDateWithoutMark.length > 4 && inputDate.indexOf("/") == 4 && inputDateWithoutMark.length < 8 && firstMonthNo >= 2 && firstMonthNo < 10 ){
				inputDateWithoutMark = inputDateWithoutMark.substring(0, 4) + "0" + firstMonthNo;
		}
/*		if( inputDateWithoutMark.length > 5 ){
			month = inputDateWithoutMark.substr(4,2);
			if (isNaN(month) || month < 1 || month > 12) {
				alert(month + "는 잘못된 월입니다.");
				inputElement.focus();
				return;
			}
		}
*/
	}
	if( inputDateWithoutMark.length > 6 && inputDateWithoutMark.length < 9 ) {
		firstDayNo = inputDateWithoutMark.substr(6,1);
		//일자의 첫자리 숫자가 "3" 이하일 때
		if( inputDate.indexOf("/") == 4 && inputDate.lastIndexOf("/") == 7 && inputDateWithoutMark.length > 6 && inputDateWithoutMark.length < 8 && firstDayNo > 3 && firstDayNo < 10) {
			inputDateWithoutMark = inputDateWithoutMark.substring(0, 6) + "0" + firstDayNo;
		}
/*
		if( inputDateWithoutMark.length == 8 ){
			year = inputDateWithoutMark.substr(0,4);
			month = inputDateWithoutMark.substr(4,2);
			day = inputDateWithoutMark.substr(6,2);
			inputDate = year + "/" + month + "/" + day;
			dateObj = new Date(inputDate);
			rDD = dateObj.getDate();
			if (isNaN(day) || day != rDD) {
				alert( day + "잘못된 일자입니다.");
				inputElement.focus();
				return
			}
		}
*/
	}
	if ((inputDate.indexOf("/") == -1 || inputDate.indexOf("/") > 3) && inputDateWithoutMark.length > 3 && inputDateWithoutMark.length < 9) {
		returnValue = inputDateWithoutMark.substr(0,4) + '/' + inputDateWithoutMark.substr(4,2);
		if (inputDateWithoutMark.substr(5,1) != ""){
			returnValue += '/' +  inputDateWithoutMark.substr(6,2);
		}
		inputElement.value = returnValue;
	}

	// 입력된 값이 8자 일 때 "월일" 을 "/"로 구분해 부고 9자리 이상일때는 잉여자리 삭제한다.
	if (inputDateWithoutMark.length >= 8) {
//		alert("8 자리 숫자로 입력하세요.");
		inputElement.value = inputDateWithoutMark.substring(0, 4) + "/" + inputDateWithoutMark.substring(4, 6) + "/" + inputDateWithoutMark.substring(6, 8);
		inputElement.focus();
	}
}

//== $12 ======================================================================================================
// 기   능 : 날자("년월일") 형식에 맞는지 확인하기 (날자입력에 년,월,일 구분마다 "/"가 삽입되어 있는지, 정확한 날자인지 확인하기)
// 사용 예 : if( checkDateFormat(document.form1.startDate, '회계일자') == true ) send('insert', 'IGEDAA_end.jsp'); 
//			if( checkDateFormat(document.form1.startDate) == true ) send('insert', 'IGEDAA_end.jsp');
//-------------------------------------------------------------------------------------------------------------
function checkDateFormat(inputElement, title) {
	
	var inputDate = inputElement.value;
/*alert("inputDate : " + inputDate);	
alert("inputDate.length : " + inputDate.length);
alert("isNullValue(inputDate) : " + isNullValue(inputDate));
*/
	var year, month, day;
	var dateObj, rDD;
	if(isNullValue(inputDate) == true) {     // 아무것도 입력하지 않았을 때에는 성공 -> 별도의 null check 필요
		return true;		
	}
	
	if (inputDate.length != 10){
		// 입력된 값이 8자 이상일때 에러메시지
		if(isNullValue(title)){		
			alert("입력하신 날자 \"" + inputDate + "\" 을(를)  ->  \"2001/07/28\" 형식으로 수정하여 주십시요!");
		} else {
			alert("\"" + title + "\" 에 입력하신 날자 \"" + inputDate + "\" 을(를)  ->  \"2001/07/28\" 형식으로 수정하여 주십시요!");
		}
		inputElement.focus();
		return false;
	}
	
	if(inputDate.indexOf(" ") != -1){
		if(isNullValue(title)){
			alert("날자 입력에는 공백을 사용하실 수 없습니다.");
		} else {
			alert("\"" + title + "\" 의 날자 입력에는 공백을 사용하실 수 없습니다.");
		}
		inputElement.focus();
		return false;
	}
		
	for(i=0, nIndex=-1; i<2; i++){
		nIndex = inputDate.indexOf("/", nIndex + 1);
		if(nIndex == -1) {
			if(isNullValue(title)){
				alert("입력하신 날자 \"" + inputDate + "\" 을(를)  ->  \"2001/07/28\" 형식으로 수정하여 주십시요!");
			} else {
				alert("\"" + title + "\" 에 입력하신 날자 \"" + inputDate + "\" 을(를)  ->  \"2001/07/28\" 형식으로 수정하여 주십시요!");
			}
			inputElement.focus();
			return false;
		}
		if(i == 0 && nIndex == 4) { 
			year = inputDate.substr(0, 4);
		} else if(i == 1 && nIndex == 7) {
			month = inputDate.substr(5, 2);
			day = inputDate.substr(8, 2);
		}
	}
	
	if (isNullValue(year) || isNullValue(month) || isNullValue(day)) {
		if(isNullValue(title)){		
			alert("입력하신 날자 \"" + inputDate + "\" 을(를)  ->  \"2001/07/28\" 형식으로 수정하여 주십시요!");
		} else {
			alert("\"" + title + "\" 에 입력하신 날자 \"" + inputDate + "\" 을(를)  ->  \"2001/07/28\" 형식으로 수정하여 주십시요!");
		}
		inputElement.focus();
		return false;
	}		
	if (isNaN(year)) {
		if(isNullValue(title)){
			alert("입력하신 년도\"" + year + "\" 에는 숫자만 사용 가능 합니다.");
		} else {
			alert("\"" + title + "\" 입력값 :\"" + year + "\" <- \"" + title + "\" 에는 숫자만 입력 가능합니다.");
		}
		inputElement.focus(); 
		return false;			                                                                                                  
	}
	if (year.length > 0 && year.length != 4) {
		if(isNullValue(title)){
			alert("입력하신 년도\"" + year + "\" 은(는) 잘못된 년도 입니다.");
		} else {
			alert("\"" + title + "\" 에 입력하신 \"" + year + "\" 은(는) 잘못된 년도 입니다.");
		}
		inputElement.focus(); 
		return false;
	}	
	
	if (isNaN(month)) {
		if(isNullValue(title)){
			alert("입력하신 월\"" + month + "\" 에는 숫자만 사용 가능 합니다.");
		} else {
			alert("\"" + title + "\" 입력값 :\"" + month + "\" <- \"" + title + "\" 에는 숫자만 입력 가능합니다.");
		}
		inputElement.focus(); 
		return false;			                                                                                                  
	}
	
	if (month > 12 || month < 1) {
		if(isNullValue(title)){
			alert("입력하신 \"" + month + "\" 은(는) 잘못된 \"월\"입니다.");                                                                        
		} else {
			alert("\"" + title + "\" 에 입력하신 \"" + month + "\" 은(는) 잘못된 \"월\"입니다.");
		}
		inputElement.focus();   
		return false;
	} 
		
	dateObj = new Date(inputDate);
	rDD = dateObj.getDate();                                         
	if (isNaN(day)) {
		if(isNullValue(title)){
			alert("입력하신 일\"" + day + "\" 에는 숫자만 사용 가능 합니다.");
		} else {
			alert("\"" + title + "\" 입력값 :\"" + day + "\" <- \"" + title + "\" 에는 숫자만 입력 가능합니다.");
		}
		inputElement.focus(); 
		return false;			                                                                                                  
	}
	
	if (day != rDD ) {                                                                                                 
		if(isNullValue(title)){
			alert("입력하신 \"" + day + "\" 은(는) 잘못된 \"일\" 입니다.");                                                                  
		} else {
			alert("\"" + title + "\" 에 입력하신 \"" + day + "\" 은(는) 잘못된 \"일\" 입니다.");
		}	
		inputElement.focus();   
		return false;                                                               
	}                                                                                                 	     
	return true;                                                                                                        
}

//== $12-1 ======================================================================================================
// 기   능 : 날자("년월") 형식에 맞는지 확인하기 (날자입력에 년,월 구분에 "/"가 삽입되어 있는지, 정확한 날자인지 확인하기)
// 사용 예 : if( checkYearMonthFormat(document.form1.startDate, '회계일자') == true ) send('insert', 'IGEDAA_end.jsp'); 
//			if( checkYearMonthFormat(document.form1.startDate) == true ) send('insert', 'IGEDAA_end.jsp');
//-------------------------------------------------------------------------------------------------------------
function checkYearMonthFormat(inputElement, title) {
	
	var inputDate = inputElement.value;
/*alert("inputDate : " + inputDate);	
alert("inputDate.length : " + inputDate.length);
alert("isNullValue(inputDate) : " + isNullValue(inputDate));
*/
	var year, month, day;
	var dateObj, rDD;
	if(isNullValue(inputDate) == true) {     // 아무것도 입력하지 않았을 때에는 성공 -> 별도의 null check 필요
		return true;		
	}
	
	if (inputDate.length != 7){
		// 입력된 값이 8자 이상일때 에러메시지
		if(isNullValue(title)){		
			alert("입력하신 날자 \"" + inputDate + "\" 을(를)  ->  \"2001/07\" 형식으로 수정하여 주십시요!");
		} else {
			alert("\"" + title + "\" 에 입력하신 날자 \"" + inputDate + "\" 을(를)  ->  \"2001/07\" 형식으로 수정하여 주십시요!");
		}
		inputElement.focus();
		return false;
	}
	
	if(inputDate.indexOf(" ") != -1){
		if(isNullValue(title)){
			alert("날자 입력에는 공백을 사용하실 수 없습니다.");
		} else {
			alert("\"" + title + "\" 의 날자 입력에는 공백을 사용하실 수 없습니다.");
		}
		inputElement.focus();
		return false;
	}
		
	nIndex = inputDate.indexOf("/");
	if(nIndex != 4) {
		if(isNullValue(title)){
			alert("입력하신 날자 \"" + inputDate + "\" 을(를)  ->  \"2001/07\" 형식으로 수정하여 주십시요!");
		} else {
			alert("\"" + title + "\" 에 입력하신 날자 \"" + inputDate + "\" 을(를)  ->  \"2001/07\" 형식으로 수정하여 주십시요!");
		}
		inputElement.focus();
		return false;
	} else if(nIndex == 4) { 
		year = inputDate.substr(0, 4);
		month = inputDate.substr(5, 2);
	}
			
	if (isNullValue(year) || isNullValue(month)) {
		if(isNullValue(title)){		
			alert("입력하신 일자(년/월) \"" + inputDate + "\" 을(를)  ->  \"2001/07\" 형식으로 수정하여 주십시요!");
		} else {
			alert("\"" + title + "\" 에 입력하신 일자(년/월) \"" + inputDate + "\" 을(를)  ->  \"2001/07\" 형식으로 수정하여 주십시요!");
		}
		inputElement.focus();
		return false;
	}
	
	if (isNaN(year)) {
		if(isNullValue(title)){
			alert("입력하신 년도\"" + year + "\" 에는 숫자만 사용 가능 합니다.");
		} else {
			alert("\"" + title + "\" 입력값 :\"" + year + "\" <- \"" + title + "\" 에는 숫자만 입력 가능합니다.");
		}
		inputElement.focus(); 
		return false;			                                                                                                  
	}
	if (year.length > 0 && year.length != 4) {
		if(isNullValue(title)){
			alert("입력하신 년도\"" + year + "\" 은(는) 잘못된 년도 입니다.");
		} else {
			alert("\"" + title + "\" 에 입력하신 \"" + year + "\" 은(는) 잘못된 년도 입니다.");
		}
		inputElement.focus(); 
		return false;
	}
	if (isNaN(month)) {
		if(isNullValue(title)){
			alert("입력하신 월\"" + month + "\" 에는 숫자만 사용 가능 합니다.");
		} else {
			alert("\"" + title + "\" 입력값 :\"" + month + "\" <- \"" + title + "\" 에는 숫자만 입력 가능합니다.");
		}
		inputElement.focus(); 
		return false;			                                                                                                  
	}
	
	if (month > 12 || month < 1) {
		if(isNullValue(title)){
			alert("입력하신 \"" + month + "\" 은(는) 잘못된 \"월\"입니다.");                                                                        
		} else {
			alert("\"" + title + "\" 에 입력하신 \"" + month + "\" 은(는) 잘못된 \"월\"입니다.");
		}
		inputElement.focus();   
		return false;
	}
			     
	return true;                                                                                                        
}

//== $12-2 ======================================================================================================
// 기   능 : 날자("년") 형식에 맞는지 확인하기 (한글이 포함되어 있는지 확인하기, 4자리 이상인지 확인하기)
// 사용 예 : if( checkYearFormat(document.form1.startYear, '회계일자') == true ) send('insert', 'IGEDAA_end.jsp'); 
//			 if( checkYearFormat(document.form1.startYear) == true ) send('insert', 'IGEDAA_end.jsp');	   
//-------------------------------------------------------------------------------------------------------------
function checkYearFormat(inputElement, title) {
	
	var inputYear = inputElement.value;
	
	if(isNullValue(inputYear) == true) {     // 아무것도 입력하지 않았을 때에는 성공 -> 별도의 null check 필요
		return true;		
	}
	
	if (inputYear.length > 4){
		// 입력된 값이 4자 이상일때 에러메시지
		if(isNullValue(title)){		
			alert("입력하신 년도 \"" + inputYear + "\" 은(는)  ->  4자 이내로 입력하셔야 합니다.");
		} else {
			alert("\"" + title + "\" 에 입력하신 년도 \"" + inputYear + "\" 은(는)  ->  4자 이내로 입력하셔야 합니다.");
		}
		inputElement.focus();
		return false;
	}
	
	if(inputYear.indexOf(" ") != -1){
		if(isNullValue(title)){
			alert("날자 입력에는 공백을 사용하실 수 없습니다.");
		} else {
			alert("\"" + title + "\" 의 날자 입력에는 공백을 사용하실 수 없습니다.");
		}
		inputElement.focus();
		return false;
	}
	
		year = inputYear.substr(0, 4);
	/*	month = inputYear.substr(5, 2);
		
	if (isNullValue(year) || isNullValue(month)) {
		if(isNullValue(title)){		
			alert("입력하신 일자(년/월) \"" + inputDate + "\" 을(를)  ->  \"2001/07\" 형식으로 수정하여 주십시요!");
		} else {
			alert("\"" + title + "\" 에 입력하신 일자(년/월) \"" + inputDate + "\" 을(를)  ->  \"2001/07\" 형식으로 수정하여 주십시요!");
		}
		inputElement.focus();
		return false;
	}
	*/

	if (isNaN(year)) {
		if(isNullValue(title)){
			alert("입력하신 년도\"" + year + "\" 에는 숫자만 사용 가능 합니다.");
		} else {
			alert("\"" + title + "\" 입력값 :\"" + year + "\" <- \"" + title + "\" 에는 숫자만 입력 가능합니다.");
		}
		inputElement.focus(); 
		return false;			                                                                                                  
	}
	if (year.length > 0 && year.length != 4) {
		if(isNullValue(title)){
			alert("입력하신 년도\"" + year + "\" 은(는) 잘못된 년도 입니다.");
		} else {
			alert("\"" + title + "\" 에 입력하신 \"" + year + "\" 은(는) 잘못된 년도 입니다.");
		}
		inputElement.focus(); 
		return false;
	}
	if ((year == '0000') || (parseInt(year)<1900) || (parseInt(year)>3000)){
		alert("입력하신 년도\"" + year + "\" 이(가) 정확한지 다시 확인하십시오.");
		inputElement.focus(); 
		return false;	
	}
	return true;                                                                                                        
}
//입력된 값이 숫자인지를 체크.
function checkNumber(num , fieldName)
{

   var num_temp = Number(num);
   var errorMesg = fieldName+" 값을 숫자로 입력하십시요";
   var nullMesg = fieldName+" 값을 입력하십시요";

   //값이 있다면
   if(num != "")
   {
      //숫자면 false반환 - if는 문자라면
      if(isNaN(num_temp))
      {
         if("undefined" == typeof(fieldName)){}
         else
         {
            alert(errorMesg);
         }
         return false;
      }
      else  //숫자라면.
      {
         return true;
      }
   }
   else
   {
      if("undefined" == typeof(fieldName)){}
      else
      {
         alert(nullMesg);
      }
      return false;
   }
}
/*
날짜 체크하는 Function NOT NULL
구분 : N - null체크 안함
*/
function checkCalendar(year, month, day, allowNull, fieldName)
{
   // 날짜가 8자인지 체크
   var date = "";
   var errorMesg  = fieldName + "의 년도가 틀립니다 ";
   var errorMesg1 = fieldName + "의 년도가 틀립니다 ";
   var errorMesg2 = fieldName + "의 월이 틀립니다 ";
   var errorMesg3 = fieldName + "의 일자가 틀립니다 ";
   year  = trim(year) ;
   month = trim(month) ;
   day   = trim(day) ;

   date = year+month+day;

   if (( date.length == 0 ) && ( allowNull == "N" || allowNull == "n" ))
   {
      return true;
   }

   //년도의 4자리수 체크
   if( year.length != 4 )
   {
      if("undefined" == typeof(fieldName)){}
      else
      {
         alert(errorMesg1);
      }
      return false;
   }

   if ( month.length == 0 )
   {
      alert(errorMesg2);
      return false;
   }


   if ( day.length == 0 )
   {
      alert(errorMesg3);
      return false;
   }


   //월이 두자리가 아닐경우 앞에 "0"을 붙여서 두자리로  만듬"
   if(month.length != 0 &&  month < 10 && month.indexOf(0) == -1 )
   {
      month = "0" + month;
   }

   //일이 두자리가 아닐경우 앞에 "0"을 붙여서 두자리로 만듬"
   if(day.length != 0 &&  day < 10 && day.indexOf(0) == -1 )
   {
      day = "0" + day;
   }

   date = year+month+day;

   if( date.length != 8  )
   {

      if("undefined" == typeof(fieldName)){}
      else
      {
         alertMessage("b01", fieldName)
      }
      return false;
   }


   //날짜가 숫자인지 체크
   if( !checkNumber(date, "일자") )
   {
     return false;
   }

   // 월이 12 보다 큰 수가 있는지 체크
   if(month > 12 || month == 0)
   {
      if("undefined" == typeof(fieldName)){}
      else
      {
         alert(errorMesg2);
      }
      return false;
   }

   // 일 체크
   if(month == 01)
   {
      if(day > 31 || day == 0)
      {
         if("undefined" == typeof(fieldName)){}
         else
         {
            alert(errorMesg3);
         }
         return false
      }
   }
   else if(month == 02)
   {
      //윤년 조사
      if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
      {
         if(day > 29 || day == 0)
         {
            if("undefined" == typeof(fieldName)){}
            else
            {
               alert(errorMesg3);
            }
            return false;
         }
      }
      else
      {
         if(day > 28 || day == 0)
         {
            if("undefined" == typeof(fieldName)){}
            else
            {
               alert(errorMesg3);
            }
            return false
         }
      }
   }
   else if(month == 03)
   {
      if(day > 31 || day == 0)
      {
         if("undefined" == typeof(fieldName)){}
         else
         {
            alert(errorMesg3);
         }
         return false
      }
   }
   else if(month == 04)
   {
      if(day > 30 || day == 0)
      {
         if("undefined" == typeof(fieldName)){}
         else
         {
            alert(errorMesg3);
         }
         return false
      }
   }

   else if(month == 05)
   {
      if(day > 31 || day == 0)
      {
         if("undefined" == typeof(fieldName)){}
         else
         {
            alert(errorMesg3);
         }
         return false
      }
   }

   else if(month == 06)
   {
      if(day > 30 || day == 0)
      {
         if("undefined" == typeof(fieldName)){}
         else
         {
            alert(errorMesg3);
         }
         return false
      }
   }

   else if(month == 07)
   {
      if(day > 31 || day == 0)
      {
         if("undefined" == typeof(fieldName)){}
         else
         {
            alert(errorMesg3);
         }
         return false
      }
   }

   else if(month == 08)
   {
      if(day > 31 || day == 0)
      {
         if("undefined" == typeof(fieldName)){}
         else
         {
            alert(errorMesg3);
         }
         return false
      }
   }

   else if(month == 09)
   {
      if(day > 30 || day == 0)
      {
         if("undefined" == typeof(fieldName)){}
         else
         {
            alert(errorMesg3);
         }
         return false
      }
   }

   else if(month == 10)
   {
      if(day > 31 || day == 0)
      {
         if("undefined" == typeof(fieldName)){}
         else
         {
            alert(errorMesg3);
         }
         return false
      }
   }

   else if(month == 11)
   {
      if(day > 30 || day == 0)
      {
         if("undefined" == typeof(fieldName)){}
         else
         {
            alert(errorMesg3);
         }
         return false
      }
   }

   else if(month == 12)
   {
      if(day > 31 || day == 0)
      {
         if("undefined" == typeof(fieldName)){}
         else
         {
            alert(errorMesg3);
         }
         return false
      }
   }
   return date
}

function clearDay( obj1, obj2, obj3 ){
		if("undefined" != typeof(obj1) ){
			obj1.value = "";
		}	
		if("undefined" != typeof(obj2) ){
			obj2.value = "";
		}	
		if("undefined" != typeof(obj3) ){
			obj3.value = "";
		}	
}
/*//////////////////////////////////////////////////////
------------       풍선 도움말  ---------------
//////////////////////////////////////////////////////*/

//document.onmousemove=mpoint;
// <div id="quick" style="position:absolute; border: 1px solid #000000; z-index:1; background:#DFEBBB; visibility:hidden">
//</div>
// 위 항목을 해당 페이지에 붙이면 쓸수 있다. 

var show;
function viewtip(text)
{
    str="<table width=300 border=0 cellpadding=0 cellspacing=0><tr><td style='padding:2'>"+text+"</td></tr></table>"
	quick.innerHTML=str;
	quick.style.left=event.clientX + document.body.scrollLeft +10;
	quick.style.top=event.clientY + document.body.scrollTop +15;
	if( trim(text) != "" ){
		quick.style.visibility='visible';	
		show=1;	
	}
}
function viewtip2(text,width)
{
    str="<table width='"+width+"' border=0 cellpadding=0 cellspacing=0><tr><td style='padding:2'>"+text+"</td></tr></table>"
	quick.innerHTML=str;
	quick.style.left=event.clientX + document.body.scrollLeft +10;
	quick.style.top=event.clientY + document.body.scrollTop +15;
	if( trim(text) != "" ){
		quick.style.visibility='visible';	
		show=1;	
	}
}
function hiddentip()
{
	show=0;
	quick.style.visibility='hidden';
}

function mpoint()
{
	if(show==1) {
	quick.style.left=event.clientX + document.body.scrollLeft;
	quick.style.top=event.clientY + document.body.scrollTop + 10;
	}
}



/*//////////////////////////////////////////////////////
------------          insert.js           ---------------
//////////////////////////////////////////////////////*/

function showMore(name){ 
	if(document.all[name].style.display!="none"){ 
		document.all[name].style.display="none"; 
	} 
	else{ 
		document.all[name].style.display=""; 
	}
}

// 파일첨부 javascript start
var first=0;
function file_preview() {
var	cHtml = "";
lim = document.forms[0].limit.value;

	cHtml = "<div id=block" + lim + "><input type=file name=\"upload"+lim+"\" size=50 class=\"form\"> <a href=\"javascript:addcase()\">[추가]</a> <a href='javascript:delcase(" + lim + ")'>[삭제]</a><br></div>"

	file_preView.insertAdjacentHTML("BeforeEnd",cHtml);
	//file_preView.insertAdjacentHTML("afterEnd",cHtml);
}
function addcase()
{
	lim = document.forms[0].limit.value;
/*		if (lim > 9) {
			alert("파일은 최대 10개 입니다");
			return;
		}
*/
	document.forms[0].limit.value =  ++lim;
	document.forms[0].attach_num.value++;
	file_preview();
}
function init_pollcase()
{
	if (first==0)
	{
		document.forms[0].limit.value = 1;
		file_preview();
		first=1;
		document.forms[0].attach_num.value=1;
	}
	showMore('file_preView');
}
function delcase(caseno)
{
	if (document.forms[0].limit.value < 2){
		alert("파일은 최소 1개 이상입니다.");
		return;
	}
	document.forms[0].limit.value--;
	document.all["block"+caseno].outerHTML = "";
	document.forms[0].attach_num.value--;
}
//	파일첨부 javascript end

