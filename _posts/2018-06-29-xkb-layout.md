---
permalink: xkb-layout
layout:    ru
title:     Моя раскладка клавиатуры
date:      2018-06-29
excerpt:   "Как я создавал свою раскладку клавиатуры на линуксе."
---
# Моя раскладка клавиатуры

Мне не нравится моя раскладка клавиатуры. В этом посте инструкция, как менять
раскладки в линуксе.

## Что мне надо?

1. **Стандартное расположение букв.** Не потому что мне оно нравится, а потому
  что оно такое у всех. 
2. **Курсорные клавиши поближе.** Мне лень тянуться к обычным стрелочкам и
  всему такому.
3. **Незачем поддерживать все ОС.** Я пользуюсь только одной — линуксом,
  поэтому поддерживать буду только его. Вполне возможно, моя раскладка может
  заработать на других юниксах, но кто же ими пользуется?
4. **Максимально простая установка**. Чтобы я мог запросто её поставить когда
  надо куда надо. Для этого случая нужно подготовить простой скрипт.
5. **Типографические символы.** Тире, кавычки, вот это всё.

## Как создать раскладку?

Я буду активно использовать командную строку. На линуксе за клавиатурные
раскладки отвечает программа `xkb`. Можно добавить свою раскладку, но это там
как-то сложно делается, у меня никогда не получалось. Зато всегда получалось
редактировать стандартную раскладку. С этим нужно быть осторожнее, если 
совершить ошибку, можно сломать ввод с клавиатуры. Я так делал, не рекомендую.

Я изменю две раскладки — русскую и английскую. Они обе лежат в одной папке.
Скопируем обе в отдельную папку и будем работать над ними в ней:
```bash
mkdir ~/keyboard
cd /usr/share/X11/xkb/symbols
cp us ru ~/keyboard
cd ~/keyboard
```

### Английская раскладка

Открываем в любимом текстовом редакторе:
```bash
vim us
```

Файл длинный, в нём очень много раскладок. Стандартная наверху, там так и 
написано: `default`. Меня интересует только она. Автор файла был не очень
аккуратный, поэтому я красиво выровнял текст за него (как было изначально,
можно посмотреть в оригинальном файле):

```c
default  partial alphanumeric_keys modifier_keys
xkb_symbols "basic" {

  name[Group1]= "English (US)";

  key <TLDE> {[ grave, asciitilde ]};
  key <AE01> {[ 1,     exclam ]};
  key <AE02> {[ 2,     at ]};
  key <AE03> {[ 3,     numbersign ]};
  key <AE04> {[ 4,     dollar ]};
  key <AE05> {[ 5,     percent ]};
  key <AE06> {[ 6,     asciicircum ]};
  key <AE07> {[ 7,     ampersand ]};
  key <AE08> {[ 8,     asterisk ]};
  key <AE09> {[ 9,     parenleft ]};
  key <AE10> {[ 0,     parenright ]};
  key <AE11> {[ minus, underscore ]};
  key <AE12> {[ equal, plus ]};

  key <AD01> {[ q,            Q ]};
  key <AD02> {[ w,            W ]};
  key <AD03> {[ e,            E ]};
  key <AD04> {[ r,            R ]};
  key <AD05> {[ t,            T ]};
  key <AD06> {[ y,            Y ]};
  key <AD07> {[ u,            U ]};
  key <AD08> {[ i,            I ]};
  key <AD09> {[ o,            O ]};
  key <AD10> {[ p,            P ]};
  key <AD11> {[ bracketleft,  braceleft ]};
  key <AD12> {[ bracketright, braceright ]};

  key <AC01> {[ a,          A ]};
  key <AC02> {[ s,          S ]};
  key <AC03> {[ d,          D ]};
  key <AC04> {[ f,          F ]};
  key <AC05> {[ g,          G ]};
  key <AC06> {[ h,          H ]};
  key <AC07> {[ j,          J ]};
  key <AC08> {[ k,          K ]};
  key <AC09> {[ l,          L ]};
  key <AC10> {[ semicolon,  colon ]};
  key <AC11> {[ apostrophe, quotedbl ]};

  key <AB01> {[ z,      Z ]};
  key <AB02> {[ x,      X ]};
  key <AB03> {[ c,      C ]};
  key <AB04> {[ v,      V ]};
  key <AB05> {[ b,      B ]};
  key <AB06> {[ n,      N ]};
  key <AB07> {[ m,      M ]};
  key <AB08> {[ comma,  less ]};
  key <AB09> {[ period, greater ]};
  key <AB10> {[ slash,  question ]};

  key <BKSL> {[ backslash, bar ]};
};
```

Сначала добавим функциональные клавиши. Мне нужны `Home`, `Delete`, `PgUp`,
`PgDn`, `End`, `Backspace` и стрелочки. В `xkb` для этих кнопок уже
есть имена, так называемые `keysym`ы. Список всех `keysym`ов есть в файле
`/usr/include/X11/keysymdef.h`.

Я их размещу в третьем слое раскладки. Чтобы ввести символ с третьего слоя,
надо нажать определённый модификатор (обычно правый Alt) и саму клавишу. 
Стрелочки разместил как в `vim`е, остальное просто сверху подряд разместил.

```c
// ...
key <AD06> {[ y,            Y,         Home ]};
key <AD07> {[ u,            U,         Page_Down ]};
key <AD08> {[ i,            I,         Page_Up ]};
key <AD09> {[ o,            O,         End ]};
key <AD10> {[ p,            P,         BackSpace ]};
key <AD11> {[ bracketleft,  braceleft, Delete ]};
// ...
key <AC06> {[ h,          H,       Left ]};
key <AC07> {[ j,          J,       Down ]};
key <AC08> {[ k,          K,       Up ]};
key <AC09> {[ l,          L,       Right ]};
// ...
```

Теперь пора разместить типографические значки. Разместил вот так:

```c
// ...
key <AE11> {[ minus, underscore,  emdash ]}; // —
// ...
key <AB08> {[ comma,  less,    guillemotleft ]};  // «
key <AB09> {[ period, greater, guillemotright ]}; // »
// ...
```

В будущем добавлю больше знаков. Вот эти три просто самые нужные.

Чтобы писать символы с третьего слоя, нужно добавить ещё вот такую строчку
куда-нибудь в раскладку:

```c
include "level3(ralt_switch)"
```
В итоге английская раскладка выглядит так:

```c
default  partial alphanumeric_keys modifier_keys
xkb_symbols "basic" {

  name[Group1]= "English (US)";

  key <TLDE> {[ grave, asciitilde ]};
  key <AE01> {[ 1,     exclam ]};
  key <AE02> {[ 2,     at ]};
  key <AE03> {[ 3,     numbersign ]};
  key <AE04> {[ 4,     dollar ]};
  key <AE05> {[ 5,     percent ]};
  key <AE06> {[ 6,     asciicircum ]};
  key <AE07> {[ 7,     ampersand ]};
  key <AE08> {[ 8,     asterisk ]};
  key <AE09> {[ 9,     parenleft ]};
  key <AE10> {[ 0,     parenright ]};
  key <AE11> {[ minus, underscore,  emdash ]}; // —
  key <AE12> {[ equal, plus ]};

  key <AD01> {[ q,            Q ]};
  key <AD02> {[ w,            W ]};
  key <AD03> {[ e,            E ]};
  key <AD04> {[ r,            R ]};
  key <AD05> {[ t,            T ]};
  key <AD06> {[ y,            Y,         Home ]};
  key <AD07> {[ u,            U,         Page_Down ]};
  key <AD08> {[ i,            I,         Page_Up ]};
  key <AD09> {[ o,            O,         End ]};
  key <AD10> {[ p,            P,         BackSpace ]};
  key <AD11> {[ bracketleft,  braceleft, Delete ]};
  key <AD12> {[ bracketright, braceright ]};

  key <AC01> {[ a,          A ]};
  key <AC02> {[ s,          S ]};
  key <AC03> {[ d,          D ]};
  key <AC04> {[ f,          F ]};
  key <AC05> {[ g,          G ]};
  key <AC06> {[ h,          H,       Left ]};
  key <AC07> {[ j,          J,       Down ]};
  key <AC08> {[ k,          K,       Up ]};
  key <AC09> {[ l,          L,       Right ]};
  key <AC10> {[ semicolon,  colon ]};
  key <AC11> {[ apostrophe, quotedbl ]};

  key <AB01> {[ z,      Z ]};
  key <AB02> {[ x,      X ]};
  key <AB03> {[ c,      C ]};
  key <AB04> {[ v,      V ]};
  key <AB05> {[ b,      B ]};
  key <AB06> {[ n,      N ]};
  key <AB07> {[ m,      M ]};
  key <AB08> {[ comma,  less,    guillemotleft ]};  // «
  key <AB09> {[ period, greater, guillemotright ]}; // »
  key <AB10> {[ slash,  question ]};

  key <BKSL> {[ backslash, bar ]};

  include "level3(ralt_switch)"
};
```

### Русская раскладка

С русской раскладкой поинтереснее. Раскладка описана в разделе `common`, но по
умолчанию стоит `winkeys`, в которой просто описаны заново некоторые клавиши. Я
изменю `winkeys`, переопределив ещё несколько клавиш. Вот `winkeys`, 
оформленный мной (оригинал всё там же, в оригинальном файле):

```c
default  partial alphanumeric_keys
xkb_symbols "winkeys" {

  include "ru(common)"
  name[Group1]= "Russian";

  key <AE03> {[ 3, numerosign ]};
  key <AE04> {[ 4, semicolon ]};
  key <AE05> {[ 5, percent ]};
  key <AE06> {[ 6, colon ]};
  key <AE07> {[ 7, question ]};
  key <AE08> {[ 8, asterisk, U20BD ]};

  key <AB10> {[ period,    comma ]};
  key <BKSL> {[ backslash, slash ]};
};
```

Внимание на клавишу `AE08`, в третьем уровне есть символ `U20BD`. Это знак
рубля. У меня он не пишется, вероятно, потому что нет этой строчки:

```c
include "level3(ralt_switch)"
```

Добавляю её и переопределяю ещё парочку. В итоге вот так:

```c
default  partial alphanumeric_keys
xkb_symbols "winkeys" {

  include "ru(common)"
  name[Group1]= "Russian";

  key <AE03> {[ 3, numerosign ]};
  key <AE04> {[ 4, semicolon ]};
  key <AE05> {[ 5, percent ]};
  key <AE06> {[ 6, colon ]};
  key <AE07> {[ 7, question ]};
  key <AE08> {[ 8, asterisk, U20BD ]};

  key <AE11> {[ minus, underscore, emdash ]}; // —

  key <AD06> {[ Cyrillic_en,    Cyrillic_EN,    Home ]};
  key <AD07> {[ Cyrillic_ghe,   Cyrillic_GHE,   Page_Down ]};
  key <AD08> {[ Cyrillic_sha,   Cyrillic_SHA,   Page_Up ]};
  key <AD09> {[ Cyrillic_shcha, Cyrillic_SHCHA, End ]};
  key <AD10> {[ Cyrillic_ze,    Cyrillic_ZE,    BackSpace ]};
  key <AD11> {[ Cyrillic_ha,    Cyrillic_HA,    Delete ]};

  key <AC06> {[ Cyrillic_er, Cyrillic_ER, Left ]};
  key <AC07> {[ Cyrillic_o,  Cyrillic_O,  Down ]};
  key <AC08> {[ Cyrillic_el, Cyrillic_EL, Up ]};
  key <AC09> {[ Cyrillic_de, Cyrillic_DE, Right ]};

  key <AB08> {[ Cyrillic_be, Cyrillic_BE, guillemotleft ]}; // «
  key <AB09> {[ Cyrillic_yu, Cyrillic_YU, guillemotright ]}; // »
  key <AB10> {[ period,      comma ]};

  key <BKSL> {[ backslash, slash ]};

  include "level3(ralt_switch)"
};
```

## Что дальше?

Теперь у нас есть два измененённых файла. Чтобы их установить, достаточно
просто заменить на них оригинальные. Но разве это круто?

Я сделаю как разработчики ядра линукса — сделаю патч. При помощи программы
`diff` ищем различия между файлами и записываем их в другие файлы:

```bash
diff /usr/share/X11/xkb/symbols/us ~/keyboard/us > us.diff
diff /usr/share/X11/xkb/symbols/ru ~/keyboard/ru > ru.diff
```

В этих файлах инструкции, которые нужно выполнить, чтобы оригинальный файл стал
выглядеть как новый. Так делают, когда изменяемые файлы слишком большие, и
передавать полные файлы долго. Такие файлы называют `diff`-файлами, что 
ожидаемо.

## Как установить?

Нужно скормить `diff`-файлы программе `patch` и так изменить оригинальные
файлы. Затем нужно перезапустить всю систему. Чтобы не делать это каждый раз, 
можно написать небольшой скрипт и запускать каждый раз, когда надо.

### Создание установочного скрипта

Создаём `bash`-скрипт:

```bash
cat > install-layouts.sh
#!/usr/bin/env bash
patch -b /usr/share/X11/xkb/symbols/us ./us.diff \
  && echo Installed English layout
patch -b /usr/share/X11/xkb/symbols/ru ./ru.diff \
  && echo Installed Russian layout
```

Жмём Ctrl+C и делаем скрипт запускаемым:
```bash
chmod +x ./install-layouts.sh
```

### Использование установочного скрипта

Файл должен лежать в той же папке, что и `diff`-файлы. Если что, скрипт можно
изменить, он под свободной лицензией. Потом запускаем:

```bash
sudo ./install-layouts.sh
```

Он попросит пароль, потому что будет редактировать системные файлы. Ах да,
анонимный читатель, **четырежды подумай** перед тем, как устанавливать
раскладки по моей инструкции, а не по правильной. Если хочется по правильной,
то в интернете много инструкций. Если сломается ввод с клавиатуры, то я не
виноват. 

Потом перезапускаем компьютер и наслаждаемся.

## Послесловие

Чтобы не делать всё, что я сделал выше, я загрузил лицензию, инструкцию на
английском и русском языках, `diff`-файлы, просто изменённые файлы и скрипт 
установки в [репозиторий](https://github.com/bouncepaw/keeb-layout). Чтобы его
скачать, надо так:

```bash
git clone https://github.com/bouncepaw/keeb-layout
```

## Дополнительные ссылки

<!-- Не смог разделить ссылки на строчки по 80 символов, отстой -->
Если хочется покопаться в теме, вот ссылки:
- [Вот тут обсуждают правильный способ создания раскладок](https://askubuntu.com/questions/482678/how-to-add-a-new-keyboard-layout-custom-keyboard-layout-definition)
- [Очень умная инструкция по тонкой настройке клавиатуры](https://habr.com/post/222285/)
- [Недостатки стандартной клавиатуры](http://ibnteo.klava.org/keyboard/standard)
- [Про xkb в Archwiki](https://wiki.archlinux.org/index.php/X_keyboard_extension)
