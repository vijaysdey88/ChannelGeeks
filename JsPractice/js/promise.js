var PLACE_HOLDER_TEXT = "place_holder";
var PromiseService = {};

PromiseService.simplePromise = function() {
	return new Promise(function(resolve, reject) {
		console.log('Doing something asycn...');
		setTimeout(function() {
			var timeTaken = 3000;
			resolve("Hi simple promise resolved!!!", timeTaken);
		}, 3000);
	});
};


var loadQuotes = function() {
	var quotes = ["If you can't explain it simply, you don't understand it well enough.", "If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."];
	var promise = new Promise(function(resolve, reject) {
		//simulate doing some async activity to fetch quotes
		setTimeout(function() {
			resolve(quotes);
		}, 1000);
	});
	return promise.then(function(quotes) {
		return quotes;
	});
};

var loadQuotesPromise;
PromiseService.getNextQuote = function(index) {
	//var index = 0;
	loadQuotesPromise = loadQuotesPromise || loadQuotes();

	var getQuote = function(quotes) {
		var quotePromise = new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(quotes[index]);
			}, 1000);
		});
		return quotePromise;
	};

	return loadQuotesPromise.then(getQuote);
};

PromiseService.get = function(url) {
	return new Promise(function(resolve, reject) {
		console.log('Loading data...', resolve, " > ", reject);

		var req = new XMLHttpRequest();
		req.open('GET', url);

		req.onload = function() {
			if (req.status === 200) {
				resolve(req.response);
			} else {
				reject(Error(req.statusText));
			}
		};
		req.onerror = function() {
			reject(Error("Network Error"));
		};

		req.send();
	});
};


//------------------------------------------------ UI Section ------------------------------------

function setContent(id, content) {
	var elem = document.getElementById(id);
	elem.style.visibility = 'visible';
	var existing = document.getElementById(id).innerHTML.replace(PLACE_HOLDER_TEXT, '');
	elem.innerHTML = existing + content;
}

function addListItem(id, item) {
	var node = document.createElement("li");
	var textnode = document.createTextNode(item);
	node.appendChild(textnode);
	document.getElementById(id).appendChild(node);
}

function startQuotesSpinner() {
	var opts = {
		lines: 9,
		length: 27,
		width: 13,
		radius: 9,
		scale: 0.25,
		corners: 1,
		color: '#000',
		opacity: 0.25,
		rotate: 0,
		direction: 1,
		speed: 1,
		trail: 60,
		fps: 20,
		zIndex: 2e9,
		className: 'spinner',
		top: '70%',
		left: '25%',
		shadow: false,
		hwaccel: false,
		position: 'absolute'
	};
	var elem = document.getElementById("quotesArea");
	var spinner = new Spinner(opts);
	spinner.spin(elem);
	return spinner;
}

var spinner = startQuotesSpinner();

function initPromises() {
	var simplePromise = PromiseService.simplePromise();
	simplePromise.then(function(message, timeTaken) {
		timeTaken = timeTaken || "unknown";
		//throw "fake error!!!";
		setContent("msg", message + " timetaken : " + timeTaken + ".");
		return " Lets get started...";
	}, function(error) {
		setContent("msg", "Error! Could not get message");
	}).then(function(message) {
		setContent("msg", message);
	}, function(error) {
		setContent("msg", "Error! could not process first message");
	});

	var studentPromise = PromiseService.get("data/student.json");
	studentPromise.then(function(student) {
		setContent("studentDetails", student);
	}, function(error) {
		setContent("studentDetails", "Error in retrieving data due to " + error.message);
	});

	var nextQuote = PromiseService.getNextQuote;
	nextQuote(0).then(function(quote) {
		addListItem("quotes", quote);
		return nextQuote(1);
	}).then(function(quote) {
		addListItem("quotes", quote);
		return nextQuote(2);
	}).then(function(quote) {
		addListItem("quotes", quote);
	}).then(function() {
		spinner.stop();
	});
}

initPromises();