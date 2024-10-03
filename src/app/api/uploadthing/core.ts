import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: '4MB' } })
    .middleware(async ({ req }) => {
      const { getUser } = getKindeServerSession()
      const user = await getUser()

      // Check if the user is authenticated
      if (!user || !user.id) {
        throw new Error('Unauthorized');
      }

      // Return userId to be used in the upload process
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const createdFile = await db.file.create({
        data: {
          key: file.key,
          name: file.name,
          userId: metadata.userId,
          // url: `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.key}`,
          url: file.url,
          uploadStatus: 'PROCESSING',
        },
      });

      console.log('File upload complete:', createdFile);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
