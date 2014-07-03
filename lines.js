var through = require ('through');
var split = require ('split');
var lineCount = 0;
var tr = through(function write(data) {
	lineCount ++;
	if (lineCount % 2 === 0) {
		this.queue(data.toString().toUpperCase()+ "\n")
	} else {
		this.queue(data.toString().toLowerCase()+"\n")
	}
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
