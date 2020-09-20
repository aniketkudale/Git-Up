document.addEventListener('DOMContentLoaded', function() {
	var readme = document.getElementById('readme');
	readme.parentNode.prepend(readme);
	readme.style.marginBottom = '20px';
});