import dotenv from 'dotenv'
dotenv.config()
import app from './app'

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=> {
    console.log(`ESCUTANDO NA PORTA ${PORT}`)
})