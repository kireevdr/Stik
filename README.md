# Newton frontend

> Проект на Vue и Nuxt.js

### Запуск в режиме разработки

``` bash
# Установить зависимости
npm install 

# Создать локальный файл с конфигами
npm run copy-local-env-file
# В корне появится .env файл где можно задать порт и api base url

# Запустить проект на локальном node.js сервере в dev режиме
npm run dev

# проект будет доступен на http://localhost:3003/ (порт из .env)

```

### Деплой на сервер новых коммитов

```bash
1) перейти в папку проекта
2) сделать pull
3) npm install (если менялись зависимости)
4) npm run build
5) pm2 restart npm

```

### Разворачивание на сервере

```bash
1) # убедиться, что стоит pm2 глобально
   pm2 -v  
2) Клонировать репозиторий
3) npm install 
4) npm run copy-local-env-file
5) npm run build
6) npm run pm2

```
