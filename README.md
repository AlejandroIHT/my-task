# My Tasks app

In this app you can see your tasks, create new task and edit a task. You can search a name specifict task, too order the tasks, too filter the tasks.

My Tasks is create with [React.js](https://es.reactjs.org/), and [React router dom](https://reactrouter.com/web/guides/quick-start). This app have a api create in [Firebase](https://firebase.google.com/).

A task have:

```bash
{
  date_end: "",
  date_start: "",
  id: "",
  level: null,
  name: "",
  person_assigned: "",
  person_create: "",
  status: "",
  tags: [""]
}
```

## Conciderations

You can't delete task. When you create task, you can't select "terminada" in status. You can't select the date start.

## Instalation

You will need node and npm installed globally on your machine.

In the project folder use code:

```bash
npm install
```

## Run app:

In the project folder use code:

```bash
npm run start
```

## To visit app:

In your browser visit the next URL:

```bash
http://localhost:3005/
```

## Test:

You can prove the functionality and amount tests that have.
In the project folder use code:

```bash
npm run test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
