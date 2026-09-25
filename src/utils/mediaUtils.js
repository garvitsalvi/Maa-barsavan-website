const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.avi', '.mkv', '.m4v', '.ogv', '.3gp']
const VIDEO_HOSTS = ['youtube.com', 'youtu.be', 'vimeo.com', 'dailymotion.com']

export const isVideo = (item) => {
  if (!item || !item.src) return false

  if (item.type === 'video') return true

  const src = item.src.toLowerCase()

  if (VIDEO_HOSTS.some(host => src.includes(host))) return true

  if (VIDEO_EXTENSIONS.some(ext => src.includes(ext))) return true

  return false
}

export const isYouTube = (src) => {
  if (!src) return false
  return src.includes('youtube.com') || src.includes('youtu.be')
}

export const getYouTubeId = (src) => {
  if (!src) return null
  const url = src.toLowerCase()
  if (url.includes('youtube.com')) {
    const match = src.match(/[?&]v=([^&]+)/)
    return match ? match[1] : null
  }
  if (url.includes('youtu.be')) {
    return src.split('/').pop().split('?')[0]
  }
  return null
}

export const getMediaType = (item) => {
  if (isVideo(item)) return 'video'
  return 'image'
}