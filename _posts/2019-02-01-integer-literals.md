---
title: "Числовые литералы"
date: 2019-02-01 22:10:00
excerpt: "В языках программирования есть особая нотация для записи
чисел в других системах счисления. Я считаю, что она морально
устарела."
permalink: integer-literals
layout: ru
---
# Целочисленные литералы

Программисты, бывают, пишут числа в своих программах. Иногда удобно
записать число не в десятичной системе счисления, а в, например,
двоичной или шестнадцатеричной. Нормальные языки программирования,
само собой, дают такую возможность. Вот что говорит справка про
целочисленные литералы на
[cppreference](https://en.cppreference.com/w/cpp/language/integer_literal):

> An integer literal is a primary expression of the form
> ```
> decimal-literal integer-suffix(optional)  (1) 	
> octal-literal integer-suffix(optional)    (2) 	
> hex-literal integer-suffix(optional)      (3) 	
> binary-literal integer-suffix(optional)   (4)	(since C++14)
> ```
>
> where
>
> - decimal-literal is a non-zero decimal digit (1, 2, 3, 4, 5, 6, 7, 8, 9), 
>   followed by zero or more decimal digits (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
> - octal-literal is the digit zero (0) followed by zero or more octal digits
>   (0, 1, 2, 3, 4, 5, 6, 7)
> - hex-literal is the character sequence 0x or the character sequence 0X
>   followed by one or more hexadecimal digits (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a,
>   A, b, B, c, C, d, D, e, E, f, F)
> - binary-literal is the character sequence 0b or the character sequence 0B 
>   followed by one or more binary digits (0, 1)
> - integer-suffix, if provided, may contain one or both of the following (if
>   both are provided, they may appear in any order: 
>    - unsigned-suffix (the character u or the character U)
>    - long-suffix (the character l or the character L) or the long-long-suffix
>      (the character sequence ll or the character sequence LL) (since C++11) 
> 
> Optional single quotes(') may be inserted between the digits as a separator. 
> They are ignored by the compiler. 	(since C++14)

Я очень хотел вставить выдержку из официального стандарта языка, но он оказался
платным :( 

Как мы видим, поддерживаются десятичная, восьмеричная, шестнадцатеричная и
двоичная системы счисления (далее СИ). Программистам больше и не надо обычно.
Но… Вдруг надо?

СИ определяется префиксом `0x` (16), `0b` (2), `0` (8) или его отсутствием.
Также можно разделять разряды апострофом (в некоторых языках для этого можно
использовать нижнее подчёркивание (оба варианта очень крутые)).

Эти префиксы мне не нравятся. Во первых, выглядят по-идиотски. Как их читать?
_Ноль-икс_? Во-вторых, префикс для восьмеричной СИ особенно идиотский. Просто
ноль! Я как-то писал десятичное число, но решил префикснуть его ноликом для
красоты. И в итоге получилось восьмеричное число, и вся программа сломалась.
Неинтуитивно. В-третьих, префиксов мало. Вдруг я хочу написать в
одиннадцатеричной СИ? Или ещё какой-нибудь? Симметричной троичной, например.

<div style="font-size: large"><strong>Нужна другая нотация.</strong></div>

## Новая нотация

Как обычно, всё давно уже придумано. Математики давно просто пишут число в любой
СИ а потом просто пишут в субскрипте систему счисления. Например, вместо `0b101`
пишут _101₂_. Число 2 снизу — отдельный символ уникода, а не просто уменьшенная
двойка средствами CSS. Такие символы есть для всех десятичных цифр. Вот такую
нотацию и надо принять. 

Само собой, у нас есть огромное бремя — наследие старых языков и программ. Их
нельзя просто выбросить и начать писать нормальные целочисленные литералы.
Поэтому нужно сделать небольшую программу, которая получает на вход исходный код
любого языка с правильными целочисленными литералами, трансформирует их в
обычные и выводит дальше. Таким образом можно поддерживать любую систему
счисления, просто переводя её потом для итогового текста в десятичную, например.

Кстати, может такое уже есть? Анонимный читатель, если знаешь, скажи мне.

