import React from 'react'
import Main from '../components/section/Main'
import { webdText } from '../data/webd'
import { Link } from 'react-router-dom'

const Video = () => {
    return (
        <Main 
            title = "유튜브 비디오 영상"
            description="유튜브 비디오 영상을 볼 수 있습니다.">
            <section id='videoPage'>
            <h2>🤣 웹디자인기능사 준비는 이걸로!</h2>
            <div className="video__inner">
                {webdText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
                </div>
            </section>
        </Main>
    )
}

export default Video