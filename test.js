import fakeAge from './index.js';
import test from 'ava';

test('fakeAge return type to be number', t => {
	t.is(typeof fakeAge(), 'number');
});

test('fakeAge with type child less than 13 and more than -1', t => {
	t.true(fakeAge({type: 'child'}) < 13);
	t.true(fakeAge({type: 'child'}) > -1);
});

test('fakeAge with type teen less than 20 and more than 12', t => {
	t.true(fakeAge({type: 'teen'}) < 20);
	t.true(fakeAge({type: 'teen'}) > 12);
});

test('fakeAge with type adult less than 69 and more than 17', t => {
	t.true(fakeAge({type: 'adult'}) < 69);
	t.true(fakeAge({type: 'adult'}) > 17);
});

test('fakeAge with type senior less than 101 and more than 64', t => {
	t.true(fakeAge({type: 'senior'}) < 101);
	t.true(fakeAge({type: 'senior'}) > 64);
});

test('fakeAge with type all less than 101 and more than -1', t => {
	t.true(fakeAge({type: 'all'}) < 101);
	t.true(fakeAge({type: 'all'}) > -1);
});