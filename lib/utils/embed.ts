//Generate the Youtube, Vimeo, or Loom embed URL based on an URL from the user
export function generateVideoEmbed(url: string) {
  if (url.includes('https://youtube.com/')) {
    return `https://www.youtube.com/embed/${url.split('v=')[1]}`
  }
  // Handle youtu.be links
  else if (url.includes('https://youtu.be/')) {
    return `https://www.youtube.com/embed/${url.split('be/')[1]}`
  } else {
    return url
  }
}

