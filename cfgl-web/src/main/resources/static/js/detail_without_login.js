	
	    $('#order').click(function (e) {
	    	e.preventDefault();
	        // Hien thi hop thoai
		   	$("#order-form").modal('show');
	        $("#all-image").addClass("d-none");
	    });

	    $("#cancel").click(function (e) {
	    	$("#order-form").modal('hide');
	    	$("#all-image").removeClass("d-none");
	    });
    
	    $("#save").on("click", function(e) {
	    	e.preventDefault();   	
        
	        $("form").removeAttr("target");
	        $("form").attr("action", "order");
	        $("form").submit();
	    });
	    $('#order-form').on('hidden.bs.modal', function (e) {
	    	$("#all-image").removeClass("d-none");  
		})

	
  		var modal = document.getElementById('myModal');
  		var modalImg = document.getElementById("img01");
  		
 		function previewImg(id) {
 			$("#myModal").modal('show');
 			$('#all-image').hide();
 			modalImg.src = '/entry/attach-file/load-image/' + id;
 		}
		
		// Get the <span> element that closes the modal
 		var span = document.getElementsByClassName("close")[0];

 		// When the user clicks on <span> (x), close the modal
 		span.onclick = function() {
 			$("#myModal").modal('hide');
 			$('#all-image').show();
 		}
 		window.onclick = function(event) {
 			if (event.target == modal) {
 				$("#myMal").modal('hide');
 				$('#all-image').show();
 			}
 		}

	
		$(function() {

			if ($("#ulikes").text() === "0") {
				$("#ulike").removeClass("active");
				$("#ulike").html("<span class='fa fa-thumbs-up'></span> Like</a>");
			} else {
				$("#ulike").addClass("active");
				$("#ulike").html("<span class='fa fa-thumbs-down'></span> Unlike</a>");
			}

			var id = $("#ulike").attr("href");
			$("#ulike")
				.click(
					function(e) {

						e.preventDefault();

						console.log("Likes text: " + $("#ulikes").text());

						if ($("#ulikes").text() === "0") {
							$
								.ajax({
									url : _ctx + "items/" + id + "/like",
									type : "POST",
									data : id,
									success : function(response) {
										console.log("success like " + id);
										$("#ulike").addClass("active");
										$("#ulike").html("<span class='fa fa-thumbs-down'></span> Unlike</a>");
										$("#ulikes").text(response);
									},
									error : function() {
										console.log("error like");
									}
								});
						} else {
							$
								.ajax({
									url : _ctx + "items/" + id + "/unlike",
									type : "POST",
									data : id,
									success : function(response) {
										$("#ulike").removeClass("active");
										$("#ulike").html("<span class='fa fa-thumbs-up'></span> Like</a>");
										$("#ulikes").text(response);
									},
									error : function() {
										console.log("error unlike");
									}
								});
						}

					});
			});

		var qrcode = new QRCode(document.getElementById("qrcode"), {
			width : 100,
			height : 100
		});

		function makeCode() {
			var elText = $('#qr-code').text();
			console.log(elText);
			if (!elText) {
				elText.focus();
				$("#qrcode").addClass("d-none");
			} else {
				qrcode.makeCode(elText);
			}
		}

		function makeBarcode() {
			var elText = $('#bar-code').text();

			if (!elText) {
				elText.focus();
				$("#barcode").addClass("d-none");
			} else {
				JsBarcode("#barcode", elText, {					  					  
					  width:2,
					  height:40,
					  displayValue: false
					});
			}
		}

		$("#qrcode").removeClass("d-none");
		makeCode();
		$("#barcode").removeClass("d-none");
		makeBarcode();

		window.setTimeout(function() {
		    $(".alert").fadeTo(500, 0).slideUp(500, function(){
		        $(this).remove(); 
		    });
		}, 4000);