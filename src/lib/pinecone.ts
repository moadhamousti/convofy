// import { Pinecone } from '@pinecone-database/pinecone';

// // Initialize a client
// export const pinecone = new Pinecone({
//     apiKey: process.env.PINECONE_API_KEY!,
// });

// // Create a serverless index
// const indexName = "convofy"
// await pinecone.createIndex({
//   name: indexName,
//   dimension: 2,
//   metric: 'cosine',
//   spec: { 
//     serverless: { 
//       cloud: 'aws', 
//       region: 'us-east-1' 
//     }
//   } 
// }); 



import { PineconeClient } from '@pinecone-database/pinecone'

export const getPineconeClient = async () => {
  const client = new PineconeClient()

  await client.init({
    apiKey: process.env.PINECONE_API_KEY!,
    environment: 'us-east1',
  })

  return client
}