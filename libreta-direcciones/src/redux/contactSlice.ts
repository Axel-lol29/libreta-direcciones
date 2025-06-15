import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface Contact {
    id: string;
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    calle: string;
    ciudad: string;
    estado: string;
    empresa: string;
    cargo: string;
    notas: string;
    fecha_cumpleanos: string;
}

interface ContactState {
    contacts: Contact[];
}

const initialState: ContactState = {
    contacts: [],
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setContacts: (state, action: PayloadAction<Contact[]>) => {
            state.contacts = action.payload;
        },
        addContact: (state, action: PayloadAction<Contact>) => {
            state.contacts.push(action.payload);
        },

    },
});

export const { setContacts, addContact } = contactSlice.actions;
export default contactSlice.reducer;
