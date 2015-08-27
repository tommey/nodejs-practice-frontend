module.exports = {
	'Check if Google works': function(browser) {
		browser
			.url('https://google.com')
			.waitForElementVisible('body', 1000)
			.assert.title('Google')
			.aasert.visible('input[type=text]')
			.setValue('input[type=text]', 'rembrandt van rijn')
			.waitForElementVisible('button[name=btnG]', 1000)
			.click('button[name=btnG]')
			.pause(1000)
			.assert.containsText(
				'ol#rso li:first-child', 
				'Rembrandt - Wikipedia, the free encyclopedia'
			)
			.end();
	}
};
