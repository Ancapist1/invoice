import amqp, { Channel, Connection } from "amqplib";
import { Invoice } from "./schemas/invoice";

export class RabbitMQ {
  channel: Channel;
  static instance: RabbitMQ;

  async createChannel() {
    const connection = await amqp.connect("amqp://localhost:5672");
    this.channel = await connection.createChannel();
  }

  async publishMsg(msg: Invoice) {
    await this.channel.assertQueue("create");
    this.channel.publish("", "create", Buffer.from(JSON.stringify(msg)));
  }

  async deleteMsg(msg: number) {
    await this.channel.assertQueue("delete");
    this.channel.publish("", "delete", Buffer.from(JSON.stringify(msg)));
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
