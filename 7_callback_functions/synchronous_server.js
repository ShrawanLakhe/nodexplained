/**
 * Created by lakhe on 12/7/17.
 */

console.log('=============================================================================');
console.log('*********Callback Function*********');
console.log('=============================================================================');

function mainFunc(callbackFunc) {
    console.log('1 - Executing main Function');
    callbackFunc();
}

mainFunc(() => {
    console.log('2 - I will be called only after mainFunc has finished executing...');
});

console.log('3 - I will be executed in the last');


