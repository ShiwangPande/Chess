import { Color, PieceSymbol, Square } from 'chess.js';
import React, { useState } from 'react'
import { MOVE } from '../screen/Game';

const ChessBoard = ({chess, board, socket, setBoard}:{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    chess: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setBoard: any;
    board:   ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][];
    socket: WebSocket;
}) => {
    const [from, setFrom] = useState<null | Square>(null);
    // const [to, setTo] = useState<null | Square>(null);
    
  return (
    <div className=''>
        {board.map((row, i)=>{
            return <div key={i} className='flex'>
                {row.map((square, j)=>{
                    const squareRepresentation = String.fromCharCode(97 + (j % 8)) + "" + (8-i) as Square;
                    return <div onClick={()=>{
                        if (!from){
                            setFrom(squareRepresentation);
                        }else{
                            socket.send(JSON.stringify({
                                type: MOVE,
                                payload:{
                                    move: {
                                        from,
                                        to: squareRepresentation,
                                    }
                                  
                                }
                            }))
                            setFrom(null);
                            chess.move({
                                from,
                                to: squareRepresentation,
                            })
                    setBoard(chess.board());
                            console.log({
                                from,
                                to: squareRepresentation,
                            })
                        }
                    }} key={j} className={`w-16 h-16 ${(i+j)%2 === 0 ? 'bg-[#739552] hover:bg-yellow-200' : 'bg-[#ebecd0] hover:bg-yellow-200'}`}>
                        <div className='w-full justify-center flex h-full'>
                            <div className='h-full flex justify-center flex-col'>
                        {square ? <img className='w-7 ' src={`/${square?.color === "w" ? square?.type : `${square?.type?.toUpperCase()} copy`}.png`} alt="" />: null}
                        </div>
                        </div>
                    </div>
                })}
            </div>
        })}
        ChessBoard</div>
  )
}

export default ChessBoard