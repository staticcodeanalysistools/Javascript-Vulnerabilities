var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
  // Http server that listens to port 8080 and creates a file in the parent directory based on the name parameter
  var parent = parent = "/path/to/parent_directory";
  var writeStream = fs.createWriteStream(path.join(parent,req.params['name']));
}).listen(8080);



function sanitize_filename(file){
  // function that sanitizes an input by ensuring it consists of only alphanumeric characters
  return  path.normalize(file).replace(/^(\.\.(\/|\\|$))+/, '');
}

http.createServer(function(req, res) {
  // Http server that listens to port 8080 and creates a file in the parent directory based on the name parameter
  var parent = parent = "/path/to/parent_directory";
  // Sanitize user input
  var filename = sanitize_filename(req.params['name']);
  var writeStream = fs.createWriteStream(path.join(parent,filename));
}).listen(8080);


function CWE_78_OS_injection(){
  // Function that executes a command typed by the user
  var exec = require('child_process').exec;
  cmd = prompt()
  exec(cmd, (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
});
}


function CWE_78_OS_injection_mitigated(){
  // Function that executes a command typed by the user
  // Use the more secure execfile that does not directly call the shell
  const {exec,execFile} = require('child_process');
  // Only allow user to pass parameters
  cmd = "ls"
  cmd_params = prompt()
  // Execfile allows passing a command and arguments securely
  execFile(cmd,[cmd_params], (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
});
}
