let i = document.querySelector('input')
let btn = document.querySelector('button')
let fenster = document.querySelector('div')
let zahl

btn.addEventListener(
	'click',
	()=>{
		zahl = +i.value
		if(
			!isNaN(zahl)
			){
				if(
					zahl > 0 && zahl < 11
					){
						let a = new XMLHttpRequest // создали объект, с помощью которого сделаем запрос
						a.open( // устанавливаем настройки запроса 
							'GET', // получить
							`https://jsonplaceholder.typicode.com/photos?_limit=${zahl}`
						)
						a.send() // отправляем на сервер
						a.onload = ()=>{ // после ответа сервера выполняем код ф-ии
							let zeile = a.response // ответ сервера
							let mass = JSON.parse(zeile)
							console.log(
								zeile,
								mass
							);
							fenster.innerHTML = ''
							mass.forEach(
								(elem)=>{
									let bild = document.createElement('img')
									bild.src = elem.thumbnailUrl
									fenster.appendChild(bild)
								}
							)
						}
					}
					else {
						fenster.innerHTML = 'число вне диапазона от 1 до 10'
					}
			}
	}
)
