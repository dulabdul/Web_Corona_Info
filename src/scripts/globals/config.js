const CONFIG = {
  BASE_URL: 'https://coronavirus-19-api.herokuapp.com/',
  BASE_API: 'https://vaksincovid19-api.vercel.app/api/vaksin',
  PROV: 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi',
   CACHE_NAME: {
    prefix: 'web-covid',
    suffix: 'v1',
    precache: 'app-shell',
  },
  DATABASE_NAME: 'covid-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'covid',
};

export default CONFIG;
