// creating first function to get the data
function getData(id){

	// pull in data from the json file
	d3.json("./data/samples.json").then((data) => {
		console.log(data)

	})
};