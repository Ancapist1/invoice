import amqp, { Channel, Connection } from "amqplib";
export class RabbitMQ {
  channel: Channel;
  static instance: RabbitMQ;

  async createChannel() {
    const connection = await amqp.connect("amqp://localhost:5672");
    this.channel = await connection.createChannel();
  }

  getChannel() {
    return this.channel;
  }

  static async getInstance() {
    if (this.instance) {
      return this.instance;
    }
    const rabbitMQ = new RabbitMQ();
    await rabbitMQ.createChannel();
    return rabbitMQ;
  }
}
