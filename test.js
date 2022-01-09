import age from './index.js';
import test from 'ava';

test('age return type to be number', t => {
	t.is(typeof age(), 'number');
});

test('age with type child less than 13 and more than -1', t => {
	t.true(age({type: 'child'}) < 13);
	t.true(age({type: 'child'}) > -1);
});

test('age with type teen less than 20 and more than 12', t => {
	t.true(age({type: 'teen'}) < 20);
	t.true(age({type: 'teen'}) > 12);
});

test('age with type adult less than 69 and more than 17', t => {
	t.true(age({type: 'adult'}) < 69);
	t.true(age({type: 'adult'}) > 17);
});

test('age with type senior less than 101 and more than 64', t => {
	t.true(age({type: 'senior'}) < 101);
	t.true(age({type: 'senior'}) > 64);
});

test('age with type all less than 101 and more than -1', t => {
	t.true(age({type: 'all'}) < 101);
	t.true(age({type: 'all'}) > -1);
});