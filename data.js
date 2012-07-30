data = {
	// Structural objects like blinds, ducted heating and ceiling lights.
	structures: [
		{
			name: "Lighting",
			features: [
				{ name: "Fluorescent Circline",
					lifespan: 12000,
					power: {from: 20, to: 40},
					efficiency: {from: 40, to: 50},
					price: {from: 5, to: 10},
				},
				{ name: "White LEDs",
					lifespan: {from: 35000, to: 50000},
					power: {from: 3.5, to: 7.1},
					efficiency: {from: 27, to: 54},
					price: {from: 19, to: 40},
				},
				{ name: "Heat lamps",
					lifespan: 2500,
					power: {from: 250, to: 375},
					efficiency: null,
					price: {from: 15, to: 25},
				},
			],
		},
		{
			name: "Windows",
			features: [
				{ name: "",
					
				},
			],
		},
	],

	// Appliances like washing machines, air-con units and desk lamps.
	appliances: [
		{
			name: "Kitchen Appliances",
			appliances: [
				{ name: "Electric cook top",
					price: {
						"2-element": {from: 450, to: 1000},
						"4-element": {from: 700, to: 1200},
					},
					power: {
						"On": {from: 1000, to: 2000},
						"Standby": 0.05,
					},
					questions: [
						"Example question 1.",
						"Example question 2.",
					],
					notes: [
						"The standard coil burner is the traditional electric Cooktop, where the coil sits above the surface of the cooktop. It provides precise, steady cooking heat and the elevated elements accommodate a wide variety of cookware. The open exposure of the heating element makes it vulnerable to spills from over-boiling pots and other cooking messes, but drip pans capture spills and are generally easy to access, remove, and clean. Some models have deep porcelain drip pans, which retain their lustre longer. Drip pan accessibility and ease of cleaning are important maintenance features on coil burner models, so ask your salesperson about these features before you buy.",
						"Ceramic cooktops are versatile, economic and a popular cooktop choice. The heating elements are contained under a plate of ceramic glass, which presents a modern and stylish look that is exceptionally easy to clean. The flat, uninterrupted surface provides extra bench space or preparation areas when the cooktop is not in use. Ceramic cooktops provide rapid heat transfer with speed and temperature control, allowing you to heat food quickly and evenly – ideal for every kind of cooking.",
						"Electric cook-tops provide constant and even heat. They allow you to maintain steady and very low heat, which is not always possible on gas cook-tops.  However, some elements, compared to gas cook tops, heat up and cool down more slowly and it can be somewhat more difficult to regulate temperature with electric models.",
					],
				},
				{ name: "Induction cook top",
					price: {
						"2-element": 1700,
						"4-element": {from: 3000, to: 4000},
					},
					power: {
						"On": {from: 1500, to: 2800},
						"Standby": 0.05,
					},
					questions: [
						"Example question 1.",
					],
					notes: [
						"Working with magnetic fields rather than elements, the heat is transferred directly to the food itself, so it is the contents of the pan that heats up, not the cook-top.  This technology has a distinct safety advantage because the cooktop itself does not become hot; this is great if you have young children.",
						"Once the pan is removed, the energy transfer stops, therefore minimising the risk of accidental fires caused by leaving the stove turned on.  During the cooking time, approximately 90% of the used energy is converted into heat, resulting in a method which is about twice as fast as conventional cook-tops and a reduced energy bill.",
						"Pots and pans made of iron, enamel steel, certain stainless steels and types of glass cookware with metal bases can be used successfully.",
					],
				},
				{ name: "Gas cook top",
					price: {
						"2-burner": {from: 500, to: 1000},
						"4-burner": {from: 300, to: 1000},
					},
					power: null,
					questions: null,
					notes: [
						"The preferred methods of cooking for many people, as you are able to regulate the flame and have better control over the heat. Temperature changes are instantaneous and therefore more efficient when cooking.",
						"The design, innovation and efficiency of gas cooktops have improved over the past years, with changes such as; pilotless ignitions have eliminated the need for a constant pilot light and can save as much as 50 percent in energy use. Also the ease of cleaning has improved with sealed surface burners and upswept cooktops.",
						"An important advantage of gas cooktops: changing from electric to gas cooking can save around half a tonne of greenhouse emissions per household each year.",
					],
				},
				{ name: "Upright cook",
					price: {from: 500, to: 3500},
					power: {
						"On": 2400,
						"Standby": 1.1,
					},
					questions: [
						"Who?",
						"What?",
					],
					notes: [
						"Also known as a range, stove or cooker. These products combine both a cook top and one or more ovens. Upright cookers can be elevated with the cook top- and oven adjacent to each other or free standing with the cook top above the oven. Additionally, upright gas cookers may have an electric griller and be either hard wired or have a plug-in operation.",
					],
				},
				{ name: "Upright cook",
					price: {from: 500, to: 3500},
					power: {
						"On": 2400,
						"Standby": 1.1,
					},
					questions: [
						"Why?",
					],
					notes: [
						"Also known as a range, stove or cooker. These products combine both a cook top and one or more ovens. Upright cookers can be elevated with the cook top- and oven adjacent to each other or free standing with the cook top above the oven. Additionally, upright gas cookers may have an electric griller and be either hard wired or have a plug-in operation.",
					],
				},
				{ name: "Microwave",
					price: {from: 60, to: 200},
					power: {
						"On": {from: 750, to: 1100},
						"Standby": {from: 1, to: 6.2},
					},
					questions: [
						"Where did that guy go?",
					],
					notes: [
						"A microwave oven uses microwaves (radio waves) to heat food. Most microwave ovens use a radio wave frequency of roughly 2,500 megahertz (2.5 gigahertz). Radio waves in this frequency range have an interesting property in that water, fats and sugars absorb them. This makes microwave ovens efficient in their use of electricity because a microwave oven heats only the food.",
					],
				},
			],
		},
		{
			name: "Refrigerators",
			appliances: [
				{ name: "Top-and-bottom",
					price: null,
					power: {
						"Typical": {from: 40, to: 100,},
						"Yearly": {from: 350, to: 875},
					},
					questions: [
						"Where did that guy go?",
					],
					notes: [
						"The seals are a well-known source of cooling inefficiency, disrupting the efficiency so much as to almost double the consumption in typical cases. Ensure when doors are closed a slight vacuum is created (feels like door is a bit stuck) when attempting to open them; this shows the seals work well.",
						"Power usage depends on three main factors. One is the frequency with which the contents are accessed. The other two are the temperature setting and the temperature of the unit's surrounds. Power usage increases with an increase in any factor; a decrease in any factor affects a decrease in power usage.",
					],
				},
				{ name: "Side-by-side",
					price: {from: 60, to: 200},
					power: {
						"On": {from: 60, to: 110},
						"Standby": {from: 1, to: 6.2},
					},
					questions: null,
					notes: [
						"As an item that is usually priced higher than a conventional top/bottom design fridge the side-byside owner is not usually likely to be concerned with power consumption. The design also lends itself to easy gain of heat when accessed, the tall doors allowing warm external air to easily enter and heat up the interior.",
					],
				},
			],
		},
	],
};
