# Netshoes Cart Test
Netshoes Cart Test instructions.

Install dependences
---------

1) Install Compass Style http://compass-style.org/install/
``` html
$ gem update --system
$ gem install compass
```

2) Install Mongo DB
Follow instructions: https://docs.mongodb.org/manual/installation/

3) Install Node.js
Follow instructions: https://nodejs.org/en/download/ or if your preferred, install Io.js (https://iojs.org/en/).

4) Install Node dependences
``` html
$ npm install
```

5) Install Bower and Grunt
``` html
$ npm install -g bower grunt-cli
```



Run tests
---------
``` html
$ grunt tests
```

Generate static assets
---------
``` html
$ grunt build
```

Start application
---------
In application folder, execute command:
``` html
$ nodemon app.js
```

And open this page: [http://localhost:3000](http://localhost:3000/)
