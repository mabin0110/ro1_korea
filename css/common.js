/**
 * �Է°��� NULL���� üũ
 */
function isNull2(input) {
    if (input.value == null || input.value == "") {
        return true;
    }
    return false;
}
/**
 * �Է°��� �����̽� �̿��� �ǹ��ִ� ���� �ִ��� üũ
 */
function isEmpty(input) {
    if (input.value == null || input.value.replace(/ /gi,"") == "") {
		input.focus();
        return true;
    }
    return false;
}
/**
 * �Է°��� Ư�� ����(chars)�� �ִ��� üũ
 * Ư�� ���ڸ� ������� ������ �� �� ���
 * ex) if (containsChars(form.name,"!,*&^%$#@~;")) {
 *         alert("�̸� �ʵ忡�� Ư�� ���ڸ� ����� �� �����ϴ�.");
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
 * �Է°��� Ư�� ����(chars)������ �Ǿ��ִ��� üũ
 * Ư�� ���ڸ� ����Ϸ� �� �� ���
 * ex) if (!containsCharsOnly(form.blood,"ABO")) {
 *         alert("������ �ʵ忡�� A,B,O ���ڸ� ����� �� �ֽ��ϴ�.");
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
 * �Է°��� Ư�� ����(chars)������ �Ǿ��ִ��� üũ("1111")
 * �α��ν� ���̵�, ��й�ȣüũ�� ���
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
 * �Է°��� ù��° ���ڰ� Ư������(chars)�� �ԷµǾ����� üũ("1111")
 * �α��ν� ���̵�, ��й�ȣüũ�� ���
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
 * �Է°��� ���ĺ����� üũ
 * �Ʒ� isAlphabet() ���� isNumComma()������ �޼ҵ尡
 * ���� ���̴� ��쿡�� var chars ������ 
 * global ������ �����ϰ� ����ϵ��� �Ѵ�.
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
 * �Է°��� ���ĺ� �빮������ üũ
 */
function isUpperCase(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return containsCharsOnly(input,chars);
}

/**
 * �Է°��� ���ĺ� �ҹ������� üũ
 */
function isLowerCase(input) {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(input,chars);
}

/**
 * �Է°��� ���ڸ� �ִ��� üũ
 */
function isNumber(input) {
    var chars = "0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * �Է°��� ���ĺ�,���ڷ� �Ǿ��ִ��� üũ
 */
function isAlphaNum(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * �Է°��� ����,���(-)�� �Ǿ��ִ��� üũ
 */
function isNumDash(input) {
    var chars = "-0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * �Է°��� ����,�޸�(,)�� �Ǿ��ִ��� üũ
 */
function isNumComma(input) {
    var chars = ",0123456789";
    return containsCharsOnly(input,chars);
}
/**
 * �Է°��� ����,�޸�(,),���(-)�� �Ǿ��ִ��� üũ
 */
function isNumCommaDash(input) {
    var chars = "-,0123456789";
    return containsCharsOnly(input,chars);
}
/**
 * �Է°��� ����,�޸�(,),���(-),��Ʈ(.)�� �Ǿ��ִ��� üũ
 */
function isNumCommaDashDot(input) {
    var chars = "-,.0123456789";
    return containsCharsOnly(input,chars);
}
/**
 * �Է°��� ����ڰ� ������ ���� �������� üũ
 * �ڼ��� format ������ �ڹٽ�ũ��Ʈ�� 'regular expression'�� ����
 */
function isValidFormat(input,format) {
    if (input.search(format) != -1) {
        return true; //�ùٸ� ���� ����
    }
    return false;
}

/**
 * �Է°��� �̸��� �������� üũ
 */
function isValidEmail(input) {
//    var format = /^(\S+)@(\S+)\.([A-Za-z]+)$/;
    var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
    return isValidFormat(input,format);
}

// �̸��� ���� üũ......
function checkEmailAddress(field) 
{
   var goodEmail = field.match(/\b(^(\S+@).+((\.com)|(\.net)|(\.pe.kr)|(\.re.kr)|(\.co.kr)|(\.org)|(\..{2,2}))$)\b/gi);

   if (goodEmail){ // ������ �߰��ô� (\.������)�� �߰��Ͻø� �˴ϴ�. ^^ (��)
      return true
   } else {
      return false
   }
}

/**
 * �Է°��� ��ȭ��ȣ ����(����-����-����)���� üũ
 */
function isValidPhone(input) {
    var format = /^(\d+)-(\d+)-(\d+)$/;
    return isValidFormat(input,format);
}
/**
 * ���õ� ������ư�� �ִ��� üũ
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
 * ���õ� üũ�ڽ��� �ִ��� üũ
 */
function hasCheckedBox(input) {
    return hasCheckedRadio(input);
}

/**
 * �Է°��� ����Ʈ ���̸� ����
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
// ��   �� : ���޹��� mode ���� action�� ������ �ְ� form�� submit()�Ѵ�.
// ��� �� : send("deleteMulti", "IGEDAA4E.jsp") # �ۼ��� : ������ T.011-9972-5423
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
		flag = confirm('����Ͻðڽ��ϱ�?');	
	}else if(mode == 'update'){
		flag = confirm('�����Ͻðڽ��ϱ�?');	
	}else if(mode == 'delete'){
		flag = confirm('�����Ͻðڽ��ϱ�?');		
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
			if(confirm('���õ� ' + tot + '���� ����� �����Ͻðڽ��ϱ�?')){
				form.action = action;
				form.submit();
			}
	}
	else
			alert('������ ����� �������ּ���!!');

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
// ��   �� : ��� ȭ�鿡�� üũ�ڽ��� ���� �����Ͽ� ������ �� ���ÿ��θ� �����ϰ�, ���õ��� ���� key�� ���� "" ó���Ѵ�.
// 
//
//-------------------------------------------------------------------------------------------------------------
function deleteM(inputElement1, inputElement2, inputElement3, action, form){
    if(isNullValue(form)) {
		form = document.form1;
	}
    // üũ�ڽ��� �ϳ� �̻� ���õǾ� �ִ����� �˾ƺ���.
    for(i=0, j=0; i<form.elements.length; i++){
   		var e1 = form.elements[i];
   		if(e1.name == "chkOne" && e1.checked == true) {
   		     j++; break;
   		}
   	}
   	// �ϳ��� ���õǾ� ���� �ʴٸ� ���� �޼����� �����ش�.
   	if (j == 0) {
   	   alert("������ �ڷḦ �����Ͻʽÿ�!!");
   	   return;

   	// �ϳ��̻� ���õǾ� �ִٸ� ���õǾ� ���� ���� Key Element�� ���� ""�� ó���Ѵ�.
   	} else if (j > 0){
   	    ans = confirm("�����Ͻðڽ��ϱ�?");
   	    if (ans == false) return;
        for(i=0; i<form.chkOne.length; i++){
       		if(form.chkOne[i].checked == false) {
				if(inputElement1 != null && inputElement1 != ""){
				inputElement1[i].value = ""; //ȭ�鸶�� dependant�� Key Element��1.
				}
				if(inputElement2 != null && inputElement2 != ""){
					inputElement2[i].value = ""; //ȭ�鸶�� dependant�� Key Element��2.
				}
				if(inputElement3 != null && inputElement3 != ""){
					inputElement3[i].value = ""; //ȭ�鸶�� dependant�� Key Element��3.
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
    // üũ�ڽ��� �ϳ� �̻� ���õǾ� �ִ����� �˾ƺ���.
    for(i=0, j=0; i<form.elements.length; i++){
   		var e1 = form.elements[i];
   		if(e1.name == "chkOne" && e1.checked == true) {
   		     j++; break;
   		}
   	}
   	// �ϳ��� ���õǾ� ���� �ʴٸ� ���� �޼����� �����ش�.
   	if (j == 0) {
   	   alert("������ �ڷḦ �����Ͻʽÿ�!!");
   	   return;

   	// �ϳ��̻� ���õǾ� �ִٸ� ���õǾ� ���� ���� Key Element�� ���� ""�� ó���Ѵ�.
   	} else if (j > 0){
   	    ans = confirm(j+"���� �ڷḦ �����Ͻðڽ��ϱ�?");
   	    if (ans == false) return;
        
		send("deleteM", action , form);
    }
}
//== $3 =======================================================================================================
// ��   �� : ��� ȭ�鿡�� üũ�ڽ� ��ü�� ������ �� �ְ� toggle�� �����ϴ�.
// ��� �� : toggleCheck();    
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
		//��ü����
		for(i=0; i<form.elements.length; i++){
			var e = form.elements[i];
			var objectType = e.type;

			if(objectType=='checkbox') {	
				e.checked=true;

			}
		}

	}else{
		//��ü���� ����

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
// ��   �� : null üũ
// ��� �� : isNull(Element�̸�, "��Ī")
//-------------------------------------------------------------------------------------------------------------
function isNull(inputElement, title){
	if (((inputElement.value == null)||(inputElement.value.length == 0)) && (inputElement.type != "hidden")){
		if(!isNullValue(title)){
			alert("\"" + title + "\" �� ���� �Է��Ͽ� �ֽʽÿ�!")		
		} else {
			alert("���� �Է��Ͽ� �ֽʽÿ�!");
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
			alert("\"" + title + "\"  ��(��) �Է��Ͽ� �ֽʽÿ�!")
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
// ��   �� : null üũ
// ��� �� : isNullValue(inputValue)
//-------------------------------------------------------------------------------------------------------------
function isNullValue(inputValue){
	
	if (inputValue == null || inputValue.length == 0 || inputValue == ""){
		return true;
	}else{
		return false;
	}
}

//== $5 =======================================================================================================
// ��   �� : ComboBox�� null üũ
// ��� �� : isNullCombo(Combo Element�̸�)
//-------------------------------------------------------------------------------------------------------------

function isNullCombo(inputElement, title){
	if((inputElement.options[inputElement.selectedIndex].value == "")||(inputElement.options[inputElement.selectedIndex].value.length == 0)){
		if(!isNullValue(title)){
			alert("\"" + title + "\" �� ���� �����Ͽ� �ֽʽÿ�!");
		} else {
			alert("���� �����Ͽ� �ֽʽÿ�!");
		}
			inputElement.focus();
			return true;
	}else{
		return false;
	}
}


//** $8 *******************************************************************************************************
// ��   �� : ������ Text Element�� Value���� ',' '/'�� ���� ������ Mark�� ã�Ƽ� �����ϰ�,
//           �� ������ ���� return �Ѵ�.
// ��� �� : removeMark(form1.purchaseAmount, ',')
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
// ��   �� : ������ Value���� ',' '/'�� ���� ������ Mark�� ã�Ƽ� �����ϰ�,
//           �� ������ ���� return �Ѵ�.
// ��� �� : removeMarkValue('9,876', ',');
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
// ��   �� : ������ Text Element�� Value���� ',' '/'�� ���� ������ Mark�� ã�Ƽ� �������ش�.
// ��� �� : deleteMark(form1.purchaseAmount, ',')
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
// ��   �� : ������ ���̿� ��ġ�ϴ��� �ڸ��� Ȯ���ϱ�
// ��� �� : if( isFixedLength(document.form1.bizNo) ) send('insert', 'IGEDAA_end.jsp'); 
//-------------------------------------------------------------------------------------------------------------
function isFixedLength(inputElement, fixedLength, title) {
	imputValue = inputElement.value;
	if(imputValue.length != fixedLength){
			if(isNullValue(title)){
				alert("�Է� �� : \"" + imputValue + "\"  <- \"" + fixedLength + "\"�ڸ� ���̷� �Է��Ͻʽÿ�.");
				inputElement.focus();
				return false;
			}else{
				alert("\"" + title + "\" �Է� �� : \"" + imputValue + "\"  <- \"" + fixedLength + "\"�ڸ� ���̷� �Է��Ͻʽÿ�.");
				inputElement.focus();
				return false;
			}
	}
	return true;
}

//== $17 ======================================================================================================
// ��   �� : PopUp â �����ϱ�
// ��� �� : <a href="javascript: openWindow('../../com/SearchAccntUnitCode.jsp?codeId=accntCode&nameId=accntName' , 'ȸ������ڵ�', '', '');">
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
// ��   �� : �Ű������� ���޵� Element �� value�� ""�� ����� �ش�.(Code popUp â ������ ���)
// ��� �� : <input type="text" name="iAccntCode" id="accntCodeId" value="" 
//			onChange="javascript: toVacant(form1.bizCode[<%= i%>]); toVacant(form1.bizName[<%= i%>]); toVacant(form1.bdgtCtrler[<%= i%>]);">
//-------------------------------------------------------------------------------------------------------------
function toVacant(inputElement) {    
	inputElement.value = "";	
}

//== $20-1 ======================================================================================================
// ��   �� : �Ű������� ���޵� id ���� �ش��ϴ� Element �� value�� ""�� ����� �ش�.(Code popUp â ������ ���)
// ��� �� : <input type="text" name="iAccntCode" id="accntCodeId" value="" onChange="javascript: toEmpty('accntNameId');">
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
// ��   �� : �Ű������� ���޵� name ���� �ش��ϴ� Element �� value�� ""�� ����� �ش�.(Code popUp â ������ ���)
// ��� �� : <input type="text" name="iAccntCode"  value="" onChange="javascript: toEmpty('accntName');">
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
// ��   �� : �Է¹��� ������ ���� ���� �����ֱ�
// ��� �� : <input type="text" name="test" onClick="javascript: alert(trim(this.value));">
//-------------------------------------------------------------------------------------------------------------
function trim(inputValue){
	var sLeftTrimed = inputValue.replace(/^\s+/,"");
	var sBothTrimed = sLeftTrimed.replace(/\s+$/,"");
	return(sBothTrimed);
}
//== $22 ======================================================================================================
// ��   �� : value�� ������ �ѱ��� ��ŭ ���� �տ� "0"�� ä���ش�. ex.) �Է°��� "1"�� ��� �ѱ��� "cnt"�� 3 �̸� "001"
// ��� �� : <input type="text" name="test" onChange="javascript: addZero(this, 3);">
// �� �� ��: 2001.06.19
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
// ��   �� : Ư�� �޺��� �ش� ���� ���õǵ��� �ϱ�.
// ��� �� : <input type="text" name="test" onChange="javascript: setComboSelected(document.form1.accntUnitCodeCombo, this.value);">
//-------------------------------------------------------------------------------------------------------------
function setComboSelected(combo, value){     
	for(i=0; i<combo.length; i++){
		if(combo.options[i].value == value){
			combo.options[i].selected = true;
		}
	}
}

//== $25 ======================================================================================================
// ��   �� : ���޵Ǵ� ���� �ѱ��� ���ԵǾ� �ִ����� �˻��Ͽ� ������ true, ������ false�� return�ϱ�.
// ��� �� : if( isKorCharValue(document.form1.startDate.value) ) {  } 
//-------------------------------------------------------------------------------------------------------------
function isKorCharValue(inputValue){
	var ch;
	for(var i=0; i<inputValue.length; i++){
		ch = inputValue.charAt(i);
		if (escape(ch).length > 4){ // �ѱ��̸�
			return true;
		}else {	
			return false;
		}
	}
}

//== $25-1 ======================================================================================================
// ��   �� : ���޵Ǵ� Element�� �ѱ��� ���ԵǾ� �ִ����� �˻��Ͽ� ���� ��쿡�� ��� ����, 
//			 �ִ� ��쿡�� �޼��� �����ְ�, �ش� Element�� focus �ֱ�.			 
// ��� �� : if( isKorChar(form1.startDate, title) ) {  } 
//-------------------------------------------------------------------------------------------------------------
function isKorChar(inputElement, title){
	var inputValue = inputElement.value;
	if(isKorCharValue(inputValue)) {
		if(isNullValue(title)){		
			alert("�Է� �� : \"" + inputValue + "\"   <- �ݾ� �Է¿��� ���ڸ� ����Ͻ� �� �����ϴ�.");
		} else {
			alert("\"" + title + "\" �Է� �� : \"" + inputValue + "\"   <- �ݾ� �Է¿��� ���ڸ� ����Ͻ� �� �����ϴ�.");
		}
		inputElement.focus();
		return;
	}
}


/*
function checkCalendarFromTo(date1, date2, fieldName1, fieldName2)
- �Ⱓ�� üũ
date1 :  ù��° ���ڰ�
date2 :  �ι�° ���ڰ�
fieldName1 : ù��° ���ڰ��� �̸�
fieldName2 : �ι�° ���ڰ��� �̸�
*/
function checkCalendarFromTo(date1, date2, fieldName1, fieldName2)
{
   if(date1== false || date2 == false )
   {
      return false;
   }

   var gap = eval(date2) - eval(date1);  // �޾ƿ� ��¥���� ���ڷ� �ٲ��� ����Ѵ�

   // �������ڿ��� �������ڸ� ������ 0���� ���ٸ�(�������ڰ� ũ�ٸ�)
   if(gap < 0 )
   {
      alert(fieldName1+"�� ��¥�� " +fieldName2 + "�� ��¥���� �����̰ų� �����Ͽ��� �մϴ�");
      return false;
   }

   return true;
}

/* ������� �����ִ� �Լ�
��,���� ���ڸ��� �ƴҰ�� 0������ ���ڸ��� ����
*/
function sumCalendar(year, month, day)
{
   //���� ���ڸ��� �ƴҰ�� �տ� "0"�� �ٿ��� ���ڸ���  ����"
   if(month.length != 0 &&  month < 10 && month.indexOf(0) == -1 )
   {
      month = "0" + month;
   }

   //���� ���ڸ��� �ƴҰ�� �տ� "0"�� �ٿ��� ���ڸ��� ����"
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
// ��   �� : �ֹε�Ϲ�ȣ �´��� Ȯ���ϱ�
// ��� �� : if( checkResidentNo(document.form1.residentNo1, document.form1.residentNo2) == true ) send('insert', 'IGEDAA_end.jsp'); 
//-------------------------------------------------------------------------------------------------------------
function checkResidentNo (inputElement1, inputElement2) {
// �ֹε�Ϲ�ȣ�� �Է��Ͽ�����  üũ 
	if(inputElement1.value.length == 0 || form. joo1.value.length != 6) {
        alert("�ֹε�Ϲ�ȣ ���ڸ��� 6�ڸ� ���ڸ� �Է��Ͽ� �ֽʽÿ� ");
        inputElement1.focus();
        return false;
	}

	// �ֹε�Ϲ�ȣ ��  �κп��� ��������� �˾Ƴ� 
	var year = inputElement1.value.substring(0,2);
	var month = inputElement1.value.substring(2,4); 
	var day = inputElement1.value.substring(4,6);
	// �ֹε�Ϲ�ȣ ��  �κп��� ���� ����  ���� ã�Ƴ� 
	var sex = inputElement2.value.substring(0,1);

	// �ֹε�Ϲ�ȣ ��  �κ� üũ�ϱ� 
	if ((year <25 || month<1 || month>12 ||day<1) ) {
	  	    alert ("�߸��� �ֹε�Ϲ�ȣ �Դϴ�.") 
	  	    inputElement1.focus() 
	  	    return false 
	}
	
	// �ֺ��Ϲ�ȣ ��  �κ� üũ�ϱ� 
	if ( (sex != 1 && sex != 2 ) || (inputElement2.value.length != 7 ) ) {
	 	    alert("�ֹε�Ϲ�ȣ ���ڸ� ���ڰ� ��Ȯ���� Ȯ���Ͽ� �ֽʽÿ� ");
	 	    inputElement2.focus() 
	 	    return false 
	}
	
	// �ֹε�Ϲ�ȣ �˰���  üũ 
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
	   	    alert ("�߸��� �ֹε�Ϲ�ȣ �Դϴ�.") 
	   	    inputElement2.focus() 
	   	    return false; 
	}
	return true 
}

//== $14 ======================================================================================================
// ��   �� : �ſ�ī���ȣ �´��� Ȯ���ϱ�
// ��� �� : if( checkCreditNo(document.form1.checkCreditNo) == true ) send('insert', 'IGEDAA_end.jsp'); 
//-------------------------------------------------------------------------------------------------------------
function checkCreditNo(inputElement) {
	creditNo = inputElement.value;	
	if (creditNo.length > 19)	// Encoding only works on cards with less than 19 digits
	   alert("�ſ�ī�� ���ڴ� 19�ڸ� �̳��� �Է��Ͽ� �ֽʽÿ�!");
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
	   alert("�Է��Ͻ� \"" + creditNo + "\" �� �߸��� �ſ�ī���ȣ �Դϴ�.");
	   inputElement.focus();	   
	   return false;	  		//    the next multiple of 10.
	}
} 
//����� ��Ϲ�ȣ üũ
function        chkWorkNumb(strNumb) 
{ 

        strNumb        =        removeMarkValue(strNumb,"-"); 
        if        (strNumb.length        !=        10) 
        { 
                alert("����ڵ�Ϲ�ȣ�� �߸��Ǿ����ϴ�."); 
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
                alert("����ڵ�Ϲ�ȣ�� �߸��Ǿ����ϴ�."); 
                return false; 
        } 
        return        true; 
} 
// �ܱ��� �ֹι�ȣ üũ

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

//���ε�Ϲ�ȣ üũ 
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
		v_vndr_reg_no2 = Math.floor(v_vndr_reg_no1 / 10);	//�� 
   		v_vndr_reg_no3 = parseInt(v_vndr_reg_no1 % 10);		//������ 
		var chkdigit = str.substring(12, 13);	//�����˻���ȣ     
	   	vndr_reg_chk = 10 - v_vndr_reg_no3; 
	   	if ( vndr_reg_chk == 10 )	vndr_reg_chk = 0; 
	    if ( chkdigit == vndr_reg_chk ) { 
	    	return 'Y'; 
   		} 
   		else { 
   			return 'N'; 
   		} 
   	} 

// �ֹ�(J), ����(L), ����ڵ�Ϲ�ȣ(B) üũ......
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


if(len == 14) // �ֹ�, ���� ��Ϲ�ȣ 
{ 

no_13 = str.substr(12,1);
no_14 = str.substr(13,1); 
//no_13 = substr(str, 12,1); 
//no_14 = substr(str, 13,1); 

if(no_7 != "-") 
{ return 0; } 
if((no_8 > 0) && (no_8 < 5) && (gubun=="J") ) //�ֹε�Ϲ�ȣ(2000�� ���� ����ڴ� 
{ 
no_ck += no_1 * 2; //���ڸ� ù��° ������ ������ ��� 3, 
no_ck += no_2 * 3; // ������ ��� 4�� �ο��ȴ�.) 
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

} else if( (no_8 > 4) && (no_8 < 7) && (gubun=="J") ) //  �ܱ��� ���ε�Ϲ�ȣ
{
	if (fgn_no_chksum( removeMarkValue(str,"-") ) == true){
      return 1;
    } else {
      return 0;
  	}
} else if( no_8 >= 0 && (gubun=="L") ) // ���ε�Ϲ�ȣ 
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


if(len == 12) // ����ڵ�Ϲ�ȣ 
{ 
if((no_4 != "-") || (no_7 != "-")) 
{ return 0; } 

        strNumb        =        removeMarkValue(str,"-"); 
        if        (strNumb.length        !=        10) 
        { 
                //alert("����ڵ�Ϲ�ȣ�� �߸��Ǿ����ϴ�."); 
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
                //alert("����ڵ�Ϲ�ȣ�� �߸��Ǿ����ϴ�."); 
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
// �ֹ�, ����, ����ڵ�Ϲ�ȣ üũ  ��.........

// ���ε�� ��Ŀ�� �̵�
function frmFocus(obj)
{
	   obj.focus();
	   return false;
} 

//�� ����
function frmReset(frmObj)
{
	if(frmObj == null){
		frmObj = document.form1;
	}
	frmObj.reset();
	frmFocus(frmObj);
}

// ���� ������
function frmDelete(url,form)
{
	if(form == null){
		form = document.form1;
	}
	if(confirm('�����Ͻðڽ��ϱ�?'))
	{
	 form.action=url;
	 form.submit();
	}
}
// ���� ������
function frmUpdate(url)
{
	form = document.form1;
	if(confirm('�����Ͻðڽ��ϱ�?'))
	{
	 form.action=url;
	 form.submit();
	}
}
// ���� ��Ͻ�
function frmInsert(url)
{
	form = document.form1;
	if(confirm('����Ͻðڽ��ϱ�?'))
	{
	 form.action=url;
	 form.submit();
	}
}
/* ��ȭ��ȣ�� �ѽ���ȣ ���� �Է½� ���� üũ*/
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

// input type ��ü�� ���ڸ� �ԷµǷ�
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
�Է�â �ڵ��̵� ��ũ��Ʈ
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
tabŰ�� �������� ���ϴ°��� focus�� ���� �Ѵ�
*/
function checkTab(xx)
{
	if(event.keyCode == 0)
	{
		xx.focus();
	}
}
//����ũ�� ����
function calc_length(value, size) { 
		var temp; 
		var count = 0; 
		var str   = new String(value);

		for (i=0 ; i<str.length ; i++){ 
			temp = str.charAt(i) ; 
			if (escape(temp).length > 4) { count += 2; } 
			else if (temp == '\r' && str.charAt(i+1) == '\n') { count += 2; } // \r\n�� ���
			else if (temp != '\n') { count++; } 
		}
		if(parseInt(count)>parseInt(size)){
			alert(count + " byte �Դϴ� : "+ size + " byte���� �Է°���");			
			return false;	
		}
		else return true;

	} 
// �˻����� �˻� --------------------------------
function searchchk(){
	var len, i, cnt = 0;
	if(search.fStr.value == ''){
		alert('�˻��� ���ڿ��� �Է��ϼ���!!');
		search.fStr.focus();
		return;
	}
	len = search.fStr.value.length;
	// ������ ������ ��� ��� ���� �κ�,
	for(i=0 ; i< len ; i++){
		if(search.fStr.value.charAt(i) == " ") cnt++;
	}
	// �����̽����� ���� ��� return ��Ų��.
	if(cnt == len){
		alert('�˻��� ���ڿ��� �Է��ϼ���!!');
		search.fStr.select();
		return;
	}
	search.fStr.value = search.fStr.value.replace(/\'/,"");
	search.submit();
}

// ���콺 ������ ȿ�� �ֱ� ---------------------
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

// �ѹ��� ��ü�� ��� �����ϰ� �ϴ� �Լ�
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
// �ѹ��� ��ü�� ��� ������Ű�� �Լ�
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
// ��ü ���� �� ���� ��� �Լ� 
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
üũ�ڽ����� Enter���� ������ üũ���¸� ����������
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
Enter�� üũ�Ͽ� Enter �̸� true �ƴϸ� false�� ��ȯ
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
���ڿ� �յڿ��ִ� ���������
�ۼ��� : �����
*/
function trim2( arg )
{
   var st = 0;
   var len = arg.length;

   //���ڿ��տ� ���鹮�ڰ� ��� �ִ� Index ����
   while( (st < len) && (arg.charCodeAt(st) == 32) )
   {
      st++;
   }
   //���ڿ��ڿ� ���鹮�ڰ� ��� �ִ� Index ����
   while( (st < len) && (arg.charCodeAt(len-1) == 32) )
   {
      len--;
   }
   return ((st > 0) || (len < arg.length)) ? arg.substring(st, len) : arg;
}


/* �ش��ϴ� �κ��� �ִ���� üũ*/
function frmCom(obj)
{
	var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`0123456789-=\~!@#$%^&*()_+|,./<>?";
	var rleng=0;   //�Էµ� ����
	var cleng=0;  // �Է� �ִ����
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
		alert("[" + obj.id + "]�� �ѱ� " + parseInt(cleng/2) + "��, �Ǵ� ���� " + cleng + "�� ������ �Է��� �ֽʽÿ�.");  
		return false; 
	}
	else return true;
}
/*Disabled �� ��Ʈ�� Ȱ��ȭ*/
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

/*��üũ�� �� submit*/
function confirm_form(frmObj,min)
{  
	var i;
	var elm;
	var trimVal;
	for(i=0 ; i<frmObj.elements.length ; i++)
	{
		elm = frmObj.elements[i];		
		trimVal = trim(elm.value);

		//"0"�� �����Ҷ� => �ʼ� �Է»����϶�
		if((elm.className).indexOf("0") != -1)
		{
			if(trimVal == "")   //���� ������
			{
				alert("[" + elm.id + "]�� �Է��� �ֽʽÿ�.");				
				return frmFocus(elm);
			}
			if(frmCom(elm) == false)  return frmFocus(elm);  //����üũ
		}
		//"1"�� �����Ҷ� => ���ڸ� �Է��ؾ� �Ҷ�
		if((elm.className).indexOf("1") != -1)
		{  
			if(trimVal != "")  //���� ������
			{
				if(js_numberCheck(trimVal) == false)  //���� ���ڰ� �ƴҶ�
				{ 
					alert("[" + elm.id + "]�� ���ڷ� �Է��� �ֽʽÿ�.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm); //���� üũ
			}
		}		
		//"2"�� �����Ҷ� => ���ĺ��� �Է��ؾ� �Ҷ�
		if((elm.className).indexOf("2") != -1)
		{  
			if(trimVal != "") //���� ������
			{
				if(isAlphabet(elm) == false)  //���� ���ĺ��� �ƴҶ�
				{ 
					alert("[" + elm.id + "]�� ���ĺ����� �Է��� �ֽʽÿ�.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		//"3"�� �����Ҷ� => ���ĺ��� ���ڸ� �Է��ؾ� �Ҷ�
		if((elm.className).indexOf("3") != -1)
		{  
			if(trimVal != "") //���� ������
			{
				if(isAlphaNum(elm) == false)  //���� ���ĺ�,���ڰ� �ƴҶ�
				{ 
					alert("[" + elm.id + "]�� ���ĺ��� ���ڷ� �Է��� �ֽʽÿ�.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		//"4"�� �����Ҷ� => �ѱ�������� ������
		if((elm.className).indexOf("4") != -1)
		{  
			if(trimVal != "") //���� ������
			{
				if(isKorCharValue(trimVal) == false)  //���� �ѱ��϶�
				{ 
					alert("[" + elm.id + "]���� �ѱ��� �Է��� �� �����ϴ�.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		//"5"�� �����Ҷ� => Ư������������� ����
		if((elm.className).indexOf("5") != -1)
		{  
			if(trimVal != "") //���� ������
			{
				if(containsChars(elm,"!,&^%$#@~;") == true)  //Ư�������϶�
				{ 
					alert("[" + elm.id + "]���� Ư�� ���ڸ� ����� �� �����ϴ�.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}	
		//"6"�� �����Ҷ� => �ִ��ڸ��� üũ,�ڸ��� ������Ŵ
		if((elm.className).indexOf("6") != -1)
		{  
			if(trimVal != "") //���� ������
			{
				if(elm.maxLength != trimVal.length)  //�ִ��ڸ����� �ƴ� ���϶�
				{ 
					alert("[" + elm.id + "]�� "+ elm.maxLength + "�ڸ��� �Է��ϼ���.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		//"7"�� �����Ҷ� => �ּ��Է¼� üũ(�Ƶ� üũ��)
		if((elm.className).indexOf("7") != -1)
		{  
			var m = 6;
			if (min != null){
				m = min;
			}
			if(trimVal != "") //���� ������
			{
				if( trimVal.length < m)  //
				{ 
					alert("[" + elm.id + "]�� "+m+"~"+elm.maxLength+" �ڸ��� �Է��ϼ���.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		//"8"�� �����Ҷ� => �̸��� üũ
		if((elm.className).indexOf("8") != -1)
		{  
			if(trimVal != "") //���� ������
			{
				//if(isValidEmail(elm) == false )  //
				if(checkEmailAddress(trimVal) == false ) 
				{ 
					alert("[" + elm.id + "]��  ���Ŀ� �°� �Է��ϼ���");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		//"9"�� �����Ҷ� => password üũ
		if((elm.className).indexOf("9") != -1)
		{  
			if(trimVal != "") //���� ������
			{
				if(trimVal != trim(frmObj.elements[i-1].value) )  //
				{ 
					alert("[" + frmObj.elements[i-1].id + "]�� ��ġ���� �ʽ��ϴ�.  �ٽ� �Է��ϼ���");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		//"L"�� �����Ҷ� => ���ι�ȣ  üũ
		if((elm.className).indexOf("L") != -1)
		{  
			if(trimVal != "") //���� ������
			{
				if( check(trim(frmObj.elements[i-1].value),trimVal,'','L') == false )  //
				{ 
					alert("�߸��� " + elm.id + " �Դϴ�. �ٽ� �Է��ϼ���");
					return frmFocus(frmObj.elements[i-1]);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		//"J"�� �����Ҷ� => �ֹε�Ϲ�ȣ  üũ
		if((elm.className).indexOf("J") != -1)
		{  
			if(trimVal != "") //���� ������
			{
				if( check(trim(frmObj.elements[i-1].value),trimVal,'','J') == false )  //
				{ 
					alert("�߸��� " + elm.id + " �Դϴ�. �ٽ� �Է��ϼ���");
					return frmFocus(frmObj.elements[i-1]);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		//"l"�� �����Ҷ� => ���ι�ȣ  üũ2
		if((elm.className).indexOf("l") != -1)
		{  
			if(trimVal != "") //���� ������
			{
				if( !isNumDash(elm) )  //
				{ 
					alert("[" + elm.id + "]��  ���� �Ǵ� '-'�� �Է��ϼ���.");
					return frmFocus(elm);
				}
				if( checktotal(trimVal,'L') == false )  //
				{ 
					alert("�߸��� " + elm.id + " �Դϴ�. �ٽ� �Է��ϼ���");
					return frmFocus(elm);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		//"j"�� �����Ҷ� => �ֹε�Ϲ�ȣ  üũ2
		if((elm.className).indexOf("j") != -1)
		{  
			if(trimVal != "") //���� ������
			{
				if( !isNumDash(elm) )  //
				{ 
					alert("[" + elm.id + "]��  ���� �Ǵ� '-'�� �Է��ϼ���.");
					return frmFocus(elm);
				}
				if( checktotal(trimVal,'J') == false )  //
				{ 
					alert("�߸��� " + elm.id + " �Դϴ�. �ٽ� �Է��ϼ���");
					return frmFocus(elm);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		//"B"�� �����Ҷ� => ����� ��� ��ȣ üũ
		if((elm.className).indexOf("B") != -1)
		{  
			if(trimVal != "") //���� ������
			{
				if( check(trim(frmObj.elements[i-2].value),trim(frmObj.elements[i-1].value),trimVal) == false )  //
				{ 
					alert("�߸��� " + elm.id + " �Դϴ�. �ٽ� �Է��ϼ���");
					return frmFocus(frmObj.elements[i-2]);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		//"b"�� �����Ҷ� => ����� ��� ��ȣ üũ2
		if((elm.className).indexOf("b") != -1)
		{  
			if(trimVal != "") //���� ������
			{
				if( !isNumDash(elm) )  //
				{ 
					alert("[" + elm.id + "]��  ���� �Ǵ� '-'�� �Է��ϼ���.");
					return frmFocus(elm);
				}
				if( checktotal(trimVal) == false )  //
				{ 
					alert("�߸��� " + elm.id + " �Դϴ�. �ٽ� �Է��ϼ���");
					return frmFocus(elm);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		//"C"�� �����Ҷ� => -.,����  üũ
		if((elm.className).indexOf("C") != -1  || (elm.className).indexOf("F") != -1 )
		{  
			if(trimVal != "") //���� ������
			{
				if( !isNumCommaDashDot(elm) )  //
				{ 
					alert("[" + elm.id + "]��  ���ڷ� �Է��ϼ���");
					return frmFocus(elm);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		//"D"�� �����Ҷ� => '-',����  üũ
		if((elm.className).indexOf("D") != -1  )
		{  
			if(trimVal != "") //���� ������
			{
				if( !isNumDash(elm) )  //
				{ 
					alert("[" + elm.id + "]��  ���� �Ǵ� '-'�� �Է��ϼ���.");
					return frmFocus(elm);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		//"s"�� �����Ҷ� => ���ĺ�,���鸸  �Է��ؾ� �Ҷ�
		if((elm.className).indexOf("s") != -1)
		{  
			if(trimVal != "") //���� ������
			{
				if(isAlphabetSpace(elm) == false)  //���� ���ĺ�,������ �ƴҶ�
				{ 
					alert("[" + elm.id + "]�� ���ĺ��� �������� �Է��� �ֽʽÿ�.");
					return frmFocus(elm);
				}
				//if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
		
		//"K"�� �����Ҷ� => ���� ���ڷθ� �Է����� ��
		if((elm.className).indexOf("K") != -1)
		{
			if(trimVal != "") //���� ������
			{
				if(OneCharsCheck(elm) == false)  //���� ���ĺ�,������ �ƴҶ�
				{ 
					alert("[" + elm.id + "]�� ���� ���ڷθ� �Է��ϼ̽��ϴ�. �ٽ� �Է��� �ֽʽÿ�.");
					return frmFocus(elm);
				}
			}
			
		}
		//"X"�� �����Ҷ� => ù��° ���ڰ� ���ĺ��� �Է��ؾ� �Ҷ�
		if((elm.className).indexOf("X") != -1)
		{  
			if(trimVal != "") //���� ������
			{
				if(isFirstAlphabet(elm) == false)  //���� ���ĺ��� �ƴҶ�
				{ 
					alert("[" + elm.id + "]�� ù��° ���ڴ� �����ڷ� �Է��� �ֽʽÿ�.");
					return frmFocus(elm);
				}
				if(frmCom(elm) == false)  return frmFocus(elm);  //���� üũ
			}
		}
	}// end for
	return true;
} 


////�߰� ////

// �ε�� �޸��� �߰��Ͽ� �����ش�
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
		alert("���ڸ� �Է� �����մϴ�.");
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
	//alert("����:"+msg);
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

//Ű���� Ŭ�������ӿ��� üũ�� �׸��� ã�Ƴ��� �̺�Ʈ �߻���Ų��.
function onKeyupCheck(obj){


		if((obj.className).indexOf("C") != -1)	// integer
		{
			toNumberFormat2(obj);
		}	
		if((obj.className).indexOf("F") != -1)	// float
		{
			toNumberFormat(obj);
		}
		if((obj.className).indexOf("P") != -1)	 // �ۼ�Ʈ �� 
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
		alert(" �߸��� �����Դϴ� ");
		removedValue = removeMark(inputElement,',');				
		inputElement.value = removedValue.substring(0,2);		
		return;
	}
}
//== $9 =======================================================================================================
// ��   �� : �����Է¹����� 3�ڸ����� ��ǥ �����ϱ�
// ��� �� : <input type="text" onKeyUp="javascript: toNumberFormat(this);">
//			<input type="text" onKeyUp="javascript: toNumberFormat(this, '�հ�ݾ�');">
//-------------------------------------------------------------------------------------------------------------
function toNumberFormat(inputElement, title){
	// 36 Home   37 <-   39 ->   27 Esc
	
	//if(Event.keyCode == '36' || event.keyCode == '37' || event.keyCode == '39' || event.keyCode == '27') return;
	if(event.keyCode == '16' || event.keyCode == '9' || event.keyCode == '36' || event.keyCode == '37' || event.keyCode == '39' || event.keyCode == '27') return;
	var inputNo = inputElement.value; // �Է¹��� ��
	var inputNoWithoutMark = ""; // �Է¹��� ������ "," �� ������ ��
	var value1 = "";			// inputElement.value = value1(87,) + value2(654,) + value3(321)
	var value2 = "";
	var value3 = "";
	var remainder = "";	 // ������
	var dot = true;
	if(isNullValue(inputNo)) return;
	if(inputNo.length == 1 && inputNo == "-") return;  // ���� ���� ������ȣ ó�� 2001.06.16 �߰�
	// ','�� �����ϴ� ������
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
	
	// ����üũ : ���ڰ� �ԷµǾ����� �Լ� �����ϰ� input�� ��Ŀ��
	if (isNaN(inputNoWithoutMark) == true && inputNoWithoutMark != "-"){ // ���ڰ� �ƴϸ�
		if(isNullValue(title)){
			alert("���ڸ� �Է� �����մϴ�.");
		} else {
			alert("\"" + title + "\" ���� ���ڸ� �Է� �����մϴ�.");
		}
		lenn = inputNo.length;
		inputElement.value = inputNo.substring(0,lenn-1);
		inputElement.focus();
		return;
	}
	//   �Ǿ� 0 �� ��칮�� ����
	if(inputNoWithoutMark.length>=2 && inputNoWithoutMark.substr(0,1) == '0' && inputNoWithoutMark.substr(1,1) != "."){
		while(inputNoWithoutMark.substr(0,1)=='0' || inputNoWithoutMark.substr(0,1)=='.'){
			inputNoWithoutMark	= inputNoWithoutMark.substring(1,inputNoWithoutMark.length);
		}
		//inputNoWithoutMark = inputNoWithoutMark.substring(1,inputNoWithoutMark.length);
	}
// %%%% 2001/07/29 �Ҽ��� ó������ ����
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
		if(inputNo.substring(0, 1) == "-"){		// ���� ���� ������ȣ ó�� 2001.06.16 �߰�
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
		if(inputNo.substring(0, 1) == "-"){		// ���� ���� ������ȣ ó�� 2001.06.16 �߰�
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
// ��   �� : ���� �Է¹����� '/' �����ϱ�
// ��� �� : <input type="text" onKeyUp="javascript: toDateFormat(this, '��������');">
//			<input type="text" onKeyUp="javascript: toDateFormat(this);">
//-------------------------------------------------------------------------------------------------------------
function toDateFormat(inputElement, title){

	var inputDate = inputElement.value;
	var inputDateWithoutMark = "";
	var returnValue = "";

	if( event != null && (event.keyCode == '37' || event.keyCode == '39' || event.keyCode == '27' || event.keyCode == '8' || event.keyCode == '46') ) return;
	if(isNullValue(inputDate)) return;
// '/'�� �����ϴ� ������
	for(i=0; i<inputDate.length; i++){
		if (inputDate.substr(i,1) != "/" && inputDate.substr(i,1) != " "){
			inputDateWithoutMark += inputDate.substr(i,1);
		}
	}

	// ����üũ : ���ڰ� �ԷµǾ����� �Լ� �����ϰ� input�� ��Ŀ��
	if (isNaN(inputDateWithoutMark) == true){ // ���ڰ� �ƴϸ�
		if(isNullValue(title)){
			alert("���� �Է¿��� ���ڸ� �Է� �����մϴ�.");
		} else {
			alert("\"" + title + "\" ���� ���ڸ� �Է� �����մϴ�.");
		}
		inputElement.value = "";
		inputElement.focus();
		return;
	}

//	if(event.keyCode == '8' || event.keyCode == '46') {
//		if (inputDateWithoutMark.length >= 8) {
//		alert("8 �ڸ� ���ڷ� �Է��ϼ���.");
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
		alert(inputDate.substring(0, inputDate.indexOf("/")) + "�� �߸��� �⵵ �Դϴ�.");
		inputElement.focus();
		return;
	}
*/
	if(inputDateWithoutMark.length > 4 && inputDateWithoutMark.length < 8) {
		firstMonthNo = inputDateWithoutMark.substr(4,1);
		// "��"�� ù�ڸ� ���ڰ� "1" ������ ��
		if( inputDate.length > 4 && inputDateWithoutMark.length > 4 && inputDate.indexOf("/") == 4 && inputDateWithoutMark.length < 8 && firstMonthNo >= 2 && firstMonthNo < 10 ){
				inputDateWithoutMark = inputDateWithoutMark.substring(0, 4) + "0" + firstMonthNo;
		}
/*		if( inputDateWithoutMark.length > 5 ){
			month = inputDateWithoutMark.substr(4,2);
			if (isNaN(month) || month < 1 || month > 12) {
				alert(month + "�� �߸��� ���Դϴ�.");
				inputElement.focus();
				return;
			}
		}
*/
	}
	if( inputDateWithoutMark.length > 6 && inputDateWithoutMark.length < 9 ) {
		firstDayNo = inputDateWithoutMark.substr(6,1);
		//������ ù�ڸ� ���ڰ� "3" ������ ��
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
				alert( day + "�߸��� �����Դϴ�.");
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

	// �Էµ� ���� 8�� �� �� "����" �� "/"�� ������ �ΰ� 9�ڸ� �̻��϶��� �׿��ڸ� �����Ѵ�.
	if (inputDateWithoutMark.length >= 8) {
//		alert("8 �ڸ� ���ڷ� �Է��ϼ���.");
		inputElement.value = inputDateWithoutMark.substring(0, 4) + "/" + inputDateWithoutMark.substring(4, 6) + "/" + inputDateWithoutMark.substring(6, 8);
		inputElement.focus();
	}
}

//== $12 ======================================================================================================
// ��   �� : ����("�����") ���Ŀ� �´��� Ȯ���ϱ� (�����Է¿� ��,��,�� ���и��� "/"�� ���ԵǾ� �ִ���, ��Ȯ�� �������� Ȯ���ϱ�)
// ��� �� : if( checkDateFormat(document.form1.startDate, 'ȸ������') == true ) send('insert', 'IGEDAA_end.jsp'); 
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
	if(isNullValue(inputDate) == true) {     // �ƹ��͵� �Է����� �ʾ��� ������ ���� -> ������ null check �ʿ�
		return true;		
	}
	
	if (inputDate.length != 10){
		// �Էµ� ���� 8�� �̻��϶� �����޽���
		if(isNullValue(title)){		
			alert("�Է��Ͻ� ���� \"" + inputDate + "\" ��(��)  ->  \"2001/07/28\" �������� �����Ͽ� �ֽʽÿ�!");
		} else {
			alert("\"" + title + "\" �� �Է��Ͻ� ���� \"" + inputDate + "\" ��(��)  ->  \"2001/07/28\" �������� �����Ͽ� �ֽʽÿ�!");
		}
		inputElement.focus();
		return false;
	}
	
	if(inputDate.indexOf(" ") != -1){
		if(isNullValue(title)){
			alert("���� �Է¿��� ������ ����Ͻ� �� �����ϴ�.");
		} else {
			alert("\"" + title + "\" �� ���� �Է¿��� ������ ����Ͻ� �� �����ϴ�.");
		}
		inputElement.focus();
		return false;
	}
		
	for(i=0, nIndex=-1; i<2; i++){
		nIndex = inputDate.indexOf("/", nIndex + 1);
		if(nIndex == -1) {
			if(isNullValue(title)){
				alert("�Է��Ͻ� ���� \"" + inputDate + "\" ��(��)  ->  \"2001/07/28\" �������� �����Ͽ� �ֽʽÿ�!");
			} else {
				alert("\"" + title + "\" �� �Է��Ͻ� ���� \"" + inputDate + "\" ��(��)  ->  \"2001/07/28\" �������� �����Ͽ� �ֽʽÿ�!");
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
			alert("�Է��Ͻ� ���� \"" + inputDate + "\" ��(��)  ->  \"2001/07/28\" �������� �����Ͽ� �ֽʽÿ�!");
		} else {
			alert("\"" + title + "\" �� �Է��Ͻ� ���� \"" + inputDate + "\" ��(��)  ->  \"2001/07/28\" �������� �����Ͽ� �ֽʽÿ�!");
		}
		inputElement.focus();
		return false;
	}		
	if (isNaN(year)) {
		if(isNullValue(title)){
			alert("�Է��Ͻ� �⵵\"" + year + "\" ���� ���ڸ� ��� ���� �մϴ�.");
		} else {
			alert("\"" + title + "\" �Է°� :\"" + year + "\" <- \"" + title + "\" ���� ���ڸ� �Է� �����մϴ�.");
		}
		inputElement.focus(); 
		return false;			                                                                                                  
	}
	if (year.length > 0 && year.length != 4) {
		if(isNullValue(title)){
			alert("�Է��Ͻ� �⵵\"" + year + "\" ��(��) �߸��� �⵵ �Դϴ�.");
		} else {
			alert("\"" + title + "\" �� �Է��Ͻ� \"" + year + "\" ��(��) �߸��� �⵵ �Դϴ�.");
		}
		inputElement.focus(); 
		return false;
	}	
	
	if (isNaN(month)) {
		if(isNullValue(title)){
			alert("�Է��Ͻ� ��\"" + month + "\" ���� ���ڸ� ��� ���� �մϴ�.");
		} else {
			alert("\"" + title + "\" �Է°� :\"" + month + "\" <- \"" + title + "\" ���� ���ڸ� �Է� �����մϴ�.");
		}
		inputElement.focus(); 
		return false;			                                                                                                  
	}
	
	if (month > 12 || month < 1) {
		if(isNullValue(title)){
			alert("�Է��Ͻ� \"" + month + "\" ��(��) �߸��� \"��\"�Դϴ�.");                                                                        
		} else {
			alert("\"" + title + "\" �� �Է��Ͻ� \"" + month + "\" ��(��) �߸��� \"��\"�Դϴ�.");
		}
		inputElement.focus();   
		return false;
	} 
		
	dateObj = new Date(inputDate);
	rDD = dateObj.getDate();                                         
	if (isNaN(day)) {
		if(isNullValue(title)){
			alert("�Է��Ͻ� ��\"" + day + "\" ���� ���ڸ� ��� ���� �մϴ�.");
		} else {
			alert("\"" + title + "\" �Է°� :\"" + day + "\" <- \"" + title + "\" ���� ���ڸ� �Է� �����մϴ�.");
		}
		inputElement.focus(); 
		return false;			                                                                                                  
	}
	
	if (day != rDD ) {                                                                                                 
		if(isNullValue(title)){
			alert("�Է��Ͻ� \"" + day + "\" ��(��) �߸��� \"��\" �Դϴ�.");                                                                  
		} else {
			alert("\"" + title + "\" �� �Է��Ͻ� \"" + day + "\" ��(��) �߸��� \"��\" �Դϴ�.");
		}	
		inputElement.focus();   
		return false;                                                               
	}                                                                                                 	     
	return true;                                                                                                        
}

//== $12-1 ======================================================================================================
// ��   �� : ����("���") ���Ŀ� �´��� Ȯ���ϱ� (�����Է¿� ��,�� ���п� "/"�� ���ԵǾ� �ִ���, ��Ȯ�� �������� Ȯ���ϱ�)
// ��� �� : if( checkYearMonthFormat(document.form1.startDate, 'ȸ������') == true ) send('insert', 'IGEDAA_end.jsp'); 
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
	if(isNullValue(inputDate) == true) {     // �ƹ��͵� �Է����� �ʾ��� ������ ���� -> ������ null check �ʿ�
		return true;		
	}
	
	if (inputDate.length != 7){
		// �Էµ� ���� 8�� �̻��϶� �����޽���
		if(isNullValue(title)){		
			alert("�Է��Ͻ� ���� \"" + inputDate + "\" ��(��)  ->  \"2001/07\" �������� �����Ͽ� �ֽʽÿ�!");
		} else {
			alert("\"" + title + "\" �� �Է��Ͻ� ���� \"" + inputDate + "\" ��(��)  ->  \"2001/07\" �������� �����Ͽ� �ֽʽÿ�!");
		}
		inputElement.focus();
		return false;
	}
	
	if(inputDate.indexOf(" ") != -1){
		if(isNullValue(title)){
			alert("���� �Է¿��� ������ ����Ͻ� �� �����ϴ�.");
		} else {
			alert("\"" + title + "\" �� ���� �Է¿��� ������ ����Ͻ� �� �����ϴ�.");
		}
		inputElement.focus();
		return false;
	}
		
	nIndex = inputDate.indexOf("/");
	if(nIndex != 4) {
		if(isNullValue(title)){
			alert("�Է��Ͻ� ���� \"" + inputDate + "\" ��(��)  ->  \"2001/07\" �������� �����Ͽ� �ֽʽÿ�!");
		} else {
			alert("\"" + title + "\" �� �Է��Ͻ� ���� \"" + inputDate + "\" ��(��)  ->  \"2001/07\" �������� �����Ͽ� �ֽʽÿ�!");
		}
		inputElement.focus();
		return false;
	} else if(nIndex == 4) { 
		year = inputDate.substr(0, 4);
		month = inputDate.substr(5, 2);
	}
			
	if (isNullValue(year) || isNullValue(month)) {
		if(isNullValue(title)){		
			alert("�Է��Ͻ� ����(��/��) \"" + inputDate + "\" ��(��)  ->  \"2001/07\" �������� �����Ͽ� �ֽʽÿ�!");
		} else {
			alert("\"" + title + "\" �� �Է��Ͻ� ����(��/��) \"" + inputDate + "\" ��(��)  ->  \"2001/07\" �������� �����Ͽ� �ֽʽÿ�!");
		}
		inputElement.focus();
		return false;
	}
	
	if (isNaN(year)) {
		if(isNullValue(title)){
			alert("�Է��Ͻ� �⵵\"" + year + "\" ���� ���ڸ� ��� ���� �մϴ�.");
		} else {
			alert("\"" + title + "\" �Է°� :\"" + year + "\" <- \"" + title + "\" ���� ���ڸ� �Է� �����մϴ�.");
		}
		inputElement.focus(); 
		return false;			                                                                                                  
	}
	if (year.length > 0 && year.length != 4) {
		if(isNullValue(title)){
			alert("�Է��Ͻ� �⵵\"" + year + "\" ��(��) �߸��� �⵵ �Դϴ�.");
		} else {
			alert("\"" + title + "\" �� �Է��Ͻ� \"" + year + "\" ��(��) �߸��� �⵵ �Դϴ�.");
		}
		inputElement.focus(); 
		return false;
	}
	if (isNaN(month)) {
		if(isNullValue(title)){
			alert("�Է��Ͻ� ��\"" + month + "\" ���� ���ڸ� ��� ���� �մϴ�.");
		} else {
			alert("\"" + title + "\" �Է°� :\"" + month + "\" <- \"" + title + "\" ���� ���ڸ� �Է� �����մϴ�.");
		}
		inputElement.focus(); 
		return false;			                                                                                                  
	}
	
	if (month > 12 || month < 1) {
		if(isNullValue(title)){
			alert("�Է��Ͻ� \"" + month + "\" ��(��) �߸��� \"��\"�Դϴ�.");                                                                        
		} else {
			alert("\"" + title + "\" �� �Է��Ͻ� \"" + month + "\" ��(��) �߸��� \"��\"�Դϴ�.");
		}
		inputElement.focus();   
		return false;
	}
			     
	return true;                                                                                                        
}

//== $12-2 ======================================================================================================
// ��   �� : ����("��") ���Ŀ� �´��� Ȯ���ϱ� (�ѱ��� ���ԵǾ� �ִ��� Ȯ���ϱ�, 4�ڸ� �̻����� Ȯ���ϱ�)
// ��� �� : if( checkYearFormat(document.form1.startYear, 'ȸ������') == true ) send('insert', 'IGEDAA_end.jsp'); 
//			 if( checkYearFormat(document.form1.startYear) == true ) send('insert', 'IGEDAA_end.jsp');	   
//-------------------------------------------------------------------------------------------------------------
function checkYearFormat(inputElement, title) {
	
	var inputYear = inputElement.value;
	
	if(isNullValue(inputYear) == true) {     // �ƹ��͵� �Է����� �ʾ��� ������ ���� -> ������ null check �ʿ�
		return true;		
	}
	
	if (inputYear.length > 4){
		// �Էµ� ���� 4�� �̻��϶� �����޽���
		if(isNullValue(title)){		
			alert("�Է��Ͻ� �⵵ \"" + inputYear + "\" ��(��)  ->  4�� �̳��� �Է��ϼž� �մϴ�.");
		} else {
			alert("\"" + title + "\" �� �Է��Ͻ� �⵵ \"" + inputYear + "\" ��(��)  ->  4�� �̳��� �Է��ϼž� �մϴ�.");
		}
		inputElement.focus();
		return false;
	}
	
	if(inputYear.indexOf(" ") != -1){
		if(isNullValue(title)){
			alert("���� �Է¿��� ������ ����Ͻ� �� �����ϴ�.");
		} else {
			alert("\"" + title + "\" �� ���� �Է¿��� ������ ����Ͻ� �� �����ϴ�.");
		}
		inputElement.focus();
		return false;
	}
	
		year = inputYear.substr(0, 4);
	/*	month = inputYear.substr(5, 2);
		
	if (isNullValue(year) || isNullValue(month)) {
		if(isNullValue(title)){		
			alert("�Է��Ͻ� ����(��/��) \"" + inputDate + "\" ��(��)  ->  \"2001/07\" �������� �����Ͽ� �ֽʽÿ�!");
		} else {
			alert("\"" + title + "\" �� �Է��Ͻ� ����(��/��) \"" + inputDate + "\" ��(��)  ->  \"2001/07\" �������� �����Ͽ� �ֽʽÿ�!");
		}
		inputElement.focus();
		return false;
	}
	*/

	if (isNaN(year)) {
		if(isNullValue(title)){
			alert("�Է��Ͻ� �⵵\"" + year + "\" ���� ���ڸ� ��� ���� �մϴ�.");
		} else {
			alert("\"" + title + "\" �Է°� :\"" + year + "\" <- \"" + title + "\" ���� ���ڸ� �Է� �����մϴ�.");
		}
		inputElement.focus(); 
		return false;			                                                                                                  
	}
	if (year.length > 0 && year.length != 4) {
		if(isNullValue(title)){
			alert("�Է��Ͻ� �⵵\"" + year + "\" ��(��) �߸��� �⵵ �Դϴ�.");
		} else {
			alert("\"" + title + "\" �� �Է��Ͻ� \"" + year + "\" ��(��) �߸��� �⵵ �Դϴ�.");
		}
		inputElement.focus(); 
		return false;
	}
	if ((year == '0000') || (parseInt(year)<1900) || (parseInt(year)>3000)){
		alert("�Է��Ͻ� �⵵\"" + year + "\" ��(��) ��Ȯ���� �ٽ� Ȯ���Ͻʽÿ�.");
		inputElement.focus(); 
		return false;	
	}
	return true;                                                                                                        
}
//�Էµ� ���� ���������� üũ.
function checkNumber(num , fieldName)
{

   var num_temp = Number(num);
   var errorMesg = fieldName+" ���� ���ڷ� �Է��Ͻʽÿ�";
   var nullMesg = fieldName+" ���� �Է��Ͻʽÿ�";

   //���� �ִٸ�
   if(num != "")
   {
      //���ڸ� false��ȯ - if�� ���ڶ��
      if(isNaN(num_temp))
      {
         if("undefined" == typeof(fieldName)){}
         else
         {
            alert(errorMesg);
         }
         return false;
      }
      else  //���ڶ��.
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
��¥ üũ�ϴ� Function NOT NULL
���� : N - nullüũ ����
*/
function checkCalendar(year, month, day, allowNull, fieldName)
{
   // ��¥�� 8������ üũ
   var date = "";
   var errorMesg  = fieldName + "�� �⵵�� Ʋ���ϴ� ";
   var errorMesg1 = fieldName + "�� �⵵�� Ʋ���ϴ� ";
   var errorMesg2 = fieldName + "�� ���� Ʋ���ϴ� ";
   var errorMesg3 = fieldName + "�� ���ڰ� Ʋ���ϴ� ";
   year  = trim(year) ;
   month = trim(month) ;
   day   = trim(day) ;

   date = year+month+day;

   if (( date.length == 0 ) && ( allowNull == "N" || allowNull == "n" ))
   {
      return true;
   }

   //�⵵�� 4�ڸ��� üũ
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


   //���� ���ڸ��� �ƴҰ�� �տ� "0"�� �ٿ��� ���ڸ���  ����"
   if(month.length != 0 &&  month < 10 && month.indexOf(0) == -1 )
   {
      month = "0" + month;
   }

   //���� ���ڸ��� �ƴҰ�� �տ� "0"�� �ٿ��� ���ڸ��� ����"
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


   //��¥�� �������� üũ
   if( !checkNumber(date, "����") )
   {
     return false;
   }

   // ���� 12 ���� ū ���� �ִ��� üũ
   if(month > 12 || month == 0)
   {
      if("undefined" == typeof(fieldName)){}
      else
      {
         alert(errorMesg2);
      }
      return false;
   }

   // �� üũ
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
      //���� ����
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
------------       ǳ�� ����  ---------------
//////////////////////////////////////////////////////*/

//document.onmousemove=mpoint;
// <div id="quick" style="position:absolute; border: 1px solid #000000; z-index:1; background:#DFEBBB; visibility:hidden">
//</div>
// �� �׸��� �ش� �������� ���̸� ���� �ִ�. 

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

// ����÷�� javascript start
var first=0;
function file_preview() {
var	cHtml = "";
lim = document.forms[0].limit.value;

	cHtml = "<div id=block" + lim + "><input type=file name=\"upload"+lim+"\" size=50 class=\"form\"> <a href=\"javascript:addcase()\">[�߰�]</a> <a href='javascript:delcase(" + lim + ")'>[����]</a><br></div>"

	file_preView.insertAdjacentHTML("BeforeEnd",cHtml);
	//file_preView.insertAdjacentHTML("afterEnd",cHtml);
}
function addcase()
{
	lim = document.forms[0].limit.value;
/*		if (lim > 9) {
			alert("������ �ִ� 10�� �Դϴ�");
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
		alert("������ �ּ� 1�� �̻��Դϴ�.");
		return;
	}
	document.forms[0].limit.value--;
	document.all["block"+caseno].outerHTML = "";
	document.forms[0].attach_num.value--;
}
//	����÷�� javascript end

