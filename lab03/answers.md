# Lab 3 Answers

## Part 1: Git

### 1.1. List the contents of the lab03-exercises repo immediately after initialization
```
# paste code here
imcdonal@Edana:~/csci338/lab03-exercises$ ls -la
total 16
drwxr-xr-x  3 imcdonal imcdonal 4096 Sep  5 10:39 .
drwxr-xr-x 10 imcdonal imcdonal 4096 Sep  5 10:29 ..
drwxr-xr-x  7 imcdonal imcdonal 4096 Sep  5 10:39 .git
-rw-r--r--  1 imcdonal imcdonal    5 Sep  5 10:30 README.md


```

### 1.2. Paste the output of your `git status` command
```
# paste code here
imcdonal@Edana:~/csci338/lab03-exercises$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)


```

### 1.3. Paste the output of the state of your repository after committing your README.md file
```
# paste code here
imcdonal@Edana:~/csci338/lab03-exercises$ git commit -m "add README.md to the repository"
[master (root-commit) c243735] add README.md to the repository
 1 file changed, 1 insertion(+)
 create mode 100644 README.md


```

### 1.4. Copy your `git log` output
```
# paste code here
imcdonal@Edana:~/csci338/lab03-exercises$ git log
commit c243735e07b7048d4f751fcf57b81701923c59f1 (HEAD -> master)
Author: isrealmcd <imcdonal@unca.edu>
Date:   Thu Sep 5 10:43:53 2024 -0400

    add README.md to the repository


```

### 1.5. Copy your `git diff` output
```
# paste code here
imcdonal@Edana:~/csci338/lab03-exercises$ git diff
diff --git a/README.md b/README.md
index 7dcd6e7..70d965e 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,4 @@
 lab3
+Find All Duplicates
+Write a function (or static method in the case of Java)
+that accepts a list of integers and returns a list of only those integers that appear more than once.


```


### 1.6. Reflection

We've learned 6 git subcommands now. Describe each of them in your own words in the section below:

* git init
This initializes a new repository
* git status 
This checks the status of git, you can see files that have been added and awating commits. 
you can also see what branch youre currently on
* git add 
This adds a file to the git staging area to be committed
* git commit 
This will save the file to the repository with a message describing the change
* git log
This shows a list of commits in order
* git diff
This shows you what has changed from the previous commit to the new commit


### 1.7. Practice: Find All Duplicates (Java)
Make sure you implement the `FindDuplicates.java` class as specified in the instructions (with the nested loops implementation).

## Part 2: GitHub

### 2.1. Practice: Find All Duplicates (Python)
Make sure you implement the `find_duplicates.py` file as specified in the instructions (with the nested loops implementation).


## Part 3: Branching

### 3.1. Implement the More Efficient Version of the "Find Duplicates" problem
Implement the more efficient Version of the "Find Duplicates" problem using a dictionary (or hashmap) data structure instead of nested loops. You may do this in either your Python file or in the Java file that you’ve already made. Do this by adding a second function/method to your Java/Python file with a slightly different name.


### 3.2. Link to Repo
Please make sure that the new repo that you made today on GitHub is public, and paste a link to it below.

```bash
# paste your new repo link here...
https://github.com/isrealmcd/lab03-exercises.git
```

### 3.3. What do the three "Merge pull request" options mean? 
Describe each of them in your own words.

1 create a merge commit
	this merges the current branch with the main branch
2 squash and merge
	this will add the 1 commit from this branch to the base branch
3 rebase and merge
	this rebases the branch so each commit then becomes the new base, so the last commit is now the new "base"
