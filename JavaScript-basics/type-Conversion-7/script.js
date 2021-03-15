
//Строковое преобразование

let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string

//Численное преобразование

alert( "6" / "2" ); // 3, строки преобразуются в числа

let str = "123";
alert(typeof str); // string

let num = Number(str); // становится числом 123

alert(typeof num); // number

//Если строка не может быть явно приведена к числу, 
//то результатом преобразования будет NaN. Например:

let age = Number("Любая строка вместо числа");

alert(age); // NaN, преобразование не удалось


// Правила численного преобразования:


// undefined	NaN
// null	0
// true / false	1 / 0
// string	Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка, 
// то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат NaN

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

//Логическое преобразование

// Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
// Все остальные значения становятся true

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // пробел это тоже true (любая непустая строка это true)













