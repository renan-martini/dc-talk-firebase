// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "@/services/firebase";
import { FirebaseService } from "@/services/firebase/firebase.service";
import { addDoc, collection } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const todo = req.body;
  const docRef = await addDoc(collection(db, "to_do"), todo);

  res.status(200).json({ success: true });
}
