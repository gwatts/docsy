(function($) {
    var setPrint = function() {
      this.contentWindow.__container__ = this;
      this.contentWindow.onbeforeunload = closePrint;
      this.contentWindow.onafterprint = closePrint;
      this.contentWindow.focus(); // Required for IE
      this.contentWindow.print();
      console.log("LOaded");
    };
    function closePrint () {
      document.body.removeChild(this.__container__);
      };

    $('#print').click(function(e) {
        console.log("PRINT");
        e.preventDefault();
        var $el = $('<iframe style="position: fixed; right: 0px; bottom: 0px; width: 0px; height: 0px">');
        $el.on('load', function() {
      this.contentWindow.__container__ = this;
      this.contentWindow.onbeforeunload = closePrint;
      this.contentWindow.onafterprint = closePrint;
      this.contentWindow.focus(); // Required for IE
      this.contentWindow.print();
      console.log("LOaded");
        });
        $el.attr('src', 'http://localhost:1313/docs/adding-content/print/');
        $('body').append($el);
        return false;
    });
})(jQuery);
