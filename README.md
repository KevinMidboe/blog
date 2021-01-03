# blog - kevin's lab 

[![Build Status](https://drone.schleppe.cloud/api/badges/KevinMidboe/blog/status.svg)](https://drone.schleppe.cloud/KevinMidboe/blog)

# Requirements
 - node.js
 - yarn
 - postgres

Install node.js at https://nodejs.org/en/download/ or with package manager at https://nodejs.org/en/download/package-manager/.   
Yarn installed from: https://classic.yarnpkg.com/en/docs/install/, can also be substituted with `npm run`.


Tested node.js version: 
 - v14.2 MacOS
 - v15.4.0 Debian/Ubuntu

Postgress database can be hosted locally or connected to remotely. Update files `/config/env/*.json` with connection details.   
Install at https://www.postgresql.org/download/.

# Install
Move config defaults to correct folder:
```
cp config/defaults/* config/env
```

Install required node packages: 

```
yarn
```

# Database setup
Setup and seed the database with test data:
```
yarn db:setup; yarn db:seed
```


# Run options
Start backend for local development:
```
yarn dev
```

Run hot-reloaded frontend using:
```
yarn watch
```

Build frontend to `public/dist` with:
```
yarn build
```

