/*
   IRON C LANGUAGE PREPROCESSOR
© Timur Ismagilov 2019
MIT License

Usage:
gcc iron.c -o iron
./iron input-file > output-file

Directives implemented so far:

#import
"f1"         #include "f1"
<f2>     =>  #include <f2>
f3           #include <f3>
#tropmi

#doc         /*
some     =>   * some
text          * text
#cod          * / <- no space between actually

nothing else
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

/* Macros for simplified text coloring. */
#define ANSI_COLOR_RED     "\x1b[31m"
#define ANSI_COLOR_GREEN   "\x1b[32m"
#define ANSI_COLOR_YELLOW  "\x1b[33m"
#define ANSI_COLOR_BLUE    "\x1b[34m"
#define ANSI_COLOR_MAGENTA "\x1b[35m"
#define ANSI_COLOR_CYAN    "\x1b[36m"
#define ANSI_COLOR_RESET   "\x1b[0m"

/* This type represents result state of operation. */
enum res
  {
   OK,			// Everything gone ok
   BAD,			// Unknown critical error
   NOTARGET,	// Datum does not fit function
   HITEOK,		// Function did everything it had to until it hit EOK
  };
typedef enum res res_t;

/* Check if `str` string starts with `pre` substring. */
int prefix(const char* pre, const char* str) {
  return strncmp(pre, str, strlen(pre)) == 0;
}

/* Replaces newline character with NUL character. */
char *drop_nl(char *str) {
  size_t len = strlen(str);
  char *nlpos = memchr(str, '\n', len);
  *nlpos = '\0';
  return str;
}

/* This type represents Iron directive type. */
enum md_idx
  {
   DIRIMPORT,
   DIRDEF,
   DIRMONOID,
   DIRDOC,
   DIRNO, // no such directive
  };

/* Array of directive ends. */
char *md_ends[] =
  {
   "#tropmi",
   "#fed",
   "#dionom",
   "#cod",
  };

/* Table that matches line starters with md_idxes. */
struct {
  char* prefixstr;
  enum md_idx md_name;
} macrodirecs[] =
  {
   {"#import", 	DIRIMPORT},
   {"#def", 	DIRDEF},
   {"#monoid", 	DIRMONOID},
   {"#doc", 	DIRDOC},
  };
size_t macrodirecs_len = 4;

/* Process a `line`, return directive type it has. If no Iron directive is
   found, DIRNO is returned. */
enum md_idx macrodirec(char *line) {
  if (prefix("#", line))
    for (int i = 0; i < macrodirecs_len; i++)
      if (prefix(macrodirecs[i].prefixstr, line))
        return macrodirecs[i].md_name;

  return DIRNO;
}

/* Simplified multiple #include directives. */
res_t iron_import(char* currln, FILE *ifp) {
  while (fgets(currln, 255, ifp) != NULL) {
    if (prefix(md_ends[DIRIMPORT], currln))
      return HITEOK;
    else if (prefix("\"", currln) || prefix("<", currln))
      printf("#include %s", currln);
    else
      printf("#include <%s>\n", drop_nl(currln));
  }
  return BAD;
}

/* Beautified function declations. */
res_t iron_def(char* currln, FILE *ifp) {
  printf("%s", currln);
  return BAD;
}

/* Simplified ‘monoid’ declatations. */
res_t iron_monoid(char* currln, FILE *ifp) {
  printf("%s", currln);
  return BAD;
}

/* Simplified documentation comments. */
res_t iron_doc(char* currln, FILE *ifp) {
  printf("/*\n");
  while (fgets(currln, 255, ifp) != NULL)
    if (prefix(md_ends[DIRDOC], currln)) {
      printf(" */\n");
      return HITEOK;
    }
    else {
      printf(" * %s", currln);
    }

  return BAD;
}

/* Call needed directive and return its result. */
res_t call_macrodirec(enum md_idx md_i,
                      char *currln,
                      FILE *ifp) {
  res_t (*callbacks[])(char *, FILE *) =
    {
     iron_import,
     iron_def,
     iron_monoid,
     iron_doc,
    };
  return callbacks[md_i](currln, ifp);
}

res_t logerr(char* errmsg) {
  fprintf(stderr, ANSI_COLOR_RED "ironpp: " ANSI_COLOR_RESET);
  fprintf(stderr, "%s", errmsg);
  return OK;
}

/* Buffer to store current line. */
char *strbuf = "";

int main (int argc, char** argv) {
  if (argc == 1) {
    logerr("No arguments passed.\n");
    return 1;
  }
  strbuf = malloc(255);
  FILE *ifp = fopen(argv[1], "r");
  int c;
  res_t currlncheck;
  while (fgets(strbuf, 256, ifp) != NULL) {
    enum md_idx md_i = macrodirec(strbuf);
    if (md_i == DIRNO) {
      printf("%s", strbuf);
    } else {
      call_macrodirec(md_i, strbuf, ifp);
    }
  }

  if (ferror(ifp))
    logerr("Error when reading file.\n");

  /* Cleanup */
  fclose(ifp);
  free(strbuf);

  return 0;
}
