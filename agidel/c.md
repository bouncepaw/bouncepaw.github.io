# Agidel/C
This is macro plugin for Agidel.

## Documentation

### require
```
(require f…)
```
Corresponds to `#include` directive. If `f` is a string, it gets `#include`d as
it is, if `f` is a symbol, it gets wrapped in `<>` and then gets `#include`d.

```
(require stdio.h "myfile.h")

#include <stdio.h>
#include "myfile.h"
```


### defvar
```
1 (defvar (name type…)…)
2 (defvar (name type… rhand)…)
```
Corresponds to multiple variable declarations. You can declare any number of
`type`s. Anything other than `type` is considered as `rhand`.

```
(defvar (foo bool))
bool foo;

(defvar (foo const bool) (bar char *))
const bool foo;
char * bar;

(defvar (i int 1))

```


### define
```
1 (define macro-name val)
2 (define macro-name "val")
3 (define macro-name (arg…) expr…)
```
1, 2 correspond to macro constants. If the `val` is a string, quotes get
ignored. If you really want to put an actual string there, double-quote it.

3 corresponds to macro function. Result of every `expr` gets chained together.

```
(define LED_PIN 3)
#define LED_PIN 3

(define OPEN "(")
#define OPEN (

(define STR "\"STR\"")
#define STR "STR"

(define STR {"STR"})
#define STR "STR"

(define putc (c)
   [printf "%c" c])
#define putc(c) printf("%c", c)

(define double_putc (c)
   (putc c)
   (putc c))
#define double_putc(c) putc(c); putc(c)
```


### defun
```
1 (defun (fun-name fun-type…) ((arg-name arg-type…)*) expr…)
2 (defun (fun-name fun-type…) ((arg-name arg-type…)*))
```
Corresponds to function declaration.

```
(defun (main int) ((argc int) (argv char**))
   [printf "hello world"]
   (return 0))
int main(int argc, char** argv) {
    printf("hello world");
    return 0;
}

(defun (foo void) ())
void foo();
```


### while
```
(while test expr*)
```
Corresponds to the `while` loop.

```
(while true
   [printf "foobar"])
while (true) {
    printf("foobar");
}
```


### if
```
(if test then-clause else-clause)
```
Corresponds to the traditional `if` branching construction.

```
(if (eq? 1 1)
   [printf "equal"]
   [printf "not equal"])
if (1 == 1) {
    printf("equal");
} else {
    printf("not equal");
}
```


### unless
```
(unless test then-clause else-clause)
```
Reversed version of `if`. 

```
(unless (eq? 1 1)
   [printf "equal"]
   [printf "not equal"])
if (!(1 == 1)) {
    printf("equal");
} else {
    printf("not equal");
}
```


### cond
```
1 (cond (test then-clause)…)
2 (cond (test then-clause)… (else else-clause))
```
Corresponds to nested `if`s. If the last test expression equals to `else`, the
clause corresponds to `else`.

```
(cond
   ((> n 0) [printf "bigger than zero"])
   ((< n 0) [printf "lower than zero"])
   (else [printf "equals to zero"]))
if (0 > n) {
    printf("bigger than zero");
} else if (n < 0) {
    printf("lower than zero");
} else {
    printf("equals to zero");
}
```


### eq?
```
(eq? oper1 oper2…)
```
The `==` operator. Any number of operands can be used.

```
(eq? 1 1)
1 == 1

(eq? 11 22 33)
(11 == 22) && (22 == 33)
```


### begin
```
(begin expr…)
```
Brace-enclosed block of code.

```
(begin
   [printf "foo"]
   [printf "bar"])
{
    printf("foo");
    printf("bar");
}
```


### inc
```
(inc num)
```
Post-incrementation operator `num++`.



### dec
```
(dec num)
```
Post-decrementation operator `num--`;



### set
```
(set var val)
```
Assigns `val` to `val`.

```
(set foo 1)
foo = 1;
```


### return
```
(return val)
```
`return` operator.

```
(return 0)
return 0;
```
