var assert = chai.assert;
var converted;
var original;

suite('temperature', function() {
	if (typeof __html__ !== 'undefined') {
              document.body.innerHTML = __html__['tests/karmatest.html'];
              original = document.getElementById('original');
              converted = document.getElementById('converted');
          }   
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

	test('-45.0C = -49.0F', function() {
		original.value = "-45.0C";
		calculate();
		assert.deepEqual(converted.innerHTML, "-49.0F");
	});
	
	
	test('50.0e+5C = 9000032.0F', function() {
		original.value = "50.0e+5C";
		calculate();
		assert.deepEqual(converted.innerHTML, "9000032.0F");
	});
	
	
	test('4d = error', function() {
		original.value = "4d";
		calculate();
		assert.match(converted.innerHTML, /ERROR/);
		});
});

