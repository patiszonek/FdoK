const enviroment = process.env.NODE_ENV || 'development';

if (enviroment === 'test' || enviroment === 'development') {
    const config = require('./config.json');
    const enviromentConfig = config[enviroment];

    Object.keys(enviromentConfig).forEach((key) => {
        process.env[key] = enviromentConfig[key];
    })
}