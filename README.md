# reduce 함수 만들기
1. reduce 함수는 콜백함수와 초기값을 인수로 받아 콜백함수를 실행하고, 하나의 결과값을 반환한다.
2. initialValue(초기값)가 할당되어 있는 경우 => accmulator(누적값)  === initialValue
3. initialValue(초기값)가 할당되어 있지 않은 경우 => accmulator(누적값)  === undefinede 로 해당 배열의 첫번째 값과 같음
4. reduce 함수는 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 반복문을 통해 콜백함수를 한 번씩 실행
5. call 함수를 통해서 콜백함수에 전달된 인수( accumulator,  currentValue,  currentIndex,  array )로 콜백함수 호출

# map 함수 만들기
1. map 함수는 콜백함수를 인수로 받아 1:1 맵핑
2. map이 처리할 배열의 요소 범위는 콜백함수를 호출하기 전에 정해져, 이후 추가된 요소에 대해서는 콜백함수를 호출하지 않음
3. 콜백함수는 세가지 인수( currentValue, index, array )를 받고, 각각의 요소에 대해 반복문을 돌며 한번씩 호출되어 새로운 배열을 만듦
