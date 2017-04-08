# DataBrowser
A cross-platform desktop application (Using the Github Electron framework)
which makes it easy to query and view data from various datastores like Cassandra or Solr
whose existing command-line or REST interfaces are quite cumbersome for quick viewing or
querying of data stored in these databases.

Other popular cross-platform desktop applications using the Github Electron Framework:
1. Hipchat
2. Slack
3. Atom Editor
4. Visual Studio Code Editor

Frameworks/Languages/Tools Used:
1. HTML, CSS, and ES6 Javascript (converted during build step via Babel into ES5)
2. React (web framework created by Facebook)
3. Browserify which bundles all app dependencies into one script file
4. electron-packager which builds the native Mac app
5. Jest (test, mock, and coverage framework created and used by Facebook for React applications)
6. Various other Node JS libraries required for app (cassandra-client, solr-client, etc.) Check out package.json for full list.

Building the Mac App:
0. Install Node js if you haven't already (https://nodejs.org/en/download/)
1. Clone repo
2. run "npm install"
3. run "npm run compile"
4. run "npm run package"
5. The native Mac app (or Windows app or Linux app) will be in the bin folder.

Running the automated tests:
1. run "npm run test"

Getting test code coverage:
1. run "npm run coverage"