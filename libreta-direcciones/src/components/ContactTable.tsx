import React from "react";
import type { Contact } from "./ContactForm";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from "@mui/material";

interface ContactTableProps {
    contacts: Contact[];
    onEdit: (contact: Contact) => void;
}

const ContactTable: React.FC<ContactTableProps> = ({ contacts, onEdit }) => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Apellido</TableCell>
                    <TableCell>Teléfono</TableCell>
                    <TableCell>Correo</TableCell>
                    <TableCell>Empresa</TableCell>
                    <TableCell>Cargo</TableCell>
                    <TableCell>Acciones</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {contacts.map((contact) => (
                    <TableRow key={contact.id}>
                        <TableCell>{contact.nombre}</TableCell>
                        <TableCell>{contact.apellido}</TableCell>
                        <TableCell>{contact.telefono}</TableCell>
                        <TableCell>{contact.correo}</TableCell>
                        <TableCell>{contact.empresa}</TableCell>
                        <TableCell>{contact.cargo}</TableCell>
                        <TableCell>
                            <Button variant="outlined" color="primary" onClick={() => onEdit(contact)}>
                                Editar
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default ContactTable;
