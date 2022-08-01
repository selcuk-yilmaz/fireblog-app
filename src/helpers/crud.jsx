import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { addDoc } from "firebase/firestore";

export const createBlog = (info) => {
  const cardCollectionRef = collection(db, "users");
  const createCard = async () => {
    await addDoc(cardCollectionRef, {
      imageUrl: info.imageUrl,
      title: info.title,
      date: info.date,
      content: info.content,
      email: info.email,
    });
  };
};

export const useData = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(users);
    };
    getUsers();
  }, []);
  return { users };
};
