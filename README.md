
# Fervento's workshop OpenAPI Codegen
This repository contain all the codebase for the workshop dedicated to OpenAPI and code generation of an Angualr frontend to list todo from a mocked node backend. Scope of the workshop is to get familiar with Swagger/OpenAPI and the code generation itself.

Folders:
 - **api**: contains the workshop's api definition of a Todo List
 - **angular**: example project created following this readme, code generation and a limited implementation of a todo list
 - **backend**: example of mocked backend which logs the requests received and replies with static content generated directly from the OpenApi definition
 - **gradle**: contains a `gradle.build` file capable of initializing an Angular project with npx and generating artifacts from the api definition

## A. Handson editor.swagger.io

Copy the content of api/todo-service.yml to editor.swagger.io
Study the simple API definition


## B. Online generation capability: Backend in Node.js

1. Download the Nodejs Backend from editor.swagger.io
2. Add cors package to allow editor.swagger.io `npm install --save cors`
3. Modify index.js to log requests and disable CORS for the sake of demonstration. Add the following snippet before `swaggerTools.initializeMiddleware` 
	```javascript
	// Allow cors, for the sake of demostartion
	var cors = require('cors')
	app.use(cors());

	// Log incoming requests, for the sake of demostartion
	const logRequestStart = (req, res, next) => {
		console.info(`${req.method} ${req.originalUrl}`)
		next()
	}
	app.use(logRequestStart)
	```

4. Start the server with `npm start`

  
## C. Use of local codegen

1. Download the latest codegen version:
	```bash
	wget http://central.maven.org/maven2/io/swagger/swagger-codegen-cli/2.4.9/swagger-codegen-cli-2.4.9.jar -O swagger-codegen-cli.jar
	java -jar swagger-codegen-cli.jar help
	```

2. Create a configuration file for typescript-angular template generator
	```bash
	echo '{"ngVersion":"8.0.0"}' > typescript-angular.conf
	```

3. Use Codegen
	```bash
	java -jar swagger-codegen-cli.jar generate -i api/todo-service.yml -l typescript-angular -o out --model-package model --api-package api -c typescript-angular.conf
	```
4. Create a project with npx
	```bash
	npx -p @angular/cli ng new ng-todo-list --routing=false --style=scss
	cd ng-todo-list/
	```
5.  Move generated files to angular app folder
	```bash
	mv out angular/ng-todo-list/src/app/swagger
	```
6.  Serve `npx ng s` 
7.  Provide swagger configuration 
	```typescript
	//app.module.ts
	export  function  apiConfigFactory():  Configuration {
	const params:  ConfigurationParameters  = {
		// es. get basePath from environment or define it here
		basePath: 'http://localhost:9081/api'
	};
	return  new  Configuration(params);
	}
	...
	imports: [HttpClientModule, ApiModule.forRoot(apiConfigFactory), ...... ]
	```
8.  Create components
	```bash
	npx ng generate module todo
	npx ng generate component todo/todo-list
	npx ng generate component todo/todo
	```
9. Use the Generated api in components
	```typescript
	constructor(protected  todoService:  TodoServiceService) { }
	```

## Use of codegen within Gradle
1. Create a new directory
2. Create a file build.gradle with the following content:
	```gradle
	plugins {
	    id 'base'
	    id "org.openapi.generator" version "4.1.3"
	    id "com.moowork.node" version "1.3.1"
	}

	def openApiURL = "$rootDir/../api/todo-service.yml" // This should be an URL to version control
	def openApiOutputFolder = "$rootDir/src/app/swagger"

	task generateApi {
	    dependsOn {
	        tasks.openApiGenerate {
	            generatorName = "typescript-angular"
	            inputSpec = openApiURL.toString()
	            outputDir = openApiOutputFolder.toString()
	            apiPackage = "api"
	            modelPackage = "model"
	            configOptions = [
	                ngVersion: "8.0.0"
	            ]
	        }
	    }
	}

	clean.doFirst {
	    delete openApiOutputFolder
	}
	```
3. Execute the gradle task: `gradle generateApi`
4. Change the Api definition and rebuild with `gradle clean generateApi`

## Appendix: Local copy of templates
 Create your local template so you can apply changes that best fit your projects. Download the template files (example cloning from a specific tag):
```bash
git clone -b 'v2.4.9' --depth 1 https://github.com/swagger-api/swagger-codegen
mv swagger-codegen/modules/swagger-codegen/src/main/resources/typescript-angular typescript-angular-template
rm -rf swagger-codegen
```