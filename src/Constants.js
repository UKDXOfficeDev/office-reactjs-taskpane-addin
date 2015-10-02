export class SocialProvider {
	constructor(url, field, title) {
		this.url = url;
		this.field = field;
		this.title = title;
	}
}

export class Constants {
	
	
	static get SocialProviders() {
		return [new SocialProvider('http://graph.facebook.com/?id=', 'shares', 'Facebook')
		  ];
	}
}
//new SocialProvider('http://cdn.api.twitter.com/1/urls/count.json?url=', 'count', "Twitter"),
		  //new SocialProvider('http://graph.facebook.com/?id=', 'shares', 'Facebook'),
		  //new SocialProvider('https://www.linkedin.com/countserv/count/share?format=json&url=', 'count', 'Linkedin')