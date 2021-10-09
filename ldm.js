function copyFunction(e) {
	document.getElementById("thecopying");
	var n = document.createElement("textarea");
	n.value = e, document.body.appendChild(n), n.select(), document.execCommand("Copy"), n.remove()
}

  
function openPage(pageName,elmnt,color){var i,tabcontent,tablinks;tabcontent=document.getElementsByClassName("tabcontent");for(i=0;i<tabcontent.length;i++){tabcontent[i].style.display="none";} tablinks=document.getElementsByClassName("tablink");for(i=0;i<tablinks.length;i++){tablinks[i].style.backgroundColor="";} document.getElementById(pageName).style.display="block";elmnt.style.backgroundColor=color;} document.getElementById("defaultOpen").click();

$(document).ready(function (e) {
	var n = 15;
	$(".bdu-bio").slice(0, n).show(), $(document).on("click", "#loadMore", function (e) {
		n += 15, e.preventDefault(), $(".bdu-bio").slice(0, n).show()
	})
}), $(".bdu-bioemoji").slice(0, 12).show(), $("#loadMore").on("click", function (e) {
	e.preventDefault(), $(".bdu-bioemoji:hidden").slice(0, 15).slideDown(), 0 === $(".bdu-bioemoji:hidden").length && $("#loadMore").fadeOut()
}), $(".bdu-bio,.bdu-bioemoji").click(function () {
	$(this).append('<span class="copied">Copied</span>'), copyFunction($(this).find("p").text()), $(".copied").fadeOut(2e3)
}),
 $(document).ready(function () {
	$(window).scroll(function () {
		$(this).scrollTop() > 100 ? $("#scroll").fadeIn() : $("#scroll").fadeOut()
	}), $("#scroll").click(function () {
		return $("html, body").animate({
			scrollTop: 0
		}, 600), !1
	})
}), $(document).ready(function () {
	$(".lds-ripple").hide()
}), document.addEventListener("DOMContentLoaded", function () {
	var e = [].slice.call(document.querySelectorAll("img.lazy"));
	if ("IntersectionObserver" in window) {
		let n = new IntersectionObserver(function (e, o) {
			e.forEach(function (e) {
				if (e.isIntersecting) {
					let o = e.target;
					o.src = o.dataset.src, o.classList.remove("lazy"), n.unobserve(o)
				}
			})
		});
		e.forEach(function (e) {
			n.observe(e)
		})
	}
});