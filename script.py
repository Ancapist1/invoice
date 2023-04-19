import docker
client = docker.from_env()

client.images.build(path = './gateway/Dockerfile', tag = 'invoice-gateway')
client.images.build(path = './database/Dockerfile', tag = 'invoice-database')

client.containers.run(image = 'invoice-gateway', ports = { 8081:8081 })
# docker run --rm -it -p 15672:15672 -p 5672:5672 rabbitmq:3-management

# os.system(gnome-terminal "docker run --rm -it -p 15672:15672 -p 5672:5672 rabbitmq:3-management") &
# gnome-terminal  "cd gateway && docker build -t invoice-gateway ." &
# gnome-terminal  "cd ../database && docker build -t invoice-database ." &
# gnome-terminal  "docker run -p 8080:8080 invoice-gateway" &
# gnome-terminal  "docker run -p 8081:8081 invoice database"