import axios from 'axios'

const KEY = 'AIzaSyC6nz7_t3ZwBK2OjqP5WwE_J6FFWNG07AQ'


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})
