# learn-nats
```bash
docker run -ti --rm \
  --name nats-server \
  -p 4222:4222 \
  -p 8222:8222 \
  -p 6222:6222 \
  nats:latest
```