import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogTitle, DialogContent } from "@mui/material";
import axios from "../axios";
import type { Contact } from "../components/ContactForm";
import ContactTable from "../components/ContactTable";
import ContactForm from "../components/ContactForm";

const Home: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [editingContact, setEditingContact] = useState<Contact | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        const res = await axios.get("/contacts");
        setContacts(res.data);
    };

    const handleAdd = () => {
        setEditingContact(null);
        setDialogOpen(true);
    };

    const handleEdit = (contact: Contact) => {
        setEditingContact(contact);
        setDialogOpen(true);
    };

    const handleSubmit = async (data: Contact) => {
        if (editingContact?.id) {
            await axios.put(`/contacts/${editingContact.id}`, data);
        } else {
            await axios.post("/contacts", data);
        }
        setDialogOpen(false);
        fetchContacts();
    };

    return (
        <div>
            <h1>Lista de Contactos</h1>
            <Button variant="contained" onClick={handleAdd} sx={{ mb: 2 }}>
                AGREGAR CONTACTO
            </Button>
            <ContactTable contacts={contacts} onEdit={handleEdit} />

            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
                <DialogTitle>{editingContact ? "Editar Contacto" : "Agregar Contacto"}</DialogTitle>
                <DialogContent>
                    <ContactForm
                        onSubmit={handleSubmit}
                        initialData={editingContact || undefined}
                        submitLabel={editingContact ? "Guardar Cambios" : "Agregar Contacto"}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Home;
