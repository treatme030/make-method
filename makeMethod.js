//* reduce 함수 만들기

Array.prototype.juReduce = function (callbackFn, initialValue){ //콜백함수와 초기값을 인수로 받음
    //초기값 할당여부에 따른 누적값
    let accumulator = initialValue === undefined ? undefined : initialValue;

    for(let i = 0; i < this.length; i++){ //this 는 호출하는 현재 객체 참조
        if(accumulator === undefined){
            accumulator = this[i]; //초기값이 없는 경우 배열의 첫번재 값이 할당됨
        } else {
            accumulator = callbackFn.call(this, accumulator, this[i], i);
            //배열 내에 존재하는 각 요소에 대해 반복문을 통해 콜백함수를 한 번씩 실행
            //call(this, arguments) => 주어진  this 값 및 각각 전달된 인수와 함께 함수 호출
            //이미 할당되어있는 다른 객체의 함수/메소드를 호출하는 해당 객체에 재할당할 때 사용
            //this는 호출하는 현재 객체를 참조 
            console.log(accumulator);
        }
    }
    return accumulator; // 누적 계산의 결과 값 반
}
// test 더하기
// let arr = [3, 4, 2, 4];
// const result = arr.juReduce((acc, cur) => acc + cur , 0);
//console.log(result); // 13

// test 곱하기
// let arr = [3, 4, 2, 4];
// const result = arr.juReduce((acc, cur) => acc * cur , 1);
//console.log(result); // 96

// test 요소 갯수 
// let arr = ['a', 'a', 'b', 'c'];
// let result = arr.juReduce(function(acc, cur){
//     acc[cur] > 0 ? acc[cur] += 1 : acc[cur] = 1;
//     return acc;
// },{});
//console.log(result); // {a: 2, b: 1, c: 1}

//* map 함수 만들기

Array.prototype.juMap = function(callbackFn){
    let newArray = []; //새로 만들어질 빈 배열 선언과 할당
    for(let i = 0; i < this.length; i++){
        newArray[i] = callbackFn.call(this, this[i], i);
        //콜백함수가 받는 인수(currentValue, currentIndex, array)
        //call 함수를 이용하여 ﻿각각의 요소에 대해 반복문을 돌며 한번씩 콜백함수 호출
    }
    return newArray; //새로운 배열 반환
}
//test 각 요소에 2 더하기
// let arr = [3, 4, 2, 4];
// const result = arr1.juMap(el => el + 2);
//console.log(result); // [5, 6, 4, 6]

//test 각 요소에 2 곱하기
// let arr = [3, 4, 2, 4];
// const result = arr1.juMap(el => el * 2);
//console.log(result); // [6, 8, 4, 8]

//test 각 요소에 'A' 문자 연결하기
// let arr = ['L','H','P'];
// const result = arr1.juMap(el => el + 'A');
//console.log(result); // ['LA', 'HA', 'PA']

//test 제곱근 구하기
// let arr = [1, 4 , 9];
// const result = arr1.juMap(el => Math.sqrt(el));
//console.log(result); // [1, 2, 3]
