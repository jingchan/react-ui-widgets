var $ = require('jquery');
var jqueryUi = require('jquery-ui');

var exports = module.exports = CreateDraggableMixin;

function CreateDraggableMixin( options ){
	options = options || {};
	
	return {
		componentDidMount: function(a, b, c){
            $(this.getDOMNode()).draggable(options);
		},
		componentWillUnmount: function(){
            $(this.getDOMNode()).draggable( 'disable' );
		}
	}
}
