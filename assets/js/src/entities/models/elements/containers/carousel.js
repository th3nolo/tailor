/**
 * Tailor.Models.Carousel
 *
 * The carousel model.
 *
 * @augments Tailor.Models.Container
 */
var $ = Backbone.$,
	ContainerModel = require( './../model-container' ),
	CarouselModel;

CarouselModel = ContainerModel.extend( {

    /**
     * Creates a new template based on the element.
     *
     * @since 1.0.0
     *
     * @param id
     * @param view
     */
    createTemplate : function( id, view ) {
        var isEditing =  view.el.classList.contains( 'is-editing' );

        this.beforeCopyElement( view );

        var $childViewContainer = view.getChildViewContainer( view );
        var $children = $childViewContainer.contents().detach();

        //var $navigation = view.$el.find( '.slick-dots' );
        //var $navigationItems = $navigation.children().detach();
        var $navigation = view.$el.find( '.slick-dots' ).detach();

        this.appendTemplate( id, view );

        $childViewContainer.append( $children );
        //$navigation.append( $navigationItems );
	    $navigation.insertAfter( $childViewContainer );

        this.afterCopyElement( id, view );

        if ( isEditing ) {
            view.el.classList.add( 'is-editing' );
        }
    }

} );

module.exports = CarouselModel;