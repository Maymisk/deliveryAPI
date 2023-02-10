<p align="center">
  <img src="https://gifs.eco.br/wp-content/uploads/2022/09/gifs-de-delivery-2.gif" />
</p>

# 🚚 Delivery API
This is a delivery service example REST API.

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#-running-locally">Running Locally</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#-functionalities-by-model">Functionalities</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#-api-docs">Docs</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#-entity-relationship-diagram">ERD</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#-improvements">Improvements</a>&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## 🏃‍♂️ My journey

<p align="center">
  <strong>This API was built on January 2022, despite the commits saying otherwise 💀.</strong>
</p>

This project was my first experience with the **Prisma ORM (the best to ever exist)**, as well as **Docker** - a tool I had a hard time with back then.

Furthermore, during its development I learned about JWT, middlewares, error handling and the SOLID 🧱 principles. 




## ✨ Technologies

- Node JS
- Typescript
- Express
- Prisma 💠
- Docker 🐋
- PostgreSQL 🐘
- Bcrypt 🔒

## 💻 Running Locally

To run this project, [**you will need Docker installed**](https://docs.docker.com/desktop/).

Clone the project

```bash
  git clone https://github.com/Maymisk/deliveryAPI.git
```

Get in the project's directory

```bash
  cd deliveryAPI
```

Install the dependencies

```bash
  npm install
  #
  yarn 
```
Set up the database container

```bash
docker-compose up
```

With the container online, run the migrations

```bash
npm run prisma db push
#
yarn prisma db push
```

Run the server

```bash
  npm run dev
  #
  yarn dev
```


## ✅ Functionalities by Model

💵 The clients are the ones who order stuff - **they create deliveries.**

- Client
    - Create client
    - Authenticate client
    - Find deliveries by client
#
🏃‍♂️ The deliverymen are special users **responsible for taking up the deliveries created by the clients.**

- Deliveryman
    - Create deliveryman
    - Authenticate deliveryman
    - Find deliveries by Deliveryman

#

📦 The deliveries are the entities created by the clients. **Upon creation, they are all marked as "available"** - a deliveryman can then take up a delivery, **which'll mark it as "unavailable".**

Once a deliveryman is done with their delivery, they can *finish it*.
- Delivery
    - Create delivery
    - Find available deliveries
    - Finish a delivery
    - Update a delivery's responsible deliveryman




## 📃 API Docs

```The base url for the API is http://localhost:3000```

<p align="center">
  <a href="#-client">Client</a>&nbsp;&nbsp;&nbsp;
  <a href="#-deliveryman">Deliveryman</a>&nbsp;&nbsp;&nbsp;
  <a href="#-delivery">Delivery</a>&nbsp;&nbsp;&nbsp;
</p>

### 💳 Client

```/client```

#### Creates a client

```http
POST /register
```

| Body Atts   | Type       | Description                           | Required |
| :---------- | :--------- | :---------------------------------- | :--------- |
| `username` | `string` | The client's username | ✅ |
| `password` | `string` | The client's password | ✅ |

#

#### Authenticates the client

```http
POST /authenticate
```

| Body Atts   | Type       | Description                           | Required |
| :---------- | :--------- | :---------------------------------- | :--------- |
| `username` | `string` | The client's username | ✅ |
| `password` | `string` | The client's password | ✅ |

This returns a *token*, which is ***required to access other routes***

#

#### Finds the deliveries a client created

```http
GET /deliveries
```

***Authentication required ✅*** 

| Header   | Type       | Description                           | Required |
| :---------- | :--------- | :---------------------------------- | :--------- |
| `authorization` | `string` | A Bearer Token generated on client/authenticate | ✅ |

#

### 🛵 Deliveryman

```/deliveryman```

#### Creates a deliveryman
```http
POST /register
```
| Body Atts   | Type       | Description                           | Required |
| :---------- | :--------- | :---------------------------------- | :--------- |
| `username` | `string` | The client's username | ✅ |
| `password` | `string` | The client's password | ✅ |

#

#### Authenticates a deliveryman

```http
POST /authenticate
```

| Body Atts   | Type       | Description                           | Required |
| :---------- | :--------- | :---------------------------------- | :--------- |
| `username` | `string` | The client's username | ✅ |
| `password` | `string` | The client's password | ✅ |

#

#### Finds the deliveries related to a deliveryman

```http
GET /deliveries
```
***Authentication required ✅*** 

| Header   | Type       | Description                           | Required |
| :---------- | :--------- | :---------------------------------- | :--------- |
| `authorization` | `string` | A Bearer Token generated on deliveryman/authenticate | ✅ |

#

### 📦 Delivery

```/delivery```

#### Creates a delivery

```http
POST /create
```
***Authentication required ✅***

| Body Atts   | Type       | Description                           | Required |
| :---------- | :--------- | :---------------------------------- | :--------- |
| `item_name` | `string` | The name of the item to purchase | ✅ |

| Header   | Type       | Description                           | Required |
| :---------- | :--------- | :---------------------------------- | :--------- |
| `authorization` | `string` | A Bearer Token generated on client/authenticate | ✅ |

#

#### Finds deliveries marked as "available"

```http
GET /available
```

***Authentication required ✅***

| Header   | Type       | Description                           | Required |
| :---------- | :--------- | :---------------------------------- | :--------- |
| `authorization` | `string` | A Bearer Token generated on deliveryman/authenticate | ✅ |

#

#### Finishes a delivery

```http
PUT /finish/${delivery_id}
```

***Authentication required ✅***

| Parameter   | Type       | Description                           | Required |
| :---------- | :--------- | :---------------------------------- | :--------- |
| `delivery_id` | `string` | The id of the delivery to finish | ✅ |


| Header   | Type       | Description                           | Required |
| :---------- | :--------- | :---------------------------------- | :--------- |
| `authorization` | `string` | A Bearer Token generated on deliveryman/authenticate | ✅ |

#

#### Updates a delivery's responsible deliveryman

```http
PUT /updateDeliveryman/${delivery_id}
```

***Authentication required ✅***

| Parameter   | Type       | Description                           | Required |
| :---------- | :--------- | :---------------------------------- | :--------- |
| `delivery_id` | `string` | The id of the delivery to update | ✅ |


| Header   | Type       | Description                           | Required |
| :---------- | :--------- | :---------------------------------- | :--------- |
| `authorization` | `string` | A Bearer Token generated on deliveryman/authenticate | ✅ |

#

## 🗺 Entity Relationship Diagram

<p align="center">
   <img src="/prisma/ERD.svg" />
</p>

## 🔧 Improvements

Write tests!
