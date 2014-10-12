#Stratta
Eben Bitonte, Brad Eckert, Ryan Chipman

##Running the Code

###Production
In production, the server can be run simply by running 'bin/www'. The api will then be accessible at localhost:8080 (if running locally), or at the openshift URL to which it is deployed (currently stratta-rchipman.rhcloud.com).
###Development
In a dev environment, running 'gulp' will run the server and watch the 'app/' directory for changes so that it can restart the server when necessary. Additionally, gulp runs the stylus preprocessor to regenerate the css every time one of the stylus files changes.

##Directory Structure

###Server
All server-side code is stored in the app folder. The top-level server code (configuration, middleware setup, etc.) is all in app.js. Models are in the 'models/' directory, and controllers in the 'controllers/' directory. app.js expects an individual model module to export the model class built from a mongoose schema. It expects controller modules to export an express router middleware.

###Client
All the client-side assets are stored in the 'public/' directory. This may change if we end up choosing to separate client into an app of its own (angular or something like that).
