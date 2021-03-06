---
title: "Язык программирования Хенланг"
date: 2020-03-29
permalink: henlang-spec-ru
layout: ru
excerpt: "Описываю дизайн транспилируемого языка программирования с необычным синтаксисом"
---

# Хенланг

*Henlang* — сокращение от *incomprehensible language*, непостижимый язык. Также, *hen* это курица, то есть курояз. Также, 変 (хэн) это странный по-японски, то есть странный язык.

Это мультипарадигменный язык программирования, который транспилируется в [Схему](https://ru.wikipedia.org/wiki/Scheme).

**Внимание:** ещё нет готовой реализации языка. Когда будет, не знаю. Скорее всего, в 2020. Вся информация в данной статье актуальная.

## Возможности языка

### Комментарии

Начинаются с `%` и кончаются в конце строки.

```
% это комментарий
```

Если комментарий начинается с `include`, то вместо него вставится содержимое файла.

```
%include file.hen
```

### Идентификаторы

Могут содержать в себе символы уникода. Должны начинаться не с цифр. Не могут содержать в себе пробелные символы и другие символы, несущие служебную функцию в языке (`(){}[];\`). Не могут содержать в себе подряд идущие последовательности, которые в языке что-то значат (`=>`, `:=`). Идентификаторы, состоящие из одной заглавной латинской буквы, зарезервированы языком, поэтому их не стоит использовать для называния своих переменных. Также зарезервированы слова `if`, `fi`, `let`.

Идентификаторы также можно называются именами.

### Атомы

**Числа** (number) бывают целыми и с плавающей точкой: `123` и `123.456`.

**Строки** (string) совершенно обычные и ведут себя так, как того можно ожидать: `"обычная строка"`.

**Символы** (character) бывают двух видов: обычные и экранированные. Оба начинаются с грависа.

```
% Обычный символ, соответствует 'b' в Си или #\b в Схеме:
`b
% Экранированные символы подобны привычным экранирующим
% последовательностям в строках в Си-подобных языках.
% Все экранированные символы:
`\b % Backspace
`\f % Formfeed
`\n % New line
`\r % Carriage return
`\t % Horizontal tabulator
`\v % Vertical tabulator
`\s % Space
`\\ % Backslash
```

**Слова** (word) — что-то типа строк, только это не строки, а что-то вроде неисполненных имён или что-то типа того. Я так и не понял, как понятно обьяснять, что это такое. Эквивалентно символам (symbol) в Лиспах и Рубине. Такое название выбрал, чтобы на русском языке не путать с символами-character-ами.

```
% После апострофа должен идти легальный в Хенланге идентификатор.
'word
'longer-word-that-is-hyphenated
'с_кириллицей
'¤√
```

**Булевы значения** (boolean) пишутся так: `T` и `F`.

### Операторы

В Хенланге всего три оператора.

**Оператор присваивания** (assignment operator) присваивает значение имени и ничего не возвращает.

```
a := value
greet := \s { "hello, " σ+(s) σupcase }
```

**Оператор спаривания** (pair operator) обьединяет два значения в пару, которая эквивалентна `cons`у в Лиспах.

```
a:b
[\x { x x }]:"a pair of a lambda and a string"
```

**Условный оператор** (conditional operator) близок к `case` в Лиспах и к `switch` в Си-подобных. Он обёрнут в `if`...`fi`. Внутри него ряд веток, разделённых семиколонами. Ветки бывают двух видов: со стрелочкой или без. Если стрелочка есть, то выражение справа возвращается, если истинно выражение слева; если оно ложно, то проверяется следующая ветка. Если стрелочки нет, то выражение всегда возвращается. Если во всём условном операторе не нашлось истинной ветки, то будь, что будет.

```
if
  1>(0) => "greater";
  "less"
fi
```

### Списки

Видов списков в Хенланге много. Обьединяет их одно: они все обёрнуты в скобки, и перед ними может стоять префикс, который уточняет, какой именно это список. Все префиксы состоят из одной заглавной латинской буквы.

**Пустые списки** (empty list) пишутся как `N`. Эквивалентны `nil` в Лиспах.

**Списки хвостовых аргументов** (tail argument list), синтаксически, списки, но в этом разделе они не рассматриваются. Они рассматриваются в разделе про вызов функций.

Следующие три вида списков основаны на [SRFI 1](https://srfi.schemers.org/srfi-1/srfi-1.html).

**Правильные списки** (proper list) эквивалентны таковым спискам в Лиспах.

```
N(1, 2, 3, 4)
% тоже самое: 1:[2:[3:[4:N]]]

N()
% тоже самое: N
```

**Точечные списки** (dotted). В отличие от правильных списков, последний элемент не в паре с пустым списком, а просто так лежит.

```
D(1, 2, 3, 4)
% тоже самое: 1:[2:[3:4]]

D()
% тоже самое: N
```

**Бесконечные списки** (infinite).

```
% Элементы этого списка по порядку: 1, 2, 3, 4, 1, 2, 3, 4...
I(1, 2, 3, 4)
```

**Словари** (dictionary, hash-table) как в [SRFI 69](https://srfi.schemers.org/srfi-69/srfi-69.html).

```
dict := H("ru":"Русский", "en":"Английский", "fr":"Французский")
dict@("ru")  % "Русский"
```

**Векторы** (vector) как в [SRFI 43](https://srfi.schemers.org/srfi-43/srfi-43.html). Время получения любого элемента — *O(1)*, в отличие от правильных списков с их *O(n)*.

```
vec := V(1, 2, 3, 4)
```

### Let-блоки

Используются для того, чтобы сделать новую область видимости, заодно задав несколько новых переменных. Соответствуют `let*` в [Схеме](https://docs.racket-lang.org/reference/let.html#%28form._%28%28lib._racket%2Fprivate%2Fletstx-scheme..rkt%29._let%2A%29%29). Начинаются с `let`. Пары имя-значений идут следом. Потом идёт блок в фигурных скобках.

```
let numbers N(1, 2)
, letters N("a", "b") {
  numbers Z(letters) M(\lst { [lst @(2)]:[list @(1)] }) A->H $('H)
}
% напечатает:
% "a": 1
% "b": 2
```

### Функции

Новые функции создаются, используя лямбда-блоки. Он состоит из обратной черты (который символизирует лямбду), параметров, разделённых запятыми, и блока в фигурных скобках.

```
\ { "hello world" $ }   % Функция приветствования мира
\n { n +(1) }           % Функция прибавления единицы
\n, p, d { n ^(p)-(d) } % Формула какая-то
```

Если после имени параметра написать имя какой-нибудь функции `f`, то при вызове функции `g` аргумент будет передаваться сначала этой функции `f`. Если `f` вернёт ложное значение или ничего не вернёт, то программа с криком вылетит. Такая вот типобезопасность в runtime.

```
g := \a f { a }
% σ? возвращает T, если аргумент — строка
negate := \str σ? { "Not " σ+(str) }
"good" negate % "Not good"
12 negate % Программа вылетает, потому что 12 σ? =(F)
```

В отличие от многих языков, в Хенланге нет синтаксической конструкции, которая присваивает функции к имени сразу. Предполагается использовать комбинацию лямбды и оператора присваивания, как в примерах выше.

### Аппликация

В примерах уже было заметно, как необычно вызываются функции: первый аргумент пишется перед самой функцией, а остальные списком идут после неё.

```
2 f(4)    % в математике: f(2, 4)
1 f(5, 3) % в математике: f(1, 5, 3)
```

Это так сделано, чтобы было легко композировать функции в длинные цепочки.

```
double := _*(2)
increment := _+(1)
% double(increment(double(double(5)))) = 42
5 double double increment double =(42)
```

Аргумент слева от функции называется *головным аргументом*, а аргументы справа от функции называются *хвостовыми аргументами*. Поскольку хвостовые аргументы в скобках, это тоже список — *список хвостовых аргументов*. Если он не указан, предполагается, что он пустой.

Такая цепочка называется *композицией*. В зависимости от того, как она написана, она может быть по-разному распаршена, но эти правила парсинга регулярны и однозначны.

Если композиция состоит только из одного имени, то возвращается значение этого имени. Никакие функции не вызываются.

```
f := \n { 2 ^(n) }
f % возвращается функция f
```

Если композиция начинается с имени с явно обозначенным пустым списком хвостовых аргументов, но без головного аргумента, то предполагается, что это вызов нулярной функций. Если в процессе исполнения внезапно выяснится, что эта функция не нулярная, то программа торжественно вылетит.

```
f := \ { 2 ^(4) }
f() % возвращается 16
g := \n { 3 *(n) }
g() % вылетит
```

Если композиция начинается с имени без головного аргумента, но с непустым списком хвостовых аргументов, то приписывается `_` и выполняется бесточечное преобразование (про него ниже).

```
f := \n1, n2 { n1 *(n2) }
f(4)
% станет _ f(4), станет \n { n f(4) }
```

Если есть головной аргумент, то к функции применяются головной аргумент и все хвостовые аргументы (сколько бы их не было, хоть ноль), результат передаётся дальше по цепочке. Если это конец цепочки, то результат возвращается.

```
f := \n1, n2 { n1 *(n2) }
g := \n { n f(2) }
4 g  % 8
4 g f(3) % 24
4 g f(3) f(2) % 48
```

С нулярными функциями надо быть поаккуратнее.

```
nulary := \ { "hello world" }
unary1 := \f { "string" f }
unary2 := \s { s $ }

nulary unary1 % попытается выполнить "string" nulary, что невозможно
nulary unary2 % попытается напечатать функцию nulary в stdout
nulary() unary2 % напечатает "hello world" в stdout, всё хорошо
```

### Бесточечное преобразование

Используется для [бесточечного стиля](https://en.wikipedia.org/wiki/Tacit_programming) программирования. Не уверен, что можно это называть бесточечным стилем, поскольку это явно обозначается нижним подчёркиванием, но пока буду так называть.

Если заглавный аргумент в композиции — нижнее подчёркивание, то создаётся унарная функция, которая передаёт аргумент этой композиции.

```
% Обе функции идентичны
add1_1 := \n { n +(1) }
add1_2 := _ +(1)
```

Предполагается использовать такой вид записи везде, где только получается.

### Приоритет

Наивысший приоритет у аппликации, поменьше у оператора спаривания, поменьше у условного оператора, наименьший у оператора присваивания. Чтобы явно указать приоритет используются квадратные скобки `[]`. Я выбрал квадратные вместо круглых, как в большинстве языков, чтобы не было путаницы по списками.

## Примеры программ

Простой класс.

```
animal_new := \species, sentient? {
  hunger := 100
  \method {
    if
      method =('thinks?) => [
        if sentient? => 'thinks; 'does-not-think fi
      ];
      method =('feed) => [
        if hunger >(0) => [hunger := hunger -(1)] fi
        hunger
      ];
      "No such method " σ+(method σnew) E
    fi
  }
}
dog := "dog" animal_new(F)
'thinks? dog $  % 'does-not-think
'feed dog

human := "human" animal_new(T)
'thinks? human $  % 'thinks
'feed human
```

Вычисление чисел Фибоначчи.

```
Fibonacci := \n {
  if
    1 ι ∋(n) => n -(1);
    n -(1) Fibonacci +(n -(2) Fibonacci)
  fi
}
```

Вычисление факториала.

```
Factorial := \n {
  if
    n =(0) => 1;
    n -(1) Factorial(n)
  fi
}
```

## Стандартная библиотека

Представляет из себя реализацию стандартной библиотеки Схемы, а также порты SRFI 1, 13, 43, 69. Для неё характерно обильное использование греческих букв, математических знаков, всяких конвенций и неочевидных сокращений. В этой статье она не описана. Позднее на этом сайте выйдет документация этой библиотеки.
