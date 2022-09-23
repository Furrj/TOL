const express = require('express');
const app = express();
const router = express.Router();
const sephira = require('../data/objects');
const {keter, chokma, bina, chesed, gebura, tiferet, netzach, hod, yesod, malkuth} = sephira;

router.get('/', (req, res) => {
    res.render('tol', {sephira});
})

// SEPHIRA
router.get(('/keter'), (req, res) => {
    res.render('sephira/keter', {keter});
})

router.get(('/chokma'), (req, res) => {
    res.render('sephira/chokma', {chokma});
})

router.get(('/bina'), (req, res) => {
    res.render('sephira/bina', {bina});
})

router.get(('/chesed'), (req, res) => {
    res.render('sephira/chesed', {chesed});
})

router.get(('/gebura'), (req, res) => {
    res.render('sephira/gebura', {gebura});
})

router.get(('/tiferet'), (req, res) => {
    res.render('sephira/tiferet', {tiferet});
})

router.get(('/netzach'), (req, res) => {
    res.render('sephira/netzach', {netzach});
})

router.get(('/hod'), (req, res) => {
    res.render('sephira/hod', {hod});
})

router.get(('/yesod'), (req, res) => {
    res.render('sephira/yesod', {yesod});
})

router.get(('/malkuth'), (req, res) => {
    res.render('sephira/malkuth', {malkuth});
})

//PATHS
router.get('/aleph', (req, res) => {
    res.render('paths/aleph');
})

router.get('/beth', (req, res) => {
    res.render('paths/beth');
})

router.get('/gimel', (req, res) => {
    res.render('paths/gimel');
})

router.get('/daleth', (req, res) => {
    res.render('paths/daleth');
})

router.get('/heh', (req, res) => {
    res.render('paths/heh');
})

router.get('/vav', (req, res) => {
    res.render('paths/vav');
})

router.get('/zain', (req, res) => {
    res.render('paths/zain');
})

router.get('/cheth', (req, res) => {
    res.render('paths/cheth');
})

router.get('/teth', (req, res) => {
    res.render('paths/teth');
})

router.get('/yod', (req, res) => {
    res.render('paths/yod');
})

router.get('/kaph', (req, res) => {
    res.render('paths/kaph');
})

router.get('/lamed', (req, res) => {
    res.render('paths/lamed');
})

router.get('/mem', (req, res) => {
    res.render('paths/mem');
})

router.get('/nun', (req, res) => {
    res.render('paths/nun');
})

router.get('/samekh', (req, res) => {
    res.render('paths/samekh');
})

router.get('/ayin', (req, res) => {
    res.render('paths/ayin');
})

router.get('/peh', (req, res) => {
    res.render('paths/peh');
})

router.get('/tzaddi', (req, res) => {
    res.render('paths/tzaddi');
})

router.get('/qoph', (req, res) => {
    res.render('paths/qoph');
})

router.get('/resh', (req, res) => {
    res.render('paths/resh');
})

router.get('/shin', (req, res) => {
    res.render('paths/shin');
})

router.get('/tau', (req, res) => {
    res.render('paths/tau');
})

module.exports = router;

