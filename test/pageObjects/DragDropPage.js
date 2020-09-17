class DragDropPage{

    get sourceElement() {return $('div#draggable')}
    get trgetDestination() {return $('div#simpleDropContainer>div#droppable')}


    dragAndDropFunction(){
        this.sourceElement.dragAndDrop(this.trgetDestination)
    }


}
export default new DragDropPage();
