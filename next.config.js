// replace [yourprojectname] and [yourdomain.com] with your actual project name and (custom) domain
const cloudflareImageLoader = ({ src, width, quality }) => {
  if (!quality) {
    quality = 75
  }
  return `https://images.[yourprojectname].workers.dev?width=${width}&quality=${quality}&image=https://[yourdomain.com]${src}`
}
