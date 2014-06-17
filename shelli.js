/** 
 * @author Abhishek Kumar
 * @license (c) Abhishek Kumar 2014.
 * @pre-requisite 
 *  1. download and install nodejs
 *  2. go to the required directory and run these commands
 *     $ npm install -g shelljs
 *     $ shjs shelli
**/

require('shelljs/global');

if (!which('git')) {
    echo('Sorry, this script requires git');
    exit(1);
}

echo('Shelli v0.1\nAbhishek Kumar (c) 2014.\n\nProcessing...\n');
var LICENSE_AGREEMENT = "/**\n * @author Abhishek Kumar\n * @license (c) <company> 2014.\n**/";

var args = process.argv.slice(2);
var projectName = (args[0] == undefined) ? 'project' : args[0];

if (!test('-d', projectName)) {
    mkdir(projectName);
}
cd(projectName);

if (!test('-d', 'services')) {
    mkdir('services');
}
if (!test('-d', 'scripts')) {
    mkdir('scripts');
    var f_main_js = LICENSE_AGREEMENT;
    f_main_js.to('scripts/main.js');
}
if (!test('-d', 'sprites')) {
    mkdir('sprites');
}
if (!test('-d', 'styles')) {
    mkdir('styles');
    var f_main_css = LICENSE_AGREEMENT;
    f_main_css.to('styles/main.css');
}

var f_index_html = '<!doctype>\n<html>\n<head>\n\t<title>Title</title>\n\t<link rel="stylesheet" type="text/css" href="styles/main.css">\n\t<script type="text/javascript" src="scripts/main.js"></script>\n</head>\n<body>Content</body>\n</html>';
f_index_html.to('index.html');

echo('Type: Boiler-plate\nProject: ' + projectName + '\nStatus: Success');