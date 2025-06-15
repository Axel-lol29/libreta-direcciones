# Libreta de Direcciones

Este es un proyecto de práctica que implementa una libreta de direcciones con un backend en Python (Flask) y un frontend en React + TypeScript + Material UI.

## ¿De qué trata este proyecto?
Este permite agregar, editar y listar contactos en una tabla con diseño profesional usando el Material UI.

## Tecnologías aplicadas

- **Backend:** Python, Flask, Flask-CORS.
- **Frontend:** Vite, React, TypeScript, Material UI (MUI), Axios, React Hook Form.
- **Control de versiones:** Git y GitHub.

## Instalación y ejecución

### 1. Comandos usados para el clonar el repositorio

```bash
git clone https://github.com/Axel-lol29/libreta-direcciones.git
cd libreta-direcciones

## Cómo ejecutar el Backend (Flask)

cd backend
python -m venv venv
venv\Scripts\activate        # En Windows
pip install flask flask-cors
python app.py

## Cómo ejecutar el frontend (React + Vite)

cd libreta-direcciones
npm install
npm install @mui/material @emotion/react @emotion/styled react-hook-form axios react-router-dom
npm run dev

## Host para poner en el navegador.
http://localhost:5173/

