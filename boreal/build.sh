#!/usr/bin/sh
(echo '<meta name="viewport" content="width=device-width, initial-scale=1">'
echo "<script>"
cat sorter.js
echo "</script>"
./entablify.sh) > glossa.html
