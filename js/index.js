//At load
$(document).ready(function(){
	$(".input-group").hide();

	var getQuery = function(val){
		val.replace(" ", "%20");
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + val + "&format=json&callback=wikicallback";
		$.ajax({
			 url: url,
			 dataType: 'jsonp',
			 success: function(data){
				 var html = "";
				 var i;

				 for(i = 0; i < data[1].length; ++i){
					 html += "<a href=\"" + data[3][i] + "\" target= \"_blank\"><button class=\"btn btn-secondary btn-block\"><span class=\"buttText\"><h1>" + data[1][i] + "</h1><br><p>" + data[2][i] + "</p></span></button></a><br>";
				 }
				 $("#results").html(html);
			 }
		});
	};
	//Click logo
	$("#logo").click(function(){
		$("#logo").effect("bounce",{times:3}, 1000);
		$("#logo").fadeOut();
		$("#results").html("");
		$(".input-group").show();
	});
	//Click close button
	$("#closeButt").click(function(){
		$(".input-group").hide();
		$("#logo").fadeIn();
	});
	//Submit query
	$(document).keypress(function(e) {
		 if(e.which == 13 && $("#inp").val() !== "") {
			  getQuery($("#inp").val());
		 }
	});
});
