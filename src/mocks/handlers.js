// src/mocks/handlers.js
import { rest } from 'msw'

const data = [
    {
      "firstName": "Salinas",
      "middleName": "Blankenship",
      "isActive": true,
      "balance": "$3,264.44",
      "age": 39,
      "eyeColor": "brown",
      "gender": "male",
      "company": "KEENGEN",
      "email": "salinasblankenship@keengen.com",
      "phone": "+1 (805) 553-2988"
    },
    {
      "firstName": "Isabel",
      "middleName": "Daniels",
      "isActive": true,
      "balance": "$2,381.98",
      "age": 20,
      "eyeColor": "brown",
      "gender": "female",
      "company": "TECHMANIA",
      "email": "isabeldaniels@techmania.com",
      "phone": "+1 (850) 564-3617"
    },
    {
      "firstName": "Kaitlin",
      "middleName": "Marshall",
      "isActive": false,
      "balance": "$2,985.03",
      "age": 39,
      "eyeColor": "brown",
      "gender": "female",
      "company": "MEMORA",
      "email": "kaitlinmarshall@memora.com",
      "phone": "+1 (932) 548-2250"
    },
    {
      "firstName": "Boyd",
      "middleName": "Mason",
      "isActive": true,
      "balance": "$2,570.59",
      "age": 26,
      "eyeColor": "blue",
      "gender": "male",
      "company": "MANGLO",
      "email": "boydmason@manglo.com",
      "phone": "+1 (917) 545-2840"
    },
    {
      "firstName": "Carey",
      "middleName": "Beard",
      "isActive": true,
      "balance": "$1,030.17",
      "age": 39,
      "eyeColor": "green",
      "gender": "male",
      "company": "DANCITY",
      "email": "careybeard@dancity.com",
      "phone": "+1 (876) 427-3248"
    },
    {
      "firstName": "Robertson",
      "middleName": "Foley",
      "isActive": true,
      "balance": "$2,067.23",
      "age": 29,
      "eyeColor": "blue",
      "gender": "male",
      "company": "SPACEWAX",
      "email": "robertsonfoley@spacewax.com",
      "phone": "+1 (945) 475-2064"
    },
    {
      "firstName": "Yvonne",
      "middleName": "Phelps",
      "isActive": true,
      "balance": "$2,794.22",
      "age": 40,
      "eyeColor": "brown",
      "gender": "female",
      "company": "BLUPLANET",
      "email": "yvonnephelps@bluplanet.com",
      "phone": "+1 (835) 414-2315"
    },
    {
      "firstName": "Poole",
      "middleName": "Hall",
      "isActive": true,
      "balance": "$2,714.13",
      "age": 23,
      "eyeColor": "blue",
      "gender": "male",
      "company": "NETERIA",
      "email": "poolehall@neteria.com",
      "phone": "+1 (968) 412-2765"
    },
    {
      "firstName": "Carey",
      "middleName": "Myers",
      "isActive": true,
      "balance": "$2,340.76",
      "age": 38,
      "eyeColor": "blue",
      "gender": "female",
      "company": "XEREX",
      "email": "careymyers@xerex.com",
      "phone": "+1 (803) 422-2068"
    },
    {
      "firstName": "Robyn",
      "middleName": "Rowland",
      "isActive": true,
      "balance": "$1,069.42",
      "age": 34,
      "eyeColor": "blue",
      "gender": "female",
      "company": "STREZZO",
      "email": "robynrowland@strezzo.com",
      "phone": "+1 (924) 481-2171"
    },
    {
      "firstName": "Chaney",
      "middleName": "Walsh",
      "isActive": true,
      "balance": "$3,605.78",
      "age": 29,
      "eyeColor": "blue",
      "gender": "male",
      "company": "DIGIFAD",
      "email": "chaneywalsh@digifad.com",
      "phone": "+1 (988) 522-3988"
    },
    {
      "firstName": "Russell",
      "middleName": "Bradford",
      "isActive": false,
      "balance": "$1,127.57",
      "age": 26,
      "eyeColor": "blue",
      "gender": "male",
      "company": "SQUISH",
      "email": "russellbradford@squish.com",
      "phone": "+1 (915) 572-3178"
    },
    {
      "firstName": "Marjorie",
      "middleName": "Vinson",
      "isActive": false,
      "balance": "$1,044.49",
      "age": 22,
      "eyeColor": "brown",
      "gender": "female",
      "company": "STRALUM",
      "email": "marjorievinson@stralum.com",
      "phone": "+1 (948) 528-3975"
    },
    {
      "firstName": "Osborn",
      "middleName": "Vaughn",
      "isActive": true,
      "balance": "$3,883.02",
      "age": 35,
      "eyeColor": "green",
      "gender": "male",
      "company": "BIZMATIC",
      "email": "osbornvaughn@bizmatic.com",
      "phone": "+1 (862) 426-2559"
    },
    {
      "firstName": "Ruiz",
      "middleName": "Norton",
      "isActive": false,
      "balance": "$3,954.88",
      "age": 33,
      "eyeColor": "green",
      "gender": "male",
      "company": "CRUSTATIA",
      "email": "ruiznorton@crustatia.com",
      "phone": "+1 (843) 593-2734"
    },
    {
      "firstName": "Gonzalez",
      "middleName": "Langley",
      "isActive": false,
      "balance": "$2,741.66",
      "age": 24,
      "eyeColor": "brown",
      "gender": "male",
      "company": "QUALITEX",
      "email": "gonzalezlangley@qualitex.com",
      "phone": "+1 (876) 491-2552"
    },
    {
      "firstName": "Rosa",
      "middleName": "Walter",
      "isActive": false,
      "balance": "$2,782.98",
      "age": 37,
      "eyeColor": "brown",
      "gender": "female",
      "company": "NUTRALAB",
      "email": "rosawalter@nutralab.com",
      "phone": "+1 (852) 434-3978"
    },
    {
      "firstName": "Hendrix",
      "middleName": "Burton",
      "isActive": false,
      "balance": "$3,101.65",
      "age": 40,
      "eyeColor": "brown",
      "gender": "male",
      "company": "VIASIA",
      "email": "hendrixburton@viasia.com",
      "phone": "+1 (823) 460-2453"
    },
    {
      "firstName": "Acosta",
      "middleName": "Mendoza",
      "isActive": false,
      "balance": "$3,062.76",
      "age": 37,
      "eyeColor": "blue",
      "gender": "male",
      "company": "NETROPIC",
      "email": "acostamendoza@netropic.com",
      "phone": "+1 (996) 419-2619"
    },
    {
      "firstName": "Charlotte",
      "middleName": "Huber",
      "isActive": true,
      "balance": "$1,478.57",
      "age": 24,
      "eyeColor": "blue",
      "gender": "female",
      "company": "DEVILTOE",
      "email": "charlottehuber@deviltoe.com",
      "phone": "+1 (998) 504-2405"
    },
    {
      "firstName": "Sharon",
      "middleName": "Duran",
      "isActive": false,
      "balance": "$3,721.39",
      "age": 25,
      "eyeColor": "blue",
      "gender": "female",
      "company": "COMTOURS",
      "email": "sharonduran@comtours.com",
      "phone": "+1 (835) 586-2085"
    },
    {
      "firstName": "Wynn",
      "middleName": "Fitzgerald",
      "isActive": true,
      "balance": "$3,087.79",
      "age": 20,
      "eyeColor": "blue",
      "gender": "male",
      "company": "UPDAT",
      "email": "wynnfitzgerald@updat.com",
      "phone": "+1 (957) 406-2879"
    }
  ]

export const handlers = [

    // Handles a POST /login request
  
    rest.get('/test', (req,res, ctx) => {
        return res(ctx.json({message: 'Hello World'}
        ))
    }),

    rest.post('/getTableData/:first/:limit', (req, res, ctx) => {
        return res(ctx.json({rows: data, count: data.length}))
    })
  ]