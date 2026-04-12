import './style.css'
import { plantFamilies, allPlants } from '@/data/plants'
import { homeView, familyView, plantView, notFoundView } from '@/components/views'

const app = document.querySelector('#app')

function getRoute() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const parts = path.split('/').filter(Boolean)

  if (parts.length === 0) return { type: 'home' }
  if (parts.length === 1) {
    const family = plantFamilies.find((item) => item.slug === parts[0])
    if (family) return { type: 'family', family }
  }
  if (parts.length === 2) {
    const plant = allPlants.find((item) => item.familySlug === parts[0] && item.slug === parts[1])
    if (plant) return { type: 'plant', plant }
  }
  return { type: 'not-found' }
}

function navigate(path) {
  window.history.pushState({}, '', path)
  render()
  window.scrollTo({ top: 0, behavior: 'instant' })
}

window.addEventListener('popstate', render)

document.addEventListener('click', (event) => {
  const link = event.target.closest('[data-link]')
  if (!link) return
  event.preventDefault()
  navigate(link.getAttribute('href'))
})

function attachSpeech() {
  const playButton = document.querySelector('#speak-btn')
  const stopButton = document.querySelector('#stop-btn')
  const status = document.querySelector('#voice-status')
  if (!playButton || !stopButton || !status) return

  const hasSpeech = 'speechSynthesis' in window
  if (!hasSpeech) {
    status.textContent = '当前浏览器不支持语音播放'
    playButton.disabled = true
    stopButton.disabled = true
    return
  }

  let isPlaying = false
  let utterance = null

  const setStatus = (text) => {
    status.textContent = text
  }

  playButton.addEventListener('click', () => {
    const text = decodeURIComponent(playButton.dataset.audio || '')
    if (isPlaying) {
      window.speechSynthesis.cancel()
      isPlaying = false
      setStatus('已停止')
      playButton.textContent = '▶ 播放语音'
      return
    }
    window.speechSynthesis.cancel()
    utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'zh-CN'
    utterance.rate = 1
    utterance.pitch = 1
    utterance.onstart = () => {
      isPlaying = true
      setStatus('播放中…')
      playButton.textContent = '⏸ 停止语音'
    }
    utterance.onend = () => {
      isPlaying = false
      setStatus('播放完成')
      playButton.textContent = '▶ 播放语音'
    }
    utterance.onerror = () => {
      isPlaying = false
      setStatus('语音播放失败')
      playButton.textContent = '▶ 播放语音'
    }
    window.speechSynthesis.speak(utterance)
  })

  stopButton.addEventListener('click', () => {
    window.speechSynthesis.cancel()
    isPlaying = false
    setStatus('已停止')
    playButton.textContent = '▶ 播放语音'
  })
}

function render() {
  const route = getRoute()
  if (route.type === 'home') app.innerHTML = homeView()
  if (route.type === 'family') app.innerHTML = familyView(route.family)
  if (route.type === 'plant') app.innerHTML = plantView(route.plant)
  if (route.type === 'not-found') app.innerHTML = notFoundView()
  attachSpeech()
}

render()
