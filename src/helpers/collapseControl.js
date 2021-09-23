let collapseControl = function () {
    let animationTime = 200;
    $('body').on('click', '.collapse-control', function () {
        let target = $(this).data('target');

        if (!target) return;

        let $target = $(target);
        if ($target.hasClass('collapsed')) {
            $target.removeClass('collapsed');
            $target.slideDown(animationTime);
            return;
        }
        $target.addClass('collapsed');
        $target.slideUp(animationTime);
        return;
    });
};
module.exports = collapseControl;
