import React from 'react'
import { useState, useEffect } from 'react'
//import axios from 'axios'

type Props = {
    question: string,
    options: Array<string>,
  }
function Poll({question,options}:Props) {
    // const [selectedOption, setSelectedOption] = useState(null)
    // const [results, setResults] = useState({})
    // const handleOptionClick = (e) => {
    //     setSelectedOption(e.target.value)
    //     console.log(selectedOption)
        // make a request to the backend to submit the user's selection
        // axios.post('/api/submit-poll', { option: e.target.value })
      //}
    
    //   useEffect(() => {
    //     // fetch the updated poll results from the backend and update the state
    //     const fetchResults = async () => {
    //       const { data } = await axios.get('/api/poll-results')
    //       setResults(data)
    //     }
    //     fetchResults()
    //   }, [])
  return (
    <div className='flex flex-col md:space-y-10 space-y-5 lg:text-2xl md:text-xl text-lg text-left md:mx-40 mx-20'>
        <div className='text-white'>{question}</div>
        
        <button className='text-white bg-[#F8F8F8]/5 border-[#7338AC] md:h-16 h-12 rounded-2xl border-2 text-left px-4 justify-center'>Option 1</button>
        

      
    </div>
  )
}

export default Poll