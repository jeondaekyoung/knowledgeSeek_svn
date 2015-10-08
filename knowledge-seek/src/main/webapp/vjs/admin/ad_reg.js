
$(document).ready(function(){
	
	$("#gubunO").show();
	$("#gubunI1").hide();
	$("#gubunI2").hide();
	
	
	//console.log("열렸다");
	$("#adRegister").click(function(){
		console.log("저장클릭");
		if(checkValue() == true){
			console.log("폼태그 전송");
			$("#adForm").submit();
		}
	});
	
	//광고 구분 변경
	$("input[name=ad_gubun]").change(function(){
		//console.log($("input[name=ad_gubun]:checked").val());
		if($("input[name=ad_gubun]:checked").val() == "O"){
			$("#gubunO").show();
			$("#gubunI1").hide();
			$("#gubunI2").hide();
		}
		if($("input[name=ad_gubun]:checked").val() == "I"){
			$("#gubunI1").show();
			$("#gubunI2").show();
			$("#gubunO").hide();
		}
	});
	
});

//필수항목 저장 전 체크
var checkValue = function(){
	if($("#start_date").val() == ""){
		alert("날짜를 입력해주세요.");
		$("#start_date").focus();
		return false;
	}
	if($("#end_date").val() == ""){
		alert("날짜를 입력해주세요");
		$("#end_date").focus();
		return false;
	}
	if($("#company_name").val() == ""){
		alert("회사명을 입력해주세요");
		$("#company_name").focus();
		return false;
	}
	if($("#company_tel").val() == ""){
		alert("회사연락처를 입력해주세요");
		$("#company_tel").focus();
		return false;
	}
	if($("#company_addr1").val() == ""){
		alert("회사주소를 입력해주세요");
		$("#company_addr1").focus();
		return false;
	}
	if($("#ad_name").val() == ""){
		alert("광고명을 입력해주세요");
		$("#ad_name").focus();
		return false;
	}
	
	if($("input[name=ad_gubun]:checked").val() == "O"){
		if($("#ad_url").val() == ""){
			alert("광고url를 입력해주세요");
			$("#ad_url").focus();
			return false;
		}
	}
	if($("input[name=ad_gubun]:checked").val() == "I"){
		if($("#youtube_addr").val() == ""	){
			alert("유튜브 url를 입력해주세요");
			$("#youtube_addr").focus();
			return false;
		}
		if($("#ad_sound_file").val() == ""){
			alert("소리파일을 선택해주세요");
			$("#ad_sound_file").focus();
			return false;
		}
		if($("#ad_image_file").val() == ""){
			alert("이미지파일을 선택해주세요");
			$("#ad_image_file").focus();
			return false;
		}
	}
	
	
	return true;
}



