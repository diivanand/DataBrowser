# DataBrowser
A cross-platform desktop application (written using the Github Electron framework) which makes it easy to query and view data from various datastores like Cassandra or Solr whose command-line or REST interfaces are quite cumbersome for quick viewing or querying of data stored in these databases.

Other popular cross-platform desktop applications written using the Github Electron Framework:
1. Hipchat
2. Slack
3. Atom Editor
4. Visual Studio Code Editor

Frameworks/Tools Used:
1. HTML, CSS, and ES6 Javascript (gets converted during build step via Babel into ES5 since Electron doesn't support ES6 yet)
2. React
3. Browserify which bundles all app dependencies into one script file
4. electron-packager which builds the Mac/Windows/Linux app (based on what OS you are using)
5. Jasmine for unit testing (TODO)
6. various other Node JS libraries required for app (cassandra-client and solr-client), check out package.json for full list.

Building the Mac App (It will be a Windows app if you're using windows or Linux app if you're using Linux):
0. Install Node js if you haven't already (https://nodejs.org/en/download/)
1. Clone repo
2. run "npm install"
3. run "npm run compile"
4. run "npm run package"
5. The native Mac app (or Windows app or Linux app) will be in the bin folder.
