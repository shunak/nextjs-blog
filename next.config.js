// replace [yourprojectname] and [yourdomain.com] with your actual project name and (custom) domain
const cloudflareImageLoader = ({ src, width, quality }) => {
  if (!quality) {
    quality = 75
  }
  return `https://images.shu-ch.workers.dev?width=${width}&quality=${quality}&image=https://storage.googleapis.com/nextblog-img/${src}`
}
