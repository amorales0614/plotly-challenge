// creating first function to get the data
function getData(id){

	// pull in data from the json file
	d3.json("data/samples.json").then((data) => {
		console.log(data)

		var washFreq = data.metadata.map(d => d.wreq)
		console.log(`Washing Freq: ${washFreq}`)
	});
};