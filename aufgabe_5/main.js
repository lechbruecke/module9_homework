const kollektion = document.querySelectorAll('input')
const btn = document.querySelector('button')
const kiste = document.querySelector('p')
const lenta = document.querySelector('figure')

const schluessel_ls = 'schluessel_local_storage' // создали имя ключа
const erhalten_ls = localStorage.getItem(schluessel_ls) // получаем из ЛС и сохраняем в переменную массив картинок 

if (erhalten_ls) {
	let ende_mass = JSON.parse(erhalten_ls)
	f1(ende_mass)
}

btn.addEventListener(
	'click',
	function(){
		kiste.innerHTML = null
		lenta.innerHTML = null

		const limit = +kollektion[0].value
		const anfrage = +kollektion[1].value

		let a = `https://jsonplaceholder.typicode.com/photos?_page=${anfrage}&_limit=${limit}`

		if( 
			isNaN(limit) || isNaN(anfrage) || (limit > 10 && anfrage > 10)  || (limit < 1 && anfrage < 1)
		){
			kiste.innerHTML = 'error'
		}
		else{
			fetch( // сделали запрос в облако 
				a, 
				{method : 'GET'} 
			).then(// в случае успеха:
				function(antwort){
					// каждый then должен что-то возвращать
					return antwort.json() // получили ответ с облака в формате json и конвертируем ответ в js-объект
				}
			).then(
				function(ergebniss){
					f1(ergebniss)

					localStorage.setItem( // сохраняем данные ЛС...
						schluessel_ls, // ...по имени ключа 
						JSON.stringify(ergebniss) // консервируем массив картинок в строку
					)
				}
			)
		}
	}
)

function f1(a){
	for (let i = 0; i < a.length; i++) {
		let bild = document.createElement('img')
		bild.src = a[i].thumbnailUrl
		lenta.appendChild(bild)
	}
	console.log(arguments);
}
