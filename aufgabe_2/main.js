const zeile = // json для обмена
`{
	"list": 
	[
		{
			"name": "Petr",
			"age": "20",
			"prof": "mechanic"
		},

		{
			"name": "Vova",
			"age": "60",
			"prof": "pilot"
		}
	]
}`

let enti = JSON.parse(zeile) // JS
console.log(enti);
