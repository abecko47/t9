# T9 App (React.ts/node.ts monorepo)
![image](https://user-images.githubusercontent.com/10388830/152058148-1520be48-e213-4e52-ae91-86cc10f44032.png)

## Usage
- Use numbers 2-9 to write as on an old phone
- 0 (zero) - is space button, it also chooses first of predicted words
- Click on word selects it and adding space
- 1 (one) - will just report an error, as you had no letters on `1` button on old phones. (Just for error handling in TS demonstration).

## Installation requirments
- Docker (GNU/Linux or WSL2)
- This cloned repository

## Installation and notes
First clone repository and `cd` into it. To install just write to terminal:
```
docker-compose up -d
```
You can see logs right in container, or if you want to see them in terminal, just skip flag `-d`.

Frontend is available at http://127.0.0.1:3000/
Backend is available at http://127.0.0.1:3001/

### Linting backend
You can execute npm commands right from your enviroment:
```
docker-compose exec frontend npm run lint
docker-compose exec frontend npm run lint-fix
```

You can install `npm` packages same way for frontend and backend (container is named `t9-frontend`, but service is `frontend`, same applies for backend).

### node_modules
After docker installation `node_modules` will be mapped as directory, but won't available in your enviroment. You can just install them inside your enviroment using `npm i`, reference: https://stackoverflow.com/questions/38425996/docker-compose-volume-on-node-modules-but-is-empty

#### License GNU 
https://www.gnu.org/licenses/gpl-3.0.html
