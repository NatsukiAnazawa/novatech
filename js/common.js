document.addEventListener("DOMContentLoaded", function () {
	/* ここから記述します。*/
	const	headerHam = document.querySelector(".header_hamberger");
	const headerMask = document.querySelector(".header_mask");

	headerHam.addEventListener('click', function() {
		headerHam.classList.toggle('js_active');
		headerMask.classList.toggle('js_active')
	});
});
