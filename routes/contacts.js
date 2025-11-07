const router = require("express").Router();
const contactsController = require("../controllers/contacts");

// #swagger.tags = ['Contacts']
// #swagger.description = 'Get all contacts'
router.get("/", contactsController.getContacts);

// #swagger.tags = ['Contacts']
// #swagger.description = 'Get contact by ID'
// #swagger.parameters['id'] = { description: 'Contact ID' }
router.get("/:id", contactsController.getContactById);

// #swagger.tags = ['Contacts']
// #swagger.description = 'Create a new contact'
/* #swagger.parameters['body'] = {
    in: 'body',
    description: 'Contact information',
    required: true,
    schema: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        favoriteColor: "Blue",
        birthday: "1990-05-15"
    }
} */
router.post("/", contactsController.createContact);

// #swagger.tags = ['Contacts']
// #swagger.description = 'Update a contact by ID'
// #swagger.parameters['id'] = { description: 'Contact ID' }
/* #swagger.parameters['body'] = {
    in: 'body',
    description: 'Updated contact information',
    required: true,
    schema: {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@example.com",
        favoriteColor: "Green",
        birthday: "1992-08-20"
    }
} */
router.put("/:id", contactsController.updateContact);

// #swagger.tags = ['Contacts']
// #swagger.description = 'Delete a contact by ID'
// #swagger.parameters['id'] = { description: 'Contact ID' }
router.delete("/:id", contactsController.deleteContact);

module.exports = router;