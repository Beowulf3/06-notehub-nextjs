import axios from "axios";

import { apiKey, BASE_URL } from "../lib/api/api";
import { Note } from "@/types/note";

axios.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;

export const fetchNoteById = async (id:string): Promise<Note> => {
    const response = await axios.get<Note>(`${BASE_URL}/${id}`);
    return response.data;
}