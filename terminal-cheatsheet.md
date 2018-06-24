# Terminal cheatsheet

{{TOC}}

## Basics

![](https://softcover.s3.amazonaws.com/636/learn_enough_command_line/images/figures/anatomy.png)

### The echo command

Use `echo <string>`, with the string both quoted or not, to print a string to the screen.

### The man command

Use `man <command name>` to get a command specifications.

### Editing the line

Common shortcuts:

- `^A` beginning of the line
- `^E` end of the line
- `^U` clear the line
- `^L` clear the screen (equivalent of `clear`)
- `^D` exit tab/window (equivalent of `exit`)
- `⌥ + click` specific point of the line
- `⌘` activate clickable URLs

## Manipulating files

### Redirecting and appending

It's possible to append text to a file with the _redirect operator_ `>` (in this case the file will be also created):

```bash
$ echo "From fairest creatures we desire increase," > sonnet_1.txt
```

We can use the `cat` command to quickly read the content of a file (is short for _concatenate_, because can be used to combine the contents of multiple files):

```bash
$ cat sonnet_1.txt
From fairest creatures we desire increase,
```

To add a second line to the file, we can use the _append operator_ `>>`:

```bash
$ echo "That thereby beauty's Rose might never die," >> sonnet_1.txt
$ cat sonnet_1.txt
From fairest creatures we desire increase,
That thereby beauty's Rose might never die,
```

Use `diff <file 1> <file 2>` to compare the content of two different files:

```bash
$ echo "From fairest creatures we desire increase," > sonnet_1_lower_case.txt
$ echo "That thereby beauty's rose might never die," >> sonnet_1_lower_case.txt
$ diff sonnet_1.txt sonnet_1_lower_case.txt
< That thereby beauty's Rose might never die,
---
> That thereby beauty's rose might never die,
```
