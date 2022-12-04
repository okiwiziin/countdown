const nowDate = new Date()
const launchDate = new Date('2022-12-28 19:00')

let totalSeconds = (launchDate / 1000) - (nowDate / 1000)

const decrementSecondsInterval = setInterval(() => {
  decrementTime()
}, 1000)

function decrementTime() {
  if (totalSeconds < 2) clearInterval(decrementSecondsInterval)
  totalSeconds--
  
  const days = Math.floor(totalSeconds / (3600 * 24))
	const hours = Math.floor((totalSeconds / 3600) % 24)
	const minutes = Math.floor((totalSeconds / 60) % 60)
	const seconds = Math.floor(totalSeconds % 60)

  document.getElementById('days').innerText = days.toString().padStart(2, '0')
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0')
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0')
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0')
}