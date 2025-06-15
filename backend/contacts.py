import uuid

contacts_data = []

def add_contact(data):
    new_contact = {
        'id': str(uuid.uuid4()),
        'nombre': data['nombre'],
        'apellido': data['apellido'],
        'telefono': data['telefono'],
        'correo': data['correo'],
        'calle': data['calle'],
        'ciudad': data['ciudad'],
        'estado': data['estado'],
        'empresa': data['empresa'],
        'cargo': data['cargo'],
        'notas': data.get('notas', ''),
        'fecha_cumpleanos': data['fecha_cumpleanos']
    }
    contacts_data.append(new_contact)
    return new_contact

def get_contact_by_id(id):
    for contact in contacts_data:
        if contact['id'] == id:
            return contact
    return None

def update_contact(id, data):
    contact = get_contact_by_id(id)
    if contact:
        data.pop('id', None)
        contact.update(data)
        return contact
    return None

def delete_contact(id):
    contact = get_contact_by_id(id)
    if contact:
        contacts_data.remove(contact)
        return True
    return False
