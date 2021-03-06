module.exports.postCreateItems = (req, res, next) => {
    let errors = [];

    if (!req.body.title) {
        errors.push('Bạn chưa nhập title.');
    }

    if (!req.body.epUpdate) {
        errors.push('Bạn chưa nhập tập mới nhất.');
    }

    if (!req.body.epLast) {
        errors.push('Bạn chưa nhập tập kết thúc.');
    }

    if (!req.body.time) {
        errors.push('Bạn chưa nhập thời gian anime');
    }

    if (!req.file) {
        errors.push('Bạn chưa tải Image.');
    }

    if (!req.body.urlvideo) {
        errors.push('Bạn chưa tải video lên');
    }

    if (!req.body.epvideo) {
        errors.push('Bạn chưa nhập url ep');
    }

    if (!req.body.url) {
        errors.push('Bạn chưa nhập url');
    }

    if (errors.length > 0) {
        res.render('itemsUpdate/create', {
            errors: errors,
            values: req.body
        });
        return;
    }
    res.locals.success = true;
    next();
};