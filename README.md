Excel Plugin Social Sharing Addin with ReactJs, ES6 and Office Fabric
========================================================

The addin pulls data from social media providers, thanks to [Jonathan Moore](https://gist.github.com/jonathanmoore/2640302), about a link and puts this data into excel for the user to work with.

Technical
============================

The solution uses React Transform Boilerplate to transpile the ES6 and give you a nice development environment.
With chrome, on updating a react component and saving the file, the browser will pull in the changes and display them live. 
With the addin running in Excel, on save the transpile will kick off you then then refresh the addin. [Would be great to get this live reloading too](https://github.com/UKDXOfficeDev/office-reactjs-taskpane-addin/issues/3)

To get going clone the repo, install the npm packages and do npm start to start the development server:

	git clone https://github.com/UKDXOfficeDev/office-reactjs-taskpane-addin.git
	npm install
	npm start
	
Once you've done that you can now add the addin into Excel, heres a quick guide showing how

![Install into excel, gif](https://cloud.githubusercontent.com/assets/1939288/10243776/f4a00cee-68f2-11e5-95ce-07a7b1a57914.gif)

The solution uses:

 - React
 - [React Transform Boilerplate](https://github.com/gaearon/react-transform-boilerplate)
 - [NPM & Nodejs](https://nodejs.org/en/)
 - [Office Fabric](http://officeuifabric.com/) 
 - [Visual Studio Code for the editor](https://code.visualstudio.com/) - Could use another editor if you liked. 

Live Reload & Excel Startup/Editing Demos
============================

![exceladdinlivereload-chrome](https://cloud.githubusercontent.com/assets/1939288/10243829/5032b8cc-68f3-11e5-8135-2bc134c87d30.gif)

![exceladdineditinginexcel](https://cloud.githubusercontent.com/assets/1939288/10244113/1210dfea-68f5-11e5-9520-d042b35f8927.gif)

Notes
============================

I'm new to ReactJS at the moment and still finding the ropes, if you spot something I've done wrong or that doesn't follow best practices please raise an issue or submit a Pull Request.

Current backlog: I'd like to refactor the ShareControl into multiple different controls to better fit ReactJs. 

 
