import  { useEffect, useState } from 'react'
import ChessBoard from '../components/ChessBoard'
import { Button } from '../components/Button'
import useSocket from '../hooks/useSocket';
import {Chess} from 'chess.js';
export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";


function Game() {
    const socket = useSocket();
    const [chess] = useState(new Chess());
    const [board, setBoard] = useState(chess.board()); 
    const [started, setStarted] = useState(false)
      useEffect(()=>{
        if (!socket){
            return;
        }
        socket.onmessage = (event)=>{
            const message = JSON.parse(event.data);
            console.log(message);
            switch (message.type){
                case INIT_GAME:
                   setStarted(true)
                    setBoard(chess.board());
                    console.log("Game Initialized");
                    break;
                case MOVE:
                    // eslint-disable-next-line no-case-declarations
                    const move = message.payload;
                    chess.move(move)
                    setBoard(chess.board());
                    console.log("Move Made");
                    break;
                case GAME_OVER:
                    console.log("Game Over");
                    break;
            }
        }
    },[chess, socket]);

    if (!socket) return <div>loading...</div>
  return (
    <div className='flex justify-center'>
        <div className='pt-8 max-w-screen-lg w-full'>
            <div className='grid grid-cols-6 gap-4 w-full'>
                <div className='col-span-4 flex justify-center  w-full'>
                    <ChessBoard chess={chess} setBoard={setBoard} socket={socket} board={board}/>
                </div>
                <div className='col-span-2 w-full bg-[#262522] flex  justify-center'>
                    <div className='pt-8 w-full '>
              {!started &&  <Button onClick={()=>{
                    socket.send(JSON.stringify({
                        type: INIT_GAME,
                    }))
                }} > 
            <h1 className="text-white text-center text-3xl font-bold">Play</h1> </Button>}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Game