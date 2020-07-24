$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
	
});


var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "template_Ifmvsoca";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){ 
    	alert("Your message was sent");
       myform.find("button").text("Send");
       document.getElementById("myform").reset();
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});

const updateScrollPercentage = function() { 
			const heightOfWindow = window.innerHeight,
				contentScrolled = window.pageYOffset,
				bodyHeight = document.body.offsetHeight,
				percentage = document.querySelector("[data-scrollPercentage] .percentage")
				percentageVal = document.querySelector("#percentage-value")

			if(bodyHeight - contentScrolled <= heightOfWindow) {
				percentageVal.textContent = percentage.style.width = "100%"
			}
			else {
				const total = bodyHeight - heightOfWindow,
					got = contentScrolled,
					percent = parseInt((got/total) * 100)
				percentageVal.textContent = percentage.style.width = percent + "%"
			}
		}

		window.addEventListener('scroll', updateScrollPercentage)