import React from 'react'
import rout1 from '../images/route1.jpg'
import rout2 from '../images/rout2.jpg'
import rout3 from '../images/rout3.jpg'
import rout4 from '../images/rout4.jpg'
import filter from '../images/filter.jpg'
const RoutinesPage = () => {
  const card = [
    { src: rout1, text: 'Spring Nordinc Routine',  },
    { src: rout2, text: 'Nourish, Restore, and Illuminate your Skin ...',  },
    { src: rout3, text: 'The Fresh-Faced Regimen: Nurture. Protect. Enhance. ',  }
    
  ];
  return (
    
    <div className='prod'>
      <header>
        <h1>Routines</h1>
        <img src={filter} alt='' />
      </header>
      <div className='prodCard'>
        {card.map((index) => (
          <div key={index} className='routCardDiv'>
            <img src={index.src} alt='img' style={{width:'148px',height:'133px'}}/>
            <p className='routCardDivText'>{index.text}</p>
          </div>
        ))}
        <div className='routCardDiv' >
          <img src={rout4} alt='img' style={{ width: '53px', height: '46px', position:'relative',top:'81px',right:'33px' }} />
          <p className='routCardDivText' style={{ position: 'relative',margin:'62%' }}>See more Routines</p>
        </div>
      </div>
      
    </div>
  )
}

export default RoutinesPage