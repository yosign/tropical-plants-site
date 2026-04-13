import os, json, requests, subprocess, tempfile
from pathlib import Path

FFMPEG = r"C:\Users\Lenovo\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.0.1-full_build\bin\ffmpeg.exe"
ENDPOINT = "https://api.novita.ai/v3/minimax-speech-2.5-turbo-preview"
env_path = Path(__file__).resolve().parents[1] / '.env.local'
if env_path.exists():
    for line in env_path.read_text(encoding='utf-8').splitlines():
        if '=' in line and not line.strip().startswith('#'):
            k, v = line.split('=', 1)
            os.environ.setdefault(k.strip(), v.strip())

API_KEY = os.environ.get("NOVITA_API_KEY", "")
VOICE = os.environ.get("NOVITA_VOICE", "Deep_Voice_Man")
SPEED = float(os.environ.get("NOVITA_SPEED", "1.15"))

root = Path(__file__).resolve().parents[1]
plants_file = root / 'src' / 'data' / 'plants.js'
out_root = root / 'public' / 'audio'

text = plants_file.read_text(encoding='utf-8')
items = []
for chunk in text.split('createPlant({')[1:]:
    block = chunk.split('})', 1)[0]
    def pick(name):
        import re
        m = re.search(rf"{name}: '([^']+)'", block)
        return m.group(1) if m else None
    slug = pick('slug')
    audio = pick('audioText')
    family_slug = 'araceae'
    if slug and audio:
        items.append({'familySlug': family_slug, 'slug': slug, 'audioText': audio})

if not API_KEY:
    raise SystemExit('Missing NOVITA_API_KEY')

for item in items:
    out_dir = out_root / item['familySlug']
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / f"{item['slug']}.mp3"
    if out_path.exists():
        print('skip', out_path)
        continue
    headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}
    body = {
        "model": "minimax-speech-2.5-turbo-preview",
        "text": item['audioText'],
        "voice_setting": {"voice_id": VOICE, "speed": SPEED, "pitch": 0},
        "audio_setting": {"sample_rate": 32000, "bitrate": 128000, "format": "mp3", "channel": 1}
    }
    r = requests.post(ENDPOINT, headers=headers, json=body, timeout=120)
    data = r.json()
    if 'audio' not in data:
        raise RuntimeError(f"TTS failed for {item['slug']}: {data}")
    audio_bytes = bytes.fromhex(data['audio'])
    with tempfile.NamedTemporaryFile(suffix='.mp3', delete=False) as tmp:
        tmp.write(audio_bytes)
        tmp_path = tmp.name
    subprocess.run([FFMPEG, '-y', '-i', tmp_path, '-af', 'volume=4.0,alimiter=limit=0.95', str(out_path)], check=True, capture_output=True)
    os.unlink(tmp_path)
    print('ok', out_path)

print('done')
