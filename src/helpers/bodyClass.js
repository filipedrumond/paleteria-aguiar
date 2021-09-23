let bodyClass = function (
    $,
    layout = 'l-layout',
    url = 'window.location.pathname'
) {
    let classNames = url.split('/');
    $('body').prop('class', '');
    if (layout) $('body').addClass(layout);
    if (classNames[1] === '') $('body').addClass('r-index');
    classNames.forEach((e) => {
        if (!e) return;
        let className = `r-${e}`;
        $('body').addClass(className);
    });
};
module.exports = bodyClass;
