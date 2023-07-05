
import { Channel, connect } from 'amqplib'

export const createMessageChannel = async (): Promise<Channel> => {

    try {
        const connection = await connect('amqp://guest:guest@localhost:5672')
        const channel = await connection.createChannel()
        await channel.assertQueue('candles')
        console.log('Connected to RabbitMQ')

        return channel
    } catch (err) {
        console.log('Error while trying to connect to RabbitMQ')
        console.log(err)
        return err
    }
} 
