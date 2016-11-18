This grocery list app a MEAN application that is used to create, read, update, and delete (delete complete yet) grocery list items.  This application is currently not live.  

Installation instructions:
1. install node.js and npm - go to http://treehouse.github.io/installation-guides/ for instructions on installing on Windows, mac, and linux machines
2. install mongoDB - go to http://treehouse.github.io/installation-guides/ for instructions on installing on Windows, mac, and linux machines
3. install express - run command 'npm install express --save'
4. install angular - run command 'npm install angular@1.5.8'
5. install nodemon if you want the express server auto-restarted when changes are saved - run 'npm install -g nodemon'
6. install mongoose - run command 'npm install mongoose --save'
7. install webpack - run commands, 'npm install webpack --save-dev --save-exact' and 'npm install webpack -g'
8. install body-parser - run command 'npm install body-parser --save'

Dependencies:
npm init      (add entry point: src/app.js)
npm install express
npm install angular@1.5.8
npm install mongoose
npm install webpack
npm install body-parser


Steps to run app:
1. Install modules in Installation instructions, via terminal
2. In a second terminal, in root directory, run nodemonc/app.j s to run express server
3. In a third terminal, run ./mongod from your MongoDB file path
4. In a fourth terminal, run ./mongo from your MongoDB file path
5. open browser to localhost:3001 (see src/app.js for port)
