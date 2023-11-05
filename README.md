<p align="center">
  <p align="center">:raised_hands: :raised_hands: :raised_hands:</p>
  <h3 align="center">stashify-next</h3>
</p>

<p align="center">
  <img src="https://github.com/dominickolbe/stashify-next/blob/main/public/img/darth-kermit-enhanced.jpg?raw=true" width="350" />
  <p align="center">source of something special, lol<p>
</p>

---

## PostgreSQL Database Setup with Docker Compose

This project sets up a PostgreSQL database using Docker Compose.

## Prerequisites

- Docker
- Docker Compose

## Setup

Create a `.env` (based on `.env.example`) file in the project root directory with the following variables:

Run the following command to start the PostgreSQL database

```bash
docker compose up -d
```

This command will start a PostgreSQL server on the port specified in the .env file. The POSTGRES_USER, POSTGRES_PASSWORD, and POSTGRES_DB environment variables set the default credentials and database, which you can use to connect to the database.

The data stored in the database persists across container restarts thanks to the Docker volume named postgres_data.

### Connecting to the Database

You can connect to the database using the credentials and port number specified in the .env file. The host is localhost if you're running the Docker container on your local machine.

## Docker

Build the image

```bash
docker build -t stashify-next .
```

Run the container

```bash
docker run --name stashify_next -p 8080:3000 stashify-next
```

---

## LICENSE

Copyright © 2023 [Dominic Kolbe](https://dominickolbe.dk) :de:
