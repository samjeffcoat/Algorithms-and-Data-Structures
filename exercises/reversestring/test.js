const reverse = require('./index');

test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
});


test('Reverse reverses a string', () => {
    expect(reverse('1234')).toEqual('4321');
});
// test('Reverse reverses a string', () => {
//     expect(reverse('abcd')).toEqual('dcba');
// });

 test('Reverse reverses a string', () => {
     expect(reverse('  abcd')).toEqual('dcba  ');
 });