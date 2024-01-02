# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Notable Steps Taken

axios is a library to make HTTP/Rest API calls
	postman client is also a tool similar to swagger, but it provides more advance options as well
	
	swagger-ui is a API documentation tool mainly
	
	npm create vite@latest attendanceReactUI
	selecgt react and javascript variant
	
	npm run dev
	react application is up at http://localhost:5173/
	lets change the port to 8080
	vite.config.js 
	server:{
		port:8080
	}
	
	npm install bootstrap --save
	npm install react-icons/bi react-icons/go react-icons/io react-icons/md react-icons/ti react-icons/fi react-icons/fa
	
	Time Sheet Change Request List ( components )
	react snippet(VS Code ES7+ React/Redux/React-Native/JS)
	prepared dummyData to show in HTML
	Import ListComponenet in App Componenet
	
	Install axios library(npm install axios --save)
	Create EmployeeService.js File
	Write Rest Client Code to make REST API call using Axios API
	Change ListComponenet to get the response of Rest API(controller)
	
	MicroService:
	http://localhost:8080/swagger-ui
	React application
	http://localhost:3000/
	
	http://localhost:8080/northstar/timeSheetChangeRequest/getAllRequests
