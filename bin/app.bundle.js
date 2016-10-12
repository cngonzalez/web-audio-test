/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	(function webpackMissingModule() { throw new Error("Cannot find module \"bundle.js\""); }());


/***/ },
/* 1 */
/***/ function(module, exports) {

	// goals: 

	// 1) get an mp3 to load and play in the browser
	document.getElementById('play').addEventListener('click', handlePlayClick);

	// sets up new context for playing the stuff
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	var context = new window.AudioContext();
	var source;
	var startedAt;
	var pausedAt;
	var paused;
	var buffer;

	function handlePlayClick() {
	  if (paused) {
	    playSound(buffer, (pausedAt / 1000)) //add 1000 or so here to take care of delay? Or possibly at the startedAt var?
	    paused = false;
	  }
	  else {
	    source.stop();
	    pausedAt = Date.now() - startedAt;
	    paused = true;
	  }
	}

	// asynchronously decodes audio data contained in buffer (see first arg)
	function playSound(arraybuffer, startPoint) {
	  context.decodeAudioData(arraybuffer, function (buf) {
	    // creates new audio source node, which is an object that has exactly one output and no inputs
	    source = context.createBufferSource();
	    // this connects the node to my window so that I can play it
	    source.connect(context.destination);
	    source.buffer = buf;
	    startedAt = Date.now();
	    source.start(0, startPoint);
	    paused = false;
	    });
	}

	function handleFileSelect(evt) {
	  var files = evt.target.files; // FileList object
	  playFile(files[0]);
	}

	function playFile(file) {
	    var freader = new FileReader();
	  // FileReader's onload function is a listener for when the event is fully loaded. (but where does the info go??)
	    freader.onload = function (e) {
	        playSound(e.target.result, 0);
	        buffer = e.target.result;
	    };
	  // reads concept as Blob -- returns an ArrayBuffer that represents the data inside (again, where!! and why is this happening at the end of the function?? Maybe need to read up on what an array buffer is.) 
	freader.readAsArrayBuffer(file);
	}


	  // 2) cut up a loaded mp3 with just javascript
	  // 3) see if you can provide some visualization and/or user input for these cuts
	  // 4) see if you can play cuts back
	  // 5) see if you can record cuts somehow (this may become a moment for redux)


/***/ },
/* 2 */
/***/ function(module, exports) {

	// goals: 

	// 1) get an mp3 to load and play in the browser
	document.getElementById('play').addEventListener('click', handlePlayClick);

	// sets up new context for playing the stuff
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	var context = new window.AudioContext();
	var source;
	var startedAt;
	var pausedAt;
	var paused;
	var buffer;

	function handlePlayClick() {
	  if (paused) {
	    playSound(buffer, (pausedAt / 1000)) //add 1000 or so here to take care of delay? Or possibly at the startedAt var?
	    paused = false;
	  }
	  else {
	    source.stop();
	    pausedAt = Date.now() - startedAt;
	    paused = true;
	  }
	}

	// asynchronously decodes audio data contained in buffer (see first arg)
	function playSound(arraybuffer, startPoint) {
	  context.decodeAudioData(arraybuffer, function (buf) {
	    // creates new audio source node, which is an object that has exactly one output and no inputs
	    source = context.createBufferSource();
	    // this connects the node to my window so that I can play it
	    source.connect(context.destination);
	    source.buffer = buf;
	    startedAt = Date.now();
	    source.start(0, startPoint);
	    paused = false;
	    });
	}

	function handleFileSelect(evt) {
	  var files = evt.target.files; // FileList object
	  playFile(files[0]);
	}

	function playFile(file) {
	    var freader = new FileReader();
	  // FileReader's onload function is a listener for when the event is fully loaded. (but where does the info go??)
	    freader.onload = function (e) {
	        playSound(e.target.result, 0);
	        buffer = e.target.result;
	    };
	  // reads concept as Blob -- returns an ArrayBuffer that represents the data inside (again, where!! and why is this happening at the end of the function?? Maybe need to read up on what an array buffer is.) 
	freader.readAsArrayBuffer(file);
	}


	  // 2) cut up a loaded mp3 with just javascript
	  // 3) see if you can provide some visualization and/or user input for these cuts
	  // 4) see if you can play cuts back
	  // 5) see if you can record cuts somehow (this may become a moment for redux)


/***/ }
/******/ ]);