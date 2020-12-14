import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'

const Home = () => {
    const [markdown,setMarkdown] = useState('## markdown Preview')
    return (
        
        <div className='home'>
                <textarea className='home-textarea' value={markdown} onChange={(e)=>setMarkdown(e.target.value)}></textarea>
            <div className='home-result'>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    )
}

export default Home
