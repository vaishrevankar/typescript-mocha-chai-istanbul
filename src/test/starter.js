describe('Some Feature', () => {
	it('should pass', () => {
		'foo'.should.not.equal('bar');
	});

	it('should throw error', () => {
		(() => {
			throw new Error();
		}).should.throw();
	});

});