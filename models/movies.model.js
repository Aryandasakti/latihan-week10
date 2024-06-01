const pool = require('../config/db');

async function getAll(){
    try {
        const result = await pool.query(
            `SELECT * FROM movies`
        );

        return result
    } catch(error) {
        throw error
    }
}

async function upload(id, source){
    console.log('Uploading', id, source)
    try {
        const result = await pool.query(
            `UPDATE movies SET photo=$1 WHERE id=$1`,
            [source, id]
        );

        return result
    } catch(error) {
        console.log(error)
        throw error
    }
}

async function getId(id){
    try {
        const result = await pool.query(
            `SELECT * FROM movies WHERE id = $1`,
            [id]
        );

        return result
    } catch(error) {
        throw error
    }
}

async function addAMovie(title, genres, year){
    try {
        const result = await pool.query(
            `INSERT INTO movies (title, genres, year) VALUES ($1, $2, $3)`,
            [title, genres, year]
        );

        return result
    } catch(error) {
        throw error
    }
}

async function deleteAMovie(id){
    try {
        const result = await pool.query(
            `DELETE FROM movies WHERE id = $1`,
            [id]
        );

        return result
    } catch(error) {
        throw error
    }
}

async function updateAMovie(id, title, genres, year){
    try {
        const result = await pool.query(
            `UPDATE movies SET title = $1, genres = $2, year = $3 WHERE id = $4`,
            [title, genres, year, id]
        );

        return result
    } catch(error) {
        throw error
    }
}

module.exports = { getAll, upload, getId, addAMovie, deleteAMovie, updateAMovie }