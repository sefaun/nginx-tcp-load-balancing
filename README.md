## Install to Docker Container

```sh
apt-get update
apt-get install nano
apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install v16.13.1
npm i -g pm2
cd ./home
npm i
pm2 start ecosystem.config.js
```