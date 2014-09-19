<script type="text/javascript" charset="utf-8">

var engine = new Bloodhound({
  remote: '<%= ajaxSearch_galleries_path %>?q=%QUERY',
  datumTokenizer: function(d) {
    return Bloodhound.tokenizers.whitespace(d.val);
  },
  queryTokenizer: Bloodhound.tokenizers.whitespace
});


engine.initialize();


// instantiate the typeahead UI
$('input#search').typeahead(
{
  highlight: true,
  limit: 10
},
{
  //name: 'val',

  // `ttAdapter` wraps the suggestion engine in an adapter that
  // is compatible with the typeahead jQuery plugin
  source: engine.ttAdapter(),
  templates: {
    suggestion: Handlebars.compile('<p><img src="{{image_path}}" height="142" width="142"/> {{name}} {{description}}</p>')
  }

}

).bind("typeahead:selected", function(obj, datum, name) {
  console.log(obj, datum, name);
  window.location.href = datum.url;
});



</script>
