FROM node:14.11.0-alpine
COPY . /app
WORKDIR /app
RUN npm install --save node-sass@4.14.1 --unsafe-perm=true --allow-root
RUN npm install
RUN npm install --save @ng-select/ng-select
RUN npm install --save angular-6-social-login
RUN npm install -g @angular/cli@13.0.3
RUN npm install -g serve
RUN npm install -g concurrently
RUN npm upgrade -g @angular/cli
CMD ng build  --output-hashing all && concurrently "ng build --watch" "serve dist/userproject"
EXPOSE 5000
