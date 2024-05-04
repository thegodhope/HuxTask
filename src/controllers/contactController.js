const Contact = require("../models/contactModel");
const { successResponse, errorResponse } = require("../utils/response");

exports.createContact = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber } = req.body;

    // Create a new contact
    const contact = new Contact({
      firstName,
      lastName,
      phoneNumber,
      user: req.user._id, // user ID is stored in req.user from authentication
    });

    // Save the contact to the database
    const savedContacts = await contact.save();

    // Send a success response
    return successResponse(
      res,
      savedContacts,
      201,
      "Contact created successfully"
    );
  } catch (error) {
    // Handle errors
    console.error(error);
    return errorResponse(
      res,
      500,
      "An error occurred while creating the contact"
    );
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    // Retrieve all contacts associated with the authenticated user
    const contacts = await Contact.find({ user: req.user._id });

    return successResponse(
      res,
      contacts,
      200,
      "Contacts retrieved successfully"
    );
  } catch (error) {
    console.error(error);
    return errorResponse(
      res,
      500,
      "An error occurred while retrieving contacts"
    );
  }
};

exports.getContactById = async (req, res) => {
  try {
    const contactId = req.params.contactId;

    // Find the contact by ID and user ID
    const contact = await Contact.findOne({
      _id: contactId,
      user: req.user._id,
    });

    // If the contact is not found, return 404
    if (!contact) {
      return errorResponse(res, 404, "Contact not found");
    }

    return successResponse(res, contact, 200, "Contact retrieved successfully");
  } catch (error) {
    console.error(error);
    return errorResponse(
      res,
      500,
      "An error occurred while retrieving the contact"
    );
  }
};

exports.editContact = async (req, res) => {
  try {
    const contactId = req.params.contactId;
    const { firstName, lastName, phoneNumber } = req.body;

    // Find the contact by ID and user ID
    let contact = await Contact.findOne({ _id: contactId, user: req.user._id });

    // If the contact is not found, return 404
    if (!contact) {
      return errorResponse(res, 404, "Contact not found");
    }

    // Update the contact fields
    contact.firstName = firstName;
    contact.lastName = lastName;
    contact.phoneNumber = phoneNumber;

    // Save the updated contact
    await contact.save();

    return successResponse(res, contact, 200, "Contact updated successfully");
  } catch (error) {
    console.error(error);
    return errorResponse(
      res,
      500,
      "An error occurred while updating the contact"
    );
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contactId = req.params.contactId;
    console.log(contactId);

    // Find the contact by ID and user ID
    const contact = await Contact.findOneAndDelete({
      _id: contactId,
      user: req.user._id,
    });

    // If the contact is not found, return 404
    if (!contact) {
      return errorResponse(res, 404, "Contact not found");
    }

    return successResponse(res, null, 200, "Contact deleted successfully");
  } catch (error) {
    console.error(error);
    return errorResponse(
      res,
      500,
      "An error occurred while deleting the contact"
    );
  }
};
