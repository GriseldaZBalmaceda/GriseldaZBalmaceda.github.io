


//UI Controller
var UIController=(function(){
    var DOMstrings={
        container:'.all_projects'
    }
    return {
        getDomStrings:function(){

            return DOMstrings;
        }
    }
})();




//Glopal App controller
var controller=(function(UICtrl){
    var setUpEventListeners=function(){
        var DOMStrings = UICtrl.getDomStrings();
        console.log(DOMStrings.container)
        document.querySelector(DOMStrings.container).addEventListener('click',ctrlAddImages)
    };


ctrlAddImages=function(event){
    var projectId=event.target.parentNode.parentNode.parentNode.parentNode.id
    console.log(projectId)
};
return{
    init: function () {
        console.log('Application has started.');

        setUpEventListeners();
    }
}
})(UIController);
controller.init();