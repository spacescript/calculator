const NumberList = () => {
    <div 
                key={soundBank[i].audioKey}
                className={['drum-pad', i].join(' ')}
                // className= 'drum-pad'
                id={soundBank[i].audioKey} 
                // onKeyDown={handleKeyPress}
                onClick={() => {
                playSound(soundBank[i].keyTrigger)
              }}>
                {soundBank[i].keyTrigger}
                <audio 
                  className='clip'
                  id={soundBank[i].keyTrigger}
                  src={soundBank[i].audioKey}
                ></audio>
              </div>
}

export default NumberList;