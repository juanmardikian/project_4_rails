import React from 'react'
import Software from './Software'
import Food from './Food'
import Health from './Health'
import Robotics from './Robotics'
import Banks from './Banks'

export default function MainMenu(props) {
  return (
    <div>
        <Software stocks={props.stocks} invest={props.invest} setInvest={props.setInvest} />
        <Food stocks={props.stocks} invest={props.invest} setInvest={props.setInvest} />
        <Health stocks={props.stocks} invest={props.invest} setInvest={props.setInvest}/>
        <Robotics stocks={props.stocks} invest={props.invest} setInvest={props.setInvest} />
        <Banks stocks={props.stocks} invest={props.invest} setInvest={props.setInvest}/>
    </div>
  )
}
