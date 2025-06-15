import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

export interface Contact {
    id?: string;
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

interface ContactFormProps {
    onSubmit: (data: Contact) => void;
    initialData?: Partial<Contact>;
    submitLabel?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
    onSubmit,
    initialData,
    submitLabel = "Agregar Contacto",
}) => {
    const { handleSubmit, control, reset } = useForm<Contact>({
        defaultValues: initialData || {
            nombre: "",
            apellido: "",
            telefono: "",
            correo: "",
            calle: "",
            ciudad: "",
            estado: "",
            empresa: "",
            cargo: "",
            notas: "",
            fecha_cumpleanos: "",
        },
    });

    useEffect(() => {
        reset(initialData || {
            nombre: "",
            apellido: "",
            telefono: "",
            correo: "",
            calle: "",
            ciudad: "",
            estado: "",
            empresa: "",
            cargo: "",
            notas: "",
            fecha_cumpleanos: "",
        });
    }, [initialData, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" flexWrap="wrap" gap={2}>
                <Controller name="nombre" control={control} render={({ field }) => (
                    <TextField {...field} label="Nombre" required />
                )} />
                <Controller name="apellido" control={control} render={({ field }) => (
                    <TextField {...field} label="Apellido" required />
                )} />
                <Controller name="telefono" control={control} render={({ field }) => (
                    <TextField {...field} label="Teléfono" required />
                )} />
                <Controller name="correo" control={control} render={({ field }) => (
                    <TextField {...field} label="Correo" required />
                )} />
                <Controller name="calle" control={control} render={({ field }) => (
                    <TextField {...field} label="Calle" />
                )} />
                <Controller name="ciudad" control={control} render={({ field }) => (
                    <TextField {...field} label="Ciudad" />
                )} />
                <Controller name="estado" control={control} render={({ field }) => (
                    <TextField {...field} label="Estado" />
                )} />
                <Controller name="empresa" control={control} render={({ field }) => (
                    <TextField {...field} label="Empresa" />
                )} />
                <Controller name="cargo" control={control} render={({ field }) => (
                    <TextField {...field} label="Cargo" />
                )} />
                <Controller name="notas" control={control} render={({ field }) => (
                    <TextField {...field} label="Notas" />
                )} />
                <Controller name="fecha_cumpleanos" control={control} render={({ field }) => (
                    <TextField {...field} label="Cumpleaños" type="date" InputLabelProps={{ shrink: true }} />
                )} />
            </Box>
            <Box mt={2}>
                <Button type="submit" variant="contained" color="primary">
                    {submitLabel}
                </Button>
            </Box>
        </form>
    );
};

export default ContactForm;
