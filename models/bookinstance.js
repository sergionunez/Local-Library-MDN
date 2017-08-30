var mongoose = require('mongoose');
var momment = require('moment');

var Schema = mongoose.Schema;

var BookInstanceSchema = Schema(
    {
        book: { type: Schema.ObjectId, ref: 'Book', required: true }, //reference to the assoiated book
        imprint: { type: String, required: true },
        status: { type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance' },
        due_back: { type: Date, default: Date.now },
    }
);

// virtual for book instance url
BookInstanceSchema
    .virtual('url')
    .get(function () {
        return '/catalog/bookinstance/' + this._id;
    });

BookInstanceSchema
    .virtual('due_back_formated')
    .get(function () {
        return momment(this.due_back).format('MMMM Do, YYYY');
    });

// export model
module.exports = mongoose.model( 'BookInstance', BookInstanceSchema);