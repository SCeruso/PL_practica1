var assert = chai.assert;

suite('temperature', function() {
	test('32F = 0C', function() {
		original.value = "32F";
		calculate();
		assert.deepEqual(converted.innerHTML, "0.0C");
	});
	
	test('45.0C = 113.0F', function() {
		original.value = "45.0C";
		calculate();
		assert.deepEqual(converted.innerHTML, "113.0F");
	});

	test('4d = error', function() {
		original.value = "4d";
		calculate();
		assert.match(converted.innerHTML, /ERROR/);
		});
});

