const express = require("express");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

const router = express.Router();

// ===================== User Routes =====================
router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);

router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminController.getUserById);

router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

// ===================== Contact Routes =====================
router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.getAllContacts);

router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

// ===================== Service Routes =====================

// Get all services
router
  .route("/services")
  .get(authMiddleware, adminMiddleware, adminController.getAllServices);

// Get single service by ID
router
  .route("/services/:id")
  .get(authMiddleware, adminMiddleware, adminController.getServiceById);

// Create new service
router
  .route("/services")
  .post(authMiddleware, adminMiddleware, adminController.createService);

// Update service by ID
router
  .route("/services/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateServiceById);

// Delete service by ID
router
  .route("/services/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteServiceById);

module.exports = router;
