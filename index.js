// goals: 

// 1) get an mp3 to load and play in the browser
document.getElementById('play').addEventListener('click', handlePlayClick);
document.getElementById('files').addEventListener('change', function(e){
  e.stopImmediatePropagation()
  handleFileSelect(e)
})

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
  console.log(evt)
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
