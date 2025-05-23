require('dotenv').config({ path: `${process.cwd()}/.env` });

module.exports={ 
  "development": {
    "username": "postgres",
    "password": "null",
    "database": "ticktick",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port":5432
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
