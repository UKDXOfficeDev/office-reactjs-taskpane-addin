import React, { Component } from 'react';
import { Constants, SocialProvider } from './Constants';

export class ShareCountControl extends Component {
	constructor(props) {
		super(props);
		this.state = { shareCounts: [],  url: 'http://bing.com', showResults: false};
	}

	getSocialData()
	{
		this.setState({shareCounts: []});
		var that = this;
		Constants.SocialProviders.map(function (socialProvider, index){
			that.getDataForProvider(socialProvider);
		});
	}

	getDataForProvider(socialProvider) {
		var request = new XMLHttpRequest();
		var call = socialProvider.url + this.state.url;
		var that = this;
		request.open('GET', call, true);
		request.onload = function (e) {
			var data = JSON.parse(request.responseText);
			var currentShareCounts = that.state.shareCounts;
			var newItem = { title: socialProvider.title, count: data[socialProvider.field]}
			currentShareCounts.push(newItem);
			that.setState({ shareCounts : currentShareCounts, showResults: true });
			
		};

		request.onerror = function () {
			console.debug("Error calling resource: " + request.responseBody);
		};

		request.send();
	}

	putDataOnExcelPage() {
		var matrixToInsert = this.state.shareCounts.map(function(item){
			return [item.title, item.count];
		});
		var matrixWithHeader = [['Social Network', 'Share Count']]
		var matrix = matrixWithHeader.concat(matrixToInsert);
		
		window.office.context.document.setSelectedDataAsync(
			matrix,
			{ CoercionType: window.office.CoercionType.Matrix },
			function (asyncResult) {
				if (asyncResult.status == "failed") {
					showMessage("Action failed with error: " + asyncResult.error.message);
				} else {
					showMessage("You wrote a matrix! Click Next to see how to bind to it.");
				}
			});
	}
	
	handleChange(event) {
    	this.setState({url: event.target.value});
  	}
 
	render() {
		var results = this.state.shareCounts.map(function(item, i){
			return <div className="ms-Table-row" key={item.title}>
							<span className="ms-Table-cell">{item.title}</span>
							<span className="ms-Table-cell"><i className="ms-Icon ms-Icon--share"></i>{item.count}</span>
						</div>;
		});
		return <div>
				<div className="ms-TextField">
					<label className="ms-Label">Site Url</label>
					<input className="ms-TextField-field" type="text" value={this.state.url} onChange={this.handleChange.bind(this)} />
				</div>				
				<button className="ms-Button ms-Button--hero" onClick={this.getSocialData.bind(this)}>
					<span className="ms-Button-icon"><i className="ms-Icon ms-Icon--socialListening"></i></span>
					<span className="ms-Button-label"> Search</span>
				</button>
				<div className={this.state.showResults ? '' : 'hidden'}>
					<h1 className="ms-font-xl paddingTitle">Results</h1>
					<div className="ms-Table">
						<div className="ms-Table-row">
							<span className="ms-Table-cell">Social Network</span>
							<span className="ms-Table-cell">Share Count</span>
						</div>
						{results}
					</div>
					<button className="ms-Button ms-Button--hero" onClick={this.putDataOnExcelPage.bind(this)}>
						<span className="ms-Button-icon"><i className="ms-Icon ms-Icon--documentAdd"></i></span>
						<span className="ms-Button-label"> Insert Data</span>
					</button>
				</div>
			</div>;
	}
}