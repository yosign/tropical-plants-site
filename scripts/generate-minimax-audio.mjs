import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { allPlants } from '../src/data/plants.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const publicDir = path.join(root, 'public', 'audio')

const apiKey = process.env.MINIMAX_API_KEY
const groupId = process.env.MINIMAX_GROUP_ID
const voiceId = process.env.MINIMAX_VOICE_ID || 'female-shaonv'

if (!apiKey || !groupId) {
  console.error('Missing MINIMAX_API_KEY or MINIMAX_GROUP_ID')
  process.exit(1)
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function synthesizeToMp3(text, outputPath) {
  const res = await fetch('https://api.minimax.chat/v1/t2a_v2?GroupId=' + groupId, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'speech-02-hd',
      text,
      stream: false,
      voice_setting: {
        voice_id: voiceId,
        speed: 1,
        vol: 1,
        pitch: 0,
      },
      audio_setting: {
        sample_rate: 32000,
        bitrate: 128000,
        format: 'mp3',
        channel: 1,
      },
    }),
  })

  if (!res.ok) {
    throw new Error(`MiniMax TTS failed: ${res.status} ${await res.text()}`)
  }

  const data = await res.json()
  const base64 = data?.data?.audio || data?.audio
  if (!base64) throw new Error('No audio payload returned from MiniMax')
  await fs.writeFile(outputPath, Buffer.from(base64, 'base64'))
}

for (const plant of allPlants) {
  const familyDir = path.join(publicDir, plant.familySlug)
  await ensureDir(familyDir)
  const out = path.join(familyDir, `${plant.slug}.mp3`)
  console.log('Generating', out)
  await synthesizeToMp3(plant.audioText, out)
}

console.log('Done')
