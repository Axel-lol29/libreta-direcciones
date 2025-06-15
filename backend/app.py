from flask import Flask, request, jsonify
from flask_cors import CORS
from contacts import contacts_data, get_contact_by_id, add_contact, update_contact, delete_contact

app = Flask(__name__)
CORS(app)

@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    return jsonify(contacts_data)

@app.route('/api/contacts', methods=['POST'])
def create_contact():
    data = request.get_json()
    new_contact = add_contact(data)
    return jsonify(new_contact), 201

@app.route('/api/contacts/<id>', methods=['PUT', 'PATCH'])
def edit_contact(id):
    data = request.get_json()
    updated_contact = update_contact(id, data)
    if updated_contact:
        return jsonify(updated_contact)
    return jsonify({'message': 'Contacto no encontrado'}), 404

@app.route('/api/contacts/<id>', methods=['DELETE'])
def eliminar_contacto(id):
    success = delete_contact(id)
    if success:
        return jsonify({'message': 'Contacto eliminado'})
    return jsonify({'message': 'Contacto no encontrado'}), 404

if __name__ == '__main__':
    app.run(debug=True)
