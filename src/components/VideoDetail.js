import React from 'react'

const VideoDetail = ({video}) => {
  return (
    !video
      ? <div>Loading...</div>
      : <div>{video.snippet.title}</div>
  )
}

export default VideoDetail
