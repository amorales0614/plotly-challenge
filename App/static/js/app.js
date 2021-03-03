// creating first function to get the data
function getData(id){

	// pull in data from the json file
	d3.json("../../data/samples.json").then((data) => {
		console.log(data)

		var washFreq = data.metadata.map(d => d.wreq)
		console.log(`Washing Freq: ${washFreq}`)

		// filter values using id
		var sample = data.sample.filter(s => s.id.toString() === id)[0];

		console.log(sample);

		// getting top 10 sample for plot
		var top10 = sample.sample_values.slice(0,10).reverse();

		var idValues = (samples.otu_ids.slice(0, 10)).reverse();

		var idOTU = idValues.map(d => "OTU " + d)

		console.log(`OTU IDS: ${idOTU}`)

		var labels = sample.otu_labels.slice(0, 10);

		console.log(`Sample Values: ${top10}`)
		console.log(`Id Values: ${idValues}`)

		// creating trace variables for plot
		var trace = {
			x: top10,
			y: idOTU,
			text: labels,
			type: "bar",
			orientation: "h",
		};

		var data = [trace];

		var layout = {
			title: "Top 10 OTU",
			yaxis: {
				tickmode: "linear",
			},
			margin: {
				l: 100,
				r: 100,
				t: 30,
				b: 20
			}
		};

		Plotly.newPlot("bar", data, layout);
	});
};