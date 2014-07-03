var through = require ('through');
var split = require ('split');
var count = 0;
var tr = through(function write(data) {
	count ++;
	if (count % 2 === 0) {
		this.queue(data.toString().toUpperCase()+ "\n")
	} else {
		this.queue(data.toString().toLowerCase()+"\n")
	}
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);