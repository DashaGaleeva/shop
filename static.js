$(document).ready(function(){
	function validation() {
		err = 0;
		$('.form-control').each(function(){
		    if($('#pswd').val() != $('#pswd2').val() && $('#pswd').val()!=''){
				err = 1
			    $('#pswd').addClass('is-invalid');
			    $('#pswd2').addClass('is-invalid');
			}else{
				$('#pswd').removeClass('is-invalid');
				$('#pswd2').removeClass('is-invalid');
			}
			if($(this).val() == ''){
				$(this).addClass('is-invalid');
				err = 1
			}else{
				$(this).removeClass('is-invalid');
			}
			if($('#pswd').val() == ''){
				$('#pswd').addClass('is-invalid');
				err = 1
			}else{
				$('#pswd').removeClass('is-invalid');
			}
			if($('#pswd2').val() == ''){
				$('#pswd2').addClass('is-invalid');
				err = 1
			}else{
				$('#pswd2').removeClass('is-invalid');
			}
		})
			if (err){
				return false
			}else{
				return true
			}
	}
	$('#rega_btn').on('click',function(e){
		e.preventDefault();
		if(validation()){
			$.ajax({
			  method: "POST",
			  url: "/ajax/registration",
			  contentType: "application/json",
			  data: JSON.stringify({ 
			  	login: $('#login').val(), 
			  	pswd: $('#pswd').val(),
			  	name: $('#name').val(),
			  	surname: $('#surname').val(),
			  	phone: $('#phone').val(),
			  	mail: $('#mail').val(),
			  })
			})
			.done(function(result) {
				if(result){
					window.location.href = '/login'
				}else{

				}
			});
		}
	})
	$('#door_button').on('click',function(){
		$.ajax({
			 method: "POST",
			 url: "/ajax/login",
			 contentType: "application/json",
			 dataType: 'json',
			 data: JSON.stringify({ 
			  login: $('#login').val(), 
			  pswd: $('#pswd').val(),
			 })
		})
		.done(function(result) {
			if(result.result){
				window.location.href = '/table'
			}else{
				$('#login').addClass('is-invalid');
				$('#pswd').addClass('is-invalid');
			}
		})
	})
	$('#eye_button').on('click',function(){
		if($('#pswd').attr('type') == 'password'){
			$('#pswd').attr('type','text');
		}else{
			$('#pswd').attr('type','password')
		}
	})
	$('#eye_button2').on('click',function(){
		if($('#pswd2').attr('type') == 'password'){
			$('#pswd2').attr('type','text');
		}else{
			$('#pswd2').attr('type','password')
		}
	})
})
