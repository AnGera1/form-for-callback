$(document).ready(function() {

	$(".orange-btn").magnificPopup();

	$("#phone").mask("8(999)999-99-99");

	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}))


	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо! Ваша заявка принята! Скоро мы с вами свяжемся.");
			setTimeout(function() {
				$.magnificPopup.close();
			}, 1000);
			$("#form").trigger("reset");
		});
		return false;
	});
	
});
