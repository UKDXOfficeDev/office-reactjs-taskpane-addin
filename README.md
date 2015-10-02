Excel Plugin Social Sharing Addin with ReactJs, ES6 and Office Fabric
========================================================

The addin pulls data from social media providers about a link and puts this data into excel for the user to work with. 

Technical
============================

The solution uses React Transform Boilerplate to transpile the ES6 and give you a nice development environment.
With chrome, on updating a react component and saving the file, the browser will pull in the changes and display them live. 

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

Notes
============================

I'm new to ReactJS at the moment and still finding the ropes, if you spot something I've done wrong or that doesn't follow best practices please raise an issue or submit a Pull Request.

When some time comes up I'd like to refactor the ShareControl into multiple different controls to better fit ReactJs. 

 
