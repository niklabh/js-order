const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const { uid } = require('uid');

router.post('/orders', async (req, res, next) => {
  try {
    const id = uid(25);
    const db = admin.firestore();
    const orderRef = db.collection('orders').doc(id);

    const payload = {
      address: {
        city: req.body.address?.city,
        country: req.body.address?.country,
        street: req.body.address?.street,
        zip: req.body.address?.zip
      },
      bookingDate: req.body.bookingDate,
      customer: {
        email: req.body.customer?.email,
        name: req.body.customer?.name,
        phone: req.body.customer?.phone
      },
      title: req.body.title,
      uid: req.body.uid
    };

    await orderRef.set(payload);

    res.json({
      id,
      ...payload
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

router.put('/orders/:id', async (req, res, next) => {
  try {
    const db = admin.firestore();
    const orderRef = db.collection('orders').doc(req.params.id);

    const payload = {
      address: {
        city: req.body.address?.city,
        country: req.body.address?.country,
        street: req.body.address?.street,
        zip: req.body.address?.zip
      },
      bookingDate: req.body.bookingDate,
      customer: {
        email: req.body.customer?.email,
        name: req.body.customer?.name,
        phone: req.body.customer?.phone
      },
      title: req.body.title,
      uid: req.body.uid
    };

    await orderRef.update(payload);

    res.json({
      id: req.params.id,
      ...payload
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

module.exports = router;
