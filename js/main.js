
requirejs.config({
    baseUrl: './js/lib',
    paths: {
        'main':'../main',
        'd3': '../../modules/d3.min'
    }
});

requirejs(['TreeIndented'], function(treeIndentedClass) {
    new treeIndentedClass.TreeIndented().displayNodes();
});