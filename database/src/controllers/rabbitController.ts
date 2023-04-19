import { addToDB } from "../model/manageDatabase";
import { RabbitMQ } from "../rabbit";

export async function rabbitMQPublisher() {
  const rabbitMQ = await RabbitMQ.getInstance();
  const channel = rabbitMQ.getChannel();
  channel.consume("create", (msg) => {
    if (msg) {
      const data = JSON.parse(msg.content.toString());
      addToDB(data);
    }
  });
}
