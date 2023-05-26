import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from ".";

export interface ToDo {
  title: string;
  status: "to_do" | "done";
}

export class FirebaseService {
  static async getToDos() {
    const toDos: ToDo[] = [];
    (await getDocs(collection(db, "to_do"))).forEach((snapshot) =>
      toDos.push(snapshot.data() as ToDo)
    );
    return toDos;
  }

  static async createToDo(todo: ToDo) {
    await fetch("/api/create_to_do", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }
}
