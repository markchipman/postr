share = function(text, cb){
	var	targetUrl = 'http://postr.cf/l.html#data:text/plain;charset=utf-8;base64,' + btoa(unescape(encodeURIComponent(text))),
		requestUrl = 'http://crossorigin.me/http://tinyurl.com/api-create.php?url=',
		req = new XMLHttpRequest
	req.open('GET', requestUrl+encodeURIComponent(targetUrl), true)
	req.responseType = 'text'
	req.onload = function(){cb(req.responseText)}
	req.send()
}
addEventListener('DOMContentLoaded',function(){
	var psto = document.getElementById('psto'), btn = document.getElementById('shr'), outLink = document.getElementById('reslink')
	btn.onclick = function(){
		var txt = psto.value
		if(txt) share(txt, function(link) {
			outLink.href = link
			outLink.style.display = 'block'
		})
	}
	psto.oninput = function() {
		if(!psto.value) outLink.style.display = 'none'
	}
},false)