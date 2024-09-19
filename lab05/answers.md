# Lab 5: Package Management Tutorial
Please complete the hands-on activities associated with this lab outlined in the <a href="https://csci338.github.io/fall2024/assignments/lab05" target="_blank">Lab 5 Instructions</a> (on the course website). When you're done, answer the following questions. Feel free to use Google / ChatGPT to help you think about these questions (but keep in mind that you'll need to know them for the midterm exam).

## Part 1. Operating System Package Managers
Answer the questions for either Homebrew or apt (depending on whether you're using Linux / WSL or Windows)
1. What is Homebrew / apt, and why is it useful?
    
    >These are package managers for macOS and Linux, These make it easier to install, update, modify, and remove software on an operating system.

2. What does the `update` command do (either `brew update` or `apt-get update`)?

    >'apt-get update' updates the package list for the package manager. when I ran apt-get update on my terminal i was given a permission denied error, so my work-around was to use the sudo command with it 'sudo apt-get update' to get a list of packages.

3. Where are the packages that are managed by Homebrew / apt stored on your local computer?

    >mine are stored in /var/casche/apt/archives

## Part 2.
1. What is a python virtual environment?

    >this is an isolated enviornment where python packages and their dependencies can be installed seperetly so projects can run on different versions without conflicts.

2. What is Poetry, and how is it different from other Python package managers like pip?

    >Poetry is a dependency management tool for python, it is used for creating virtual enviornments and managing dependencies.
    >Poetry is different because it handles enviornment creation and dependencies. Pip is primarily used for installing python packages

3. What happened when you issued the `poetry new poetry-demo` command?

    >It created a new python project in a folder named poetry-demo. It also included several files within the folder such as the pyproject.toml, README file, and a tests folder.

4. How do you run a python file using the poetry virtual environment?

    >first you activate the virtual enviornment with 'poetry shell' then you can run the python file with 'python example.py'

5. What is the purpose of the `poetry.lock` file?

    >This locks the exact version of all dependencies used in the project. This helps maintain consistency arcoss different enviornments by using the exact versions of the packages.

## Part 3.
1. What are some of the things that `package.json` is used for?

    ?It is used to store metadata about a Node.js project like its name, version, description, files, author, etc. The main function is to define the dependencies required for the project.

2. Why wouldn't you want to check in the `node_modules` directory into GitHub?

    >It would be very large and complicate version management. This would significantly increase the size of the repository makign it slower to clone, push, and pull. It is better for whover clones the repository to just run 'npm install' so it automatically downloads and installs the required packages.
