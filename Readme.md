
# Image Text Parser

Its helps you extract details from Business cards, The details its help you extract are Name, company name, email, website, address, phone number.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Amit4218/image_text_parser.git
```

Go to the project directory

```bash
  cd image_text_parser
```

## Installation

After cloning or downloading the file. Run this commands.

### Frontend

```bash
  cd Frontend
  npm install
  npm run dev

```

### Backend

```bash
  cd Backend
  npm install
  npm run dev

```

## Environment Variables

To run this project you need .env file in both the `Frontend` & `Backend` folder.

### Frontend `.env`

Get your Cloudinary credentials from [here](https://cloudinary.com/)

`VITE_CLOUDINARY_CLOUD_NAME`<br />
`VITE_CLOUDINARY_API_KE`Y<br />
`VITE_CLOUDINARY_API_SECRET`<br />
`VITE_CLOUDINARY_PRESET`<br />
`VITE_CLOUDINARY_API_UPLOAD_URL`<br />
`VITE_API_URI_LOCAL`<br />

### Backend `.env`

Get your Gemeni credentials from [here](https://ai.google.dev/gemini-api/docs/api-key)

Get your MongoDb credentials from [here](https://cloud.mongodb.com/)

`GEMENAI_API_KEY`<br/>
`MONGO_URI`<br/>
`PORT`<br/>
`JWT_SECRET`<br/>


