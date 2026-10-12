//import express validator
const { body, check } = require('express-validator');

// Definisikan validasi untuk create post
const validatePost = [
    check('image')
    .custom((value, { req }) => {
      // Check if file is uploaded during creation or update
      if (req.method === 'POST' && !req.file) {
        // If creating (POST) and no file is uploaded, throw an error
        throw new Error('Gambar wajib diunggah');
      }

      // No need to check image on update if not provided
      return true;
    }),
    body('title').notEmpty().withMessage('Judul wajib diisi'),
    body('content').notEmpty().withMessage('Isi postingan wajib diisi'),
];

module.exports = { validatePost }
