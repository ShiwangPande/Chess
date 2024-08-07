import  { useEffect, useState } from 'react'
const WS_URL = "ws://localhost:8080"
const useSocket = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    useEffect(()=>{
        const ws = new WebSocket(WS_URL);
        ws.onopen = () =>{
            // console.log("connect");
            setSocket(ws);
        }

        ws.onclose = () =>{
            // console.log("disconnect");
            setSocket(null);
        }
        return ()=>{
            ws.close();
        }
    }, [])
  return socket;
}

export default useSocket