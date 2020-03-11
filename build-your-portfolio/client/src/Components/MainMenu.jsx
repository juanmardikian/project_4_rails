import React from 'react'
import Software from './Software'
import Food from './Food'
import Health from './Health'
import Robotics from './Robotics'
import Banks from './Banks'

export default function MainMenu(props) {
  return (
    <div>
        <Software stocks={props.stocks} />
        <Food stocks={props.stocks} />
        <Health stocks={props.stocks}/>
        <Robotics stocks={props.stocks} />
        <Banks stocks={props.stocks}/>
    </div>
  )
}
