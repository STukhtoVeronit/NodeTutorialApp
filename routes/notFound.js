
function notFound(req, res) {
	res.render('error.html', {error: 'Nothing has found'});


}
module.exports = notFound;