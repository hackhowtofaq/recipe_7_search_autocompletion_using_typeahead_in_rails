<script type="text/javascript" charset="utf-8">

var engine = new Bloodhound({
  remote: '<%= ajaxGallerySearch_path %>?q=%QUERY',
  datumTokenizer: function(d) {
    return Bloodhound.tokenizers.whitespace(d.val);
  },
  queryTokenizer: Bloodhound.tokenizers.whitespace
});


engine.initialize();


// instantiate the typeahead UI
$('input#search').typeahead(
{
  highlight: true;
  limit: 10
},
{
  name: "value",

  // `ttAdapter` wraps the suggestion engine in an adapter that
  // is compatible with the typeahead jQuery plugin
  source: engine.ttAdapter(),
  templates {
    suggestion: Handlebars.compile('<p>{{value}} {{type}}</p>')
  }

}
);



</script>
