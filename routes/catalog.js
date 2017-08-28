var express = require('express');
var router = express.Router();

// require controller modules
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var book_instance_controller = require('../controllers/bookinstanceController');

// BOOK ROUTES

// get catalog home page
router.get('/', book_controller.index);

// get request for creating a book. NOTE this must come before routes that display book (uses id)
router.get('/book/create', book_controller.book_create_get);

// post request for creating a book
router.post('/book/create', book_controller.book_create_post);

// get request for delete a book
router.get('/book/:id/delete', book_controller.book_delete_get);

// post request for delete a book
router.post('/book/:id/delete', book_controller.book_delete_post);

// get request to update a book
router.get('/book/:id/update', book_controller.book_update_get);

// post request to update a book
router.post('/book/:id/update', book_controller.book_update_post);

// get request for one book
router.get('/book/:id', book_controller.book_detail);

// get request for list of all book items
router.get('/books', book_controller.book_list);

// AUTHOR ROUTES

// get request for creating author. 
router.get('/author/create', author_controller.author_create_get);

// post request for creating author
router.post('/author/create', author_controller.author_create_post);

// get request to delete author
router.get('/author/:id/delete', author_controller.author_delete_get);

// post request to delete author
router.post('/author/:id/delete', author_controller.author_delete_post);

// get request to update author
router.get('/author/:id/update', author_controller.author_update_get);

// post request to update author
router.post('/author/:id/update', author_controller.author_update_post);

// get request for one author
router.get('/author/:id', author_controller.author_detail)

// get request to get all author items
router.get('/authors', author_controller.author_list);

// GENRE ROUTES

// get request for creating a genre
router.get('/genre/create', genre_controller.genre_create_get);

// post request for creating a genre
router.post('/genre/create', genre_controller.genre_create_post);

// get request for deleting a genre
router.get('/genre/:id/delete', genre_controller.genre_delete_get);

// post request for deleting a genre
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// get request for updating a genre
router.get('/genre/:id/update', genre_controller.genre_update_get);

// post request for updating a genre
router.post('/genre/:id/update', genre_controller.genre_update_post);

// get request for one genre item
router.get('/genre/:id', genre_controller.genre_detail);

// get request to get all genre items
router.get('/genres', genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

/* GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id) */
router.get('/bookinstance/create', book_instance_controller.bookinstance_create_get);

/* POST request for creating BookInstance. */
router.post('/bookinstance/create', book_instance_controller.bookinstance_create_post);

/* GET request to delete BookInstance. */
router.get('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_get);

// POST request to delete BookInstance
router.post('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_post);

/* GET request to update BookInstance. */
router.get('/bookinstance/:id/update', book_instance_controller.bookinstance_update_get);

// POST request to update BookInstance
router.post('/bookinstance/:id/update', book_instance_controller.bookinstance_update_post);

/* GET request for one BookInstance. */
router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

/* GET request for list of all BookInstance. */
router.get('/bookinstances', book_instance_controller.bookinstance_list);

module.exports = router;