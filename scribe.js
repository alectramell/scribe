//
// Tramell Software Development (r)
// SCRIBE JavaScript API v1.0
//
// To access SCRIBE API, add this line to the HEAD tag of your HTML page..
// 	<script type="text/javascript" src="scribe.js"></script>
//
// To save data to a file, add this function to an onclick (or by any other call)
// within your HTML page..
// 	save(<text-data>, <output-file.txt>);
//

function save(xdata, xfile) {

	let a = document.createElement('a');
	a.href = "data:application/octet-stream,"+encodeURIComponent(xdata);
	a.download = xfile;
	a.click();
}
