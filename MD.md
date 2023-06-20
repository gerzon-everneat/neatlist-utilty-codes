# NodeJS 
To do remote screen sharing, lets run <a href = "https://anydesk.com/en">AnyDesk</a> Click my.anydesk on the right corner.

### 1. For IDE Install Visual Studio Code To get started in this walkthrough (<a href = "https://code.visualstudio.com/download">VSCode</a>)

- An Integrated Development Environment (IDE) is a software application that provides facilities for software development. 
It consists of at least : 
- a source-code editor, 
- build automation tools,
- and a debugger.

### 2. Install <a href = "https://nodejs.org/en/download">Node.js </a>

- A server applications using JavaScript. Node.js is the runtime and npm is the Package Manager for Node.js modules.
- Runtime means that it can execute your scripts outside the browser environment.
- npm is one of the Package Manager of Node.js, whenever you want to install package or library we use npm syntax.
- Package that can do text translator, calculator, import bundle files, aws services package
- to install a package the npm syntax is : 

``` 
npm install <package-name>

```

### 3. Know the basic CLI commands
<p>CLI stands for Command-Line Interface. Imagine if you set aside your mouse or disable your mouse pad while using your laptop and you want to go inside a specific directory or move from one directory to another. Whenever we want to write a command we need an Interface for that and it's the CLI.</p>

<p>Common cli commands are : </p>

- To create a directory, use the `mkdir` command followed by the directory name:

```
mkdir "<directoryName>"
```

- To navigate to a directory, use the `cd` command followed by the directory path:

```
cd <directoryPath>
```
the above command would get you inside the specified directory

- To go up one level in the directory hierarchy, use the `cd ..` command.

```
cd ..
```
the above command would get you out in the current directory

- To remove a directory, use the `rmdir` command followed by the directory name:

```
rmdir "<directoryName>"

```

- To view the list of files and Directories in the current directory use the command `ls`.
```
ls
```
- To create a file use the `touch` command (in macOS) then filename and extension(.txt, .pdf, .csv, etc):
```
touch example.txt
```