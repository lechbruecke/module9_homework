const kollektion = document.querySelectorAll('input')
const kasten = document.querySelector('p')
const btn = document.querySelector('button')
const bild = document.querySelector('img')

btn.addEventListener(
	'click',
	()=>{
		const fenster_1 = +kollektion[0].value
		const fenster_2 = +kollektion[1].value
		const seite = `https://dummyimage.com/${fenster_1}x${fenster_2}/`
		kasten.textContent = ''
		bild.src = ''
		
		if(
			isNaN(fenster_1) || isNaN(fenster_2)
		){
			kasten.textContent = 'error'
		}
		else if(
			(fenster_1 >= 100 && fenster_1 <= 300) && (fenster_2 >= 100 && fenster_2 <= 300)
		){
			fetch(
				seite, // отправляем запрос на сервер
			).then( // в случае успеха
				(antwort)=>{
					if(
						antwort.status !== 200
					)
					{
						kasten.textContent = 'сервер не отвечает'
						return
					}
					bild.src = seite
				}
			).catch(
				(fehler)=>{
					kasten.textContent = 'сервер не отвечает'
				}
			)
		}
		else{
			kasten.textContent = 'одно из чисел вне диапазона от 100 до 300'
		}
	}
)
