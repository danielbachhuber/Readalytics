javascript:
function readalytics_bookmarklet() {
	var d = document,
	b = d.body,
	w = window,
	l = d.location,
	z = d.createElement('scr' + 'ipt'),
	s = 'http://127.0.0.1:3000/bookmarklet.js';
	
	try {
        if (!b) throw (0);
        d.title = '(Analyzing...) ' + d.title;
        z.setAttribute('src', s + '?url=' + encodeURIComponent(l.href) + (new Date().getTime()));
        b.appendChild(z);
    } catch(e) {
        alert('Please wait until the page has loaded.');
    }
}
readalytics_bookmarklet();
void(0);