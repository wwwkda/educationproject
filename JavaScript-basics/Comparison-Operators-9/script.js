// Операторы сравнения Урок 9
// JavaScript Comparison Operators Lesson 9
//https://learn.javascript.ru/comparison


// alert( 2 > 1 );  // true (верно)
// alert( 2 == 1 ); // false (неверно)
// alert( 2 != 1 ); // true (верно)


// let result = 5 > 4; // результат сравнения присваивается переменной result
// alert( result ); // true



// alert( 'Я' > 'А' ); // true
// alert( 'Коты' > 'Кода' ); // true
// alert( 'Сонный' > 'Сон' ); // true

// alert( '2' > 1 ); // true, строка '2' становится числом 2
// alert( '01' == 1 ); // true, строка '01' становится числом 1

// alert( true == 1 ); // true
// alert( false == 0 ); // true

// let a = 0;
// alert( Boolean(a) ); // false

// let b = "0";
// alert( Boolean(b) ); // true

// alert(a == b); // true!

// alert( 0 === false ); // false, так как сравниваются разные типы

// alert( null === undefined ); // false
// alert( null == undefined ); // true

// alert( null > 0 );  // (1) false
// alert( null == 0 ); // (2) false
// alert( null >= 0 ); // (3) true


// //Задача для закрепления. 

// 5 > 4;// true
// "ананас" > "яблоко" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n" // false

// Разъяснения:

// Очевидно, true.
// Используется посимвольное сравнение, поэтому false. "а" меньше, чем "я".
// Снова посимвольное сравнение. Первый символ первой строки "2" больше, чем первый символ второй "1".
// Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.
// Строгое сравнение разных типов, поэтому false.
// Аналогично (4), null равен только undefined.
// Строгое сравнение разных типов.
