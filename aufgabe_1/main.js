const zeile = // XML
`<list>

<student>
	<name lang="en">
		<first>Ivan</first>
		<second>Ivanov</second>
	</name>
	<age>35</age>
	<prof>teacher</prof>
</student>

<student>
	<name lang="ru">
		<first>Петр</first>
		<second>Петров</second>
	</name>
	<age>58</age>
	<prof>driver</prof>
</student>

</list>`

const dom_elem = new DOMParser().parseFromString(zeile, 'text/xml')
const ober = dom_elem.querySelector('list')
const kollektion = ober.querySelectorAll('student')
const mass = []

for(let i = 0; i < kollektion.length; i++){
	const en = {}
	const knoten_name = kollektion[i].querySelector('name')
	en.name = `${knoten_name.children[0].textContent} ${knoten_name.children[1].textContent}`
	en.age = +kollektion[i].querySelector('age').textContent
	en.prof = kollektion[i].querySelector('prof').textContent
	en.lang = knoten_name.getAttribute('lang')
	mass.push(
		en
	)
}

console.log(
	mass
);
