import axios from "axios"
import { useEffect, useState } from "react"
import { rest } from 'msw'


export const Test = (props) => {
    const [test, setTest] = useState("")
    useEffect(() => {
        // rest.get('/test', (req, res, ctx) => {
        //     return res(
        //       ctx.json({
        //         test: "TEST123"
        //       })
        //     )
        //   })
        axios.get("/test").then(res => {
            setTest(res.data);
        })
    }, [])
    
    return (
        <div>
            <p>{test.message}</p>
        </div>
    )
}