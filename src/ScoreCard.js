import React from 'react'
import { useState } from 'react'
import './ScoreCard.css'

function ScoreCard() {
    let [click,Setclick]=useState(false)
    const handel=()=>{
        Setclick(!click)
    }
    let [Teamname,Setteamname]=useState('')
    let [Playerlimit,SetPlayerlimit]=useState('')
    let [run, Setrun] = useState(0)
    let [six, Setsix] = useState(0)
    let [four, Setfour] = useState(0)
    let [striker, Setstriker] = useState('')
    let [nonStriker, Setnonstriker] = useState('')
    let [wicket, Setwicket] = useState(0)
    let [ball, Setball] = useState(0)
    let [over, Setover] = useState(0)
    let [status, Setstatus] = useState("Team Playing")

    const Single = () => {
        Setrun(run + 1)
        Setstriker(nonStriker)
        Setnonstriker(striker)
        if (ball === 5) {
            Setover(over + 1)
            Setball(0)
            Setstriker(striker)
            Setnonstriker(nonStriker)
        } else {
            Setball(ball + 1)
        }
    }

    function Four() {
        Setrun(run + 4)
        Setfour(four + 1)
        if (ball === 5) {
            Setover(over + 1)
            Setball(0)
            Setstriker(nonStriker)
            Setnonstriker(striker)
        } else {
            Setball(ball + 1)
        }
    }

    function Six() {
        Setrun(run + 6)
        Setsix(six + 1)
        if (ball === 5) {
            Setover(over + 1)
            Setball(0)
            Setstriker(nonStriker)
            Setnonstriker(striker)
        } else {
            Setball(ball + 1)
        }
    }

    function Wide(){
        Setrun(run+1)
    }

    let num=Number(Playerlimit)
    function Wicket() {
        Setwicket(wicket + 1)
        Setstriker("")
        if (wicket === num-2) {
            Setstatus("Team All Out")
        }

        if(ball===5){
            Setstriker(nonStriker)
            Setnonstriker(striker)
            Setover(over+1)
            Setball(0)
        }else{
            Setball(ball+1)
        }
    }

    function NonWicket(){
        Setnonstriker("")
        Setwicket(wicket+1)
        if (wicket === num-2) {
            Setstatus("Team All Out")
        }

        if(ball===5){
            Setstriker(nonStriker)
            Setnonstriker(striker)
        }else{
            Setball(ball+1)
        }
    }

    function MinusRun(){
        Setrun(run-1)
    }

    function MinusWicket(){
        Setwicket(wicket-1)
    }

    function MinusSix(){
        Setsix(six-1)
    }

    function MinusFour(){
        Setfour(four-1)
    }

    function Noball(){
        Setrun(run+1)
    }

    function Balls(){
        Setball(ball-1)
    }

    function Overs(){
        Setover(over-1)
    }


    return (
        <div className='main'>
            <div className="teamName">
                <h2>Team {Teamname}</h2>
                <h3 onClick={handel}>Menu</h3>
            </div>


            <div className="watch">
                <div className="playing">
                    <h1>{striker} *</h1>
                    <h1>{nonStriker}</h1>
                </div>
                <div className="run">
                    <h1 style={{color: "aqua"}}>Run</h1>
                    <h2>{run}</h2>
                </div>

                <div className="ball">
                    <h1 style={{color: "gray"}}>Ball</h1>
                    <h2>{ball}</h2>
                </div>

                <div className="over">
                    <h1 style={{color: "Green"}}>Over</h1>
                    <h2>{over}</h2>
                </div>

                <div className="wicket">
                    <h1 style={{color: "red"}}>Wicket</h1>
                    <h2>{wicket}</h2>
                </div>

                <div className="six">
                    <h1 style={{color: "orange"}}>Six</h1>
                    <h2>{six}</h2>
                </div>

                <div className="four">
                    <h1 style={{color: "greenyellow"}}>Four</h1>
                    <h2>{four}</h2>
                </div>
            </div>
            
                <div className="status">
                    <h1>Status</h1>
                    <h2>{status}</h2>
                </div>

            <div className="fill">
                <div className='left'>
                <h3>Striker Player</h3>
                <input type="text" id='name' placeholder='Striker Name' onChange={(e) => Setstriker(e.target.value)} />
                </div>


                <div className="middle">
                <h3>NonStriker Player</h3>
                <input type="text" placeholder='NonStriker Name' onChange={(e) => Setnonstriker(e.target.value)} />
                </div>

                <div className='right'>
                <h3>Player Limit</h3>
                <input type="text" value={Playerlimit} placeholder='Wicket Limit' onChange={(e) => SetPlayerlimit(e.target.value)} />
                </div>

                <div className='right2'>
                <h3>Team Name</h3>
                <input type="text" value={Teamname} placeholder='Team Name' onChange={(e) => Setteamname(e.target.value)} />
                </div>
            </div>

            <div className={click?"extra active":"extra"}>
                <button onClick={MinusRun}>Run-1</button>
                <button onClick={MinusWicket}>Wicket-1</button>
                <button onClick={MinusSix}>Six-1</button>
                <button onClick={MinusFour}>Four-1</button>
                <button onClick={Noball}>No-ball</button>
                <button onClick={Wide}>Wide</button>
                <button onClick={Balls}>Ball-1</button>
                <button onClick={Overs}>Over-1</button>
            </div>

            <div className="function">
                <button className='single' onClick={Single}>Single</button>
                <button className='four' onClick={Four}>Four</button>
                <button className='six' onClick={Six}>Six</button>
                <button className='wicket' disabled={wicket === num-1} onClick={Wicket}>Wicket</button>
                <button className='non' disabled={wicket === num-1} onClick={NonWicket}>Non-Striker Wicket</button>
            </div>
        </div>
    )
}

export default ScoreCard