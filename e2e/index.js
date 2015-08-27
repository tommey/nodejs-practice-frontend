module.exports = {
	'Check if Google works': function(browser) {
		browser.url('https://google.com')
			.pause(5000)
			.end();
	}
};
