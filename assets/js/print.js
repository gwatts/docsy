(function($) {
    var close = function() {
      document.body.removeChild(this.__container__);
    };

    $('#print').click(function(e) {
        e.preventDefault();
        var $el = $('<iframe style="position: fixed; right: 0px; bottom: 0px; width: 0px; height: 0px">');
        $el.on('load', function() {
            this.contentWindow.__container__ = this;
            this.contentWindow.onbeforeunload = close;
            this.contentWindow.onafterprint = close;
            this.contentWindow.focus();
            this.contentWindow.print();
        });
        $el.attr('src', $(this).attr('href'));
        $('body').append($el);
        return false;
    });
})(jQuery);
