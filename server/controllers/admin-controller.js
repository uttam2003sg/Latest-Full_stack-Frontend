const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const Service = require("../models/service-model"); // Make sure this exists

// ===================== Users =====================

// Get all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Get single user by ID
const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// Update user by ID
const updateUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedData = await User.updateOne({ _id: id }, { $set: updatedUserData });
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

// Delete user by ID
const deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

// ===================== Contacts =====================

// Get all contacts
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contacts Found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

// Delete contact by ID
const deleteContactById = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

// ===================== Services =====================

// Get all services
const getAllServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    if (!services || services.length === 0) {
      return res.status(404).json({ message: "No Services Found" });
    }
    return res.status(200).json(services);
  } catch (error) {
    next(error);
  }
};

// Get single service by ID
const getServiceById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ message: "Service Not Found" });
    }
    return res.status(200).json(service);
  } catch (error) {
    next(error);
  }
};

// Create a new service
const createService = async (req, res, next) => {
  try {
    const { service, description, price, provider, image } = req.body;

    if (!service || !description || !price || !provider) {
      return res.status(400).json({ message: "All fields except image are required" });
    }

    const newService = await Service.create({ service, description, price, provider, image });
    return res.status(201).json(newService);
  } catch (error) {
    next(error);
  }
};

const updateServiceById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedData = req.body; // Can include image optionally

    const updatedService = await Service.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedService) return res.status(404).json({ message: "Service Not Found" });
    return res.status(200).json(updatedService);
  } catch (error) {
    next(error);
  }
};


// Delete service by ID
const deleteServiceById = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Service.deleteOne({ _id: id });
    return res.status(200).json({ message: "Service Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllContacts,
  deleteContactById,
  getAllServices,
  getServiceById,
  createService,
  updateServiceById,
  deleteServiceById,
};
